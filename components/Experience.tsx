
import React from 'react';
import { EXPERIENCE } from '../constants';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = EXPERIENCE.filter(item => item.type === 'work');
  const educationExperience = EXPERIENCE.filter(item => item.type === 'education');

  return (
    <section id="experience" className="py-24 px-6 relative scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        
        {/* Work Experience */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Center Line - Hidden on Mobile */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block"></div>

            <div className="flex flex-col gap-12 md:gap-0">
              {workExperience.map((item, index) => (
                <div key={item.id} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-[0_0_10px_rgba(0,245,212,0.5)] z-10"></div>
                  
                  {/* Content Width Wrapper */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl hover:border-white/20 transition-colors duration-300 relative group">
                      
                      {/* Mobile Line Decoration */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-l-3xl md:hidden opacity-50"></div>

                      <span className="text-sm font-medium text-gray-500 mb-2 block tracking-wide">{item.period}</span>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                        {item.role} <span className="text-gray-400 font-normal">@</span> <span className="text-primary">{item.company}</span>
                      </h3>
                      
                      <div className="mt-6 space-y-3">
                        {item.description.map((desc, i) => (
                          <div key={i} className="flex gap-3 items-start text-gray-400 text-sm leading-relaxed">
                            <ChevronRight size={16} className="mt-1 text-secondary shrink-0" />
                            <p>{desc}</p>
                          </div>
                        ))}
                      </div>

                      {item.skills.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-full border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Education
          </h2>

          <div className="relative">
             {/* Center Line - Hidden on Mobile */}
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block"></div>

            <div className="flex flex-col gap-12 md:gap-0">
              {educationExperience.map((item, index) => (
                <div key={item.id} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                   {/* Timeline Dot (Desktop) */}
                   <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_10px_rgba(138,43,226,0.5)] z-10"></div>

                  <div className="w-full md:w-1/2 md:pr-12">
                     <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl hover:border-white/20 transition-colors duration-300 relative group">
                        
                       {/* Mobile Line Decoration */}
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-3xl md:hidden opacity-50"></div>

                      <span className="text-sm font-medium text-gray-500 mb-2 block tracking-wide">{item.period}</span>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-lg text-secondary mb-4">{item.company}</p>

                      <div className="mt-4 space-y-3">
                        {item.description.map((desc, i) => (
                          <div key={i} className="flex gap-3 items-start text-gray-400 text-sm leading-relaxed">
                            <ChevronRight size={16} className="mt-1 text-primary shrink-0" />
                            <p>{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
