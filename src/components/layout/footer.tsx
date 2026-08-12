import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand py-14 text-ink">
      <div className="mx-auto max-w-container px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap justify-between gap-10 border-b border-ink/25 pb-9">
          <div>
            <Link to="/" className="flex items-baseline gap-0.5 font-display text-xl text-ink">
              TEDx<span className="text-ink">Youth</span>
            </Link>
            <p className="mt-3.5 max-w-[32ch] text-[13.5px] text-ink/75">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/70">
                Event
              </h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><Link to="/speakers" className="hover:underline">Speakers</Link></li>
                <li><Link to="/team" className="hover:underline">Team</Link></li>
                <li><Link to="/schedule" className="hover:underline">Schedule</Link></li>
                <li><Link to="/venue" className="hover:underline">Venue &amp; FAQ</Link></li>
                <li><Link to="/register" className="hover:underline">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/70">
                Contact
              </h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li>
                  <a href="mailto:tedx.technology@chirec.ac.in" className="hover:underline">
                    tedx.technology@chirec.ac.in
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">@tedxyouth_chirec</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-5 text-[12.5px] text-ink/70">
          <span>© 2026 TEDxYouth@CHIREC. This is an independently organized TED event.</span>
          <span>Built by students, for students.</span>
        </div>
      </div>
    </footer>
  );
}
