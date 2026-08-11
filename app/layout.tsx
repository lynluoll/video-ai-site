import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
