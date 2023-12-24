import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage({ className = "" }: PricingPageProps) {
  return (
    <div className={`relative ${className}`}>
      <Navbar />

      <div className="inline-flex h-[3518px] w-[1440px] resize flex-row overflow-hidden">
        <div className="relative flex h-full w-full items-start overflow-clip bg-black">
          <div className="bg-background-pattern absolute right-[-915.91px] top-[-290px] flex h-[2609px] w-[2609px] items-end bg-cover bg-center pr-[1420px] pb-64 pl-96 pt-96">
            <div className="font-poppins absolute left-96 top-80 flex h-20 w-[1104px] items-center justify-center">
              <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                <Image
                  src="/Logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="cursor-pointer hover:animate-slowspin"
                />
              </a>
              <div className="mr-0 flex flex-grow items-start justify-center gap-x-6 self-stretch">
                <div className="relative flex w-44 items-center self-stretch pr-24 text-left text-white">
                  <div className="absolute right-12 top-5 h-8 w-16 text-[22px] font-bold leading-[normal] tracking-[0px]">
                    Basel
                  </div>
                  <div className="absolute bottom-5 right-0 h-3.5 w-20 text-[9.2px] font-normal leading-[normal] tracking-[9.6px]">
                    <span className="uppercase">Elkafafy</span>
                  </div>
                  <div className="bg-untitled-design-41 relative flex flex-grow items-start self-stretch bg-cover bg-center" />
                </div>

                <div className="flex flex-grow items-center justify-end pl-96 text-center text-[13px] font-medium leading-[normal] tracking-[0px] text-black">
                  <div className="flex flex-grow items-center justify-center self-stretch rounded-lg bg-white py-2 px-6">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center text-center text-[13px] font-medium leading-[normal] tracking-[0px] text-black">
                  <div className="flex flex-grow justify-center self-stretch rounded-lg bg-white py-2 px-4">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mr-[-643.93px] flex flex-grow flex-col items-start justify-center self-stretch">
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

interface PricingPageProps {
  className: string;
}
