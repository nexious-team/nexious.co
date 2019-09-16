import React from 'react';

const GetStart = () => (
    <div className="container">
        <div className="m-5">
            <h1 className="text-center md:text-5xl text-4xl">Create a Project ?</h1>
            <p className="text-center">Need help with an existing project ? Visit the Support Center.</p>
        </div>
        <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                        </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                        </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Type Of Website
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>E-Commernce Website</option>
                            <option>Web Application</option>
                            <option>Branding Website</option>
                            <option>Article Website</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-for-phone">
                        Website (if you have)
                        </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-for-phone" type="text" placeholder="website" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                        Message
                        </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" cols="30" rows="10" id="grid-message" placeholder="Please write your message :)" />
                    <p className="text-gray-600 text-xs italic">We will contact to you shortly :)</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <button className="bg-blue-500 mx-auto my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">SUBMIT NOW</button>
            </div>
        </form>

    </div>
);

export default GetStart;
