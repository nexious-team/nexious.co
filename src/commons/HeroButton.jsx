import React from "react";
import { useSpring, animated as a } from "react-spring";

const HeroButton = props => {
  const animatedButtonUnderline = useSpring({
    from: {
      width: "0%",
      height: "5px",
      border: "none",
      color: "white",
      backgroundColor: "white"
    },
    to: {
      width: "100%",
      height: "5px",
      border: "none",
      color: "white",
      backgroundColor: "white"
    },
    delay: 2000
  });
  const animatedButtonText = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 1800
  });
  return (
    <a.div style={animatedButtonText} className="order-3 md:order-first">
      <button
        style={{ color: props.color }}
        className="py-3 text-2xl font-bold tracking-wider text-white"
      >
        <span>{props.children}</span> <a.hr style={animatedButtonUnderline} />
      </button>
    </a.div>
  );
};

export default HeroButton;
