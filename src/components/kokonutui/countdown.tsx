import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
}

export function Countdown({ target }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(target) - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const format = (num: number) => String(num).padStart(2, "0");

  const timeUnits = [
    { label: "DAYS", value: format(timeLeft.days) },
    { label: "HOURS", value: format(timeLeft.hours) },
    { label: "MINS", value: format(timeLeft.minutes) },
    { label: "SECS", value: format(timeLeft.seconds) },
  ];

  return (
    <div className="w-full max-w-[380px]">
      {/* Live Pulsing Indicator Badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand/90">
          Countdown to Launch
        </span>
      </div>

      {/* Glassmorphism Timer Cards */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {timeUnits.map((unit, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center rounded-md border border-brand/25 bg-brand/[0.04] py-2.5 px-1 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:bg-brand/[0.08] hover:shadow-[0_0_15px_rgba(235,0,40,0.18)]"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand drop-shadow-[0_0_8px_rgba(235,0,40,0.35)]">
              {unit.value}
            </span>
            <span className="mt-1 font-mono text-[9px] sm:text-[10.5px] font-medium tracking-[0.12em] text-muted group-hover:text-brand/90 transition-colors">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
