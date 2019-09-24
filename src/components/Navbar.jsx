import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-router-dom";
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
const NavBar = props => {
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
  const nav_classes = "fixed top-0 w-full font-sans spring-nav z-50";
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
          className="container mx-auto md:px-10 lg:px-0 flex items-center justify-between"
        >
          <div className="flex-1 h-auto">
            {/* Left Element */}
            <div className="hidden lg:flex md:flex ml-5 justify-start font-sans">
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={
                    isTop
                      ? "text-sm text-white md:text-md lg:text-xl font-semibold font-josefin"
                      : "text-sm text-black md:text-md lg:text-xl font-semibold font-josefin"
                  }
                >
                  <Link to="/client">Clients</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={
                    isTop
                      ? "text-sm text-white md:text-md lg:text-xl font-semibold font-josefin"
                      : "text-sm text-black md:text-md lg:text-xl font-semibold font-josefin"
                  }
                >
                  <Link to="/service">Services</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={
                    isTop
                      ? "text-sm text-white md:text-md lg:text-xl font-semibold font-josefin"
                      : "text-sm text-black md:text-md lg:text-xl font-semibold font-josefin"
                  }
                >
                  <Link to="/about">Team</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className={
                    isTop
                      ? "text-sm text-white md:text-md lg:text-xl font-semibold font-josefin"
                      : "text-sm text-black md:text-md lg:text-xl font-semibold font-josefin"
                  }
                >
                  <Link to="/contact">Contact</Link>
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
          <div className="flex-1 h-auto text-center md:text-center lg:text-center px-5 ">
            <span
              onClick={() => handleNavbarSwitch("home")}
              className={
                isTop
                  ? "text-3xl text-white font-josefin"
                  : "text-3xl text-black font-josefin"
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
