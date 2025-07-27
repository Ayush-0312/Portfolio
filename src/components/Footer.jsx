import { GITHUB, LINKEDIN, AVATAR, PORTFOLIO } from "../constants/index";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleAvatarClick = () => {
    window.open(PORTFOLIO, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-auto flex bg-blue-100 px-5 py-2 justify-between">
      <div>
        <span className="text-xl font-semibold text-gray-800">Ayush Gupta</span>
      </div>
      <div className="flex space-x-3">
        <div onClick={handleAvatarClick}>
          <img
            className="w-8 rounded-xl cursor-pointer"
            src={AVATAR}
            alt="avatar"
          />
        </div>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
