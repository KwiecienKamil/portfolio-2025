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

const TechStack = () => {
  return (
    <Reveal>
      <div className="flex items-center  sm:justify-start mt-8 pb-2 text-light">
        <p className="dark:text-accent">Tech Stack</p>
        <span>
          <TbArrowsRight className="ml-4 animate-pulse text-accent" />
        </span>
        <div className="w-full md:min-w-[400px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  text-xs lg:text-sm">
          <SkillItem
            icon={<FaReact size="1.6em" />}
            skill="React.js"
            id="react"
          />
          <SkillItem
            icon={<SiNextdotjs size="1.6em" />}
            skill="Next.js"
            id="next"
          />
          <SkillItem
            icon={<BiLogoJavascript size="1.6em" />}
            skill="JavaScript"
            id="js"
          />
          <SkillItem
            icon={<SiTypescript size="1.3em" />}
            skill="TypeScript"
            id="ts"
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
            id="next"
            icon={<FaWordpress size="1.6em" />}
            skill="Wordpress"
          />
          <SkillItem
            id="nodejs"
            icon={<FaNodeJs size="1.6em" color="text-node" />}
            skill="Node.js"
          />
          <SkillItem
            id="next"
            icon={<SiExpress size="1.6em" color="text-white" />}
            skill="Express.js"
          />
          <SkillItem
            id="mysql"
            icon={<GrMysql size="1.6em" color="text-react" />}
            skill="Mysql"
          />
          <SkillItem id="next" icon={<TbSql size="1.6em" />} skill="SQL" />
          <SkillItem
            id="rtl"
            icon={<SiTestinglibrary size="1.6em" />}
            skill="RTL"
          />
          <SkillItem
            id="cypr"
            icon={<SiCypress size="1.6em" />}
            skill="Cypress"
          />
          <SkillItem id="rtl" icon={<SiVitest size="1.6em" />} skill="Vitest" />
          <SkillItem id="redux" icon={<SiRedux size="1.6em" />} skill="Redux" />
          <SkillItem id="jira" icon={<FaJira size="1.6em" />} skill="Jira" />
          <SkillItem id="git" icon={<BiLogoGit size="1.6em" />} skill="Git" />
          <SkillItem id="firebase" icon={<FaAws size="1.6em" />} skill="AWS" />
          <SkillItem id="figma" icon={<FaFigma size="1.6em" />} skill="Figma" />
        </div>
      </div>
    </Reveal>
  );
};

export default TechStack;
