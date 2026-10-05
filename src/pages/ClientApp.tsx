import { useState } from "react";
import Reveal from "../../Reveal";
import Section from "../components/Section";
import { ClientHero } from "../components/client/ClientHero";
import { ClientOffer } from "../components/client/ClientOffer";
import { ClientProjects } from "../components/client/ClientProjects";
import { ClientProcess } from "../components/client/ClientProcess";

export const ClientApp = () => {
  const [, setTheme] = useState("dark");

  return (
    <div className="font-semibold dark font-roboto bg-zinc-900">
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
