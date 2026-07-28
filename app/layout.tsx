import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://spc6kompcd6mjbinr9s5m.apigateway-ap-southeast-1.apigw-byteplus.com"),
  title: "广告行业 AI 素材生产方案｜BytePlus",
  description: "从市场规模、三类核心场景到客户策略与产品路线图，解读 AI 如何把广告素材生产变成增长引擎。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "把素材生产，变成增长引擎",
    description: "广告行业 AI 素材生产方案 · 2026 GTM",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "把素材生产，变成增长引擎" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "把素材生产，变成增长引擎",
    description: "广告行业 AI 素材生产方案 · 2026 GTM",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
