import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";

export default function Contact() {
  // 1. Setup state for the form inputs and submission status
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Grab the URL from your environment variables
    const apiUrl = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if(result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
        
        // Reset the success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      className="
      min-h-screen py-28
      bg-[#f5f5f7]
      dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900
    "
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-slate-700 dark:text-white mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-700 dark:text-white ">
              Let's work together
            </h3>
            <p className="text-slate-500 dark:text-slate-300 mt-4 leading-relaxed">
              If you have a project idea, collaboration opportunity,
              or just want to say hello, feel free to send a message.
            </p>
            <div className="flex items-center gap-3 mt-6 text-slate-600 dark:text-slate-300">
              <Mail size={20} />
              <span>asmitshukla0505@gmail.com</span>
            </div>
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="
            flex flex-col gap-6
            bg-white
            dark:bg-slate-900/60
            backdrop-blur-lg
            border border-slate-200
            dark:border-slate-700
            rounded-2xl
            p-8
            shadow-lg
          "
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="
              p-4 rounded-lg
              bg-white dark:bg-slate-950
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-white
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition
            "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="
              p-4 rounded-lg
              bg-white dark:bg-slate-950
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-white
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition
            "
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="
              p-4 rounded-lg resize-none
              bg-white dark:bg-slate-950
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-white
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition
            "
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="
              group inline-flex items-center justify-center gap-3
              bg-red-500 text-white px-6 py-3
              rounded-lg font-semibold
              hover:bg-red-600 dark:hover:bg-red-500/90
              transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed
            "
            >
              {status === "loading" ? (
                <>
                  Sending...
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-500 text-center font-medium mt-2">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}