import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Globe } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://x.com/asmitshukla05",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/asmit-shukla-2a8591258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTz4K714MQ1SszzVa6SATiA%3D%3D",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/ash05741",
    },
    {
      name: "Web",
      icon: Globe,
      href: "#",
    }
  ];

  return (
    <footer className="bg-[#F4F3EF] py-12 border-t-4 border-[#1A1A1A] font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

          {/* Brutalist Logo Block */}
          <div className="flex items-center justify-center w-14 h-14 bg-[#1A1A1A] text-white font-black text-2xl tracking-tighter border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#EA580C]">
            <span>∆</span>
            <span className="text-orange-500">S</span>
          </div>

          {/* Technical Copyright */}
          <div className="flex flex-col">
            <p className="text-[#1A1A1A] text-xl font-black uppercase tracking-widest leading-tight">
              &copy; {new Date().getFullYear()} Asmit Shukla
            </p>
            <p className="text-[#1A1A1A] text-sm font-bold uppercase tracking-wider mt-1">

            </p>
          </div>
        </div>

        {/* Right Side: Brutalist Social Icons */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center w-14 h-14 bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] hover:bg-orange-700 hover:text-white hover:shadow-[6px_6px_0_0_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#1A1A1A] transition-all duration-200"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}