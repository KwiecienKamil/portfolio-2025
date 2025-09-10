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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kamil-kwiecie%C5%84-1920b927b/" },
  { name: "GitHub", href: "https://github.com/KwiecienKamil" },
];


export const services = [
  {
    id: 1,
    name: "Web developement",
    icon: <MdOutlineWeb />
  },
  {
    id: 2,
    name: "Databases",
    icon: <FaDatabase />
  },
  {
    id: 3,
    name: "APIs",
    icon: <FaServer />
  },
  {
    id: 4,
    name: "State managament",
    icon: <SiRedux />
  },
  {
    id: 5,
    name: "AI integration",
    icon: <FaRobot />
  },
  {
    id: 6,
    name: "Hosting",
    icon: <RiUploadCloud2Fill />
  },
  {
    id: 7,
    name: "Marketing",
    icon: <FaMoneyCheckDollar />
  },
]
