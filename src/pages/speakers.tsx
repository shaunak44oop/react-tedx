import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { speakers } from "../data/speakers";

export function Speakers() {
  return (
    <>
      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              <span className="h-2 w-2 rounded-full bg-current" /> Lineup
            </p>
            <h1 className="mt-3.5 font-display text-[clamp(36px,6vw,64px)] text-brand">Speakers</h1>
            <hr className="rule mt-[18px]" />
            <p className="mt-6 max-w-[56ch] text-[16.5px] text-muted">
              [X] speakers. [X] ideas worth spreading. Replace each card below with
              your real lineup — swap the initials for a photo, and use the talk
              title as the headline the moment they walk on stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,56px)] py-14">
        <RevealGroup className="mx-auto grid max-w-container gap-x-8 gap-y-14 md:grid-cols-3">
          {speakers.map((speaker) => (
            <motion.div key={speaker.id} variants={staggerItem}>
              <div className="flex aspect-square max-w-[220px] items-center justify-center overflow-hidden rounded-full border-4 border-ink bg-brand">
                <span className="font-display text-[42px] text-ink">{speaker.initials}</span>
              </div>
              <h3 className="mt-5 font-display text-xl text-brand">{speaker.name}</h3>
              <span className="mb-3 mt-1 block font-mono text-[12.5px] text-brand">
                &ldquo;{speaker.talkTitle}&rdquo;
              </span>
              <p className="text-[14.5px] text-muted">{speaker.bio}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-brand px-[clamp(20px,4vw,56px)] py-16 text-ink">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[18ch] font-display text-[clamp(28px,4vw,44px)]">
            Want to hear them live?
          </h2>
          <SpotlightButton to="/register" variant="outline" className="!border-ink !text-ink hover:!bg-ink hover:!text-brand">
            Register now
          </SpotlightButton>
        </div>
      </section>
    </>
  );
}
