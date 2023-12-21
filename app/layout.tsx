import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics';
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        <StarsCanvas />
        <Navbar />
        {children}
        <Analytics />  {/* Add Vercel Analytics component */}
      </body>
    </html>
  );
}

