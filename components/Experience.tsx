import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">Web designer /</span> E-commerce Specialist
          </p>
          <p className="text-gray-300">MAY 2022 - PRESENT, HYDERABAD</p>
        </div>
        <p className="text-gray-300 pt-5">
          {/* Your experience details */}
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Web Design
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            UI/UX
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
