import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://linkedin.com/in/mt-abdullah" },
  { icon: faGithub, link: "https://github.com/mt-abdullah" },
  { icon: faFacebook, link: "https://www.facebook.com/share/1BGrWp8D4Q/" },
  { icon: faInstagram, link: "https://www.instagram.com/_.abdullah._____?igsh=MXRqZ285d25tMmpzeQ==" },
  { icon: faTiktok, link: "https://www.tiktok.com/@_.abdullah._____?_t=ZS-8zCUlxDLGLf&_r=1" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;