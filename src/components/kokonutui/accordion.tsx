import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "../../data/faq";

/** A single-open-at-a-time accordion, styled in Helvetica with micro-interaction animations. */
export function Accordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="w-full space-y-3 font-['Helvetica',sans-serif]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              borderColor: isOpen ? "rgba(235, 0, 40, 0.6)" : "rgba(235, 0, 40, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            className="group overflow-hidden rounded-xs border bg-black/60 backdrop-blur-sm transition-colors hover:border-[#EB0028]/60"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{
                    height: isOpen ? "18px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-0.5 bg-[#EB0028] inline-block rounded-full"
                />
                <span className="font-['Helvetica',sans-serif] text-base sm:text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#EB0028] transition-colors">
                  {item.question}
                </span>
              </div>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-[#EB0028] ml-4"
              >
                <Plus size={22} aria-hidden />
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
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 text-zinc-300 font-['Inter',sans-serif] font-light text-sm sm:text-base leading-relaxed">
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