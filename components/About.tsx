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
        {" "}
        <span className="font-medium">After an initial career in music</span>,
        in 2021 I decided to redirect my professional path towards software
        development, driven by a strong interest in technology. I trained at a
        coding bootcamp, where I acquired skills as a{" "}
        <span className="font-medium">
          <br />
          full-stack developer
        </span>
        , and since then I have delved into front-end development,
        <span className="italic">especially with React.js.</span>.<br />{" "}
        Additionally, I have 1 year of work experience as a QA at Cencosud S.A.,
        which has allowed me to strengthen my ability to guarantee software
        quality, apply agile methodologies and collaborate effectively with
        multidisciplinary teams. This combination of technical skills and QA
        experience gives me a comprehensive perspective <br />
        on the software development cycle. My current goal is to grow
        professionally in <br />
        <span className="underline">
          Front-End Development and Quality Assurance roles
        </span>
        , where I can contribute my technical skills and <br />
        <span className="font-medium">attention to detail</span>, while
        continuing to develop in both areas.{" "}
      </p>
      <p>
        {" "}
        <span className="italic">When I'm not coding</span>, I enjoy playing
        music with my friends, playing soccer, <br />
        and spending nice time with my family.
      </p>
    </motion.section>
  );
}
