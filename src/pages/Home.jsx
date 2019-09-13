import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import HomeMainSection from "../components/HomeMainSection";
import HomeMoreSection from "../components/HomeMoreSection";
import HomeDarkSection from "../components/HomeDarkSection";
import HomeHero from "components/HomeHero";
import Sidebar from "components/Sidebar";

import { ipad_pro_png } from "../assets/images/Shop website";
import { portfolio_home } from "../assets/images/PersonalPortfolio";
import { manage_business } from "../assets/images/ManageBusiness";
import { blog_web } from "../assets/images/Blog";

const Home = () => {
  const [section, setSection] = useState([
    {
      title: "Build Your Business Today.",
      body:
        "Design your website in a way to keep your customers engage. We'll help your product to be easily searchable through search engines and increase your business performances.",
      image: ipad_pro_png,
      color: ["#3474eb"]
    },
    {
      title: "Manage Your Business.",
      body:
        "Keep track of what is happening in your businesses. See your business performance from your office computer, on your tablet, or even on your phone while enjoying your coffee. Visualize the data and make the decisions faster and better.",
      image: manage_business,
      color: ["#12c2e9", "#c471ed", "#f64f59"]
    },
    {
      title: "Express Yourself and Share Your Passions",
      body:
        "Post news article to keep people informed. Start a blog to share your knowledge. Or if you simply want to refine your writing skill.",
      image: blog_web,
      color: ["#ff9966", "#ff5e62"]
    },
    {
      title: "Be Seen. Be Heard.",
      body:
        "Show the world who you are and what you can do. Build a presence in your industry and become known by others. Be one step ahead of others.",
      image: portfolio_home,
      color: ["#fff"]
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
            image={section[1].image}
          ></HomeMoreSection>
        </div>
      </div>
      {/* Manage your business */}
      <div className="py-10 bg-white">
        <HomeMoreSection
          title={section[2].title}
          body={section[2].body}
          color={section[2].color}
          image={section[2].image}
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
    </div>
  );
};

export default Home;
