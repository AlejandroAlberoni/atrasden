"use client";
import React from "react";
import { Righteous, Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { Mail, ScrollText } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  return (
    <section id="contact">
      <h1
        className={`${righteous.className} text-3xl lg:text-6xl font-bold text-center mb-20 tracking-widest select-none`}
      >
        Contact
      </h1>

      <motion.div className="bg-white w-full flex flex-wrap text-black">
        <div className="w-full lg:w-[49%] text-center space-y-20 p-20">
          <p
            className={`${space_grotesk.className} font-bold text-5xl lg:text-[67px]`}
          >
            Let&apos;s talk!
          </p>
          <p
            className={`${ibm_plex_sans.className} text-lg lg:text-[20px] text-justify`}
          >
            Feel free to send me an e-mail at any time; I&apos;ll get back to
            you as soon as possible. I&apos;m open to listening and contribute
            any ideas.
          </p>
        </div>

        <div className="lg:w-[1%]">
          <div className="absolute left-1/2 -translate-x-1/2 text-black border-[1px] border-black h-full invisible lg:visible"></div>
        </div>

        <div className="w-full lg:w-[49%] text-center space-y-20 p-20 flex flex-col items-center">
          <p
            className={`${space_grotesk.className} font-bold text-5xl lg:text-[67px]`}
          >
            My contacts
          </p>
          <div className="space-y-4">
            <a href="mailto:atralberoni99@gmail.com" className="group">
              <p className="px-10 py-4 border-2 rounded-lg font-sans text-center border-black lg:border-b-8 transition-transform duration-300 transform group-hover:scale-110 group-active:scale-95 focus:scale-95 group-hover:rounded-xl">
                Send me an email{" "}
                <Mail
                  size={24}
                  className="inline transform group-hover:translate-x-2 group-active:translate-x-4 group-hover:text-gray-400 transition duration-500 ease-in-out"
                />
              </p>
            </a>
            <section id="curriculum" className="text-center">
              <a
                href="/curriculum.pdf"
                target="_blank"
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-rose-400 md:bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-rose-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-[3] px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                See curriculum <ScrollText size={24} />
              </a>
            </section>
            <div className="flex justify-center space-x-4">
              <Link
                href={`https://github.com/AlejandroAlberoni`}
                target="_blank"
              >
                <SiGithub size={24} />
              </Link>
              <Link
                href={`https://www.linkedin.com/in/alejandro-alberoni-8b95961b4/`}
                target="_blank"
              >
                <SiLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
