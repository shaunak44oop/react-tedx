import { Link } from "react-router-dom";
import { Mail, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  const eventLinks = [
    { label: "Speakers", path: "/speakers" },
    { label: "Team", path: "/team" },
    { label: "Schedule", path: "/schedule" },
    { label: "Venue & FAQ", path: "/venue" },
  ];

  return (
    <footer className="relative bg-[#050507] border-t border-[#EB0028]/30 pt-16 pb-10 text-white overflow-hidden font-['Inter',sans-serif]">
      {/* Background Ambient Overlay */}
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
                This independent TEDx event is operated under license from TED.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB0028]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                CHIREC International School • 2026
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#EB0028] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#EB0028] inline-block" /> Event
              </h4>
              <ul className="space-y-2.5 text-sm">
                {eventLinks.map((item) => (
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

            {/* Flat Solid Footer Register Button (Zero Glow / Zero Shadow) */}
            <div className="mt-6">
              <a
                href="https://forms.cloud.microsoft/e/pPZzzULCnr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 w-full max-w-[200px] border-2 border-[#EB0028] bg-[#EB0028] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white hover:border-white hover:text-black"
              >
                <span>Register</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
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
                  className="group relative p-3 border border-[#EB0028]/25 bg-black hover:border-[#EB0028] flex items-center justify-between transition-all duration-300"
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
                  className="group relative p-3 border border-[#EB0028]/25 bg-black hover:border-[#EB0028] flex items-center justify-between transition-all duration-300"
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
        </div>
      </div>
    </footer>
  );
}