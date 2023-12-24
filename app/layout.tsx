import { Analytics } from '@vercel/analytics';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://baselelkafafy-github-io.vercel.app"
  ),
  title: "Basel Elkafafy",
  description: "Developer Portfolio By Basel Elkafafy",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "Basel Elkafafy"],
  openGraph: {
    title: "Basel Elkafafy",
    description: "Web Designer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
