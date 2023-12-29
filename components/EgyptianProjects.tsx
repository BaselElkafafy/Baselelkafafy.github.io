import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
          EGY BRANDS
        </h1>
        <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
          EXPLORE EGYPTIAN BRANDS DESIGNS
        </p>
        <div className="container mx-auto 2xl">
          <div className="flex-col mt-7">
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <Image
                  src="/Grapes.webp"
                  height={1200}
                  width={1600}
                  alt="SPIRO SPATHIS GRAPES LANDING PAGE"
                />
              </div>
            </div>
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <Image
                  src="/Cherry.webp"
                  height={1200}
                  width={1600}
                  alt="SPIRO SPATHIS CHERRY LANDING PAGE"
                />
              </div>
            </div>
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <Image
                  src="/Green Apple.png"
                  height={1200}
                  width={1600}
                  alt="SPIRO SPATHIS GREEN APPLE LANDING PAGE"
                />
              </div>
            </div>
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <Image
                  src="/Lemon.png"
                  height={1200}
                  width={1600}
                  alt="SPIRO SPATHIS LEMON LANDING PAGE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

