import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from 'react-intl';
import Button from "elements/Button";

const HomeDarkSection = props => {
  return (
    <div className="bg-black md:flex md:justify-between md:items-center">
      <div className="w-full md:w-1/2 lg:w-6/12 bg-red-0">
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold">
            <Text id={props.title} />
          </h1>
        </div>
        <div className="mt-2 sub-text text-center flex justify-center">
          <p className="px-3 lg:px-0 text-sm lg:text-xl font-regular text-gray-100 w-11/12 md:w-11/12 lg:w-11/12">
            <Text id={props.body} />
          </p>
        </div>
        <div className="flex justify-center py-5">
          <div className="mx-2">
            <Link to="/get-start">
              <Button _style="action-dark" className="w-32">
                <Text id="app.get_started" defaultMessage="Get Started" />
              </Button>
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/service">
              <Button _style="normal" className="w-32">
                <Text id="app.see_more" defaultMessage="See More" />
              </Button>
            </Link>
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
