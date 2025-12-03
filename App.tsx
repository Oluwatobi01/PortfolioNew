
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white font-sans">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-40 mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
