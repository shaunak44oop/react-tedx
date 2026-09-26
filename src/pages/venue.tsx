import { motion } from "motion/react";
import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Accordion } from "../components/kokonutui/accordion";
import { faq } from "../data/faq";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";
import { NeonNavigator } from "../components/navigation/neon-navigator";

export function Venue() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-14 text-center">
        <AnimatedHexBackground />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-mono font-semibold mb-6">
            GETTING THERE
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
              VENUE &amp; FAQ
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 mx-auto z-10">
            CHIREC Kondapur Campus. Entrance through Gate 1. <br />Parking is available next to the school.
          </p>

          <SpotlightButton href="https://maps.app.goo.gl/JPhHnKjHJxeRBVzg7" className="group relative overflow-hidden bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-8 py-3 rounded-xs transition-all z-10">
            <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-16 h-16 text-black opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
              <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
            </svg>
            <span className="relative z-10 font-mono text-sm uppercase tracking-wider font-semibold">
              Get directions
            </span>
          </SpotlightButton>
        </Reveal>
      </section>

      {/* MAP & FAQ SECTION */}
      <section className="relative z-10 px-4 sm:px-8 pb-24 flex flex-col items-center">
        <Reveal className="mx-auto w-full max-w-6xl flex flex-col items-center gap-16">
          {/* LIVE NEON NAVIGATION MAP */}
          <div className="w-full">
            <NeonNavigator />
            <p className="mt-3 text-center font-mono text-[11px] text-zinc-500">
              Uses your device's live location to draw the route — nothing is sent to Google
              unless you tap "Google Maps".
            </p>
          </div>

          {/* ACCORDION FAQ CONTAINER */}
          <div className="w-full max-w-3xl text-center">
            <h2 className="font-['Helvetica',sans-serif] text-2xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
              Frequently asked questions
            </h2>
            <div className="text-left">
              <Accordion items={faq} />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
