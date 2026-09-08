import { Link } from "react-router-dom";
import { Mail, Instagram, ArrowUpRight, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050507] border-t border-[#EB0028]/30 pt-16 pb-10 text-white overflow-hidden font-['Inter',sans-serif]">
      {/* Background Red Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#EB0028]/10 blur-[100px] pointer-events-none" />

      {/* Hex Node Accent Overlay */}
      <svg viewBox="0 0 50 50" className="absolute top-0 right-0 w-32 h-32 text-[#EB0028] opacity-10 pointer-events-none z-0">
        <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EB0028]/20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-1 font-['Helvetica',sans-serif] font-black text-2xl tracking-tight">
                <span className="text-[#EB0028]">TEDx</span>
                <span className="text-white font-light">Youth@CHIREC</span>
              </Link>
              <p className="mt-4 max-w-[36ch] text-sm text-zinc-400 font-light leading-relaxed">
                This independent TEDx event is operated under license from TED. Bringing thought-provoking ideas and inspiring youth voices to the stage.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB0028] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB0028]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                CHIREC Kondapur Campus • 2026
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#EB0028] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#EB0028] inline-block" /> Event
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Speakers", path: "/speakers" },
                { label: "Team", path: "/team" },
                { label: "Schedule", path: "/schedule" },
                { label: "Venue & FAQ", path: "/venue" },
                { label: "Register", path: "/register" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-[#EB0028] opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1.5 font-mono text-xs">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#EB0028] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#EB0028] inline-block" /> Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:tedx.technology@chirec.ac.in"
                  className="group relative p-3 rounded-xs border border-[#EB0028]/25 bg-black/60 hover:border-[#EB0028] flex items-center justify-between transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                    <Mail className="w-4 h-4 text-[#EB0028]" />
                    <span className="font-mono text-xs">tedx.technology@chirec.ac.in</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#EB0028] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tedxchirec?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xs border border-[#EB0028]/25 bg-black/60 hover:border-[#EB0028] flex items-center justify-between transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                    <Instagram className="w-4 h-4 text-[#EB0028]" />
                    <span className="font-mono text-xs">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#EB0028] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p className="text-center sm:text-left">
            © 2026 TEDxYouth@CHIREC. This is an independently organized TED event.
          </p>

          <div className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border border-[#EB0028]/40 bg-black/80 text-zinc-300 font-mono text-[11px] shadow-[0_0_20px_rgba(235,0,40,0.15)] hover:border-[#EB0028] transition-colors">
            <span className="absolute -top-1 -left-1 text-[#EB0028] text-[9px] font-mono">+</span>
            <span className="absolute -top-1 -right-1 text-[#EB0028] text-[9px] font-mono">+</span>
            <span className="absolute -bottom-1 -left-1 text-[#EB0028] text-[9px] font-mono">+</span>
            <span className="absolute -bottom-1 -right-1 text-[#EB0028] text-[9px] font-mono">+</span>

            <Code className="w-3.5 h-3.5 text-[#EB0028]" />
            <span>Engineered by <span className="text-white font-semibold">Technology Department</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}