import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";

export default function HeroButton (props) {
  const animatedButtonUnderline = useSpring({
    from: {
      width: "0%",
    },
    to: {
      width: "100%",
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
      <div className="w-64">
        <a.button
          style={animatedButtonUnderline}
          className="h-20 py-3 text-2xl text-white font-bold truncate tracking-wider border-2 border-white rounded-lg"
        >
          <Link to="/get-start">
            <span>{props.children}</span>
          </Link>
        </a.button>
        </div>
    </a.div>
  );
};
