import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Model } from "../Model";

export function ClientHero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="start"
      className=" w-full h-[90vh] bg-white flex flex-col justify-end relative overflow-hidden"
    >
      <figure
        className="absolute inset-0 z-1 pb-12"
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      >
        <Canvas
          shadows
          camera={{ position: [10, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Model scale={isMobile ? 0.9 : 1.5} scrollTriggerId="start" />
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
      <div className=" px-[5%] pb-[5%] z-2">
        <div className="mb-6 cursor-default">
          <h1 className="text-[70px] sm:text-[90px] font-[600] leading-none">
            Strona internetowa dla{" "}
            <span className="text-accent font-[900]">Twojej firmy</span>
          </h1>
          <p className="text-3xl sm:text-5xl text-black font-story max-w-6xl mt-4">
            Piękne, nowoczesne strony z animacjami w najlepszej cenie.
            Przyciągnij nowych klientów i zrób wrażenie na innych.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <Link
            to="realizacje"
            smooth
            offset={-50}
            duration={2000}
            className="px-6 py-4 border-2 text-black hover:border-accent duration-300 cursor-pointer"
          >
            Realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}
