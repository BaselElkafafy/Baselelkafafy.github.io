import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="#about-me">
          <a className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
        </Link>

        <div className="flex flex-row gap-5">
          <div className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5">
            <a href="mailto:official.baselhassan@gmail.com">Contact</a>
          </div>

          {/* New button to navigate to Pricing page with the same style */}
          <Link href="/pricing">
            <a className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5">
              Pricing
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
