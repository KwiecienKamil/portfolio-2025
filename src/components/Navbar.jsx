import { navButtons } from "../utils/Helpers";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed top-8 left-0 h-[4rem] w-full z-12 flex justify-center">
      <div className="h-full  rounded-lg flex items-center overflow-hidden gap-4">
        <div className="h-full w-full bg-accent/50 text-light flex items-center justify-between">
          {navButtons.map((btn) => (
            <ScrollLink
              key={btn.path}
              to={btn.path} 
              smooth={true}
              spy={true}
              offset={0} 
              duration={500}
              className="h-full px-4 flex flex-col items-center justify-center cursor-pointer"
              activeClass="bg-accent"
            >
              <span className="text-2xl">{btn.icon}</span>
              <p>{btn.name}</p>
            </ScrollLink>
          ))}
        </div>
        <div className="h-full w-1/4 bg-accent/50 text-black flex items-center rounded-r-full overflow-hidden">
          <button className="w-1/2 flex flex-col items-center justify-center h-full px-6">
            <span>EN</span>
          </button>
          <button className="w-1/2 flex flex-col items-center justify-center h-full bg-accent/50 px-4">
            <span>PL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
