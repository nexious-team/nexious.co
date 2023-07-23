import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import Hero from "./Hero";

import hero_image_1 from "../assets/images/projects/cloud_store.png";
// import hero_image_2 from "../assets/images/projects/cloud_store_dashboard.png";
import hero_image_3 from "../assets/images/projects/fl_20_ui.png";
// import hero_image_4 from "../assets/images/projects/fl_20_dashboard.png";

const heros = [
  {
    text: "home.build_your_business_today",
    image: hero_image_1,
    color: "#396afc",
    url: "https://store.nexious.co/"
  },
  // {
  //   text: "home.express_yourself_and_share_your_passions",
  //   image: hero_image_2,
  //   color: "#ff5e62"
  // },
  {
    text: "home.manage_your_business",
    image: hero_image_3,
    color: "#ec38bc",
    url: "https://knowat.landing.nexious.co/"
  },
  // {
  //   text: "home.be_seen_be_heard",
  //   image: hero_image_4,
  //   color: "#000000"
  // }
]

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, p => p, {
    from: { opacity: 1, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(0,0,0)" }
  });

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(state => (state + 1) % heros.length), 7500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="hero_animation relative">
      {transitions.map(({item, props, key}) => (
        <a.div key={key} style={props}>
          <Hero 
            text={heros[item].text}
            color={heros[item].color}
            image={heros[item].image}
            url={heros[item].url}
          />
        </a.div>
      ))}
      </div>
    </div>
  )
}
