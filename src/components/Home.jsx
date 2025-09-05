import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import bgVideo from "../assets/hero1.mp4";
import me from "../assets/trimed.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { FaBarsStaggered } from "react-icons/fa6";
import eye from '../assets/eye.mp4'

gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  const [showPortal, setShowPortal] = useState(true);
  const [showTexts, setShowTexts] = useState([false, false, false]);
  const [videoEnded, setVideoEnded] = useState(false);

  const videoRef = useRef();



  useEffect(() => {
    const timer = setTimeout(() => setShowPortal(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();


useGSAP(() => {
  if (!videoRef.current) return;

  const videoEl = videoRef.current;

  videoEl.onloadedmetadata = () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: videoEl, 
        start: "top top", 
        end: "+=" + videoEl.duration, 
        scrub: 1,
        pin: true,
      },
    }).to(videoEl, {
      currentTime: videoEl.duration,
      ease: "none",
    });
  };
}, [showPortal]);


  useEffect(() => {
    if (!showPortal) {
      return scrollY.onChange((y) => {
        setShowTexts([
          y > 50,   
          y > 200,  
          y > 300,  
        ]);
      });
    }
  }, [scrollY, showPortal]);

  return (
    <section id="hero" className={`w-full ${!showPortal ? "h-[80vh] bg-white" : "h-[100vh] bg-black"} relative overflow-hidden`}>
      <motion.div
        className="h-full w-full bg-darkblue-900"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: showPortal ? 0 : 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      {showPortal && (
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: [0, 1.2, 1.8, 3], opacity: [1, 0.8, 0.5, 0] }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute z-20 w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent via-black to-yellow-400 shadow-[0_0_80px_30px_rgba(255,0,128,0.8)]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-4 rounded-full bg-black"
          />
        </motion.div>
      )}
        {!showPortal && !videoEnded && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoEnded ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <video
            src={bgVideo}
            autoPlay
            muted
            playsInline
            className="w-3/5 md:w-4/5"
            onEnded={() => setVideoEnded(true)}
          />
           <div className="absolute top-1/3 left-[60%] md:left-4/6 font-semibold flex flex-col font-poppins">
        <h2 className="text-center sm:text-start lg:text-start text-2xl sm:text-4xl xl:text-5xl">
          <span>Hello</span>, I'm
        </h2>
        <h1 className="text-4xl font-[800] sm:text-5xl xl:text-6xl shadowed font-saira text-accent">
          Kamil Kwiecień
        </h1>
        <div className="text-center sm:text-start lg:text-start text-sx sm:text-2xl xl:text-3xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString().pauseFor(2500).deleteAll().start();
            }}
            options={{
              strings: [
                "Frontend Developer",
                "React Developer",
                "Frontend Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex items-start mt-[2rem]">
          <button className="bg-accent">Contact</button>
        </div>
        </div>
        </motion.div>
      )}
      {videoEnded && (
        <motion.div
          className="absolute inset-0 z-20 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-24 flex items-center justify-between px-[5%]"
          >
            <div className="flex items-center gap-4">
              <img src={me} alt="Kamil Kwiecień" className="max-w-[50px] rounded-full shadow-xl"/>
              <div>
                <p className="font-semibold">Kamil Kwiecień</p>
              <span className="text-zinc-500">Frontend Developer</span>
              </div>
            </div>
              <FaBarsStaggered className="text-2xl"/>
          </motion.div>
          <div className="h-[80%] flex items-center justify-between ">
             <div className="">
              <video 
              src={eye}
              muted
              autoPlay
              playsInline
              loop
              ></video>
            </div>
            <div className="relative max-w-1/2 -left-[15%] font-roboto">
              <h5 className="text-4xl mb-2">About Me</h5>
              <p className="w-full text-black text-lg leading-relaxed text-justify">
              I am a frontend developer with commercial experience building web
              applications for international brand. I have successfully
              delivered high-quality websites and applications used by thousands
              of users. My goal is to create software that makes people’s lives
              easier and more enjoyable.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <button className="px-8 py-4 bg-[#1C58F1] text-white font-[700] rounded-sm">Contact</button>
              <button className="px-8 py-4 bg-accent text-black font-[700] rounded-sm">My Work</button>
            </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
