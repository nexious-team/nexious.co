import React from "react";
import { useSpring, animated as a } from "react-spring";
import { ipad_pro_png } from "../assets/images/Shop website";
const Hero = props => {
  const animatedText = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    },
    delay: 1000
  });
  const animatedImage = useSpring({
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
    from: {
      opacity: 0,
      transform: "scale(0.6)"
    },
    delay: 1200
  });
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-center h-64 w-10/12">
        <div className="font-josefin w-8/12 bg-">
          <a.h1
            style={animatedText}
            className="text-6xl font-weight-light text-white"
          >
            {props.text}
          </a.h1>
        </div>
        <a.div style={animatedImage} class="flex-grow">
          <img src={ipad_pro_png} alt="" />
        </a.div>
      </div>
    </div>
  );
};

export default Hero;
