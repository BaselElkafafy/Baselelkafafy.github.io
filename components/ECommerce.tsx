import Image from "next/image";
import Link from "next/link";
import React from "react";

const ECommerce = () => {
  return (
    <section id="latest-shopify-ecommerce-websites">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        Ecommerce
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://breatheeveryday.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <a className="flex-row flex mb-5">
              <Image
                src="/Breathe.webp"
                height={150}
                width={150}
                alt="Breathe"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Breathe</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a sleek e-commerce platform for the &quot;Breathe&quot; brand with a modern aesthetic.
                  The website emphasizes user engagement and brand appeal.
                </p>
              </div>
            </a>
          </Link>
          <Link
            href="https://www.islamicarthub.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <a className="flex-row flex mb-5">
              <Image
                src="/islamicarthub.webp"
                height={150}
                width={150}
                alt="Islamic Art Hub"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">HireSide</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a sophisticated e-commerce platform for the &quot;Islamic Art Hub&quot; brand with a contemporary aesthetic.
                  The website prioritizes user engagement and brand appeal.
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
