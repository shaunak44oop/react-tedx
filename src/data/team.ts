export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  bio: string;
}

// Fixed TypeScript error using (import.meta as any)
const base = (import.meta as any).env?.BASE_URL || "/";
const PLACEHOLDER_AVATAR = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
const PLACEHOLDER_BIO = "Core team member for TEDxYouth@CHIREC 2026.";

export const teamMembers: TeamMember[] = [
  // Co-organisers
  {
    id: "1",
    name: "Anusha Anchlia",
    role: "Co-organiser",
    category: "Co-organisers",
    image: PLACEHOLDER_AVATAR,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "2",
    name: "Vishwak Lakshetty",
    role: "Co-organiser",
    category: "Co-organisers",
    image: `${base}teampics/VISHWAK.JPG`,
    bio: "Meet Vishwak Lakshetty, Meet Vishwak Lakshetty, an IBDP Year 2 student at CHIREC International School studying Economics, Mathematics AA and Politics at the higher level and planning to pursue business. A familiar name at MUNs, feel free to debate him on topics ranging from the modern relevance of the 1944 book The Road to Serfdom to why Game of Thrones remains one of the greatest television dramas of its kind. Outside debate, Vishwak is a voracious reader of science and philosophy, and an even greater fan of grassroots Scandinavian hip-hop.",
  },

  // Heads of Communication
  {
    id: "3",
    name: "Sharvina Srivastava",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "4",
    name: "Anika Kanumuri",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "5",
    name: "Hasini Pammi",
    role: "Head of Communication",
    category: "Communication",
    image: `${base}teampics/HASINI.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "6",
    name: "Chaitra Morram Reddy",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: PLACEHOLDER_BIO,
  },

  // Heads of Logistics
  {
    id: "7",
    name: "Uttam Singh Malhotra",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/UTTAM.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "8",
    name: "Sourabhi Somani",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/SOURABHI.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "9",
    name: "Laavanya Parambath",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/LAAVANYA.JPG`,
    bio: PLACEHOLDER_BIO,
  },

  // Heads of Finance & Sponsorship
  {
    id: "10",
    name: "Dakshita Reddy Bhimareddy",
    role: "Head of Finance & Sponsorship",
    category: "Finance & Sponsorship",
    image: PLACEHOLDER_AVATAR,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "11",
    name: "Anika Dugar",
    role: "Head of Finance & Sponsorship",
    category: "Finance & Sponsorship",
    image: `${base}teampics/ANIKA D.JPG`,
    bio: PLACEHOLDER_BIO,
  },

  // Heads of Technology
  {
    id: "12",
    name: "Sahasra Devisetty",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/SAHASRA.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "13",
    name: "Ravya Kantheti",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/RAVYA.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "14",
    name: "Shaunak Anand Wasker",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/SHAUNAK.JPG`,
    bio: PLACEHOLDER_BIO,
  },

  // Heads of Marketing
  {
    id: "15",
    name: "Rithvika Palepu",
    role: "Head of Marketing",
    category: "Marketing",
    image: `${base}teampics/RITHVIKA.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "16",
    name: "Aarna Agarwal",
    role: "Head of Marketing",
    category: "Marketing",
    image: `${base}teampics/AARNA.JPG`,
    bio: PLACEHOLDER_BIO,
  },

  // Heads of Design
  {
    id: "17",
    name: "Anindita Sankar Kurur",
    role: "Head of Design",
    category: "Design",
    image: `${base}teampics/ANINDITA.JPG`,
    bio: PLACEHOLDER_BIO,
  },
  {
    id: "18",
    name: "Aadhya Panchal",
    role: "Head of Design",
    category: "Design",
    image: `${base}teampics/AADHYA.JPG`,
    bio: PLACEHOLDER_BIO,
  },
];