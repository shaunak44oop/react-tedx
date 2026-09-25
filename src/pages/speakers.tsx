import { motion } from "motion/react";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SpotlightButton } from "../components/kokonutui/spotlight-button";
import { Hexagon, ArrowRight, Mic, Sparkles } from "lucide-react";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

interface Speaker {
  id: string;
  name: string;
  role: string;
  talkTitle?: string;
  image: string;
  bio?: string;
}

const SPEAKERS: Speaker[] = [
  /* =================================================================
     GUEST SPEAKERS (PLACEHOLDERS — UNCOMMENT WHEN ANNOUNCED)
     =================================================================
  {
    id: "guest-1",
    name: "Guest Speaker 1",
    role: "Keynote Speaker",
    talkTitle: "To Be Announced",
    image: "/speakers/guest1.jpg",
    bio: "Keynote speaker bio coming soon. Stay tuned for our full speaker lineup reveal for TEDxYouth@CHIREC 2026!",
  },
  {
    id: "guest-2",
    name: "Guest Speaker 2",
    role: "Keynote Speaker",
    talkTitle: "To Be Announced",
    image: "/speakers/guest2.jpg",
    bio: "Keynote speaker bio coming soon. Stay tuned for our full speaker lineup reveal for TEDxYouth@CHIREC 2026!",
  },
  ================================================================= */

  {
    id: "archit-khandelwal",
    name: "Archit Khandelwal",
    role: "Student Speaker",
    //talkTitle: "Reframing Modern Perspectives",
    image: "/speakers/archit.jpg",
    //bio: "Archit is a passionate student thinker driven by curiosity and innovation. Through his talk, he explores how young minds can navigate complex modern challenges with fresh perspectives. His insights challenge conventional wisdom and inspire actionable change.",
  },
  {
    id: "sreenidi-sriram",
    name: "Sreenidi Sriram",
    role: "Student Speaker",
    //talkTitle: "The Power of Expression",
    image: "/speakers/sreenidi.jpg",
    //bio: "Sreenidi focuses on the impact of youth expression and storytelling in shaping community culture. She delves into how communication bridges divides and fosters empathy across diverse audiences. Her passion for creative problem-solving highlights the transformative potential of original ideas.",
  },
  {
    id: "avirbhav-danamaraju",
    name: "Avirbhav Danamaraju",
    role: "Student Speaker",
    //talkTitle: "Innovating for Tomorrow",
    image: "/speakers/avirbhav.jpg",
    //bio: "Avirbhav investigates the intersection of technology, design, and human capability. He shares how critical thinking and iterative development empower students to turn ambitious concepts into reality. His talk emphasizes resilience, technological ethics, and continuous learning.",
  },
  {
    id: "meghna-daka",
    name: "Meghna Daka",
    role: "Student Speaker",
    //talkTitle: "Unlocking Emotional Leadership",
    image: "/speakers/meghna.jpg",
    //bio: "Meghna shares compelling insights into self-discovery, leadership, and emotional intelligence. She highlights how embracing vulnerability and personal growth can lead to profound leadership breakthroughs. Her narrative encourages peers to embrace unique journeys with confidence.",
  },
];

export function Speakers() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden font-['Inter',sans-serif] font-light relative selection:bg-[#EB0028] selection:text-white">
      <SharedSVGDefs />
      <AnimatedHexBackground />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-12 text-center z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <span className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-bold mb-4 flex items-center gap-2">
  
            VOICES OF TOMORROW

          </span>

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
              SPEAKERS
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-6 h-[1px] w-28 bg-[#EB0028] origin-center"
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed px-2 mx-auto">
            Meet the visionary student leaders and guest speakers taking the stage at TEDxYouth@CHIREC 2026.
          </p>
        </Reveal>
      </section>

      {/* SPEAKERS GRID SECTION */}
      <section className="relative z-10 px-4 sm:px-8 md:px-12 pb-28 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10" stagger={0.08}>
            {SPEAKERS.map((speaker) => (
              <motion.div
                key={speaker.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-6 sm:p-8 hover:border-[#EB0028] hover:shadow-[0_0_30px_rgba(235,0,40,0.2)] transition-all overflow-hidden backdrop-blur-md flex flex-col justify-between"
              >
                {/* Corner Accents */}
                <span className="absolute -top-1 -left-1 text-[#EB0028] text-[10px] font-mono z-20 opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -top-1 -right-1 text-[#EB0028] text-[10px] font-mono z-20 opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-1 -left-1 text-[#EB0028] text-[10px] font-mono z-20 opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-1 -right-1 text-[#EB0028] text-[10px] font-mono z-20 opacity-40 group-hover:opacity-100 transition-opacity">+</span>

                {/* Top Section: Photo & Header */}
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                    {/* Speaker Image Frame */}
                    <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 rounded-xs border border-white/10 bg-[#0c0c10] overflow-hidden group-hover:border-[#EB0028]/60 transition-colors">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/tedx-logo.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Floating Hex Icon badge */}
                      <div className="absolute bottom-2 right-2 h-7 w-7 rounded-xs bg-black/90 border border-[#EB0028] flex items-center justify-center text-[#EB0028]">
                        <Hexagon className="w-4 h-4 fill-[#EB0028]/20 stroke-[#EB0028]" />
                      </div>
                    </div>

                    {/* Speaker Name & Title */}
                    <div className="flex flex-col text-center sm:text-left justify-center pt-1">
                      <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start font-['Helvetica',sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-[#EB0028] mb-1.5">
                        <Mic className="w-3 h-3" />
                        {speaker.role}
                      </span>

                      <h2 className="font-['Helvetica',sans-serif] text-2xl sm:text-3xl font-black uppercase text-white tracking-wide group-hover:text-[#EB0028] transition-colors leading-tight mb-2">
                        {speaker.name}
                      </h2>

                      {speaker.talkTitle && (
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xs w-fit mx-auto sm:mx-0">
                          <Sparkles className="w-3.5 h-3.5 text-[#EB0028] shrink-0" />
                          <span className="truncate max-w-[220px]">{speaker.talkTitle}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#EB0028]/30 to-transparent my-4" />

                  {/* Speaker Bio */}
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative z-10 border-t border-[#EB0028]/40 bg-gradient-to-b from-[#180509] via-[#0d0205] to-black backdrop-blur-md px-4 sm:px-8 py-16 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-['Helvetica',sans-serif] font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Reserve Your Seat for the Event
          </h2>

          <div className="pt-2">
            <SpotlightButton href="https://forms.cloud.microsoft/e/pPZzzULCnr"
              className="group relative inline-flex items-center justify-center gap-3 rounded-xs border border-[#EB0028] bg-[#EB0028] hover:bg-[#c00020] px-8 py-4 text-white font-['Helvetica',sans-serif] font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(235,0,40,0.35)] hover:shadow-[0_0_35px_rgba(235,0,40,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Reserve Your Seat</span>
                <Hexagon className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300 fill-white/20 stroke-[1.75]" />
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </SpotlightButton>
          </div>
        </div>
      </section>
    </div>
  );
}