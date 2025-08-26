// src/data/contactData.js

import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faPhoneAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const contactData = [
  {
    icon: faEnvelopeOpenText,
    title: "Email Me",
    description: "For professional inquiries and collaborations.",
    link: "mailto:iammtabdullah@gmail.com",
    buttonText: "Send Email",
    buttonIcon: faPaperPlane,
    color: "red",
  },
  {
    icon: faLinkedinIn,
    title: "LinkedIn",
    description: "Let's connect professionally on the world's largest network.",
    link: "https://linkedin.com/in/mt-abdullah",
    buttonText: "View Profile",
    buttonIcon: faLinkedinIn,
    color: "blue",
  },
  {
    icon: faGithub,
    title: "GitHub",
    description: "Explore my projects, code, and contributions.",
    link: "https://github.com/mt-abdullah",
    buttonText: "Visit GitHub",
    buttonIcon: faGithub,
    color: "purple",
  },
  {
    icon: faWhatsapp,
    title: "WhatsApp",
    description: "For a quick chat or voice message.",
    link: "https://wa.me/94788531384",
    buttonText: "Message Me",
    buttonIcon: faWhatsapp,
    color: "green",
  },
  {
    icon: faPhoneAlt,
    title: "Direct Call",
    description: "Available during business hours for urgent matters.",
    link: "tel:+94788531384",
    buttonText: "Call Now",
    buttonIcon: faPhoneAlt,
    color: "teal",
  },
  {
    icon: faTelegramPlane,
    title: "Telegram",
    description: "For fast and secure messaging.",
    link: "https://t.me/m_t_abdullah",
    buttonText: "Start Chat",
    buttonIcon: faTelegramPlane,
    color: "blue",
  },
];