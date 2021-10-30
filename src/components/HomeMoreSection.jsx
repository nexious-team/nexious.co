import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from "react-intl";
import { Button } from "elements";

export default function HomeMoreSection (props) {
  function getColor() {
    let colors = "";
    let count = 0;
    Array.prototype.slice.call(props.color).forEach(function (color) {
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
        <h1 className=" text-3xl lg:text-5xl font-semibold">
          <Text id={props.title} />
        </h1>
      </div>
      <div className="mt-2 sub-text text-center flex justify-center">
        <p className="px-3 lg:px-0 text-sm lg:text-xl font-regular text-gray-600 md:w-10/12 lg:w-1/2">
          <Text id={props.body} />
        </p>
      </div>
      <div className="flex justify-center py-5">
        <div className="mx-2">
          <Button className="w-32">
            <Link to="/get-start">
              <Text id="app.get_started" />
            </Link>
          </Button>
        </div>
        <div className="mx-2">
          <Button _style="normal" className="w-32">
            <Link to="/services">
              <Text id="app.see_more" defaultMessage="See More" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center px-5">
        <div className="p-3 lg:p-0 w-10/12">
          <img className="rounded-xl shadow-lg" src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};
