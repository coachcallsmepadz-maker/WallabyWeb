import React from 'react';
import Section from './ui/Section';

const phoneExamples = [
  { image: '/examples/plumber.png', label: 'Plumbing', position: 'left-top' },
  { image: '/examples/electrician.png', label: 'Electrical', position: 'left-middle' },
  { image: '/examples/carpenter.png', label: 'Carpentry', position: 'left-bottom' },
  { image: '/examples/roofing.png', label: 'Roofing', position: 'right-top' },
  { image: '/examples/builder.png', label: 'Building', position: 'right-middle' },
  { image: '/examples/architect.png', label: 'Architecture', position: 'right-bottom' },
];

const PhoneMockup: React.FC<{ image: string; label: string; className?: string; rotation?: string }> = ({
  image,
  label,
  className = '',
  rotation = ''
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Label above phone */}
      <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
        {label}
      </span>
      {/* Phone frame */}
      <div className={`relative ${rotation}`}>
        {/* Phone outer bezel */}
        <div className="relative w-[140px] h-[280px] md:w-[160px] md:h-[320px] bg-black rounded-[28px] p-[6px] shadow-2xl shadow-black/50">
          {/* Phone inner bezel */}
          <div className="relative w-full h-full bg-neutral-900 rounded-[22px] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10"></div>
            {/* Screen content */}
            <img
              src={image}
              alt={`${label} website example`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Examples: React.FC = () => {
  return (
    <Section id="examples" className="bg-wallaby-charcoal border-t border-white/5 overflow-hidden">
      {/* Main container with phone layout */}
      <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">

        {/* Left side phones */}
        <div className="absolute left-0 md:left-8 lg:left-16 top-0 bottom-0 flex flex-col justify-center gap-4 md:gap-6">
          <PhoneMockup
            image="/examples/plumber.png"
            label="Plumbing"
            className="transform -translate-x-4 md:translate-x-0"
            rotation="rotate-[-8deg]"
          />
          <PhoneMockup
            image="/examples/electrician.png"
            label="Electrical"
            className="transform translate-x-8 md:translate-x-12"
            rotation="rotate-[5deg]"
          />
          <PhoneMockup
            image="/examples/carpenter.png"
            label="Carpentry"
            className="transform -translate-x-2 md:translate-x-4"
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

        {/* Right side phones */}
        <div className="absolute right-0 md:right-8 lg:right-16 top-0 bottom-0 flex flex-col justify-center gap-4 md:gap-6">
          <PhoneMockup
            image="/examples/roofing.png"
            label="Roofing"
            className="transform translate-x-4 md:translate-x-0"
            rotation="rotate-[8deg]"
          />
          <PhoneMockup
            image="/examples/builder.png"
            label="Building"
            className="transform -translate-x-8 md:-translate-x-12"
            rotation="rotate-[-5deg]"
          />
          <PhoneMockup
            image="/examples/architect.png"
            label="Architecture"
            className="transform translate-x-2 md:-translate-x-4"
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
