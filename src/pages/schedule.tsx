import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { schedule } from "../data/schedule";

export function Schedule() {
  return (
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light">
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-14 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand/20 blur-[150px] rounded-full pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            October 3, 2026
          </p>

          <div className="relative border border-brand/30 bg-ink/80 p-8 sm:p-12 backdrop-blur-md rounded-sm my-2 max-w-2xl w-full mx-auto shadow-[0_0_50px_rgba(255,0,0,0.2)]">
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
              Schedule
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8 mx-auto">
            Doors open at 15:00 IST. Talks are capped at 12 minutes each, with breaks built in.
          </p>
        </Reveal>
      </section>

      {/* Centered Timeline */}
      <section className="relative z-10 px-[clamp(20px,4vw,56px)] py-14">
        <RevealGroup className="relative mx-auto max-w-[760px] flex flex-col items-center w-full" stagger={0.05}>
          <div className="absolute top-2 bottom-2 left-1/2 w-px bg-brand/30 -translate-x-1/2" aria-hidden />
          {schedule.map((item) => (
            <motion.div key={item.id} variants={staggerItem} className="relative pb-16 w-full flex flex-col items-center text-center last:pb-0">
              <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border-[4px] border-brand bg-ink z-10 shadow-[0_0_15px_rgba(255,0,0,0.5)]" aria-hidden />
              <div className="pt-8 flex flex-col items-center">
                <span className="mb-2 block font-['Helvetica',sans-serif] text-sm tracking-[0.1em] text-brand font-medium">
                  {item.time}
                </span>
                <h3 className="font-['Helvetica',sans-serif] text-2xl font-bold text-white mb-1">{item.title}</h3>
                <span className="text-[15px] text-muted mb-3">{item.subtitle}</span>
                {item.tag && (
                  <span className="inline-block rounded-sm border border-brand/30 px-3 py-1 font-['Helvetica',sans-serif] text-[11px] uppercase tracking-[0.15em] text-brand/80 backdrop-blur-sm bg-ink/40">
                    {item.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* Centered CTA */}
      <section className="relative z-10 border-t border-brand/20 bg-ink/40 px-[clamp(20px,4vw,56px)] py-20 text-center">
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-[clamp(28px,4vw,44px)] text-white">
            Save your spot for the day.
          </h2>
          <SpotlightButton to="/register">
            Register now
          </SpotlightButton>
        </div>
      </section>
    </div>
  );
}