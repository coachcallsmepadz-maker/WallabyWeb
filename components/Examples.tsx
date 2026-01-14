import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const examples = [
  { image: '/examples/plumber.png', label: 'Plumbing' },
  { image: '/examples/electrician.png', label: 'Electrical' },
  { image: '/examples/carpenter.png', label: 'Carpentry' },
  { image: '/examples/roofing.png', label: 'Roofing' },
  { image: '/examples/builder.png', label: 'Building' },
  { image: '/examples/architect.png', label: 'Architecture' },
];

const LaptopMockup: React.FC<{ image: string }> = ({ image }) => (
  <div className="relative">
    {/* Laptop frame */}
    <div className="relative">
      {/* Screen */}
      <div className="relative w-[600px] md:w-[900px] lg:w-[1100px] aspect-[16/10] bg-neutral-900 rounded-t-xl p-2 border-[3px] border-neutral-700">
        {/* Screen bezel */}
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          {/* Camera dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-700 rounded-full z-10" />
          {/* Screen content */}
          <img
            src={image}
            alt="Website example"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* Laptop base/hinge */}
      <div className="relative w-[640px] md:w-[980px] lg:w-[1180px] h-4 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-b-xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-500 rounded-b" />
      </div>
    </div>

    {/* Subtle glow under laptop */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-accent/10 rounded-full blur-3xl" />
  </div>
);

const Examples: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % examples.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);

  return (
    <section id="examples" className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Laptop Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main display */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <LaptopMockup image={examples[currentIndex].image} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation with trade label */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-orange-600 hover:from-orange-500 hover:to-accent shadow-lg shadow-accent/30 flex items-center justify-center transition-all hover:scale-105"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            {/* Trade label pill */}
            <div className="px-8 py-3 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-full min-w-[160px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-medium text-white"
                >
                  {examples[currentIndex].label}
                </motion.span>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-orange-600 hover:from-orange-500 hover:to-accent shadow-lg shadow-accent/30 flex items-center justify-center transition-all hover:scale-105"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-accent' : 'bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-neutral-400 text-sm mb-4">Don't see your trade? We work with all industries.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-500 hover:to-accent text-primary font-semibold rounded-full shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:gap-3"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Examples;
