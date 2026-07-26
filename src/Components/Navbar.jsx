import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  // Helper array to keep the links DRY (Don't Repeat Yourself)
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F4F3EF] border-b-4 border-[#1A1A1A] font-sans transition-all">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">

          {/* 1. LEFT SIDE: Brutalist Logo Block */}
          <Link
            to="/"
            className="group flex items-center justify-center bg-[#1A1A1A] text-[#F4F3EF] px-3 py-2 border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#EA580C] hover:shadow-[6px_6px_0_0_#EA580C] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-[2px_2px_0_0_#EA580C]"
          >
            <span className="text-3xl font-black tracking-tighter uppercase">
              ∆<span className="text-orange-500">S</span>
            </span>
          </Link>

          {/* 2. RIGHT SIDE: Navigation */}
          <div className="flex items-center space-x-4">

            {/* Desktop Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 font-bold uppercase tracking-widest text-sm text-[#1A1A1A] border-2 border-transparent hover:border-[#1A1A1A] hover:bg-white hover:shadow-[4px_4px_0_0_#1A1A1A] active:translate-y-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Button (Hidden on desktop) */}
            <button
              className="md:hidden flex items-center justify-center p-2 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] hover:bg-orange-700 hover:text-white active:translate-y-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all"
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              {mobileMenuIsOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Rigid and Blocky) */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-[#F4F3EF] border-t-4 border-[#1A1A1A] absolute w-full shadow-[0_12px_0_0_#1A1A1A]">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuIsOpen(false)}
                className={`px-6 py-5 font-black text-xl uppercase tracking-widest text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors flex justify-between items-center ${index !== navLinks.length - 1 ? "border-b-2 border-[#1A1A1A]" : "border-b-4 border-[#1A1A1A]"
                  }`}
              >
                {link.name}
                <span className="text-orange-700 text-2xl leading-none">*</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}