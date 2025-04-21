import { Main } from "@/components/ds";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./color-palette.css";
import './device-breakpoints.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "favicon.ico",
  title: "HelpingHand",
  description: "A website that empowers underserved communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <div className="z-50 w-full h-full">
          <NavBar />
          <Main className="bg-stone-50">{children}</Main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
