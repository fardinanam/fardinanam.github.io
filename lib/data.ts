import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import laserSecurityImg from "@/public/laser-security-system.jpg";
import raytracingImg from "@/public/ray-tracing.bmp";
import syncincImg from "@/public/syncinc.png";
import syncincImgDark from "@/public/syncinc-dark.png";
import rentastayImg from "@/public/rentastay.png";
import compilerImgDark from "@/public/compiler-dark.png";
import compilerImg from "@/public/compiler.png";
import { MdAssistant } from "react-icons/md";

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
    title: "Undergraduate Student, BUET",
    location: "Dhaka, Bangladesh",
    description:
      "I'm a final year student in Computer Science and Engineering at BUET.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-present",
  },
  {
    title: "Research Assistant, IWFM, BUET",
    location: "Dhaka, Bangladesh",
    description:
      "I'm working as a research assistant on a project to develop a web-based early warning system for river erosion.",
    icon: React.createElement(MdAssistant),
    date: "2022-present",
  },
  {
    title: "Intern, Pubali Bank Ltd.",
    location: "Dhaka, Bangladesh",
    description:
      "Participated in a 1 month internship program at Pubali Bank Ltd. and worked on a project to develop a module of their banking app.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineer II, Pridesys IT Ltd.",
    location: "Dhaka, Bangladesh",
    description:
      "Working as a software engineer II on a project to develop a cloud based ERP system.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
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
    title: "Ray Tracing",
    description:
      "A ray tracing program that renders a 3D scene with realistic lighting.",
    tags: ["C++", "OpenGL", "Computer Graphics"],
    imageUrl: raytracingImg,
    imageUrlDark: null,
    githubUrl:
      "https://github.com/fardinanam/CSE410-Computer-Graphics/tree/master",
    websiteUrl: "",
  },
  {
    title: "A C Compiler",
    description:
      "A subset C compiler that analyzes and compiles C code to optimized assembly 8086 code.",
    tags: ["C", "Flex", "Bison", "Assembly", "C++"],
    imageUrl: compilerImg,
    imageUrlDark: compilerImgDark,
    githubUrl: "https://github.com/fardinanam/A-C-Compiler",
    websiteUrl: "",
  },
  {
    title: "Laser Security System",
    description:
      "A laser security system that detects intruders and sends an alert with a message.",
    tags: ["Arduino", "C++"],
    imageUrl: laserSecurityImg,
    imageUrlDark: null,
    githubUrl:
      "https://github.com/fardinanam/Laser-Security-System-With-Arduino",
    websiteUrl: "",
  },
  {
    title: "RentaStay",
    description:
      "A web app to rent and manage houses and apartments inspired by Airbnb.",
    tags: ["django", "JavaScript", "Bootstrap", "Oracle DB", "JQuery"],
    imageUrl: rentastayImg,
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
  "Docker",
  "Kubernetes",
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

export const hobbies = [
  "travelling.",
  "coding.",
  "problem solving.",
  "learning new things.",
  "building softwares.",
  "playing video games.",
] as const;
