import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Timer, Hexagon, ExternalLink } from "lucide-react";

// Re-exported SVG Defs used across pages for hexagonal grid filters
export const SharedSVGDefs = memo(function SharedSVGDefs() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="hex-grid" width="56" height="97" patternUnits="userSpaceOnUse">
          <path
            d="M28 0l28 16.166v32.333L28 64.666 0 48.499V16.166L28 0zm0 96.998l28-16.166V48.499L28 64.666 0 48.499v32.333L28 96.998z"
            fill="none"
            stroke="#EB0028"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient id="hex-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EB0028" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#050507" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

// Animated Floating Hexagonal Background Component imported by all pages
export function AnimatedHexBackground() {
  const floatingHexes = [
    { top: "12%", left: "6%", size: 64, duration: 12, delay: 0 },
    { top: "28%", left: "84%", size: 88, duration: 16, delay: 2 },
    { top: "58%", left: "10%", size: 72, duration: 11, delay: 1 },
    { top: "72%", left: "82%", size: 96, duration: 18, delay: 3 },
    { top: "42%", left: "92%", size: 52, duration: 14, delay: 0.5 },
    { top: "82%", left: "48%", size: 68, duration: 13, delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* SVG Hexagonal Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='97' viewBox='0 0 56 97' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0l28 16.166v32.333L28 64.666 0 48.499V16.166L28 0zm0 96.998l28-16.166V48.499L28 64.666 0 48.499v32.333L28 96.998z' fill='none' stroke='%23EB0028' stroke-opacity='0.08' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 97px'
        }}
      />

      {/* Floating Glowing Animated SVG Hexagons */}
      {floatingHexes.map((hex, i) => (
        <motion.div
          key={i}
          className="absolute text-[#EB0028]/20 pointer-events-none"
          style={{ top: hex.top, left: hex.left, width: hex.size, height: hex.size }}
          animate={{
            y: [-16, 16, -16],
            rotate: [0, 60, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: hex.duration,
            repeat: Infinity,
            delay: hex.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-[1.5]">
            <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
            <polygon points="50,18 80,35 80,65 50,82 20,65 20,35" className="stroke-current stroke-[1] opacity-60" />
          </svg>
        </motion.div>
      ))}

      {/* Ambient Red Glow Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EB0028]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#EB0028]/10 rounded-full blur-[128px]" />
    </div>
  );
}

// Clean Borderless Digit Component
const CountdownDigit = memo(function CountdownDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-12 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden select-none min-w-[0.6em]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "-40%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "40%", opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tighter leading-none"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

// Local scroll-reveal primitives (guaranteed to fire on scroll into view)
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const staggerCard = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ScrollReveal({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-10-03T15:00:00+05:30").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderDigits = (value: number) => {
    const digits = String(value).padStart(2, "0").split("");
    return (
      <div className="flex items-center justify-center gap-0.5">
        {digits.map((digit, idx) => (
          <CountdownDigit key={idx} digit={digit} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative">
      <SharedSVGDefs />
      <AnimatedHexBackground />

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-end px-4 sm:px-8 md:px-14 pt-28 pb-20 min-h-[85vh] z-10 overflow-hidden">
        {/* FULL-BLEED BACKGROUND IMAGE — covers the whole hero, edge to edge, down to the divider under the CTA */}
        <img
          src={`${(import.meta as any).env?.BASE_URL || "/"}tedx-hero-poster.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* THIN BLACK VEIL SO THE TEXT STAYS READABLE OVER THE IMAGE */}
        <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />

        {/* SOFT FADE AT THE BOTTOM SO THE VIDEO BLENDS INTO THE DIVIDER / NEXT SECTION */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 bg-gradient-to-b from-transparent to-[#050507] z-[1] pointer-events-none" />

        {/* HERO CONTENT — stacks centered on mobile, splits left/right from sm: up */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 w-full flex flex-col gap-10"
        >
          {/* EVENT NAME + DATE BADGE — LEFT ALIGNED */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="font-['Helvetica',sans-serif] font-extrabold text-base sm:text-2xl uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              <span className="text-[#EB0028]">TEDx</span>
              <span className="text-white"> CHIREC Youth</span>
            </div>
            <div className="w-24 sm:w-40 h-px bg-white/50 my-2 sm:my-3" />
            <p className="font-['Helvetica',sans-serif] text-xs sm:text-base uppercase tracking-[0.3em] text-zinc-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              October 3rd 2026
            </p>
          </div>

          {/* MAIN TITLE + DESCRIPTION + CTA — RIGHT ALIGNED from sm: up */}
          <div className="flex flex-col items-center text-center w-full sm:items-end sm:text-right sm:max-w-2xl sm:ml-auto sm:self-end">
            <div className="flex flex-col items-center sm:items-end leading-none mb-8 sm:mb-10">
              <span className="font-['Helvetica',sans-serif] font-light text-xs sm:text-base uppercase text-zinc-200 mb-1 sm:mb-2 tracking-[0.45em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                THE
              </span>
              <h1 className="font-['Helvetica',sans-serif] text-[clamp(34px,8vw,88px)] font-black uppercase tracking-tight py-1 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                <span className="text-[#EB0028]">IN</span>
                <span className="text-white">-BETWEEN</span>
              </h1>
              <span className="font-['Helvetica',sans-serif] text-[clamp(26px,6.5vw,68px)] font-extralight uppercase tracking-[0.22em] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                SPACE
              </span>
            </div>

            <div className="flex justify-center sm:justify-end">
              <SpotlightButton
                href="https://forms.gle/AHbwZmCSSGgkBUj4A"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-black px-8 py-4 text-white font-['Helvetica',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#EB0028] hover:shadow-[0_0_30px_rgba(235,0,40,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Reserve Your Seat</span>
                  <Hexagon className="w-4 h-4 text-[#EB0028] group-hover:text-white transition-colors fill-[#EB0028]/20 group-hover:fill-white/20 stroke-[1.75]" />
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </SpotlightButton>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EVENT OVERVIEW SECTION */}
      <section className="px-4 sm:px-12 md:px-16 py-20 border-t border-zinc-800/80 bg-black/80 backdrop-blur-md relative w-full z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12 relative z-10">
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Event Overview
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mb-14 relative z-10">
            <div className="group rounded-xs border border-[#EB0028]/30 bg-[#0c0c10]/90 p-6 sm:p-10 relative overflow-hidden transition-colors hover:border-[#EB0028]/60">
              {/* SLIDING HEXAGON ACCENT ON OVERVIEW BOX HOVER */}
              <div className="absolute top-4 right-4 text-[#EB0028] opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20">
                <Hexagon className="w-5 h-5 fill-[#EB0028]/20 stroke-[1.75]" />
              </div>

              {/* CLEAN ALIGNED HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800/80 pb-4 mb-8 gap-2 z-10 relative">
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                    TEDxYouth@CHIREC 2026
                  </span>
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EB0028] font-bold">
                    EVENT COUNTDOWN
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 self-start sm:self-auto">
                  <Timer className="w-3.5 h-3.5 text-[#EB0028]" />
                  <span>OCT 3, 2026 • 15:00 IST</span>
                </div>
              </div>

              {/* BORDERLESS NUMBERS COUNTDOWN GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl mx-auto justify-items-center z-10 relative">
                <div className="flex flex-col items-center gap-2 w-full">
                  {renderDigits(timeLeft.days)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Days</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  {renderDigits(timeLeft.hours)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Hours</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  {renderDigits(timeLeft.minutes)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Minutes</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  {renderDigits(timeLeft.seconds)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Seconds</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-6 md:grid-cols-2 mx-auto relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Feature Card 1 */}
            <motion.div variants={staggerCard} className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Date & Time</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">Saturday, October 3, 2026</p>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">Doors open at 3:00 PM. No entry permitted after 3:45 PM. <br />Please arrive on time for check-in and seating.</p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div variants={staggerCard} className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Location</h3>
                <a
                  href="https://maps.app.goo.gl/JPhHnKjHJxeRBVzg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm sm:text-base text-[#EB0028] mb-3 font-semibold hover:underline underline-offset-4 relative z-10"
                >
                  CHIREC Kondapur Campus
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">Botanical Garden Road, Kondapur, Hyderabad. <br />Entrance & check-in located at Gate 1.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
