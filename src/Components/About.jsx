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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-[#F4F3EF] border-b-4 border-[#1A1A1A] font-sans flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-block px-4 py-1.5 mb-8 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0_0_#EA580C]">
            CS Diploma // Class of 2026
          </div>

          <h2 className="text-6xl md:text-[5rem] font-black text-[#1A1A1A] uppercase tracking-tighter leading-none mb-8">
            About <br /> The Dev
          </h2>

          {/* Bio Block */}
          <div className="space-y-6 text-[#1A1A1A] font-medium text-lg border-4 border-[#1A1A1A] bg-white p-6 shadow-[4px_4px_0_0_#1A1A1A]">
            <p>
              I'm <span className="font-black uppercase text-orange-700">Asmit Shukla</span>,
              a Full-Stack Software Engineer who thrives at the intersection of robust logic and high-fidelity design.
            </p>

            <p>
              My core expertise lies within the MERN stack. I specialize in architecting scalable backend APIs with Node and Express, managing data via MongoDB, and crafting pixel-perfect, highly interactive interfaces using React and modern CSS frameworks.
            </p>

            <p>
              Whether I'm structuring a complex database schema or fine-tuning a Framer Motion animation, my goal is always the same: building systems that are as performant under the hood as they are intuitive to the user.
            </p>
          </div>

          {/* Highlights Grid */}
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
                className="bg-white border-4 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[8px_8px_0_0_#EA580C] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300"
              >
                <h3 className="text-4xl font-black text-[#1A1A1A] mb-1 uppercase tracking-tighter">{item.stat}</h3>
                <p className="text-[#1A1A1A] text-xs font-bold uppercase tracking-widest border-t-2 border-[#1A1A1A] pt-2 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT DESIGN ELEMENT (Brutalist ID Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:flex justify-center items-center"
          aria-hidden="true"
        >
          <div className="w-full max-w-md aspect-[4/5] bg-white border-4 border-[#1A1A1A] shadow-[16px_16px_0_0_#1A1A1A] p-5 flex flex-col justify-between transform hover:rotate-1 transition-transform duration-500">
            {/* Top Bar */}
            <div className="flex justify-between border-b-4 border-[#1A1A1A] pb-4">
              <span className="font-black text-xl uppercase tracking-tighter">Profile.JPG</span>
              <span className="font-black text-2xl text-orange-700 leading-none">*</span>
            </div>

            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center bg-[#F4F3EF] border-4 border-[#1A1A1A] my-5 relative overflow-hidden group">
              <span className="text-[#1A1A1A]/20 font-black text-4xl uppercase text-center leading-none group-hover:scale-110 transition-transform duration-500">
                Insert <br /> Photo <br /> Here
              </span>
            </div>

            {/* Bottom Bar */}
            <div className="border-t-4 border-[#1A1A1A] pt-4 flex justify-between text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
              <span>ID: AS-2026</span>
              <span>Status: Active</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}