import { motion } from "framer-motion";

export default function About() {
  /* ---------------- Framer Motion Variants ---------------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen bg-[#f5f5f7] dark:bg-slate-950 overflow-hidden flex items-center py-24">

      {/* Floating Shapes (decorative only) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute top-28 left-1/4 text-blue-400 text-2xl">◯</span>
        <span className="absolute bottom-32 right-20 text-pink-500 text-xl">△</span>
        <span className="absolute top-40 right-1/3 text-blue-400 text-xl">◜</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white">
            About Me
          </h2>

          <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            I'm <span className="text-slate-800 dark:text-white font-semibold">Asmit Shukla</span>,
            a Full-Stack Software Engineer who thrives at the intersection of robust logic and high-fidelity design.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            My core expertise lies within the MERN stack. I specialize in architecting scalable backend APIs with Node and Express, managing data via MongoDB, and crafting pixel-perfect, highly interactive interfaces using React and modern CSS frameworks.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            Whether I'm structuring a complex database schema or fine-tuning a Framer Motion animation, my goal is always the same: building systems that are as performant under the hood as they are intuitive to the user.
          </p>

          {/* Highlights Grid with Staggered Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 gap-6"
          >
            {[
              { stat: "5+", label: "Projects Built" },
              { stat: "MERN", label: "Primary Stack" },
              { stat: "UI/UX", label: "Design Focus" },
              { stat: "API", label: "Architecture" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-500 mb-1">{item.stat}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT DESIGN ELEMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="relative hidden md:flex justify-center"
          aria-hidden="true"
        >
          <div className="text-[min(350px,22vw)] lg:text-[350px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-pink-400/20 to-blue-500/10 select-none leading-none">
            ∆
          </div>
        </motion.div>

      </div>
    </section>
  );
}
