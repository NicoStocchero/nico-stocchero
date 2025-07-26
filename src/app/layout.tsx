import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import seoContent from "@/lib/seo";
import { NavbarShell } from "@/components";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...seoContent("es"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-dark text-accessible-primary`}
      >
        <NavbarShell />
        {children}
      </body>
    </html>
  );
}
