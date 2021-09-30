import React, { useState } from "react";
import HomeMainSection from "../components/HomeMainSection";
import HomeMoreSection from "../components/HomeMoreSection";
import HomeDarkSection from "../components/HomeDarkSection";
import HomeHero from "components/HomeHero";

import cloud_store_image from "../assets/images/projects/cloud_store.png";
import cloud_store_dashboard from "../assets/images/projects/cloud_store_dashboard.png";
import fl_20_image from "../assets/images/projects/fl_20_ui.png";
import fl_20_dashboard from "../assets/images/projects/fl_20_dashboard.png";

const Home = () => {
  const [section] = useState([
    {
      title: "home.build_your_business_today",
      body: "home.design_your_website_in_",
      image: cloud_store_image,
      color: ["#3474eb"],
    },
    {
      title: "home.manage_your_business",
      body: "home.keep_track_of_what_",
      image: cloud_store_dashboard,
      color: ["#12c2e9", "#c471ed", "#f64f59"],
    },
    {
      title: "home.express_yourself_and_share_your_passions",
      body: "home.post_news_article_to_",
      image: fl_20_image,
      color: ["#ff9966", "#ff5e62"],
    },
    {
      title: "home.be_seen_be_heard",
      body: "home.show_the_world_who_",
      image: fl_20_dashboard,
      color: ["#fff"],
    },
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
          image={section[0].image}
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
