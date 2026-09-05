import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";
import { Reveal } from "../components/kokonutui/reveal";

// Shared SVGs for the angular/hexagonal theme
const TeamSVGDefs = memo(function TeamSVGDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="team-pattern-hex" width="26" height="45" patternUnits="userSpaceOnUse">
          <path d="M13 0 L26 7.5 L26 22.5 L13 30 L0 22.5 L0 7.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M13 30 L26 37.5 L26 52.5 L13 60 L0 52.5 L0 37.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
        <pattern id="team-pattern-diagonal" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
        <g id="team-shape-hex-node">
          <path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M45 35 L55 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5 35 L-5 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M25 5 L25 -5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="25" cy="5" r="3" fill="currentColor" />
          <circle cx="45" cy="35" r="3" fill="currentColor" />
          <circle cx="5" cy="35" r="3" fill="currentColor" />
        </g>
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
    <div className="mb-6 border border-brand/30 bg-ink/40 relative group overflow-hidden transition-colors hover:border-brand/60">
      {/* Decorative Corner Node on Dropdown Header */}
      <svg viewBox="0 0 50 50" className="absolute -top-4 -right-4 w-12 h-12 text-brand opacity-20 pointer-events-none z-0">
        <use href="#team-shape-hex-node" x="0" y="0" transform="scale(0.8)" />
      </svg>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10 sm:py-8 bg-ink/80 backdrop-blur-sm transition-colors hover:bg-brand/5"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-brand/60 hidden sm:inline-block">[{members.length} MEMBERS]</span>
          <h2 className="font-['Helvetica',sans-serif] text-xl sm:text-3xl font-bold uppercase tracking-widest text-white">
            {category}
          </h2>
        </div>
        <div className={`p-2 border border-brand/30 rounded-none bg-ink transition-transform duration-500 ${isOpen ? "rotate-180 border-brand bg-brand/10 text-brand" : "text-white"}`}>
          <ChevronDown size={24} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand/20 bg-ink/20"
          >
            <div className="px-4 py-12 sm:px-10 flex flex-wrap justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
              {members.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectMember(member)}
                  className="group relative w-full sm:w-[280px] md:w-[320px] cursor-pointer bg-ink border border-brand/30 p-3 transition-all duration-300 hover:border-brand hover:shadow-[0_0_30px_rgba(235,0,40,0.15)]"
                >
                  {/* Hex Node pushing in on hover */}
                  <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-24 h-24 text-brand opacity-0 group-hover:opacity-40 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-out pointer-events-none z-0">
                    <use href="#team-shape-hex-node" x="0" y="0" transform="scale(0.8)" />
                  </svg>

                  <div className="relative aspect-[3/4] w-full overflow-hidden border border-brand/20 bg-ink rounded-none">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                    />
                    
                    {/* Diagonal overlay on hover */}
                    <div className="absolute inset-0 text-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-overlay pointer-events-none">
                       <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#team-pattern-diagonal)" /></svg>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                    
                    <div className="absolute bottom-6 left-0 right-0 text-center z-10 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-block border border-brand bg-brand/10 px-5 py-2 font-['Helvetica',sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-brand backdrop-blur-md">
                        View Profile
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 text-center relative z-10 border-t border-brand/20 mt-3 bg-ink/80">
                    <h3 className="font-['Helvetica',sans-serif] text-[19px] font-bold text-white mb-1.5 uppercase tracking-wide">{member.name}</h3>
                    <p className="font-mono text-xs text-brand font-medium tracking-widest">{member.role}</p>
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
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-[160px] pb-20 text-center z-10">
        
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            Behind the stage
          </p>

          <div className="group relative border border-brand/40 bg-ink/90 p-8 sm:p-14 backdrop-blur-md rounded-none my-2 max-w-3xl w-full mx-auto overflow-hidden transition-colors hover:border-brand">
            
            {/* Hex Background */}
            <div className="absolute inset-0 text-brand opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-0">
              <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#team-pattern-hex)" /></svg>
            </div>

            {/* Angular Corners */}
            <span className="absolute -top-1.5 -left-1.5 text-brand text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-brand text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-brand text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-brand text-xs font-mono z-10">+</span>

            <motion.h1 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 font-['Helvetica',sans-serif] text-[clamp(40px,7vw,80px)] font-black uppercase text-brand tracking-tight leading-none"
            >
              Meet The Team
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-10 h-[2px] bg-brand/60 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-white/70 font-light leading-relaxed mb-8 mx-auto">
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
                defaultOpen={idx === 0} // Open the first department by default
                onSelectMember={setSelectedMember}
              />
            );
          })}
        </div>
      </section>

      {/* Angular Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl overflow-hidden border border-brand/50 bg-ink p-8 sm:p-12 shadow-[0_0_60px_rgba(235,0,40,0.15)] group"
            >
              {/* Modal Background Pattern */}
              <div className="absolute inset-0 text-brand opacity-5 pointer-events-none z-0">
                <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#team-pattern-diagonal)" /></svg>
              </div>

              {/* Close Button - Sharp & Square */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-6 top-6 border border-brand/40 bg-ink p-2.5 text-brand hover:bg-brand hover:text-ink transition-colors z-20"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start relative z-10">
                
                {/* Square Profile Image */}
                <div className="flex-shrink-0 w-48 sm:w-56 aspect-square border border-brand/40 overflow-hidden bg-ink p-2 relative">
                  {/* Corner accents */}
                  <span className="absolute -top-1 -left-1 text-brand text-[10px] font-mono">+</span>
                  <span className="absolute -bottom-1 -right-1 text-brand text-[10px] font-mono">+</span>
                  
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                
                <div className="flex flex-col text-center sm:text-left mt-2">
                  <span className="font-mono text-xs text-brand/60 mb-2 tracking-widest hidden sm:block">
                    // ID: {selectedMember.id.replace('-', '').toUpperCase()}
                  </span>
                  <h3 className="font-['Helvetica',sans-serif] text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-sm uppercase tracking-[0.15em] font-medium text-brand">
                    {selectedMember.role}
                  </p>
                  
                  <div className="my-6 h-[1px] w-full max-w-[120px] bg-brand/30 mx-auto sm:mx-0" />
                  
                  <p className="text-sm sm:text-base leading-relaxed text-white/70 font-light text-justify sm:text-left">
                    {selectedMember.bio}
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