import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work', href: '#examples' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass-dark' : ''
          }`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">W</span>
              </div>
              <span className="hidden sm:block text-lg font-display font-semibold text-white group-hover:text-accent transition-colors">
                Wallaby Web
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:0458079666"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-8 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-display font-semibold text-white hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8 w-full max-w-xs"
              >
                <a
                  href="tel:0458079666"
                  className="flex items-center justify-center gap-3 py-4 bg-accent hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call 0458 079 666
                </a>
                <a
                  href="https://wa.me/61458079666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp Us
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
