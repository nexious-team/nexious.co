import React from "react";
import { Button } from 'elements';

export default class Navbar extends React.Component {
  state = {
    hamburgerToggle: false
  };
  handleToggle = () => {
    this.setState({ hamburgerToggle: !this.state.hamburgerToggle });
  };
  getToggleClass() {
    let classes = "lg:flex lg:items-center lg:w-auto w-full ";
    if (!this.state.hamburgerToggle) classes += "hidden";
    return classes;
  }
  render() {
    const Link = this.props.link;
    return (
      <header className="lg:px-16 px-12 bg-grey-200 flex flex-wrap items-center lg:py-5 py-2 shadow-md">
        <div className="flex-1 flexjustify-between items-center text-grey-200">
          <Link to="/" className="text-4xl text-grey-200">
            Nexious
          </Link>
        </div>

        <label
          className="cursor-pointer lg:hidden block"
          onClick={this.handleToggle}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>

        <div className={this.getToggleClass()} id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  to="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Button name="Let's start" color="white" classes="mt-3 lg:mt-0 lg:ml-3"/>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
