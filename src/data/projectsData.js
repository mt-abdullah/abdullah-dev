// Import your RENAMED project images here using the new '@' alias
import collegeImg from "@/assets/images/portfolio-images/college-management-system.jpg";
import osImg from "@/assets/images/portfolio-images/os-kernel.png";
import marsAppImg from "@/assets/images/portfolio-images/mars-tech-app.png";

// Import Font Awesome icons for tech tags
import {
  faWindows,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faDatabase,
  faCopyright,
  faMicrochip,
  faDesktop,
  faMobileAlt,
  faCode,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

export const projectsData = [
  {
    category: "Desktop App",
    image: collegeImg,
    previewLink: "https://github.com/mt-abdullah/Application/tree/main/Collage%20management%20system",
    title: "College Management System",
    description: "C# desktop application for managing student admissions, faculty records, and fee payments.",
    tech: [
      { name: "C#", icon: faWindows, color: "purple" },
      { name: ".NET", icon: faLayerGroup, color: "blue" },
      { name: "SQL Server", icon: faDatabase, color: "teal" },
    ],
    features: [
      "Secure login/register system",
      "Student admission & semester upgrades",
      "Fee management and record searching",
    ],
    codeLink: "https://github.com/mt-abdullah/Application/tree/main/Collage%20management%20system",
  },
  {
    category: "System Software",
    image: osImg,
    previewLink: "https://github.com/mt-abdullah/Operating-System/tree/main/Own%2064-bit%20Operating%20System%20Kernel",
    title: "64-bit OS Kernel",
    description: "Custom-built operating system kernel with memory management and multitasking.",
    tech: [
      { name: "C", icon: faCopyright, color: "blue" },
      { name: "Assembly", icon: faMicrochip, color: "orange" },
      { name: "QEMU", icon: faDesktop, color: "green" },
    ],
    features: [
      "64-bit long mode support",
      "Memory paging & heap allocation",
      "Multitasking with round-robin",
    ],
    codeLink: "https://github.com/mt-abdullah/Operating-System/tree/main/Own%2064-bit%20Operating%20System%20Kernel",
  },
  {
    category: "Mobile App",
    image: marsAppImg,
    previewLink: "https://github.com/mt-abdullah/Application/tree/main/Mars%20Tech",
    title: "Mars Tech App",
    description: "Flutter-based frontend application for Mars Tech International.",
    tech: [
      { name: "Flutter", icon: faMobileAlt, color: "teal" },
      { name: "Dart", icon: faCode, color: "blue" },
      { name: "Cross-Platform", icon: faSyncAlt, color: "purple" },
    ],
    features: [
      "Modern UI/UX design",
      "Android & iOS compatibility",
      "Efficient state management",
    ],
    codeLink: "https://github.com/mt-abdullah/Application/tree/main/Mars%20Tech",
  },
];