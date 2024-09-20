import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wildOasisWebImg from "@/public/wild-oasis-web.png";
import wildOasisAdminPageImg from "@/public/wild-oasis-resort.png";
import fastReactPizzaImg from "@/public/fast-react-pizza.png";

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
    title: "The Wild Oasis",
    description:
      "This project is about a Luxury Cabins Resort developed on Next.js framework.",
    tags: ["Next.js", "Context API", "Tailwind CSS", "Supabase"],
    imageUrl: wildOasisWebImg,
    url: "https://wildoasisweb.vercel.app/",
  },

  {
    title: "The Wild Oasis Admin Page",
    description:
      "This is the internal application used inside the resort to check in guests as they arrive.",
    tags: ["Styled Components", "React Query", "React Hook Form"],
    imageUrl: wildOasisAdminPageImg,
    url: "https://thewildoasisresort.vercel.app/",
  },
  {
    title: "Fast React Pizza",
    description:
      "This application allows customers to order pizzas and get them delivered to their home.",
    tags: ["React Router", "Redux", "Tailwind CSS"],
    imageUrl: fastReactPizzaImg,
    url: "https://fastreactpizzaweb.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Router",
  "Context API",
  "Redux",
  "React Query",
  "React Hook Form",
  "Tailwind CSS",
  "Styled Components",
  "Bootstrap",
  "Supabase",
  "Git",
  "Jira",
] as const;
