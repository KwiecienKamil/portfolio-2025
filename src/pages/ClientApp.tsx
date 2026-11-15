import { useState } from "react";
import Reveal from "../../Reveal";
import Section from "../components/Section";
import { ClientHero } from "../components/client/ClientHero";
import { ClientOffer } from "../components/client/ClientOffer.jsx";
import { ClientProjects } from "../components/client/ClientProjects.jsx";
import { ClientProcess } from "../components/client/ClientProcess.jsx";

export const ClientApp = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`font-semibold ${theme} font-roboto overflow-x-clip w-full max-w-[100vw]`}
    >
      <Section theme="light" setTheme={setTheme}>
        <ClientHero />
      </Section>
      <Reveal>
        <ClientOffer />
      </Reveal>
      <Reveal>
        <ClientProjects />
      </Reveal>
      <Reveal>
        <ClientProcess />
      </Reveal>
    </div>
  );
};
