import React, { useState, useEffect } from 'react';
import Button from '../elements/Button'

const About = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(500);

  const words = ['designing', 'developing', 'creating'];
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
        setIsDeleting(false)
      }
    }

    const timer = setTimeout(() => type(), typeSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, typeSpeed, words])

  return (
    <div className="">
      <div className="relative">
        <img className="object-cover w-full h-120" src="https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        <div className="absolute inset-x-0 top-0">
          <div className="my-auto border-r">
            <h1 className={`text-6xl text-center py-5`}>We are <span className={`border-black border-r-2`}>{text}</span></h1>
          </div>
        </div>
        <div className="lg:absolute inset-x-0 bottom-0 flex flex-wrap mb-6 items-center">
          <div className="px-5 w-1/2 lg:flex-1">
            <Image src="https://media.istockphoto.com/photos/heres-to-fun-and-friendship-picture-id928580246?k=6&m=928580246&s=612x612&w=0&h=4nlx-kl8XetSfP7E4O8qHip-BS5yuvc-K2KGmiYzm3c=" alt="" />
          </div>
          <div className="px-5 w-1/2 lg:flex-1">
            <Image src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/30_bc1p3meybi5ttq2iy_w.jpg" alt="" />
          </div>
          <div className="px-5 w-1/2 lg:flex-1">
            <Image src="https://www.cv-library.co.uk/career-advice/wp-content/uploads/2018/06/What-is-it-like-working-in-IT.jpg" alt="" />
          </div>
          <div className="px-5 w-1/2 lg:flex-1">
            <Image src="https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fchuckcohn%2Ffiles%2F2017%2F05%2FInternal-business-meeting.jpg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <Member
          photo="https://images.pexels.com/photos/7111/couch-conference-startup-bro-concentration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          name="Monday Week"
          position="Co-founder"
          quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel expedita facere dolore totam nisi neque eos asperiores aut, explicabo exercitationem mollitia et aperiam ullam, nemo labore. Modi, nemo ducimus."
        />
        <Member
          photo="https://www.bcjobs.ca/blog/wp-content/uploads/2019/04/12-ways-confident-professional-at-work.png"
          name="January Month"
          position="Co-founder"
          quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel expedita facere dolore totam nisi neque eos asperiores aut, explicabo exercitationem mollitia et aperiam ullam, nemo labore. Modi, nemo ducimus."
          reverse={true}
        />
        <Member
          photo="https://previews.123rf.com/images/vadimgozhda/vadimgozhda1405/vadimgozhda140500310/28182974-young-successful-businessman-riding-in-the-car.jpg"
          name="Apple Fruit"
          position="Co-founder"
          quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel expedita facere dolore totam nisi neque eos asperiores aut, explicabo exercitationem mollitia et aperiam ullam, nemo labore. Modi, nemo ducimus."
        />
        <Member
          photo="https://cdn.luxe.digital/media/sites/7/2019/02/05102516/business-professional-attire-office-men-style-gabriel-macht-luxe-digital.jpg"
          name="Cloud Sky"
          position="Co-founder"
          quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel expedita facere dolore totam nisi neque eos asperiores aut, explicabo exercitationem mollitia et aperiam ullam, nemo labore. Modi, nemo ducimus."
          reverse={true}
        />
      </div>
      <div className="message my-5">
        <h2 className="text-4xl text-center">What we believe!</h2>
      </div>
      <div className="content">
        <div className="flex justify-around flex-col lg:flex-row">
          <Paragraph
            title="People come first"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facere asperiores libero voluptatum dicta, eaque. Dignissimos cumque, esse voluptates, explicabo nam voluptatum itaque aliquid delectus suscipit doloribus hic sed. Fuga rem ad, nulla quos ratione veniam repudiandae sequi est in aperiam cum quam obcaecati sapiente nesciunt dicta, soluta molestias veritatis odit accusantium eligendi ipsum nam harum praesentium ab. Rem, veniam ea ipsam! Porro adipisci dolor suscipit, ipsa quasi voluptatum repellendus necessitatibus totam a, aspernatur distinctio minima deserunt cumque in sint ducimus eveniet molestiae alias temporibus maxime deleniti explicabo. Quibusdam placeat at, dolorem eligendi eum, obcaecati ipsa rem laboriosam explicabo eveniet."
          />
          <Paragraph
            title="Less is better"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facere asperiores libero voluptatum dicta, eaque. Dignissimos cumque, esse voluptates, explicabo nam voluptatum itaque aliquid delectus suscipit doloribus hic sed. Fuga rem ad, nulla quos ratione veniam repudiandae sequi est in aperiam cum quam obcaecati sapiente nesciunt dicta, soluta molestias veritatis odit accusantium eligendi ipsum nam harum praesentium ab. Rem, veniam ea ipsam! Porro adipisci dolor suscipit, ipsa quasi voluptatum repellendus necessitatibus totam a, aspernatur distinctio minima deserunt cumque in sint ducimus eveniet molestiae alias temporibus maxime deleniti explicabo. Quibusdam placeat at, dolorem eligendi eum, obcaecati ipsa rem laboriosam explicabo eveniet."
          />
        </div>
      </div>
      <div className="conclude px-12 mt-5">
        <h3 className="text-2xl">Create positive change</h3>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

const Tool = ({ src, clacss, classImg }) => (
  <div className={`w-1/3 lg:w-1/5 px-5 self-center hover:shadow-lg py-auto ${clacss}`}>
    <img className={`${classImg ? classImg : ''}`} src={src} alt="" />
  </div>
)
const Image = ({ src, alt, clacss }) => (
  <img className={`hover:shadow-xl ${clacss}`} src={src} alt={alt} />
)
const Member = ({ name, position, quote, photo, reverse }) => {
  const clacss = reverse ? "bg-gray-300 lg:flex-row-reverse" : "bg-gray-200 ";

  return (
    <div className={`flex flex-col-reverse lg:flex-row ${clacss}`}>
      <div className={`lg:w-2/3 px-10 mt-6 sm:mb-6 ${reverse ? null : 'lg:text-right'}`}>
        <h3 className="text-2xl">{name}</h3>
        <h3 className="italic">@{position}</h3>
        <p className="mt-10">{quote}</p>
        <Button classes="mt-5" name="Learm more" color="blue" />
      </div>
      <div className="lg:w-1/3">
        <Image src={photo} alt="" />
      </div>
    </div>
  )
}
const Paragraph = ({ title, description }) => (
  <div className="px-12 mt-6 lg:mt-0">
    <h3 className="text-2xl">{title}</h3>
    <p>{description}</p>
  </div>
)
export default About;
