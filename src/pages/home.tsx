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
              className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand"
            >
              <span className="h-2 w-2 rounded-full bg-current" />
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
              initial={{ width: 0 }}
              animate={{ width: 960 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-6 h-[1px] max-w-[380px] border-none bg-brand"
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-9 flex flex-wrap gap-3.5"
            >
              <SpotlightButton to="/register">Reserve your seat</SpotlightButton>
              <SpotlightButton to="/speakers" variant="outline">Meet the speakers</SpotlightButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex aspect-[4/5] items-end overflow-hidden rounded-sm border border-brand/30 bg-ink p-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(230,43,30,0.18) 0 2px, transparent 2px 14px), linear-gradient(160deg, #1a1a1a, #000)",
            }}
          >
            <p className="font-mono text-[11.5px] text-white/55">
              TedX@CHIREC 2026
            </p>
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
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              <span className="h-2 w-2 rounded-full bg-current" /> About the event
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

      {/* SPEAKER TEASER */}
      <section className="bg-brand px-[clamp(20px,4vw,56px)] py-[88px] text-ink">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-ink">
              <span className="h-2 w-2 rounded-full bg-current" /> On the stage
            </p>
            <h2 className="mt-3.5 font-display text-[clamp(28px,4vw,44px)] text-ink">This year's speakers</h2>
          </Reveal>

          <RevealGroup className="mt-11 flex gap-7 overflow-x-auto pb-3" stagger={0.06}>
            {speakers.slice(0, 4).map((speaker) => (
              <motion.div key={speaker.id} variants={staggerItem} className="w-[150px] shrink-0">
                <div className="flex aspect-square w-[150px] items-center justify-center rounded-full border-4 border-ink bg-brand">
                  <span className="font-display text-4xl text-ink">{speaker.initials}</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{speaker.name}</h3>
                <span className="mt-1 block font-mono text-[12.5px] text-ink/80">{speaker.talkTitle}</span>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="mt-11">
            <SpotlightButton to="/speakers" variant="outline" className="!border-ink !text-ink hover:!bg-ink hover:!text-brand">
              View all speakers
            </SpotlightButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[clamp(20px,4vw,56px)] py-16">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[16ch] font-display text-[clamp(28px,4vw,44px)] text-brand">
            Seats are limited. Reserve yours.
          </h2>
          <SpotlightButton to="/register" variant="outline">Register now</SpotlightButton>
        </div>
      </section>
    </>
  );
}
