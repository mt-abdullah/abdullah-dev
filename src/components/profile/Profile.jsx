import person from "../../assets/images/person2.png"; // Your profile picture
import myCV from "/Abdullah-CV.pdf"; // <-- 1. Place your CV in the 'public' folder and update the name here

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

// 2. All your text is now in one place for easy editing
const profileData = {
  headline: "Versatile System Administrator & Full-Stack Developer",
  intro:
    "A results-driven IT professional with 2+ years of experience building secure, scalable infrastructure and intuitive, user-facing applications. My passion lies in bridging the gap between robust backend systems and elegant frontend design.",
  highlights: [
    "Managing and securing IT infrastructure for 50+ users with a 99.9% uptime record.",
    "Developing responsive, full-stack web applications using modern technologies like React, PHP, and Python.",
    "Proactively advancing skills in AI and Cybersecurity to implement next-generation, intelligent solutions.",
  ],
};

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white shadow-2xl xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-12">
        {/* --- Profile Image & Social Links --- */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 flex-shrink-0">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] w-full object-cover"
              src={person}
              alt="Abdullah - Tech Professional"
            />
          </div>
          <div className="relative -top-9">
            <div className="flex justify-center">
              <div className="px-6 py-3 z-50 bg-white rounded-md shadow-2xl">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* --- Professional Bio & CTAs --- */}
        <div className="max-sm:w-full w-full lg:w-[33rem]">
          {/* Headline */}
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-6 text-picto-primary`}
          >
            {profileData.headline}
          </h2>

          {/* Intro Paragraph */}
          <div
            className={`text-sm xs:text-base lg:text-lg font-normal max-md:text-center text-soft-dark`}
          >
            <p>{profileData.intro}</p>
          </div>

          {/* Key Highlights (Bulleted List) */}
          <ul className="mt-6 space-y-3 text-soft-dark max-md:text-center">
            {profileData.highlights.map((point, index) => (
              <li key={index} className="flex items-start max-md:justify-center">
                <span className="text-picto-primary font-bold mr-3">✔</span>
                {point}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-8 flex max-md:justify-center gap-4">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio" // 3. This now links to your portfolio section
            >
              View My Work
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px] flex items-center gap-2`}
              href={myCV} // 4. This now links to the imported CV file
              download="Abdullah-CV.pdf" // This prompts the user to download
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;