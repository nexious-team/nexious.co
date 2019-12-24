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
              Or follow us on these social media!
            </div>
            <div className="flex justify-between px-10 md:px-0 lg:px-0">
              <div className="w-10 h-10">
                <a href="https://github.com/nexious-team" alt="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg 
                    version="1.1" 
                    id="Capa_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0px" 
                    y="0px"
                    viewBox="0 0 438.549 438.549" style={{enableBackground:"new 0 0 438.549 438.549"}}
                  >
                    <g>
                      <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                        c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                        c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                        c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                        c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                        c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                        c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                        c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                        c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                        c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                        c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                        c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                        c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                        c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                        c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                        c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                        c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                        c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                        c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                        C438.536,184.851,428.728,148.168,409.132,114.573z"/>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://www.facebook.com/Nexious-116686833048782/" alt="Facebook" target="_blank" rel="noopener noreferrer">
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
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://twitter.com/Nexious6" alt="Twitter" target="_blank" rel="noopener noreferrer">
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
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://www.linkedin.com/in/nexious-team-07674319a/" alt="Twitter" target="_blank" rel="noopener noreferrer">
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
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://www.pinterest.com/nexiousteam3410/" alt="Twitter" target="_blank" rel="noopener noreferrer">
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
                </a>
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
