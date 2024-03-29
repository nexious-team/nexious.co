import React, { useState, useEffect } from "react";
import { FormattedMessage as Text } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "assets/css/about.css";
import { Link, useHistory } from "react-router-dom";
import Button from "../elements/Button";
import data from "../assets/json/about.json";

const { developers, tools, minitools } = data;

const languages = {
  En: ["designers", "developers", "creators"],
  Km: ["អ្នករចនា", "អ្នកអភិវឌ្ឍន៍", "អ្នកបង្កើត"],
};

const About = () => {
  const history = useHistory();
  const lang = localStorage.getItem("lang") || "En";

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(200);

  const words = languages[lang];
  const wait = 1000;

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

      if (isDeleting) {
        setTypeSpeed((t) => t / 2);
      }

      if (!isDeleting && text === fullTxt) {
        setTypeSpeed(wait);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setTypeSpeed(200);
        setWordIndex((w) => w + 1);
        setIsDeleting(false);
      }
    }

    const timer = setTimeout(() => type(), typeSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, typeSpeed, words]);

  return (
    <div className="overflow-hidden">
      <div className="relative bg-gray-400">
        <div className="h-168"></div>
        <div className="absolute inset-0 top-path">
          <img
            className="object-cover w-full h-168 opacity-75"
            src="https://images.pexels.com/photos/2310885/pexels-photo-2310885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="absolute inset-0 mt-24 z-20">
          <div className="">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center`}
            >
              <Text id="about.we_are" />{" "}
              <span
                className={`border-black border-r-2 hidden md:inline lg:inline`}
              >
                {text}
              </span>
            </h1>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center block md:hidden lg:hidden`}
            >
              <span className={`border-black border-r-2`}>{text}</span>
            </h1>
          </div>
          <div className="wrapper text-center mt-16">
            <div className="box">
              <button
                className="bounceInUp px-20 py-4 border-4 border-black text-black text-4xl rounded-lg hover:shadow-lg"
                onClick={() => history.push("/contact")}
              >
                <Text id="about.join_us" />
              </button>
            </div>
          </div>
          <div className="move-scroll-arrow text-center mt-32">
            <p className="text-base">
              <Text id="about.click_here" />
            </p>
            <a href="#our-team" id="our-team">
              <FontAwesomeIcon icon="angle-double-down" size="2x" />
            </a>
          </div>
        </div>
        <div className="bottom-path absolute inset-x-0 bottom-0 z-10 h-64 bg-black"></div>
        <div className="absolute inset-x-0 bottom-0 h-20"></div>
      </div>
      <div className="bg-gray-400 py-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl">
            <Text id="about.our_team" />
          </h2>
          <p className="text-xs lg:text-sm xl:text-lg mt-2">
            <Text id="about.passionate_creative_determined" />
          </p>
        </div>
        <div className="flex flex-wrap mx-4 py-12">
          {developers.map((developer) => (
            <Developer key={developer.id} {...developer} />
          ))}
        </div>
      </div>
      <div>
        <div data-aos="fade-left" className="relative">
          <div className="flex items-center opacity-75">
            <div className="w-1/5 md:w-2/5 lg:w-2/5 text-center"></div>
            <div className="vision-image w-4/5 md:w-3/5 lg:w-3/5">
              <img
                className="w-full object-cover"
                src="/img/vision.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center absolute inset-0">
            <div className="text-center px-6 md:w-3/6 lg:w-3/6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                <Text id="about.our_vision" />
              </h1>
              <p className="text-base lg:text-lg xl:text-xl">
                <Text id="about.our_vision_description" />
              </p>
              <div className="mt-8">
                <Button variant="normal" className="w-32">
                  <Link to="/client">
                    <Text id="about.learn_more" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="vision-image md:w-3/6 lg:w-3/6"></div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div data-aos="fade-left" className="relative">
          <div className="flex items-center opacity-75">
            <div className="mission-image w-4/5 md:w-3/5 lg:w-3/5">
              <img
                className="object-cover"
                src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            <div className="text-center w-1/5 md:w-2/5 lg:w-2/5"></div>
          </div>
          <div className="flex items-center absolute inset-0">
            <div className="mission-image md:w-3/6 lg:w-3/6"></div>
            <div className="text-center md:w-3/6 lg:w-3/6 px-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                <Text id="about.our_mission" />
              </h1>
              <p className="text-base lg:text-lg xl:text-xl">
                <Text id="about.our_mission_description" />
              </p>
              <div className="mt-8">
                <Button variant="normal" className="w-32">
                  <Link to="/client">
                    <Text id="about.learn_more" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tools my-20">
        <div data-aos="fade-left">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center my-6">
            <Text id="about.our_tools" />
          </h2>
        </div>
        <div data-aos="fade-right" className="relative my-4">
          <div className="flex flex-wrap justify-center items-center content-center px-6 lg:px-32 mt-12">
            {tools.map((tool) => (
              <Tool key={tool.id} {...tool} />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-wrap justify-center items-center">
            {minitools.map((minitool) => (
              <MiniTool key={minitool.id} {...minitool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface DeveloperProps {
  imgSrc: string;
  name: string;
  skills: string;
  tools: string;
  aosDelay: string;
  snapshot: string;
}
const Developer = (props: DeveloperProps) => {
  const { imgSrc, name, skills, tools, aosDelay, snapshot } = props;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="sm:w-1/2 lg:w-1/4 text-center px-4"
    >
      <div className="py-6 px-2 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:shadow-xl rounded-lg">
        <img
          className="rounded-full w-24 h-24 border border-gray-300 mx-auto object-cover"
          src={imgSrc}
          alt=""
        />
        <h3 className="text-xl mt-2">
          <Text id={name} />
        </h3>
        <h4 className="text-xs text-gray-800">
          <Text id={skills} />
        </h4>
        <p className="text-xs my-1">{tools}</p>
        <p className="text-xs lg:text-sm xl:text-base my-6 h-16 lg:h-24">
          <Text id={snapshot} />
        </p>
        <div className="flex justify-center my-6">
          {/* <div className="px-2">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
        </div> */}
          <div className="px-2">
            <a href="https://github.com/nexious-team">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ToolProps {
  imgSrc: string;
  clacss?: string;
  imgClass: string;
}
const Tool = (props: ToolProps) => {
  const { imgSrc, clacss, imgClass } = props;
  return (
    <div className={`mx-4 lg:mx-10 mb-12 ${clacss || ""}`}>
      <img
        className={`${
          imgClass || ""
        } h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 mx-auto object-contain shadow-lg `}
        src={imgSrc}
        alt=""
      />
    </div>
  );
};

interface MiniToolProps {
  imgSrc: string;
  alt: string;
  clacss: string;
  imgClass: string;
}
const MiniTool = (props: MiniToolProps) => {
  const { imgSrc, alt, clacss, imgClass } = props;

  return (
    <div className={`mx-8 lg:mx-16 ${clacss || ""}`}>
      <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-full shadow-lg ">
        <img
          className={`h-8 w-8 lg:h-12 lg:w-12 object-scale-down ${
            imgClass || ""
          }`}
          src={imgSrc}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default About;
