
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "../context/cartContext";
import Navbar from "@/src/components/Navbar";
import Footer from "../components/cards/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURELIA INTERIOR",
  description: "Discover elegant furniture and timeless interior design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
