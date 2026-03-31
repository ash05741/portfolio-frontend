import { motion } from "framer-motion"; // Note: changed from "motion/react" to standard framer-motion
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import finora from "../assets/finora.png";
import Weather from "../assets/weather.png";

export default function Projects({ className }) {
  // UPGRADE 1: Changed tech string to an array for dynamic badges
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
      title: "Developer Portfolio",
      description:
        "Modern developer portfolio engineered with dynamic routing, custom cursor interactions, and highly optimized Framer Motion animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "/project2.png", 
      github: "#",
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
  ];

  return (
    <section className={`min-h-screen bg-[#f8fafc] dark:bg-slate-950 py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold flex justify-center text-slate-700 dark:text-white mb-24 border-b border-b-slate-500 pb-4 max-w-max mx-auto"
        >
          PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                // UPGRADE 2: Use whileInView so they animate on scroll!
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", stiffness: 40 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isReverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE CARD */}
                {/* UPGRADE 3: Added targeted hover lift and glow to the image */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* UPGRADE 4: Scannable Tech Badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-6 mt-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="text-xl group-hover:-translate-y-1 transition-transform" />
                      Source Code
                    </a>

                    {/* Only show Live button if there is a real link */}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        <Globe className="text-xl group-hover:-translate-y-1 transition-transform" />
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