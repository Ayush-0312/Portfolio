/* eslint-disable no-unused-vars */
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const GITHUB = "https://github.com/Ayush-0312";

export const LINKEDIN = "https://www.linkedin.com/in/ayush-gupta-41484b234/";

const foodie_icon =
  "https://img.freepik.com/premium-vector/stylish-3d-pink-letter-f-icon_462839-414.jpg?w=360";

const netflix_icon =
  "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  // {
  //   imageUrl: mongodb,
  //   name: "MongoDB",
  //   type: "Database",
  // },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },

  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },

  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: GITHUB,
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: LINKEDIN,
  },
];

export const projects = [
  {
    iconUrl: netflix_icon,
    theme: "btn-back-red",
    name: "Netflix-GPT",
    description:
      "Developed a high-performance, mobile-responsive React app with seamless video streaming, ChatGPT-powered movie search, and secure authentication using Firebase. [Demo UserID/Password - User005@gmail.com/User@005]",
    link: "https://netflixgpt-850bf.web.app/",
  },
  {
    iconUrl: foodie_icon,
    theme: "btn-back-orange",
    name: "Foodie",
    description:
      "Built a fast and interactive food ordering app using React, with real-time Swiggy API data, smooth performance with Shimmer UI and lazy loading, and easy deployment on Netlify with automatic updates from GitHub.",
    link: "https://foodie-001.netlify.app/",
  },
];
