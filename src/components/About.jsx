import "../css/skills.css";
import Reveal from "../../Reveal";
import SectionHeader from "./SectionHeader";
import me from "../../public/assets/trimed.png";
import { services } from "../utils/Helpers";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".service-card");

      
      const totalWidth =
        items.length *
        (items[0].offsetWidth + 20); 

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
    <section id="about" className="h-[200vh]">
      <SectionHeader sectionName="About" textColor="white" />

      <div className="flex gap-8 px-[5%] py-8">
        <Reveal>
          <div className="bg-accent rounded-xl">
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
            <div className="flex justify-center gap-8 mt-8">
              <button className="px-8 py-4 border-1 border-black hover:bg-black hover:text-white duration-500 cursor-pointer shadow-lg">
                Work Experience
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden py-8"
      >
        <div className="carousel-track flex gap-5">
          {[...services, ...services].map((service, idx) => (
            <div
              key={idx}
              className="service-card min-w-[250px] h-[200px] flex flex-col items-center justify-center border-2 border-black bg-gradient-to-tr from-light to-accent rounded-xl shadow-md"
            >
              <span className="text-lg font-semibold">{service.name}</span>
              <span className="text-3xl mt-4 text-accent">{service.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
