import React from "react";
import { FormattedMessage as Text } from "react-intl";

import Button from "../../elements/Button";
import homeMission from "../../assets/images/mission.png";
import homeVision from "../../assets/images/vision.png";

export default function HomeMissionVision() {
  return (
    <div>
      <div className="mt-8 lg:mt-0">
        <div className="lg:relative">
          <div className="hidden lg:flex items-center ">
            <div className="w-full md:w-3/6 lg:w-3/6">
              <img className="object-cover" src={homeMission} alt="" />
            </div>
            <div className="text-center w-0 md:w-2/5 lg:w-2/5"></div>
          </div>
          <div className="flex items-center lg:absolute inset-0">
            <div className="md:w-3/6 lg:w-3/6"></div>
            <div className="text-center md:w-3/6 lg:w-3/6 px-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                <Text id="home.our_mission" />
              </h1>
              <p className="text-base lg:text-lg xl:text-xl mt-4 px-8">
                <Text id="home.our_mission_description" />
              </p>
              <div className="mt-8">
                <Button variant="normal" className="w-32">
                  <a
                    href="https://knowat.nexious.co"
                    aria-label="Knowat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text id="about.learn_more" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="relative">
          <div className="hidden lg:flex items-center">
            <div className="w-1/5 md:w-2/5 lg:w-3/6 text-center"></div>
            <div className="w-4/5 md:w-3/5 lg:w-3/6">
              <img
                className="w-full object-cover"
                src={homeVision}
                alt="Vision"
              />
            </div>
          </div>
          <div className="flex items-center lg:absolute inset-0">
            <div className="text-center px-6 md:w-3/6 lg:w-3/6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                <Text id="home.our_vision" />
              </h1>
              <p className="text-base lg:text-lg xl:text-xl mt-4 px-8">
                <Text id="home.our_vision_description" />
              </p>
              <div className="mt-8">
                <Button variant="normal" className="w-32">
                  <a
                    href="https://knowat.nexious.co"
                    aria-label="Knowat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text id="about.learn_more" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="vision-image md:w-3/6 lg:w-3/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
