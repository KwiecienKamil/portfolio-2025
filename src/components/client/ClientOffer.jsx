import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaCheck, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";
import { MdOutlineWeb, MdSupportAgent } from "react-icons/md";
import { RiUploadCloud2Fill } from "react-icons/ri";
import SectionHeader from "../SectionHeader";

const ROTATING_FOCUS = [
  "stronę od zera",
  "utrzymanie WWW",
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
    <div className="mt-6 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
        <span className="w-3 h-3 rounded-full bg-red-500/90" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
        <span className="w-3 h-3 rounded-full bg-green-500/90" />
        <span className="ml-3 flex-1 text-xs text-zinc-500 font-sourceCode truncate">
          twoja-firma.pl
        </span>
      </div>
      <div className="p-4 sm:p-6 space-y-3 min-h-[180px] sm:min-h-[220px]">
        <motion.div
          className="h-8 sm:h-10 rounded-lg bg-accent/25 border border-accent/40"
          initial={{ width: "0%" }}
          animate={active ? { width: "72%" } : { width: "0%" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
        <motion.div
          className="h-3 rounded bg-zinc-800"
          initial={{ width: "0%", opacity: 0 }}
          animate={active ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        />
        <motion.div
          className="h-3 rounded bg-zinc-800"
          initial={{ width: "0%", opacity: 0 }}
          animate={active ? { width: "88%", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        />
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="aspect-[4/3] rounded-md bg-zinc-800/80 border border-zinc-700"
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.5 }}
            />
          ))}
        </div>
        <motion.div
          className="inline-flex px-4 py-2 rounded-md bg-accent text-black text-sm font-semibold"
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
          className="flex items-start gap-3 text-base sm:text-lg text-zinc-300"
          initial={{ opacity: 0, x: -16 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <FaCheck className="text-xs" />
          </span>
          {text}
        </motion.li>
      ))}
    </ul>
  );
}

function StatChip({ label, value, active, delay = 0 }) {
  return (
    <motion.div
      className="rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3"
      initial={{ opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <p className="text-2xl sm:text-3xl font-poppins text-accent">{value}</p>
      <p className="text-sm text-zinc-400 mt-1">{label}</p>
    </motion.div>
  );
}

function BentoCard({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm transition-colors hover:border-accent/60 ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </motion.article>
  );
}

export function ClientOffer() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFocusIndex((i) => (i + 1) % ROTATING_FOCUS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="oferta" ref={sectionRef} className="my-12 relative">
      <div className="pointer-events-none absolute inset-x-0 top-32 h-64 bg-accent/5 blur-3xl" />

      <SectionHeader sectionName="Co wchodzi w grę" />

      <div className="px-[5%] py-8 relative z-1">
        <motion.div
          className="max-w-4xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-sourceCode mb-4">
            Tworzenie · Utrzymanie · Wsparcie
          </p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-poppins uppercase leading-tight">
            Robię dla firm{" "}
            <span className="inline-block min-w-[12ch] text-accent">
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
          <p className="mt-4 text-md sm:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Od pierwszej rozmowy po działającą stronę i późniejszą opiekę — bez
            technicznego chaosu po Twojej stronie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          <BentoCard className="md:col-span-7 lg:col-span-8" delay={0.05}>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-accent">
                <MdOutlineWeb />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Główna usługa
                </p>
                <h4 className="text-2xl sm:text-3xl uppercase font-poppins mt-1">
                  Strony internetowe dla firm
                </h4>
                <p className="text-zinc-400 mt-2 text-base sm:text-lg leading-relaxed">
                  Wizytówka, landing lub rozbudowana witryna — dopasowana do
                  branży, z czytelną ofertą i wezwaniem do działania.
                </p>
              </div>
            </div>
            <BrowserPreview active={inView} />
          </BentoCard>

          <BentoCard className="md:col-span-5 lg:col-span-4" delay={0.12}>
            <div className="flex items-start gap-4">
              <span className="text-4xl text-accent">
                <MdSupportAgent />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Po wdrożeniu
                </p>
                <h4 className="text-2xl sm:text-3xl uppercase font-poppins mt-1">
                  Utrzymanie WWW
                </h4>
                <p className="text-zinc-400 mt-2 text-base leading-relaxed">
                  Nie zostawiam Cię samego po starcie.
                </p>
              </div>
            </div>
            <MaintenanceList active={inView} />
          </BentoCard>

          <BentoCard className="md:col-span-4" delay={0.18}>
            <FaMobileAlt className="text-3xl text-accent mb-3" />
            <h4 className="text-xl uppercase font-poppins">Mobile-first</h4>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              Większość klientów wchodzi z telefonu — layout i treść pod to
              projektuję od początku.
            </p>
            <motion.div
              className="mt-4 mx-auto w-24 h-40 rounded-2xl border-2 border-accent/50 bg-zinc-950 relative overflow-hidden"
              animate={inView ? { y: [0, -6, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-x-2 top-2 h-2 rounded bg-accent/40" />
              <div className="absolute inset-x-2 top-6 space-y-1.5">
                <div className="h-1.5 rounded bg-zinc-700" />
                <div className="h-1.5 w-4/5 rounded bg-zinc-700" />
                <div className="h-8 mt-2 rounded bg-zinc-800" />
              </div>
            </motion.div>
          </BentoCard>

          <BentoCard className="md:col-span-4" delay={0.22}>
            <FaRocket className="text-3xl text-accent mb-3" />
            <h4 className="text-xl uppercase font-poppins">Szybkość</h4>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              Lekki kod i sensowne ładowanie — lepsze pierwsze wrażenie i mniej
              porzuceń.
            </p>
            <div className="mt-5 space-y-2">
              {[
                { label: "Wydajność", w: "92%" },
                { label: "Optymalizacja", w: "88%" },
              ].map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>{bar.label}</span>
                    <span>{bar.w}</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-accent"
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
            <FaSearch className="text-3xl text-accent mb-3" />
            <h4 className="text-xl uppercase font-poppins">SEO na start</h4>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              Meta tagi, nagłówki i struktura pod wyszukiwarkę — fundament, nie
              obietnica pierwszego miejsca overnight.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Title", "Opis", "Nagłówki", "Sitemap"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-accent/40 text-accent"
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
            className="md:col-span-12 lg:col-span-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            delay={0.3}
          >
            <div className="flex items-start gap-4 max-w-xl">
              <RiUploadCloud2Fill className="text-4xl text-accent shrink-0" />
              <div>
                <h4 className="text-xl sm:text-2xl uppercase font-poppins">
                  Publikacja i hosting
                </h4>
                <p className="text-zinc-400 mt-2 text-base">
                  Pomogę uruchomić stronę pod właściwą domeną i przejść przez
                  pierwsze dni online bez stresu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full lg:max-w-md">
              <StatChip label="Responsywność" value="100%" active={inView} />
              <StatChip
                label="Proces"
                value="4 kroki"
                active={inView}
                delay={0.1}
              />
              <StatChip
                label="Po starcie"
                value="Opieka"
                active={inView}
                delay={0.2}
              />
            </div>
          </BentoCard>
        </div>

        <div className="offer-marquee-mask mt-12 py-4 border-y border-zinc-800">
          <div className="offer-marquee-track flex w-max gap-8">
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="text-sm sm:text-base uppercase tracking-wider text-zinc-500 whitespace-nowrap"
              >
                {tag}
                <span className="text-accent mx-4">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
