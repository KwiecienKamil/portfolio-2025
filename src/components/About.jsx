import "../css/skills.css";
import Reveal from "../../Reveal";
import SectionHeader from "./SectionHeader";
import me from "../../public/assets/trimed.png";
import { services } from "../utils/Helpers";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";

const About = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".service-card");

      const totalWidth = items.length * (items[0].offsetWidth + 20);

      gsap.to(".carousel-track", {
        x: -totalWidth / 2,
        ease: "none",
        duration: 30,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about">
      <SectionHeader sectionName="About" textColor="white" />
      <div className="flex gap-8 px-[5%] py-8">
        <Reveal>
          <div className="border-accent border-2 rounded-xl overflow-hidden">
            <img
              src={me}
              alt="Kamil Kwiecień"
              className="relative object-cover max-w-[12rem]"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="w-full lg:w-[60%]">
            <p className="text-xl leading-relaxed text-justify">
              I'm a frontend developer with commercial experience building web
              applications for international brand. I have successfully
              delivered high-quality websites and applications used by thousands
              of users. My goal is to create software that makes people's lives
              more enjoyable.
            </p>
            <div className="flex  gap-8 mt-8">
              <Link
                to="contact"
                smooth
                offset={0}
                duration={2000}
                className="px-6 py-4 border-1 border-accent bg-accent text-white hover:bg-[#dec012] hover:text-black duration-500 cursor-pointer shadow-lg"
              >
                Contact
              </Link>
              <Link
                to="projects"
                smooth
                offset={0}
                duration={2000}
                className="px-8 py-4 border-1 border-black hover:bg-black hover:text-white duration-500 cursor-pointer shadow-lg"
              >
                Projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div ref={carouselRef} className="relative w-full overflow-hidden py-8">
        <div className="carousel-track flex gap-5">
          {[...services, ...services].map((service, idx) => (
            <div
              key={idx}
              className="service-card min-w-[250px] h-[200px] flex flex-col items-center justify-center border-[2px] border-accent rounded-xl shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-x-6 cursor-default"
            >
              <span className="text-lg font-semibold text-zinc-900">
                {service.name}
              </span>
              <span className="text-5xl mt-4 text-accent animate-circle">
                {service.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
