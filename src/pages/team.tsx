import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";
import { Reveal } from "../components/kokonutui/reveal";

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const categories = Array.from(new Set(teamMembers.map((m) => m.category)));

  return (
    <div className="min-h-screen bg-ink text-white overflow-hidden font-['Inter',sans-serif] font-light">
      <section className="relative flex flex-col items-center justify-center px-[clamp(20px,4vw,56px)] pt-[150px] pb-14 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand/12 blur-[140px] rounded-full pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px` }} 
        />

        <Reveal className="flex flex-col items-center z-10 max-w-4xl w-full">
          <p className="font-['Helvetica',sans-serif] text-xs sm:text-sm uppercase tracking-[0.35em] text-brand font-medium mb-6">
            Behind the stage
          </p>

          <div className="relative border border-brand/30 bg-ink/80 p-8 sm:p-12 backdrop-blur-md rounded-sm my-2 max-w-2xl w-full mx-auto">
            <span className="absolute -top-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-brand text-xs font-mono">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-brand text-xs font-mono">+</span>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Helvetica',sans-serif] text-[clamp(32px,6.5vw,68px)] font-black uppercase text-brand tracking-tight py-1"
            >
              Meet The Team
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 h-[1px] bg-brand/40 mx-auto"
          />

          <p className="max-w-[56ch] text-base sm:text-lg text-muted font-light leading-relaxed mb-8 mx-auto">
            The student team working behind the scenes to plan, organize, and execute TEDxYouth@CHIREC 2026.
          </p>
        </Reveal>
      </section>

      {/* Categories & Member Cards */}
      <section className="relative z-10 px-[clamp(20px,4vw,56px)] pb-24">
        <div className="mx-auto max-w-container space-y-20">
          {categories.map((category) => {
            const members = teamMembers.filter((m) => m.category === category);
            return (
              <div key={category} className="text-center">
                <h2 className="mb-8 font-['Helvetica',sans-serif] text-[clamp(24px,4vw,36px)] font-bold uppercase tracking-widest text-white">
                  {category}
                </h2>
                <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-6xl">
                  {members.map((member) => (
                    <motion.div
                      key={member.id}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setSelectedMember(member)}
                      className="group relative w-[calc(50%-0.75rem)] sm:w-[220px] cursor-pointer overflow-hidden rounded-sm border border-brand/30 bg-ink/60 p-2 shadow-xl transition-all duration-300 hover:border-brand backdrop-blur-sm"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                          <span className="inline-block border border-white/20 bg-ink/70 px-4 py-1.5 font-['Helvetica',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand group-hover:border-brand group-hover:text-ink">
                            View Profile
                          </span>
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-['Helvetica',sans-serif] text-[17px] font-bold text-white mb-1">{member.name}</h3>
                        <p className="font-['Inter',sans-serif] text-xs text-brand font-medium tracking-wide">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Centered Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-ink/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-sm border border-brand/40 bg-ink p-8 shadow-[0_0_50px_rgba(255,0,0,0.15)]"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 rounded-full bg-brand/10 p-2 text-brand hover:bg-brand hover:text-ink transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full border border-brand/50 overflow-hidden mb-6 p-1">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="font-['Helvetica',sans-serif] text-3xl font-bold text-white mb-1">{selectedMember.name}</h3>
                <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-[0.2em] font-medium text-brand">{selectedMember.role}</p>
                <div className="my-6 h-[1px] w-16 bg-brand/30" />
                <p className="text-sm leading-relaxed text-muted font-light">{selectedMember.bio}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}