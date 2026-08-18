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

  // Detect scroll position to trigger floating oval shape
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto w-full transition-all duration-300 ease-out ${
          isScrolled
            ? "mt-4 max-w-4xl rounded-full border border-brand/30 bg-ink/80 px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-xl"
            : "max-w-7xl rounded-none border-b border-white/10 bg-ink/40 px-6 py-4 backdrop-blur-md"
        }`}
      >
        {/* 3-Column Grid guarantees true visual horizontal centering */}
        <nav className="grid grid-cols-2 items-center md:grid-cols-3">
          {/* Left: Brand Logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-baseline gap-0.5 font-display text-xl tracking-tight text-brand">
              TEDx<span className="text-white">Youth</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <ul className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex">
            {links.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative pb-1 transition-colors ${isActive ? "text-white" : "text-white/60 hover:text-white"}`
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

          {/* Right: Register Button */}
          <div className="hidden items-center justify-end md:flex">
            <SpotlightButton to="/register" className="!px-5 !py-[9px] !text-[13px]">
              Register
            </SpotlightButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-end md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="text-white"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col pt-4 pb-2">
                {links.map((link) => (
                  <li key={link.to} className="border-b border-white/10">
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 font-semibold ${isActive ? "text-white" : "text-white/60"}`
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