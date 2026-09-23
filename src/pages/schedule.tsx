import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, Clock, Hexagon, ArrowRight, Coffee, Mic, Flag, DoorOpen } from "lucide-react";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  icon: any;
  isBreak?: boolean;
}

const SCHEDULE_ITEMS: ScheduleItem[] = [
  { id: "1", time: "3:00 PM", title: "Registrations Open", icon: DoorOpen },
  { id: "2", time: "3:45 PM", title: "Doors Close", icon: Clock },
  { id: "3", time: "4:00 - 4:25 PM", title: "Opening Ceremony", icon: Hexagon },
  { id: "4", time: "4:30 - 4:50 PM", title: "Guest Speaker 1", icon: Mic },
  { id: "5", time: "4:50 - 5:10 PM", title: "Archit Khandelwal", icon: Mic },
  { id: "6", time: "5:10 - 5:30 PM", title: "Sreenidi Sriram", icon: Mic },
  { id: "7", time: "5:30 - 6:00 PM", title: "Refreshments & High Tea", icon: Coffee, isBreak: true },
  { id: "8", time: "6:00 - 6:20 PM", title: "Guest Speaker 2", icon: Mic },
  { id: "9", time: "6:20 - 6:40 PM", title: "Avirbhav Danamaraju", icon: Mic },
  { id: "10", time: "6:40 - 6:55 PM", title: "Meghna Daka", icon: Mic },
  { id: "11", time: "6:55 - 7:00 PM", title: "Closing & National Anthem", icon: Flag },
];

export function Schedule() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative selection:bg-[#EB0028] selection:text-white">
      <SharedSVGDefs />
      <AnimatedHexBackground />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-12 text-center z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <div className="inline-flex items-center gap-2 border border-[#EB0028]/30 bg-[#EB0028]/10 px-4 py-1.5 rounded-xs mb-6">
            <Calendar className="w-4 h-4 text-[#EB0028]" />
            <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EB0028] font-bold">
              SATURDAY • OCTOBER 3, 2026
            </span>
          </div>

          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full mx-auto overflow-hidden">
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-['Helvetica',sans-serif] text-[clamp(36px,7vw,72px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
            >
              EVENT SCHEDULE
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-6 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 mx-auto z-10">
            Doors open at 3:00 PM. <br />Six talks across two sessions, with a high tea break in between.
          </p>
        </Reveal>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative z-10 px-4 sm:px-8 py-14">
        <RevealGroup className="relative mx-auto max-w-[760px] flex flex-col items-center w-full" stagger={0.05}>
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-2 bottom-32 left-1/2 w-[1px] bg-[#EB0028]/30 -translate-x-1/2 z-0" aria-hidden />

          {schedule.map((item, index) => {
            const showSection =
              item.section && item.section !== schedule[index - 1]?.section;

            return (
              <div key={item.id} className="w-full flex flex-col items-center">
                {/* Section Header — equal space above and below */}
                {showSection && (
                  <motion.div
                    variants={staggerItem}
                    className="relative z-20 py-10 first:pt-0"
                  >
                    <h2 className="font-['Helvetica',sans-serif] text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#EB0028] bg-[#050507] px-4">
                      {item.section}
                    </h2>
                  </motion.div>
                )}

                <motion.div
                  variants={staggerItem}
                  className="relative pb-14 w-full flex flex-col items-center text-center z-10 group"
                >
                  {/* Hexagonal Center Node */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-[#050507] p-1 z-20">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#EB0028] fill-black group-hover:scale-125 transition-transform duration-300">
                      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Timeline Card */}
                  <div className="pt-8 flex flex-col items-center max-w-lg w-full bg-[#0b0b0f] border border-[#EB0028]/20 group-hover:border-[#EB0028]/60 p-6 rounded-xs transition-all duration-300 backdrop-blur-xs relative overflow-hidden">
                    <svg viewBox="0 0 50 50" className="absolute -bottom-4 -right-4 w-20 h-20 text-[#EB0028] opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
                      <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
                    </svg>

                    <span className="mb-2 block font-['Helvetica',sans-serif] text-xs font-mono tracking-[0.15em] text-[#EB0028] font-bold z-10">
                      {item.time}
                    </span>
                    <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl font-bold text-white z-10">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="mt-4 inline-block rounded-xs border border-[#EB0028]/40 px-3 py-1 font-['Helvetica',sans-serif] text-[10px] uppercase tracking-[0.2em] text-[#EB0028] bg-black/60 font-semibold z-10">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </RevealGroup>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 border-t border-[#EB0028]/30 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-20 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Save your spot for the day
          </h2>
          
          <div className="pt-2">
            <SpotlightButton 
              to="/register" 
              className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-black px-8 py-4 text-white font-['Helvetica',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-colors hover:bg-[#EB0028]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Reserve Your Seat</span>
                <Hexagon className="w-4 h-4 text-[#EB0028] group-hover:text-white transition-colors fill-[#EB0028]/20 group-hover:fill-white/20 stroke-[1.75]" />
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </SpotlightButton>
          </div>
        </div>
      </section>
    </div>
  );
}