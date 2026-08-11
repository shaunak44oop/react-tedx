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
      "500 Rupees per person",
  },
  {
    id: "faq-2",
    question: "Is the venue accessible?",
    answer:
      "CHIREC Avenue Kondapur",
  },
  {
    id: "faq-3",
    question: "Will food be available?",
    answer:
      "Yes",
  },
  {
    id: "faq-4",
    question: "Can I bring guests who don't attend the school?",
    answer:
      "Yes, provided the fee is paid",
  },
  {
    id: "faq-5",
    question: "Will talks be recorded?",
    answer:
      "No",
  },
  {
    id: "faq-6",
    question: "Who do I contact with other questions?",
    answer:
      "Email us at tedx.technology@chirec.ac.in and we will respond within 2-4 days.",
  },
];
