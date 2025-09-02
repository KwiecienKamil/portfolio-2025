import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const BottomLinks = () => {
  return (
    <div className="absolute bottom-8 left-0 w-full flex justify-center text-black">
      <div className="flex items-center gap-4 h-[4rem]">
        <a
          href="https://github.com/KwiecienKamil/portfolio-2025"
          target="_blank"
          className=" bg-black text-accent flex items-center justify-center rounded-lg h-full px-4 tilt-hover"
        >
          <FaGithub className="text-3xl" />
        </a>
        <button className="py-4 px-6 bg-black text-accent rounded-lg text-2xl font-sourceCode h-full tilt-hover">
          Download CV
        </button>
        <a
          href="https://github.com/KwiecienKamil/portfolio-2025"
          target="_blank"
          className=" bg-black text-accent flex items-center justify-center rounded-lg h-full px-4 tilt-hover"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default BottomLinks;
