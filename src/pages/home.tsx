import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { 
  Calendar, 
  MapPin, 
  Mic, 
  ArrowRight, 
  Compass, 
  Timer, 
  Sparkles, 
  Users, 
  Layers,
  ArrowUpRight 
} from "lucide-react";

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
    <div className="min-h-screen bg-[#08080a] text-white overflow-hidden font-['Inter',sans-serif] selection:bg-red-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-20 text-center min-h-[92vh]">
        
        {/* Layer 1: Ambient Red Center Spotlight */}
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" 
        />

        {/* Layer 2: Secondary Vignette Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Layer 3: Panning Dot Matrix Pattern */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none opacity-[0.07]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)`, 
            backgroundSize: `32px 32px` 
          }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-5xl">
          
          {/* Status Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-md text-xs uppercase tracking-[0.25em] text-red-400 font-medium mb-8 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>TEDxYouth@CHIREC • OCT 3, 2026</span>
          </motion.div>

          {/* Title Card Container */}
          <div className="relative border border-white/10 bg-black/60 p-8 sm:p-14 backdrop-blur-xl rounded-2xl my-2 max-w-3xl w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:border-red-500/40 transition-all duration-700 group">
            
            {/* Tech Corner Markers */}
            <span className="absolute top-3 left-3 text-red-500/60 text-xs font-mono group-hover:text-red-400 transition-colors">┌</span>
            <span className="absolute top-3 right-3 text-red-500/60 text-xs font-mono group-hover:text-red-400 transition-colors">┐</span>
            <span className="absolute bottom-3 left-3 text-red-500/60 text-xs font-mono group-hover:text-red-400 transition-colors">└</span>
            <span className="absolute bottom-3 right-3 text-red-500/60 text-xs font-mono group-hover:text-red-400 transition-colors">┘</span>

            <div className="flex flex-col items-center leading-none">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] font-light text-xs sm:text-base uppercase text-zinc-400 mb-3"
              >
                T H E
              </motion.span>

              {/* Glowing Crimson Headline */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Helvetica',sans-serif] text-[clamp(44px,10vw,100px)] font-black uppercase tracking-tight py-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]"
              >
                IN-BETWEEN
              </motion.h1>

              <motion.span 
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(30px,7.5vw,72px)] font-extralight uppercase tracking-[0.28em] text-zinc-100 mt-1"
              >
                SPACE
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
          />

          <p className="max-w-[50ch] text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <SpotlightButton to="/register" className="group flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)]">
              Reserve Your Seat 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </SpotlightButton>
            <SpotlightButton to="/speakers" variant="outline" className="group flex items-center gap-2 border-white/20 hover:border-white/40 text-zinc-200 px-6 py-3 rounded-xl backdrop-blur-md transition-all">
              Explore Lineup
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 text-red-400" />
            </SpotlightButton>
          </div>

          {/* Quick Event Highlights Bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-white/10 w-full max-w-xl text-zinc-400 text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-white text-base sm:text-lg">500+</span>
              <span className="text-zinc-500">Attendees</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-white text-base sm:text-lg">8+</span>
              <span className="text-zinc-500">Speakers</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-white text-base sm:text-lg">1 Day</span>
              <span className="text-zinc-500">Live Experience</span>
            </div>
          </div>

        </Reveal>
      </section>

      {/* COUNTDOWN & DETAILS SECTION */}
      <section className="px-4 sm:px-8 py-20 border-t border-white/10 bg-black/40 relative">
        <div className="mx-auto max-w-5xl">
          
          <Reveal className="text-center mb-12">
            <p className="font-['Helvetica',sans-serif] text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
              EVENT OVERVIEW
            </p>
            <h2 className="font-['Helvetica',sans-serif] text-3xl sm:text-5xl font-bold text-white">
              Key Details & Countdown
            </h2>
          </Reveal>

          {/* Countdown Clock Block */}
          <Reveal className="mb-12">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-zinc-900/80 to-black/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full pointer-events-none" />
              
              <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-red-400 mb-8 font-medium">
                <Timer className="w-4 h-4 animate-pulse text-red-500" /> Time Remaining To Launch
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { value: timeLeft.days, label: "Days", highlight: true },
                  { value: timeLeft.hours, label: "Hours", highlight: false },
                  { value: timeLeft.minutes, label: "Minutes", highlight: true },
                  { value: timeLeft.seconds, label: "Seconds", highlight: false },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }} 
                    transition={{ type: "spring", stiffness: 300 }} 
                    className="p-5 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm cursor-default hover:border-red-500/40 transition-colors"
                  >
                    <span className={`block font-['Helvetica',sans-serif] text-4xl sm:text-6xl font-bold ${item.highlight ? 'text-red-500' : 'text-white'}`}>
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-xs uppercase text-zinc-500 tracking-wider mt-1 block">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3 Overview Cards */}
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            
            {/* Card 1: Date & Time */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-7 backdrop-blur-md shadow-xl hover:border-red-500/40 transition-all cursor-default relative overflow-hidden"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Date & Time</h3>
              <p className="text-sm text-red-400 mb-3 font-medium">Saturday, October 3, 2026</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Doors open at 15:00 IST. Early check-in begins 30 minutes prior to opening remarks.
              </p>
            </motion.div>

            {/* Card 2: Location */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-7 backdrop-blur-md shadow-xl hover:border-red-500/40 transition-all cursor-default relative overflow-hidden"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Location</h3>
              <p className="text-sm text-red-400 mb-3 font-medium">CHIREC Kondapur Campus</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Botanical Garden Road, Kondapur, Hyderabad. Main Auditorium via Gate 1.
              </p>
            </motion.div>

            {/* Card 3: Format */}
            <motion.div 
              variants={staggerItem} 
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-7 backdrop-blur-md shadow-xl hover:border-red-500/40 transition-all cursor-default relative overflow-hidden"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="font-['Helvetica',sans-serif] text-xl font-bold text-white mb-1">Event Format</h3>
              <p className="text-sm text-red-400 mb-3 font-medium">Talks & Performances</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Curated 12-minute talks, live creative performances, and interactive networking lounges.
              </p>
            </motion.div>

          </RevealGroup>
        </div>
      </section>

    </div>
  );
}