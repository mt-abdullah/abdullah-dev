import {
  faClipboardList,
  faSitemap,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import WorkSteps from "./WorkSteps";

// REFINED DATA for the new professional layout
const myWorkProcessData = [
  {
    icon: faClipboardList,
    title: "Discovery & Planning",
    description:
      "Clarifying the vision and defining a strategic roadmap to ensure project success from day one.",
    color: "blue",
  },
  {
    icon: faSitemap,
    title: "Architecture & Design",
    description:
      "Designing a secure, scalable, and user-centric blueprint for both infrastructure and interfaces.",
    color: "teal",
  },
  {
    icon: faCode,
    title: "Development & Implementation",
    description:
      "Bringing the design to life with clean, efficient code and robust, reliable infrastructure.",
    color: "indigo",
  },
  {
    icon: faRocket,
    title: "Deployment & Optimization",
    description:
      "Ensuring a seamless launch and continuously monitoring for peak performance and security.",
    color: "green",
  },
];
const WorkProcess = () => {
  return (
    <div className="bg-white py-10 md:py-20" id="work-process">
      <div className="content grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* --- Left Column: Main Description --- */}
        <div className="max-lg:text-center">
          <h2 className="section-title">My Strategic Approach</h2>
          <p className="mt-4 text-lg text-soft-dark leading-relaxed">
            I follow a proven, four-step process to transform complex challenges
            into elegant, high-performance solutions. My methodology ensures
            clarity, efficiency, and a final product that is not only functional
            but also secure and built to scale.
          </p>
        </div>

        {/* --- Right Column: The 2x2 Grid of Steps --- */}
        <div className="grid sm:grid-cols-2 gap-6">
          {myWorkProcessData.map((data, index) => (
            <WorkSteps data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
