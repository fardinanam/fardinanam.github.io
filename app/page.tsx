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
  openGraph: {
    title: title,
    description: description,
    type: "website",
    images: [
      {
        url: "/profile-pic.jpeg",
        alt: "Fardin Anam Aungon's Profile Picture",
      },
    ],
  },
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
