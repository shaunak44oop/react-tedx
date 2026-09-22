import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Timer, Hexagon } from "lucide-react";

// Split Flap Digit Component
const FlapDigit = memo(function FlapDigit({ digit }: { digit: string }) {
  return (
    <div className="relative w-10 h-16 sm:w-14 sm:h-22 md:w-18 md:h-28 bg-[#0b0b0f] border border-[#EB0028]/30 rounded-xs flex items-center justify-center overflow-hidden select-none transform-gpu group hover:border-[#EB0028]/80 transition-colors">
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
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
      />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-28 pb-20 text-center min-h-[85vh] z-10">
        {/* HERO THEME IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto z-10 mb-8"
        >
          <div className="relative w-full">
            <img
              src={`${(import.meta as any).env?.BASE_URL || "/"}tedx_theme_pic.jpeg`}
              alt="The In-Between Space — TEDxYouth@CHIREC 2026"
              className="w-full h-auto block"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                const fallback = img.parentElement?.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px 20px #050507",
              }}
            />
          </div>

          {/* FALLBACK TEXT BOX */}
          <div
            style={{ display: "none" }}
            className="group relative mx-auto max-w-2xl border border-[#EB0028]/40 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs shadow-[0_0_40px_rgba(235,0,40,0.15)] overflow-hidden"
          >
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

        <Reveal className="flex flex-col items-center z-10 max-w-5xl">
          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10 relative z-10">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape tomorrow.
          </p>

          {/* MINIMAL CTA BUTTON WITH SINGLE HEXAGON ACCENT */}
          <div className="flex justify-center relative z-10">
            <SpotlightButton 
              to="/register" 
              className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-black px-8 py-4 text-white font-['Helvetica',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#EB0028] hover:shadow-[0_0_30px_rgba(235,0,40,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Reserve Your Seat</span>
                <Hexagon className="w-4 h-4 text-[#EB0028] group-hover:text-white transition-colors fill-[#EB0028]/20 group-hover:fill-white/20 stroke-[1.75]" />
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </SpotlightButton>
          </div>
        </Reveal>
      </section>

      {/* EVENT OVERVIEW SECTION */}
      <section className="px-4 sm:px-12 md:px-16 py-20 border-t border-zinc-800/80 bg-black/80 backdrop-blur-md relative w-full z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12 relative z-10">
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Event Overview
            </h2>
          </Reveal>

          <Reveal className="mb-14 relative z-10">
            <div className="rounded-xs border border-[#EB0028]/30 bg-[#0c0c10]/90 p-6 sm:p-10 relative overflow-hidden">
              <span className="absolute top-3 left-4 text-zinc-500 font-mono text-[10px] uppercase tracking-wider z-10">
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
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-zinc-800 bg-black/80 p-8 hover:border-[#EB0028]/60 transition-all cursor-default">
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-105 transition-transform duration-300">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Date & Time</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">Saturday, October 3, 2026</p>
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.</p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-zinc-800 bg-black/80 p-8 hover:border-[#EB0028]/60 transition-all cursor-default">
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Location</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">CHIREC Kondapur Campus</p>
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.</p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div variants={staggerItem} className="group relative rounded-xs border border-zinc-800 bg-black/80 p-8 hover:border-[#EB0028]/60 transition-all cursor-default">
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-105 transition-transform duration-300">
                  <Mic className="h-6 w-6" />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">Event Format</h3>
                <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">Talks & Performances</p>
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.</p>
              </div>
            </motion.div>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}