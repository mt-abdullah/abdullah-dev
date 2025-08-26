import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { experienceData } from "../../data/experienceData";

// Reusable component for each job in the timeline
// src/components/profession/ExperienceTimeline.jsx

// (Your imports at the top remain the same)
// ...

// REPLACE THE OLD TimelineItem WITH THIS NEW, CORRECTED VERSION:
const TimelineItem = ({ item }) => {
  const headerColors = {
    system: "bg-gradient-to-r from-blue-600 to-indigo-500",
    marketing: "bg-gradient-to-r from-orange-500 to-amber-400",
  };

  const tagColors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    teal: "bg-teal-100 text-teal-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    pink: "bg-pink-100 text-pink-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    // 1. Use a grid to create columns for the dot and the main content
    <div className="relative grid grid-cols-[auto_1fr] gap-x-6 py-6">
      {/* --- Column 1: Timeline Line and Dot --- */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
        <div
          className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
            headerColors[item.theme]
          }`}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      {/* --- Column 2: Date and Card --- */}
      <div className="pb-6">
        {/* 2. The date is now a regular element inside the grid column */}
        <p className="text-sm font-semibold text-gray-500 mb-2">{item.date}</p>

        {/* Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
          <div className={`p-5 text-white ${headerColors[item.theme]}`}>
            <h3 className="text-xl font-bold">{item.company}</h3>
            <h4 className="font-medium">{item.role}</h4>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              {item.achievements.map((point, index) => (
                <li key={index} className="flex items-start text-soft-dark">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    tagColors[tag.color]
                  }`}
                >
                  <FontAwesomeIcon icon={tag.icon} className="mr-2" />
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Main component for the entire section
const ExperienceTimeline = () => {
  return (
    <div className="bg-soft-white py-10 md:py-20" id="experience">
      <div className="content max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Professional Journey</h2>
          <p className="mt-4 text-lg text-soft-dark max-w-2xl mx-auto">
            Where skills meet real-world challenges, here is a timeline of my
            key roles and accomplishments.
          </p>
        </div>
        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
