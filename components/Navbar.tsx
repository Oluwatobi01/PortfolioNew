
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`
          flex items-center justify-between p-4 rounded-2xl transition-all duration-300
          ${isScrolled ? 'bg-black/50 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent'}
        `}>
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity">
            oluwatobi<span className="text-secondary">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Oluwatobi01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:isaacabraham028@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-6 py-4">
          <div className="bg-surface border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-200 hover:text-secondary"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/Oluwatobi01" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="mailto:isaacabraham028@gmail.com"><Mail /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
