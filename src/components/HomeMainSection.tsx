import React from "react";
// import { Link } from "react-router-dom";
import { FormattedMessage as Text } from "react-intl";
// import Button from "../elements/Button";

interface HomeMainSectionProps {
  title: string;
  body: string;
  image: string;
}
const HomeMainSection = (props: HomeMainSectionProps) => {
  const { title, body, image } = props;

  return (
    <div className=" py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            <Text id={title} defaultMessage={title} />
          </h1>
        </div>
        <div className="flex justify-center flex-wrap py-2 lg:pt-16">
          <div className="text w-full sm:w-full lg:w-6/12 md:w-full flex flex-col items-right pr-12">
            <div className="">
              <div className="ml-auto">
                <p className="font-thin text-sm md:text-xl lg:text-2xl text-center lg:text-right">
                  <Text id={body} defaultMessage={body} />
                </p>
              </div>
            </div>
            <div className="hidden lg:block mt-2 lg:mt-4 w-auto">
              <div className="flex justify-center md:justify-end">
                {/* <Button className="w-32">
                  <Link to="/get-start">
                    <Text id="app.get_started" defaultMessage="Get Started" />
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
          <div className="w-6/12 pt-5 md:pt-0">
            <div className="p-3 lg:p-0">
              <img className="rounded-lg shadow-lg" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
