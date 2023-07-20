import React from "react";
import { FormattedMessage as Text } from "react-intl";
import CloudStoreFull from "../assets/images/projects/cloud_store_full.png";
import CloudStoreDashboard from "../assets/images/projects/cloud_store_dashboard.png";
import FL20UI from "../assets/images/projects/fl_20_ui.png";
import FL20Dashboard from "../assets/images/projects/fl_20_dashboard.png";
import { classNames } from '../utils'

export default function PagesClient() {

  return (
    <div className="container mx-auto mt-40">
      <div className="text-center">
        <h1 className="md:text-5xl text-4xl font-bold">
          <Text id="client.all_types_of_website_which_we_are_capable_to_create_for_clients" />
        </h1>
        <p className="text-xl">
          <Text id="client.here_are_what_you_want_to_create" />
        </p>
      </div>
      <div className="mt-20">
        <Project
          name="Cloud-Store"
          ui={CloudStoreFull}
          dashboard={CloudStoreDashboard} 
          bgColor="bg-red-600"
          link="store.nexious.co"
          href="https://store.nexious.co"
        />
      </div>
      <div className="mt-20">
        <Project
          name="FL-20"
          ui={FL20UI}
          dashboard={FL20Dashboard} 
          bgColor="bg-blue-500"
          link="fl-20-landing-page.vercel.app"
          href="https://fl-20-landing-page.vercel.app"
        />
      </div>
    </div>
  );
}

function Project({ name, ui, dashboard, link, href, bgColor }) {

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">{name}</h2>
      </div>
      <div className="mt-8 flex -mx-2">
        <div className="px-2 w-1/2">
          <h3 className="ml-4">UI</h3>
          <div className="toi w-full h-96 rounded-lg group">
            <img className="toi-image w-full h-full object-cover object-top rounded-lg" src={ui} alt="" />
            <div className={classNames("toi-overlay rounded-lg", bgColor)}>
              <div className="toi-text hover:underline">
                <a href={href} target="_blank" rel="noreferrer">{link}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <h3 className="ml-4">Dashboard</h3>
          <div className="w-full h-96 rounded-lg">
            <img className="w-full h-full object-fit object-top rounded-lg" src={dashboard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
