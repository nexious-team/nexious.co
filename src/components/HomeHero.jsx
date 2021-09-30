import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import Hero from "./Hero";

import hero_image_1 from "../assets/images/projects/cloud_store.png";
import hero_image_2 from "../assets/images/projects/cloud_store_dashboard.png";
import hero_image_3 from "../assets/images/projects/fl_20_ui.png";
import hero_image_4 from "../assets/images/projects/fl_20_dashboard.png";

const HomeHero = props => {
  const [index, set] = useState(0);
  const [hero] = useState([
    {
      text: "home.build_your_business_today",
      image: hero_image_1,
      color: "#396afc"
    },
    {
      text: "home.express_yourself_and_share_your_passions",
      image: hero_image_2,
      color: "#ff5e62"
    },
    {
      text: "home.manage_your_business",
      image: hero_image_3,
      color: "#ec38bc"
    },
    {
      text: "home.be_seen_be_heard",
      image: hero_image_4,
      color: "#000000"
    }
  ]);
  useEffect(() => {
    const intervalId = setInterval(() => set(state => (state + 1) % 4), 5000);
    return () => clearInterval(intervalId);
  }, []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 1, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(0,0,0)" }
  });
  return (
    <div style={{ backgroundColor: props.color }} className="w-screen h-screen">
      <div className="hero_animation relative">
        {transitions.map(({ item, props, key }) => {
          //const Homepage = homepage;
          return (
            <a.div key={key} style={props}>
              <Hero
                text={hero[item].text}
                color={hero[item].color}
                image={hero[item].image}
              />
            </a.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHero;
