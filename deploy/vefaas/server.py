from __future__ import annotations

import os
import re
import shutil
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent
SITE_ROOT = ROOT / "site"
RANGE_PATTERN = re.compile(r"bytes=(\d*)-(\d*)$")


class SiteHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        super().end_headers()

    def send_head(self):
        request_path = urlsplit(self.path).path
        path = Path(self.translate_path(request_path))

        if path.is_dir():
            if not request_path.endswith("/"):
                self.send_response(301)
                self.send_header("Location", request_path + "/")
                self.send_header("Content-Length", "0")
                self.end_headers()
                return None
            path = path / "index.html"

        if not path.is_file():
            if "." not in Path(request_path).name:
                path = SITE_ROOT / "index.html"
            else:
                self.send_error(404, "File not found")
                return None

        try:
            source = path.open("rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        stat = path.stat()
        size = stat.st_size
        content_type = self.guess_type(str(path))
        byte_range = self.headers.get("Range")

        if byte_range:
            match = RANGE_PATTERN.fullmatch(byte_range.strip())
            if not match:
                source.close()
                self.send_error(416, "Invalid byte range")
                return None

            start_text, end_text = match.groups()
            if not start_text:
                suffix = int(end_text or "0")
                start = max(0, size - suffix)
                end = size - 1
            else:
                start = int(start_text)
                end = min(int(end_text), size - 1) if end_text else size - 1

            if start >= size or start > end:
                source.close()
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{size}")
                self.send_header("Content-Length", "0")
                self.end_headers()
                return None

            self._requested_range = (start, end)
            self.send_response(206)
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
            content_length = end - start + 1
        else:
            self._requested_range = None
            self.send_response(200)
            content_length = size

        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(content_length))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Last-Modified", self.date_time_string(stat.st_mtime))

        if request_path.startswith("/assets/"):
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        elif request_path.startswith("/media/"):
            self.send_header("Cache-Control", "public, max-age=3600")
        else:
            self.send_header("Cache-Control", "no-cache")

        self.end_headers()
        return source

    def copyfile(self, source, outputfile) -> None:
        if self._requested_range is None:
            shutil.copyfileobj(source, outputfile)
            return

        start, end = self._requested_range
        source.seek(start)
        remaining = end - start + 1
        while remaining:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)


def main() -> None:
    port = int(os.environ.get("PORT", "8080"))
    server = ThreadingHTTPServer(("0.0.0.0", port), SiteHandler)
    server.serve_forever()


if __name__ == "__main__":
    main()
