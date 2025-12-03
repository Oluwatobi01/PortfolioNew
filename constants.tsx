
import { Project, NavItem, ExperienceItem, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'rydr',
    title: 'Rydr Taxi Booking',
    description: 'A comprehensive taxi booking platform featuring real-time tracking, ride estimation, and secure payments. Built for scale and user convenience.',
    tags: ['React Native', 'Google Maps', 'Firebase', 'Cloud Run'],
    liveLink: 'https://rydr-taxi-booking-886875257442.us-west1.run.app/#/login',
    githubLink: 'https://github.com/Oluwatobi01/rydr',
    image: 'https://picsum.photos/seed/rydr/800/600',
    category: 'mobile'
  },
  {
    id: 'rideconnect',
    title: 'RideConnect',
    description: 'Connecting riders with drivers seamlessly. Focuses on community-driven transport solutions with real-time socket connections.',
    tags: ['React Native', 'Express', 'MongoDB', 'Socket.io'],
    liveLink: 'https://rideconnect-475354164030.us-west1.run.app',
    githubLink: 'https://github.com/Oluwatobi01/RideConnect',
    image: 'https://picsum.photos/seed/rideconnect/800/600',
    category: 'fullstack'
  },
  {
    id: 'splitit',
    title: 'SplitIt',
    description: 'Smart expense splitting application for groups and trips. Simplifies shared finances with an intuitive interface.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    liveLink: 'https://splitit-770905328490.us-west1.run.app',
    githubLink: 'https://github.com/Oluwatobi01/SplitIt',
    image: 'https://picsum.photos/seed/splitit/800/600',
    category: 'web'
  },
  {
    id: 'melissa',
    title: 'Melissa AI Assistant',
    description: 'An intelligent conversational agent designed to assist with daily tasks and information retrieval using advanced NLP.',
    tags: ['Python', 'NLP', 'AI', 'Backend'],
    githubLink: 'https://github.com/Oluwatobi01/Melissa?tab=readme-ov-file',
    image: 'https://picsum.photos/seed/melissa/800/600',
    category: 'fullstack'
  },
  {
    id: 'flocare',
    title: 'FloCare',
    description: 'Healthcare management system streamlining patient records and appointment scheduling with a clean, accessible UI.',
    tags: ['React', 'HealthTech', 'Netlify', 'UI/UX'],
    liveLink: 'https://flocare.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/flocare',
    image: 'https://picsum.photos/seed/flocare/800/600',
    category: 'web'
  },
  {
    id: 'constbuild',
    title: 'ConstBuild',
    description: 'Construction project management tool for contractors and clients to track progress and manage resources effectively.',
    tags: ['Vue', 'Firebase', 'Project Mgmt'],
    liveLink: 'https://constbuild.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/constbuild',
    image: 'https://picsum.photos/seed/constbuild/800/600',
    category: 'web'
  },
  {
    id: 'tubestamp',
    title: 'TubeStamp',
    description: 'A utility tool for creators and viewers to generate and manage YouTube timestamps efficiently.',
    tags: ['React', 'YouTube API', 'Productivity'],
    liveLink: 'https://tubestamp.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/tubestamp',
    image: 'https://picsum.photos/seed/tubestamp/800/600',
    category: 'web'
  },
  {
    id: 'tobiai',
    title: 'Tobi AI',
    description: 'A showcase of modern AI integration wrapped in a sleek, futuristic web interface.',
    tags: ['React', 'AI Integration', 'Framer Motion'],
    liveLink: 'https://tobiai.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/tobiai',
    image: 'https://picsum.photos/seed/tobiai/800/600',
    category: 'web'
  },
  {
    id: 'bullo',
    title: 'Bullo',
    description: 'A financial tracking dashboard designed for modern crypto and stock market enthusiasts.',
    tags: ['React', 'Finance', 'Charts', 'API'],
    liveLink: 'https://bullo.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/bullo',
    image: 'https://picsum.photos/seed/bullo/800/600',
    category: 'web'
  },
  {
    id: 'masdrive',
    title: 'MasDrive',
    description: 'Secure cloud storage interface allowing users to manage their digital assets with ease.',
    tags: ['React', 'Cloud', 'Storage', 'UI Design'],
    liveLink: 'https://masdrive.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/masdrive',
    image: 'https://picsum.photos/seed/masdrive/800/600',
    category: 'web'
  },
  {
    id: 'tobiapclone',
    title: 'App Clone UI',
    description: 'A pixel-perfect recreation of a popular mobile application interface demonstrating high-fidelity UI implementation.',
    tags: ['React', 'Clone', 'UI/UX', 'Mobile Design'],
    liveLink: 'https://tobiapclone.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/tobiapclone',
    image: 'https://picsum.photos/seed/tobiapclone/800/600',
    category: 'mobile'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'freelance-open-source',
    role: 'Frontend Engineer',
    company: 'Freelance & Open Source',
    period: '2023 — Present',
    description: [
      'Architected and deployed responsive React interfaces for diverse personal and client projects, ensuring cross-browser compatibility.',
      'Implemented API integrations and managed complex application state using modern hooks and context, prioritizing WCAG accessibility standards.',
      'Optimized frontend performance, achieving 10-20% improvement in Lighthouse scores via code splitting and asset optimization.',
      'Developed a library of small reusable components and utility hooks to accelerate future development cycles.'
    ],
    skills: ['React', 'Tailwind', 'Accessibility', 'Performance'],
    type: 'work'
  },
  {
    id: 'junior-dev',
    role: 'Junior Developer',
    company: 'Internship / Contract',
    period: '2022 — 2023',
    description: [
      'Collaborated within agile teams to implement UI enhancements and resolve bugs, adhering to strict Git workflows.',
      'Built and integrated robust backend endpoints using Node.js and Express, ensuring seamless data flow to React frontends.',
      'Authored comprehensive unit tests and technical documentation, significantly improving code maintainability and project clarity.',
      'Partnered with UI/UX designers to translate Figma prototypes into refined, mobile-first web layouts.'
    ],
    skills: ['React', 'Node.js', 'Git', 'Express'],
    type: 'work'
  },
  {
    id: 'university',
    role: 'B.Tech in Statistics',
    company: 'Federal University of Technology Minna',
    period: 'Graduated',
    description: [
      'Gained a strong foundation in statistical analysis, probability theory, and mathematical modeling.',
      'Applied analytical reasoning and data-driven logic to solve complex problems, creating a solid base for algorithmic thinking in software development.'
    ],
    skills: ['Statistics', 'Data Analysis', 'Logic', 'Problem Solving'],
    type: 'education'
  }
];

export const SKILLS: Skill[] = [
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
    category: 'Languages', 
    level: 'Advanced' 
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
    category: 'Languages', 
    level: 'Advanced' 
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
    category: 'Languages', 
    level: 'Proficient' 
  },
  { 
    name: 'Swift', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', 
    category: 'Mobile', 
    level: 'Proficient' 
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    category: 'Frontend', 
    level: 'Expert' 
  },
  { 
    name: 'Next.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 
    category: 'Frontend', 
    level: 'Advanced',
    invertDark: true
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
    category: 'Backend', 
    level: 'Expert' 
  },
  { 
    name: 'PostgreSQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 
    category: 'Backend', 
    level: 'Advanced' 
  },
  { 
    name: 'React Native', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    category: 'Mobile', 
    level: 'Advanced' 
  },
  { 
    name: 'Kotlin', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', 
    category: 'Mobile', 
    level: 'Proficient' 
  },
  { 
    name: 'Docker', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 
    category: 'Tools & Platforms', 
    level: 'Advanced' 
  },
  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
    category: 'Tools & Platforms', 
    level: 'Proficient' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', 
    category: 'Frontend', 
    level: 'Expert' 
  },
  { 
    name: 'Vite', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', 
    category: 'Tools & Platforms', 
    level: 'Advanced' 
  },
  { 
    name: 'AWS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 
    category: 'Tools & Platforms', 
    level: 'Proficient',
    invertDark: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Innovate Co.',
    content: "Working with Tobi was a game changer. His technical expertise and dedication to our project's success were outstanding. Highly recommended!",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&hair=long&clothing=blazerAndShirt'
  },
  {
    id: 'david-rodriguez',
    name: 'David Rodriguez',
    role: 'Product Manager',
    company: 'Tech Solutions',
    content: "Tobi is an incredibly skilled developer who understands product vision. He delivered a high quality mobile app on time and exceeded all our expectations.",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David&facialHair=beardMedium&clothing=hoodie'
  },
  {
    id: 'emily-white',
    name: 'Emily White',
    role: 'Lead Designer',
    company: 'Creative Agency',
    content: "The collaboration was seamless. Oluwatobi is a great communicator and brought our complex UI designs to life with precision and creativity.",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&hair=longBlonde&clothing=overall'
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    role: 'CTO',
    company: 'FinTech Start-up',
    content: "His full-stack capabilities are top-notch. Tobi built a robust and scalable web platform that has been critical for our business growth.",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&facialHair=stubble&clothing=collarAndSweater'
  },
  {
    id: 'jessica-lee',
    name: 'Jessica Lee',
    role: 'Marketing Director',
    company: 'E-commerce Brand',
    content: "A true professional who is not only talented but also a pleasure to work with. Oluwatobi consistently delivered excellent results and valuable insights.",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica&hair=straight01&clothing=shirtScoopNeck'
  },
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'Senior Engineer',
    company: 'Data Analytics Inc.',
    content: "I was impressed by Tobi's problem solving skills and clean code. He is a reliable and resourceful developer you want on your team.",
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&clothing=graphicShirt'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#hero' },
  { label: 'Contact', href: '#contact' },
];
