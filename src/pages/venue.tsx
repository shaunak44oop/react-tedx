import { motion } from "motion/react";
import { Reveal } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Accordion } from "../components/kokonutui/accordion";
import { faq } from "../data/faq";

export function Venue() {
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
            Getting There
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
              Venue & FAQ
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8 mx-auto">
            CHIREC Kondapur Campus. Entrance through Gate 1 — signs will point you to check-in. Parking is available next to the school.
          </p>
          <SpotlightButton href="https://share.google/9lqyTxAmB7yLQNhXW">
            Get directions
          </SpotlightButton>
        </Reveal>
      </section>

      {/* Centered Map & FAQ */}
      <section className="relative z-10 px-[clamp(20px,4vw,56px)] pb-24 flex flex-col items-center">
        <Reveal className="mx-auto w-full max-w-4xl flex flex-col items-center gap-16">
          {/* Centered Map */}
          <div className="w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden border border-brand/30 shadow-[0_0_40px_rgba(255,0,0,0.08)] bg-ink/60 backdrop-blur-sm">
            <iframe
              className="h-full w-full grayscale contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273618197171!2d78.3615364!3d17.470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cc13e59543%3A0xb3bd0f1e84a22b78!2sCHIREC%20International%20School%2C%20Kondapur%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Map to venue"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          {/* Centered FAQ container */}
          <div className="w-full max-w-3xl text-center">
            <h2 className="font-['Helvetica',sans-serif] text-[clamp(28px,4vw,44px)] font-bold text-white mb-10">
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