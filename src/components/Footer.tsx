import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";
import { FormattedMessage as Text } from "react-intl";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook-brands.svg";
// import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
// import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
// import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";
// import { ReactComponent as PinterestIcon } from "../assets/icons/pinterest.svg";
// import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { classNames } from "../utils";

const validateEmail = (v: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    v
  );
};

export default function Footer() {
  const [email, setEmail] = useState({ email: "" });
  const [showswal, setshow] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const onChangeEmail = (e: any) => {
    if (!isValidEmail) setIsValidEmail(true);
    setEmail({ email: e.target.value });
  };

  const handleSend = (event: any) => {
    event.preventDefault();
    console.log(email);
    const isValid = validateEmail(email.email);
    if (!isValid) {
      setIsValidEmail(false);
      return;
    }
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
      <div className="font-semibold text-2xl lg:text-4xl text-center text-black tracking-widest">
        <Text id="footer.what_you_envision_come_to_existence" />
        <div
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            height: "3px",
            background:
              "linear-gradient(80deg, rgba(209, 213, 219,1), rgba(31, 41, 55,1))",
          }}
          className="absolute mx-auto rounded sm:w-10/12 lg:w-4/12"
        ></div>
      </div>
      {/* <div className="text-xl text-black text-center pt-10 pb-20 flex justify-center">
        <div className="w-11/12 lg:w-1/2 ">
          <Icon icon="quote-left" size="xs" />
          <span className="px-2">
            <Text id="footer.build_any_type_websites_" />
          </span>
          <Icon icon="quote-right" size="xs" />
        </div>
      </div> */}
      <div className="flex justify-center">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-1/2 bg-white py-10 md:flex justify-between">
          <div className="md:w-2/3">
            <div className="flex justify-center md:justify-start">
              <div>
                <form>
                  <div className="pb-1 tracking-wide">
                    <Text id="footer.email_us_so_we_" />:
                  </div>
                  <input type="hidden" value="Footer" />
                  <input
                    type="text"
                    name="customer_email"
                    className={classNames(
                      "h-10 w-64 text-sm bg-gray-200 border-2 rounded-lg px-2 focus:outline-none",
                      isValidEmail ? "border-black" : "border-red-500"
                    )}
                    placeholder="Email address"
                    onChange={onChangeEmail}
                  />
                  <button
                    style={{ backgroundColor: "#FFF" }}
                    className="h-10 px-6 text-sm rounded-lg ml-2 text-black font-semibold border-2 border-black"
                    onClick={handleSend}
                  >
                    <Text id="app.send" />
                  </button>
                  {!isValidEmail && (
                    <p className="mt-1 text-xs text-red-500">
                      <Text id="app.please_input_a_valid_email" />!
                    </p>
                  )}
                  <SweetAlert
                    show={showswal}
                    type="success"
                    title="Sent"
                    confirmButtonColor="black"
                    text="We will contact you shortly!!"
                    onConfirm={() => setshow(false)}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="pb-2 tracking-wide text-center md:text-left pt-5 md:pt-0 lg:pt-0">
              <Text id="footer.or_follow_us_on_" />:
            </div>
            <div className="flex justify-center md:justify-start -mx-2">
              {/* <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://github.com/nexious-team"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div> */}
              <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://www.facebook.com/NexiousDigitalSolutions"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
              {/* <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://twitter.com/Nexious6"
                    aria-label="Twitter"
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
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div> */}
              {/* <div className="px-2">
                <div className="w-8 h-8">
                  <a
                    href="https://www.pinterest.com/nexiousteam3410/"
                    aria-label="Pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 text-center text-gray-300 text-sm bg-gray-900">
        © {new Date().getFullYear()} Nexious. <Text id="footer.copyright" />{" "}
        {" | "} <Text id="footer.powered_by_nexious" />
      </div>
    </div>
  );
}
