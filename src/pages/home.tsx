import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, MapPin, Mic } from "lucide-react";

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
    <div className="min-h-screen bg-ink text-white overflow-hidden">
      {/* Centered Animated Hero */}
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-24 text-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand/15 blur-[130px] rounded-full pointer-events-none" />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-brand/90 font-semibold mb-4">
            TEDxYouth@CHIREC 2026
          </p>

          {/* Vertical Stacked Hero Typography */}
          <div className="flex flex-col items-center leading-none tracking-tight my-2">
            <span className="font-mono text-lg sm:text-2xl uppercase tracking-[0.45em] text-muted italic mb-1">
              the
            </span>
            <h1 className="font-display text-[clamp(44px,9.5vw,110px)] font-black uppercase text-brand drop-shadow-lg">
              in-between
            </h1>
            <span className="font-display text-[clamp(38px,8.5vw,90px)] font-extrabold uppercase tracking-[0.18em] text-white">
              space
            </span>
          </div>

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] w-32 border-0 bg-brand/50 origin-center"
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8">
            Exploring the threshold where potential meets reality, ideas spark transformation, and voices shape the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <SpotlightButton to="/register">
              Reserve Your Seat
            </SpotlightButton>
            <SpotlightButton to="/speakers" variant="outline">
              Explore Lineup
            </SpotlightButton>
          </div>
        </Reveal>
      </section>

      {/* Replaced 'About' Section with Real-Time Countdown, Location, Date & Format */}
      <section className="px-[clamp(20px,4vw,56px)] py-16 border-t border-brand/20 bg-ink/40">
        <div className="mx-auto max-w-container">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
              Event Overview
            </p>
            <h2 className="mt-2 font-display text-[clamp(28px,5vw,48px)] text-white">
              Key Details & Countdown
            </h2>
          </Reveal>

          {/* Live Countdown Card */}
          <Reveal className="mb-14">
            <div className="rounded-2xl border border-brand/30 bg-ink/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brand mb-6">
                Countdown to Launch
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl border border-brand/20 bg-brand/5">
                  <span className="block font-display text-4xl sm:text-5xl text-brand font-bold">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase text-muted tracking-wider">Days</span>
                </div>
                <div className="p-4 rounded-xl border border-brand/20 bg-brand/5">
                  <span className="block font-display text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase text-muted tracking-wider">Hours</span>
                </div>
                <div className="p-4 rounded-xl border border-brand/20 bg-brand/5">
                  <span className="block font-display text-4xl sm:text-5xl text-brand font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase text-muted tracking-wider">Minutes</span>
                </div>
                <div className="p-4 rounded-xl border border-brand/20 bg-brand/5">
                  <span className="block font-display text-4xl sm:text-5xl text-white font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase text-muted tracking-wider">Seconds</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Details Cards: Date, Location, Format */}
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {/* Date */}
            <motion.div variants={staggerItem} className="rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-white mb-1">Date & Time</h3>
              <p className="font-mono text-sm text-brand mb-3">Saturday, October 3, 2026</p>
              <p className="text-sm text-muted">
                Doors open at 15:00 IST. Please arrive 20 minutes early for check-in and seating.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={staggerItem} className="rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-white mb-1">Location</h3>
              <p className="font-mono text-sm text-brand mb-3">CHIREC Kondapur Campus</p>
              <p className="text-sm text-muted">
                Botanical Garden Road, Kondapur, Hyderabad. Entrance & check-in located at Gate 1.
              </p>
            </motion.div>

            {/* Format */}
            <motion.div variants={staggerItem} className="rounded-xl border border-brand/30 bg-ink p-6 shadow-xl hover:border-brand transition-colors">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-white mb-1">Event Format</h3>
              <p className="font-mono text-sm text-brand mb-3">4 Talks & Live Performances</p>
              <p className="text-sm text-muted">
                Fast-paced 12-minute talks interspersed with networking breaks and interactive exhibits.
              </p>
            </motion.div>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}