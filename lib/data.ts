import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import syncincImg from "@/public/syncinc.png";
import syncincImgDark from "@/public/syncinc-dark.png";
import rentastay from "@/public/rentastay.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SyncInc.",
    description:
      "A web app to manage and track projects and tasks of an organization.",
    tags: ["React", "django", "PostgreSQL", "Material UI", "Firebase"],
    imageUrl: syncincImg,
    imageUrlDark: syncincImgDark,
    githubUrl: "https://github.com/fardinanam/SyncInc",
    websiteUrl: "https://syncinc.vercel.app/",
  },
  {
    title: "RentaStay",
    description:
      "An oracle powered bootstrapped Django website inspired by Airbnb.",
    tags: ["django", "JavaScript", "Bootstrap", "Oracle DB", "JQuery"],
    imageUrl: rentastay,
    imageUrlDark: null,
    githubUrl: "https://github.com/fardinanam/RentaStay",
    websiteUrl: "",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Bash",
  "SQL",
  "PostgreSQL",
  "OracleDB",
  "React",
  "Redux",
  "Redux Toolkit",
  "django",
  "Spring Boot",
  "Bootstrap",
  "Tailwindcss",
  "Git",
  "LaTeX",
  "Adobe Illustrator",
  "Arduino",
] as const;

export const socialsData = {
  github: {
    url: "https://github.com/fardinanam",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/fardin-anam-aungon-3b754713b/",
  },
  email: {
    address: "fardinanam@gmail.com",
  },
} as const;
