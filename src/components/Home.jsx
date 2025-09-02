import bgVideo4 from "../assets/bgVideo4.mp4";
import about from "../assets/trimed.png";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import BottomLinks from "./BottomLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[40rem] xl:min-h-[50rem] w-full relative flex items-center justify-between text-light px-[10%]"
    >
      <Navbar />
      <video
        src={bgVideo4}
        className="absolute top-0 left-0 h-full w-full object-cover "
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 h-full w-full bg-black/20"></div>
      <div className="lg:pl-0 z-10 font-sourceCode font-semibold">
        <h2 className="text-center lg:text-start sm:text-4xl xl:text-5xl ">
          <span className="">Hello</span>, I'm
        </h2>
        <h1 className="text-3xl font-[800] sm:text-5xl xl:text-6xl shadowed font-poppins text-accent">
          Kamil Kwiecień
        </h1>
        <div className="text-center lg:text-start text-sx sm:text-2xl xl:text-3xl">
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
        <button className="py-4 px-12 bg-accent font-[800] text-black rounded-lg text-2xl font-sourceCode h-full mt-6 tilt-hover">
          Contact
        </button>
      </div>
      <div className="sm:w-[25%] lg:w-[25%] relative overflow-hidden bg-accent rounded-t-[1rem] border-2 border-black shadow-xl tilt-hover">
        <div className="relative flex items-center justify-center h-full w-full overflow-hidden">
          <img src={about} alt="me" className="w-full rounded-t-[20px] " />
        </div>
      </div>
      <BottomLinks />
    </section>
  );
};

export default Home;
