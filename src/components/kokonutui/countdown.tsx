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
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {timeUnits.map((unit, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center rounded-md border border-brand/25 bg-brand/[0.04] py-2.5 px-1 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:bg-brand/[0.08] hover:shadow-lg"
          >
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-brand">
              {unit.value}
            </span>
            <span className="mt-1 font-sans text-[9px] sm:text-[10.5px] font-bold tracking-[0.12em] text-muted group-hover:text-brand transition-colors uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
