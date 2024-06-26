"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <Image src="/Me.webp" height={300} width={300} alt="Basel Elkafafy" />
        </div>
        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 transition hover:scale-110 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Basel Elkafafy!
        </div>
        <a
          href="https://baselelk.webflow.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 mt-6"
        >
          Visit my website 🍿
        </a>
      </div>
    </div>
  );
};

export default Banner;
