import React from 'react';
import Section from './ui/Section';
import { Star, PhoneMissed, Globe, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Star className="w-8 h-8 text-wallaby-accent" />,
    title: "Automated Review Requests",
    description: "Build a 5-star reputation without lifting a finger. Our systems text or email clients the moment a job is done, turning happy customers into a constant stream of new leads.",
    highlight: "Reputation Management"
  },
  {
    icon: <PhoneMissed className="w-8 h-8 text-wallaby-accent" />,
    title: "Missed Call Auto-Reply",
    description: "Stop losing money to competitors when you're on the tools. If you miss a call, our system instantly sends a professional text to the client, keeping the conversation alive.",
    highlight: "Lead Retention"
  },
  {
    icon: <Globe className="w-8 h-8 text-wallaby-accent" />,
    title: "Webpage & Google Integration",
    description: "Get a high-performance website that works hand-in-hand with your Google Business Profile. We ensure when locals search for your trade, you're the first one they see.",
    highlight: "Digital Presence"
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-wallaby-charcoal border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Our <span className="text-neutral-500">Expertise</span>
          </h2>
          <p className="text-neutral-400 max-w-md">
            Comprehensive digital tools specifically engineered for the modern Australian tradesman.
          </p>
        </div>
        <div className="hidden md:block">
           <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <ArrowUpRight className="w-8 h-8 text-wallaby-accent" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-neutral-900/50 border border-white/5 hover:border-wallaby-accent/30 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 p-4 bg-black/40 inline-block rounded-lg border border-white/5 group-hover:border-wallaby-accent/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display uppercase tracking-wide">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-wallaby-accent font-semibold">{service.highlight}</span>
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-wallaby-accent group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;