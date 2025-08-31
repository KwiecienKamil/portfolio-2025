import { navButtons } from "../utils/Helpers";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-8 left-0 h-[4rem] w-full z-12 flex justify-center">
      <div className="h-full  rounded-lg flex items-center overflow-hidden">
        <div className="h-full w-full bg-white/10 flex items-center justify-between">
          {navButtons.map((btn) => (
            <Link
              to={btn.path}
              className="h-full px-4 flex flex-col items-center justify-center"
            >
              <span className="text-2xl">{btn.icon}</span>
              <p>{btn.name}</p>
            </Link>
          ))}
        </div>
        <div className="h-full w-1/4 bg-white/20 flex items-center">
          <button className="w-1/2 flex flex-col items-center justify-center h-full px-4">
            <span>EN</span>
          </button>
          <button className="w-1/2 flex flex-col items-center justify-center h-full bg-white/50 px-4">
            <span>PL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
