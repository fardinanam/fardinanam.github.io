import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";

import { Metadata } from "next";

const title = "Fardin Anam Aungon | Portfolio";
const description = "Fardin Anam Aungon is a Software Engineer II at Pridesys IT Ltd. He is a Full Stack Developer with a passion for building beautiful and functional websites.";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "Fardin Anam Aungon, Fardin, Anam, Aungon, Portfolio, Full Stack Developer, Software Engineer, Web Developer",
  metadataBase: new URL("https://fardinanam.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: '/icon.jpg',
  },
};

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
