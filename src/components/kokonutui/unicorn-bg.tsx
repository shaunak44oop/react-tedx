import { motion } from "motion/react";

export function UnicornBg() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none bg-ink">
      {/* Primary red glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] left-[10%] h-[70%] w-[80%] rounded-full bg-brand/50 blur-[120px]"
      />
      
      {/* Secondary shifting red glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[30%] -right-[10%] h-[60%] w-[60%] rounded-full bg-[#ff2a2a]/40 blur-[100px]"
      />
      
      {/* Bottom fade to seamlessly blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/50 to-ink" />
    </div>
  );
}