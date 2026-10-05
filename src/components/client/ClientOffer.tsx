import SectionHeader from "../SectionHeader";
import { clientServices } from "../../utils/Helpers";

export function ClientOffer() {
  return (
    <section id="oferta" className="my-12 px-[5%] bg-white py-12 rounded-3xl">
      <SectionHeader sectionName="Co wchodzi w grę" />
      <p className="text-lg sm:text-xl text-zinc-600 mt-6 max-w-3xl">
        Od prostej wizytówki po stronę z formularzem, integracjami i panelem.
        Dokładny zakres ustalamy po rozmowie — poniżej obszary, w których
        pomagam klientom biznesowym.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {clientServices.map((service) => (
          <div
            key={service.id}
            className="min-h-[180px] flex flex-col items-center justify-center border-[2px] border-accent rounded-xl shadow-md p-6 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <span className="text-5xl text-accent animate-circle">
              {service.icon}
            </span>
            <span className="text-xl sm:text-2xl mt-4 uppercase font-poppins text-center">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
