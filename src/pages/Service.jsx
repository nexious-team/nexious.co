import React from 'react';
import { imgServiceWebDesign, imgServiceWebDevelopment, imgServiceSSLCertificate1, imgServiceSSLCertificate2, imgServiceSSLCertificate3 } from '../assets/images/service-page/index';
import { logoHTML, logoCSS, logoJS } from '../assets/images';

const textDesign = `Go to where your customers spend more time. Our web designs adapt to great and work smoothly on many device
• Customer Design
• Best User Experience (UX)
• UI Prototyping
• Mobile & Web App`;

const textDev = `Build on a platform that's easy for you to update.
We launch after extensive testing in simulated live environments.
• WordPress CMS
• Mobile Responsive
• Commerse
• Q/A Testing`;

const textCertificated = `An SSL certificate lets your website ` +
    `vistors know that they are securely viewing the site of a trusted ` +
    `business. Once the certificate is installed a green padlock will be ` +
    `visible next to your domain name. Since Google began including SSL ` +
    `certification in its ranking algorithms, it is even more important for ` +
    `businesses to adopt this protocol in order to rank well in the search engines.`;

const textBranding = `A strong brand produces an emotional reaction. We help you make a lasting impression on customers.
• Brand Positioning
• Logo Design
• Corporate Identity
• Brand Standards Guidelines`;

const textWebOptimization = `Effectiive websites get visitors to take a specific action. We measure, test, and optimize your site for results.
• Conversion Optimization (CRO)
• A/B Split Testing
• Website Performance
• Usability Consulting`;

const textWebSupport = `Every site needs some love now and again. We use human support and technology to take care of you.
• Site Maintenance
• Hosting & Monitoring
• Backup & Recovery
• Updates & Changes`;

const middleSectionDatas = [
  {
    title: 'Web Design',
    text: textDesign,
    imageUrl: imgServiceWebDesign
  }, {
    title: 'Web Development',
    text: textDev,
    imageUrl: imgServiceWebDevelopment
  }, {
    title: 'SSL Certificated',
    text: textCertificated,
    imageUrl: imgServiceSSLCertificate3
  }
];

const bottomSectionDatas = [
  {
    title: 'Branding',
    text: textBranding
  }, {
    title: 'Website Optimization',
    text: textWebOptimization
  }, {
    title: 'Website Support',
    text: textWebSupport
  }
];

const middleSection = middleSectionDatas.map((item, index) => {
  return (
    <div key={index} className={(index === 0 ? 'lg:pt-24 xl:pt-40' : 'lg:pt-20 xl:pt-32') + ' w-10/12 my-0 mx-auto pt-16 pb-5 md:w-full md:px-6 lg:px-12 xl:px-16 container'}>
      <img src={item.imageUrl} alt={"imgWebDesign"} className="my-0 mx-auto rounded-lg shadow-xl w-full h-84 md:hidden"/>
      
      <div className="flex">
        { index % 2 === 0 ? (
          <>
            <div className="w-full md:w-1/2 md:pr-6">
              <div className="text-xl text-gray-1000 font-bold mb-5 mt-6 sm:text-xl sm:mt-6 md:text-2xl xl:text-3xl">{item.title}</div>

              <p className="whitespace-pre-wrap text-gray-900 sm:text-base lg:text-lg xl:text-xl">
                {item.text}
              </p>

              <button className="mt-4 text-base sm:text-base lg:text-lg xl:text-xl bg-silver_tree hover:bg-viridian text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded">
                LEARN MORE
              </button>
            </div>

            <div className="hidden md:block md:w-1/2 md:relative md:pl-4">
              <div className="hidden w-full top-1/2 h-72 -mt-36 md:block md:relative md:h-64 md:-mt-32 lg:h-72 lg:-mt-36 xl:h-96 xl:-mt-48">
                <img src={item.imageUrl} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute h-72 md:h-64 lg:h-72 xl:h-96"/>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:block md:w-1/2 md:relative md:pr-4">
              <div className="hidden w-full top-1/2 h-72 -mt-36 md:block md:relative md:h-64 md:-mt-32 lg:h-72 lg:-mt-36 xl:h-96 xl:-mt-48">
                <img src={item.imageUrl} alt={"imgWebDesign"} className="rounded-lg shadow-xl absolute h-72 md:h-64 lg:h-72 xl:h-96"/>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-6">
              <div className="text-xl text-gray-1000 font-bold mb-5 mt-6 sm:text-xl sm:mt-6 md:text-2xl xl:text-3xl">{item.title}</div>

              <p className="whitespace-pre-wrap text-gray-900 sm:text-base lg:text-lg xl:text-xl">
                {item.text}
              </p>

              <button className="mt-4 text-base sm:text-base lg:text-lg xl:text-xl bg-silver_tree hover:bg-viridian text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-900 rounded">
                LEARN MORE
              </button>
            </div>
          </>
        )
        }
      </div>
    </div>
  );
});

const bottomSection = bottomSectionDatas.map((item, index) => {
  return (
    <div key={index} className="my-6 xl:mx-2">
      <div className="font-bold text-gray-800 sm:text-xl md:text-2xl xl:text-3xl">{item.title}</div>
      <div className="whitespace-pre-wrap text-gray-700 text-base sm:text-base lg:text-lg xl:text-xl">
        {item.text}
      </div>
    </div>
  );
});

const Service = () => (
  <div className="w-full pt-12">
    <div className="text-center text-gray-1000">
      <div className="font-bold text-3xl sm:text-3xl md:text-4xl xl:text-5xl">
        Everything we do help you grow
      </div>
      <div className="mt-2 sm:text-lg md:text-xl xl:text-2xl">
        We provide best solution for your business problem
      </div>
    </div>
    
    { middleSection }

    <div className="my-8 mx-auto bg-gray-200 py-6 px-10 w-full xl:flex">
        { bottomSection }
    </div>
  </div>
);

export default Service;