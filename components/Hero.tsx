import React from 'react';


const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wallaby-dark pt-28 md:pt-20">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
          alt="Modern Industrial Architecture"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wallaby-dark via-wallaby-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tighter uppercase mb-6">
          <span className="block text-white">Your Vision, Our Code</span>
        </h1>

        <p className="max-w-xl text-neutral-300 text-xl flex flex-col md:text-2xl leading-relaxed mb-10 md:ml-2">
          The tech is on us.
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
