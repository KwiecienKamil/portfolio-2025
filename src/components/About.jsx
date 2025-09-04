import "../css/skills.css";
import Reveal from "../../Reveal";
import { LuNotebookPen } from "react-icons/lu";
import { MdWork } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className=" px-[5%] sm:px-[10%] mt-[8rem] flex flex-col">
      <div className="w-full lg:max-w-2/3 pr-4 py-4 ">
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
        <div className=" text-light flex flex-col items-end mt-[5rem]">
          <div className="w-full lg:w-[50%]">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 flex items-center justify-center bg-black text-accent rounded-lg">
                <MdWork className="h-full w-[50%]" />
              </div>
              <h5 className="text-[1.5rem]">Work Experience</h5>
            </div>
            <div className="flex items-center gap-4 text-[1.2rem]">
              <p className="text-accent">Junior Frontend Developer</p>
              <p className="text-[1rem] ml-auto">May 2025 - Now</p>
            </div>
            <p className="text-brown-200 mt-2">Cheil, Warsaw, Poland</p>
            <div className="flex items-center gap-4 text-[1.2rem]">
              <p className="text-accent mt-4">Web Publisher</p>
              <p className="text-[1rem] ml-auto">June 2024 - May 2025</p>
            </div>
            <p className="text-brown-200 mt-2">Cheil, Warsaw, Poland</p>
          </div>
          <div className="mt-8 w-full">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 flex items-center justify-center bg-black text-accent rounded-lg">
                <LuNotebookPen className="h-full w-[50%]" />
              </div>
              <h5 className="text-[1.5rem]">Education</h5>
            </div>
            <div className="flex items-center gap-4 text-[1.2rem]">
              <p className="text-accent">Bachelor of Engineering in Computer Science</p>
              <p className="text-[1rem] ml-auto">2022-2026</p>
            </div>
            <p className="text-brown-200 mt-2">University Of Radom, last semester</p>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
