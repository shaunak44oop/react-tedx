import { motion, useReducedMotion } from "motion/react";

/**
 * A large, soft red ring that sits behind the hero content and
 * breathes gently — an ambient echo of the spotlight-circle motif
 * used throughout the site (speaker photos, schedule markers).
 * Purely decorative: aria-hidden and pointer-events-none.
 */
export function SpotlightGlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full border-[90px] border-brand"
      initial={{ opacity: 0.1, scale: 1 }}
      animate={
        prefersReducedMotion
          ? { opacity: 0.14 }
          : { opacity: [0.1, 0.18, 0.1], scale: [1, 1.04, 1] }
      }
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
