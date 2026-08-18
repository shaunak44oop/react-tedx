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
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light">
      {/* Centered Sleek Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-24 text-center">
        
        {/* ANIMATION 1: Breathing Ambient Hero Background Glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand/12 blur-[140px] rounded-full pointer-events-none" 
        />

        {/* ANIMATION 2: Slowly Panning Grid Texture */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
            backgroundSize: `24px 24px` 
          }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            TEDxYouth@CHIREC 2026
          </p>

          {/* Architectural Styled Title Card */}
          <div className="relative border border-brand/30 bg-ink/80 p-8 sm:p-12 backdrop-blur-md rounded-sm my-2 max-w-2xl w-full hover:border-brand/60 transition-colors duration-500">
            {/* Corner Crosshair Markers */}
            <span className="absolute -top-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-brand text-xs font-mono">+</span>

            <div className="flex flex-col items-center leading-none">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.45em" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] font-light text-base sm:text-xl uppercase text-muted/80 mb-2"
              >
                the
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Helvetica',sans-serif] text-[clamp(42px,9vw,96px)] font-black uppercase text-brand tracking-tight py-1"
              >
                in-between
              </motion.h1>

              <motion.span 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(32px,7.5vw,76px)] font-extralight uppercase tracking-[0.22em] text-white/90 mt-1"
              >
                space
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40"
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* ICONS ADDED: ArrowRight and Compass in buttons */}
            <SpotlightButton to="/register" className="group flex items-center gap-2">
              Reserve Your Seat 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </SpotlightButton>
            <SpotlightButton to="/speakers" variant="outline" className="group flex items-center gap-2">
              Explore Lineup
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </SpotlightButton>
          </div>
        </Reveal>
      </section>

      {/* Countdown, Location, Date & Format Section */}
      <section className="px-[clamp(20px,4vw,56px)] py-16 border-t border-brand/20 bg-ink/40 relative">
        <div className="mx-auto max-w-container font-['Inter',sans-serif] font-light">
          <Reveal className="text-center mb-12">
            <p className="font-['Helvetica',sans-serif] text-[12.5px] uppercase tracking-[0.2em] text-brand font-medium">
              Event Overview
            </p>
            <h2 className="mt-2 font-['Helvetica',sans-serif] text-[clamp(28px,5vw,48px)] font-bold text-white">
              Key Details & Countdown
            </h2>
          </Reveal>

          {/* Live Countdown Card */}
          <Reveal className="mb-14">
            <div className="rounded-xl border border-brand/30 bg-ink/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              <p className="flex items-center justify-center gap-2 font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.25em] text-brand mb-6 font-medium">
                <Timer className="w-4 h-4 animate-pulse" /> Countdown to Launch
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {/* ANIMATION 3: Spring hover effects on countdown blocks */}
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-4 rounded-lg border border-brand/20 bg-brand/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-brand font-bold">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-muted tracking-wider font-light">Days</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-4 rounded-lg border border-brand/20 bg-brand/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-muted tracking-wider font-light">Hours</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-4 rounded-lg border border-brand/20 bg-brand/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-brand font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-muted tracking-wider font-light">Minutes</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-4 rounded-lg border border-brand/20 bg-brand/5 cursor-default">
                  <span className="block font-['Helvetica',sans-serif] text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs uppercase text-muted tracking-wider font-light">Seconds</span>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Details Cards: Date, Location, Format */}
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {/* ANIMATION 4 & ICON ENHANCEMENT: Hover lifts card up and pops the icon */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -8 }}
              className="group rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand hover:shadow-brand/20 transition-all cursor-default"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Date & Time</h3>
              <p className="font-['Inter',sans-serif] text-sm text-brand mb-3 font-normal">Saturday, October 3, 2026</p>
              <p className="text-sm text-muted font-light leading-relaxed">
                Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -8 }}
              className="group rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand hover:shadow-brand/20 transition-all cursor-default"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Location</h3>
              <p className="font-['Inter',sans-serif] text-sm text-brand mb-3 font-normal">CHIREC Kondapur Campus</p>
              <p className="text-sm text-muted font-light leading-relaxed">
                Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.
              </p>
            </motion.div>

            {/* Format */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -8 }}
              className="group rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand hover:shadow-brand/20 transition-all cursor-default"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Event Format</h3>
              <p className="font-['Inter',sans-serif] text-sm text-brand mb-3 font-normal">4 Talks & Live Performances</p>
              <p className="text-sm text-muted font-light leading-relaxed">
                Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.
              </p>
            </motion.div>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}