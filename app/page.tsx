import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fardin Anam Aungon | Personal Portfolio",
  description:
    "Fardin Anam Aungon is just going to finish his CS degree and started a junior software engineering journey.",
};

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
