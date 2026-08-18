import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Type system: Inter for UI/text, JetBrains Mono for figures and code.
   Both self-hosted via next/font. The variable names are kept
   (--font-geist-sans / --font-geist-mono) so nothing in the 14k-line
   stylesheet needs renaming; the fallback stacks are declared here so the
   variables are complete on their own (a `var(--x), "PingFang SC"` chain
   after a variable that already ends in `sans-serif` never reaches CJK). */
const fontTech = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Roboto", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
});
const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  fallback: ["Fira Code", "SF Mono", "Consolas", "monospace"],
});

const styleLoadGateCss = `
  html.styles-pending {
    min-height: 100%;
    background: #f7f8fb;
  }

  html.styles-pending body {
    visibility: hidden;
  }

  html.styles-pending::before {
    content: "Loading experience\\2026";
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    display: grid;
    place-items: center;
    color: #2f5bff;
    background:
      radial-gradient(circle at 50% 42%, rgba(47, 91, 255, .1), transparent 28%),
      #f7f8fb;
    font: 600 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  html.styles-ready body {
    animation: reveal-styled-page 180ms ease-out both;
  }

  @keyframes reveal-styled-page {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    html.styles-ready body { animation: none; }
  }
`;

const styleLoadGateScript = `
  (() => {
    const root = document.documentElement;
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      root.classList.remove("styles-pending");
      root.classList.add("styles-ready");
    };

    const waitForStyles = () => {
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      if (links.length === 0 || links.every((link) => link.sheet)) {
        reveal();
        return;
      }
      requestAnimationFrame(waitForStyles);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", waitForStyles, { once: true });
    } else {
      waitForStyles();
    }

    window.addEventListener("load", reveal, { once: true });
    window.setTimeout(reveal, 15000);
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://spc6kompcd6mjbinr9s5m.apigateway-ap-southeast-1.apigw-byteplus.com"),
  title: "BytePlus Advertising Creative Production Solutions",
  description: "Video is becoming mainstream. AI production is scaling.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "BytePlus Advertising Creative Production Solutions",
    description: "Video is becoming mainstream. AI production is scaling.",
    type: "website",
    locale: "en_SG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BytePlus Advertising Creative Production Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BytePlus Advertising Creative Production Solutions",
    description: "Video is becoming mainstream. AI production is scaling.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Font variables go on <html>: --bp-font / --font-sans are declared in
       :root and cannot see a variable defined one level down on <body>. */
    <html lang="en" className={`${fontTech.variable} ${fontMono.variable} styles-pending`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: styleLoadGateCss }} />
        <script dangerouslySetInnerHTML={{ __html: styleLoadGateScript }} />
        <noscript>
          <style>{"html.styles-pending body { visibility: visible; } html.styles-pending::before { display: none; }"}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
