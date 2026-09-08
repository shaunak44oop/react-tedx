import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "../../data/faq";

/** Minimalist SVG Hexagon Badge Accent */
function HexIcon({ active }: { active: boolean }) {
  return (
    <motion.svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-all duration-300"
    >
      <polygon
        points="7,1 13,4.5 13,11.5 7,15 1,11.5 1,4.5"
        stroke="#EB0028"
        strokeWidth="1.2"
        fill={active ? "#EB0028" : "none"}
        fillOpacity={active ? "0.2" : "0"}
      />
    </motion.svg>
  );
}

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="w-full space-y-3.5 font-['Helvetica',sans-serif]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              borderColor: isOpen ? "rgba(235, 0, 40, 0.5)" : "rgba(235, 0, 40, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-xs border bg-black/60 backdrop-blur-sm transition-colors hover:border-[#EB0028]/50"
          >
            {/* Top-Right Background Hexagon Watermark */}
            <svg
              className="absolute -top-3 -right-3 w-16 h-16 text-[#EB0028]/5 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
            </svg>

            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-3.5">
                <HexIcon active={isOpen} />
                <span className="font-['Helvetica',sans-serif] text-base sm:text-lg font-bold text-white group-hover:text-[#EB0028] transition-colors tracking-tight">
                  {item.question}
                </span>
              </div>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-[#EB0028] ml-4"
              >
                <Plus size={20} aria-hidden />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  {/* Subtle Gradient Red Separator Line with generous spacing */}
                  <div className="mx-5 my-1 h-[1px] w-auto bg-gradient-to-r from-[#EB0028]/40 via-[#EB0028]/10 to-transparent" />

                  <div className="px-5 pt-3 pb-6 text-zinc-300 font-['Inter',sans-serif] font-light text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}