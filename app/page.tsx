import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fardin Anam Aungon | Portfolio",
  description:
    "Fardin Anam Aungon is a Software Engineer II at Pridesys IT Ltd. He is a Full Stack Developer with a passion for building beautiful and functional websites.",
  keywords: "Fardin Anam Aungon, Fardin, Anam, Aungon, Portfolio, Full Stack Developer, Software Engineer, Web Developer",
  image: "/images/profile-pic.jpeg",
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
