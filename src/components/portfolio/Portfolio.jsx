// src/components/portfolio/Portfolio.jsx

// CRITICAL: This is a "named import". It MUST have curly braces {}.
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Featured Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-soft-dark">
            Innovative solutions bringing ideas to life through code and
            design. Here are some of the projects I'm most proud of.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Safety check to prevent crash if data is empty */}
          {projectsData &&
            projectsData.map((project, index) => (
              <ProjectCard data={project} key={index} />
            ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/mt-abdullah"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;