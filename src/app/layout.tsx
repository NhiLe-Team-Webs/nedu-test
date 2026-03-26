import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nedu - Thấu hiểu chính mình",
  description: "Bắt đầu hành trình lắng nghe nội tâm cùng Nedu AI.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FDFCFB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased font-sans`}>
      <body className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#2D2D2D] selection:bg-[#8B5E3C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
