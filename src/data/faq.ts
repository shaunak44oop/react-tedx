export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is TEDx?",
    answer:
      "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At TEDxYouth@CHIREC, live talks and performances spark deep discussion and connection.",
  },
  {
    id: "faq-2",
    question: "Who is eligible to attend the event?",
    answer:
      "The event is open to students, parents, and teachers. Whether you are part of the CHIREC community or an invited guest, everyone passionate about new perspectives is welcome.",
  },
  {
    id: "faq-3",
    question: "How much do tickets cost?",
    answer:
      "Tickets are priced at ₹1,000 per attendee. Your ticket grants full-day access to all speaker presentations, interactive showcases, and official event materials.",
  },
  {
    id: "faq-4",
    question: "What is the dress code for attendees?",
    answer:
      "The dress code for all attendees is smart casual. We encourage crisp, presentable attire that fits the creative and thoughtful atmosphere of the conference.",
  },
  {
    id: "faq-5",
    question: "Will food and refreshments be provided?",
    answer:
      "Yes, complimentary refreshments will be provided by the school during designated breaks. Additional food and beverage options will also be available for purchase at campus stalls.",
  },
  {
    id: "faq-6",
    question: "Will the talks be recorded?",
    answer:
      "Yes, all talks will be professionally recorded on stage and uploaded to the official TEDx YouTube channel following post-production approval.",
  },
];