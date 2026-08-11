export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "faq-1",
    question: "How much are tickets?",
    answer:
      "[Explain pricing — e.g. free for students with ID, $X for guests. Link to the Register page for details.]",
  },
  {
    id: "faq-2",
    question: "Is the venue accessible?",
    answer:
      "[Describe accessible entrances, seating, and who to contact for accommodations.]",
  },
  {
    id: "faq-3",
    question: "Will food be available?",
    answer:
      "[List any snacks, meals, or dietary accommodations, and whether outside food is allowed.]",
  },
  {
    id: "faq-4",
    question: "Can I bring guests who don't attend the school?",
    answer:
      "[Explain your policy on outside guests, family, and community members.]",
  },
  {
    id: "faq-5",
    question: "Will talks be recorded?",
    answer:
      "[Say whether talks will be filmed or livestreamed and where recordings will be posted afterward.]",
  },
  {
    id: "faq-6",
    question: "Who do I contact with other questions?",
    answer:
      "Email us at tedxyouth@yourschool.edu and we'll get back to you.",
  },
];
