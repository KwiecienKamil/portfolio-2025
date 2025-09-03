import { useState } from "react";

import Section from "./components/Section";
import Home from "./components/Home";
import About from "./components/About";
import Reveal from "../Reveal";
import TechStack from "./components/TechStack";

function App() {
  const [openNav, setOpenNav] = useState(true);
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div className={`font-rubik font-semibold ${theme}`}>
        <div className="dark:bg-[#1B1214]">
          <Reveal>
            <Section theme="light" setTheme={setTheme}>
              <Home setOpenNav={setOpenNav} openNav={openNav} />
            </Section>
          </Reveal>
          <About />
          <TechStack />
          {/*<Reveal>
             <Section theme="dark" setTheme={setTheme}>
              <About />
            </Section>
          </Reveal>
          <Reveal>
            <Section theme="light" setTheme={setTheme}>
              <Projects />
            </Section>
          </Reveal>
          <Reveal>
            <Section theme="dark" setTheme={setTheme}>
              <Contact />
            </Section>
          </Reveal> */}
        </div>
      </div>
    </>
  );
}

export default App;
