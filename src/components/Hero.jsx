import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
        relative min-h-2/3
        bg-no-repeat bg-cover bg-center
        flex flex-col items-center justify-between
        md:justify-center
        px-6 md:px-12 xl:px-34
        text-[var(--text-on-dark)]
      "
    >
      {/* Wrapper controls column/row direction depending on screen */}
      <div
        className="
          flex flex-col xl:flex-row
          items-center xl:items-end
          justify-center xl:justify-between
          w-full max-w-7xl
          mt-28 xl:mt-60
          gap-20 xl:gap-0
        "
      >
        {/* Left Text Section */}
        <div
          className="
            text-center xl:text-left
            flex flex-col gap-6
            max-w-lg
          "
        >
          <p className="uppercase font-condensed tracking-[0.25em] text-[var(--muted)] text-base md:text-lg">
            So, you want to travel to
          </p>

          <h1
            className="
              font-bellefair text-7xl md:text-9xl
              text-white
            "
          >
            Space
          </h1>

          <p className="font-barlow text-[var(--muted)] text-base md:text-lg leading-relaxed">
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space—and not hover kind of on the edge of it.
            Well sit back and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Right Explore Button */}
        <div className="mt-16 xl:mt-0">
          <Link
            to="/destination"
            className="
              relative block
              w-40 h-40 md:w-52 md:h-52
              bg-white text-neutral-900
              rounded-full
              flex items-center justify-center
              font-bellefair text-xl md:text-2xl
              uppercase tracking-widest
              transition-transform duration-300
              hover:scale-110
              focus:outline-none focus:ring-4 focus:ring-white/30
            "
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
