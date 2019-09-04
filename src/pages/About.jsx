import React, { useState, useEffect } from 'react';
import 'assets/css/about.css'

const About = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(500);

  const words = ['designers', 'developers', 'creators'];
  const wait = 3000;

  useEffect(() => {
    function type() {
      const current = wordIndex % words.length;
  
      const fullTxt = words[current];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }
      
      if(isDeleting) {
        setTypeSpeed(t => t / 2);
      }
    
      if(!isDeleting && text === fullTxt) {
        setTypeSpeed(wait);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setTypeSpeed(500);
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
        <div className="absolute inset-0">
          <div>
            <h1 className={`text-6xl text-center py-5`}>We are <span className={`border-black border-r-2`}>{text}</span></h1>
          </div>
          <div className="text-center">
            <button className="bounceInUp px-12 py-3 bg-blue-500 text-2xl rounded hover:shadow-lg">Join us</button>
          </div> 
        </div>
      </div>
      <div className="member-container bg-gray-400 h-32"></div>
      <div className="bg-gray-400">
        <div className="text-center">
          <h2 className="text-5xl">Meet our team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, distinctio.</p>
        </div>
        <div className="flex flex-wrap mx-12 py-6">
          <Developer photo="https://amp.businessinsider.com/images/5b4df27ac0229b1b008b4c15-750-563.jpg"/>
          <Developer photo="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/07/03/nwy_tom_holland_030719_83_2x.jpg?itok=B3CM7ntD&timestamp=1562127658" />
          <Developer photo="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_700/https://cdn.wealthygorilla.com/wp-content/uploads/2018/07/Richest-Actors-Tom-Cruise.jpg"/>
          <Developer photo="https://nyppagesix.files.wordpress.com/2019/01/gettyimages-873330180.jpg?quality=90&strip=all&w=618&h=410&crop=1"/>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-2/5 text-center px-2">
          <h1 className="text-4xl">Our vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem pariatur necessitatibus numquam mollitia, sint ad ab corrupti iure quas ducimus excepturi delectus minus ullam voluptatibus.</p>
        </div>
        <div className="vision-image w-3/5">
          <img className="w-full object-cover" src="https://image.freepik.com/free-photo/man-s-hand-holding-led-light-bulb-black-wall_43448-145.jpg" alt=""/>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mission-image w-3/5">
          <img className="object-cover" src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
        </div>
        <div className="text-center w-2/5">
          <h1 className="text-4xl">Our mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem pariatur necessitatibus numquam mollitia, sint ad ab corrupti iure quas ducimus excepturi delectus minus ullam voluptatibus.</p>
        </div>
      </div>
      <div className="tools my-5">
        <h2 className="text-4xl text-center">Our tools</h2>
        <div className="flex flex-wrap justify-center items-center content-center px-32">
          <Tool src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
          <Tool src="https://expressjs.com/images/express-facebook-share.png" />
          <Tool src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
          <Tool src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" />
          <Tool src="https://vuejs.org/images/logo.png" classImg="w-16 lg:w-32 mx-auto" />
          <Tool src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png" />
          <Tool src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" classImg="w-16 lg:w-32 mx-auto" />
          <Tool src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png" />
        </div>
      </div>
      <div className="help">
      </div>
    </div>
  );
}

const Developer = ({photo}) => (
  <div className="w-1/2 lg:w-1/4 text-center hover:shadow-xl py-6">
    <img className="rounded-full w-24 h-24 border border-black mx-auto object-cover" src={photo} alt=""/>
    <h3 className="text-xl mt-2">Jonh Legend</h3>
    <h4 className="text-md text-gray-800">Developer</h4>
    <p className="text-xs my-1">
      <span className="mx-1">Node.js</span>|
      <span className="mx-1">React.js</span>|
      <span className="mx-1">Express.js</span>
    </p>
    <p className="text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat eligendi laudantium nemo necessitatibus et iusto provident nesciunt animi quasi!</p>
    <button className="bg-black text-white px-5 py-2 rounded-full text-sm">View Profile</button>
  </div>
)

const Tool = ({ src, clacss, classImg }) => (
  <div className={`w-1/3 lg:w-1/5 px-5 self-center hover:shadow-lg py-auto ${clacss}`}>
    <img className={`${classImg ? classImg : ''}`} src={src} alt="" />
  </div>
)
export default About;
