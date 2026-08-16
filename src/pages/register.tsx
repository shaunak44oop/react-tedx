import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";

const fieldClasses =
  "w-full rounded-sm border-2 border-brand/30 bg-ink px-3.5 py-3 font-sans text-[15px] text-brand outline-none focus:border-brand";
const labelClasses =
  "mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-muted";

export function Register() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // This form doesn't send anywhere yet — GitHub Pages can't run
    // backend code. See the README for how to wire it up to
    // Formspree or Google Forms in a few minutes.
    e.preventDefault();
    setStatus("Error - Form Not Connected");
  }

  return (
    <>
      <section className="px-[clamp(20px,4vw,56px)] pb-14 pt-[120px]">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              <span className="h-2 w-2 rounded-full bg-current" /> Limited seats
            </p>
            <h1 className="mt-3.5 font-display text-[clamp(36px,6vw,64px)] text-brand">
              Reserve your seat
            </h1>
            <hr className="rule mt-[18px]" />
            <p className="mt-6 max-w-[56ch] text-[16.5px] text-muted">
              Fill out the form below to reserve a seat. You'll get
              a confirmation email once your spot is locked in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] pb-24">
        <div className="mx-auto grid max-w-container items-start gap-14 md:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label htmlFor="name" className={labelClasses}>Full name</label>
                <input id="name" name="name" type="text" required className={fieldClasses} />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className={labelClasses}>Email address</label>
                <input id="email" name="email" type="email" required className={fieldClasses} />
              </div>
              <div className="mb-5">
                <label htmlFor="role" className={labelClasses}>I am a</label>
                <select id="role" name="role" className={fieldClasses}>
                  <option>Student</option>
                  <option>Teacher / Staff</option>
                  <option>Parent / Family</option>
                  <option>Community guest</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="guests" className={labelClasses}>
                  Number of guests (including you)
                </label>
                <input id="guests" name="guests" type="number" min={1} defaultValue={1} className={fieldClasses} />
              </div>
              <div className="mb-5">
                <label htmlFor="notes" className={labelClasses}>
                  Dietary restrictions or accessibility needs
                </label>
                <textarea id="notes" name="notes" rows={3} className={fieldClasses} />
              </div>

              <SpotlightButton type="submit">Submit registration</SpotlightButton>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-muted"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm bg-brand p-8 text-ink">
              <h3 className="font-mono text-xs uppercase tracking-[0.1em]">Before you go</h3>
              <ul className="mt-4.5 flex flex-col gap-3 text-[14.5px]">
                <li>Doors open at 15:00 IST — arrive 20 minutes early for check-in.</li>
                <li>Seats aren't assigned — first come, first seated.</li>
                <li>Bring a valid school ID if your ticket is student-priced.</li>
                <li>
                  Questions? Email{" "}
                  <a href="mailto:tedx.technology@chirec.ac.in" className="font-bold underline">
                    tedx.technology@chirec.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}