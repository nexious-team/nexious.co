import React from 'react';
// import { useState, useEffect } from 'react';
import { Carousel } from '../components'
import { logo_1,logo_2,logo_3,logo_4,logo_5,logo_6,logo_7,logo_8,logo_9,logo_10 } from '../assets'

function Client() {
    // Declare a new state variable
    const items = ["https://i.pinimg.com/236x/38/da/eb/38daeb0d486dbf3b861be0a48e643e3a.jpg",
        "https://i.pinimg.com/236x/48/96/d0/4896d018b7a8a11247b615de84b060f6.jpg",
        "https://i.pinimg.com/564x/f7/6e/f6/f76ef6a4b0bf828950813e7f169ae0bb.jpg",
        "https://i.pinimg.com/236x/71/72/d1/7172d13d5c0718ca5c116f74c7ab70cd.jpg",
        "https://i.pinimg.com/236x/ab/57/73/ab57734a782df6e7c2ca281035647cf4.jpg",
        "https://i.pinimg.com/236x/09/2c/ae/092cae1d79b2dd9e919c413acba84a17.jpg",
        "https://i.pinimg.com/564x/64/b9/01/64b901de4ece48e6a4ed877eee6cb972.jpg",
        "https://i.pinimg.com/236x/48/96/d0/4896d018b7a8a11247b615de84b060f6.jpg"];
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold">109 websites create for our client :)</h1>
                <p className="text-xl">here are what you want to create.</p>
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold">E-Commerce Websites</p>
                <Carousel items={items} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold">Web Applications</p>
                <Carousel items={items} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold">Branding Websites</p>
                <Carousel items={items} />
            </div>
            <div className="mt-12">
                <p className="text-2xl font-bold">Article Websites</p>
                <Carousel items={items} />
            </div>
            <div className="mt-12">
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
            </div>
        </div>
    );
}
export default Client;