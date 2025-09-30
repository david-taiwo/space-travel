import React, { useState } from "react";
import data from "../data/data.json";
import DestinationCard from "../components/DestinationCard";

const Destination = () => {
  const { destinations } = data;
  const [active, setActive] = useState(destinations[0]);

  return (
    <main
      className="min-h-screen bg-no-repeat bg-cover bg-center
        bg-[url('/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
        xl:bg-[url('/assets/destination/background-destination-desktop.jpg')]
        bg-space min-h-screen w-full text-center lg:text-left 
        text-white px-6 sm:px-10 lg:px-24 pt-28 lg:pt-40"
    >
      {/* 01 PICK YOUR DESTINATION */}
      <header className="mb-12 lg:mb-20 lg:flex lg:max-w-6xl lg:mx-auto">
        <h2 className="heading-sub text-lg sm:text-xl lg:text-2xl">
          <span className="font-bold text-white/40 mr-4">01</span>
          Pick Your Destination
        </h2>
      </header>

      {/* Layout: image left | details right on desktop */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-28 max-w-6xl mx-auto">
        {/* Planet image */}
        <div className="w-48 sm:w-64 lg:w-[445px] animate-pulse-slow">
          <picture>
            <source srcSet={active.images.webp} type="image/webp" />
            <img
              src={active.images.png}
              alt={active.name}
              className="w-full h-auto"
            />
          </picture>
        </div>

        {/* Right side: tabs + description */}
        <div className="max-w-xl">
          {/* Tabs */}
          <nav>
            <ul className="flex justify-center lg:justify-start gap-6 mb-6 lg:mb-8">
              {destinations.map((d) => (
                <li key={d.name}>
                  <button
                    onClick={() => setActive(d)}
                    className={`font-condensed uppercase tracking-[0.15em] pb-2 transition-colors
                      ${
                        active.name === d.name
                          ? "border-b-2 border-white text-white"
                          : "border-b-2 border-transparent text-white/60 hover:text-white/90 hover:border-white/30"
                      }`}
                  >
                    {d.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destination details */}
          <DestinationCard
            name={active.name}
            description={active.description}
            distance={active.distance}
            travel={active.travel}
          />
        </div>
      </div>
    </main>
  );
};

export default Destination;
