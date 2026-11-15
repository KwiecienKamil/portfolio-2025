import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClientSectionHeader } from "./ClientSectionHeader";
import { clientProcessSteps } from "../../utils/Helpers";

export function ClientProcess() {
  const sectionRef = useRef(null);

  return (
    <section
      id="proces"
      ref={sectionRef}
      className="my-8 sm:my-12 max-w-full overflow-hidden"
    >
      <ClientSectionHeader sectionName="Proces" />

      <div className="px-[4%] sm:px-[5%] mt-6 sm:mt-8 pb-8 sm:pb-12 max-w-full">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {clientProcessSteps.map((step, index) => (
            <motion.li
              key={step.id}
              className="client-section-panel rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col gap-3 sm:gap-4 border-2 border-transparent hover:border-accent/40 transition-colors duration-300 min-w-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-black font-sourceCode text-base sm:text-lg font-bold shadow-md">
                  0{index + 1}
                </span>
                <h3 className="text-lg sm:text-2xl uppercase font-poppins text-black leading-snug break-words">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm sm:text-lg client-section-muted leading-relaxed sm:pl-16">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}