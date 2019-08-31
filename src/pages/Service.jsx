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

const Service = () => (
  <div className="w-full pt-12">
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-gray-800">
      <span>
        Everything we do
        <br/>
        help you grow.
      </span>
    </div>
    
    <div className="w-10/12 my-0 mx-auto pt-5">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-2xl md:text-3xl lg:text-4xl lg:text-left xl:text-5xl">Web Design</div>
      <div className="flex">
        <div className="w-full pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {textDesign}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="my-0 mx-auto rounded-lg shadow-xl lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>

    <hr className="mt-2 border-t-1 border-gray-600" />

    <div className="w-10/12 my-0 mx-auto pt-5">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-2xl md:text-3xl lg:text-4xl lg:text-left xl:text-5xl">Web Development</div>
      <div className="flex">
        <div className="w-full pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {textDev}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="my-0 mx-auto rounded-lg shadow-xl lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>

    <hr className="mt-2 border-t-1 border-gray-600" />

    <div className="w-10/12 my-0 mx-auto pt-5">
      <div className="text-center text-xl text-gray-800 font-bold sm:text-2xl md:text-3xl lg:text-4xl lg:text-left xl:text-5xl">SSL Certificated</div>
      <div className="flex">
        <div className="w-full lg:pr-2 lg:w-1/2">
          <p className="whitespace-pre-wrap text-gray-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {textCertificated}
          </p>

          <a href="http://www.google.com" className="text-green-600 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Read more</a>
          <img src={img_1} alt={"imgWebDesign"} width="400" height="600" className="my-0 mx-auto lg:hidden"/>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img src={img_1} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute inset-0 h-64 w-full my-auto"/>
        </div>
      </div>
    </div>
  </div>
);

export default Service;
