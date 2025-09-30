import React, { useState } from "react";
import data from "../data/data.json";

const Technology = () => {
  const { technology } = data;
  const [active, setActive] = useState(technology[0]);
  const [fade, setFade] = useState(false);

  const handleSwitch = (tech) => {
    if (active.name === tech.name) return;
    setFade(true);
    setTimeout(() => {
      setActive(tech);
      setFade(false);
    }, 300);
  };

  return (
    <main
      className="min-h-screen bg-no-repeat bg-cover bg-center
        bg-[url('/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
        xl:bg-[url('/assets/technology/background-technology-desktop.jpg')]
        text-white lg:pl-24 pt-28 lg:pt-40"
    >
      {/* 03 SPACE LAUNCH 101 */}
      <header className="mb-12 lg:mb-20 lg:flex lg:max-w-6xl lg:mx-auto">
        <h2 className="heading-sub text-lg sm:text-xl lg:text-2xl uppercase">
          <span className="font-bold text-white/40 mr-4">03</span>
          Space Launch 101
        </h2>
      </header>

      {/* Layout */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-24 max-w-full lg:max-w-7xl mx-auto">
        {/* Left side: Nav + Content */}
        <div
          className={`flex flex-col lg:flex-row lg:gap-10 items-center lg:items-start lg:max-w-lg text-center lg:py-20 lg:text-left 
          transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Numbered nav */}
          <div className="flex lg:flex-col gap-6 lg:gap-10 mb-10 lg:mb-0">
            {technology.map((tech, i) => (
              <button
                key={tech.name}
                onClick={() => handleSwitch(tech)}
                className={`w-12 lg:w-16 h-12 lg:h-16 rounded-full border border-white/40 flex items-center justify-center 
                  text-lg font-bellefair transition-all
                  ${
                    active.name === tech.name
                      ? "bg-white text-black rounded-full"
                      : "text-white hover:border-white"
                  }`}
                aria-label={`Show ${tech.name}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Tech text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-4">
              The Terminology...
            </p>
            <h3 className="font-bellefair text-3xl sm:text-4xl lg:text-4xl uppercase mb-6">
              {active.name}
            </h3>
            <p className="text-[15px] lg:text-[18px]  sm:text-base leading-relaxed text-white/80">
              {active.description}
            </p>
          </div>
        </div>

        {/* Right side: Image */}
        <div
          className={`flex lg:justify-end w-full lg:w-auto  
          transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <picture>
            <source
              srcSet={active.images.portrait}
              media="(min-width: 1024px)"
            />
            <img
              src={active.images.landscape}
              alt={active.name}
              className="w-full max-h-[500px] object-cover lg:object-center"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default Technology;
