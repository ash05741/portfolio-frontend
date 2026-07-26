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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  /* ---------------- Skill Bar ---------------- */
  const SkillBar = ({ skill }) => {
    const isStrong = skill.level >= 85;
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
          <span className="flex items-center gap-3">
            {skill.name}
            {isStrong && (
              <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-orange-700 border-2 border-[#1A1A1A] px-1.5 py-0.5 shadow-[2px_2px_0_0_#1A1A1A]">
                Core
              </span>
            )}
          </span>
          {/* Added the percentage text for that raw data feel */}
          <span className="text-xs text-slate-500">{skill.level}%</span>
        </div>

        <div className="w-full h-4 bg-white border-2 border-[#1A1A1A] overflow-hidden relative shadow-[2px_2px_0_0_#1A1A1A]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            className="h-full bg-[#1A1A1A] border-r-2 border-[#1A1A1A]"
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
        p-8
        bg-white
        border-4 border-[#1A1A1A]
        shadow-[8px_8px_0_0_#1A1A1A]
        hover:shadow-[12px_12px_0_0_#EA580C]
        transition-all duration-300
        hover:-translate-y-1 hover:-translate-x-1
      "
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-700 border-2 border-[#1A1A1A] text-white shadow-[4px_4px_0_0_#1A1A1A]">
          {icon}
        </div>
        <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
          {title}
        </h3>
      </div>

      <div className="p-4 border-l-4 border-[#1A1A1A] bg-[#F4F3EF] shadow-[4px_4px_0_0_#1A1A1A] mb-8">
        <p className="text-sm font-bold text-[#1A1A1A] leading-relaxed">
          {blurb}
        </p>
      </div>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  /* ---------------- Section ---------------- */
  return (
    <section className={`min-h-screen py-40 bg-[#F4F3EF] font-sans ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b-4 border-[#1A1A1A] pb-6"
        >
          <h2 className="text-6xl md:text-[5rem] font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
            Technical <br /> Arsenal
          </h2>
          <div className="mt-6 md:mt-0 px-4 py-2 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0_0_#EA580C]">
            Core Competencies
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-10"
        >
          <SkillCard
            title="Frontend"
            icon={<Code2 size={24} />}
            blurb="Building responsive, accessible interfaces with modern React tooling."
            skills={frontend}
          />
          <SkillCard
            title="Backend"
            icon={<Server size={24} />}
            blurb="Designing APIs and data layers that scale cleanly."
            skills={backend}
          />
          <SkillCard
            title="Systems"
            icon={<Wrench size={24} />}
            blurb="The workflow and tooling that ties projects together."
            skills={tools}
          />
        </motion.div>

      </div>
    </section>
  );
}