import React from "react";
import { useSpring, animated as a } from "react-spring";

const RegisterButton = ({ isTop }) => {
  const borderColorAnimation = useSpring({
    border: isTop ? "2px solid rgba(255,255,255,1)" : "0px solid rgb(0,0,0,0)",
    background: isTop
      ? "linear-gradient(-360deg, rgba(255,0,0,0), rgba(255,0,0,0))"
      : "linear-gradient(80deg, rgba(182, 244, 146,1), rgba(51, 139, 147,1))",
    padding: isTop ? "0px" : "2px",
    boxShadow: isTop
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      : "0 0px 0px 0px rgba(0, 0, 0, 00), 0 0px 0px 0px rgba(0, 0, 0, 00)"
  });

  const colorAnimation = useSpring({
    backgroundColor: !isTop ? "white" : "rgba(0,0,0,0)"
  });
  const textColorAnimation = useSpring({
    color: isTop ? "white" : "black"
  });
  return (
    <React.Fragment>
      <a.div
        style={borderColorAnimation}
        className="h-16 text-center flex items-center justify-center text:lg lg:text-2xl font-josefin w-20 md:w-40 lg:w-40 rounded-lg"
      >
        <a.div
          style={colorAnimation}
          className="rounded w-full h-full flex items-center justify-center "
        >
          <a.h1 style={textColorAnimation} className="cursor-pointer ">
            Get Started
          </a.h1>
        </a.div>
      </a.div>
    </React.Fragment>
  );
};

export default RegisterButton;
