import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe, ImageOff } from "lucide-react";
import finora from "../assets/finora.png";
import Weather from "../assets/Weather.png";
import Bot from "../assets/Bot.png";
import DevSync from "../assets/DevSync.png";

export default function Projects() {
  const projects = [
    {
      title: "Finora",
      description:
        "A modern personal finance dashboard that helps users track income, expenses, and spending patterns through an intuitive interface. Built with a focus on clarity and real-time updates, Finora provides insightful charts and secure data management for better financial decisions.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Firebase", "Firestore"],
      image: finora,
      github: "https://github.com/ash05741/Finora",
      live: "#",
    },
    {
      title: "AI CLI Developer Assistant",
      description:
        "A decoupled, full-stack Command Line Interface (CLI) tool designed to eliminate context-switching. It allows developers to save and fetch reusable code snippets from a cloud database and features an integrated Google Gemini AI agent for real-time coding assistance directly within the terminal.",
      tech: ["Node.js", "Express", "MongoDB", "Google Gemini API"],
      image: Bot,
      github: "https://github.com/ash05741/cli-assistant",
      live: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive web application that fetches real-time weather data and 5-day forecasts. Engineered to handle asynchronous API requests, complex JSON data mapping, and dynamic data visualization within a modern, minimalist UI.",
      tech: ["React", "Tailwind CSS", "Chart.js", "OpenWeatherMap API"],
      image: Weather,
      github: "https://github.com/ash05741/Weather_APP",
      live: "#",
    },
    {
      title: "DevSync",
      description:
        "A production-ready, multi-tenant SaaS project management platform. Features a custom-built, real-time Kanban board for task tracking, secure isolated workspaces, and a responsive glassmorphic UI driven by Tailwind v4.",
      tech: ["React", "Node.js", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
      image: DevSync,
      github: "https://github.com/ash05741/DevSync",
      live: "https://dev-sync-ashen.vercel.app/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#F4F3EF] font-sans pt-32 md:pt-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b-4 border-[#1A1A1A] pb-6"
        >
          <h2 className="text-6xl md:text-[5rem] font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
            Selected <br /> Works
          </h2>
          <div className="mt-6 md:mt-0 px-4 py-2 border-2 border-[#1A1A1A] bg-orange-700 text-white font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0_0_#1A1A1A]">
            04 Projects
          </div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE CARD */}
                <div
                  className={`group relative bg-[#F4F3EF] border-4 border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-[12px_12px_0_0_#EA580C] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 aspect-video ${isReverse ? "md:order-2" : "md:order-1"}`}
                >
                  {project.featured && (
                    <span className="absolute -top-4 -left-4 z-20 px-4 py-1 text-xs font-bold uppercase tracking-widest bg-orange-700 text-white border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A]">
                      Featured
                    </span>
                  )}

                  {project.image ? (
                    <div className="w-full h-full overflow-hidden border-b-2 border-[#1A1A1A]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-[#F4F3EF] text-[#1A1A1A]/30">
                      <ImageOff size={48} />
                    </div>
                  )}
                </div>

                {/* TEXT CONTENT */}
                <div
                  className={`flex flex-col ${isReverse ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none mb-6">
                    {project.title}
                  </h3>

                  <div className="p-6 border-4 border-[#1A1A1A] bg-[#F4F3EF] shadow-[4px_4px_0_0_#1A1A1A] mb-8">
                    <p className="text-[#1A1A1A] font-medium leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-bold uppercase tracking-wide border-2 border-[#1A1A1A] bg-[#F4F3EF] text-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 px-6 py-3 border-2 border-[#1A1A1A] bg-[#F4F3EF] text-[#1A1A1A] font-bold uppercase tracking-wide shadow-[4px_4px_0_0_#1A1A1A] hover:bg-orange-700 hover:text-white hover:shadow-[6px_6px_0_0_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all"
                    >
                      <FaGithub className="text-xl" />
                      Source
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold uppercase tracking-wide shadow-[4px_4px_0_0_#EA580C] hover:bg-orange-700 hover:shadow-[6px_6px_0_0_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all"
                      >
                        <Globe size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}