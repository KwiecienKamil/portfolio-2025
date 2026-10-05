import SectionHeader from "../SectionHeader";
import { clientCaseStudies } from "../../utils/Helpers";

export function ClientProjects() {
  return (
    <section id="realizacje" className="my-12">
      <div className="px-[5%]">
        <SectionHeader sectionName="Realizacje" />
      </div>
      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {clientCaseStudies.map((project) => (
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
                {project.result && (
                  <p className="text-lg text-zinc-600">{project.result}</p>
                )}
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
              <a
                href={project.webLink}
                className="px-8 py-4 border-2 text-black hover:border-green-500 duration-300 cursor-pointer shadow-lg"
                rel="noreferrer"
                target="_blank"
              >
                Zobacz stronę
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
