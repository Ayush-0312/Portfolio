/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="->" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ayush</span> 👋
      <br /> A Web Developer who loves turning ideas into reality through code!
    </h1>
  ),
  2: (
    <InfoBox
      text="From projects to progress— every challenge taught me a new skill!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Skills in action! Crafted multiple projects that showcase my expertise."
      link="/projects"
      btnText="Visit Projects"
    />
  ),
  4: (
    <InfoBox
      text="Have a project in mind? Let's build something amazing—just a keystroke away!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
