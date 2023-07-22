import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage as Text } from 'react-intl';

const languages = {
  En: {
    name: "Jane Doe",
    description: "Please write your message here"
  }, 
  Km: {
    name: "សុខ សាន",
    description: "សូមសរសេរសាររបស់អ្នកនៅទីនេះ"
  }
}

function PagesClient() {
  const lang = localStorage.getItem('lang') || 'En'

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    fromPage: "Contact"
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

  const getPlaceholder = (key) => languages[lang][key];

  return (
    <div className="w-full">
      <div className="bg-bottom bg-blue-400 bg-opacity-50 h-96 flex items-center justify-center" 
        style={{backgroundImage: `url('/img/contact_us.jpg')`}}
      >
        {/* <img className="h-120 w-full object-cover lg:-mt-32" src="/img/contact_us.jpg" alt="" /> */}
        <div className="flex justify-center mt-12 lg:mt-0 lg:items-center text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <Text id="contact.lets_get_in_touch" />
        </div>
      </div>
      <div className="w-full sm:w-11/12 lg:w-2/3 mx-auto py-12 bg-white rounded-lg shadow-lg mb-3 -mt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            <Text id="contact.contact_us" />
          </h1>
        </div>
        <form className="w-full max-w-lg mx-auto mt-12">
          <div className="flex flex-wrap -mx-3 md:mb-6">
            <div className="w-full px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                <Text id="contact.your_name" />
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder={getPlaceholder("name")}
                onChange={e =>
                  setData({
                    name: e.target.value,
                    email: data.email,
                    phone: data.phone,
                    message: data.message,
                    fromPage: "Contact"
                  })
                }
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 md:mb-6">
            <div className="w-full md:w-1/2 px-2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-for-email"
              >
                <Text id="contact.email" />
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-for-email"
                type="eamil"
                placeholder="email@mail.com"
                onChange={e =>
                  setData({
                    name: data.name,
                    email: e.target.value,
                    phone: data.phone,
                    message: data.message,
                    fromPage: "Contact"
                  })
                }
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-for-phone"
              >
                <Text id="contact.phone" />
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-for-phone"
                type="number"
                placeholder="012345678"
                onChange={e =>
                  setData({
                    name: data.name,
                    email: data.email,
                    phone: e.target.value,
                    message: data.message,
                    fromPage: "Contact"
                  })
                }
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                <Text id="contact.message" />
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                cols={30}
                rows={6}
                id="grid-message"
                placeholder={getPlaceholder("description")}
                onChange={e =>
                  setData({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: e.target.value,
                    fromPage: "Contact"
                  })
                }
              />
              <p className="text-gray-600 text-xs italic">
                <Text id="contact.we_will_contact_you_shortly" />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
            <button
              className="mx-auto my-3 bg-black text-white font-bold py-2 rounded-lg w-full"
              onClick={handleSend}
            >
              <Text id="contact.submit_now" />
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
      
        <div className="mx-auto lg:flex justify-center my-12">
          <div className="lg:w-1/3 text-center">
            <FontAwesomeIcon icon="envelope" size="2x" />
            <h1 className="font-bold mt-1">
              <Text id="contact.contact" />
            </h1>
            <p>nexious.team@gmail.com</p>
            <p>(+855)61 77 23 11 / (+855)70 924 961</p>
          </div>
          <div className="lg:w-1/3 my-6 lg:my-0 text-center border-l">
            <FontAwesomeIcon icon="map-marked-alt" size="2x" />
            <h1 className="font-bold mt-1">
              <Text id="contact.address" />
            </h1>
            <p><Text id="contact.phone_penh_cambodia" /></p>
          </div>
        </div>
    </div>
  );
}
export default PagesClient;
