
import { Project, NavItem, ExperienceItem, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'journaly',
    title: 'Journaly',
    description: 'A minimalist, distraction-free journaling application focused on mental wellness. Features secure local storage, mood tracking, and a clean, accessible UI designed to encourage daily reflection habits.',
    tags: ['React Native', 'TypeScript', 'Local Storage', 'Wellness'],
    liveLink: 'https://journalybytobi.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/Journaly',
    image: 'https://picsum.photos/seed/journaly/800/600',
    category: 'mobile'
  },
  {
    id: 'habitrackerz',
    title: 'LevelUp Habit Tracker',
    description: 'Gamified habit tracking app designed for Gen Z. Visualizes progress with streaks and rewards, utilizing complex state management to persist user data and ensure a motivating, interactive experience.',
    tags: ['React', 'Gamification', 'State Mgmt', 'PWA'],
    liveLink: 'https://habitrackerz.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/LevelUp---Gen-Z-Habit-Tracker',
    image: 'https://picsum.photos/seed/habitrackerz/800/600',
    category: 'mobile'
  },
  {
    id: 'rydr',
    title: 'Rydr Taxi Booking',
    description: 'Engineered a high-performance ride-hailing platform with real-time geolocation tracking using the Google Maps API. Implemented a complex pricing algorithm and secure payment gateway integration, handling concurrent user requests with 99.9% uptime on Cloud Run.',
    tags: ['React Native', 'Google Maps', 'Firebase', 'Cloud Run'],
    liveLink: 'https://rydr-taxi-booking-886875257442.us-west1.run.app/#/login',
    githubLink: 'https://github.com/Oluwatobi01/rydr',
    image: 'https://picsum.photos/seed/rydr/800/600',
    category: 'mobile'
  },
  {
    id: 'rideconnect',
    title: 'RideConnect',
    description: 'Developed a scalable carpooling solution leveraging Socket.io for bi-directional real-time communication between drivers and riders. Designed a resilient MongoDB schema to efficiently manage complex trip data and user relationships.',
    tags: ['React Native', 'Express', 'MongoDB', 'Socket.io'],
    liveLink: 'https://rideconnect-475354164030.us-west1.run.app',
    githubLink: 'https://github.com/Oluwatobi01/RideConnect',
    image: 'https://picsum.photos/seed/rideconnect/800/600',
    category: 'fullstack'
  },
  {
    id: 'splitit',
    title: 'SplitIt',
    description: 'Built a robust expense splitting application with TypeScript for type safety and maintainability. Features include an intuitive algorithm for minimizing transaction counts within groups and a responsive UI optimized for all devices.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    liveLink: 'https://splitit-770905328490.us-west1.run.app',
    githubLink: 'https://github.com/Oluwatobi01/SplitIt',
    image: 'https://picsum.photos/seed/splitit/800/600',
    category: 'web'
  },
  {
    id: 'flocare',
    title: 'FloCare',
    description: 'Designed and developed a patient-centric healthcare management system. Focused on accessibility (WCAG compliance) and intuitive UX to ensure seamless navigation for elderly patients and healthcare providers.',
    tags: ['React', 'HealthTech', 'Netlify', 'UI/UX'],
    liveLink: 'https://flocare.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/flocare',
    image: 'https://picsum.photos/seed/flocare/800/600',
    category: 'web'
  },
  {
    id: 'constbuild',
    title: 'ConstBuild',
    description: 'Deployed a real-time project management dashboard for the construction industry using Vue.js and Firebase. Enables instant synchronization of project milestones, resource allocation, and site reports across distributed teams.',
    tags: ['Vue', 'Firebase', 'Project Mgmt'],
    liveLink: 'https://constbuild.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/constbuild',
    image: 'https://picsum.photos/seed/constbuild/800/600',
    category: 'web'
  },
  {
    id: 'tubestamp',
    title: 'TubeStamp',
    description: 'Developed a productivity tool for YouTube content creators to automate timestamp generation. Integrated directly with the YouTube Data API to fetch video metadata and format chapters, saving creators hours of manual work.',
    tags: ['React', 'YouTube API', 'Productivity'],
    liveLink: 'https://tubestamp.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/tubestamp',
    image: 'https://picsum.photos/seed/tubestamp/800/600',
    category: 'web'
  },
  {
    id: 'tobiai',
    title: 'Tobi AI',
    description: 'Implemented a futuristic landing page showcasing AI capabilities using Framer Motion for complex animations. Demonstrates high proficiency in modern CSS layouts and interactive frontend design patterns.',
    tags: ['React', 'AI Integration', 'Framer Motion'],
    liveLink: 'https://tobiai.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/tobiai',
    image: 'https://picsum.photos/seed/tobiai/800/600',
    category: 'web'
  },
  {
    id: 'bullo',
    title: 'Bullo',
    description: 'Architected a financial analytics dashboard visualizing complex crypto market data via interactive charts. Optimized API data fetching strategies to handle high-frequency updates without compromising UI performance.',
    tags: ['React', 'Finance', 'Charts', 'API'],
    liveLink: 'https://bullo.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/bullo',
    image: 'https://picsum.photos/seed/bullo/800/600',
    category: 'web'
  },
  {
    id: 'masdrive',
    title: 'MasDrive',
    description: 'Built a secure cloud storage frontend interface mimicking enterprise-grade file management systems. Focuses on intuitive file organization, drag-and-drop uploads, and responsive file previews.',
    tags: ['React', 'Cloud', 'Storage', 'UI Design'],
    liveLink: 'https://masdrive.netlify.app/',
    githubLink: 'https://github.com/Oluwatobi01/masdrive',
    image: 'https://picsum.photos/seed/masdrive/800/600',
    category: 'web'
  },
  {
    id: 'tobiapclone',
    title: 'App Clone UI',
    description: 'Executed a pixel-perfect recreation of a complex mobile application interface. Showcases extreme attention to detail in styling, layout responsiveness, and interaction fidelity using React components.',
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
