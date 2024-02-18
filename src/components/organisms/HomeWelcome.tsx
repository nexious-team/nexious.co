import React from "react";
import homeWelcome from "../../assets/images/home_welcome.png";
import { FormattedMessage as Text } from "react-intl";

export default function HomeWelcome() {
  return (
    <div className="relative">
      <img
        className="object-cover w-full"
        src={homeWelcome}
        alt="Welcome to Nexious"
      />
      <div className="absolute inset-0 flex items-center p-24">
        <div className="">
          <h1 className="text-8xl text-gold">
            <Text id="home.freelancing_suite" />
          </h1>
          <p className="text-white text-xl mt-4">
            <Text id="home.build_your_freelancing_journey_with_us" />
          </p>
          <button className="text-xl bg-gold px-8 py-4 rounded-lg mt-16">
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
