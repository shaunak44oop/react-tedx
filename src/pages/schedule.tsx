import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { schedule } from "../data/schedule";

export function Schedule() {
  return (
    <>
      <section className="px-[clamp(20px,4vw,56px)] pb-14 pt-[120px]">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              <span className="h-2 w-2 rounded-full bg-current" /> October 3, 2026
            </p>
            <h1 className="mt-3.5 font-display text-[clamp(36px,6vw,64px)] text-brand">Schedule</h1>
            <hr className="rule mt-[18px]" />
            <p className="mt-6 max-w-[56ch] text-[16.5px] text-muted">
              Doors open at 15:00 IST. Talks are capped at 12 minutes each, with breaks
              built in — edit <code className="text-brand">src/data/schedule.ts</code> to
              match your final program.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <RevealGroup className="relative mx-auto max-w-[760px]" stagger={0.05}>
          <div className="absolute bottom-2.5 left-[7px] top-2.5 w-px bg-brand/30" aria-hidden />
          {schedule.map((item) => (
            <motion.div key={item.id} variants={staggerItem} className="relative pb-11 pl-11 last:pb-0">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] border-brand bg-ink" aria-hidden />
              <span className="mb-1.5 block font-mono text-[12.5px] tracking-[0.04em] text-brand">
                {item.time}
              </span>
              <h3 className="font-display text-xl text-brand">{item.title}</h3>
              <span className="text-[14.5px] text-muted">{item.subtitle}</span>
              {item.tag && (
                <span className="ml-2.5 inline-block rounded-full border border-brand/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {item.tag}
                </span>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-brand px-[clamp(20px,4vw,56px)] py-16 text-ink">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[18ch] font-display text-[clamp(28px,4vw,44px)]">
            Save your spot for the day.
          </h2>
          <SpotlightButton to="/register" variant="outline" className="!border-ink !text-ink hover:!bg-ink hover:!text-brand">
            Register now
          </SpotlightButton>
        </div>
      </section>
    </>
  );
}