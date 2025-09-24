import React from "react";
import { projectsInfo } from "../utils/Helpers";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="my-12">
      <SectionHeader sectionName="Projects" textColor="white" />
      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {projectsInfo.map((project) => (
          <div
            key={project.id}
            className="border-2 duration-300 sm:pb-0 flex flex-col justify-between"
          >
            <div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover h-[20rem]"
              />
              <div className="p-4 flex flex-col justify-between gap-2">
                <h3 className="text-3xl">{project.title}</h3>
                <ul className="flex items-center flex-wrap gap-4">
                  {project.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 bg-black text-white rounded-xl text-xs sm:text-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="px-8 py-4 border-1 border-black text-black hover:bg-accent  duration-500 cursor-pointer shadow-lg"
                >
                  Code
                </a>
              )}
              <a
                href={project.webLink}
                className="px-8 py-4 border-1 border-black hover:bg-accent hover:text-white duration-500 cursor-pointer shadow-lg"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
