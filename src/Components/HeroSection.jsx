import { ArrowRight, Globe } from "lucide-react";
import { motion } from "motion/react";

import { 
  FaGithub,
  FaLinkedinIn,
  FaTwitter 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";

const Links = [
  {
    name: "Twitter",
    href: "https://x.com/asmitshukla05"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asmit-shukla-2a8591258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTz4K714MQ1SszzVa6SATiA%3D%3D"
  },
  {
    name: "GitHub",
    href: "https://github.com/ash05741"
  },
  {
    name: "Globe",
    href: ""
  }
];

export default function Herosection() {
  return (
    <div> 
    <section className="sticky top-0 h-screen bg-[#f5f5f7] dark:bg-slate-950 flex items-center relative z-0">
      
      {/* ===== Floating Shapes ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-1/3 text-pink-500 text-2xl">△</span>
        <span className="absolute bottom-24 left-20 text-pink-500 text-xl">◜</span>
        <span className="absolute top-40 right-1/4 text-pink-500 text-xl">▽</span>
      </div>

      {/* ===== Main Container ===== */}
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative ml-3 md:ml-8 flex flex-col justify-center"
        >

          {/* TOP ROW */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
              01
            </span>

            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>

            <span className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Portfolio
            </span>
          </div>

          {/* NAME BLOCK */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-700 dark:text-white leading-[1.05]">
              Asmit <br />
              <span className="text-blue-500">Shukla</span>
            </h1>
          </div>

          {/* INFO GRID */}
          <div className="mt-12 grid grid-cols-[120px_1fr] gap-y-6 gap-x-6 max-w-xl">

            <span className="text-sm text-slate-400 dark:text-slate-500">
              Role
            </span>
            <p className="text-slate-600 dark:text-slate-300">
              Full-Stack Web Architect
            </p>

            <span className="text-sm text-slate-400 dark:text-slate-500">
              Focus
            </span>
            <p className="text-slate-600 dark:text-slate-300">
              Building scalable MERN applications, optimizing high-performance APIs, and crafting precision-grade React interfaces.
            </p>

            <span className="text-sm text-slate-400 dark:text-slate-500">
              Status
            </span>
            <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new challenges
            </p>
          </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 text-red-500 font-semibold"
          >
            About Me
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </div>

      </motion.div>

        {/* RIGHT BIG LOGO SHAPE */}
        <div className="relative hidden md:flex justify-center md:mr-90">
          <div className="text-[300px] font-bold select-none
                text-transparent bg-clip-text bg-gradient-to-b from-blue-400/20 to-transparent
                tracking-tighter lg:text-[400px]">
            ∆S
          </div>
        </div>
      </div>

      {/* ===== Social Sidebar ===== */}
      {/* Social Sidebar */}
      <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          > 
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-8 text-slate-500 dark:text-white text-2xl">

      <a
        href={Links[0].href}
        className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-125 transition-transform duration-300"></span>
        <FaTwitter className="relative transition-colors duration-300 group-hover:text-blue-600" />
      </a>

      <a
        href={Links[1].href}
        className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-125 transition-transform duration-300"></span>
        <FaLinkedinIn className="relative transition-colors duration-300 group-hover:text-blue-600" />
      </a>

      <a
        href={Links[2].href}
        className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-125 transition-transform duration-300"></span>
        <FaGithub className="relative transition-colors duration-300 group-hover:text-slate-800" />
      </a>

      <a
        href={Links[3].href}
        className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-125 transition-transform duration-300"></span>
        <Globe size={25} className="relative transition-colors duration-300 group-hover:text-green-500" />
      </a>

      </div>
      </motion.div>
      
    </section>
      <Projects className="relative z-10 min-h-screen py-24 border-t rounded-2xl border-slate-400" />
      <Skills className="relative z-10 min-h-screen py-24" />
    </div>
  );
}