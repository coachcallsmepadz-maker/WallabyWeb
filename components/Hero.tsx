import React from 'react';
import { Phone, MessageCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-wallaby-dark pt-28 md:pt-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-wallaby-accent/10 via-purple-500/5 to-transparent rounded-full blur-[100px]" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-wallaby-dark to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
        {/* Brand Tag */}
        <div className="mb-6">
          <span className="text-wallaby-accent font-bold text-sm tracking-[0.15em] uppercase">
            Wallaby <span className="text-white">Web</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
          <span className="text-white">Get More Customers</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wallaby-accent via-amber-400 to-yellow-300">with a Website That Works</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
          We build websites that actually bring in jobs for Aussie tradies. No tech speak, no nonsense — just more customers finding you online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="tel:0458079666"
            className="group relative px-8 py-4 bg-wallaby-accent hover:bg-amber-400 text-black font-bold uppercase tracking-wider rounded-full overflow-hidden flex items-center justify-center gap-3 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/61458079666"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-3 border border-white/10"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Dashboard Mockup Card */}
        <div className="relative w-full max-w-3xl">
          {/* Glow effect behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-wallaby-accent/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />

          {/* Card */}
          <div className="relative bg-neutral-900/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Window dots */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-neutral-500">Your Business Dashboard</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Top Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-1">Website Visitors</div>
                  <div className="text-2xl font-bold text-white">2,847</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +24%
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-1">New Leads</div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18%
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-1">Jobs Booked</div>
                  <div className="text-2xl font-bold text-white">43</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3" /> +12%
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-white">$28K</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <DollarSign className="w-3 h-3" /> +31%
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-400">Monthly Growth</span>
                  <span className="text-lg font-bold text-green-400">+24.5%</span>
                </div>
                {/* Simple bar chart */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-wallaby-accent to-amber-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary link */}
        <a
          href="#services"
          className="mt-10 text-neutral-400 hover:text-wallaby-accent transition-colors text-sm uppercase tracking-widest"
        >
          Scroll down to see what we do ↓
        </a>
      </div>
    </div>
  );
};

export default Hero;
