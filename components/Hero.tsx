import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Blobs (Adjusted for less intrusion) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-medium text-secondary tracking-wide uppercase">Available for Hire</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Crafting Digital <br/>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm <span className="text-white font-medium">Tobi</span>. A Mobile & Full-Stack Developer passionate about building intuitive apps and websites with clean code and user-centric design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/25"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md aspect-square">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-primary opacity-75 blur-xl animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=800&auto=format&fit=crop" 
                alt="Oluwatobi - Developer" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient for text readability/style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge (optional decoration) */}
            <div className="absolute -bottom-6 -left-6 bg-surface/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-surface"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-surface flex items-center justify-center text-[10px] font-bold">+50</div>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Happy Clients</p>
                  <p className="text-sm font-bold">Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30 text-white hidden lg:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;