import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";

const Footer = () => {
  const [email, setEmail] = useState({ email: "" });
  const [showswal, setshow] = useState(false);
  const handleSend = event => {
    event.preventDefault();
    console.log(email);
    if (email.email === "") return;
    axios
      .post("https://formcarry.com/s/yHekjKv5uto", email, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        console.log(response);
        setshow(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-gray-100 pt-16">
      <div className="font-sans font-semi-bold text-4xl text-center text-black tracking-widest">
        What You Envision, Come To Existence
        <div
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            height: "3px",
            background:
              "linear-gradient(80deg, rgba(182, 244, 146,1), rgba(51, 139, 147,1))"
          }}
          className="absolute mx-auto rounded sm:w-10/12 lg:w-4/12"
        ></div>
      </div>
      <div className="font-sans font-semi-bold text-xl text-black text-center pt-10 pb-20 flex justify-center">
        <div className="w-11/12 lg:w-1/2 ">
          <span className="font-serif">
            Build any type websites you can imagine with Nexious. We build
            professional looking website with modern design using the latest
            technologies for easily maintainability and usability.
          </span>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(132, 186, 101,1), rgba(38, 112, 107,1))"
        }}
        className="font-sans font-semi-bold bg-black text-lg text-black flex justify-center"
      >
        <div className="w-11/12 md:w-11/12 lg:w-8/12 xl:w-1/2 bg-whie py-10 md:flex lg:flex justify-between">
          <div>
            <div className=" font-serif text-center md:text-left lg:text-left pb-4 text-white tracking-wide font-sans font-semi-bold">
              Email us so we can talk
            </div>
            <div className="flex justify-center lg:justify-start">
              <div>
                <form>
                  <input type="hidden" value="Footer" />
                  <input
                    type="text"
                    name="customer_email"
                    className="h-10 w-56 bg-gray-200 border-2 border-white rounded-lg px-2"
                    placeholder=" Your Email Here"
                    onChange={e => setEmail({ email: e.target.value })}
                  />
                  <button
                    style={{ backgroundColor: "#FFF" }}
                    className="h-10 px-4 rounded-lg ml-2 text-black font-semi-bold"
                    onClick={handleSend}
                  >
                    Send
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
          <div>
            <div className="font-serif pb-4 text-white tracking-wide font-sans font-semi-bold text-center lg:text-left pt-5 md:pt-0 lg:pt-0">
              Or Follow On These Social Media!
            </div>
            <div className="flex justify-between px-10 md:px-0 lg:px-0">
              <div className="w-10 h-10">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 112.196 112.196"
                >
                  <g>
                    <circle
                      style={{ fill: "#3B5998" }}
                      cx="56.098"
                      cy="56.098"
                      r="56.098"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
		c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 89.758 89.758"
                >
                  <g>
                    <path
                      style={{ fill: "#6A453B" }}
                      d="M58.255,23.88H31.503c-4.27,0-7.744,3.474-7.744,7.744v26.752c0,4.27,3.474,7.745,7.744,7.745
		h26.752c4.27,0,7.745-3.474,7.745-7.745V31.624C66,27.354,62.526,23.88,58.255,23.88z M44.879,58.906
		c-7.667,0-13.905-6.238-13.905-13.906c0-7.667,6.238-13.905,13.905-13.905c7.668,0,13.906,6.238,13.906,13.905
		C58.785,52.667,52.546,58.906,44.879,58.906z M59.232,33.97c-1.815,0-3.291-1.476-3.291-3.29c0-1.814,1.476-3.29,3.291-3.29
		c1.814,0,3.29,1.476,3.29,3.29C62.522,32.494,61.046,33.97,59.232,33.97z"
                    />
                    <path
                      style={{ fill: "#6A453B" }}
                      d="M44.879,36.971c-4.426,0-8.03,3.602-8.03,8.028c0,4.428,3.604,8.031,8.03,8.031
		c4.428,0,8.029-3.603,8.029-8.031C52.908,40.574,49.306,36.971,44.879,36.971z"
                    />
                    <path
                      style={{ fill: "#6A453B" }}
                      d="M44.879,0C20.094,0,0,20.094,0,44.879c0,24.785,20.094,44.879,44.879,44.879
		c24.785,0,44.879-20.094,44.879-44.879C89.758,20.094,69.664,0,44.879,0z M71.875,58.376c0,7.511-6.109,13.62-13.62,13.62H31.503
		c-7.51,0-13.62-6.109-13.62-13.62V31.624c0-7.51,6.11-13.62,13.62-13.62h26.752c7.511,0,13.62,6.11,13.62,13.62V58.376z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 112.197 112.197"
                >
                  <g>
                    <circle
                      style={{ fill: "#55ACEE" }}
                      cx="56.099"
                      cy="56.098"
                      r="56.098"
                    />
                    <g>
                      <path
                        style={{ fill: "#F1F2F2" }}
                        d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
			c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
			c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
			c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
			c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
			c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
			c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
			C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 112.196 112.196"
                >
                  <g>
                    <circle
                      style={{ fill: "#007AB9" }}
                      cx="56.098"
                      cy="56.097"
                      r="56.098"
                    />
                    <g>
                      <path
                        style={{ fill: "#F1F2F2" }}
                        d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 112.198 112.198"
                >
                  <g>
                    <circle
                      style={{ fill: "#CB2027" }}
                      cx="56.099"
                      cy="56.1"
                      r="56.098"
                    />
                    <g>
                      <path
                        style={{ fill: "#F1F2F2" }}
                        d="M60.627,75.122c-4.241-0.328-6.023-2.431-9.349-4.45c-1.828,9.591-4.062,18.785-10.679,23.588
			c-2.045-14.496,2.998-25.384,5.34-36.941c-3.992-6.72,0.48-20.246,8.9-16.913c10.363,4.098-8.972,24.987,4.008,27.596
			c13.551,2.724,19.083-23.513,10.679-32.047c-12.142-12.321-35.343-0.28-32.49,17.358c0.695,4.312,5.151,5.621,1.78,11.571
			c-7.771-1.721-10.089-7.85-9.791-16.021c0.481-13.375,12.018-22.74,23.59-24.036c14.635-1.638,28.371,5.374,30.267,19.14
			C85.015,59.504,76.275,76.33,60.627,75.122L60.627,75.122z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="pt-5 flex justify-center">
              <div className="text-white text-sm">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-300 text-black py-2 font-semi-bold">
        Copyright © 2019 Nexious Team | Credits | Powered by Nexious | Created
        with React
      </div>
    </div>
  );
};

export default Footer;
