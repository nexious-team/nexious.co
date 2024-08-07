import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-router-dom";
// import { FormattedMessage } from 'react-intl';
// import NavButton from "../elements/NavButton";
// import RegisterButton from "../elements/NavBarRegButton";
// import Sidebar from "./Sidebar";
import "../assets/navbar.css";
import FlagButton from "../elements/FlagButton";
import { classNames } from "../utils";

interface NavbarProps {
  lang: string;
  onLangChange: () => void;
}
export default function Navbar(props: NavbarProps) {
  const { lang, onLangChange } = props;
  // const [sidebar, setSidebar] = useState(false);
  const [isTop, setTop] = useState(true);
  const fade_animation = useSpring({
    background: isTop
      ? "radial-gradient(circle, rgba(1,0,0,0),  rgba(0,0,0,0))"
      : "radial-gradient(circle, #FFFFF3, #FFFFF)",
    config: { mass: 1 },
  });
  const fade_animation_height = useSpring({
    config: { tension: 200 },
  });
  const handleNavbarSwitch = (to_path: string) => {
    if (to_path !== "home") {
      setTop(false);
    } else {
      // setTop(true);
    }
  };

  // const navTextSize = lang === 'En' ? 'text-sm md:text-md lg:text-xl' : 'text-sm md:text-md lg:text-base mx-2'
  // const navLinkClassNames = `font-semibold  ${navTextSize} ${isTop ? " text-white" : " text-black"}`

  useEffect(() => {
    if (window.location.pathname === "/") {
      document.addEventListener("scroll", () => {
        const Top = window.scrollY < 200;
        if (Top !== isTop) {
          setTop(Top);
        }
        //console.log(window.location.pathname);
      });
    } else {
      setTop(false);
    }
  }, [isTop]);

  return (
    <div className="mb-20">
      {/* {sidebar ? (
        <div className="">
          <Sidebar
            onClick={() => setSidebar(() => false)}
            onLinkClick={() => setSidebar(() => false)}
          ></Sidebar>
        </div>
      ) : (
          ""
        )} */}
      <a.nav
        className={classNames(
          "fixed top-0 w-full spring-nav z-50",
          isTop ? "bg-black" : " shadow"
        )}
        style={fade_animation}
      >
        <a.div
          style={fade_animation_height}
          className="container mx-auto md:px-0 lg:px-0 flex items-center justify-between h-16 lg:h-20"
        >
          <div className="flex-1 h-auto">
            {/* Left Element */}
            {/* <div className="hidden lg:flex md:flex ml-5 justify-start ">
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={navLinkClassNames}
                >
                  <Link to="/client"><FormattedMessage id="app.clients" defaultMessage="Clients" /></Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={navLinkClassNames}
                >
                  <Link to="/service"><FormattedMessage id="app.services" defaultMessage="Services" /></Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={navLinkClassNames}
                >
                  <Link to="/about"><FormattedMessage id="app.about_us" defaultMessage="About Us" /></Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={navLinkClassNames}
                >
                  <Link to="/contact"><FormattedMessage id="app.contact" defaultMessage="Contact" /></Link>
                </span>
              </div>
            </div> */}
            {/* <div className="lg:hidden md:hidden flex justify-start items-center ml-3">
              <div className="justify-center items-center align-center h-auto pt-3">
                <NavButton isTop={isTop} navClick={() => setSidebar(true)} />
              </div>
            </div> */}
          </div>

          {/* Middle Elements */}
          <div className="font-josefin flex-1 h-auto text-center md:text-center px-5 ">
            <span
              onClick={() => handleNavbarSwitch("home")}
              className={
                isTop
                  ? "text-xl lg:text-3xl text-white "
                  : "text-xl lg:text-3xl text-black "
              }
            >
              <Link to="/">Nexious</Link>
            </span>
          </div>

          {/* Right Elements */}
          <div className="flex-1 h-auto">
            <div className=" flex md:flex justify-end pr-2 lg:mr-4">
              <div className="my-auto mr-6">
                <FlagButton lang={lang} onClickFlag={onLangChange} />
              </div>
              {/* <Link
                onClick={() => handleNavbarSwitch("get-start")}
                to="/get-start"
              >
                <RegisterButton isTop={isTop} />
              </Link> */}
            </div>
            {/* <div className="lg:hidden md:hidden flex justify-end items-center">
          <div className="justify-center items-center align-center h-auto pt-3">
            <NavButton navClick={this.handleRightNavToggle} />
          </div>
        </div> */}
          </div>
        </a.div>
      </a.nav>
    </div>
  );
}
