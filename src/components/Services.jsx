import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from "react-intl";

import { Button } from "elements";
import Service from "./Service";

const services = [
  {
    icon: "window-maximize",
    title: "home.web_application_development",
    description: "home.web_application_development_description",
  },
  {
    icon: "mobile-alt",
    title: "home.mobile_app_development",
    description: "home.mobile_app_development_description",
  },
  {
    icon: "pencil-ruler",
    title: "home.ui/ux_design",
    description: "home.ui/ux_design_description",
  },
  {
    icon: "pen-nib",
    title: "home.graphic_design",
    description: "home.graphic_design_description",
  },
  {
    icon: "window-restore",
    title: "home.website_building",
    description: "home.website_building_description",
  },
];

export default function Services() {
  return (
    <div className="px-4 py-8">
      <div className="text-center">
        <h3 className="text-3xl lg:text-5xl">
          <Text id="home.our_services" />
        </h3>
      </div>
      <div className="md:flex md:flex-wrap justify-center">
        {services.map((service) => (
          <div className="md:w-1/2 lg:w-1/3 px-4 py-12" key={service.title}>
            <Service service={service} />
          </div>
        ))}
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
            <Link to="/service">
              <Text id="app.see_more" defaultMessage="See More" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
