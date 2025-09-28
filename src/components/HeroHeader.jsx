import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const HeroHeader = () => {
  return (
    <div className="px-[5%] pb-[5%] z-2">
      <div className="mb-6 cursor-default">
        <h1 className="text-[70px] sm:text-[90px] font-[600]">
          Hello, I'm <span className="text-accent font-[900]">Kamil</span>
        </h1>
        <div className="text-5xl text-black font-story">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString().pauseFor(2500).deleteAll().start();
            }}
            options={{
              strings: [
                "Frontend Developer",
                "React Developer",
                "Frontend Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Link
          to="contact"
          smooth
          offset={0}
          duration={2000}
          className="px-6 py-4 border-2 text-black hover:border-accent duration-300 cursor-pointer shadow-lg"
        >
          Get in touch
        </Link>
        <Link
          to="projects"
          smooth
          offset={-50}
          duration={2000}
          className="px-6 py-4 border-2 text-black hover:border-accent duration-300 cursor-pointer shadow-lg"
        >
          Latest projects
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
