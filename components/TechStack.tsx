import React from 'react';

const TECH_STACK = [
  "React Native", "TypeScript", "Node.js", "React", "Next.js", 
  "Tailwind CSS", "Firebase", "MongoDB", "PostgreSQL", "GraphQL", 
  "Docker", "AWS", "Figma", "Git", "Vue.js", "Python", "Flutter"
];

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Double the list for infinite scroll effect */}
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <span 
              key={`${tech}-${index}`} 
              className="text-2xl md:text-4xl font-display font-bold text-transparent stroke-text hover:text-secondary transition-colors cursor-default opacity-30 hover:opacity-100 duration-300"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;