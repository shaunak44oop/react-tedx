import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  type Variants,
} from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type Variant = "solid" | "outline";

type SpotlightButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  to?: string;
  type?: "button" | "submit";
};

const base =
  "group relative inline-flex items-center gap-2 overflow-hidden rounded-sm px-7 py-4 text-[14.5px] font-bold tracking-tight transition-colors";

const styles: Record<Variant, string> = {
  solid: "bg-brand text-ink",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-ink",
};

const tapVariants: Variants = { tap: { scale: 0.97 } };

/**
 * A button with a soft glow that follows the cursor — the "spotlight
 * follows you" idea, echoing the red spotlight motif used throughout
 * the site. On touch devices the glow simply doesn't appear (no
 * cursor to track), and the button still works normally.
 */
export function SpotlightButton({
  children,
  variant = "solid",
  className,
  href,
  to,
  type = "button",
}: SpotlightButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const glowColor = variant === "solid" ? "rgba(10,10,10,0.18)" : "rgba(230,43,30,0.18)";
  const background = useMotionTemplate`radial-gradient(140px circle at ${springX}px ${springY}px, ${glowColor}, transparent 70%)`;

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const classes = cn(base, styles[variant], className);

  const glow = (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background }}
    />
  );

  const inner = (
    <>
      {glow}
      <span className="relative">{children}</span>
    </>
  );

  if (to) {
    return (
      <motion.div whileTap="tap" variants={tapVariants} className="inline-block">
        <Link to={to} className={classes} onMouseMove={onMouseMove}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileTap="tap" variants={tapVariants} className="inline-block">
        <a href={href} className={classes} onMouseMove={onMouseMove}>
          {inner}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileTap="tap"
      variants={tapVariants}
      className={classes}
      onMouseMove={onMouseMove}
    >
      {inner}
    </motion.button>
  );
}
