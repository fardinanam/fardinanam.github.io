import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import laserSecurityImg from "@/public/laser-security-system.jpg";
import raytracingImg from "@/public/ray-tracing.bmp";
import syncincImg from "@/public/syncinc.png";
import syncincImgDark from "@/public/syncinc-dark.png";
import rentastayImg from "@/public/rentastay.png";
import compilerImgDark from "@/public/compiler-dark.png";
import compilerImg from "@/public/compiler.png";
import huhImg from "@/public/huh.png";
import mineSweeper from "@/public/minesweeper.png";
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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MS in CS, RIT",
    location: "Rochester, NY",
    description:
      "Pursuing my MS in Computer Science at Rochester Institute of Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Present",
    others: {},
  },
  {
    title: "Software Engineer II, Pridesys IT Ltd.",
    location: "Dhaka, Bangladesh",
    description: `
Contributed to the development of a cloud-based enterprise resource planning (ERP) system — **BeeQube**.  
We built its micro-service architecture from the ground up and I was a core decision-making member of the team.  

Visit [beeqube.com](https://beeqube.com) to know more about the product.  

**Responsibilities included:**

- Collaborated with the team to research user experience best practices and implement them in the product
- Implemented more than hundred backend APIs using Java Spring Boot and conducted unit tests using Junit and Mockito with more than 98% coverage
- Developed an interactive UI with real-time features using ReactJS with TypeScript, Tailwind CSS, and Redux Toolkit
- Managed the frontend from inception to reﬁning the user interface of the entire ERP system with a focus on dynamic content rendering and user experience
- Designed 30% of the initial part of the database of the ERP with PostgreSQL while keeping the design open to any database
- Deployed microservices to Azure Kubernetes Service with Docker containers and Helm charts
- Created the website of the accounting app (you can visit the beta site [here](https://books.beeqube.com)
    `,
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
    others: {},
  },
  {
    title: "Research Assistant, IWFM, BUET",
    location: "Dhaka, Bangladesh",
    description: `
Worked as a research assistant on a government project to develop a web-based early warning system for river erosion. Responsibilities included developing and maintaining the user interface using ReactJS and integrating it with the Google
Maps API to visualize real-time data.
- Developed and maintained the user interface using ReactJS, ensuring usability and responsiveness
- Integrated Google Maps API to visualize real-time river erosion data from geolocation data
- Collaborated with researchers to design a web-based early warning system deployed on Render. Prototype available [here](https://www.ews-re.com/). The site might be slow because the backend server is still under research and so it is hosted on Render with free plan
`,
    icon: React.createElement(MdAssistant),
    date: "2022-2024",
    others: {},
  },
  {
    title: "B.Sc. in CSE, BUET",
    location: "Dhaka, Bangladesh",
    description:
      "Completed my BSc. in Computer Science and Engineering from Bangladesh University of Engineering and Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2024",
    others: {
      CGPA: "3.92/4.00",
    },
  },
  {
    title: "Intern, Pubali Bank Ltd.",
    location: "Dhaka, Bangladesh",
    description:
      "Participated in a 1 month internship program at Pubali Bank Ltd. and worked on a project to develop a module of their banking app.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
    others: {},
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
    websiteUrl: "",
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
  {
    title: "Minesweeper AI",
    description:
      "An AI that plays Minesweeper using a combination of inference and probability.",
    tags: ["Python", "AI", "Knowledge Base", "Inference", "Probability"],
    imageUrl: mineSweeper,
    imageUrlDark: null,
    githubUrl: "https://github.com/fardinanam/CSE318-AI-Sessional/tree/master/Offline%204%20(Minesweeper)",
    websiteUrl: "",
  },
  {
    title: "Huh!",
    description:
      "A platformer game where the player has to reach the end of the level by jumping over obstacles.",
    tags: ["Unity", "C#", "Game Development", "GameJam"],
    imageUrl: huhImg,
    imageUrlDark: null,
    githubUrl: "https://github.com/Shamit187/IEEECSGameJam2023",
    websiteUrl: "https://shamit187.itch.io/huh",
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
  "Helm",
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
