import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { siteUrl } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bartłomiej Baryń — Senior Full-Stack & Mobile Engineer", // 54 chars, keep < 60
  description: // 157 chars, keep ~155–160
    "Senior Full-Stack & Mobile Engineer from Gliwice, Poland. I build web, mobile and cloud apps with React, React Native, Next.js, Node.js and AWS — end to end.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-clip">
        <div aria-hidden className="page-bg pointer-events-none fixed inset-0 -z-10" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
