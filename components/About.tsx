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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        <span className="font-medium">Music</span> has been my primary activity
        throughout my life, until 2021 when I decided to make a radical shift in
        my career and venture into the world of software development. I enrolled
        in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. Over
        the years,{" "}
        <span className="italic">
          my passion for Front-End development with React.js
        </span>{" "}
        has grown significantly. My current goal is to gain experience within
        the <span className="underline">React.js ecosystem</span>, connect with
        inspiring professionals who can provide guidance, and{" "}
        <span className="font-medium">
          continue my learning journey consistently
        </span>
        . I aspire to become a React.js Developer capable of making an impact
        across various domains. My core stack is{" "}
        <span className="font-medium">
          HTML, CSS, Javascript, React and Next.js
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>
      <p>
        {" "}
        <span className="italic">When I'm not coding</span>, I enjoy playing
        music with my friends, playing soccer, and spending nice time with my
        family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about audio production and music arrangements
        <span className="font-medium"></span>.
      </p>
    </motion.section>
  );
}
