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
        EXPLORE NOW FIGMA DESIGNS
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row  mt-7">
          <div className="flex-row flex mb-5">
            <Image
              src="/FirstProject.png"
              height={1200}
              width={1600}
              alt="BMW I8 Landing Page"
            />
            <Image
              src="/SecondProject.png"
              height={1200}
              width={1600}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
