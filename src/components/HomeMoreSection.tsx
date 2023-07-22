import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from "react-intl";
import { Button } from "../elements";

interface HomeMoreSectionProps {
  title: string;
  body: string;
  image: string;
}

export default function HomeMoreSection (props: HomeMoreSectionProps) {
  const { title, body, image } = props;

  return (
    <div>
      <div className="text-center">
        <h1 className=" text-3xl lg:text-5xl font-semibold">
          <Text id={title} />
        </h1>
      </div>
      <div className="mt-2 sub-text text-center flex justify-center">
        <p className="px-3 lg:px-0 text-sm lg:text-xl font-regular text-gray-600 md:w-10/12 lg:w-1/2">
          <Text id={body} />
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
          <Button variant="normal" className="w-32">
            <Link to="/service">
              <Text id="app.see_more" defaultMessage="See More" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center px-5">
        <div className="p-3 lg:p-0 w-10/12">
          <img className="rounded-xl shadow-lg" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
