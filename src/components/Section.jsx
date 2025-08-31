import React, { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Section = ({ children, theme, setTheme }) => {
  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme);
    }
  });
  return (
    <section className="bg-white dark:bg-black w-full z-1" ref={container}>
      {children}
    </section>
  );
};

export default Section;
