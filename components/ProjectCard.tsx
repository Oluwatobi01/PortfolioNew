import React from 'react';
import { ExternalLink, Github, Smartphone, Monitor } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-surface border border-gray-200 dark:border-white/5 hover:border-primary/20 dark:hover:border-white/20 hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium uppercase tracking-wider text-white flex items-center gap-2">
          {project.category === 'mobile' ? <Smartphone size={12} /> : <Monitor size={12} />}
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:bg-primary dark:hover:bg-secondary transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm ${!project.liveLink ? 'flex-1' : 'px-4'}`}
              title="View Source Code"
            >
              <Github size={18} />
              {!project.liveLink && "View Code"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;