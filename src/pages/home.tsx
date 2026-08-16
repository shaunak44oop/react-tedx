import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";

export function Home() {
  // 1. Precise Mouse Tracking (Telemetry-style)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for a mechanical, snapping response to cursor movement
  const springX = useSpring(mouseX, { stiffness: 400, damping: 90 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 90 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 30); // 30px max translation
    mouseY.set(y * 30);
  }

  // 2. Parallax Scroll Variables
  const { scrollYProgress } = useScroll();
  const parallaxUp = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const parallaxDown = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // 3. 3D Staggered Typography Variables
  const titleText = "TEDxYouth@CHIREC";
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };
  const letterVars = {
    hidden: { y: 40, opacity: 0, rotateX: -90 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 250, damping: 20 }
    }
  };

  return (
    <div 
      className="min-h-[150vh] bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light relative"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Grid Background - No Glows */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 pointer-events-none opacity-[0.07] z-0" 
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`, backgroundSize: `32px 32px` }} 
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: `128px 128px`, opacity: 0.3 }} 
        />
      </motion.div>

      {/* Floating Parallax Elements */}
      <motion.div 
        style={{ y: parallaxUp }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border border-brand/30 rounded-full z-0 opacity-40"
      />
      <motion.div 
        style={{ y: parallaxDown, rotate: parallaxUp }}
        className="absolute top-[40%] right-[15%] w-24 h-24 border border-brand/40 z-0 opacity-40"
      />

      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[25vh] pb-14 text-center z-10">
        <div className="flex flex-col items-center max-w-5xl w-full">
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.4em] text-brand font-bold mb-8"
          >
            Ideas Worth Spreading
          </motion.p>

          {/* Animated SVG Border Container */}
          <div className="relative p-8 sm:p-14 mb-8 w-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.rect
                x="0" y="0" width="100%" height="100%"
                fill="none"
                stroke="rgba(255,0,0,0.4)" // Brand color
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Crosshairs */}
            <span className="absolute -top-2 -left-2 text-brand text-lg font-mono leading-none">+</span>
            <span className="absolute -top-2 -right-2 text-brand text-lg font-mono leading-none">+</span>
            <span className="absolute -bottom-2 -left-2 text-brand text-lg font-mono leading-none">+</span>
            <span className="absolute -bottom-2 -right-2 text-brand text-lg font-mono leading-none">+</span>

            {/* Staggered 3D Title */}
            <motion.h1 
              variants={containerVars}
              initial="hidden"
              animate="show"
              className="font-['Helvetica',sans-serif] text-[clamp(40px,8vw,100px)] font-black uppercase text-white tracking-tighter py-2 flex flex-wrap justify-center overflow-hidden perspective-1000"
            >
              {titleText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVars}
                  className="inline-block transform-style-3d"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] bg-brand/50 w-full max-w-xs origin-center mb-10"
          />

          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-[60ch] text-base sm:text-xl text-muted font-light leading-relaxed mb-12"
          >
            Join us on October 3, 2026, for a day of disruptive ideas, innovative perspectives, and relentless curiosity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
          >
            <SpotlightButton to="/register">
              Secure Your Seat
            </SpotlightButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}