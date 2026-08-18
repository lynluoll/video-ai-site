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

export const metadata: Metadata = {
  metadataBase: new URL("https://spc6kompcd6mjbinr9s5m.apigateway-ap-southeast-1.apigw-byteplus.com"),
  title: "BytePlus Advertising Creative Production Solutions",
  description: "Video ads are becoming the No.1 ad format. AI production is scaling.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "BytePlus Advertising Creative Production Solutions",
    description: "Video ads are becoming the No.1 ad format. AI production is scaling.",
    type: "website",
    locale: "en_SG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BytePlus Advertising Creative Production Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BytePlus Advertising Creative Production Solutions",
    description: "Video ads are becoming the No.1 ad format. AI production is scaling.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Font variables go on <html>: --bp-font / --font-sans are declared in
       :root and cannot see a variable defined one level down on <body>. */
    <html lang="en" className={`${fontTech.variable} ${fontMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
