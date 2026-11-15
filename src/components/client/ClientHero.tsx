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
      className="w-full min-h-[88dvh] sm:min-h-[90vh] max-w-full bg-white flex flex-col justify-end relative overflow-hidden"
    >
      <figure className="absolute inset-0 z-1 w-full h-full overflow-hidden pointer-events-none">
        <Canvas
          shadows
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          camera={{ position: [10, 0, -10], fov: 17.5, near: 1, far: 20 }}
          className="!w-full !h-full"
        >
          <ambientLight intensity={0.5} />
          <Model scale={isMobile ? 0.75 : 1.5} scrollTriggerId="start" />
          <Environment resolution={isMobile ? 128 : 256}>
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
      <div className="px-[4%] sm:px-[5%] pb-[6%] sm:pb-[5%] pt-24 z-2 w-full max-w-full">
        <div className="mb-4 sm:mb-6 cursor-default max-w-4xl">
          <h1 className="text-[clamp(1.75rem,8vw,5.625rem)] font-[600] leading-[1.05] break-words">
            Strona internetowa dla{" "}
            <span className="text-accent font-[900]">Twojej firmy</span>
          </h1>
          <p className="text-base sm:text-xl md:text-3xl text-black font-story mt-3 sm:mt-4 leading-snug max-w-2xl">
            Piękne, nowoczesne strony z animacjami w najlepszej cenie.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <Link
            to="realizacje"
            smooth
            offset={-50}
            duration={2000}
            className="px-5 py-3 sm:px-6 sm:py-4 border-2 text-black text-sm sm:text-base hover:border-accent duration-300 cursor-pointer"
          >
            Realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}