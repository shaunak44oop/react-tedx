import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

const fieldClasses =
  "w-full rounded-xs border border-[#EB0028]/30 bg-black/60 px-4 py-3 font-['Inter',sans-serif] text-[15px] text-white outline-none focus:border-[#EB0028] backdrop-blur-sm transition-colors text-center";
const labelClasses =
  "mb-2 block font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.2em] text-[#EB0028] font-medium text-center";

export function Register() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Error - Form Not Connected");
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-14 text-center">
        <AnimatedHexBackground />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-mono font-semibold mb-6">
            LIMITED SEATS AVAILABLE
          </p>

          {/* UNIFIED HERO BOX */}
          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full mx-auto shadow-[0_0_60px_rgba(235,0,40,0.2)] hover:border-[#EB0028] hover:shadow-[0_0_80px_rgba(235,0,40,0.3)] transition-all duration-500 overflow-hidden">
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-['Helvetica',sans-serif] text-[clamp(32px,6vw,64px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
            >
              RESERVE SEAT
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 mx-auto z-10">
            Fill out the form below to reserve a seat. You'll get a confirmation email once your spot is locked in.
          </p>
        </Reveal>
      </section>

      {/* FORM SECTION */}
      <section className="relative z-10 px-4 sm:px-8 pb-24">
        <div className="mx-auto flex flex-col items-center max-w-xl w-full gap-12">
          <Reveal className="w-full">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col items-center w-full">
              <div className="mb-6 w-full">
                <label htmlFor="name" className={labelClasses}>Full name</label>
                <input id="name" name="name" type="text" required className={fieldClasses} />
              </div>
              <div className="mb-6 w-full">
                <label htmlFor="email" className={labelClasses}>Email address</label>
                <input id="email" name="email" type="email" required className={fieldClasses} />
              </div>
              <div className="mb-6 w-full">
                <label htmlFor="role" className={labelClasses}>I am a</label>
                <select id="role" name="role" className={fieldClasses}>
                  <option className="bg-[#0b0b0f] text-white">Student</option>
                  <option className="bg-[#0b0b0f] text-white">Teacher / Staff</option>
                  <option className="bg-[#0b0b0f] text-white">Parent / Family</option>
                  <option className="bg-[#0b0b0f] text-white">Community guest</option>
                </select>
              </div>
              <div className="mb-6 w-full">
                <label htmlFor="guests" className={labelClasses}>Number of guests (including you)</label>
                <input id="guests" name="guests" type="number" min={1} defaultValue={1} className={fieldClasses} />
              </div>
              <div className="mb-10 w-full">
                <label htmlFor="notes" className={labelClasses}>Dietary restrictions or accessibility needs</label>
                <textarea id="notes" name="notes" rows={3} className={fieldClasses} />
              </div>

              <SpotlightButton type="submit" className="group relative overflow-hidden bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-8 py-3 rounded-xs transition-all w-full">
                <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-16 h-16 text-black opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                  <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
                </svg>
                <span className="relative z-10 uppercase font-mono text-sm tracking-wider font-semibold">
                  Submit registration
                </span>
              </SpotlightButton>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-sm text-[#EB0028] font-mono font-medium text-center"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </Reveal>

          {/* INFORMATIONAL CARD WITH HEX HOVER */}
          <Reveal delay={0.1} className="w-full">
            <div className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 text-center backdrop-blur-md hover:border-[#EB0028] transition-all overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-30 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>

              <h3 className="font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.2em] text-[#EB0028] font-bold relative z-10">
                BEFORE YOU GO
              </h3>
              <ul className="mt-6 flex flex-col items-center gap-3.5 text-sm text-zinc-300 leading-relaxed relative z-10">
                <li>Doors open at 15:00 IST — please arrive 20 minutes early.</li>
                <li>Seats are unassigned — available on a first-come, first-served basis.</li>
                <li>Bring a valid school ID if your ticket is student-priced.</li>
                <li>
                  Questions? Contact{" "}
                  <a href="mailto:tedx.technology@chirec.ac.in" className="text-[#EB0028] hover:underline font-semibold">
                    tedx.technology@chirec.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}