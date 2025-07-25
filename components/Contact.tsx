"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./SectionHeading";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { register, reset } = useForm();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 text-[0.95rem] dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:federicomontero86@gmail.com">
          federicomontero86@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-2 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          reset();
        }}
      >
        <input
          {...register("email")}
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          {...register("message")}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
