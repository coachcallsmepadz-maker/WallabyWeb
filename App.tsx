import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Examples from './components/Examples';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-wallaby-dark text-wallaby-white font-sans selection:bg-wallaby-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Examples />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-black py-8 text-center text-neutral-500 text-sm border-t border-neutral-900">
        <p>© {new Date().getFullYear()} Wallaby Web Design. Built for Aussie Tradies.</p>
      </footer>
    </div>
  );
};

export default App;
