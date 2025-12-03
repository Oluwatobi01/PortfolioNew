
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative bg-surface/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What People Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-surface/50 border border-white/5 rounded-3xl p-8 hover:bg-surface hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-white/10 bg-white/5">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1">{testimonial.name}</h3>
              <div className="text-sm text-gray-400 mb-6 flex flex-col">
                <span className="text-secondary">{testimonial.role}</span>
                <span>at {testimonial.company}</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-24">
          <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300">
            Load More
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Want to build something great together?
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always excited to hear about new projects and opportunities.
          </p>
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-secondary text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,245,212,0.3)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
