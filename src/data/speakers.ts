export type Speaker = {
  id: string;
  initials: string;
  name: string;
  talkTitle: string;
  bio: string;
  category: "guest" | "student";
};

// Edit this array to update your real lineup. Add or remove entries
// freely — the Speakers page groups them by `category` automatically.
export const speakers: Speaker[] = [
  // ---- GUEST SPEAKERS ----
  {
    id: "sp-guest-1",
    initials: "AB",
    name: "Guest Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — role or field, plus the hook.",
    category: "guest",
  },
  {
    id: "sp-guest-2",
    initials: "CD",
    name: "Guest Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — role or field, plus the hook.",
    category: "guest",
  },

  // ---- STUDENT SPEAKERS ----
  {
    id: "sp-student-1",
    initials: "EF",
    name: "Student Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — grade, plus the hook.",
    category: "student",
  },
  {
    id: "sp-student-2",
    initials: "GH",
    name: "Student Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — grade, plus the hook.",
    category: "student",
  },
  {
    id: "sp-student-3",
    initials: "IJ",
    name: "Student Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — grade, plus the hook.",
    category: "student",
  },
  {
    id: "sp-student-4",
    initials: "KL",
    name: "Student Speaker Name",
    talkTitle: "Talk Title Goes Here",
    bio: "One or two lines on who they are and why their idea matters — grade, plus the hook.",
    category: "student",
  },
];