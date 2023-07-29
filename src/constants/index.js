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

const projects = [
  {
    name: "Green Leaf ",
    description:
      "This system includes a stock management feature that allows users to access and download reports, track available stock with visual graphs after release, and a QR code generator for final products. To improve user-friendliness, the interface utilizes pop-up windows and toast messages.",
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
      " The purpose of this travel application was to enhance tourists' travel accessibility and affordability. The drivers' management function within the system was designed to handle drivers' profiles, display their details to customers, and manage their payment information.",
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
      "The online bookstore's website application enables the administrator to add and approve books for sale. Customers can browse, purchase, and complete transactions securely, ensuring a user-friendly experience for all users involved in interacting with the bookstore's offerings.",
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
    name: "Staff Management ",
    description:
      "This comprehensive staff management system includes a payroll feature that enables users to calculate employee salaries based on their unique ID. Additionally, users can conveniently access, view, update, and delete employee salary information, ensuring efficient management of staff and salaries.",
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
    source_code_link:
      "https://github.com/IT21239298/Online-staff-Management-System",
  },
];

export { services, technologies, education, projects, interest };
