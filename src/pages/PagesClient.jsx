import React from 'react';
// import { useState, useEffect } from 'react';
import { Carousel } from '../components'
// import { logo_1,logo_2,logo_3,logo_4,logo_5,logo_6,logo_7,logo_8,logo_9,logo_10 } from '../assets'
import Data from './Client.json'
import { FormattedMessage as Text } from 'react-intl';

function PagesClient() {
    // Declare a new state variable
    const e_commerce = Data.e_commerce;
    const web_app = Data.web_app;
    const branding_web = Data.branding_web;
    const article_web = Data.article_web;
    return (
        <div className="container mx-auto mt-24">
            <div className="text-center">
                <h1 className="md:text-5xl text-4xl font-bold"><Text id="client.all_types_of_website_which_we_are_capable_to_create_for_clients" /></h1>
                <p className="text-xl"><Text id="client.here_are_what_you_want_to_create" /></p>
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold"><Text id="client.ecommerce_websites" /></p>
                <Carousel items={e_commerce} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold"><Text id="client.web_applications" /></p>
                <Carousel items={web_app} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold"><Text id="client.branding_websites" /></p>
                <Carousel items={branding_web} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold"><Text id="client.article_websites" /></p>
                <Carousel items={article_web} />
            </div>
            {/* <div className="mt-12 max-w-xl mx-auto">
                <p className="text-2xl font-bold text-center">OUR CLIENTS LOGOs</p>
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/6">
                        <img className="w-24" src={logo_1} alt={logo_1} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_2} alt={logo_2} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_3} alt={logo_3} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_4} alt={logo_4} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_5} alt={logo_5} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_6} alt={logo_6} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_7} alt={logo_7} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_8} alt={logo_8} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_9} alt={logo_9} />
                    </div>
                    <div className="w-1/6">
                        <img className="w-24" src={logo_10} alt={logo_10} />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default PagesClient;