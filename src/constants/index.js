import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sliit,
  carrent,
  jobit,
  tripguide,
  threejs,
  college,
  cricket,
  travelling,
  photographi,
  payroll,
  tuarify,
  onlineBook,
  grrenleaf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    title: "A/Walisinghe Harischandra College",
    college_name: "",
    icon: college,
    iconBg: "#E6DEDD",
    date: "Jan 2010 - dec 2018",
    points: [
      "A /Walisinghe Harischandra College is a mixed school which provides education for more than 5000 students which is situated at Anuradhapura.",
      "G.C.E Ordinary Level Education (2014-2015).",
      " G.C.E Advance Level Education in Biological Science stream (2016-2018).",
    ],
  },
  {
    title: "Sri Lanka Institute of Information Technology",
    college_name: "",
    icon: sliit,
    iconBg: "#E6DEDD",
    date: "feb 2021 - present",
    points: [
      "Sri Lanka Institute of Information Technology (SLIIT) awards the best IT Degree in Sri Lanka in the field of Information Technology and produces successful professionals.",
      "BSc (Hons) Information Technology Specializing in Information Technology.",
    ],
  },
];
const interest = [
  {
    title: "Cricket",
    college_name: "",
    icon: cricket,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I really enjoy playing and watching cricket. The sport's history,skillfull plays,and teamwork fascinate me. It's not just a hobby it's a sport that I have a genuine passion for.",
    ],
  },
  {
    title: "Travelling",
    college_name: "",
    icon: travelling,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I am an enthusiastic professional with a passion for travelling, experiencing different cultures and leveraging those experiences to foster creativity and innovation.",
    ],
  },
  {
    title: "Photography",
    college_name: "",
    icon: photographi,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I have a profound appriciation for photography beacause it allows me to express my creativity and artistic vision. Through the lens, I can frame moments and scenes in unique ways.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Green Leaf ",
    description:
      "This system incorporates a stock management feature that enables users to access and download reports, as well as track available  stock after release, visually represented with graphs. Additionally, it includes a QR code generator for final products. To enhance user friendliness, pop-up windows and toast messages were implemented in the interface.",
    tags: [
      {
        name: "react.JS",
        color: "blue-text-gradient",
      },
      {
        name: "node.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: grrenleaf,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tuarify",
    description:
      "The aim of this travel app was to increase tourists' access to and affordability of travel. This system's drivers management function was implemented to manage drivers' profiles, view drivers' details for customers, and manage drivers' payment information",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: tuarify,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Bigbook Shelf",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: onlineBook,
    source_code_link: "https://github.com/",
  },
  {
    name: "Staff Payroll Management System ",
    description:
      "The system was created to manage the company's staff. To manage employee salaries in this system, a payroll system was developed. Here, users can search for employees by employee id to  calculate salaries, as well as update, delete, and view employee salary information.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
    ],
    image: payroll,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, education, testimonials, projects, interest };
