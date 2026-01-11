import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Examples', href: '#examples' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Our Clients', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center mr-auto">
          <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">Wallaby Web Design</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base uppercase tracking-widest hover:text-wallaby-accent transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call Now Button with dropdown */}
        <div className="hidden md:flex items-center gap-3">
          {/* Phone number - visible when scrolled */}
          <a
            href="tel:0458079666"
            className={`flex items-center gap-2 text-wallaby-accent font-bold transition-all ${scrolled ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">0458 079 666</span>
          </a>

          {/* Call Now Button */}
          <div className="relative">
            <button
              onClick={() => setShowCallOptions(!showCallOptions)}
              className="px-6 py-2.5 bg-wallaby-accent text-black font-bold uppercase tracking-wider text-sm hover:bg-wallaby-accent/90 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>

            {/* Dropdown */}
            {showCallOptions && (
              <div className="absolute top-full right-0 mt-2 bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[200px] animate-fade-in">
                <a
                  href="tel:0458079666"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  onClick={() => setShowCallOptions(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-wallaby-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-wallaby-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">Phone</span>
                    <span className="text-xs text-neutral-400">0458 079 666</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/61458079666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-t border-white/5"
                  onClick={() => setShowCallOptions(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">WhatsApp</span>
                    <span className="text-xs text-neutral-400">Message us</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Call Options */}
          <div className="flex flex-col gap-3 w-full px-6 pt-4 border-t border-white/10">
            <a
              href="tel:0458079666"
              className="flex items-center justify-center gap-2 py-3 bg-wallaby-accent text-black font-bold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Call 0458 079 666
            </a>
            <a
              href="https://wa.me/61458079666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-bold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {showCallOptions && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setShowCallOptions(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
