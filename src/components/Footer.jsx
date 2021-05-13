import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";
import { FormattedMessage as Text } from "react-intl";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";
import { ReactComponent as PinterestIcon } from "../assets/icons/pinterest.svg";

const Footer = () => {
  const [email, setEmail] = useState({ email: "" });
  const [showswal, setshow] = useState(false);
  const handleSend = (event) => {
    event.preventDefault();
    console.log(email);
    if (email.email === "") return;
    axios
      .post("https://formcarry.com/s/yHekjKv5uto", email, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        console.log(response);
        setshow(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-gray-100 pt-16">
      <div className="font-semibold text-4xl text-center text-black tracking-widest">
        <Text id="footer.what_you_envision_come_to_existence" />
        <div
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            height: "3px",
            background:
              "linear-gradient(80deg, rgba(182, 244, 146,1), rgba(51, 139, 147,1))",
          }}
          className="absolute mx-auto rounded sm:w-10/12 lg:w-4/12"
        ></div>
      </div>
      <div className="font-serif text-xl text-black text-center pt-10 pb-20 flex justify-center">
        <div className="w-11/12 lg:w-1/2 ">
          <span className="">
            <Text id="footer.build_any_type_websites_" />
          </span>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(132, 186, 101,1), rgba(38, 112, 107,1))",
        }}
        className="flex justify-center"
      >
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-1/2 bg-whie py-10 md:flex justify-between">
          <div className="md:w-2/3">
            <div className="font-serif text-center md:text-left pb-2 text-gray-300 tracking-wide">
              <Text id="footer.email_us_so_we_" />:
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <form>
                  <input type="hidden" value="Footer" />
                  <input
                    type="text"
                    name="customer_email"
                    className="h-10 w-56 text-sm bg-gray-200 border-2 border-white rounded-full px-2 focus:outline-none"
                    placeholder="Your Email Here"
                    onChange={(e) => setEmail({ email: e.target.value })}
                  />
                  <button
                    style={{ backgroundColor: "#FFF" }}
                    className="h-10 px-4 text-sm rounded-full ml-2 text-black font-semibold"
                    onClick={handleSend}
                  >
                    <Text id="app.send" />
                  </button>
                  <SweetAlert
                    show={showswal}
                    type="success"
                    title="Sent"
                    text="We will contact you shortly!!"
                    onConfirm={() => setshow(false)}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="font-serif pb-2 text-gray-300 tracking-wide text-center md:text-left pt-5 md:pt-0 lg:pt-0">
              <Text id="footer.or_follow_us_on_" />:
            </div>
            <div className="flex justify-center md:justify-start -mx-2">
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://github.com/nexious-team"
                    alt="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://www.facebook.com/Nexious-116686833048782/"
                    alt="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://twitter.com/Nexious6"
                    alt="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://www.linkedin.com/in/nexious-team-07674319a/"
                    alt="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://www.pinterest.com/nexiousteam3410/"
                    alt="Pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 text-center text-black text-sm font-semibold bg-gray-300">
        <Text id="footer.copyright" /> © {new Date().getFullYear()}{" "}
        <Text id="footer.nexious_team_credits_powered_by_nexious_created_with_reactjs" />
      </div>
    </div>
  );
};

export default Footer;
