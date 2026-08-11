import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type CountdownProps = {
  /** ISO date string, e.g. "2026-11-14T09:00:00" */
  target: string;
};

function getRemaining(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = pad(value);
  return (
    <div className="text-left">
      <div className="relative h-[1em] overflow-hidden font-mono text-[clamp(30px,5vw,46px)] font-bold leading-none text-brand">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
    </div>
  );
}

/** Live countdown to the event, with each digit group animating as it ticks over. */
export function Countdown({ target }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex flex-wrap gap-[clamp(14px,4vw,36px)]">
      <Digit value={remaining.days} label="Days" />
      <Digit value={remaining.hours} label="Hours" />
      <Digit value={remaining.mins} label="Mins" />
      <Digit value={remaining.secs} label="Secs" />
    </div>
  );
}
