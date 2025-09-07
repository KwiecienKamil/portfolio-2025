import { useState } from "react";

import Section from "./components/Section";
import Home from "./components/Home";
import About from "./components/About";
import Reveal from "../Reveal";
import TechStack from "./components/TechStack";
import Services from "./components/Services";

function App() {
  const [openNav, setOpenNav] = useState(true);
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div className={` font-semibold ${theme} font-roboto`}>
            <Section theme="light" setTheme={setTheme}>
              <Home setOpenNav={setOpenNav} openNav={openNav} />
            </Section>
            <Services />
            <Section theme="dark" setTheme={setTheme}>
           <About />
           
           </Section>
          {/* <TechStack /> */}
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
    </>
  );
}

export default App;
