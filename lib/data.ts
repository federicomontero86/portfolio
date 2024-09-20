import React from "react";
import { PiTestTube } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { PiGear } from "react-icons/pi";
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
    title: "Software Developer",
    location: "Cencosud SA - Montevideo, UY",
    description:
      "Working as part of the OMS Team from Marketplace Paris. My main activity was related to QA Development. This was a hybrid full-time position.",
    icon: React.createElement(PiTestTube),
    date: "Feb 2023 - May 2024",
  },
  {
    title: "Digital Operations VCP DevOps Team - General Electric Healthcare",
    location: "TATA Consultancy - Montevideo, UY",
    description:
      "I was part of the Digital Operations VCP DevOps Team, working for General Electric Healthcare. I worked on a full-time position.",
    icon: React.createElement(PiGear),
    date: "Aug 2022 - Feb 2023",
  },
  {
    title: "Graduated bootcamp - Hack Academy",
    location: "Montevideo, UY",
    description:
      "I graduated after 3 months of full-time dedication (+600hs). Full-stack development.",
    icon: React.createElement(PiGraduationCap),
    date: "Jul 2022",
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
