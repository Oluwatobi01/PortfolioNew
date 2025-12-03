import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Feel free to reach out for collaborations, job opportunities, or just a friendly hello! 
            I'm always open to discussing new projects and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* Left: Form */}
          <div className="lg:col-span-3 bg-white dark:bg-surface border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form 
              className="space-y-6" 
              action="https://formspree.io/f/xzzngazr" 
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={6}
                  placeholder="Type your message here..."
                  className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Other Ways */}
          <div className="lg:col-span-2 flex flex-col gap-10 pt-4">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Other ways to connect</h3>
            
            <div className="flex flex-col gap-8">
              {/* Email */}
              <a href="mailto:isaacabraham028@gmail.com" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 text-gray-500 dark:text-gray-400 group-hover:text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary transition-colors">Email</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">isaacabraham028@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 text-gray-500 dark:text-gray-400 group-hover:text-white shadow-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary transition-colors">LinkedIn</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">/in/oluwatobi</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Oluwatobi01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 text-gray-500 dark:text-gray-400 group-hover:text-white shadow-lg">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary transition-colors">GitHub</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">/Oluwatobi01</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;