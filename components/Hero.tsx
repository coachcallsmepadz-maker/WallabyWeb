import React from 'react';


const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wallaby-dark pt-28 md:pt-20">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-75 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
          alt="Modern Industrial Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wallaby-dark via-wallaby-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <div className="mb-4 inline-block">
          <span className="px-3 py-1 border border-wallaby-accent/50 text-wallaby-accent text-xs tracking-[0.2em] uppercase font-bold bg-wallaby-accent/5 backdrop-blur-sm">
            Made for Aussie Tradies
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase mb-8">
          <span className="block text-white">Unbelievable Websites</span>
          <span className="block text-white">Unbelievable Prices</span>
        </h1>

        <p className="max-w-xl text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 md:ml-2">
          We build websites that actually bring in jobs. No tech speak, no nonsense — just more customers finding you online while you focus on the tools.
        </p>

        {/* Secondary link */}
        <div className="flex flex-col gap-6 md:ml-2">
          <a
            href="#pricing"
            className="text-neutral-400 hover:text-wallaby-accent transition-colors text-sm uppercase tracking-widest md:ml-2"
          >
            Or scroll down to see what we do ↓
          </a>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
    </div>
  );
};

export default Hero;
