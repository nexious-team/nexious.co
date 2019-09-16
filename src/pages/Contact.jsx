import React from 'react';
// import { useState, useEffect } from 'react';

function PagesClient() {
    return (
        <div className="w-full mt-5 pt-5">
            <div className="border w-full max-w-lg mx-auto md:p-5 shadow bg-gray-300">
                <div className="text-center">
                    <h1 className="md:text-5xl text-4xl">Contact US</h1>
                </div>
                <form className="w-full max-w-lg mx-auto">
                    <div className="flex flex-wrap -mx-3 md:mb-6 px-3">
                        <div className="w-full px-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Your Name
                        </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 md:mb-6 px-3">
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-for-email">
                                Email
                        </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-for-email" type="eamil" placeholder="email@mail.com" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-for-phone">
                                Phone
                        </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-for-phone" type="number" placeholder="012345678" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                                Message
                        </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" cols="30" rows="6" id="grid-message" placeholder="Please write your message :)" />
                            <p className="text-gray-600 text-xs italic">We will contact to you shortly :)</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <button className="bg-blue-500 mx-auto my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">SUBMIT NOW</button>
                    </div>
                </form>
            </div>
            <h1 className="md:text-5xl text-4xl text-center">Or</h1>
            <div className="md:flex mx-auto">
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p>Email: <strong>nexious.team@gmail.coms</strong></p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-center">
                    <p>Phone: <strong>+855 61 772 311 / +855 96 467  7007</strong></p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <p>Location: <strong>Phnom Penh, Cambodia</strong></p>
                </div>
            </div>
            <div className="md:flex mx-auto">
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p>FB-Pages: <strong>Nexious</strong></p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-center">
                    <p>IG: <strong>Nexious</strong></p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <p>Telegram: <strong>+855 61 772 311</strong></p>
                </div>
            </div>

        </div>
    );
}
export default PagesClient;