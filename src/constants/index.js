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

export const AVATAR = "https://avatars.githubusercontent.com/u/175679849?v=4";

export const PORTFOLIO = "https://www.theayushgupta.in/";

const foodie_icon =
  "https://img.freepik.com/premium-vector/stylish-3d-pink-letter-f-icon_462839-414.jpg?w=360";

const netflix_icon = "https://freesvg.org/img/1281718271.png";

const UNO_icon =
  "https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960462-stock-illustration-letter-u-logo-icon-design.jpg";

const devTinder_icon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsiql5ahPw5k8Z1yYlxy1tXs2eUA_ll5vRQ&s";

const Ash_Reads_icon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTJ7iFzABoQZZltRCNKgvRId_Uvf3-3Pt2g&s";

const TgChat_icon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3sfz1bnhgS8yIUvZC6lhyJduJyJF4jopFA&s";

const linkify_icon = "https://www.svgrepo.com/show/97314/clip.svg";

const macbookpro_icon =
  "https://www.svgrepo.com/show/303110/apple-black-logo.svg";

const webcrawler_icon = "https://www.svgrepo.com/svg/532662/spider-widow";

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
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
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
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
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
    iconUrl: webcrawler_icon,
    theme: "btn-back-black",
    name: "Web Crawler",
    description:
      "A CLI Node.js web crawler that finds internal links and ranks pages by frequency.",
    link: "https://github.com/Ayush-0312/webcrawlerhttp",
  },
  {
    iconUrl: linkify_icon,
    theme: "btn-back-blue",
    name: "Linkify",
    description:
      "A sleek and powerful link management platform built to track performance and simplify sharing.",
    link: "https://linkify.theayushgupta.in/",
  },
  {
    iconUrl: TgChat_icon,
    theme: "btn-back-blue",
    name: "Tg Chat",
    description:
      "A platform offering lightning-fast chat and crystal-clear video calls.",
    link: "https://tgchat.theayushgupta.in/",
  },

  {
    iconUrl: UNO_icon,
    theme: "btn-back-red",
    name: "UNO",
    description: "A real-time multiplayer UNO game.",
    link: "https://uno.theayushgupta.in/",
  },
  {
    iconUrl: macbookpro_icon,
    theme: "btn-back-black",
    name: "MacBook Pro",
    description: "MacBook Pro Landing Page.",
    link: "https://macbookpro.theayushgupta.in/",
  },
  {
    iconUrl: Ash_Reads_icon,
    theme: "btn-back-green",
    name: "Ash Reads",
    description: "Portfolio website for bibliophile Ash.",
    link: "https://ash-reads.vercel.app/",
  },
  {
    iconUrl: netflix_icon,
    theme: "btn-back-red",
    name: "Cinemix",
    description:
      "A smart movie recommendation platform using AI to suggest trending and personalized content.",
    link: "https://cinemix.theayushgupta.in/",
  },
  {
    iconUrl: devTinder_icon,
    theme: "btn-back-blue",
    name: "DevTinder",
    description:
      "A full-stack matchmaking platform enabling real-time profile swiping.",
    link: "http://devtinder.theayushgupta.in/",
  },
  {
    iconUrl: foodie_icon,
    theme: "btn-back-orange",
    name: "Foodie",
    description: "A food ordering web app featuring real-time restaurant data.",
    link: "https://foodie-001.netlify.app/",
  },
];
