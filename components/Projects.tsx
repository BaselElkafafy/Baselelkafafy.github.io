import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
        EXPLORE NOW FIGMA DESIGNS
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col mt-7">
          <div className="flex-row flex mb-5">
            <div className="p-3">
              <Image
                src="/FirstProject.webp"
                height={1200}
                width={1600}
                alt="BMW I8 Landing Page"
              />
            </div>
            <div className="p-3">
              <p className="text-white font-semibold text-xl">BMW I8</p>
              <p className="text-gray-500 text-[10px]">
                Thrilled to share the BMW i8 UI landing page designed with precision in Figma.
              </p>
            </div>
          </div>
          <div className="flex-row flex mb-5">
            <div className="p-3">
              <Image
                src="/SecondProject.png"
                height={1200}
                width={1600}
                alt="iPhone 15 pro Landing Page"
              />
            </div>
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
