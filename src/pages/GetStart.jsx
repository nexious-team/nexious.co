import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";

const GetStart = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    typeOfWebsite: "",
    summary: "",
    fromPage: "Get-Started"
  });
  const [showswal, setshow] = useState(false);
  const handleSend = event => {
    event.preventDefault();
    console.log(data);
    axios
      .post("https://formcarry.com/s/yHekjKv5uto", data, {
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
    <div className="container mx-auto pt-5">
      <div
        style={{ borderRadius: "1.5rem" }}
        className="bg-gray-100 rounded-xl mb-10 shadow-lg py-4 mx-2 md:mx-3 lg:mx-0"
      >
        <div className="m-5">
          <h1 className="text-center md:text-5xl text-4xl">
            Need A Website?
          </h1>
          <p className="text-center">
            Need help with an existing project? Visit the Support Center.
          </p>
        </div>
        <div>
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={e =>
                    setData({
                      firstName: e.target.value,
                      lastName: data.lastName,
                      email: data.email,
                      phone: data.phone,
                      typeOfWebsite: data.typeOfWebsite,
                      summary: data.summary,
                      fromPage: "Get-Started"
                    })
                  }
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  onChange={e =>
                    setData({
                      firstName: data.firstName,
                      lastName: e.target.value,
                      email: data.email,
                      phone: data.phone,
                      typeOfWebsite: data.typeOfWebsite,
                      summary: data.summary,
                      fromPage: "Get-Started"
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-for-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-for-email"
                  type="eamil"
                  placeholder="email@mail.com"
                  onChange={e =>
                    setData({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      email: e.target.value,
                      phone: data.phone,
                      typeOfWebsite: data.typeOfWebsite,
                      summary: data.summary,
                      fromPage: "Get-Started"
                    })
                  }
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-for-phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-for-phone"
                  type="number"
                  placeholder="012345678"
                  onChange={e =>
                    setData({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      email: data.email,
                      phone: e.target.value,
                      typeOfWebsite: data.typeOfWebsite,
                      summary: data.summary,
                      fromPage: "Get-Started"
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Type Of Website
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={e => {
                      setData({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        phone: data.phone,
                        typeOfWebsite: e.target.value,
                        summary: data.summary,
                        fromPage: "Get-Started"
                      });
                    }}
                  >
                    <option value disabled selected></option>
                    <option value="E-Commernce Website">
                      E-Commernce Website
                    </option>
                    <option value="Web Application">Web Application</option>
                    <option value="Branding Website">Branding Website</option>
                    <option value="Article Website">Article Website</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Website Summary
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  cols="30"
                  rows="10"
                  id="grid-message"
                  placeholder="Short Detail About Your Website"
                  onChange={e => {
                    setData({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      email: data.email,
                      phone: data.phone,
                      typeOfWebsite: data.typeOfWebsite,
                      summary: e.target.value,
                      fromPage: "Get-Started"
                    });
                  }}
                />
                <p className="text-gray-600 text-xs italic">
                  We will contact to you shortly
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <button
                style={{
                  background:
                    "linear-gradient(80deg, rgba(182, 244, 146,1), rgba(51, 139, 147,1),rgba(182, 244, 146,1))"
                }}
                className="w-11/12 h-10 mx-auto my-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSend}
              >
                SUBMIT NOW
              </button>
              <SweetAlert
                show={showswal}
                type="success"
                title="Thank You For Choosing Nexious"
                text="We will contact you shortly!"
                onConfirm={() => setshow(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
