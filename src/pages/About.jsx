import React, { useState, useEffect } from 'react';
import 'assets/css/about.css'
import { developers, tools, minitools } from 'assets/json/about.json'

const About = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(200);

  const words = ['designers', 'developers', 'creators'];
  const wait = 2000;

  useEffect(() => {
    function type() {
      const current = wordIndex % words.length;
      const fullTxt = words[current];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      setTypeSpeed(300);
      
      if(isDeleting) {
        setTypeSpeed(t => t / 2);
      }
    
      if(!isDeleting && text === fullTxt) {
        setTypeSpeed(wait);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setTypeSpeed(200);
        setWordIndex(w => w + 1);
        setIsDeleting(false);
      }
    }

    const timer = setTimeout(() => type(), typeSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, typeSpeed, words])

  return (
    <div>
      <div className="top bg-blue-200 relative">
        <img className="object-cover w-full h-144 opacity-75" src="https://images.pexels.com/photos/2310885/pexels-photo-2310885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="absolute inset-0 mt-24">
          <div className="">
            <h1 className={`text-6xl text-center`}>We are <span className={`border-black border-r-2`}>{text}</span></h1>
          </div>
          <div className="wrapper text-center mt-12">
            <div className="box">
              <button className="bounceInUp px-12 py-3 bg-blue-500 text-2xl rounded hover:shadow-lg">Join us</button>
            </div>
          </div> 
        </div>
      </div>
      <div className="top-path bg-gray-400 h-40 -mt-40"></div>
      <div className="bg-gray-400">
        <div className="text-center">
          <h2 className="text-5xl">Meet our team</h2>
          <p>Passionate, creative, determined</p>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap mx-12 py-6">
          { developers.map(developer => (
            <Developer key={developer.id} {...developer} />
          ))}
        </div>
      </div>
      <div data-aos="fade-left" className="flex items-center">
        <div className="w-2/5 text-center px-2">
          <h1 className="text-4xl">Our vision</h1>
          <p>It's time for the local companies or startup team to market their products, services with the website to boost the business to reach millions of onliners. We provide the best design for friendly web pages to attract your target visitors.</p>
        </div>
        <div className="vision-image w-3/5">
          <img className="w-full object-cover" src="https://image.freepik.com/free-photo/man-s-hand-holding-led-light-bulb-black-wall_43448-145.jpg" alt=""/>
        </div>
      </div>
      <div data-aos="fade-right" className="flex items-center">
        <div className="mission-image w-3/5">
          <img className="object-cover" src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
        </div>
        <div className="text-center w-2/5">
          <h1 className="text-4xl">Our mission</h1>
          <p>Our passionate team will deliver the best content web application to promote your services or products and help your organization continually grow at an unpredictable time with the best tools and latest technologies. </p>
        </div>
      </div>
      <div className="tools my-5">
        <div data-aos="fade-left">
          <h2 className="text-4xl text-center">Our tools</h2>
        </div>
        <div data-aos="fade-right" className="relative">
          <div className="flex flex-wrap justify-center items-center content-center px-6 lg:px-32 h-84">
            { tools.map(tool => (
              <Tool key={tool.id} {...tool} />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {
              minitools.map(minitool => (
                <MiniTool key={minitool.id} {...minitool} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const Developer = ({imgSrc, name, skills, tools }) => (
  <div className="w-1/2 lg:w-1/4 text-center hover:shadow-xl py-6">
    <img className="rounded-full w-24 h-24 border border-black mx-auto object-cover" src={imgSrc} alt=""/>
    <h3 className="text-xl mt-2">{name}</h3>
    <h4 className="text-md text-gray-800">{skills}</h4>
    <p className="text-xs my-1">{tools}</p>
    <p className="text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat eligendi laudantium nemo necessitatibus et iusto provident nesciunt animi quasi!</p>
    <button className="bg-black text-white px-5 py-2 rounded-full text-sm">View Profile</button>
  </div>
)

const Tool = ({ imgSrc, clacss, imgClass }) => (
  <div className={`mx-4 lg:mx-10 ${clacss || ''}`}>
    <img className={`${imgClass || ''} h-32 w-32 mx-auto object-contain rounded-full shadow-lg `} src={imgSrc} alt="" />
  </div>
)

const MiniTool = ({imgSrc, clacss, imgClass}) => (
  <div className={`mx-16 ${clacss || ''}`}>
    <div className="h-12 w-12 rounded-full shadow-lg">
      <img className={`h-12 w-12 object-contain  ${imgClass || ''}`} src={imgSrc} alt=""/>
    </div>
  </div>
)
export default About;
