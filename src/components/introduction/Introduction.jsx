// src/components/introduction/Introduction.jsx

import person from "@/assets/images/person.png";
import InformationSummary from "./InformationSummary";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faWordpress,
  faPython,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const floatingIcons = [
  { icon: faWindows, position: "top-4 left-0", color: "purple" },
  { icon: faWordpress, position: "bottom-16 -left-4", color: "blue" },
  { icon: faPython, position: "top-1/4 -right-4", color: "yellow" },
  { icon: faAndroid, position: "bottom-16 -right-4", color: "green" },
  { icon: faCloud, position: "bottom-4 right-1/4", color: "teal" },
];

const heroData = {
  name: "M T Abdullah",
  title: "System Administrator & Full-Stack Developer",
  description:
    "As a versatile IT professional with a dual focus in System Administration and Full-Stack Development, I specialize in bridging the gap between powerful infrastructure and flawless user experiences. My passion is architecting secure, scalable, and intuitive digital solutions from automating server workflows with Python to developing responsive applications in React that are defined by quality, efficiency, and a future proof design.",
};
const informationSummaryData = [
  { id: 1, title: "Years of Experience", description: "2+" },
  { id: 2, title: "Projects Delivered", description: "10+" },
  { id: 3, title: "Certifications", description: "25+" },
];

const Introduction = () => {
  return (
    // 1. CONTAINER IS WIDER: max-w-screen-xl makes the section "longer" horizontally.
    <div
      className="flex max-lg:flex-col-reverse items-center justify-center   max-w-screen-xl mx-auto px-4 lg:gap-16"
      id="introduction"
    >
      {/* --- Left Side: Text Content --- */}
      <div className="w-full lg:w-1/2 max-h-full  flex-col justify-center max-lg:text-center max-lg:py-12">
        <div>
          <h1 className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold">
            <br/> <br/>  Hello, I’m <br />
            <span className="text-picto-primary">{heroData.name}</span>
          </h1>
          <h2 className="text-lg xxs:text-xl lg:text-2xl my-6 font-medium text-soft-dark">
            {heroData.title}
          </h2>
          <p className="text-base lg:text-lg text-soft-dark max-w-xl max-lg:mx-auto">
            {heroData.description}
          </p>
          <div className="mt-8 flex max-lg:justify-center gap-4">
            <a
              className="btn btn-primary text-white text-base font-semibold px-8 py-3"
              href="#contact"
            >
              Get in Touch
            </a>
            <a
              className="btn bg-transparent border-2 border-soft-dark text-soft-dark hover:bg-soft-dark hover:text-white hover:border-soft-dark text-base font-semibold px-8 py-3 flex items-center gap-2"
              href="#portfolio"
            >
              View My Work <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 relative mt-12">
          <div className="grid grid-cols-3 w-fit gap-4">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Right Side: Professional Hero Graphic --- */}
      {/* 2. GAP IS ADJUSTED: Both columns now take up half the width on large screens (w-1/2). */}
      <div className="w-full lg:w-3/7 max-h-120 max-lg:mx-auto relative flex-shrink-0">
        <div className="relative w-full aspect-[536/636] flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-200 rounded-3xl"></div>
          <img
            className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
            src={person}
            alt={heroData.name}
          />
          {floatingIcons.map((item, index) => (
            <div
              key={index}
              className={`tech-icon ${item.position} ${item.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
