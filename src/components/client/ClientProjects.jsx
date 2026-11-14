import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from "../SectionHeader";
import { clientCaseStudies } from "../../utils/Helpers";

function getPosterSrc(poster) {
  return typeof poster === "string" ? poster : poster;
}

function VideoPlaceholder({ project, index, featured = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const [hovered, setHovered] = useState(false);
  const posterSrc = getPosterSrc(project.poster);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-black border-2 border-accent/30 group shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] ${
        featured
          ? "aspect-[16/9] min-h-[280px] sm:min-h-[420px]"
          : "aspect-[16/10] min-h-[220px]"
      }`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <img
          src={posterSrc}
          alt={project.title}
          className={`h-full w-full object-cover ${inView ? "case-ken-burns" : ""}`}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
      <div className="case-video-shimmer pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light" />

      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm font-semibold">
          {project.category}
        </span>
        <span className="rounded-full border border-accent bg-accent/90 px-3 py-1 text-xs font-bold text-black">
          Wideo — wkrótce
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className={`relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/20 text-accent backdrop-blur-md transition-transform duration-300 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          aria-hidden
        >
          <FaPlay className="ml-1 text-lg sm:text-xl" />
        </div>
      </div>

      {project.webLink ? (
        <a
          href={project.webLink}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-20"
          aria-label={`Zobacz ${project.title}`}
        />
      ) : null}

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 pointer-events-none">
        <div className="h-1 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ width: "0%" }}
            animate={
              inView ? { width: hovered ? "78%" : "42%" } : { width: "35%" }
            }
            transition={{ duration: hovered ? 2.5 : 1.2, ease: "easeInOut" }}
          />
        </div>
        <p className="mt-2 text-xs text-white/80 font-sourceCode">
          {project.videoSrc ? "Odtwarzanie podglądu" : "Podgląd realizacji"}
        </p>
      </div>

      {project.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 pointer-events-none"
          poster={posterSrc}
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
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
        index > 0
          ? "mt-14 sm:mt-20 pt-14 sm:pt-20 border-t border-accent/20"
          : ""
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
        className={`lg:col-span-5 flex flex-col gap-5 rounded-2xl border border-zinc-200/80 bg-white/95 p-6 sm:p-8 shadow-lg ${reversed ? "lg:order-1 lg:items-end lg:text-right" : "lg:order-2"}`}
      >
        <motion.span
          className="text-accent font-sourceCode text-sm tracking-[0.25em] uppercase font-bold"
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {project.category}
        </motion.span>
        <motion.h3
          className="text-3xl sm:text-4xl uppercase font-poppins leading-tight text-black"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-lg client-section-body leading-relaxed max-w-md"
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
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.4 },
            },
          }}
        ></motion.ul>
        {project.webLink ? (
          <motion.a
            href={project.webLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-semibold text-accent w-fit transition-colors hover:bg-zinc-900"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Zobacz stronę
            <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ClientProjects() {
  const sectionRef = useRef(null);
  const introInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="realizacje" ref={sectionRef} className="my-12 relative">
      <SectionHeader sectionName="Realizacje" />

      <motion.div
        className="px-[5%] mt-15"
        initial={{ opacity: 0, y: 16 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="pb-8">
          {clientCaseStudies.map((project, index) => (
            <CaseStudyRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
