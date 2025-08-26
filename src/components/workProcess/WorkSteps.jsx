import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkSteps = ({ data }) => {
  // A map to translate color names into Tailwind classes for icons and glows
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hoverBg: "bg-blue-600",
      glow: "glow-blue", // Custom class for the CSS glow
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-600",
      hoverBg: "bg-teal-600",
      glow: "glow-teal",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      hoverBg: "bg-indigo-600",
      glow: "glow-indigo",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hoverBg: "bg-green-600",
      glow: "glow-green",
    },
  };

  const selectedColor = colorMap[data.color] || colorMap.blue;

  return (
    // 'group' enables hover effects on child elements
    // 'relative' is crucial for the ::before pseudo-element (the glow)
    <div className={`relative group p-6 text-center bg-white rounded-xl shadow-md 
                     transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
      
      {/* The background glow pseudo-element */}
      <div className={`absolute inset-0 rounded-xl z-[-1] transition-opacity duration-300 
                     opacity-0 group-hover:opacity-40 ${selectedColor.glow}`}>
      </div>

      {/* The large, colorful icon */}
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center 
                   mx-auto transition-colors duration-300 
                   ${selectedColor.bg} group-hover:${selectedColor.hoverBg}`}
      >
        <FontAwesomeIcon
          icon={data.icon}
          className={`h-8 w-8 transition-colors duration-300 
                     ${selectedColor.text} group-hover:text-white`}
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-picto-primary">
        {data.title}
      </h3>
      <p className="mt-2 text-sm text-soft-dark">
        {data.description}
      </p>
    </div>
  );
};

export default WorkSteps;