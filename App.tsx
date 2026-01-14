import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Examples from './components/Examples';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-light font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Examples />
        <Testimonials />
        <Process />
        <AboutUs />
        <Contact />
      </main>
      <footer className="bg-primary py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">W</span>
            </div>
            <span className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Wallaby Web
            </span>
          </div>
          <p className="text-neutral-600 text-sm">
            Built for Aussie tradies, by an Aussie tradie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
