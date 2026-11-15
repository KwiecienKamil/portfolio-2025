import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ClientSectionHeader({ sectionName }) {
  const underlineRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      underlineRef.current,
      { width: 0 },
      {
        width: "100%",
        duration: 3,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 60%",
          end: "top 0%",
          toggleActions: "play reverse play reverse",
          scrub: false,
        },
      },
    );
  }, []);

  return (
    <div className="px-[4%] sm:px-[5%] w-full max-w-full box-border overflow-hidden">
      <div
        ref={scrollRef}
        className="relative text-[clamp(1.75rem,7vw,4.375rem)] uppercase font-poppins leading-[1.05] break-words"
      >
        <p>{sectionName}</p>
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 h-1 w-full bg-accent"
        />
      </div>
    </div>
  );
}