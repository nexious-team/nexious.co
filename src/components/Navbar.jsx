import React, { useState, useEffect, useCallback } from "react";
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-router-dom";
import lifecycle from "react-pure-lifecycle";
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
const componentDidMount = props => {
  // document.addEventListener("scroll", () => {
  //   const isTop = window.scrollY < 100;
  //   if (isTop !== this.state.isTop) {
  //     this.state.setState({ isTop }, () => {
  //       console.log(props.state.isTop);
  //     });
  //   }
  // });
  console.log("I mounted! Here are my props: ", props);
};
const methods = {
  componentDidMount
};
const NavBar = props => {
  const [state, setState] = useState({
    leftNavClicked: false,
    rightNavClicked: false
  });
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
      setTop(true);
    }
  };
  useEffect(() => {
    if (window.location.pathname == "/") {
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
  });
  const nav_classes = "fixed top-0 w-full font-sans spring-nav z-10";
  const handleLeftNavToggle = () => {
    this.setState({ leftNavClicked: !this.state.leftNavClicked }, () => {
      console.log(window.location.pathname);
    });
    if (window.location.pathname != "/") {
      setTop(isTop => false);
      console.log(window.location.pathname);
    }
  };
  return (
    <div className="mb-20">
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
                  className="text-sm text-gray-700 md:text-md lg:text-xl font-semibold font-josefin"
                >
                  <Link to="/service">Clients</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin"
                >
                  <Link to="/service">Services</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin"
                >
                  <Link to="/about">Team</Link>
                </span>
              </div>
              <div className="w-auto px-1 lg:px-1 mx-0 md:mx-1 lg:mx-1">
                <span
                  onClick={() => handleNavbarSwitch("client")}
                  className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin"
                >
                  <Link to="/about">Contact</Link>
                </span>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex justify-start items-center ml-3">
              <div className="justify-center items-center align-center h-auto pt-3">
                <NavButton navClick={() => handleLeftNavToggle} />
              </div>
            </div>
          </div>

          {/* Middle Elements */}
          <div className="flex-1 h-auto text-center md:text-center lg:text-center px-5 ">
            <span
              onClick={() => handleNavbarSwitch("home")}
              className={
                isTop
                  ? "text-3xl text-gray-700 font-josefin"
                  : "text-3xl text-black font-josefin"
              }
            >
              <Link to="/">Nexious</Link>
            </span>
          </div>

          {/* Right Elements */}
          <div className="flex-1 h-auto">
            <div className=" flex md:flex justify-end pr-2 lg:mr-4">
              <RegisterButton className="navnbar-reg-btn" isTop={isTop} />
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
export default lifecycle(methods)(NavBar);

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
