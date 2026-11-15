import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaCheck, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";
import { MdOutlineWeb, MdSupportAgent } from "react-icons/md";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { ClientSectionHeader } from "./ClientSectionHeader";

const ROTATING_FOCUS = [
  "stronę od zera",
  "utrzymanie strony",
  "widoczność online",
  "spokój po starcie",
];

const MARQUEE_TAGS = [
  "Responsywność",
  "Szybkie ładowanie",
  "SEO podstawy",
  "Nowoczesny design",
  "Animacje",
  "Formularze kontaktu",
  "Google Analytics",
  "Hosting",
  "Poprawki po wdrożeniu",
  "Mobile-first",
];

function BrowserPreview({ active }) {
  return (
    <div className="mt-6 rounded-xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 bg-white">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 text-xs text-zinc-500 font-sourceCode truncate">
          twoja-firma.pl
        </span>
      </div>
      <div className="p-4 sm:p-6 space-y-3 min-h-[180px] sm:min-h-[220px] bg-white">
        <motion.div
          className="h-8 sm:h-10 rounded-lg bg-accent/30 border border-accent"
          initial={{ width: "0%" }}
          animate={active ? { width: "72%" } : { width: "0%" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
        <motion.div
          className="h-3 rounded-full bg-zinc-200"
          initial={{ width: "0%", opacity: 0 }}
          animate={active ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        />
        <motion.div
          className="h-3 rounded-full bg-zinc-200"
          initial={{ width: "0%", opacity: 0 }}
          animate={active ? { width: "88%", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        />
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200"
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.5 }}
            />
          ))}
        </div>
        <motion.div
          className="inline-flex px-4 py-2 rounded-md bg-accent text-black text-sm font-bold shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={active ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.95, type: "spring", stiffness: 260 }}
        >
          Kontakt
        </motion.div>
      </div>
    </div>
  );
}

function MaintenanceList({ active }) {
  const items = [
    "Pomoc przy kupnie domeny",
    "Aktualizacja treści i zdjęć",
    "Poprawki błędów i drobne zmiany",
    "Monitorowanie działania strony",
    "Wsparcie po publikacji",
  ];

  return (
    <ul className="mt-6 space-y-3">
      {items.map((text, i) => (
        <motion.li
          key={text}
          className="flex items-start gap-3 text-base sm:text-lg text-zinc-700"
          initial={{ opacity: 0, x: -16 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
        >
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-black shadow-sm">
            <FaCheck className="text-xs" />
          </span>
          {text}
        </motion.li>
      ))}
    </ul>
  );
}

// function StatChip({ label, value, active, delay = 0 }) {
//   return (
//     <motion.div
//       className="rounded-xl border-2 border-accent/50 bg-white px-4 py-3 text-center shadow-sm"
//       initial={{ opacity: 0, y: 16 }}
//       animate={active ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay, duration: 0.5 }}
//     >
//       <p className="text-lg sm:text-2xl font-poppins text-black font-semibold">
//         {value}
//       </p>
//       <p className="text-xs sm:text-sm text-zinc-600 mt-1">{label}</p>
//     </motion.div>
//   );
// }

function BentoCard({
  children,
  className = "",
  delay = 0,
  variant = "default",
  ...props
}) {
  const variantClass =
    variant === "accent"
      ? "client-offer-card--accent"
      : variant === "warm"
        ? "client-offer-card--warm"
        : "client-offer-card";

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border-2 border-zinc-200/90 p-4 sm:p-8 text-zinc-900 transition-all duration-300 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(209,176,0,0.55)] min-w-0 ${variantClass} ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
      {children}
    </motion.article>
  );
}

export function ClientOffer() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.12 });
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFocusIndex((i) => (i + 1) % ROTATING_FOCUS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="oferta"
      ref={sectionRef}
      className="my-8 sm:my-12 relative max-w-full"
    >
      <ClientSectionHeader sectionName="Co wchodzi w grę" />

      <div className="px-[4%] sm:px-[5%] mt-6 sm:mt-8 max-w-full">
        <div className="client-offer-panel relative z-1 rounded-2xl sm:rounded-3xl overflow-hidden max-w-full">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full  blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full  blur-3xl" />

          <div className="relative px-4 sm:px-10 py-8 sm:py-12">
            <motion.div
              className="max-w-5xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-accent font-sourceCode mb-3 sm:mb-4 font-bold">
                Tworzenie · Utrzymanie · Wsparcie
              </p>
              <h3 className="text-xl sm:text-4xl lg:text-5xl font-poppins uppercase leading-tight text-black">
                Robię dla firm{" "}
                <span className="block sm:inline sm:min-w-[12ch] text-accent drop-shadow-sm mt-1 sm:mt-0">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={focusIndex}
                      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                      transition={{ duration: 0.45 }}
                      className="inline-block"
                    >
                      {ROTATING_FOCUS[focusIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h3>
              <p className="mt-4 text-md sm:text-xl text-zinc-700 leading-relaxed max-w-3xl">
                Od pierwszej rozmowy po działającą stronę i późniejszą opiekę —
                bez technicznego chaosu po Twojej stronie. Wszystko wytłumaczę i
                zrobię za Ciebie.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
              <BentoCard
                className="md:col-span-7 lg:col-span-8"
                delay={0.05}
                variant="accent"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-black text-2xl sm:text-3xl shadow-md">
                    <MdOutlineWeb />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-accent font-bold">
                      Główna usługa
                    </p>
                    <h4 className="text-xl sm:text-3xl uppercase font-poppins mt-1 text-black leading-tight">
                      Strony internetowe dla firm
                    </h4>
                    <p className="text-zinc-700 mt-2 text-base sm:text-lg leading-relaxed">
                      Wizytówka, landing lub rozbudowana witryna — dopasowana do
                      branży, z czytelną ofertą i wezwaniem do działania.
                    </p>
                  </div>
                </div>
                <BrowserPreview active={inView} />
              </BentoCard>

              <BentoCard
                className="md:col-span-5 lg:col-span-4"
                delay={0.12}
                variant="warm"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-accent text-2xl sm:text-3xl shadow-md">
                    <MdSupportAgent />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                      Po wdrożeniu
                    </p>
                    <h4 className="text-xl sm:text-3xl uppercase font-poppins mt-1 text-black leading-tight">
                      Utrzymanie WWW
                    </h4>
                    <p className="text-zinc-700 mt-2 text-base leading-relaxed">
                      Wszystko tłumaczę i robię za ciebie
                    </p>
                  </div>
                </div>
                <MaintenanceList active={inView} />
              </BentoCard>

              <BentoCard className="md:col-span-4" delay={0.18}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 mb-4">
                  <FaMobileAlt className="text-2xl" />
                </div>
                <h4 className="text-xl uppercase font-poppins text-black">
                  Mobile-first
                </h4>
                <p className="text-zinc-700 mt-2 text-sm sm:text-base">
                  Większość klientów wchodzi z telefonu — layout i treść pod to
                  projektuję od początku.
                </p>
                <motion.div
                  className="mt-4 mx-auto w-24 h-40 rounded-2xl border-2 border-accent bg-white shadow-lg relative overflow-hidden"
                  animate={inView ? { y: [0, -6, 0] } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-x-2 top-2 h-2 rounded bg-accent" />
                  <div className="absolute inset-x-2 top-6 space-y-1.5">
                    <div className="h-1.5 rounded bg-zinc-200" />
                    <div className="h-1.5 w-4/5 rounded bg-zinc-200" />
                    <div className="h-8 mt-2 rounded bg-accent/25" />
                  </div>
                </motion.div>
              </BentoCard>

              <BentoCard className="md:col-span-4" delay={0.22}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 mb-4">
                  <FaRocket className="text-2xl" />
                </div>
                <h4 className="text-xl uppercase font-poppins text-black">
                  Szybkość
                </h4>
                <p className="text-zinc-700 mt-2 text-sm sm:text-base">
                  Lekki kod i sensowne ładowanie — lepsze pierwsze wrażenie.
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    { label: "Wydajność", w: "92%" },
                    { label: "Optymalizacja", w: "88%" },
                  ].map((bar, i) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs font-semibold text-zinc-600 mb-1">
                        <span>{bar.label}</span>
                        <span className="text-accent">{bar.w}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-zinc-200 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-amber-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.w }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.15, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-4" delay={0.26}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800 mb-4">
                  <FaSearch className="text-2xl" />
                </div>
                <h4 className="text-xl uppercase font-poppins text-black">
                  SEO na start
                </h4>
                <p className="text-zinc-700 mt-2 text-sm sm:text-base">
                  Meta tagi, nagłówki i struktura pod wyszukiwarkę — solidny
                  fundament pod widoczność.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Title", "Opis", "Nagłówki", "Sitemap"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-black text-accent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </BentoCard>

              <BentoCard
                className="md:col-span-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                delay={0.3}
                variant="accent"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 max-w-xl min-w-0">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-accent text-2xl sm:text-3xl">
                    <RiUploadCloud2Fill />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl uppercase font-poppins text-black">
                      Publikacja i hosting
                    </h4>
                    <p className="text-zinc-700 mt-2 text-base">
                      Pomogę uruchomić stronę pod właściwą domeną i przejść
                      przez pierwsze dni online bez stresu.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-2 sm:gap-3 w-full lg:max-w-md"></div>
              </BentoCard>
            </div>

            <div className="offer-marquee-mask mt-12 py-5 border-t border-accent/25 bg-white/60 rounded-2xl">
              <div className="offer-marquee-track flex w-max gap-8">
                {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="text-sm sm:text-base uppercase tracking-wider font-semibold text-zinc-800 whitespace-nowrap"
                  >
                    {tag}
                    <span className="text-accent mx-4">·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
