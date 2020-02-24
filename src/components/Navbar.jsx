import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import NavButton from "../commons/NavButton";
import RegisterButton from "../elements/NavBarRegButton";
import Sidebar from "./Sidebar";
import "../assets/navbar.css";
// const method = {
//   componentDidMount() {
//     document.addEventListener("scroll", () => {
//       const isTop = window.scrollY < 100;
//       if (isTop !== this.state.isTop) {
//         this.setState({ isTop }, () => {
//           console.log(this.state.isTop);
//         });
//       }
//     });
//   }
// };
const NavBar = ({ lang }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isTop, setTop] = useState(true);
  const fade_animation = useSpring({
    background: isTop
      ? "radial-gradient(circle, rgba(1,0,0,0),  rgba(0,0,0,0))"
      : "radial-gradient(circle, #FFFFF3, #FFFFF)",
    height: isTop ? "6rem" : "5rem",
    config: { mass: 1 }
  });
  const fade_animation_height = useSpring({
    height: isTop ? "6rem" : "5rem",
    config: { tension: 200 }
  });
  const handleNavbarSwitch = to_path => {
    if (to_path !== "home") {
      setTop(false);
    } else {
      // setTop(true);
    }
  };

  const navTextSize = lang === 'en' ? 'text-sm md:text-md lg:text-xl' : 'text-sm md:text-md lg:text-base mx-2'
  const navLinkClassNames = `font-semibold  ${navTextSize} ${ isTop ? " text-white" : " text-black"}`

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
  const nav_classes = "fixed top-0 w-full  spring-nav z-50";
  return (
    <div className="mb-20">
      {sidebar ? (
        <div className="">
          <Sidebar
            sidebarClick={() => setSidebar(state => false)}
            linkClick={() => setSidebar(state => false)}
          ></Sidebar>
        </div>
      ) : (
          ""
        )}
      <a.nav
        className={isTop ? nav_classes + "bg-black" : nav_classes + " shadow"}
        style={fade_animation}
      >
        <a.div
          style={fade_animation_height}
          className="container mx-auto md:px-0 lg:px-0 flex items-center justify-between"
        >
          <div className="flex-1 h-auto">
            {/* Left Element */}
            <div className="hidden lg:flex md:flex ml-5 justify-start ">
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
            </div>
            <div className="lg:hidden md:hidden flex justify-start items-center ml-3">
              <div className="justify-center items-center align-center h-auto pt-3">
                <NavButton isTop={isTop} navClick={() => setSidebar(true)} />
              </div>
            </div>
          </div>

          {/* Middle Elements */}
          <div className="font-josefin flex-1 h-auto text-center md:text-center lg:text-center px-5 ">
            <span
              onClick={() => handleNavbarSwitch("home")}
              className={
                isTop
                  ? "text-3xl text-white "
                  : "text-3xl text-black "
              }
            >
              <Link to="/">Nexious</Link>
            </span>
          </div>

          {/* Right Elements */}
          <div className="flex-1 h-auto">
            <div className=" flex md:flex justify-end pr-2 lg:mr-4">
              <Link
                onClick={() => handleNavbarSwitch("get-start")}
                to="/get-start"
              >
                <RegisterButton className="navnbar-reg-btn" isTop={isTop} />
              </Link>
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
};
export default NavBar;

// class NavBar extends Component {
//   state = {
//     leftNavClicked: false,
//     rightNavClicked: false,
//     isTop: true
//   };
//   componentDidMount() {
//     document.addEventListener("scroll", () => {
//       const isTop = window.scrollY < 100;
//       if (isTop !== this.state.isTop) {
//         this.setState({ isTop }, () => {
//           console.log(this.state.isTop);
//         });
//       }
//     });
//   }
//   handleLeftNavToggle = () => {
//     this.setState({ leftNavClicked: !this.state.leftNavClicked });
//   };
//   handleRightNavToggle = () => {
//     this.setState({ rightNavClicked: !this.state.rightNavClicked });
//   };

//   render() {
//     const nav_classes = "fixed top-0 w-full h-20 font-sans ";
//     const nav_fade_animation = useSpring({
//       from: { opacity: 0.75 },
//       to: { opacity: 1 }
//     });
//     return (

//     );
//   }
// }

// export default NavBar;
