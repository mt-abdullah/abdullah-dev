// src/data/skillsData.js

import {
  faCloud,
  faCode,
  faShieldAlt,
  faDatabase,
  faProjectDiagram,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export const skillsData = [
  // CATEGORY 1: CLOUD & INFRASTRUCTURE
  {
    title: "Cloud & Infrastructure",
    icon: faCloud,
    theme: "system", // Blue gradient
    skills: [
      { name: "AWS (EC2, S3)", color: "orange" },
      { name: "Windows Server", color: "blue" },
      { name: "Linux (Ubuntu/CentOS)", color: "green" },
      { name: "Virtualization (VMware)", color: "purple" },
      { name: "Active Directory", color: "blue" },
      { name: "Hardware Management", color: "red" },
    ],
  },

  // CATEGORY 2: BACKEND & SCRIPTING
  {
    title: "Backend & Scripting",
    icon: faCode,
    theme: "development", // Purple gradient
    skills: [
      { name: "PHP", color: "purple" },
      { name: "Python (Flask/Django)", color: "teal" },
      { name: "Node.js (Express)", color: "green" },
      { name: "REST APIs", color: "orange" },
      { name: "PowerShell", color: "blue" },
      { name: "Bash Scripting", color: "yellow" },
    ],
  },

  // CATEGORY 3: FRONTEND & WEB
  {
    title: "Frontend & Web",
    icon: faCode,
    theme: "development", // Re-using theme is fine
    skills: [
      { name: "React.js", color: "blue" },
      { name: "JavaScript (ES6+)", color: "yellow" },
      { name: "HTML5", color: "orange" },
      { name: "CSS3 & Tailwind", color: "teal" },
      { name: "WordPress", color: "blue" },
      { name: "SEO Principles", color: "green" },
    ],
  },
  
  // CATEGORY 4: DATABASES
  {
    title: "Databases",
    icon: faDatabase,
    theme: "system", // Re-using theme is fine
    skills: [
      { name: "MySQL", color: "blue" },
      { name: "PostgreSQL", color: "purple" },
      { name: "SQL Server", color: "teal" },
      { name: "MongoDB (NoSQL)", color: "green" },
      { name: "Database Design", color: "orange" },
      { name: "Query Optimization", color: "red" },
    ],
  },

  // CATEGORY 5: DEVOPS & TOOLS
  {
    title: "DevOps & Tools",
    icon: faProjectDiagram,
    theme: "marketing", // Orange gradient
    skills: [
      { name: "Git & GitHub", color: "purple" },
      { name: "Docker", color: "blue" },
      { name: "CI/CD (GitHub Actions)", color: "green" },
      { name: "Jira / Trello", color: "blue" },
      { name: "QEMU", color: "yellow" },
      { name: "Ansible", color: "red" },
    ],
  },

  //CATEGORY 6: SECURITY & DESIGN
  {
    title: "Security & Design",
    icon: faShieldAlt,
    theme: "marketing", // Re-using theme is fine
    skills: [
      { name: "Network Security", color: "red" },
      // THIS IS THE CORRECTED LINE:
      { name: "Cybersecurity Fundamentals", color: "orange" },
      { name: "Figma", color: "pink" },
      { name: "Adobe Creative Suite", color: "purple" },
      { name: "CCTV Systems", color: "teal" },
      { name: "Content Strategy", color: "green" },
    ],
  },
];