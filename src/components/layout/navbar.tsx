import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SpotlightButton } from "../kokonutui/spotlight-button";

const links = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/venue", label: "Venue & FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // Changed to fixed position with a transparent blurred background and subtle white border
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-container items-center justify-between px-[clamp(20px,4vw,56px)] py-[18px]">
        <Link to="/" className="flex items-baseline gap-0.5 font-display text-xl tracking-tight text-brand">
          TEDx<span className="text-white">Youth</span>
        </Link>

        <ul className="hidden gap-8 text-sm font-semibold md:flex">
          {links.map((link) => (
            <li key={link.to} className="relative">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  // Updated to white accents for navigation links
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

        <div className="hidden md:block">
          <SpotlightButton to="/register" className="!px-5 !py-[11px] !text-[13px]">
            Register
          </SpotlightButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          // Changed mobile hamburger menu icon to white
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 md:hidden"
          >
            <ul className="flex flex-col px-[clamp(20px,4vw,56px)] pb-5">
              {links.map((link) => (
                <li key={link.to} className="border-b border-white/10">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3.5 font-semibold ${isActive ? "text-white" : "text-white/60"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-5">
                <SpotlightButton to="/register" className="w-full justify-center text-center">
                  Register
                </SpotlightButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}