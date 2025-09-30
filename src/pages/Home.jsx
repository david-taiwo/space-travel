import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main
      className="
        min-h-screen bg-no-repeat bg-cover bg-center
        bg-[url('/assets/home/background-home-mobile.jpg')]
        md:bg-[url('/assets/home/background-home-tablet.jpg')]
        xl:bg-[url('/assets/home/background-home-desktop.jpg')]
        text-white
      "
    >
      <Hero />
    </main>
  );
};

export default Home;
