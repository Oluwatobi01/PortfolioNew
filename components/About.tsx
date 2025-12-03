
import React from 'react';
import { Code, Globe, Database, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-surface/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Bio */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              More than just code. <br />
              <span className="text-gray-400">I build solutions.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              With a deep passion for mobile and web technologies, I bridge the gap between complex backend logic and silky-smooth frontend interactions. 
              Whether it's a ride-sharing app serving thousands or a niche AI tool, I bring a user-centric approach to every line of code.
            </p>
          </div>

          {/* Stat/Stack */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-transparent">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 text-white">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
            <p className="text-sm text-gray-400">Expertise in React Native ensuring native performance across iOS and Android.</p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-secondary/10 to-transparent">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 text-black">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Modern Web</h3>
            <p className="text-sm text-gray-400">Scalable web apps using React, Next.js, and modern CSS frameworks.</p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-accent/10 to-transparent">
             <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-4 text-white">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Robust Backend</h3>
            <p className="text-sm text-gray-400">Secure APIs and database architecture with Node.js and SQL/NoSQL.</p>
          </div>

          {/* Card 5 - Contact CTA */}
          <div className="md:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's collaborate</h3>
              <p className="text-sm text-gray-400">Have a project in mind?</p>
            </div>
            <a href="#contact" className="mt-8 self-start px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform">
              Get in touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
