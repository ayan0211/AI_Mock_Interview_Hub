import type { Metadata } from "next";
import { Mona_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepBuddy",
  description: "Crafted By Ayan Pathan, An AI Powered Platform for preparing mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark hydrated">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
