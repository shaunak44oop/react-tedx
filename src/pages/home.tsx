import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Compass, Timer } from "lucide-react";

// Shared SVG Definitions for geometric patterns & hexagonal elements
export const SharedSVGDefs = memo(function SharedSVGDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        {/* Diagonal Lines Texture */}
        <pattern id="pattern-diagonal" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
        
        {/* Hexagon with Nodes for Feature Cards & Buttons */}
        <g id="shape-hex-node">
          <path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M45 35 L55 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5 35 L-5 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M25 5 L25 -5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="25" cy="5" r="3" fill="currentColor" />
          <circle cx="45" cy="35" r="3" fill="currentColor" />
          <circle cx="5" cy="35" r="3" fill="currentColor" />
        </g>
      </defs>
    </svg>
  );
});

// Subtle Floating Hexagon Background Accent Component
export function AnimatedHexBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
      />

      {/* Floating Hexagon Top-Left */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[8%] w-36 h-36 text-[#EB0028]/15 hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="1">
          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
        </svg>
      </motion.div>

      {/* Floating Hexagon Bottom-Right */}
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-48 h-48 text-[#EB0028]/10 hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="1.2">
          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
          <polygon points="50,15 82,32 82,68 50,85 18,68 18,32" strokeDasharray="4,4" />
        </svg>
      </motion.div>
    </div>
  );
}

// Split Flap Digit Component
const FlapDigit = memo(function FlapDigit({ digit }: { digit: string }) {
  return (
    <div className="relative w-10 h-16 sm:w-14 sm:h-22 md:w-18 md:h-28 bg-[#0b0b0f] border border-[#EB0028]/30 rounded-xs flex items-center justify-center overflow-hidden select-none transform-gpu group hover:border-[#EB0028]/80 transition-colors">
      <div className="absolute inset-0 text-white opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0">
        <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#pattern-diagonal)" /></svg>
      </div>

      <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.04] border-b border-black/80 z-10 pointer-events-none" />
      <div className="absolute top-1/2 inset-x-0 h-[2px] bg-[#050507] z-20 -translate-y-1/2" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#050507] rounded-r-xs z-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#050507] rounded-l-xs z-30" />

      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none z-10"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

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

  const renderSplitFlapDigits = (value: number) => {
    const digits = String(value).padStart(2, "0").split("");
    return (
      <div className="flex gap-1 sm:gap-1.5">
        {digits.map((digit, idx) => (
          <FlapDigit key={idx} digit={digit} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-20 text-center min-h-[85vh] z-10">
        <AnimatedHexBackground />

        {/* HERO THEME IMAGE — fills full viewport width, falls back to text box if it fails */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto z-10 mb-8"
        >
          <img
            src={`${(import.meta as any).env?.BASE_URL || "/"}tedx_theme_pic_cropped.jpeg`}
            alt="The In-Between Space — TEDxYouth@CHIREC 2026"
            className="w-full h-auto block"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "block";
            }}
          />

          {/* FALLBACK: theme text box, hidden unless the image fails */}
          <div
            style={{ display: "none" }}
            className="group relative mx-auto max-w-2xl border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs shadow-[0_0_60px_rgba(235,0,40,0.2)] overflow-hidden"
          >
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <div className="flex flex-col items-center leading-none relative z-10">
              <span className="font-['Helvetica',sans-serif] font-light text-xs sm:text-base uppercase text-zinc-400 mb-2 tracking-[0.45em]">
                THE
              </span>
              <h1 className="font-['Helvetica',sans-serif] text-[clamp(42px,9vw,96px)] font-black uppercase text-[#EB0028] tracking-tight py-1">
                IN-BETWEEN
              </h1>
              <span className="font-['Helvetica',sans-serif] text-[clamp(32px,7.5vw,76px)] font-extralight uppercase tracking-[0.22em] text-white/95 mt-1">
                SPACE
              </span>
            </div>
          </div>
        </motion.div>

        <Reveal className="flex flex-col items-center z-10 max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-xs border border-[#EB0028]/60 bg-black/80 backdrop-blur-md text-[11px] uppercase tracking-[0.35em] text-[#EB0028] font-mono mb-8 font-semibold relative overflow-hidden group">
            TEDxYouth@CHIREC • OCT 3, 2026
            <svg viewBox="0 0 10 10" className="absolute -right-1 -top-1 w-4 h-4 text-[#EB0028] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <circle cx="5" cy="5" r="2" fill="currentColor" />
            </svg>
          </div>

          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center" 
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-8 relative z-10">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape tomorrow.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <SpotlightButton to="/register" className="group relative overflow-hidden bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-6 py-2.5 rounded-xs transition-all">
              <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-16 h-16 text-black opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <span className="relative z-10 flex items-center gap-2">
                Reserve Your Seat 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </SpotlightButton>

            <SpotlightButton to="/speakers" variant="outline" className="group relative overflow-hidden border-zinc-700 bg-black/60 hover:border-[#EB0028] text-zinc-200 px-6 py-2.5 rounded-xs transition-all">
              <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-16 h-16 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <span className="relative z-10 flex items-center gap-2">
                Explore Lineup
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 text-[#EB0028]" />
              </span>
            </SpotlightButton>
          </div>
        </Reveal>
      </section>

      {/* EVENT OVERVIEW SECTION */}
      <section className="px-4 sm:px-12 md:px-16 py-20 border-t border-[#EB0028]/30 bg-black/80 backdrop-blur-md relative w-full z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12 relative z-10">
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Event Overview
            </h2>
          </Reveal>

          <Reveal className="mb-14 relative z-10">
            <div className="group rounded-xs border border-[#EB0028]/40 bg-[#0c0c10]/90 p-6 sm:p-10 relative overflow-hidden transition-colors hover:border-[#EB0028]/80">
              <span className="absolute top-2 left-3 text-zinc-500 font-mono text-[10px] uppercase tracking-wider z-10">
                TEDxYouth@CHIREC 2026
              </span>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8 mt-2 z-10 relative">
                <div className="flex items-center gap-2.5">
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EB0028] font-bold">
                    EVENT COUNTDOWN
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Timer className="w-3.5 h-3.5 text-[#EB0028]" />
                  <span>OCT 3, 2026 • 15:00 IST</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center z-10 relative">
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.days)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.hours)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.minutes)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.seconds)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-[#EB0028] font-bold mt-3">Seconds</span>
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-3 relative z-10" stagger={0.1}>
            {/* Feature Card 1 */}
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Date & Time</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">Saturday, October 3, 2026</p>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.</p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Location</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">CHIREC Kondapur Campus</p>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.</p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default overflow-hidden">
              <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-32 h-32 text-[#EB0028] opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none z-0">
                <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
              </svg>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-110 transition-transform duration-500">
                  <Mic className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Event Format</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">Talks & Performances</p>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.</p>
              </div>
            </motion.div>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}