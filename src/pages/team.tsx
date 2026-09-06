import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";

// Shared SVG Definitions for geometric patterns & hex nodes
const TeamSVGDefs = memo(function TeamSVGDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        {/* Diagonal Lines Pattern */}
        <pattern id="pattern-diagonal" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
        
        {/* Hexagon Node Pattern for Cards */}
        <g id="shape-hex-node">
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

// Single Team Member Card
function MemberCard({ member, onSelect }: { member: TeamMember; onSelect: (m: TeamMember) => void }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(member)}
      className="group relative rounded-xs border border-[#EB0028]/30 bg-black/80 p-3.5 hover:border-[#EB0028] transition-all cursor-pointer overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(235,0,40,0.25)]"
    >
      {/* Hex Node shape pushing in from corner on hover (Matching Home Page) */}
      <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-28 h-28 text-[#EB0028] opacity-0 group-hover:opacity-30 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
        <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
      </svg>

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-[#EB0028]/20 bg-[#0c0c10] z-10">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/tedx-logo.png";
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        
        <div className="absolute bottom-4 left-0 right-0 text-center z-20 transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-block rounded-xs border border-[#EB0028] bg-[#EB0028]/20 px-4 py-1.5 font-['Helvetica',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            View Profile
          </span>
        </div>
      </div>

      <div className="pt-4 pb-2 px-1 text-center z-10 relative">
        <h3 className="font-['Helvetica',sans-serif] text-base sm:text-lg font-bold text-white mb-1 uppercase tracking-wide group-hover:text-[#EB0028] transition-colors">
          {member.name}
        </h3>
        <p className="font-mono text-xs text-[#EB0028] font-semibold tracking-wider uppercase">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const categories = Array.from(new Set(teamMembers.map((m) => m.category)));

  return (
    <div className="min-h-screen text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative">
      <TeamSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-16 text-center z-10">
        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-xs border border-[#EB0028]/60 bg-black/80 backdrop-blur-md text-[11px] uppercase tracking-[0.35em] text-[#EB0028] font-mono mb-8 font-semibold relative overflow-hidden group">
            BEHIND THE STAGE
          </div>

          {/* MAIN HERO BOX (Matching Home Page Styling) */}
          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-3xl w-full shadow-[0_0_60px_rgba(235,0,40,0.2)] hover:border-[#EB0028] hover:shadow-[0_0_80px_rgba(235,0,40,0.3)] transition-all duration-500 overflow-hidden">
            
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <div className="flex flex-col items-center leading-none relative z-10">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.45em" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] font-light text-xs sm:text-base uppercase text-zinc-400 mb-2"
              >
                OUR
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(36px,8vw,80px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
              >
                MEET THE TEAM
              </motion.h1>
            </div>
          </div>

          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-8 h-[1px] w-28 bg-[#EB0028] origin-center" 
          />

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-4 relative z-10">
            The student team working behind the scenes to plan, organize, and execute TEDxYouth@CHIREC 2026.
          </p>
        </Reveal>
      </section>

      {/* CORE TEAM DEPARTMENTS GRID (Direct Layout) */}
      <section className="relative z-10 px-4 sm:px-8 md:px-12 pb-32">
        <div className="mx-auto max-w-7xl space-y-16">
          {categories.map((category) => {
            const members = teamMembers.filter((m) => m.category === category);
            return (
              <div key={category} className="relative">
                {/* Department Header */}
                <div className="mb-8 border-b border-[#EB0028]/30 pb-4 flex items-center justify-between">
                  <h2 className="font-['Helvetica',sans-serif] text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-white flex items-center gap-3">
                    <span className="h-4 w-1 bg-[#EB0028] inline-block" />
                    {category}
                  </h2>
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                    {members.length} {members.length === 1 ? "Member" : "Members"}
                  </span>
                </div>

                {/* Member Grid - Responsive from 1 col on mobile up to 4 cols on desktop */}
                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" stagger={0.08}>
                  {members.map((member) => (
                    <MemberCard key={member.id} member={member} onSelect={setSelectedMember} />
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEMBER BIO MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-xs border border-[#EB0028]/50 bg-[#0c0c10] p-6 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(235,0,40,0.25)] max-h-[90vh] overflow-y-auto"
            >
              {/* Corner Plus Accents */}
              <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 rounded-xs border border-[#EB0028]/40 bg-black/80 p-2 text-[#EB0028] hover:bg-[#EB0028] hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start mt-2">
                {/* Profile Image */}
                <div className="w-full sm:w-60 md:w-64 flex-shrink-0 aspect-[3/4] rounded-xs border border-[#EB0028]/30 overflow-hidden bg-black shadow-2xl relative">
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
                <div className="flex flex-col justify-center text-center sm:text-left w-full py-1">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">
                    {selectedMember.category}
                  </span>
                  <h3 className="font-['Helvetica',sans-serif] text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#EB0028]">
                    {selectedMember.role}
                  </p>

                  <div className="my-5 h-[1px] w-16 bg-[#EB0028] mx-auto sm:mx-0" />

                  <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
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