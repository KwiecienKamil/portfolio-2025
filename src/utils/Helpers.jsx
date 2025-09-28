import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import img1 from "../../public/assets/12.png";
import img2 from "../../public/assets/8.png";
import img3 from "../../public/assets/13.png";
import img4 from "../../public/assets/9.png";

export const navButtons = [
  {
    name: "Home",
    icon: <FaHome />,
    path: "home",
  },
  {
    name: "About",
    icon: <FaCircleInfo />,
    path: "about",
  },
  {
    name: "Projects",
    icon: <FaLaptopCode />,
    path: "projects",
  },
  {
    name: "Contact",
    icon: <MdEmail />,
    path: "contact",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kamil-kwiecie%C5%84-1920b927b/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/KwiecienKamil",
    icon: <FaGithub />,
  },
];

export const contactInfo = [
  {
    id: 1,
    type: "Email",
    value: "kamilkwiecien9@gmail.com",
  },
  {
    id: 1,
    type: "Phone",
    value: "+48 533 532 056",
  },
];

export const services = [
  {
    id: 1,
    name: "Web developement",
    icon: <MdOutlineWeb />,
  },
  {
    id: 2,
    name: "Databases",
    icon: <FaDatabase />,
  },
  {
    id: 3,
    name: "APIs",
    icon: <FaServer />,
  },
  {
    id: 4,
    name: "State managament",
    icon: <SiRedux />,
  },
  {
    id: 5,
    name: "AI integration",
    icon: <FaRobot />,
  },
  {
    id: 6,
    name: "Hosting",
    icon: <RiUploadCloud2Fill />,
  },
  {
    id: 7,
    name: "Marketing",
    icon: <FaMoneyCheckDollar />,
  },
];

export const projectsInfo = [
  {
    id: 1,
    title: "Mini game for a global brand",
    stack: ["React.js", "JavaScript", "CSS", "AWS"],
    webLink: "https://www.samsung.com/pl/offer/summer/#game-component",
    githubLink: "",
    img: "/assets/12.png",
  },
  // {
  //   id: 2,
  //   title: "Ogarnij.To",
  //   stack: [
  //     "React.js",
  //     "TypeScript",
  //     "Redux",
  //     "CSS",
  //     "Tailwind",
  //     "Node.js",
  //     "MySql",
  //     "OpenAI",
  //     "OAuth2",
  //     "Stripe",
  //   ],
  //   webLink: "https://ogarnijto.org/?beta=true",
  //   githubLink: "https://github.com/KwiecienKamil/portal-studenta",
  //   img: "/assets/13.png",
  // },
  {
    id: 3,
    title: "Productive",
    stack: ["React.js", "TypeScript", "Tailwind", "Node.js", "MySql", "Vitest"],
    webLink: "https://productive-task-management-app-d4hq.vercel.app/",
    githubLink:
      "https://github.com/KwiecienKamil/Productive---Task-Management-App",
    img: img2,
  },
  {
    id: 4,
    title: "CoNaTalerz",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    webLink: "https://sunny-sable-0b7e0f.netlify.app/",
    githubLink:
      "https://github.com/KwiecienKamil/Productive---Task-Management-App",
    img: img4,
  },
  {
    id: 5,
    title: "Hotel landing page",
    stack: ["React", "JavaScript", "Tailwind"],
    webLink: "https://github.com/KwiecienKamil/MountainHotelWebsite",
    githubLink: "https://adorable-clafoutis-0fc878.netlify.app/",
    img: "/assets/10.png",
  },
];
