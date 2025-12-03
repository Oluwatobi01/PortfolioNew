import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'web' | 'fullstack'>('all');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary dark:text-secondary mb-2">
              <Sparkles size={16} />
              <span className="text-sm font-medium tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Selected Works</h2>
          </div>

          {/* Filters */}
          <div className="flex p-1 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 overflow-x-auto max-w-full">
            {['all', 'mobile', 'web', 'fullstack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition-all
                  ${filter === cat 
                    ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
                `}
              >
                {cat === 'fullstack' ? 'Full Stack' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;