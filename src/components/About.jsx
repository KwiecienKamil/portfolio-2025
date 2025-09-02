import React from "react";

import SkillItem from "./SkillItem";
import "../css/skills.css";
import {
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaJira,
  FaWordpress,
} from "react-icons/fa";
import { BiLogoGit, BiLogoJavascript } from "react-icons/bi";
import {
  SiCss3,
  SiCypress,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiVitest,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTestinglibrary } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { TbArrowsRight } from "react-icons/tb";
import Reveal from "../../Reveal";

const About = () => {
  return (
    <section id="about" className=" px-[10%] mt-[8rem] flex">
      <div className="max-w-1/2 pr-4 py-4 border-r-[2px]">
        <Reveal>
          <div>
            <h3 className="text-accent font-bold text-4xl">About me</h3>
            <p className="text-light text-xl leading-relaxed text-justify">
              I am a frontend developer with commercial experience building web
              applications for international brand. I have successfully
              delivered high-quality websites and applications used by thousands
              of users. My goal is to create software that makes people’s lives
              easier and more enjoyable.
            </p>
          </div>
        </Reveal>
        <div className="flex items-center mt-[4rem] pb-2 text-light">
          <p className="dark:text-accent">Tech Stack</p>
          <span>
            <TbArrowsRight className="ml-4 animate-pulse" />
          </span>
          <div className="sm:w-[450px] grid grid-cols-2 md:grid-cols-3 text-xs lg:text-sm">
            <SkillItem
              icon={<FaReact size="1.6em" />}
              skill="React.js"
              id="react"
            />
            <SkillItem
              icon={<SiTypescript size="1.3em" />}
              skill="TypeScript"
              id="ts"
            />
            <SkillItem
              icon={<BiLogoJavascript size="1.6em" />}
              skill="JavaScript"
              id="js"
            />
            <SkillItem
              id="css"
              icon={<SiCss3 size="1.6em" />}
              skill="CSS"
              color="css"
            />
            <SkillItem
              id="tailwind"
              icon={<SiTailwindcss size="1.6em" color="text-react" />}
              skill="Tailwind"
            />
            <SkillItem
              id="boot"
              icon={<FaBootstrap size="1.6em" />}
              skill="Bootstrap"
            />
            <SkillItem
              icon={<SiNextdotjs size="1.6em" />}
              skill="Next.js"
              id="next"
            />
            <SkillItem
              id="nodejs"
              icon={<FaNodeJs size="1.6em" color="text-node" />}
              skill="Node.js"
            />
            <SkillItem
              id="express"
              icon={<SiExpress size="1.6em" color="text-white" />}
              skill="Express.js"
            />
            <SkillItem
              id="mysql"
              icon={<GrMysql size="1.6em" color="text-react" />}
              skill="Mysql"
            />
            <SkillItem id="Nextjs" icon={<TbSql size="1.6em" />} skill="SQL" />
            <SkillItem
              id="mongo"
              icon={<DiMongodb size="1.6em" />}
              skill="MongoDB"
            />
            <SkillItem
              id="rtl"
              icon={<SiTestinglibrary size="1.6em" />}
              skill="Unit Test"
            />
            <SkillItem
              id="cypr"
              icon={<SiCypress size="1.6em" />}
              skill="Cypress"
            />
            <SkillItem
              id="rtl"
              icon={<SiVitest size="1.6em" />}
              skill="Vitest"
            />
            <SkillItem
              id="redux"
              icon={<SiRedux size="1.6em" />}
              skill="Redux"
            />
            <SkillItem
              id="Nextjs"
              icon={<FaWordpress size="1.6em" />}
              skill="Wordpress"
            />
            <SkillItem
              id="figma"
              icon={<FaFigma size="1.6em" />}
              skill="Figma"
            />
            <SkillItem id="jira" icon={<FaJira size="1.6em" />} skill="Jira" />
            <SkillItem id="git" icon={<BiLogoGit size="1.6em" />} skill="Git" />
            <SkillItem
              id="firebase"
              icon={<FaAws size="1.6em" />}
              skill="AWS"
            />
          </div>
        </div>
      </div>
      <div className="pl-4">
        <div className="">
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
