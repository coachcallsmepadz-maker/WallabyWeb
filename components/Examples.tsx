import React from 'react';
import Section from './ui/Section';
import { Zap, Droplets, Hammer, Paintbrush, Home, ArrowUpRight } from 'lucide-react';

const trades = [
  {
    icon: <Zap className="w-6 h-6" />,
    name: "Electricians",
    color: "from-amber-500 to-orange-600",
    description: "Spark up your online presence with a site that attracts residential and commercial clients."
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    name: "Plumbers",
    color: "from-blue-500 to-cyan-600",
    description: "Stop leaking leads. Get a website that captures emergency calls day and night."
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    name: "Carpenters",
    color: "from-amber-700 to-yellow-600",
    description: "Showcase your craftsmanship with a portfolio that builds trust and bookings."
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    name: "Painters",
    color: "from-purple-500 to-pink-600",
    description: "Paint a professional picture online with before/after galleries that convert."
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Bricklayers",
    color: "from-red-600 to-orange-700",
    description: "Solid foundations start online. Show off your masonry with a site that stands out."
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Roofers",
    color: "from-slate-600 to-zinc-700",
    description: "Rise above the competition with a website that puts you at the top of local searches."
  }
];

const Examples: React.FC = () => {
  return (
    <Section id="examples" className="bg-wallaby-charcoal border-t border-white/5">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
          Website <span className="text-neutral-500">Examples</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Every trade is different. We build tailored websites that speak directly to your customers and showcase what makes your business unique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trades.map((trade, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${trade.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative p-8 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    {trade.icon}
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-wide mb-2">
                  {trade.name}
                </h3>
              </div>

              <p className="text-white/80 text-sm leading-relaxed">
                {trade.description}
              </p>
            </div>

            {/* Hover overlay pattern */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
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
