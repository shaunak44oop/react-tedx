import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-[#EB0028]/20 py-14 text-white relative font-['Inter',sans-serif]">
      <div className="mx-auto max-w-container px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap justify-between gap-10 border-b border-[#EB0028]/20 pb-9">
          <div>
            <Link to="/" className="flex items-baseline gap-0.5 font-['Helvetica',sans-serif] font-black text-xl text-[#EB0028]">
              TEDx<span className="text-white font-light">Youth</span>
            </Link>
            <p className="mt-3.5 max-w-[32ch] text-[13.5px] text-zinc-400">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#EB0028]">
                Event
              </h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><Link to="/speakers" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">Speakers</Link></li>
                <li><Link to="/team" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">Team</Link></li>
                <li><Link to="/schedule" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">Schedule</Link></li>
                <li><Link to="/venue" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">Venue &amp; FAQ</Link></li>
                <li><Link to="/register" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#EB0028]">
                Contact
              </h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li>
                  <a href="mailto:tedx.technology@chirec.ac.in" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">
                    tedx.technology@chirec.ac.in
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-300 hover:text-[#EB0028] hover:underline transition-colors">@tedxyouth_chirec</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-5 text-[12.5px] text-zinc-500">
          <span>© 2026 TEDxYouth@CHIREC. This is an independently organized TED event.</span>
          <span className="text-[#EB0028]/80">This website is brought to you by the Technology Department!</span>
        </div>
      </div>
    </footer>
  );
}