import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import HomeSection from "../components/HomeSection";
import HomeHero from "components/HomeHero";

const Home = () => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <HomeHero />
      </div>
      <div>
        <HomeSection></HomeSection>
      </div>
      <div className="h-screen w-64 pl-5 bg-red-600">
        <div className="pl-10 bg-green-200">Content</div>
      </div>
      {/* <HomeHero color={hero[0].color} />
      <HomeHero color={hero[1].color} />
      <HomeHero color={hero[2].color} />
      <HomeHero color={hero[3].color} /> */}
    </div>
  );
};

export default Home;
