import React from "react";
import { useSpring, animated as a } from "react-spring";
const HomeDarkSection = props => {
  const slideUp = useSpring({
    from: {
      transform: "translateY(0%)"
    },
    to: {
      transform: "translateY(-50%)"
    },
    config: {
      tension: 100,
      mass: 2
    },
    delay: 2500
  });
  return (
    <div className="bg-black md:flex md:justify-between">
      <div className="w-full md:w-1/2 lg:w-6/12 bg-red-0">
        <div className="text-center">
          <h1 className="font-josefin text-4xl md:text-4xl xl:text-6xl text-white lg:text-5xl font-semi-bold">
            {props.title}
          </h1>
        </div>
        <div className="sub-text text-center flex justify-center">
          <p className="px-3 lg:px-0 text-xl lg:text-2xl font-josefin font-regular text-gray-100 w-11/12 md:w-11/12 lg:w-11/12">
            {props.body}
          </p>
        </div>
        <div className="flex justify-center py-5">
          <div className="mx-2">
            <div
              style={{ backgroundColor: props.color }}
              className="lg:w-56 w-36 rounded-full cursor-pointer px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none"
            >
              <button className="text-sm md:text-sm lg:text-2xl font-semi-bold text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="mx-2">
            <div className="bg-gray-100 w-36 lg:w-56 cursor-pointer rounded-full px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none">
              <button className="text-md lg:text-2xl font-semi-bold text-black">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/2">
        <div
          style={{ height: "32rem" }}
          className="p-3 lg:p-0 h-64 overflow-hidden"
        >
          <a.img
            style={slideUp}
            className="shadow-lg w-full h-auto"
            src={props.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDarkSection;
