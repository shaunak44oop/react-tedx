import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";
import { Reveal } from "../components/kokonutui/reveal";

// Background honeycomb pattern
const TeamSVGDefs = memo(function TeamSVGDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="team-pattern-hex" width="26" height="45" patternUnits="userSpaceOnUse">
          <path d="M13 0 L26 7.5 L26 22.5 L13 30 L0 22.5 L0 7.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M13 30 L26 37.5 L26 52.5 L13 60 L0 52.5 L0 37.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
    </svg>
  );
});

// Accordion Component for Departments
function DepartmentSection({ 
  category, 
  members, 
  defaultOpen = false,
  onSelectMember 
}: { 
  category: string; 
  members: TeamMember[]; 
  defaultOpen?: boolean;
  onSelectMember: (m: TeamMember) => void;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 rounded-2xl border border-brand/30 bg-ink/40 overflow-hidden transition-colors hover:border-brand/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-6 sm:px-8 sm:py-7 bg-ink/80 backdrop-blur-sm transition-colors hover:bg-brand/5"
      >
        <h2 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">
          {category}
        </h2>
        <div className={`p-2.5 rounded-xl border border-brand/30 bg-ink transition-transform duration-300 ${isOpen ? "rotate-180 border-brand bg-brand/10 text-brand" : "text-white"}`}>
          <ChevronDown size={22} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand/20 bg-ink/20"
          >
            <div className="px-4 py-8 sm:px-8 sm:py-10 flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
              {members.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => onSelectMember(member)}
                  className="group relative w-full sm:w-[280px] md:w-[310px] cursor-pointer bg-ink/80 border border-brand/30 p-3.5 rounded-2xl transition-all duration-300 hover:border-brand hover:shadow-[0_0_30px_rgba(235,0,40,0.2)] backdrop-blur-sm"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-brand/20 bg-ink">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image path fails to load
                        (e.target as HTMLImageElement).src = "/tedx-logo.png";
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                    
                    <div className="absolute bottom-5 left-0 right-0 text-center z-10 transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-block rounded-lg border border-brand bg-brand/20 px-5 py-2 font-['Helvetica',sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        View Profile
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <h3 className="font-['Helvetica',sans-serif] text-[18px] font-bold text-white mb-1 uppercase tracking-wide">{member.name}</h3>
                    <p className="font-sans text-xs text-brand font-semibold tracking-wider uppercase">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const categories = Array.from(new Set(teamMembers.map((m) => m.category)));

  return (
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light relative">
      <TeamSVGDefs />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-[150px] pb-16 text-center z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            Behind the stage
          </p>

          <div className="group relative border border-brand/40 bg-ink/90 p-8 sm:p-12 backdrop-blur-md rounded-2xl my-2 max-w-3xl w-full mx-auto overflow-hidden transition-colors hover:border-brand shadow-[0_0_50px_rgba(235,0,40,0.15)]">
            
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 text-brand opacity-5 pointer-events-none z-0">
              <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#team-pattern-hex)" /></svg>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 font-['Helvetica',sans-serif] text-[clamp(36px,6.5vw,72px)] font-black uppercase text-brand tracking-tight leading-none"
            >
              Meet The Team
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[2px] bg-brand/60 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6 mx-auto">
            The student team working behind the scenes to plan, organize, and execute TEDxYouth@CHIREC 2026.
          </p>
        </Reveal>
      </section>

      {/* Categories Accordion Section */}
      <section className="relative z-10 px-4 sm:px-8 pb-32">
        <div className="mx-auto max-w-5xl">
          {categories.map((category, idx) => {
            const members = teamMembers.filter((m) => m.category === category);
            return (
              <DepartmentSection 
                key={category} 
                category={category} 
                members={members} 
                defaultOpen={idx === 0}
                onSelectMember={setSelectedMember}
              />
            );
          })}
        </div>
      </section>

      {/* Bio Modal with Large Profile Image */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-ink/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-brand/40 bg-ink p-6 sm:p-8 md:p-10 shadow-[0_0_70px_rgba(235,0,40,0.2)] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-5 top-5 rounded-full border border-brand/40 bg-ink/80 p-2.5 text-brand hover:bg-brand hover:text-white transition-colors z-20"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
                
                {/* Large Profile Image */}
                <div className="w-full md:w-1/2 flex-shrink-0 aspect-[3/4] rounded-2xl border border-brand/30 overflow-hidden bg-ink shadow-2xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/tedx-logo.png";
                    }}
                  />
                </div>
                
                {/* Details Column */}
                <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2 py-2">
                  <h3 className="font-['Helvetica',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-['Helvetica',sans-serif] text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-brand">
                    {selectedMember.role}
                  </p>
                  
                  <div className="my-6 h-[2px] w-20 bg-brand/40 mx-auto md:mx-0" />
                  
                  <p className="text-base leading-relaxed text-white/80 font-light">
                    {selectedMember.bio || "Core team member for TEDxYouth@CHIREC 2026."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}