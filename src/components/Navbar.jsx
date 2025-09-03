import { useState } from "react";
import { navButtons } from "../utils/Helpers";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");
  

  return (
    <div className="fixed top-8 left-0 h-[4rem] w-full z-12 flex justify-center ">
      <div className="h-full rounded-full flex items-center  gap-4">
        <div className="h-full w-full bg-black rounded-full overflow-hidden text-light flex items-center justify-between">
          {navButtons.map((btn) => (
            <ScrollLink
              key={btn.path}
              to={btn.path}
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActive(btn.path)}
              className={`h-full px-4 flex flex-col items-center justify-center cursor-pointer tilt-hover ${
                active === btn.path ? "text-accent bg-white" : ""
              }`}
            >
              <span className="text-xl">{btn.icon}</span>
              <p>{btn.name}</p>
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
