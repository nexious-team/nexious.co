import React from "react";
import { useSpring, animated as a } from "react-spring";
// import HeroButton from "../elements/HeroButton";
import { FormattedMessage as Text } from "react-intl";

import "../assets/css/hero.css";

interface HeroProps {
  color: string;
  text: string;
}
export default function HeroTypeB(props: HeroProps) {
  const { color, text } = props;
  const animatedText = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    delay: 1000,
  });
  // const animatedImage = useSpring({
  //   to: {
  //     opacity: 1,
  //     transform: "scale(1)",
  //   },
  //   from: {
  //     opacity: 0,
  //     transform: "scale(0.6)",
  //   },
  //   delay: 1200,
  // });

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-screen h-screen flex justify-center md:items-center pt-32 md:pt-0 z-20"
    >
      <div className="flex flex-col items-stretch md:flex-row md:justify-center lg:justify-between md:items-center h-64 w-10/12">
        <div className="w-full leading-loose">
          <div className="mt-16">
            <a.h1
              style={animatedText}
              className="text-4xl lg:text-6xl font-bold text-white text-center"
            >
              <Text id={text} defaultMessage={text} />
            </a.h1>
          </div>
        </div>
        {/* <div className="md:py-10 w-full md:w-6/12">
          <div className="overflow-hidden min-height-img">
            <a.div style={animatedImage}>
              <img className="w-full rounded-lg shadow" src={image} alt="" />
            </a.div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
