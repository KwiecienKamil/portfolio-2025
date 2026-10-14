import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from "../SectionHeader";
import { clientCaseStudies } from "../../utils/Helpers";

function VideoPlaceholder({ project, index, featured = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 group ${
        featured ? "aspect-[16/9] min-h-[280px] sm:min-h-[420px]" : "aspect-[16/10]"
      }`}
      initial={{ clipPath: "inset(100% 0 0 0 round 1rem)" }}
      animate={
        inView
          ? { clipPath: "inset(0% 0 0 0 round 1rem)" }
          : { clipPath: "inset(100% 0 0 0 round 1rem)" }
      }
      transition={{ duration: 0.95, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div className="absolute inset-0" style={{ y: parallaxY, scale }}>
        <img
          src={project.poster}
          alt=""
          className={`h-full w-full object-cover ${inView ? "case-ken-burns" : ""}`}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
      <div className="case-video-shimmer pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light" />

      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm">
          {project.category}
        </span>
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent backdrop-blur-sm">
          Wideo — wkrótce
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.a
          href={project.webLink}
          target="_blank"
          rel="noreferrer"
          className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md"
          animate={hovered ? { scale: 1.08 } : { scale: 1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Zobacz ${project.title}`}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-accent/50"
            animate={hovered ? { scale: [1, 1.35], opacity: [0.6, 0] } : {}}
            transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
          />
          <FaPlay className="ml-1 text-lg sm:text-xl" />
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
        <div className="h-1 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ width: "0%" }}
            animate={inView ? { width: hovered ? "78%" : "42%" } : { width: "0%" }}
            transition={{ duration: hovered ? 2.5 : 1.2, ease: "easeInOut" }}
          />
        </div>
        <p className="mt-2 text-xs text-zinc-400 font-sourceCode">
          {project.videoSrc ? "Odtwarzanie podglądu" : "Placeholder · podmień na plik .mp4"}
        </p>
      </div>

      {project.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 pointer-events-none"
          poster={project.poster}
          src={project.videoSrc}
          muted
          loop
          playsInline
        />
      ) : null}
    </motion.div>
  );
}

function CaseStudyRow({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
        index > 0 ? "mt-16 sm:mt-24" : ""
      }`}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <VideoPlaceholder
          project={project}
          index={index}
          featured={index === 0}
        />
      </div>

      <div
        className={`lg:col-span-5 flex flex-col gap-5 ${reversed ? "lg:order-1 lg:items-end lg:text-right" : "lg:order-2"}`}
      >
        <motion.span
          className="text-accent font-sourceCode text-sm tracking-[0.25em] uppercase"
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Case {String(index + 1).padStart(2, "0")}
        </motion.span>
        <motion.h3
          className="text-3xl sm:text-4xl lg:text-5xl uppercase font-poppins leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-lg text-zinc-400 leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.36 }}
        >
          {project.result}
        </motion.p>
        <motion.ul
          className={`flex flex-wrap gap-2 ${reversed ? "lg:justify-end" : ""}`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
          }}
        >
          {project.stack.map((tech) => (
            <motion.li
              key={tech}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-xs sm:text-sm"
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          href={project.webLink}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-lg w-fit"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Zobacz stronę na żywo
          <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export function ClientProjects() {
  const sectionRef = useRef(null);
  const introInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="realizacje" ref={sectionRef} className="my-12 relative">
      <SectionHeader sectionName="Realizacje" />

      <motion.p
        className="px-[5%] mt-6 max-w-3xl text-md sm:text-xl text-zinc-400 leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Krótkie filmy z realizacji — scroll, interakcje i efekt końcowy. Na razie
        placeholdery; wystarczy podmienić pole{" "}
        <span className="text-accent font-sourceCode">videoSrc</span> w danych
        projektu.
      </motion.p>

      <div className="px-[5%] mt-12 pb-8">
        {clientCaseStudies.map((project, index) => (
          <CaseStudyRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
