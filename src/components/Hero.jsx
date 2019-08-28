import React from "react";
import { useSpring, animated as a } from "react-spring";
import Image from "../assets/images/Shop Website.png";
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
      transform: "translateX(0%)"
    },
    from: {
      opacity: 0,
      transform: "translateX(20%)"
    },
    delay: 1200
  });
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="flex justify-between items-center h-64 w-10/12">
        <div className="font-josefin w-10/12">
          <a.h1
            style={animatedText}
            className="text-6xl font-weight-light text-white"
          >
            Let Us Help You Grow
          </a.h1>
        </div>
        <a.div style={animatedImage}>
          <img src={Image} alt="" />
        </a.div>
      </div>
    </div>
  );
};

export default Hero;
