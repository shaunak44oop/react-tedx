import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Compass, Timer } from "lucide-react";

// Mechanical Split-Flap Tile Component with authentic top-flap fold down animation
function FlapDigit({ digit }: { digit: string }) {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== currentDigit) {
      setPreviousDigit(currentDigit);
      setCurrentDigit(digit);
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setIsFlipping(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [digit, currentDigit]);

  return (
    <div className="relative w-10 h-16 sm:w-14 sm:h-22 md:w-18 md:h-28 bg-[#111115] border border-zinc-800 rounded-xs shadow-2xl select-none [perspective:600px]">
      
      {/* 1. TOP STATIC HALF (Displays Next/Current Digit Top) */}
      <div className="absolute top-0 inset-x-0 h-1/2 overflow-hidden bg-[#15151a] rounded-t-xs border-b border-black/80 flex items-end justify-center">
        <span className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none translate-y-1/2">
          {currentDigit}
        </span>
        <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
      </div>

      {/* 2. BOTTOM STATIC HALF (Displays Previous Digit Bottom during flip, then Current) */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 overflow-hidden bg-[#111115] rounded-b-xs flex items-start justify-center">
        <span className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none -translate-y-1/2">
          {isFlipping ? previousDigit : currentDigit}
        </span>
      </div>

      {/* 3. ANIMATED FLAPPING TOP HALF (Folds 180deg Downwards) */}
      <AnimatePresence>
        {isFlipping && (
          <motion.div
            key={previousDigit + "-flap"}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -180 }}
            transition={{ duration: 0.45, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transformOrigin: "bottom" }}
            className="absolute top-0 inset-x-0 h-1/2 overflow-hidden bg-[#18181f] rounded-t-xs border-b border-black/80 flex items-end justify-center z-20 [backface-visibility:hidden]"
          >
            <span className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none translate-y-1/2">
              {previousDigit}
            </span>
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MECHANICAL DETAILS (Cut Line & Side Hinges) */}
      <div className="absolute top-1/2 inset-x-0 h-[2px] bg-[#070709] z-30 -translate-y-1/2" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#070709] rounded-r-xs z-40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 sm:w-1.5 sm:h-3 bg-[#070709] rounded-l-xs z-40" />
    </div>
  );
}

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
      
      {/* TEDx Red Dark Background Radial Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(235, 0, 40, 0.15) 0%, rgba(7, 7, 9, 0.95) 60%, #070709 100%)"
        }}
      />

      {/* Grid Pattern (Flat & Subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
          backgroundSize: `24px 24px` 
        }} 
      />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-20 text-center min-h-[85vh]">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl">
          
          {/* Crisp Rectangular Header */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-sm border border-[#EB0028]/40 bg-black/70 text-[11px] uppercase tracking-[0.3em] text-[#EB0028] font-mono mb-8 font-medium">
            TEDxYouth@CHIREC • OCT 3, 2026
          </div>

          {/* Architectural Styled Title Card */}
          <div className="relative border border-[#EB0028]/30 bg-black/80 p-8 sm:p-12 rounded-sm my-2 max-w-2xl w-full hover:border-[#EB0028]/60 transition-colors duration-300">
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
                className="font-['Helvetica',sans-serif] text-[clamp(42px,9vw,96px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
              >
                IN-BETWEEN
              </motion.h1>

              <motion.span 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(32px,7.5vw,76px)] font-extralight uppercase tracking-[0.22em] text-white/90 mt-1"
              >
                SPACE
              </motion.span>
            </div>
          </div>

          <div className="my-8 h-[1px] w-24 bg-[#EB0028]/40" />

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <SpotlightButton to="/register" className="group flex items-center gap-2 bg-[#EB0028] hover:bg-[#c40022] text-white font-medium px-6 py-2.5 rounded-sm transition-colors">
              Reserve Your Seat 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </SpotlightButton>
            <SpotlightButton to="/speakers" variant="outline" className="group flex items-center gap-2 border-zinc-700 hover:border-zinc-500 text-zinc-200 px-6 py-2.5 rounded-sm transition-colors">
              Explore Lineup
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 text-[#EB0028]" />
            </SpotlightButton>
          </div>

        </Reveal>
      </section>

      {/* FULL-WIDTH EVENT OVERVIEW SECTION */}
      <section className="px-4 sm:px-12 md:px-16 py-20 border-t border-[#EB0028]/20 bg-black/50 relative w-full">
        <div className="max-w-7xl mx-auto">
          
          <Reveal className="text-center mb-12">
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Event Overview
            </h2>
          </Reveal>

          {/* Airport Split-Flap Style Departure Board Countdown */}
          <Reveal className="mb-14">
            <div className="rounded-sm border border-[#EB0028]/40 bg-[#0c0c0e] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              
              {/* Corner Indicator */}
              <span className="absolute top-2 left-3 text-zinc-600 font-mono text-[10px] uppercase tracking-wider">
                TEDxYouth@CHIREC 2026
              </span>

              {/* Board Title Header Bar */}
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

              {/* Split Flap Grid Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                
                {/* DAYS */}
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.days)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Days
                  </span>
                </div>

                {/* HOURS */}
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.hours)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Hours
                  </span>
                </div>

                {/* MINUTES */}
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.minutes)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-bold mt-3">
                    Minutes
                  </span>
                </div>

                {/* SECONDS */}
                <div className="flex flex-col items-center">
                  {renderSplitFlapDigits(timeLeft.seconds)}
                  <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] text-[#EB0028] font-bold mt-3">
                    Seconds
                  </span>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Full-Width Grid for Details Cards */}
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            
            {/* Date & Time */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/70 p-8 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Date & Time
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                Saturday, October 3, 2026
              </p>
              <p className="text-sm sm:text-base text-zinc-100 font-normal leading-relaxed">
                Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/70 p-8 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Location
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                CHIREC Kondapur Campus
              </p>
              <p className="text-sm sm:text-base text-zinc-100 font-normal leading-relaxed">
                Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.
              </p>
            </motion.div>

            {/* Format */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/70 p-8 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5">
                Event Format
              </h3>
              <p className="text-sm sm:text-base text-[#EB0028] mb-3 font-semibold">
                Talks & Performances
              </p>
              <p className="text-sm sm:text-base text-zinc-100 font-normal leading-relaxed">
                Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.
              </p>
            </motion.div>

          </RevealGroup>
        </div>
      </section>

    </div>
  );
}