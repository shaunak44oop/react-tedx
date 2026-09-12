import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { speakers, type Speaker } from "../data/speakers";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

// One speaker card — the markup is identical for guests and students,
// so it lives here once instead of being duplicated in each section.
function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <motion.div
      key={speaker.id}
      variants={staggerItem}
      className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 flex flex-col items-center text-center w-full sm:w-[320px] backdrop-blur-md hover:border-[#EB0028] transition-all overflow-hidden"
    >
      <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-30 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
        <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex aspect-square w-[180px] sm:w-[200px] items-center justify-center overflow-hidden rounded-full border border-[#EB0028]/40 bg-[#0c0c10] shadow-[0_0_30px_rgba(235,0,40,0.15)] mb-6 group-hover:border-[#EB0028] transition-colors">
          <span className="font-['Helvetica',sans-serif] font-black text-5xl sm:text-6xl text-[#EB0028]/60 group-hover:text-[#EB0028] transition-colors">
            {speaker.initials}
          </span>
        </div>
        <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-2">
          {speaker.name}
        </h3>
        <span className="mb-4 block font-['Helvetica',sans-serif] text-xs sm:text-sm tracking-wide text-[#EB0028] font-semibold uppercase leading-snug">
          &ldquo;{speaker.talkTitle}&rdquo;
        </span>
        <p className="text-sm text-zinc-300 leading-relaxed font-light">
          {speaker.bio}
        </p>
      </div>
    </motion.div>
  );
}

export function Speakers() {
  const guests = speakers.filter((s) => s.category === "guest");
  const students = speakers.filter((s) => s.category === "student");

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-14 text-center">
        <AnimatedHexBackground />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-mono font-semibold mb-6">
            LINEUP
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
              className="font-['Helvetica',sans-serif] text-[clamp(36px,7vw,72px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
            >
              SPEAKERS
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 mx-auto z-10">
            6 speakers. 6 ideas worth spreading. Expect thought-provoking perspectives that challenge the status quo.
          </p>
        </Reveal>
      </section>

      {/* GUEST SPEAKERS */}
      <section className="relative z-10 px-4 sm:px-8 pt-6 pb-14">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="font-['Helvetica',sans-serif] text-2xl sm:text-3xl font-black uppercase tracking-tight text-white text-center mb-2">
            Guest Speakers
          </h2>
          <div className="mx-auto mb-10 h-[1px] w-16 bg-[#EB0028]" />
        </Reveal>
        <RevealGroup className="mx-auto flex flex-wrap justify-center gap-8 sm:gap-12 max-w-6xl">
          {guests.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </RevealGroup>
      </section>

      {/* STUDENT SPEAKERS */}
      <section className="relative z-10 px-4 sm:px-8 pt-6 pb-14">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="font-['Helvetica',sans-serif] text-2xl sm:text-3xl font-black uppercase tracking-tight text-white text-center mb-2">
            Student Speakers
          </h2>
          <div className="mx-auto mb-10 h-[1px] w-16 bg-[#EB0028]" />
        </Reveal>
        <RevealGroup className="mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 sm:gap-12 max-w-[720px]">
          {students.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </RevealGroup>
      </section>

      {/* CENTERED CTA */}
      <section className="relative z-10 border-t border-[#EB0028]/30 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-20 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Want to hear them live?
          </h2>
          <SpotlightButton to="/register" className="group relative overflow-hidden bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-8 py-3 rounded-xs transition-all">
            <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-16 h-16 text-black opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
              <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
            </svg>
            <span className="relative z-10 font-mono text-sm uppercase tracking-wider font-semibold">
              Register now
            </span>
          </SpotlightButton>
        </div>
      </section>
    </div>
  );
}