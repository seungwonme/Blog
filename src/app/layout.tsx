import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const D2Coding = localFont({
  src: [
    {
      path: "./fonts/D2Coding.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/D2Coding.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={D2Coding.className}>{children}</body>
    </html>
  );
}
