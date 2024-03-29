import React from "react";

interface NavButtonProps {
  isTop: boolean;
  navClick: () => void;
}
const NavButton = (props: NavButtonProps) => {
  const { isTop, navClick } = props;

  return (
    <label onClick={navClick}>
      <svg
        style={{ marginTop: "-15px" }}
        width="32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 0 32 64"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g fill={isTop ? "#fff" : "#000"}>
            <path d="M2.252,10.271h58.871c1.124,0,2.034-0.91,2.034-2.034c0-1.123-0.91-2.034-2.034-2.034H2.252    c-1.124,0-2.034,0.911-2.034,2.034C0.218,9.36,1.128,10.271,2.252,10.271z" />
            <path d="m61.123,30.015h-58.871c-1.124,0-2.034,0.912-2.034,2.035 0,1.122 0.91,2.034 2.034,2.034h58.871c1.124,0 2.034-0.912 2.034-2.034-7.10543e-15-1.123-0.91-2.035-2.034-2.035z" />
            <path d="m61.123,53.876h-58.871c-1.124,0-2.034,0.91-2.034,2.034 0,1.123 0.91,2.034 2.034,2.034h58.871c1.124,0 2.034-0.911 2.034-2.034-7.10543e-15-1.124-0.91-2.034-2.034-2.034z" />
          </g>
        </g>
      </svg>
    </label>
  );
};

export default NavButton;
