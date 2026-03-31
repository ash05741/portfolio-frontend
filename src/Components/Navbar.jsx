import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../Theme-Toggle/Toggle";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-none bg-white/80 dark:bg-slate-950/80 backdrop-blur-md ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="sm:text-4xl flex gap-1 tracking-tight
          text-3xl font-bold 
          transition-all duration-300 ease-out
          transform
          hover:scale-110
          hover:-rotate-2
        ">
            <span className="text-slate-950/60 dark:text-slate-300 font-bold">∆</span>
            <span className="text-blue-400 font-bold">S</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center text-slate-600  dark:text-slate-300 space-x-13 text-lg">

            <Link
              to="/about"
              className="group relative font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-[4px]"
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>

            <Link
              to="/projects"
              className="group relative font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-[4px]"
            >
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>

            <Link
              to="/skills"
              className="group relative font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-[4px]"
            >
              Skills
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="group relative font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-[4px]"
            >
              Contact Me
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>

            <ThemeToggle />
            

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-slate-600 hover:text-black"
            onClick={() => setMobileMenuIsOpen(prev => !prev)}
          >
            {mobileMenuIsOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-white/5">
          <div className="px-4 py-6 space-y-4 font-bold text-sm">
            <Link to="/about" onClick={() => setMobileMenuIsOpen(false)} className="block text-slate-600 dark:text-white hover:text-black">
              About
            </Link>
            <Link to="/projects" onClick={() => setMobileMenuIsOpen(false)} className="block text-slate-600 dark:text-white hover:text-black">
              Projects
            </Link>
            <Link to="/skills" onClick={() => setMobileMenuIsOpen(false)} className="block text-slate-600 dark:text-white hover:text-black">
              Skills
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuIsOpen(false)} className="block text-slate-600 dark:text-white hover:text-black">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}