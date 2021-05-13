import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from 'react-intl';

const HomeDarkSection = props => {
  return (
    <div className="bg-black md:flex md:justify-between md:items-center">
      <div className="w-full md:w-1/2 lg:w-6/12 bg-red-0">
        <div className="text-center">
          <h1 className=" text-4xl md:text-4xl xl:text-6xl text-white lg:text-5xl font-semibold">
            <Text id={props.title} />
          </h1>
        </div>
        <div className="sub-text text-center flex justify-center">
          <p className="px-3 lg:px-0 text-xl lg:text-2xl font-regular text-gray-100 w-11/12 md:w-11/12 lg:w-11/12">
            <Text id={props.body} />
          </p>
        </div>
        <div className="flex justify-center py-5">
          <div className="mx-2">
            <div
              style={{ backgroundColor: props.color }}
              className="lg:w-56 w-36 rounded-full cursor-pointer px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none"
            >
              <Link to="/get-start">
                <button className="text-sm md:text-sm lg:text-2xl font-semibold text-black">
                  <Text id="app.get_started" defaultMessage="Get Started" />
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-2">
            <div className="bg-gray-100 w-36 lg:w-56 cursor-pointer rounded-full px-6 py-2 shadow-lg flex justify-center items-center  select-none outline-none">
              <button className="text-md lg:text-2xl font-semibold text-black">
                <Text id="app.see_more" defaultMessage="See More" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/2 px-3">
        <div className="px-3 lg:p-0 overflow-hidden rounded-lg">
          <img
            style={{}}
            className="shadow-lg w-full h-auto top-0"
            src={props.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDarkSection;
