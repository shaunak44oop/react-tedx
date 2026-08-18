import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";

const fieldClasses =
  "w-full rounded-sm border border-brand/30 bg-ink/60 px-4 py-3 font-['Inter',sans-serif] text-[15px] text-white outline-none focus:border-brand backdrop-blur-sm transition-colors text-center";
const labelClasses =
  "mb-2 block font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.2em] text-brand font-medium text-center";

export function Register() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Error - Form Not Connected");
  }

  return (
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light">
      {/* Centered Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-14 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand/20 blur-[150px] rounded-full pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            Limited Seats
          </p>

          <div className="relative border border-brand/30 bg-ink/80 p-8 sm:p-12 backdrop-blur-md rounded-sm my-2 max-w-2xl w-full mx-auto shadow-[0_0_50px_rgba(255,0,0,0.2)]">
            <span className="absolute -top-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-brand text-xs font-mono">+</span>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Helvetica',sans-serif] text-[clamp(32px,6vw,64px)] font-black uppercase text-brand tracking-tight py-1"
            >
              Reserve Seat
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8 mx-auto">
            Fill out the form below to reserve a seat. You'll get a confirmation email once your spot is locked in.
          </p>
        </Reveal>
      </section>

      {/* Centered Form Section */}
      <section className="relative z-10 px-[clamp(20px,4vw,56px)] pb-24">
        <div className="mx-auto flex flex-col items-center max-w-xl w-full gap-14">
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
                  <option>Student</option>
                  <option>Teacher / Staff</option>
                  <option>Parent / Family</option>
                  <option>Community guest</option>
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

              <SpotlightButton type="submit">Submit registration</SpotlightButton>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-sm text-brand font-medium text-center"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="w-full">
            <div className="rounded-xl border border-brand/30 bg-ink/80 p-8 text-center backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.1)]">
              <h3 className="font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.2em] text-brand font-medium">Before you go</h3>
              <ul className="mt-6 flex flex-col items-center gap-4 text-sm text-muted">
                <li>Doors open at 15:00 IST — arrive 20 minutes early.</li>
                <li>Seats aren't assigned — first come, first seated.</li>
                <li>Bring a valid school ID if your ticket is student-priced.</li>
                <li>
                  Questions? Email{" "}
                  <a href="mailto:tedx.technology@chirec.ac.in" className="text-brand hover:underline font-medium">
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