import { skillsData } from "../../data/skillsData"; // 1. Import your new skills data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 2. Create a reusable SkillCard component right inside this file
const SkillCard = ({ title, icon, skills, theme }) => {
  const headerColors = {
    system: "bg-gradient-to-r from-blue-600 to-blue-500",
    development: "bg-gradient-to-r from-indigo-600 to-purple-500",
    marketing: "bg-gradient-to-r from-orange-500 to-amber-400",
  };

  const tagColors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    orange: "bg-orange-100 text-orange-800",
    purple: "bg-purple-100 text-purple-800",
    teal: "bg-teal-100 text-teal-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    pink: "bg-pink-100 text-pink-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div
        className={`p-6 flex items-center space-x-4 text-white ${
          headerColors[theme] || "bg-gray-500"
        }`}
      >
        <FontAwesomeIcon icon={icon} className="h-8 w-8" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              tagColors[skill.color] || "bg-gray-100 text-gray-800"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// 3. Update the main component to be the Skills Section
const Skills = () => {
  return (
    <div className="content py-10 md:py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <p className="mt-4 text-lg text-soft-dark max-w-2xl mx-auto">
            A diverse set of technical competencies across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cardData, index) => (
            <SkillCard
              key={index}
              title={cardData.title}
              icon={cardData.icon}
              skills={cardData.skills}
              theme={cardData.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;