"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import url('https://fonts.googleapis.com/css2?family=Danfo&display=swap');

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E-Golden",
//   description: "Generated by Lee Yahav",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
