import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { teamMembers, TeamMember } from "../data/team";

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const categories = Array.from(new Set(teamMembers.map((m) => m.category)));

  return (
    <div className="min-h-screen px-[clamp(20px,4vw,56px)] py-12 md:py-16">
      <div className="mx-auto max-w-container">
        {/* Header - Centered */}
        <div className="text-center">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-brand">
            Behind the stage
          </p>
          <h1 className="mt-3 font-display text-[clamp(36px,6vw,72px)] text-brand">
            Meet the Core Team
          </h1>
          <p className="mx-auto mt-3 max-w-[50ch] text-[16.5px] text-muted">
            The student team working behind the scenes to plan, organize, and execute TEDxYouth@CHIREC 2026.
          </p>
        </div>

        {/* Categories & Member Cards */}
        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const members = teamMembers.filter((m) => m.category === category);
            return (
              <div key={category} className="text-center">
                <h2 className="mb-6 font-display text-[clamp(22px,3.5vw,32px)] text-brand">
                  {category}
                </h2>

                <div className="mx-auto grid max-w-6xl justify-center gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-4">
                  {members.map((member) => (
                    <motion.div
                      key={member.id}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setSelectedMember(member)}
                      className="group relative cursor-pointer overflow-hidden rounded-[18px] border border-brand/30 bg-ink p-1.5 shadow-xl transition-all duration-300 hover:border-brand"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[13px]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-3 left-0 right-0 text-center">
                          <span className="inline-block rounded-full bg-ink/70 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand group-hover:text-ink">
                            View Profile
                          </span>
                        </div>
                      </div>

                      <div className="p-3 text-center">
                        <h3 className="font-display text-lg text-white">{member.name}</h3>
                        <p className="mt-0.5 font-sans text-xs text-brand">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-[24px] border border-brand/40 bg-ink p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-brand hover:text-ink"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-32 w-32 rounded-full border-2 border-brand object-cover"
                />
                <h3 className="mt-4 font-display text-2xl text-white">{selectedMember.name}</h3>
                <p className="font-sans text-sm font-semibold text-brand">{selectedMember.role}</p>
                <div className="my-4 h-[1px] w-full bg-brand/30" />
                <p className="text-sm leading-relaxed text-muted">{selectedMember.bio}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
