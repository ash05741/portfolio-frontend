import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Globe } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      icon: FaTwitter, 
      href: "https://x.com/asmitshukla05", 
      hoverColor: "hover:text-blue-500" 
    },
    { 
      icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/asmit-shukla-2a8591258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTz4K714MQ1SszzVa6SATiA%3D%3D", 
      hoverColor: "hover:text-blue-600" 
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/ash05741", 
      hoverColor: "hover:text-black dark:hover:text-white" 
    },
    { 
      icon: Globe, 
      href: "#", 
      hoverColor: "hover:text-green-500" 
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          {/* Subtle Logo */}
          <span className="text-2xl font-bold tracking-tight select-none">
            <span className="text-slate-800 dark:text-slate-200">∆</span>
            <span className="text-blue-500">S</span>
          </span>
          
          {/* Divider line (hidden on mobile) */}
          <div className="hidden md:block h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
          
          {/* Technical Copyright */}
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Asmit Shukla. Engineered with React & Node.
          </p>
        </div>

        {/* Right Side: Refined Social Icons */}
        <div className="flex items-center gap-6 text-slate-400 dark:text-slate-500 text-xl">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`transition-all duration-300 ease-out hover:-translate-y-1 ${social.hoverColor}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}