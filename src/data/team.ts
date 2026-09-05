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
    bio: "Meet Vishwak Lakshetty, an IBDP Year 2 student at CHIREC International School studying Economics, Mathematics AA and Politics at the higher level and planning to pursue business. A familiar name at MUNs, feel free to debate him on topics ranging from the modern relevance of the 1944 book The Road to Serfdom to why Game of Thrones remains one of the greatest television dramas of its kind. Outside debate, Vishwak is a voracious reader of science and philosophy, and an even greater fan of grassroots Scandinavian hip-hop.",
  },

  // Heads of Communication
  {
    id: "3",
    name: "Sharvina Srivastava",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: "Sharvina Srivastava is a Grade 12 student with a keen interest in Math, Physics, and Chemistry - known for her discipline, focus, and steady work ethic. Curious by nature and a debater at heart; she loves learning, meeting new people, and challenging her own boundaries. Outside the classroom, she enjoys playing tennis, reading, and researching just about anything that sparks her interest.",
  },
  {
    id: "4",
    name: "Anika Kanumuri",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: "Anika Kanumuri is an DP2 student with a keen interest in understanding the world through unique perspectives. She studies Math AI, English, and Economics at the Higher Level. Beyond academics, she enjoys baking with her friends and playing tennis, or pickleball, or any other racket sport you could think of. With a strong interest and passion for community outreach and meeting new people she is looking forward to learning and engaging in some meaningful conversations as TedX Communications Head.",
  },
  {
    id: "5",
    name: "Hasini Pammi",
    role: "Head of Communication",
    category: "Communication",
    image: `${base}teampics/HASINI.JPG`,
    bio: "Hasini Pammi is an IBDP Year 2 student studying Math AA, Physics, and Computer Science at a Higher Level, with a keen interest in the intersection of neuroscience and AI. If she’s not napping, you’ll probably find her rewatching her favourite movies or eating new food. Curious at heart and passionate about everything she takes on, she loves connecting with people and bringing meaningful initiatives to life. As a long-time admirer of TEDx’s mission, she is excited to bring ideas to life and hopes to make this year’s event one to remember.",
  },
  {
    id: "6",
    name: "Chaitra Morram Reddy",
    role: "Head of Communication",
    category: "Communication",
    image: PLACEHOLDER_AVATAR,
    bio: "Chaitra Morram Reddy is an IBDP Year 2 student studying Global Politics, Economics, and Mathematics at a higher level, with her sights set on law school. Ask her about a debate topic and be ready for a well-argued opinion; ask her for a deadline extension and be ready for an even better email. You’ll usually find her with a playlist on repeat, a match on in the background, or Flipped and Darling on rewatch.A people person through and through, she loves a good laugh. As Head of Communications, she’s here to make sure every big idea at TEDxYouth@CHIREC gets the spotlight it deserves.",
  },

  // Heads of Logistics
  {
    id: "7",
    name: "Uttam Singh Malhotra",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/UTTAM.JPG`,
    bio: "Uttam Singh Malhotra is a CBSE Grade 12 student studying Business Studies, Accountancy, Economics, and Maths, with a knack for organisation, problem-solving, and keeping calm when things get chaotic. Curious, driven, and always ready to take on a challenge, he enjoys turning ideas into something tangible. As Head of Logistics for for this years TEDx, he helps bring structure and coordination to the event behind the scenes. Outside events and academics, he can be found playing table tennis, getting lost in music, exploring new ideas, or rewatching The Mentalist—because apparently, once is never enough.",
  },
  {
    id: "8",
    name: "Sourabhi Somani",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/SOURABHI.JPG`,
    bio: "Sourabhi Somani is a grade 12 student preparing to take over the world as a powerhouse in finance and economics. Known for her optimism, enthusiasm and punctuality, she approaches every task with utmost dedication. When she’s not going on a run or vibing to a new song to dance on, you’ll find her enthusiastically planning and organising her never ending endeavours. A passionate kathak dancer at heart, she has a keen eye for detail and expression. She is thrilled to be returning as the head of logistics for the second time this year, and is committed to making this edition a truly unforgettable experience!",
  },
  {
    id: "9",
    name: "Laavanya Parambath",
    role: "Head of Logistics",
    category: "Logistics",
    image: `${base}teampics/LAAVANYA.JPG`,
    bio: "Laavanya Parambath is a DP2 student studying Math, Physics and Chemistry at the higher level. She spends most of her time reading, and has made her way through an entire library worth of books. When she isn’t reading she’s passing her time outdoors, rain or shine. She’s more approachable than she seems, on most days, and is thrilled to be a part of this year’s TEDx!",
  },

  // Heads of Finance & Sponsorship
  {
    id: "10",
    name: "Dakshita Reddy Bhimareddy",
    role: "Head of Finance & Sponsorship",
    category: "Finance & Sponsorship",
    image: PLACEHOLDER_AVATAR,
    bio: "Dakshita Reddy is a quiet observer to most, but a lively chatterbox with those she’s close to. As a passionate football player, she brings that same energy and team spirit into her friendships - loyal, thoughtful, and easy to connect with. Her strong instincts and caring nature make her great at building meaningful relations and connections. She balances it all with a focused attitude towards her studies, always aiming to grow both on and off the field.",
  },
  {
    id: "11",
    name: "Anika Dugar",
    role: "Head of Finance & Sponsorship",
    category: "Finance & Sponsorship",
    image: `${base}teampics/ANIKA D.JPG`,
    bio: "Anika Dugar is a DP2 student taking Math AA, Economics, and Psychology at higher level. She has a deep-rooted passion for economics and tends to ask more questions about it than she probably should. When she’s not doing that, you’ll find her with a guitar in hand or rewatching Modern Family for what is definitely not the first time. As Head of Finance for this year’s TEDx, Anika is excited to help bring the event to life and to finally be in a room full of talks worth thinking about.",
  },

  // Heads of Technology
  {
    id: "12",
    name: "Sahasra Devisetty",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/SAHASRA.JPG`,
    bio: "Sahasra Devisetty is a DP2 student studying Math, Physics and Computer science at the higher level. She’s planning on pursuing Quantitative Finance in the future. Warm and easy to talk to, when she’s not rewatching Pulp Fiction for the 99th time, you will find her brainstorming new UGC ideas and arguing that Tiramisu from True Black is overrated. Sahasra is excited to be part of TEDx and looks forward to creating memories and contributing to an experience that everyone can take something away from.",
  },
  {
    id: "13",
    name: "Ravya Kantheti",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/RAVYA.JPG`,
    bio: "Ravya Kantheti is an IBDP Year 2 student studying Computer Science, Math, and Economics at the higher level. When she isn’t catching up on sleep or rewatching her favourite tv shows, she’s usually spending time coding or solving puzzles for fun. As Head of Technology, she’s excited to bring her problem-solving skills to this year’s TEDx and help make it the best one yet!",
  },
  {
    id: "14",
    name: "Shaunak Anand Wasker",
    role: "Head of Technology",
    category: "Technology",
    image: `${base}teampics/SHAUNAK.JPG`,
    bio: "Shaunak Wasker is a Grade 12 IB student pursuing Physics HL, Math AA HL, and Business Management HL. Driven by a passion for Formula 1, he balances his deep fascination with high-performance motorsport alongside a dedicated musical journey toward Trinity Grade 8 in piano.",
  },

  // Heads of Marketing
  {
    id: "15",
    name: "Rithvika Palapu",
    role: "Head of Marketing",
    category: "Marketing",
    image: `${base}teampics/RITHVIKA.JPG`,
    bio: "Rithvika Palepu is a 12th-grade CBSE student studying Commerce, Economics, and Math. Beyond crying about how hard calculus is, she is either deciding on what to bake next or what movie to add to her watchlist. From sketching and painting to filming and photographing everything around her, she has a strong passion for media and art. As Head of Marketing, she hopes to bring fresh perspectives and ideas to make the 6th edition of TEDx Youth@CHIREC a remarkable success.",
  },
  {
    id: "16",
    name: "Aarna Agarwal",
    role: "Head of Marketing",
    category: "Marketing",
    image: `${base}teampics/AARNA.JPG`,
    bio: "Aarna Agarwal is a CBSE grade 12 student aspiring to study business in the future. She is extremely passionate about every role that she takes up. When she isn’t sleeping, you can find her listening to music or rewatching friends. With a keen interest in media, outreach, and connecting with people, Aarna is committed to making this year’s TEDxYouth impactful and memorable!",
  },

  // Heads of Design
  {
    id: "17",
    name: "Anindita Sankar Kurur",
    role: "Head of Design",
    category: "Design",
    image: `${base}teampics/ANINDITA.JPG`,
    bio: "Anindita Kurur is a 12th grade CBSE student studying Sociology, Psychology, Business Studies, and Mass Media Studies, aspiring to become a designer. When she isn’t making her daily iced coffee or rewatching classic 2000s comfort shows, she’s usually deep in her creative element, crafting mixed-media animations, experimenting with video editing, or listening to her favourite playlists. She is excited to bring her eye for visual storytelling and bold concepts to TEDxCHIREC Youth as a Head of Design, turning ideas into an unforgettable visual experience.",
  },
  {
    id: "18",
    name: "Aadhya Panchal",
    role: "Head of Design",
    category: "Design",
    image: `${base}teampics/AADHYA.JPG`,
    bio: "Aadhya Panchal is a 12th grade CBSE student studying Legal Studies, Economics, and Business Administration at a higher level. Having been passionate about art and design since she was a kid, she has been painting for as long as she can remember and now explores graphic design as well. She also loves public speaking, a hobby she developed while doing countless muns over the past four years. Outside of all this, you’ll probably find her with a book in hand or stopping to feed any stray dog she comes across. As Head of Design at this year’s TedX event, she hopes to bring her love for art and design into creating an experience that is creative and memorable for all.",
  },
];