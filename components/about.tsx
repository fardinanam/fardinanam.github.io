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
        Experienced in software development with Python, Java and JavaScript.
        Skilled in C, C++, Data Structures and Algorithms. Educational knowledge with a
        Bachelor's degree focused in Computer Science and Engineering from
        Bangladesh University of Engineering and Technology (BUET).
      </p>
    </motion.section>
  );
}

export default About;
