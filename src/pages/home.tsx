import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Compass, Timer } from "lucide-react";

// Memoized FlapDigit: Prevents unchanged digits from re-rendering every second
const FlapDigit = memo(function FlapDigit({ digit }: { digit: string }) {
  return (
    <div className="relative w-10 h-16 sm:w-14 sm:h-22 md:w-18 md:h-28 bg-[#0b0b0f] border border-[#EB0028]/30 rounded-xs flex items-center justify-center shadow-[0_0_15px_rgba(235,0,40,0.15)] overflow-hidden select-none transform-gpu">
      {/* Top Shade */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.04] border-b border-black/80 z-10 pointer-events-none" />

      {/* Mechanical Center Line & Hinges */}
      <div className="absolute top-1/2 inset-x-0 h-[2px] bg-[#050507] z-20 -translate-y-1/2" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#050507] rounded-r-xs z-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#050507] rounded-l-xs z-30" />

      {/* Hardware-accelerated vertical flip */}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none z-0"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <div className="min-h-screen bg-[#070709] text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative">
      
      {/* THEME ARTWORK BACKGROUND & MASKING */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}bg-tunnel.jpg`} 
          alt="The In-Between Space Artwork" 
          className="w-full h-full object-cover object-center opacity-50 scale-105 transform-gpu"
        />
        {/* Soft top and bottom fade into section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/85 via-[#070709]/40 to-[#070709]" />
        {/* Radial vignette targeting center tunnel visual */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_#070709_85%)]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-20 text-center min-h-[85vh] z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-xs border border-[#EB0028]/60 bg-black/80 backdrop-blur-md text-[11px] uppercase tracking-[0.35em] text-[#EB0028] font-mono mb-8 font-semibold shadow-[0_0_20px_rgba(235,0,40,0.3)]">
            TEDxYouth@CHIREC • OCT 3, 2026
          </div>

          <div className="relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full shadow-[0_0_60px_rgba(235,0,40,0.2)] hover:border-[#EB0028] transition-colors duration-300">
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono">+</span>

            <div className="flex flex-col items-center leading-none">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.45em" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] font-light text-xs sm:text-base uppercase text-zinc-400 mb-2"
              >
                THE
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(42px,9vw,96px)] font-black uppercase text-[#EB0028] tracking-tight py-1 drop-shadow-[0_0_25px_rgba(235,0,40,0.5)]"
              >
                IN-BETWEEN
              </motion.h1>

              <motion.span 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(32px,7.5vw,76px)] font-extralight uppercase tracking-[0.22em] text-white/95 mt-1"
              >
                SPACE
              </motion.span>
            </div>
          </div>

          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] shadow-[0_0_12px_#EB0028] origin-center" 
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-8 drop-shadow-md">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape tomorrow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <SpotlightButton to="/register" className="group flex items-center gap-2 bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-6 py-2.5 rounded-xs transition-all shadow-[0_0_25px_rgba(235,0,40,0.4)]">
              Reserve Your Seat 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </SpotlightButton>
            <SpotlightButton to="/speakers" variant="outline" className="group flex items-center gap-2 border-zinc-700 bg-black/60 hover:border-[#EB0028] text-zinc-200 px-6 py-2.5 rounded-xs transition-all">
              Explore Lineup
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 text-[#EB0028]" />
            </SpotlightButton>
          </div>

        </Reveal>
      </section>

      {/* EVENT OVERVIEW SECTION */}
      <section className="px-4 sm:px-12 md:px-16 py-20 border-t border-[#EB0028]/30 bg-black/80 backdrop-blur-md relative w-full z-10">
        <div className="max-w-7xl mx-auto">
          
          <Reveal className="text-center mb-12">
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Event Overview
            </h2>
          </Reveal>

          <Reveal className="mb-14">
            <div className="rounded-xs border border-[#EB0028]/40 bg-[#0c0c10]/90 p-6 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(235,0,40,0.15)]">
              
              <span className="absolute top-2 left-3 text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
                TEDxYouth@CHIREC 2026
              </span>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8 mt-2">
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.days)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Days
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.hours)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Hours
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.minutes)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Minutes
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.seconds)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-[#EB0028] font-bold mt-3">
                    Seconds
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            <motion.div 
              variants={staggerItem} 
              className="group rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Date & Time
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                Saturday, October 3, 2026
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="group rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Location
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                CHIREC Kondapur Campus
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="group rounded-xs border border-[#EB0028]/30 bg-black/80 p-8 hover:border-[#EB0028] transition-all cursor-default shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Event Format
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                Talks & Performances
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.
              </p>
            </motion.div>
          </RevealGroup>
        </div>
      </section>

    </div>
  );
}