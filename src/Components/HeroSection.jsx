import { ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/asmitshukla05",
    icon: FaTwitter,
    hoverClass: "group-hover:text-orange-700 hover:-translate-y-1 transition-transform",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asmit-shukla-2a8591258",
    icon: FaLinkedinIn,
    hoverClass: "group-hover:text-orange-700 hover:-translate-y-1 transition-transform",
  },
  {
    name: "GitHub",
    href: "https://github.com/ash05741",
    icon: FaGithub,
    hoverClass: "group-hover:text-orange-700 hover:-translate-y-1 transition-transform",
  },
  {
    name: "Website",
    href: "https://your-domain-here.com",
    icon: Globe,
    hoverClass: "group-hover:text-orange-700 hover:-translate-y-1 transition-transform",
  },
];

export default function Herosection() {
  return (
    <div className="bg-[#F4F3EF] text-[#1A1A1A] selection:bg-orange-700 selection:text-white font-sans">
      <section className="relative min-h-screen flex items-center z-0 py-20 overflow-hidden border-b-4 border-[#1A1A1A]">

        {/* ===== Main Container (Editorial Grid) ===== */}
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >

            {/* TOP ROW */}
            <div className="flex items-center gap-4 mb-6">
              <div className="px-3 py-1 border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-widest bg-orange-700 text-white shadow-[2px_2px_0_0_#1A1A1A]">
                Portfolio / 2026
              </div>
            </div>

            {/* NAME BLOCK */}
            <div className="mb-10">
              <h1 className="text-7xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase">
                Asmit
                <br />
                <span className="text-transparent [-webkit-text-stroke:3px_#1A1A1A]">Shukla</span>
              </h1>
            </div>

            {/* INFO BLOCK (Brutalist Bento-style) */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">

              {/* Role Card */}
              <div className="border-2 border-[#1A1A1A] p-5 bg-white shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[6px_6px_0_0_#1A1A1A] transition-shadow">
                <span className="block text-xs font-bold uppercase text-orange-700 mb-2">Role</span>
                <p className="text-xl font-bold leading-tight">
                  Full-Stack Web Architect
                </p>
              </div>

              {/* Status Card */}
              <div className="border-2 border-[#1A1A1A] p-5 bg-[#1A1A1A] text-[#F4F3EF] shadow-[4px_4px_0_0_#EA580C] hover:shadow-[6px_6px_0_0_#EA580C] transition-shadow">
                <span className="block text-xs font-bold uppercase text-orange-500 mb-2">Status</span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                  <p className="text-sm font-bold">Ready for deployment</p>
                </div>
              </div>

              {/* Focus Card (Spans full width) */}
              <div className="sm:col-span-2 border-2 border-[#1A1A1A] p-5 bg-white shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[6px_6px_0_0_#1A1A1A] transition-shadow">
                <span className="block text-xs font-bold uppercase text-orange-700 mb-2">Focus</span>
                <p className="text-lg font-medium text-slate-700 leading-snug">
                  Building scalable MERN applications, optimizing high-performance APIs, and crafting precision-grade React interfaces.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-bold text-lg border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#EA580C] hover:bg-orange-700 hover:text-white hover:shadow-[6px_6px_0_0_#1A1A1A] transition-all active:translate-y-1 active:shadow-[2px_2px_0_0_#1A1A1A]"
              >
                About Me
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

          </motion.div>

          {/* RIGHT EDITORIAL SHAPE / GRAPHIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex col-span-5 justify-center items-center relative"
          >
            {/* A massive asterisk or geometric star giving that raw print vibe */}
            <div className="text-[350px] leading-none font-serif text-[#1A1A1A] opacity-10 select-none absolute">
              *
            </div>
            {/* Abstract framed placeholder (could be replaced with a solid professional headshot or 3D render later) */}
            <div className="w-full aspect-square border-4 border-[#1A1A1A] bg-white shadow-[12px_12px_0_0_#1A1A1A] flex flex-col justify-between p-6 relative z-10">
              <div className="flex justify-between w-full border-b-2 border-[#1A1A1A] pb-4">
                <span className="font-bold text-sm uppercase">Fig. 01</span>
                <span className="font-bold text-sm uppercase text-orange-700">MERN</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="text-4xl font-black text-[#1A1A1A]/20 uppercase text-center">
                  Insert <br /> Render <br /> Here
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Social Bar (Bottom Left rather than floating right) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 left-0 w-full md:w-auto"
        >
          <div className="flex border-t-4 border-r-4 border-[#1A1A1A] bg-white text-[#1A1A1A] shadow-[4px_-4px_0_0_#1A1A1A]">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className={`p-4 md:p-6 flex items-center justify-center transition-colors duration-200 hover:bg-[#1A1A1A] hover:text-white ${index !== socialLinks.length - 1 ? 'border-r-2 border-[#1A1A1A]' : ''}`}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </motion.div>

      </section>

      {/* Keeping your existing components, updated with brutalist borders */}
      <Projects className="relative z-10 min-h-screen py-24 bg-white border-b-4 border-[#1A1A1A]" />
      <Skills className="relative z-10 min-h-screen py-24 bg-[#F4F3EF]" />
    </div>
  );
}