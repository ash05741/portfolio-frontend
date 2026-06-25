import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

export default function Skills({ className }) {
  const frontend = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ];

  const backend = [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "PHP", level: 60 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 85 },
    { name: "Firebase", level: 75 },
    { name: "Postman", level: 80 },
    { name: "Antigravity", level: 90 },
    { name: "Figma (UI Design)", level: 75 },
  ];

  /* ---------------- Framer Motion Variants ---------------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ---------------- Skill Bar ---------------- */
  const SkillBar = ({ skill }) => {
    const isStrong = skill.level >= 85;
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-2">
            {skill.name}
            {isStrong && (
              <span className="text-[10px] uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-md">
                Core
              </span>
            )}
          </span>
        </div>

        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          />
        </div>
      </div>
    );
  };

  /* ---------------- Skill Card ---------------- */
  const SkillCard = ({ title, skills, icon, blurb }) => (
    <motion.div
      variants={cardVariants}
      className="
        group
        h-full
        rounded-2xl
        p-8
        backdrop-blur-lg
        bg-white/60 dark:bg-slate-900/60
        border border-slate-200 dark:border-slate-700
        shadow-lg
        hover:shadow-2xl hover:border-blue-500/30
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/30">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
        {blurb}
      </p>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  /* ---------------- Section ---------------- */
  return (
    <section className={`min-h-screen py-24 bg-[#f8fafc] dark:bg-slate-950 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold flex justify-center text-slate-700 dark:text-white mb-24 border-b border-b-slate-500 pb-4 max-w-max mx-auto"
        >
          SKILLS
        </motion.h2>

        {/* Cards Grid with Staggered Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <SkillCard
            title="Frontend Engineering"
            icon={<Code2 size={20} />}
            blurb="Building responsive, accessible interfaces with modern React tooling."
            skills={frontend}
          />
          <SkillCard
            title="Backend & Systems"
            icon={<Server size={20} />}
            blurb="Designing APIs and data layers that scale cleanly."
            skills={backend}
          />
          <SkillCard
            title="Architecture & Tools"
            icon={<Wrench size={20} />}
            blurb="The workflow and tooling that ties projects together."
            skills={tools}
          />
        </motion.div>

      </div>
    </section>
  );
}
