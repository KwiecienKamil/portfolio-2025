import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
