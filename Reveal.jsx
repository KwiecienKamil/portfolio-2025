import { React, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Reveal;
