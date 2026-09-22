import { Reveal } from "../components/kokonutui/reveal";
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
  { id: "1", time: "3:00 PM", title: "Registrations open.", icon: DoorOpen },
  { id: "2", time: "3:45 PM", title: "Doors close.", icon: Clock },
  { id: "3", time: "4:00 - 4:25 PM", title: "Opening ceremony.", icon: Hexagon },
  { id: "4", time: "4:30 - 4:50 PM", title: "Guest speaker 1.", icon: Mic },
  { id: "5", time: "4:50 - 5:10 PM", title: "Archit Khandelwal.", icon: Mic },
  { id: "6", time: "5:10 - 5:30 PM", title: "Sreenidi Sriram.", icon: Mic },
  { id: "7", time: "5:30 - 6:00 PM", title: "Refreshments and high tea.", icon: Coffee, isBreak: true },
  { id: "8", time: "6:00 - 6:20 PM", title: "Guest speaker 2.", icon: Mic },
  { id: "9", time: "6:20 - 6:40 PM", title: "Avirbhav Danamaraju.", icon: Mic },
  { id: "10", time: "6:40 - 6:55 PM", title: "Meghna Daka.", icon: Mic },
  { id: "11", time: "6:55 - 7:00 PM", title: "Closing and National Anthem.", icon: Flag },
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
            <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#EB0028] font-semibold">
              Saturday • October 3, 2026
            </span>
          </div>

          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full mx-auto overflow-hidden">
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <h1 className="font-['Helvetica',sans-serif] text-[clamp(32px,6vw,64px)] font-bold text-[#EB0028] tracking-tight py-1">
              Event Schedule
            </h1>
          </div>

          <div className="my-6 h-[1px] w-28 bg-[#EB0028] origin-center" />
        </Reveal>
      </section>

      {/* STABLE BEANSTALK TIMELINE WITH CENTRAL NODES & RECTANGULAR CARDS */}
      <section className="relative z-10 px-4 sm:px-8 pb-28">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Solid Center Beanstalk Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#EB0028]/20 via-[#EB0028]/50 to-[#EB0028]/20" />

          <div className="space-y-8 sm:space-y-10 relative">
            {SCHEDULE_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center w-full"
                >
                  {/* STATIC CENTRAL TIME NODE (NO GLITCH) */}
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20 mb-3 md:mb-0">
                    <div className="px-3.5 py-1.5 bg-black border border-[#EB0028]/80 rounded-xs shadow-md">
                      <span className="font-mono text-xs font-semibold text-[#EB0028] tracking-wider whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  {/* ALTERNATING RECTANGULAR CARDS */}
                  <div className={`w-full flex ${isEven ? "md:justify-start md:pr-16" : "md:justify-end md:pl-16"}`}>
                    <div
                      className={`group relative w-full md:w-[calc(50%-2rem)] p-5 rounded-xs border transition-colors duration-200 overflow-hidden ${
                        item.isBreak
                          ? "bg-[#EB0028]/10 border-[#EB0028]/60 hover:bg-[#EB0028]/15"
                          : "bg-black/90 border-zinc-800 hover:border-[#EB0028]/60 hover:bg-zinc-950"
                      }`}
                    >
                      {/* HEXAGON ELEMENT ANIMATING INSIDE CARD ON HOVER */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <Hexagon className="w-10 h-10 text-[#EB0028] stroke-[1.25] transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-45" />
                      </div>

                      <div className={`flex items-center gap-3.5 ${isEven ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"}`}>
                        {/* Icon Container */}
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xs bg-[#EB0028]/10 text-[#EB0028] border border-[#EB0028]/30">
                          <IconComponent className="h-4 w-4" />
                        </div>

                        {/* Title Text */}
                        <h3 className="font-['Helvetica',sans-serif] text-sm sm:text-base font-normal text-zinc-200 group-hover:text-white transition-colors pr-6 md:pr-0">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 border-t border-zinc-800/80 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-16 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-['Helvetica',sans-serif] font-bold text-xl sm:text-2xl text-white tracking-tight">
            Reserve your seat for the event
          </h2>
          
          <div className="pt-2">
            <SpotlightButton 
              to="/register" 
              className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-black px-8 py-3.5 text-white font-['Helvetica',sans-serif] font-medium text-sm tracking-widest uppercase transition-colors hover:bg-[#EB0028]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Reserve your seat</span>
                <Hexagon className="w-4 h-4 text-[#EB0028] group-hover:text-white transition-colors fill-[#EB0028]/20 group-hover:fill-white/20 stroke-[1.75]" />
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </SpotlightButton>
          </div>
        </div>
      </section>
    </div>
  );
}