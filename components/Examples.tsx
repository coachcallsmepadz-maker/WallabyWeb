import React from 'react';
import Section from './ui/Section';

const LaptopMockup: React.FC<{ image: string; label: string; className?: string; rotation?: string }> = ({
  image,
  label,
  className = '',
  rotation = ''
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Label above laptop */}
      <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
        {label}
      </span>
      {/* Laptop frame */}
      <div className={`relative ${rotation}`}>
        {/* Screen */}
        <div className="relative w-[180px] h-[115px] md:w-[220px] md:h-[140px] lg:w-[260px] lg:h-[165px] bg-neutral-800 rounded-t-lg p-[4px] md:p-[6px] border-[3px] border-neutral-700">
          {/* Screen bezel */}
          <div className="relative w-full h-full bg-black rounded-sm overflow-hidden">
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-700 rounded-full z-10"></div>
            {/* Screen content */}
            <img
              src={image}
              alt={`${label} website example`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Laptop base/keyboard */}
        <div className="relative w-[200px] md:w-[244px] lg:w-[288px] h-[8px] md:h-[10px] bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-b-lg mx-auto">
          {/* Notch/indent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-16 h-[3px] bg-neutral-500 rounded-b-md"></div>
        </div>
        {/* Bottom lip */}
        <div className="relative w-[210px] md:w-[256px] lg:w-[300px] h-[4px] bg-neutral-700 rounded-b-xl mx-auto shadow-lg"></div>
      </div>
    </div>
  );
};

const Examples: React.FC = () => {
  return (
    <Section id="examples" className="bg-wallaby-charcoal border-t border-white/5 overflow-hidden">
      {/* Main container with laptop layout */}
      <div className="relative min-h-[800px] md:min-h-[900px] flex items-center justify-center">

        {/* Left side laptops */}
        <div className="absolute left-0 md:left-4 lg:left-12 top-0 bottom-0 flex flex-col justify-center gap-6 md:gap-8">
          <LaptopMockup
            image="/examples/plumber.png"
            label="Plumbing"
            className="transform -translate-x-8 md:translate-x-0"
            rotation="rotate-[-6deg]"
          />
          <LaptopMockup
            image="/examples/electrician.png"
            label="Electrical"
            className="transform translate-x-4 md:translate-x-8"
            rotation="rotate-[4deg]"
          />
          <LaptopMockup
            image="/examples/carpenter.png"
            label="Carpentry"
            className="transform -translate-x-4 md:translate-x-2"
            rotation="rotate-[-3deg]"
          />
        </div>

        {/* Center content - Branding */}
        <div className="relative z-10 text-center px-4 max-w-md">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-wallaby-white">
            Wallaby
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-wallaby-accent">
            Web Design
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-sm mx-auto">
            Professional websites built for Australian tradies. Stand out online and get more customers.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-wallaby-accent text-black font-semibold rounded-lg hover:bg-wallaby-accent/90 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Right side laptops */}
        <div className="absolute right-0 md:right-4 lg:right-12 top-0 bottom-0 flex flex-col justify-center gap-6 md:gap-8">
          <LaptopMockup
            image="/examples/roofing.png"
            label="Roofing"
            className="transform translate-x-8 md:translate-x-0"
            rotation="rotate-[6deg]"
          />
          <LaptopMockup
            image="/examples/builder.png"
            label="Building"
            className="transform -translate-x-4 md:-translate-x-8"
            rotation="rotate-[-4deg]"
          />
          <LaptopMockup
            image="/examples/architect.png"
            label="Architecture"
            className="transform translate-x-4 md:-translate-x-2"
            rotation="rotate-[3deg]"
          />
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center">
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-2">
          Don't see your trade?
        </p>
        <p className="text-neutral-400">
          We work with all trades across Australia. <a href="#contact" className="text-wallaby-accent hover:underline">Get in touch</a> to discuss your specific needs.
        </p>
      </div>
    </Section>
  );
};

export default Examples;
