import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row  mt-7">
          <div className="flex-row flex mb-5">
            <Image
              src="/FirstProject.png"
              height={150}
              width={150}
              alt="BMW I8 Landing Page"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">BMW I8</p>
              <p className="text-gray-500 text-[10px]">
                Thrilled to share the BMW i8 UI landing page designed with precision in Figma.
              </p>
            </div>
          </div>
          <div className="flex-row flex mb-5">
            <Image
              src="/SecondProject.svg"
              height={150}
              width={150}
              alt="HireSide"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">iPhone 15 Pro Landing page</p>
              <p className="text-gray-500 text-[10px]">
                Thrilled to share the iPhone 15 Pro UI landing page Example designed with precision in Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
