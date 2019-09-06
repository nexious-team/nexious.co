import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import HomeMainSection from "../components/HomeMainSection";
import HomeMoreSection from "../components/HomeMoreSection";
import HomeDarkSection from "../components/HomeDarkSection";
import HomeHero from "components/HomeHero";
import Footer from "components/Footer";

import { ipad_pro_png } from "../assets/images/Shop website";
import { dark_mode_website } from "../assets/images/Dark Mode";

const Home = () => {
  const [section, setSection] = useState([
    {
      title: "Build Your Business Today.",
      body:
        "Nulla facilisi. Aliquam non nisl eget tortor tristique auctor. Integer nec condimentum diam, at posuere nunc. In porta, orci nec imperdiet rhoncus, neque elit congue enim, et tempor turpis dui eu felis.",
      image: ipad_pro_png,
      color: "#3474eb"
    },
    {
      title: "Manage Your Business.",
      body:
        "Nulla facilisi. Aliquam non nisl eget tortor tristique auctor. Integer nec condimentum diam, at posuere nunc. In porta, orci nec imperdiet rhoncus, neque elit congue enim, et tempor turpis dui eu felis.",
      image: ipad_pro_png,
      color: "#3474eb"
    },
    {
      title: "Create Professional Looking Articles.",
      body:
        "Nulla facilisi. Aliquam non nisl eget tortor tristique auctor. Integer nec condimentum diam, at posuere nunc. In porta, orci nec imperdiet rhoncus, neque elit congue enim, et tempor turpis dui eu felis.",
      image: ipad_pro_png,
      color: "#3474eb"
    },
    {
      title: "Promote Your Brand.",
      body:
        "Nulla facilisi. Aliquam non nisl eget tortor tristique auctor. Integer nec condimentum diam, at posuere nunc. In porta, orci nec imperdiet rhoncus, neque elit congue enim, et tempor turpis dui eu felis.",
      image: dark_mode_website,
      color: "#0f0f0f"
    }
  ]);
  return (
    <div className="">
      <div style={{ marginTop: "-5rem" }} className="overflow-hidden">
        <HomeHero />
      </div>
      <div>
        <HomeMainSection
          title={section[0].title}
          body={section[0].body}
          color={section[0].color}
        ></HomeMainSection>
      </div>
      <div className="bg-gray-200 rounded">
        <div className="py-10 bg-gray-200">
          <HomeMoreSection
            title={section[1].title}
            body={section[1].body}
            color={section[1].color}
          ></HomeMoreSection>
        </div>
      </div>
      <div className="py-10 bg-white">
        <HomeMoreSection
          title={section[2].title}
          body={section[2].body}
          color={section[2].color}
        ></HomeMoreSection>
      </div>
      <div className="py-10 bg-black">
        <HomeDarkSection
          title={section[3].title}
          body={section[3].body}
          image={section[3].image}
          color={section[3].color}
        ></HomeDarkSection>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
