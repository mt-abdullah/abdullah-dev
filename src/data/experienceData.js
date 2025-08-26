import {
  faWindows,
  faLinux,
  faPython,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShieldAlt,
  faHashtag,
  faPalette,
  faCode,
  faSearch,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const experienceData = [
  {
    date: "Present",
    company: "Mars Tech International (Private) Limited",
    role: "System Administrator & Website Developer",
    theme: "system", // For styling
    achievements: [
      "Manage IT infrastructure ensuring 99.9% uptime for 50+ users",
      "Develop responsive company websites with PHP/WordPress",
      "Implemented cybersecurity measures reducing threats by 40%",
      "Automated system monitoring with Python scripts",
    ],
    tech: [
      { name: "Windows Server", icon: faWindows, color: "blue" },
      { name: "Linux", icon: faLinux, color: "green" },
      { name: "Python", icon: faPython, color: "teal" },
      { name: "WordPress", icon: faWordpress, color: "purple" },
      { name: "Cybersecurity", icon: faShieldAlt, color: "orange" },
    ],
  },
  {
    date: "2023 - 2024",
    company: "Ideal IT Solutions (Private) Limited",
    role: "Digital Marketing Executive",
    theme: "marketing", // For styling
    achievements: [
      "Managed social media across 5 platforms, growing engagement by 65%",
      "Created 100+ graphic designs using Adobe Creative Suite",
      "Developed and maintained company websites",
      "SEO content increased organic traffic by 45%",
      "Administered CCTV security systems",
    ],
    tech: [
      { name: "Social Media", icon: faHashtag, color: "pink" },
      { name: "Graphic Design", icon: faPalette, color: "purple" },
      { name: "WordPress", icon: faCode, color: "blue" },
      { name: "SEO", icon: faSearch, color: "green" },
      { name: "CCTV Systems", icon: faVideo, color: "red" },
    ],
  },
];