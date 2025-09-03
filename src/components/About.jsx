import "../css/skills.css";
import Reveal from "../../Reveal";
import { LuNotebookPen } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className=" px-[10%] mt-[8rem] flex flex-col">
      <div className="max-w-full md:max-w-1/2 pr-4 py-4 ">
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
      </div>
      <Reveal>
        <div className=" text-light flex justify-end mt-[4rem]">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 flex items-center justify-center bg-black text-accent rounded-lg">
                <LuNotebookPen className="h-full w-[50%]" />
              </div>
              <h5 className="text-[1.5rem]">Education</h5>
            </div>
            <div className="flex items-center gap-4 text-[1.2rem]">
              <p>2022-2026</p>
              <span>-</span>
              <p>Bachelor of Engineering in Computer Science</p>
            </div>
            <p className="text-brown-200">University Of Radom</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
