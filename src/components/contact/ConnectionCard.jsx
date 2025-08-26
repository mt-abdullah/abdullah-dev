// src/components/contact/ConnectionCard.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConnectionCard = ({ item }) => {
  const colorMap = {
    red: "from-red-500 to-orange-500",
    blue: "from-blue-500 to-sky-500",
    purple: "from-purple-500 to-indigo-500",
    green: "from-green-500 to-emerald-500",
    teal: "from-teal-500 to-cyan-500",
  };

  const selectedColor = colorMap[item.color] || colorMap.blue;

  return (
    <div
      className={`relative group bg-white p-6 rounded-2xl shadow-lg text-center overflow-hidden
                 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${selectedColor} 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      <div className="relative z-10">
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center 
                       bg-gray-100 text-picto-primary group-hover:bg-white/20 group-hover:text-white
                       transition-all duration-300`}>
          <FontAwesomeIcon icon={item.icon} className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-picto-primary group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-soft-dark group-hover:text-white/80 transition-colors duration-300 h-12">
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg
                     bg-gray-200 text-soft-dark font-semibold
                     group-hover:bg-white group-hover:text-picto-primary
                     transition-all duration-300"
        >
          <FontAwesomeIcon icon={item.buttonIcon} />
          {item.buttonText}
        </a>
      </div>
    </div>
  );
};

export default ConnectionCard;