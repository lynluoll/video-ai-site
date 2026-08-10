#!/usr/bin/env python3
"""Local preview server. Takes its port from $PORT so the harness can assign one."""
import functools, http.server, os, pathlib, socketserver

ROOT = pathlib.Path(__file__).parent
PORT = int(os.environ.get("PORT", "8778"))


class Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        t = super().guess_type(path)
        return "text/html; charset=utf-8" if t == "text/html" else t

    def end_headers(self):
        # index.html changes constantly during a build session; never let it cache.
        if self.path in ("/", "/index.html"):
            self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), functools.partial(Handler, directory=str(ROOT))) as srv:
        print(f"serving on http://localhost:{PORT}")
        srv.serve_forever()
