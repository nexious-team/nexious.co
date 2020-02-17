import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Text } from 'react-intl';

const Sidebar = props => {
  return (
    <div
      style={{
        zIndex: 99,
        position: "absolute"
      }}
      className="w-full h-full top-0 left-0"
    >
      <div
        style={{
          background: "linear-gradient(to bottom, #15685A,#2AECC7)",
          zIndex: 100
        }}
        className="fixed w-full h-full "
      >
        <div className="flex justify-between items-center pt-8">
          <div className="pl-5">
            <p className="text-white text-5xl font-josefin pointer-cursor hover:text-black">
              <Link to="/" onClick={props.linkClick}>
                Nexious
              </Link>
            </p>
          </div>
          <div className="pr-4">
            <button
              onClick={props.sidebarClick}
              className="text-white text-4xl"
            >
              <svg
                id="Capa_1"
                enableBackground="new 0 0 413.348 413.348"
                height="30"
                viewBox="0 0 413.348 413.348"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="pt-10 pl-16">
          <ul className="text-white text-4xl font-bold font-josefin">
            <li className="py-2">
              <Link to="/contact" onClick={props.linkClick}>
                <Text id="app.contact" />
              </Link>
            </li>
            <li className="py-2" onClick={props.linkClick}>
              <Link to="/about"><Text id="app.about_us" /></Link>
            </li>
            <li className="py-2">
              <Link to="/service" onClick={props.linkClick}>
                <Text id="app.services" />
              </Link>
            </li>
            <li className="py-2">
              <Link to="/client" onClick={props.linkClick}>
                <Text id="app.clients" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
