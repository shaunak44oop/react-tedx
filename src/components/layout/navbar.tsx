import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SpotlightButton } from "../kokonutui/spotlight-button";

// Memoized shared SVGs specific to the Nav (using 'brand' color classes)
const NavbarSVGDefs = memo(function NavbarSVGDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="nav-pattern-hex" width="26" height="45" patternUnits="userSpaceOnUse">
          <path d="M13 0 L26 7.5 L26 22.5 L13 30 L0 22.5 L0 7.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M13 30 L26 37.5 L26 52.5 L13 60 L0 52.5 L0 37.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
        <g id="nav-shape-hex-node">
          <path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M45 35 L55 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5 35 L-5 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M25 5 L25 -5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="25" cy="5" r="3" fill="currentColor" />
          <circle cx="45" cy="35" r="3" fill="currentColor" />
          <circle cx="5" cy="35" r="3" fill="currentColor" />
        </g>
      </defs>
    </svg>
  );
});

const links = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/speakers", label: "Speakers" },
  { to: "/team", label: "Team" },
  { to: "/venue", label: "Venue & FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // State guard prevents continuous re-renders on every scroll pixel (fixes lag)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 40;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none">
      
      <NavbarSVGDefs />

      <div
        className={`pointer-events-auto w-full transition-all duration-300 ease-out relative group overflow-hidden ${
          open
            ? "mt-4 max-w-lg rounded-3xl border border-brand/30 bg-ink/95 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(255,0,0,0.2)] backdrop-blur-2xl"
            : isScrolled
            ? "mt-4 max-w-4xl rounded-full border border-brand/30 bg-ink/80 px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-xl"
            : "max-w-7xl rounded-none border-b border-white/10 bg-ink/40 px-6 py-4 backdrop-blur-md"
        }`}
      >
        {/* Decorative Hex Background - Only visible on hover when scrolled/open */}
        <div className={`absolute inset-0 text-brand pointer-events-none z-0 transition-opacity duration-700 ${isScrolled || open ? 'opacity-0 group-hover:opacity-[0.04]' : 'opacity-0'}`}>
          <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#nav-pattern-hex)" /></svg>
        </div>

        {/* Decorative Corner Nodes */}
        <svg viewBox="0 0 50 50" className={`absolute -bottom-6 -left-6 w-16 h-16 text-brand pointer-events-none z-0 transition-all duration-700 ease-out ${isScrolled || open ? 'opacity-0 group-hover:opacity-30 group-hover:translate-x-2 group-hover:-translate-y-2' : 'opacity-0'}`}>
          <use href="#nav-shape-hex-node" x="0" y="0" transform="scale(0.8)" />
        </svg>
        <svg viewBox="0 0 50 50" className={`absolute -top-6 -right-6 w-16 h-16 text-brand pointer-events-none z-0 transition-all duration-700 ease-out rotate-180 ${isScrolled || open ? 'opacity-0 group-hover:opacity-30 group-hover:-translate-x-2 group-hover:translate-y-2' : 'opacity-0'}`}>
          <use href="#nav-shape-hex-node" x="0" y="0" transform="scale(0.8)" />
        </svg>

        {/* Main Nav Content - Wrapped in relative z-10 to stay above patterns */}
        <nav className="relative z-10 grid grid-cols-2 items-center md:grid-cols-3">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-baseline gap-0.5 font-display text-xl tracking-tight text-brand">
              TEDx<span className="text-white">Youth</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center justify-center gap-5 lg:gap-8 text-sm font-semibold md:flex">
            {links.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative pb-1 transition-colors whitespace-nowrap ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }: { isActive: boolean }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[3px] bg-brand"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Register Button */}
          <div className="hidden items-center justify-end md:flex">
            <SpotlightButton to="/register" className="group relative overflow-hidden !px-5 !py-[9px] !text-[13px]">
              {/* Button Hover Node */}
              <svg viewBox="0 0 50 50" className="absolute -bottom-3 -right-3 w-10 h-10 text-white opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                <use href="#nav-shape-hex-node" x="0" y="0" transform="scale(0.6)" />
              </svg>
              <span className="relative z-10">Register</span>
            </SpotlightButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center justify-end md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="p-1 text-white hover:text-brand transition-colors relative z-10"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden relative z-10"
            >
              <ul className="flex flex-col pt-4 pb-2 border-t border-white/10 mt-3">
                {links.map((link) => (
                  <li key={link.to} className="border-b border-white/10 last:border-none">
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3.5 font-semibold transition-colors ${
                          isActive ? "text-brand" : "text-white/80 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-4">
                  <SpotlightButton to="/register" className="group relative overflow-hidden w-full justify-center text-center">
                    {/* Mobile Button Hover Node */}
                    <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-12 h-12 text-black opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                      <use href="#nav-shape-hex-node" x="0" y="0" transform="scale(0.8)" />
                    </svg>
                    <span className="relative z-10">Register</span>
                  </SpotlightButton>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}