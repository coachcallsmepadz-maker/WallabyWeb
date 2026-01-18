import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['pricing', 'examples', 'process', 'about', 'why-us', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work', href: '#examples' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Custom CSS for navbar effects */}
      <style>{`
        .nav-glass {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.85) 0%, rgba(10, 10, 10, 0.95) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .nav-link:hover::before,
        .nav-link.active::before {
          width: 80%;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-link:hover::after {
          opacity: 1;
        }
        
        .cta-glow {
          position: relative;
          overflow: visible;
        }
        
        .cta-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #F59E0B, #D97706, #F59E0B);
          border-radius: 9999px;
          opacity: 0;
          z-index: -1;
          filter: blur(12px);
          transition: opacity 0.4s ease;
        }
        
        .cta-glow:hover::before {
          opacity: 0.6;
        }
        
        .logo-shine {
          position: relative;
          overflow: hidden;
        }
        
        .logo-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 70%
          );
          transform: translateX(-100%) rotate(45deg);
          transition: transform 0.6s ease;
        }
        
        .logo-shine:hover::after {
          transform: translateX(100%) rotate(45deg);
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .mobile-menu-item {
          position: relative;
        }
        
        .mobile-menu-item::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #F59E0B, #FBBF24);
          border-radius: 50%;
          transform: translateY(-50%) scale(0);
          transition: transform 0.3s ease;
        }
        
        .mobile-menu-item:hover::before {
          transform: translateY(-50%) scale(1);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-2' : 'py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-700 ${scrolled ? 'nav-glass' : ''
              }`}
            layout
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <motion.div
                className="logo-shine relative"
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/icon/icon.png"
                  alt="Wallaby Web Logo"
                  className="h-11 w-auto object-contain"
                />
                <motion.div
                  className="absolute -top-1 -right-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </motion.div>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-sans font-bold text-white group-hover:text-gradient-gold transition-all duration-300 tracking-tight">
                  Wallaby Web
                </span>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-neutral-500 group-hover:text-amber-400/60 transition-colors">
                  Digital Solutions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.02] rounded-full px-2 py-1.5 border border-white/[0.03]">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`nav-link px-4 py-2 text-sm font-sans font-medium transition-all duration-300 rounded-full ${activeLink === link.href
                    ? 'text-amber-400 active'
                    : 'text-neutral-400 hover:text-white'
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="tel:0458079666"
                className="cta-glow group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-sans font-semibold rounded-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  color: '#0A0A0A',
                }}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span className="tracking-wide">Call Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.98) 0%, rgba(0, 0, 0, 0.95) 100%)',
                backdropFilter: 'blur(24px)',
              }}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mobile-menu-item text-3xl font-sans font-semibold text-white hover:text-gradient-gold transition-all duration-300 tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col gap-4 mt-10 w-full max-w-sm"
              >
                <a
                  href="tel:0458079666"
                  className="flex items-center justify-center gap-3 py-4 px-6 font-sans font-semibold rounded-2xl transition-all duration-300 text-black"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call 0458 079 666
                </a>
                <a
                  href="https://wa.me/61458079666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 px-6 font-sans font-medium rounded-2xl transition-all duration-300 border border-white/10 bg-white/5 hover:bg-white/10 text-white"
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
