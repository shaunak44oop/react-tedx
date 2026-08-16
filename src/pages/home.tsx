import { motion } from "motion/react";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { SpotlightGlow } from "../components/kokonutui/spotlight-glow";
import { Countdown } from "../components/kokonutui/countdown";
import { Marquee } from "../components/kokonutui/marquee";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { speakers } from "../data/speakers";

const aboutCards = [
  {
    num: "01",
    title: "Student-organized",
    body: "Planned, designed, and run start to finish by a student team — this site included.",
  },
  {
    num: "02",
    title: "4 speakers, one day",
    body: "Short talks from students, faculty, alumni, and guests from the community.",
  },
  {
    num: "03",
    title: "Open to everyone",
    body: "Free / low-cost tickets for students, families, and anyone curious. Details on the Register page.",
  },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-[clamp(20px,4vw,56px)] pb-24 pt-[72px]">
        <SpotlightGlow />
        <div className="mx-auto grid max-w-container items-end gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand"
            >
              TEDxYouth@CHIREC · 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-display text-[clamp(40px,7vw,92px)] leading-[0.98] tracking-tight text-brand"
            >
              The In-Between
              <br />
              Space.
            </motion.h1>

            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-6 h-[1px] w-full max-w-[380px] border-none bg-brand mx-auto md:mx-0"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-7 font-mono text-[13.5px] text-muted"
            >
              <div>
                <strong className="mb-1 block text-[12px] uppercase tracking-[0.08em] text-brand">Date</strong>
                October 3, 2026
              </div>
              <div>
                <strong className="mb-1 block text-[12px] uppercase tracking-[0.08em] text-brand">Location</strong>
                CHIREC Kondapur, Hyderabad
              </div>
              <div>
                <strong className="mb-1 block text-[12px] uppercase tracking-[0.08em] text-brand">Format</strong>
                In-person
              </div>
            </motion.div>

            <div className="mt-7">
              <Countdown target="2026-10-03T09:00:00" />
            </div>

            {/* BULLETPROOF BUTTON WRAPPERS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-9 flex w-full max-w-[380px] items-stretch gap-2 sm:gap-3"
            >
              <div className="flex-1">
                <SpotlightButton
                  to="/register"
                  className="flex h-full w-full items-center justify-center whitespace-nowrap !px-1 sm:!px-4 !py-3 text-[11.5px] tracking-tight sm:text-[13px]"
                >
                  Reserve your seat
                </SpotlightButton>
              </div>
              <div className="flex-1">
                <SpotlightButton
                  to="/speakers"
                  variant="outline"
                  className="flex h-full w-full items-center justify-center whitespace-nowrap !px-1 sm:!px-4 !py-3 text-[11.5px] tracking-tight sm:text-[13px]"
                >
                  Meet the speakers
                </SpotlightButton>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border border-brand/30 bg-ink shadow-2xl"
          >
            <img
              src="./tedx-home.png"
              alt="TEDxYouth@CHIREC"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-brand py-3.5 text-ink">
        <Marquee duration={22}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-sm tracking-wide">
              TEDxYOUTH@CHIREC &nbsp;•&nbsp; The In-Between Space &nbsp;•&nbsp; October 3rd, 2026 &nbsp;•&nbsp;
            </span>
          ))}
        </Marquee>
      </div>

      {/* ABOUT */}
      <section className="px-[clamp(20px,4vw,56px)] py-[88px]">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              About the event
            </p>
            <h2 className="mt-3.5 max-w-[20ch] font-display text-[clamp(28px,4vw,44px)] leading-[1.05] text-brand">
              A student-run stage for the ideas our school isn't done thinking about.
            </h2>
            <p className="mt-5 max-w-[60ch] text-[16.5px] text-muted">
              TEDxYouth@CHIREC is an independently organized TED event, produced
              entirely by students. For one afternoon, our auditorium becomes a stage
              for classmates, teachers, and local voices to share the idea they can't
              stop thinking about — in talks capped at 12 minutes, no slideshows
              required.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3">
            {aboutCards.map((card) => (
              <motion.div key={card.num} variants={staggerItem} className="border-t-[3px] border-brand pt-6">
                <span className="font-mono text-[13px] text-brand">{card.num}</span>
                <h3 className="mt-3.5 font-display text-xl text-brand">{card.title}</h3>
                <p className="mt-2.5 text-[14.5px] text-muted">{card.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
