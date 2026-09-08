import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";
import { Reveal, RevealGroup, staggerItem } from "../components/kokonutui/reveal";
import { SharedSVGDefs, AnimatedHexBackground } from "./home";

// Optimized Member Card component
const MemberCard = memo(function MemberCard({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: (m: TeamMember) => void;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => onSelect(member)}
      className="group relative rounded-xs border border-[#EB0028]/25 bg-black/80 p-3 hover:border-[#EB0028] transition-all cursor-pointer overflow-hidden touch-manipulation backdrop-blur-sm"
    >
      <svg viewBox="0 0 50 50" className="absolute -bottom-6 -right-6 w-24 h-24 text-[#EB0028] opacity-0 group-hover:opacity-25 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out pointer-events-none z-0">
        <use href="#shape-hex-node" x="0" y="0" transform="scale(0.8)" />
      </svg>

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-white/5 bg-[#0c0c10]">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/tedx-logo.png";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

        <div className="absolute bottom-3 left-0 right-0 text-center z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="inline-block rounded-xs border border-[#EB0028] bg-black/90 px-3 py-1 font-['Helvetica',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            View Profile
          </span>
        </div>
      </div>

      <div className="pt-3 pb-1 px-1 text-center relative z-10">
        <h3 className="font-['Helvetica',sans-serif] text-base sm:text-lg font-bold text-white mb-0.5 uppercase tracking-wide group-hover:text-[#EB0028] transition-colors">
          {member.name}
        </h3>
        <p className="font-['Helvetica',sans-serif] text-xs text-[#EB0028] font-semibold tracking-wider uppercase">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
});

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const categories = Array.from(new Set(teamMembers.map((m) => m.category)));

  return (
    <div className="min-h-screen text-white overflow-hidden font-['Inter',sans-serif] selection:bg-[#EB0028] selection:text-white relative bg-[#050507]">
      <SharedSVGDefs />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 pt-36 pb-14 text-center z-10">
        <AnimatedHexBackground />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#EB0028] font-mono font-semibold mb-6">
            BEHIND THE STAGE
          </p>

          {/* UNIFIED HERO BOX */}
          <div className="group relative border border-[#EB0028]/50 bg-black/80 backdrop-blur-md p-8 sm:p-12 rounded-xs my-2 max-w-2xl w-full mx-auto shadow-[0_0_60px_rgba(235,0,40,0.2)] hover:border-[#EB0028] hover:shadow-[0_0_80px_rgba(235,0,40,0.3)] transition-all duration-500 overflow-hidden">
            <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-10">+</span>

            <div className="flex flex-col items-center leading-none relative z-10">
              <motion.h1
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="font-['Helvetica',sans-serif] text-[clamp(32px,7vw,72px)] font-black uppercase text-[#EB0028] tracking-tight py-1"
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

          <p className="max-w-[54ch] text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-2 relative z-10 px-2">
            The student team working behind the scenes to plan, organize, and execute TEDxYouth@CHIREC 2026.
          </p>
        </Reveal>
      </section>

      {/* CORE TEAM DEPARTMENTS GRID */}
      <section className="relative z-10 px-4 sm:px-8 md:px-12 pb-28">
        <div className="mx-auto max-w-7xl space-y-12 sm:space-y-14">
          {categories.map((category) => {
            const members = teamMembers.filter((m) => m.category === category);
            return (
              <div key={category} className="relative">
                {/* Department Header */}
                <div className="mb-6 border-b border-[#EB0028]/30 pb-3">
                  <h2 className="font-['Helvetica',sans-serif] text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-white flex items-center gap-3">
                    <span className="h-4 w-1 bg-[#EB0028] inline-block" />
                    {category}
                  </h2>
                </div>

                {/* Member Grid */}
                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5" stagger={0.05}>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20 sm:p-6">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xs border border-[#EB0028]/50 bg-[#0c0c10] p-5 pt-12 sm:p-8 shadow-[0_0_50px_rgba(235,0,40,0.2)] max-h-[82dvh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Corner Plus Accents */}
              <span className="absolute -top-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[#EB0028] text-xs font-mono z-20">+</span>

              {/* Mobile-Optimized Exit Button */}
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Close profile modal"
                className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-xs border border-[#EB0028]/50 bg-black p-2.5 text-[#EB0028] hover:bg-[#EB0028] hover:text-white transition-colors z-30 touch-manipulation active:scale-95 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
                {/* Profile Image */}
                <div className="w-40 sm:w-56 flex-shrink-0 aspect-[3/4] rounded-xs border border-[#EB0028]/30 overflow-hidden bg-black relative">
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
                  <h3 className="font-['Helvetica',sans-serif] text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#EB0028]">
                    {selectedMember.role}
                  </p>

                  <div className="my-3 sm:my-4 h-[1px] w-12 bg-[#EB0028] mx-auto sm:mx-0" />

                  <p className="text-xs sm:text-base leading-relaxed text-zinc-300 font-light">
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