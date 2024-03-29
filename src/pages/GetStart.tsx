import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";
import { FormattedMessage as Text } from 'react-intl';

const languages = {
  En: {
    default: 'Select a type',
    types: ['E-Commernce Website', 'Web Application', 'Branding Website', 'Article Website', 'Other'],
    placeholders: {
      firstName: "Jane",
      lastName: "Doe",
      description: "Short Detail About Your Website"
    }
  },
  Km: {
    default: 'ជ្រើសរើសប្រភេទ​ណាមួយ',
    types: ['គេហទំព័រសម្រាប់លក់តាមអ៊ីនធឺណិត', 'កម្មវិធីគេហទំព័រ', 'គេហទំព័រពាណិជ្ជកម្ម', 'គេហទំព័រអត្ថបទ','ផ្សេងទៀត' ],
    placeholders: {
      firstName: "សុខ",
      lastName: "សាន",
      description: "ពត៌មានលំអិតខ្លីអំពីគេហទំព័ររបស់អ្នក"
    }
  }
}

const GetStart = () => {
  const lang = localStorage.getItem('lang') || 'En';

  const websiteTypes = languages[lang].types;
  const defaultWebsiteType = languages[lang].default;

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
      .then(function (response) {
        console.log(response);
        setshow(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPlaceholder = (key) => languages[lang].placeholders[key];

  return (
    <div className="container mx-auto pt-5">
      <div
        className="w-full sm:w-11/12 lg:w-2/3 mx-auto rounded-xl mb-10 shadow-lg py-4"
      >
        <div className="m-5">
          <h1 className="text-center md:text-5xl text-4xl">
            <Text id="get_started.need_a_website" />
          </h1>
          <p className="text-center text-gray-500">
            <Text id="get_started.need_help_with_an_" />
          </p>
        </div>
        <div className="mt-12">
          <form className="w-full px-8 md:px-12 lg:px-20">
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  <Text id="get_started.first_name" />
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder={getPlaceholder('firstName')}
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
                  <Text id="get_started.last_name" />
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder={getPlaceholder('lastName')}
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
                  <Text id="get_started.email" />
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  <Text id="get_started.phone" />
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  <Text id="get_started.type_of_website" />
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-100 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                    <option value={defaultWebsiteType}>{defaultWebsiteType}</option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
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
                  <Text id="get_started.website_summary" />
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  cols={30}
                  rows={10}
                  id="grid-message"
                  placeholder={getPlaceholder('description')}
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
                  <Text id="get_started.we_will_contact_you_shortly" />
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <button
                className="w-11/12 h-12 mx-auto my-3 border-2 bg-black text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleSend}
              >
                <Text id="get_started.submit_now" />
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
