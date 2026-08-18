import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { speakers } from "../data/speakers";

export function Speakers() {
  return (
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light">
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-14 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand/12 blur-[140px] rounded-full pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            Lineup
          </p>

          <div className="relative border border-brand/30 bg-ink/80 p-8 sm:p-12 backdrop-blur-md rounded-sm my-2 max-w-2xl w-full mx-auto">
            <span className="absolute -top-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-brand text-xs font-mono">+</span>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Helvetica',sans-serif] text-[clamp(36px,7vw,72px)] font-black uppercase text-brand tracking-tight py-1"
            >
              Speakers
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8 mx-auto">
            4 speakers. 4 ideas worth spreading. Expect thought-provoking perspectives that challenge the status quo.
          </p>
        </Reveal>
      </section>

      {/* Centered Speakers Grid */}
      <section className="relative z-10 px-[clamp(20px,4vw,56px)] py-14">
        <RevealGroup className="mx-auto flex flex-wrap justify-center gap-14 max-w-6xl">
          {speakers.map((speaker) => (
            <motion.div key={speaker.id} variants={staggerItem} className="flex flex-col items-center text-center w-full sm:w-[300px]">
              <div className="flex aspect-square w-[220px] items-center justify-center overflow-hidden rounded-full border border-brand/40 bg-ink/80 shadow-[0_0_30px_rgba(255,0,0,0.1)] mb-6 backdrop-blur-sm">
                <span className="font-['Helvetica',sans-serif] font-black text-[52px] text-brand/40">{speaker.initials}</span>
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-2xl font-bold text-white">{speaker.name}</h3>
              <span className="mb-4 mt-2 block font-['Helvetica',sans-serif] text-[13px] tracking-wide text-brand font-medium uppercase">
                &ldquo;{speaker.talkTitle}&rdquo;
              </span>
              <p className="text-[14.5px] text-muted leading-relaxed">{speaker.bio}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* Centered CTA */}
      <section className="relative z-10 border-t border-brand/20 bg-ink/40 px-[clamp(20px,4vw,56px)] py-20 text-center">
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-[clamp(28px,4vw,44px)] text-white">
            Want to hear them live?
          </h2>
          <SpotlightButton to="/register">
            Register now
          </SpotlightButton>
        </div>
      </section>
    </div>
  );
}