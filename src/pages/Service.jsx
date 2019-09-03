import React from 'react';
import { img_1 } from '../assets/index';

const textDesign = `    Go to where your customers spend more time.
    Our web designs adapt to great and work smoothly on many device
    - Customer Design
    - Best User Experience (UX)
    - UI Prototyping
    - Mobile & Web App`;

const textDev = `    Build on a platform that's easy for you to update.
    We launch after extensive testing in simulated live environments.
    - WordPress CMS
    - Mobile Responsive
    - Commerse
    - Q/A Testing`;

const textCertificated = `    An SSL certificate lets your website ` +
    `vistors know that they are securely viewing the site of a trusted ` +
    `business. Once the certificate is installed a green padlock will be ` +
    `visible next to your domain name. Since Google began including SSL ` +
    `certification in its ranking algorithms, it is even more important for ` +
    `businesses to adopt this protocol in order to rank well in the search engines.`;

const textBranding = `    A strong brand produces an emotional reaction. We help you make a lasting impression on customers.
    - Brand Positioning
    - Logo Design
    - Corporate Identity
    - Brand Standards Guidelines`;

const textWebOptimization = `    Effectiive websites get visitors to take a specific action. We measure, test, and optimize your site for results.
    - Conversion Optimization (CRO)
    - A/B Split Testing
    - Website Performance
    - Usability Consulting`;

const textWebSupport = `    Every site needs some love now and again. We user human support and technology to take care of you.
    - Site Maintenance
    - Hosting & Monitoring
    - Backup & Recovery
    - Updates & Changes`;

const Service = () => (
  <div className="w-full pt-12">
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-gray-800">
      <span>
        Everything we do
        <br/>
        help you grow.
      </span>
    </div>
    
    {/* Web Design */}
    <div className="w-10/12 my-0 mx-auto pt-12 pb-5 lg:pt-16">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-xl lg:text-3xl lg:text-left">Web Design</div>
      <div className="flex">
        <div className="w-full pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-base lg:text-lg xl:text-xl">
            {textDesign}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg lg:text-xl xl:text-2xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="my-0 mx-auto rounded-lg shadow-xl lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>

    <hr className="mt-2 border-t-1 border-gray-600" />

    {/* Web Development */}
    <div className="w-10/12 my-0 mx-auto py-5">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-xl lg:text-3xl lg:text-left">Web Development</div>
      <div className="flex">
        <div className="w-full pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-base lg:text-lg xl:text-xl">
            {textDev}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg lg:text-xl xl:text-2xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="my-0 mx-auto rounded-lg shadow-xl lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>

    <hr className="mt-2 border-t-1 border-gray-600" />

    {/* SSL Certificated */}
    <div className="w-10/12 my-0 mx-auto py-5">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-xl lg:text-3xl lg:text-left">SSL Certificated</div>
      <div className="flex">
        <div className="w-full lg:pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-base lg:text-lg xl:text-xl">
            {textCertificated}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg lg:text-xl xl:text-2xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="rounded-lg shadow-xl my-0 mx-auto lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>

    <div className="mt-10 bg-gray-200 py-6 px-10 w-11/12 my-0 mx-auto xl:flex">
        <div className="xl:w-1/3 xl:px-1">
          <div className="font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-3xl xl:text-center">Branding</div>
          <div className="whitespace-pre-wrap text-gray-700 text-base sm:text-lg lg:text-xl">
            {textBranding}
          </div>
        </div>

        <div className="mt-6 xl:w-1/3 xl:mt-0 xl:px-1">
          <div className="font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-3xl xl:text-center">Website Optimization</div>
          <div className="whitespace-pre-wrap text-gray-700 text-base sm:text-lg lg:text-xl">
            {textWebOptimization}
          </div>
        </div>

        <div className="mt-6 xl:w-1/3 xl:mt-0 xl:px-1">
          <div className="font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-3xl xl:text-center">Website Support</div>
          <div className="whitespace-pre-wrap text-gray-700 text-base sm:text-lg lg:text-xl">
            {textWebSupport}
          </div>
        </div>
      </div>
  </div>
);

export default Service;