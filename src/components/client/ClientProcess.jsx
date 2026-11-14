import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { clientProcessSteps } from "../../utils/Helpers";

export function ClientProcess() {
  const sectionRef = useRef(null);
  const introInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="proces" ref={sectionRef} className="my-12">
      <SectionHeader sectionName="Proces" />

      <div className="px-[5%] mt-8 pb-12">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {clientProcessSteps.map((step, index) => (
            <motion.li
              key={step.id}
              className="client-section-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-4 border-2 border-transparent hover:border-accent/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-black font-sourceCode text-lg font-bold shadow-md">
                  0{index + 1}
                </span>
                <h3 className="text-xl sm:text-2xl uppercase font-poppins text-black leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg client-section-muted leading-relaxed pl-0 sm:pl-16">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
