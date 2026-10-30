/**
 * Central portfolio data for Prince Kumar (from Prince_Kumar.pdf + details shared by Prince).
 * Every fact on the site comes from this file. Edit it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

/** Deploy base path ("/" locally, "/repo-name/" on GitHub Pages). */
const BASE = import.meta.env.BASE_URL;

export const profile = {
  fullName: 'Prince Kumar',
  displayName: 'Prince Kumar',
  firstName: 'PRINCE',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KUMAR ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'AI / ML', 'Data Science'],
  intro:
    'A 3rd-year B.Tech Computer Engineering student (CGPA 8.95) who turns real-world problems into working software. I build full-stack web apps and AI-powered tools with React, Node.js, Python and C#, and I am always learning the next thing.',
  location: 'Rajkot, Gujarat',
  email: 'Princekumarsng2005@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prince-kumar-7b9578323',
    github: 'https://github.com/PRINCE77-UI',
  },
  resumePdf: `${BASE}assets/Prince_Kumar_Resume.pdf`,
  portrait: {
    src: `${BASE}assets/portrait-720.webp`,
    srcSet: `${BASE}assets/portrait-420.webp 420w, ${BASE}assets/portrait-720.webp 720w, ${BASE}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Prince Kumar',
  },
  interests: ['Creative Project Building & UI Design','Building AI-Powered Applications'],
};

export const education = [
  {
    school: 'Marwadi University',
    place: 'Rajkot, Gujarat',
    degree: 'Bachelor of Technology — Computer Engineering (3rd Year)',
    period: '2024 – Present',
    score: 'CGPA 8.95',
  },
  {
    school: 'RDB College',
    place: 'Sangrampur, Munger',
    degree: '12th — Science',
    period: '2023',
    score: '68%',
  },
  {
    school: 'SUHASLS High School',
    place: 'Deoghara, Munger',
    degree: '10th',
    period: '2021',
    score: '74.4%',
  },
];

export const experience = [
  {
    company: 'AICTE–IBM SkillsBuild',
    role: 'Machine Learning and Applied AI Intern',
    place: 'Virtual / Remote',
    period: 'August –  September 2026',
    points: [
      'Selected for a 6-week internship focused on Machine Learning and Applied AI.',
      'Learn supervised learning, unsupervised learning, deep learning fundamentals, and reinforcement learning.',
    ],
  },
  {
    company: 'InAmigos Foundation',
    role: 'AI Research Intern',
    place: 'Remote / Work from Home',
    period: '2 Weeks (August 2026)',
    points: [
      'Offered an internship role focused on AI Research.',
      'Participate in team meetings, discussions, and collaborative activities.',
    ],
  },
  {
    company: 'Future Interns',
    role: 'Data Science & Analytics Intern',
    place: 'Rajkot',
    period: '1 Month',
    points: ['Completed a one-month Data Science & Analytics internship with Future Interns.'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'wave' | 'eye' | 'bars';
};

export const projects: Project[] = [
  {
    id: 'smartgym',
    title: 'SmartGYM',
    year: '2025',
    genre: 'Full-Stack • MERN • RBAC',
    logline: 'A full-stack gym management and workout monitoring platform with separate role-based access.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    build: [
      'Developed a full-stack web application to digitalize gym operations, replacing manual record-keeping with an automated centralized platform.',
      'Built three role-based modules — Admin (membership & payment management), Trainer (workout plans & tracking) and Member (logs & visual charts).',
      'Implemented JWT-based authentication and RBAC for secure data handling and restricted feature access, with a responsive UI and progress charts for strength, endurance and body measurements.',
    ],
    features: [
      'Admin, Trainer and Member roles',
      'Membership & payment management',
      'Workout plans and tracking',
      'JWT authentication with RBAC',
      'Visual progress charts',
    ],
    metrics: [],
    github: 'https://github.com/PRINCE77-UI/Smart-GYM.git',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'bars',
  },
  {
    id: 'ai-study-monitor',
    title: 'AI Study Monitor',
    year: '2026',
    genre: 'AI • Computer Vision',
    logline: 'A real-time AI study monitor that uses computer vision to give focus and attention insights.',
    stack: ['Python', 'Streamlit', 'OpenCV', 'MediaPipe', 'AI/ML'],
    build: [
      "Built a real-time AI-based study monitoring application that uses computer vision to watch a student's study session.",
      'Provides focus and attention-related insights through a Streamlit interface powered by OpenCV and MediaPipe.',
    ],
    features: ['Real-time monitoring', 'Computer-vision based', 'Focus & attention insights', 'Streamlit interface'],
    metrics: [],
    github: 'https://github.com/PRINCE77-UI/Ai-Study-Monitor.git',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'eye',
  },
  {
    id: 'voice-assistant',
    title: 'Voice Assistant',
    year: '2026',
    genre: 'AI • Voice • Web App',
    logline: 'An AI-style voice assistant web app that listens, understands and answers by voice.',
    stack: ['Python', 'Streamlit', 'Speech Recognition', 'Text-to-Speech', 'AI/LLM'],
    build: [
      'Built an AI-style voice assistant web application that accepts voice input and processes user queries.',
      'Provides intelligent responses through voice interaction using speech recognition, text-to-speech and an AI/LLM layer.',
    ],
    features: ['Voice input', 'Query processing', 'Spoken responses', 'Web interface in Streamlit'],
    metrics: [],
    github: 'https://github.com/PRINCE77-UI/Voice_Assistant_Web.git',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'wave',
  },
  {
    id: 'servicehub',
    title: 'ServiceHub',
    year: '2026',
    genre: 'Marketplace • .NET • SQL Server',
    logline: 'A local service marketplace connecting customers with electricians, plumbers, tutors and cleaners.',
    stack: ['C#', 'ASP.NET Core MVC', 'Razor Views', 'Bootstrap 5', 'ADO.NET', 'SQL Server', 'ASP.NET Identity'],
    build: [
      'Built a local service marketplace that connects customers with service providers such as electricians, plumbers, tutors and cleaners.',
      'Users can discover, book and review providers; built on ASP.NET Core MVC with ADO.NET, SQL Server and ASP.NET Identity.',
    ],
    features: ['Discover service providers', 'Book services', 'Reviews', 'ASP.NET Identity authentication'],
    metrics: [],
    github: 'https://github.com/PRINCE77-UI/ServiceHub.git',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cgpa',
    title: 'CGPA 8.95',
    org: 'Marwadi University',
    detail: 'Strong academic record in B.Tech Computer Engineering, 3rd year.',
    laurel: 'Academic Record',
  },
   {
    id: 'internship',
    title: 'Machine Learning and Applied AI Intern',
    org: 'AICTE–IBM SkillsBuild',
    detail: 'Learn supervised learning, unsupervised learning, deep learning fundamentals, and reinforcement learning.',
    laurel: 'Internship',
  },
   {
    id: 'internship',
    title: 'AI Research Intern',
    org: 'InAmigos Foundation',
    detail: 'Offered an internship role focused on AI Research.Participate in team meetings, discussions, and collaborative activities.',
    laurel: 'Internship',
  },
  {
    id: 'internship',
    title: 'Data Science & Analytics Intern',
    org: 'Future Interns',
    detail: 'Completed a one-month internship in Data Science & Analytics.',
    laurel: 'Internship',
  },
  {
    id: 'projects',
    title: '4 Projects Built',
    org: 'Full-Stack • AI • .NET',
    detail: 'SmartGYM, AI Study Monitor, Voice Assistant and ServiceHub — all on GitHub.',
    laurel: 'Four Originals',
    link: 'https://github.com/PRINCE77-UI',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Cisco', name: 'Computer Networking' },
  { issuer: 'Cisco', name: 'Linux Essentials' },
  { issuer: 'Cisco', name: 'Operating Systems ' },
  { issuer: 'Cisco', name: 'Data Science Essentials with Python' },
  { issuer: 'Infosys Springboard', name: 'Introduction to Data Preprocessing' },
  { issuer: 'Infosys Springboard', name: 'Design Thinking' },
  { issuer: 'Infosys Springboard', name: 'Python for Data Science' },
  { issuer: 'Tech Mahindra Foundation', name: 'Cybersecurity' },
  { issuer: 'Infosys Springboard', name: 'Problem Solving for Success' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'From C to Python',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C#', mono: 'C#' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Interfaces & server-side logic',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'databases',
    title: 'Database',
    subtitle: 'Where the data lives',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQL Server', mono: 'Sq' },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science',
    subtitle: 'Python for data',
    skills: [
      { name: 'Python for Data Science', mono: 'Ds' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'AI Research', mono: 'Ai' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Da' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'COA', mono: 'Co' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Shipping the work',
    skills: [{ name: 'Git & GitHub', mono: 'Gt' }],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Full-Stack Dev', mono: 'Fs' },
      { name: 'Data Science', mono: 'Dt' },
      { name: 'New Technologies', mono: 'Nt' },
    ],
  },
];

/** Where a skill shows up on the resume — shown when a skill card is hovered/tapped. */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Study Monitor', 'Voice Assistant', 'Cisco Data Science Essentials'],
  'C#': ['ServiceHub'],
  'React.js': ['SmartGYM'],
  'Node.js': ['SmartGYM'],
  'Express.js': ['SmartGYM'],
  MongoDB: ['SmartGYM'],
  'SQL Server': ['ServiceHub'],
  'Python for Data Science': ['Cisco Data Science Essentials', 'Data Science & Analytics Intern'],
  'Machine Learning': ['ML & Applied AI Intern — BharatCares'],
  'AI Research': ['AI Research Intern — InAmigos Foundation'],
  Pandas: ['Data Science & Analytics Intern'],
  NumPy: ['Data Science & Analytics Intern'],
  DSA: ['Self-paced DSA — ongoing'],
  OS: ['Cisco Operating Systems', 'Cisco Linux Essentials'],
  CN: ['Cisco Computer Networking'],
  'Git & GitHub': ['All 4 projects on GitHub'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'School and intermediate years in Munger, Bihar — where the curiosity for science began.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: '10th at S U H A S L S High School, Deoghara, Munger — 74.4%.',
        tags: ['10th', '74.4%'],
        runtime: '2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Science Years',
        description: '12th Science at R D B College, Sangrampur, Munger — 68%.',
        tags: ['12th', 'Science', '68%'],
        runtime: '2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Engineering',
    period: '2024 – Present',
    synopsis: 'B.Tech in Computer Engineering at Marwadi University, Rajkot — with a strong CGPA of 8.95.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Engineering at Marwadi University, Rajkot, Gujarat — CGPA 8.95.',
        tags: ['B.Tech', 'Computer Engineering', 'CGPA 8.95'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Fundamentals',
        description: 'Data Structures & Algorithms, Operating Systems, Computer Networks and COA — the core of the degree.',
        tags: ['DSA', 'OS', 'CN', 'COA'],
        runtime: 'Core subjects',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Learner',
        description: 'Nine certifications from Cisco, Infosys Springboard and Tech Mahindra Foundation across Networking, Linux, Operating Systems, Data Science, Python and Cybersecurity.',
        tags: ['Cisco', 'Infosys Springboard', 'Tech Mahindra', 'Cybersecurity'],
        runtime: '9 Certifications',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Into the Data',
    period: 'Hands-on',
    synopsis: 'Three internships across Machine Learning, AI Research and Data Science & Analytics.',
    episodes: [
            {
        code: 'S03 E01',
        title: 'The ML Intern',
        description: 'Machine Learning and Applied AI Intern at BharatCares – AICTE–IBM SkillsBuild. 6 weeks, remote.',
        tags: ['Machine Learning', 'Applied AI', 'IBM SkillsBuild'],
        runtime: '6 Weeks',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'The Researcher',
        description: 'AI Research Intern at InAmigos Foundation. 2 weeks, remote.',
        tags: ['AI Research', 'Remote'],
        runtime: '2 Weeks',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'The Intern',
        description: 'Data Science & Analytics Intern at Future Interns.',
        tags: ['Data Science', 'Analytics', 'Future Interns'],
        runtime: '1 Month',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Analyst',
        description: 'Python for Data Science, NumPy and Pandas fundamentals.',
        tags: ['Python', 'NumPy', 'Pandas'],
        runtime: 'Fundamentals',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: 'The Originals',
    synopsis: 'Four Originals — a gym platform, an AI study monitor, a voice assistant and a service marketplace.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Full-Stack Builder',
        description: 'SmartGYM — React, Node.js, Express and MongoDB with JWT authentication and role-based access.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'RBAC'],
        runtime: 'MERN',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The AI Builder',
        description: 'AI Study Monitor and Voice Assistant — computer vision and voice interaction built with Python.',
        tags: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
        runtime: '2 AI Originals',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Marketplace',
        description: 'ServiceHub — a local service marketplace on ASP.NET Core MVC with SQL Server.',
        tags: ['C#', 'ASP.NET Core', 'SQL Server'],
        runtime: '.NET',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Going deeper into Full-Stack Development, DSA (self-paced, ongoing), Data Science and new technologies.',
        tags: ['Full-Stack', 'DSA', 'Data Science'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Academic high', title: 'CGPA 8.95', detail: 'B.Tech Computer Engineering • Marwadi University', palette: amber },
  { label: 'The Full-Stack Original', title: 'SmartGYM', detail: 'React • Node.js • MongoDB • JWT • RBAC', palette: crimson },
  { label: 'The AI Original', title: 'AI Study Monitor', detail: 'OpenCV • MediaPipe • Streamlit', palette: ocean },
  { label: 'Talks back', title: 'Voice Assistant', detail: 'Speech recognition • Text-to-Speech • LLM', palette: violet },
  { label: 'The .NET Original', title: 'ServiceHub', detail: 'ASP.NET Core MVC • SQL Server', palette: jade },
  { label: 'Data credential', title: 'Cisco Data Science', detail: 'Essentials with Python', palette: amber },
  { label: 'Networking credential', title: 'Cisco Networking', detail: 'Computer Networking • Linux • OS', palette: crimson },
  { label: 'The ML internship', title: 'ML & Applied AI', detail: 'BharatCares • AICTE–IBM SkillsBuild', palette: violet },
  { label: 'The research internship', title: 'AI Research', detail: 'InAmigos Foundation', palette: jade },
  { label: 'The data internship', title: 'Data Science', detail: 'Analytics Intern • Future Interns', palette: ocean },
  // { label: 'Ongoing', title: 'DSA', detail: 'Self-paced • in progress', palette: violet },
  // { label: 'Languages', title: 'Python • C# • Java', detail: 'plus C and C++', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Engineering',
    lines: ['Marwadi University, Rajkot, Gujarat', '3rd Year · 2024 – Present'],
    chips: ['CGPA 8.95'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, with Python.',
    lines: ['C, C++, Java, Python, C# · React, Node.js, Express.js', 'MongoDB, SQL Server · Git & GitHub'],
    chips: ['Python', 'React', 'Node.js', 'C#', 'MongoDB', 'DSA'],
  },
   {
    kicker: 'Internships',
    title: 'Three internships',
    lines: [
      'ML & Applied AI Intern · AICTE–IBM SkillsBuild',
      'AI Research Intern · InAmigos Foundation',
      'Data Science & Analytics Intern · Future Interns',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['SmartGYM — role-based gym management', 'AI Study Monitor — computer-vision focus insights', 'Voice Assistant — speak and it answers', 'ServiceHub — local service marketplace'],
  },
  {
    kicker: 'Certified',
    title: '9 Certifications',
    lines: [
      'Cisco · Networking, Linux, Operating Systems, Data Science',
      'Infosys Springboard · Data Preprocessing, Design Thinking, Python, Problem Solving',
      'Tech Mahindra Foundation · Cybersecurity',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: [' Machine Learning · Deep Learning · Applied AI · DSA · New Technologies'],
        chips: ['Machine Learning', 'Applied AI', 'AI Research', 'Cybersecurity', 'DSA'],
  },
];

export type ProfileId = 'prince' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prince',
    name: 'Prince',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internship', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
