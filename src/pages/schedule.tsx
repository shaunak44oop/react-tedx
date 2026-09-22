import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, Clock, Hexagon, ArrowRight, Coffee, Mic, Flag, DoorOpen } from "lucide-react";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  icon: any;
  isBreak?: boolean;
}

const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: "1",
    time: "3:00 PM",
    title: "Registrations Open",
    subtitle: "Attendee check-in and welcome desk opens",
    icon: DoorOpen,
  },
  {
    id: "2",
    time: "3:45 PM",
    title: "Doors Close",
    subtitle: "Registration and entry closes",
    icon: Clock,
  },
  {
    id: "3",
    time: "4:00 - 4:25 PM",
    title: "Opening Ceremony",
    subtitle: "Welcome address & theme introduction",
    icon: Hexagon,
  },
  {
    id: "4",
    time: "4:30 - 4:50 PM",
    title: "Guest Speaker",
    subtitle: "Speaker 1",
    icon: Mic,
  },
  {
    id: "5",
    time: "4:50 - 5:10 PM",
    title: "Archit Khandelwal",
    subtitle: "Speaker 2",
    icon: Mic,
  },
  {
    id: "6",
    time: "5:10 - 5:30 PM",
    title: "Sreenidi Sriram",
    subtitle: "Speaker 3",
    icon: Mic,
  },
  {
    id: "7",
    time: "5:30 - 6:00 PM",
    title: "Refreshments & High Tea",
    subtitle: "Networking break & interactive stalls",
    icon: Coffee,
    isBreak: true,
  },
  {
    id: "8",
    time: "6:00 - 6:20 PM",
    title: "Guest Speaker",
    subtitle: "Speaker 4",
    icon: Mic,
  },
  {
    id: "9",
    time: "6:20 - 6:40 PM",
    title: "Avirbhav Danamaraju",
    subtitle: "Speaker 5",
    icon: Mic,
  },
  {
    id: "10",
    time: "6:40 - 6:55 PM",
    title: "Meghna Daka",
    subtitle: "Speaker 6",
    icon: Mic,
  },
  {
    id: "11",
    time: "6:55 - 7:00 PM",
    title: "Closing & National Anthem",
    subtitle: "Concluding remarks followed by the National Anthem",
    icon: Flag,
  },
];

export function Schedule() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative selection:bg-[#EB0028] selection:text-white">
      <SharedSVGDefs />
      <AnimatedHexBackground />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-16 text-center z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <div className="inline-flex items-center gap-2 border border-[#EB0028]/30 bg-[#EB0028]/10 px-4 py-1.5 rounded-xs mb-6">
            <Calendar className="w-4 h-4 text-[#EB0028]" />
            <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EB0028] font-bold">
              SATURDAY • OCTOBER 3, 2026
            </span>
          </div>

          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full mx-auto shadow-[0_0_60px_rgba(235,0,40,0.15)] hover:border-[#EB0028] hover:shadow-[0_0_80px_rgba(235,0,40,0.3)] transition-all duration-500 overflow-hidden">
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

          <p className="max-w-[56ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-4 mx-auto z-10">
            Doors open at 15:00 IST. Fast-paced talks interspersed with networking breaks and interactive exhibits.
          </p>
        </Reveal>
      </section>

      {/* CONTINUOUS LINEAR TIMELINE */}
      <section className="relative z-10 px-4 sm:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <RevealGroup className="relative border-l-2 border-[#EB0028]/30 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-6" stagger={0.05}>
            {SCHEDULE_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-5 h-4 w-4 rounded-full bg-black border-2 border-[#EB0028] group-hover:scale-125 group-hover:bg-[#EB0028] transition-all duration-300 shadow-[0_0_10px_rgba(235,0,40,0.5)] z-10" />

                  {/* Desktop Left Time Stamp */}
                  <div className="hidden sm:block absolute -left-36 top-4 w-24 text-right font-mono text-xs font-bold text-[#EB0028] tracking-wider">
                    {item.time}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`rounded-xs border p-5 sm:p-6 transition-all duration-300 backdrop-blur-md ${
                      item.isBreak
                        ? "border-[#EB0028]/50 bg-[#EB0028]/10 hover:border-[#EB0028]"
                        : "border-zinc-800/80 bg-black/80 hover:border-[#EB0028]/60"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20">
                          <IconComponent className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-['Helvetica',sans-serif] text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-0.5">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Mobile Time Stamp */}
                      <div className="sm:hidden self-start">
                        <span className="inline-flex items-center gap-1.5 rounded-xs border border-[#EB0028]/30 bg-[#EB0028]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#EB0028]">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
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
      <section className="relative z-10 border-t border-zinc-800/80 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-20 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-['Helvetica',sans-serif] font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Reserve Your Seat for the Event
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md">
            Join us on October 3, 2026, at CHIREC Kondapur Campus for an insightful afternoon of ideas worth spreading.
          </p>
          
          <div className="pt-2">
            <SpotlightButton 
              to="/register" 
              className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-black px-8 py-4 text-white font-['Helvetica',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#EB0028] hover:shadow-[0_0_30px_rgba(235,0,40,0.4)]"
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