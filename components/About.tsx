"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[54rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">After an initial career in music</span>,
        in 2021 I decided to shift my professional path toward technology. I
        trained as a <span className="font-medium">full-stack developer</span>{" "}
        in a coding bootcamp, and since then I’ve focused on
        <span className="italic"> front-end development with React</span>.<br />
        Most recently, I worked as a{" "}
        <span className="font-medium">
          Front-End Developer using React and TypeScript
        </span>
        , which strengthened my experience building{" "}
        <span className="italic">
          modern, reusable, and maintainable interfaces
        </span>
        .<br />
        I’m interested in continuing to grow within the React ecosystem,
        exploring tools like
        <span className="underline"> React Native, Next.js, React Query</span>,
        and other complementary technologies.
        <br />
        <br />I also have one year of experience as a QA at Cencosud S.A., where
        I developed a strong
        <span className="font-medium"> attention to detail</span>, an
        understanding of the
        <span className="italic"> full development lifecycle</span>, and
        teamwork skills within
        <span className="italic"> agile methodologies</span>.<br />
        I'm looking to continue growing as a{" "}
        <span className="font-medium">Front-End Developer</span>, contributing
        value both technically and personally, in projects where I can{" "}
        <span className="italic">learn and evolve</span>.
      </p>
      <p>
        <span className="italic">Outside of work</span>, I enjoy making music,
        playing soccer, and spending time with my family.
      </p>
    </motion.section>
  );
}
