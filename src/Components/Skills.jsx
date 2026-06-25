import { motion } from "framer-motion";

export default function Skills({ className }) {
  // UPGRADE 1: Updated data to reflect a modern Full-Stack MERN developer
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
  // UPGRADE 2: Added variants for cascading staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay each card by 0.2s
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ---------------- Skill Bar ---------------- */
  const SkillBar = ({ skill }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{skill.name}</span>
        {/* Removed the raw percentage number for a more professional look */}
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

  /* ---------------- Skill Card ---------------- */
  const SkillCard = ({ title, skills }) => (
    <motion.variants variants={cardVariants}>
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
        <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3">
          {title}
        </h3>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <SkillBar key={i} skill={skill} />
          ))}
        </div>
      </motion.div>
    </motion.variants>
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
          <SkillCard title="Frontend Engineering" skills={frontend} />
          <SkillCard title="Backend & Systems" skills={backend} />
          <SkillCard title="Architecture & Tools" skills={tools} />
        </motion.div>

      </div>
    </section>
  );
}