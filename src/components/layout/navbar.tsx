import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SpotlightButton } from "../kokonutui/spotlight-button";

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
      <div
        className={`pointer-events-auto w-full transition-all duration-300 ease-out ${
          open
            ? "mt-4 max-w-lg rounded-3xl border border-brand/30 bg-ink/95 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(255,0,0,0.2)] backdrop-blur-2xl"
            : isScrolled
            ? "mt-4 max-w-4xl rounded-full border border-brand/30 bg-ink/80 px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-xl"
            : "max-w-7xl rounded-none border-b border-white/10 bg-ink/40 px-6 py-4 backdrop-blur-md"
        }`}
      >
        <nav className="grid grid-cols-2 items-center md:grid-cols-3">
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
            <SpotlightButton to="/register" className="!px-5 !py-[9px] !text-[13px]">
              Register
            </SpotlightButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center justify-end md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="p-1 text-white hover:text-brand transition-colors"
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
              className="overflow-hidden md:hidden"
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
                  <SpotlightButton to="/register" className="w-full justify-center text-center">
                    Register
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