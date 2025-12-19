import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 md:p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center backdrop-blur-sm"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default BackToTop;