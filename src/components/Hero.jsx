import React from "react";
import { useSpring, animated as a } from "react-spring";
import HeroButton from "../commons/HeroButton";
import { FormattedMessage as Text } from "react-intl";

import "../assets/css/hero.css";

const Hero = (props) => {
  const animatedText = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    delay: 1000,
  });
  const animatedImage = useSpring({
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    from: {
      opacity: 0,
      transform: "scale(0.6)",
    },
    delay: 1200,
  });

  return (
    <div
      style={{ backgroundColor: props.color }}
      className="w-screen h-screen flex justify-center md:items-center pt-32 md:pt-0 z-20"
    >
      <div className="flex flex-col items-stretch md:flex-row md:justify-center md:items-center h-64 w-10/12">
        <div className="w-full md:w-6/12">
          <a.h1
            style={animatedText}
            className="text-4xl lg:text-6xl font-weight-light text-white"
          >
            <Text id={props.text} defaultMessage={props.text} />
          </a.h1>
          <div className="hidden md:block z-20">
            <HeroButton>
              <Text id="app.get_started" defaultMessage="Get Started" />{" "}
            </HeroButton>
          </div>
        </div>
        <div className="block md:hidden order-3 pt-10 z-20">
          <HeroButton>
            <Text id="app.get_started" defaultMessage="Get Started" />
          </HeroButton>
        </div>
        <div className="md:py-10 w-full md:w-6/12">
          <div className="overflow-hidden min-height-img">
            <a.div style={animatedImage}>
              <img className="w-full" src={props.image} alt="" />
            </a.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
