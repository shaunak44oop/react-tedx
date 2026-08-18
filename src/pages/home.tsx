import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic, ArrowRight, Compass, Timer } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[#070709] text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative">
      
      {/* 2. TEDx Red Dark Background Radial Gradient */}
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
          
          {/* 3. Crisp Rectangular Header (No Flashing/Pinging Light) */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-sm border border-[#EB0028]/40 bg-black/70 text-[11px] uppercase tracking-[0.3em] text-[#EB0028] font-mono mb-8 font-medium">
            TEDxYouth@CHIREC • OCT 3, 2026
          </div>

          {/* Architectural Styled Title Card (1. Flat & Crisp, No Glows) */}
          <div className="relative border border-[#EB0028]/30 bg-black/80 p-8 sm:p-12 rounded-sm my-2 max-w-2xl w-full hover:border-[#EB0028]/60 transition-colors duration-300">
            {/* Corner Crosshair Markers */}
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

              {/* Solid TEDx Red Headline */}
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

          {/* 4. Removed elements below the buttons (Stats Ribbon) */}

        </Reveal>
      </section>

      {/* 5. COUNTDOWN & DETAILS SECTION (Restored Original Clean Format) */}
      <section className="px-4 sm:px-8 py-16 border-t border-[#EB0028]/20 bg-black/40 relative">
        <div className="mx-auto max-w-4xl">
          
          <Reveal className="text-center mb-10">
            <p className="font-['Helvetica',sans-serif] text-[12px] uppercase tracking-[0.25em] text-[#EB0028] font-medium mb-1">
              Event Overview
            </p>
            <h2 className="font-['Helvetica',sans-serif] text-2xl sm:text-4xl font-bold text-white">
              Key Details & Countdown
            </h2>
          </Reveal>

          {/* Live Countdown Card (Clean & Architectural) */}
          <Reveal className="mb-12">
            <div className="rounded-sm border border-[#EB0028]/30 bg-black/70 p-6 sm:p-8 relative">
              <p className="flex items-center justify-center gap-2 font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.25em] text-[#EB0028] mb-6 font-medium">
                <Timer className="w-4 h-4" /> Countdown to Launch
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-sm border border-[#EB0028]/20 bg-[#EB0028]/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-[#EB0028] font-bold">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-zinc-400 tracking-wider font-light mt-1 block">Days</span>
                </div>
                <div className="p-4 rounded-sm border border-[#EB0028]/20 bg-[#EB0028]/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-zinc-400 tracking-wider font-light mt-1 block">Hours</span>
                </div>
                <div className="p-4 rounded-sm border border-[#EB0028]/20 bg-[#EB0028]/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-[#EB0028] font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-zinc-400 tracking-wider font-light mt-1 block">Minutes</span>
                </div>
                <div className="p-4 rounded-sm border border-[#EB0028]/20 bg-[#EB0028]/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-zinc-400 tracking-wider font-light mt-1 block">Seconds</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Details Cards */}
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            
            {/* Date & Time */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/60 p-6 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-lg font-bold text-white mb-1">Date & Time</h3>
              <p className="text-xs text-[#EB0028] mb-2 font-medium">Saturday, October 3, 2026</p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/60 p-6 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-lg font-bold text-white mb-1">Location</h3>
              <p className="text-xs text-[#EB0028] mb-2 font-medium">CHIREC Kondapur Campus</p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.
              </p>
            </motion.div>

            {/* Format */}
            <motion.div 
              variants={staggerItem} 
              className="group rounded-sm border border-[#EB0028]/30 bg-black/60 p-6 hover:border-[#EB0028] transition-colors cursor-default"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#EB0028]/10 text-[#EB0028]">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-lg font-bold text-white mb-1">Event Format</h3>
              <p className="text-xs text-[#EB0028] mb-2 font-medium">Talks & Performances</p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.
              </p>
            </motion.div>

          </RevealGroup>
        </div>
      </section>

    </div>
  );
}