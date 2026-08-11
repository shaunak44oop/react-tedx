import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SpotlightButton } from "../kokonutui/spotlight-button";

const links = [
  { to: "/", label: "Home" },
  { to: "/speakers", label: "Speakers" },
  { to: "/schedule", label: "Schedule" },
  { to: "/venue", label: "Venue & FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand/20 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-[clamp(20px,4vw,56px)] py-[18px]">
        <Link to="/" className="flex items-baseline gap-0.5 font-display text-xl tracking-tight text-brand">
          TEDx<span className="text-muted">Youth</span>
        </Link>

        <ul className="hidden gap-8 text-sm font-semibold md:flex">
          {links.map((link) => (
            <li key={link.to} className="relative">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative pb-1 ${isActive ? "text-brand" : "text-muted hover:text-brand"}`
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
          className="text-brand md:hidden"
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
            className="overflow-hidden border-b border-brand/20 md:hidden"
          >
            <ul className="flex flex-col px-[clamp(20px,4vw,56px)] pb-5">
              {links.map((link) => (
                <li key={link.to} className="border-b border-brand/10">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3.5 font-semibold ${isActive ? "text-brand" : "text-muted"}`
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
