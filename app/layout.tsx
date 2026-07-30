import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://spc6kompcd6mjbinr9s5m.apigateway-ap-southeast-1.apigw-byteplus.com"),
  title: "BytePlus 广告行业素材生产方案",
  description: "视频成为主流，AI 生产走向规模化。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "BytePlus 广告行业素材生产方案",
    description: "视频成为主流，AI 生产走向规模化。",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BytePlus 广告行业素材生产方案" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BytePlus 广告行业素材生产方案",
    description: "视频成为主流，AI 生产走向规模化。",
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
