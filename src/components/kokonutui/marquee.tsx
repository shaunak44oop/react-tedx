import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop — lower is faster. */
  duration?: number;
  className?: string;
};

/**
 * Scrolls its children infinitely to the left. The content is
 * duplicated once so the loop reads as seamless. If the person
 * prefers reduced motion, it renders as a static row instead.
 */
export function Marquee({ children, duration = 28, className }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const rowClass = cn("flex items-center gap-16", className);

  if (prefersReducedMotion) {
    return <div className={rowClass}>{children}</div>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className={rowClass}
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
