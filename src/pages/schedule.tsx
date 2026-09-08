import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { schedule } from "../data/schedule";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

export function Schedule() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-14 text-center">
        <AnimatedHexBackground />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-mono font-semibold mb-6">
            OCTOBER 3, 2026
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
              SCHEDULE
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 mx-auto z-10">
            Doors open at 15:00 IST. Talks are capped at 12 minutes each, with breaks built in.
          </p>
        </Reveal>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative z-10 px-4 sm:px-8 py-14">
        <RevealGroup className="relative mx-auto max-w-[760px] flex flex-col items-center w-full" stagger={0.05}>
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-2 bottom-2 left-1/2 w-[1px] bg-[#EB0028]/30 -translate-x-1/2 z-0" aria-hidden />

          {schedule.map((item) => (
            <motion.div 
              key={item.id} 
              variants={staggerItem} 
              className="relative pb-14 w-full flex flex-col items-center text-center last:pb-0 z-10 group"
            >
              {/* Hexagonal Center Node */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-[#050507] p-1 z-20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#EB0028] fill-black group-hover:scale-125 transition-transform duration-300">
                  <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Timeline Card */}
              <div className="pt-8 flex flex-col items-center max-w-lg w-full bg-black/40 border border-[#EB0028]/20 group-hover:border-[#EB0028]/60 p-6 rounded-xs transition-all duration-300 backdrop-blur-xs relative overflow-hidden">
                <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-20 h-20 text-[#EB0028] opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                  <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
                </svg>

                <span className="mb-2 block font-['Helvetica',sans-serif] text-xs font-mono tracking-[0.15em] text-[#EB0028] font-bold z-10">
                  {item.time}
                </span>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5 z-10">
                  {item.title}
                </h3>
                <span className="text-sm sm:text-base text-zinc-300 mb-4 font-normal z-10">
                  {item.subtitle}
                </span>
                {item.tag && (
                  <span className="inline-block rounded-xs border border-[#EB0028]/40 px-3 py-1 font-['Helvetica',sans-serif] text-[10px] uppercase tracking-[0.2em] text-[#EB0028] bg-black/60 font-semibold z-10">
                    {item.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 border-t border-[#EB0028]/30 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-20 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Save your spot for the day.
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