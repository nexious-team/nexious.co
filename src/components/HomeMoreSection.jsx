import React from "react";
import { ipad_pro_png } from "assets/images/Shop website";
const HomeMoreSection = props => {
  function getColor() {
    let colors = "";
    let count = 0;
    Array.prototype.slice.call(props.color).forEach(function(color) {
      colors += `, ${color}`;
      count++;
    });
    if (count < 2) {
      colors += colors;
    }
    return colors;
  }
  return (
    <div>
      <div className="text-center">
        <h1 className="font-josefin text-4xl lg:text-6xl font-semi-bold">
          {props.title}
        </h1>
      </div>
      <div className="sub-text text-center flex justify-center">
        <p className="px-3 lg:px-0 text-xl lg:text-2xl font-josefin font-regular text-gray-600 md:w-10/12 lg:w-1/2">
          {props.body}
        </p>
      </div>
      <div className="flex justify-center py-5">
        <div className="mx-2">
          <div
            style={{
              background: `linear-gradient(to right${getColor()})`
            }}
            className="lg:w-56 w-36 rounded-full cursor-pointer px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none"
          >
            <button className="text-sm md:text-sm lg:text-2xl font-semi-bold text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="mx-2">
          <div className="bg-gray-500 w-36 lg:w-56 cursor-pointer rounded-full px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none">
            <button className="text-md lg:text-2xl font-semi-bold text-white">
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-3 lg:p-0">
          <img className="shadow-lg" src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeMoreSection;
