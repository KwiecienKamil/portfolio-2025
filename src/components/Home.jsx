import bgVideo4 from "../assets/bgVideo4.mp4";
import about from "../assets/trimed.png";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import BottomLinks from "./BottomLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[55rem] w-full relative flex flex-col sm:flex-row items-center  justify-center sm:justify-between text-light px-[10%]"
    >
      <Navbar />
      <video
        src={bgVideo4}
        className="absolute top-0 left-0 h-full w-full object-cover "
        autoPlay
        muted
        loop
      ></video>
      <div className="lg:pl-0 z-10 font-sourceCode font-semibold flex flex-col">
        <h2 className="text-center sm:text-start lg:text-start text-2xl sm:text-4xl xl:text-5xl ">
          <span>Hello</span>, I'm
        </h2>
        <h1 className="text-4xl font-[800] sm:text-5xl xl:text-6xl shadowed font-poppins text-accent">
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
        <div className="flex justify-center sm:justify-start">
          <button className=" py-4 px-12 bg-accent font-[800] text-black rounded-lg text-md sm:text-2xl font-sourceCode h-full my-6 tilt-hover">
          Contact
        </button>
        </div>
      </div>
      <div className="w-[50%] sm:w-[30%] lg:w-[35%] relative overflow-hidden bg-accent rounded-t-[1rem] border-2 border-black shadow-xl cursor-default">
        <div className="relative flex items-center justify-center h-full w-full overflow-hidden">
          <img src={about} alt="me" className="w-full rounded-t-[20px] " />
        </div>
      </div>
      <BottomLinks />
    </section>
  );
};

export default Home;
