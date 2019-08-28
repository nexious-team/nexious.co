import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
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
const NavBar = () => {
  const [state, setState] = useState({
    leftNavClicked: false,
    rightNavClicked: false
  });
  const [isTop, setTop] = useState(true);
  const fade_animation = useSpring({
    background: isTop
      ? "radial-gradient(circle, rgba(1,0,0,0),  rgba(0,0,0,0))"
      : "radial-gradient(circle, #FFFFF2, #FFFFF)",
    height: isTop ? "6rem" : "5rem",
    config: { mass: 1 }
  });
  const fade_animation_height = useSpring({
    height: isTop ? "6rem" : "5rem",
    config: { tension: 200 }
  });
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const Top = window.scrollY < 100;
      if (Top !== isTop) {
        setTop(Top);
      }
      console.log("scrolling");
    });
  });
  const nav_classes = "fixed top-0 w-full font-sans spring-nav ";
  const handleLeftNavToggle = () => {
    this.setState({ leftNavClicked: !this.state.leftNavClicked });
  };
  const handleRightNavToggle = () => {
    this.setState({ rightNavClicked: !this.state.rightNavClicked });
  };
  return (
    <div>
      <a.nav
        className={isTop ? nav_classes + "bg-black" : nav_classes + " shadow"}
        style={fade_animation}
      >
        <a.div
          style={fade_animation_height}
          className="container mx-auto flex items-center justify-between"
        >
          <div className="flex-1 h-auto">
            {/* Left Element */}
            <div className="hidden lg:flex md:flex justify-start font-sans">
              <div className="w-auto px-2 lg:mx-2">
                <span className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin">
                  Clients
                </span>
              </div>
              <div className="w-auto px-2 lg:mx-2">
                <span className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin">
                  Services
                </span>
              </div>
              <div className="w-auto px-2 lg:mx-2">
                <span className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin">
                  Team
                </span>
              </div>
              <div className="w-auto px-2 lg:mx-2">
                <span className="text-sm text-gray-700 lg:text-xl font-semibold font-josefin">
                  Contact
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
              className={
                isTop
                  ? "text-3xl text-gray-700 font-josefin"
                  : "text-3xl text-black font-josefin"
              }
            >
              Nexious
            </span>
          </div>

          {/* Right Elements */}
          <div className="flex-1 h-auto">
            <div className=" flex md:flex justify-end pr-2 lg:mr-4">
              <RegisterButton isTop={isTop} />
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
