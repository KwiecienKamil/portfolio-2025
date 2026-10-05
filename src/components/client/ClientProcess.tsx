import SectionHeader from "../SectionHeader";
import { clientProcessSteps } from "../../utils/Helpers";

export function ClientProcess() {
  return (
    <section id="proces" className="my-12 px-[5%] pb-12">
      <SectionHeader sectionName="Proces" />
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {clientProcessSteps.map((step, index) => (
          <li
            key={step.id}
            className="border-2 border-accent rounded-xl p-6 sm:p-8 flex flex-col gap-3"
          >
            <span className="text-accent font-sourceCode text-2xl">
              0{index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl uppercase font-poppins">
              {step.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
