import { useState } from "react";

import Section from "./components/Section";
import Home from "./components/Home";
import About from "./components/About";
import Reveal from "../Reveal";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [openNav, setOpenNav] = useState(true);
  const [theme, setTheme] = useState("dark");
  return (
      <div className={`font-semibold ${theme} font-roboto`}>
        <Section theme="light" setTheme={setTheme}>
          <Home setOpenNav={setOpenNav} openNav={openNav} />
        </Section>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </div>
  );
}

export default App;
