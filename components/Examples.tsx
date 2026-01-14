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
      <div className="relative w-[300px] md:w-[450px] lg:w-[550px] aspect-[16/10] bg-neutral-900 rounded-t-xl p-2 border-[3px] border-neutral-700">
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
      <div className="relative w-[320px] md:w-[490px] lg:w-[590px] h-4 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-b-xl mx-auto">
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
              className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            {/* Trade label pill */}
            <div className="px-6 py-2.5 bg-neutral-800 rounded-full min-w-[140px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-medium text-white text-sm"
                >
                  {examples[currentIndex].label}
                </motion.span>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
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
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 text-sm mb-3">Don't see your trade? We work with all industries.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium text-sm"
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
