// src/components/workTogether/WorkTogether.jsx

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        {/* 1. A more professional and confident headline */}
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Let's Build Something Resilient Together
        </p>
        
        {/* 2. A description tailored to your specific skills */}
        <p className="text-gray-300 text-sm sm:text-lg font-normal text-center pb-8 max-w-3xl mx-auto">
          Whether you need a secure and stable server environment, a dynamic web
          application, or a complete end-to-end IT solution, my unique blend of
          system administration and full-stack development skills can bring your
          vision to life.
        </p>

        <a
          // 3. The button now links directly to your contact section
          href="#contact"
          className="btn btn-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold"
        >
          Start a Conversation
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg" // Use 'lg' for a slightly larger, cleaner icon size
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;