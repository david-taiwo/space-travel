import React from "react";

const DestinationCard = ({ name, description, distance, travel }) => {
  return (
    <section>
      <h1 className="heading-planet text-6xl sm:text-7xl lg:text-[100px] mb-4 lg:mb-6">
        {name}
      </h1>
      <p className="font-barlow text-white/70 leading-relaxed text-base sm:text-lg lg:text-[18px] max-w-md mx-auto lg:mx-0 mb-8 lg:mb-12">
        {description}
      </p>

      <div className="nav-divider mb-8"></div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 uppercase font-condensed tracking-widest text-white/80">
        <div>
          <h3 className="text-sm mb-2">Avg. Distance</h3>
          <p className="font-bellefair text-3xl text-white">{distance}</p>
        </div>
        <div>
          <h3 className="text-sm mb-2">Est. Travel Time</h3>
          <p className="font-bellefair text-3xl text-white">{travel}</p>
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;
