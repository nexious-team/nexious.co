import React, { useState, useEffect } from "react";
import { useTransition, animated as a } from "react-spring";
import Hero from "./Hero";

const HomeHero = props => {
  const [index, set] = useState(0);
  const [hero, setHero] = useState([
    {
      text: "Show People Who You Are!",
      color: "#ff8080"
    },
    {
      text: "Let Us Help You Grow",
      color: "#ffba92"
    },
    {
      text: "You Dream It, We Make It",
      color: "#d5a4cf"
    },
    {
      text: "Laked Matatataang!! Normalin Normalin",
      color: "#eed7db"
    }
  ]);
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 5000),
    []
  );
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
              <Hero text={hero[item].text} color={hero[item].color} />
            </a.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHero;
