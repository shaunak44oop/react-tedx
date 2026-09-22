import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Calendar, Clock, Hexagon, ArrowRight, Coffee, Mic, Flag, DoorOpen } from "lucide-react";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

// Structured Schedule Data with Sections
interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  category: "arrival" | "ceremony" | "speaker" | "break" | "closing";
  icon: any;
}

interface ScheduleSection {
  sectionTitle: string;
  items: ScheduleItem[];
}

const SCHEDULE_DATA: ScheduleSection[] = [
  {
    sectionTitle: "Venue Arrival",
    items: [
      {
        id: "arr-1",
        time: "3:00 PM",
        title: "Registrations Open",
        subtitle: "Registrations for attendees open",
        category: "arrival",
        icon: DoorOpen,
      },
      {
        id: "arr-2",
        time: "3:45 PM",
        title: "Doors Close",
        subtitle: "Registrations and entry closes",
        category: "arrival",
        icon: Clock,
      },
    ],
  },
  {
    sectionTitle: "Event Begins",
    items: [
      {
        id: "cer-1",
        time: "4:00 - 4:25 PM",
        title: "Opening Ceremony",
        subtitle: "Welcome address & theme introduction",
        category: "ceremony",
        icon: Hexagon,
      },
    ],
  },
  {
    sectionTitle: "Speaker Sessions — Part 1",
    items: [
      {
        id: "spk-1",
        time: "4:30 - 4:50 PM",
        title: "Guest Speaker",
        subtitle: "Speaker 1",
        category: "speaker",
        icon: Mic,
      },
      {
        id: "spk-2",
        time: "4:50 - 5:10 PM",
        title: "Archit Khandelwal",
        subtitle: "Speaker 2",
        category: "speaker",
        icon: Mic,
      },
      {
        id: "spk-3",
        time: "5:10 - 5:30 PM",
        title: "Sreenidi Sriram",
        subtitle: "Speaker 3",
        category: "speaker",
        icon: Mic,
      },
    ],
  },
  {
    sectionTitle: "High Tea Break",
    items: [
      {
        id: "brk-1",
        time: "5:30 - 6:00 PM",
        title: "Refreshments & High Tea",
        subtitle: "Networking break & interactive stalls",
        category: "break",
        icon: Coffee,
      },
    ],
  },
  {
    sectionTitle: "Speaker Sessions — Part 2",
    items: [
      {
        id: "spk-4",
        time: "6:00 - 6:20 PM",
        title: "Guest Speaker",
        subtitle: "Speaker 4",
        category: "speaker",
        icon: Mic,
      },
      {
        id: "spk-5",
        time: "6:20 - 6:40 PM",
        title: "Avirbhav Danamaraju",
        subtitle: "Speaker 5",
        category: "speaker",
        icon: Mic,
      },
      {
        id: "spk-6",
        time: "6:40 - 6:55 PM",
        title: "Meghna Daka",
        subtitle: "Speaker 6",
        category: "speaker",
        icon: Mic,
      },
    ],
  },
  {
    sectionTitle: "Closing",
    items: [
      {
        id: "cls-1",
        time: "6:55 - 7:00 PM",
        title: "Closing & National Anthem",
        subtitle: "Concluding remarks followed by the National Anthem",
        category: "closing",
        icon: Flag,
      },
    ],
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

          {/* UNIFIED HERO BOX WITH CORNER ACCENTS */}
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

      {/* TIMELINE SECTION */}
      <section className="relative z-10 px-4 sm:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          {SCHEDULE_DATA.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-14 last:mb-0">
              {/* SECTION HEADER BADGE */}
              <Reveal className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 bg-[#EB0028] rounded-full shadow-[0_0_8px_#EB0028]" />
                <h2 className="font-['Helvetica',sans-serif] text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#EB0028]">
                  {section.sectionTitle}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#EB0028]/40 to-transparent ml-2" />
              </Reveal>

              {/* SECTION ITEMS GRID */}
              <RevealGroup className="grid gap-4" stagger={0.06}>
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      variants={staggerItem}
                      className="group relative rounded-xs border border-zinc-800 bg-black/80 p-5 sm:p-6 hover:border-[#EB0028]/60 transition-all cursor-default overflow-hidden backdrop-blur-md"
                    >
                      {/* SLIDING TOP-RIGHT CORNER HEXAGON */}
                      <div className="absolute top-4 right-4 text-[#EB0028] opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20">
                        <Hexagon className="w-5 h-5 fill-[#EB0028]/20 stroke-[1.75]" />
                      </div>

                      {/* SLIDING BACKGROUND HEXAGON WATERMARK */}
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 text-[#EB0028]/10 group-hover:text-[#EB0028]/25 opacity-30 group-hover:opacity-100 transform translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none z-0">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current stroke-[1.2]">
                          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                          <polygon points="50,15 82,33 82,67 50,85 18,67 18,33" strokeDasharray="4 2" />
                        </svg>
                      </div>

                      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center gap-4">
                          {/* ICON BOX */}
                          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/20 group-hover:scale-105 transition-transform duration-300">
                            <IconComponent className="h-5 h-5" />
                          </div>

                          <div>
                            <h3 className="font-['Helvetica',sans-serif] text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                              {item.title}
                            </h3>
                            {item.subtitle && (
                              <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-0.5">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* TIME BADGE */}
                        <div className="self-start sm:self-auto shrink-0">
                          <span className="inline-flex items-center gap-2 rounded-xs border border-[#EB0028]/30 bg-[#EB0028]/10 px-3 py-1.5 font-mono text-xs font-bold text-[#EB0028] tracking-wider group-hover:border-[#EB0028]/60 group-hover:bg-[#EB0028]/20 transition-all">
                            <Clock className="w-3.5 h-3.5" />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </RevealGroup>
            </div>
          ))}
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