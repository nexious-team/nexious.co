import React from "react";
import homeWelcome from "../../assets/images/home_welcome.png";
import { FormattedMessage as Text } from "react-intl";

export default function HomeWelcome() {
  return (
    <div className="relative">
      <img
        className="object-cover w-full h-80 lg:h-auto"
        src={homeWelcome}
        alt="Welcome to Nexious"
      />
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="absolute inset-0 flex items-center p-8 lg:p-24">
        <div className="mt-16">
          <h1 className="text-2xl lg:text-5xl xl:text-7xl text-gold">
            <Text id="home.freelancing_suite" />
          </h1>
          <p className="text-white lg:text-2xl mt-0 lg:mt-4">
            <Text id="home.build_your_freelancing_journey_with_us" />
          </p>
          <button className="text-base lg:text-xl bg-gold px-4 lg:px-8 py-2 lg:py-4 rounded-lg mt-8 lg:mt-16">
            <a
              href="https://knowat.nexious.co"
              aria-label="Knowat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text id="home.connect" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
