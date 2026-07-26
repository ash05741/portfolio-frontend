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

      if (result.success) {
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
    <section id="contact" className="min-h-screen py-32 bg-[#F4F3EF] font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Block */}
        <div className="flex flex-col mb-16 border-b-4 border-[#1A1A1A] pb-6">
          <h2 className="text-6xl md:text-[5rem] font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">
              Let's Work <br /> Together
            </h3>

            <div className="p-6 border-4 border-[#1A1A1A] bg-white shadow-[4px_4px_0_0_#1A1A1A]">
              <p className="text-[#1A1A1A] font-medium leading-relaxed text-lg">
                If you have a project idea, collaboration opportunity,
                or just want to say hello, drop a message. No fluff, just straight to business.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 p-4 border-4 border-[#1A1A1A] bg-orange-700 text-white shadow-[6px_6px_0_0_#1A1A1A] w-fit">
              <Mail size={24} />
              <span className="font-bold text-lg tracking-wide">asmitshukla0505@gmail.com</span>
            </div>
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white border-4 border-[#1A1A1A] p-8 shadow-[12px_12px_0_0_#1A1A1A]"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[#1A1A1A] font-bold uppercase tracking-wide text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="JOHN DOE"
                required
                className="w-full p-4 bg-[#F4F3EF] border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-orange-700 focus:shadow-[4px_4px_0_0_#EA580C] transition-all rounded-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A1A1A] font-bold uppercase tracking-wide text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="JOHN@EXAMPLE.COM"
                required
                className="w-full p-4 bg-[#F4F3EF] border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-orange-700 focus:shadow-[4px_4px_0_0_#EA580C] transition-all rounded-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1A1A1A] font-bold uppercase tracking-wide text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                required
                className="w-full p-4 bg-[#F4F3EF] border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-orange-700 focus:shadow-[4px_4px_0_0_#EA580C] transition-all resize-none rounded-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center justify-center gap-3 w-full p-4 mt-2 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-lg shadow-[6px_6px_0_0_#EA580C] hover:bg-orange-700 hover:shadow-[8px_8px_0_0_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  TRANSMITTING...
                  <Loader2 size={24} className="animate-spin" />
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Send size={24} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 border-4 border-[#1A1A1A] bg-green-400 text-[#1A1A1A] font-bold uppercase tracking-wide text-center shadow-[4px_4px_0_0_#1A1A1A]">
                Message received. I'll be in touch.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 border-4 border-[#1A1A1A] bg-red-500 text-white font-bold uppercase tracking-wide text-center shadow-[4px_4px_0_0_#1A1A1A]">
                Transmission failed. Try again.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}