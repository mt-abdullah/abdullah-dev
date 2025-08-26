// src/components/portfolio/ProjectCard.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ data }) => {
  // Safety check: If for some reason data is not passed, render nothing to prevent a crash.
  if (!data) {
    return null;
  }

  const tagColorMap = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    orange: "bg-orange-100 text-orange-800",
    purple: "bg-purple-100 text-purple-800",
    teal: "bg-teal-100 text-teal-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
      <div className="relative">
        <span className="absolute top-4 left-4 z-10 bg-picto-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <img
          src={data.image}
          alt={`${data.title} image`}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={data.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-semibold flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Live Preview
          </a>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
        <p className="mt-2 text-sm text-soft-dark flex-grow">
          {data.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {data.tech.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                tagColorMap[tag.color] || "bg-gray-100 text-gray-800"
              }`}
            >
              <FontAwesomeIcon icon={tag.icon} className="mr-1.5" />
              {tag.name}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            Key Features
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-soft-dark">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <a
          href={data.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center block btn btn-primary py-2 px-4 text-sm"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;