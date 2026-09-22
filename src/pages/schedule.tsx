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
        </Reveal>
      </section>

      {/* CENTERED ALTERNATING BEANSTALK TIMELINE */}
      <section className="relative z-10 px-4 sm:px-8 pb-24">
        <div className="max-w-4xl mx-auto relative">
          {/* Central Trunk Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-[#EB0028]/40" />

          <RevealGroup className="space-y-6 sm:space-y-8 relative" stagger={0.04}>
            {SCHEDULE_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="relative flex items-center w-full"
                >
                  {/* Solid Center Node (No Glow) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black border-2 border-[#EB0028] z-20" />

                  {/* Alternating Row */}
                  <div className={`w-full flex ${isEven ? "justify-start pr-5 sm:pr-10 md:pr-14" : "justify-end pl-5 sm:pl-10 md:pl-14"}`}>
                    <div
                      className={`w-[calc(50%-0.75rem)] sm:w-[calc(50%-1.5rem)] rounded-xs border p-3.5 sm:p-5 backdrop-blur-md ${
                        item.isBreak
                          ? "border-[#EB0028]/60 bg-[#EB0028]/10"
                          : "border-zinc-800 bg-black/90 hover:border-[#EB0028]/50"
                      }`}
                    >
                      <div className={`flex flex-col ${isEven ? "items-end text-right" : "items-start text-left"} gap-1.5 sm:gap-2`}>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-bold text-[#EB0028]">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>

                        <div className={`flex items-center gap-2.5 ${isEven ? "flex-row-reverse" : "flex-row"}`}>
                          <div className="inline-flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20">
                            <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </div>

                          <h3 className="font-['Helvetica',sans-serif] text-xs sm:text-base font-bold text-white uppercase tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 border-t border-zinc-800 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-16 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-['Helvetica',sans-serif] font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Reserve Your Seat for the Event
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