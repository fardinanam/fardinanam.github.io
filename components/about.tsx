"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Graduate student in Computer Science at Rochester Institute of
        Technology (RIT), with 2.5+ years of professional experience as a Software Engineer at
        Pridesys IT Ltd. Skilled in fullstack software development with Python, Java, and
        JavaScript, and strong foundations in C, C++, and Data Structures &
        Algorithms. Earned a B.Sc. in Computer Science and Engineering from
        Bangladesh University of Engineering and Technology (BUET). Passionate
        about applying software engineering, cloud systems, and data-driven
        technologies to solve real-world problems and currently seeking
        opportunities in software development and engineering roles.
      </p>
    </motion.section>
  );
}

export default About;
