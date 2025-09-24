import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Model } from "./Model";
import HeroHeader from "./HeroHeader";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const scrollRef = useRef();

  useGSAP(() => {
    if (!scrollRef.current) return;
    const item = scrollRef.current;

    gsap.to(
      item,
      {
        x: 250 * 3 + 8,
        rotation: 360,
        scale: 1.5,
        yoyo: true,
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      },
      []
    );
  }, []);

  return (
    <section
      id="home"
      className={`w-full h-[90vh] bg-white flex flex-col justify-end  relative overflow-hidden`}
    >
      <Navbar />
      <figure
        className="absolute inset-0 z-1"
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      >
        <Canvas
          shadows
          camera={{ position: [10, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Model scale={isMobile ? 0.9 : 1.5} />
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
      <HeroHeader />
    </section>
  );
};

export default Home;
