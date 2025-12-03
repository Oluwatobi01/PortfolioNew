
import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const categories: (SkillCategory | 'All')[] = ['All', 'Frontend', 'Backend', 'Mobile', 'Languages', 'Tools & Platforms'];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-accent';
      case 'Advanced': return 'text-primary';
      case 'Proficient': return 'text-secondary';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            Skills & <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of tools I use to build modern, efficient, and delightful applications across web and mobile platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                ${activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-surface/50 border border-white/5 rounded-3xl hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.invertDark ? 'invert-on-dark' : ''}`}
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{skill.name}</h3>
              <p className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
