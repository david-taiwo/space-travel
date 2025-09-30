import React, { useState } from "react";
import data from "../data/data.json";
import CrewCard from "../components/CrewCard";

const Crew = () => {
  const { crew } = data;
  const [active, setActive] = useState(crew[0]);
  const [fade, setFade] = useState(false);

  const handleSwitch = (member) => {
    if (active.name === member.name) return;
    setFade(true);
    setTimeout(() => {
      setActive(member);
      setFade(false);
    }, 200); // duration matches Tailwind transition
  };

  return (
    <main
      className="min-h-screen bg-no-repeat bg-cover bg-center
        bg-[url('/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
        xl:bg-[url('/assets/crew/background-crew-desktop.jpg')]
        text-white px-6 sm:px-10 lg:px-24 pt-28 lg:pt-40"
    >
      {/* 02 MEET YOUR CREW */}
      <header className="mb-12 lg:mb-20 lg:flex lg:max-w-6xl lg:mx-auto">
        <h2 className="heading-sub text-lg sm:text-xl lg:text-2xl">
          <span className="font-bold text-white/40 mr-4">02</span>
          Meet Your Crew
        </h2>
      </header>

      {/* Layout */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-24 max-w-6xl mx-auto">
        {/* Text + slider */}
        <div
          className={`flex flex-col items-center lg:items-start lg:max-w-lg text-center lg:text-left 
          transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <CrewCard role={active.role} name={active.name} bio={active.bio} />

          {/* Dots navigation */}
          <div className="flex gap-4 mt-10">
            {crew.map((member) => (
              <button
                key={member.name}
                onClick={() => handleSwitch(member)}
                className={`w-3 h-3 rounded-full transition-all
                  ${
                    active.name === member.name
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                aria-label={`Show ${member.name}`}
              />
            ))}
          </div>
        </div>

        {/* Crew image */}
        <div
          className={`flex justify-center lg:justify-end w-full lg:w-auto 
          transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <picture>
            <source srcSet={active.images.webp} type="image/webp" />
            <img
              src={active.images.png}
              alt={active.name}
              className="h-72 sm:h-96 lg:h-[600px] object-contain"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default Crew;
