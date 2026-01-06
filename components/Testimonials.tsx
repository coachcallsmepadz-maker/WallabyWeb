import React from 'react';
import Section from './ui/Section';
import { Quote } from 'lucide-react';

const clients = [
  "Master Trades Group",
  "Elite Trades Australia",
  "RTL Trades",
  "Master Electricians Australia",
  "Level Group ANZ",
  "Level Plumbing Canberra",
  "Prime Electrical Data Services",
  "Complete Plumbing Contracting"
];

const testimonials = [
  {
    text: "The progress tracker is fantastic. It's motivating to see how much we've improved over time. The app has a great mix of common and challenging leads coming in.",
    author: "Fatima Khoury",
    company: "Elite Trades Australia"
  },
  {
    text: "Since launching the new site, our missed calls have converted into text conversations automatically. It's paid for itself ten times over in the first month.",
    author: "Hassan Ali",
    company: "Master Trades Group"
  },
  {
    text: "Professional, fast, and they actually understand how a trade business operates. No fluff, just results. Highly recommended.",
    author: "Nicolas Sánchez",
    company: "RTL Trades"
  },
  {
    text: "Went from 8 Google reviews to 67 in three months. Now I'm ranking #1 for 'electrician Blacktown'.",
    author: "Jason Miller",
    company: "Miller Electrical Services"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-wallaby-dark relative overflow-hidden">
      {/* Background text decoration */}
      <div className="absolute top-20 right-0 text-[20rem] font-display font-bold text-white/5 -z-10 leading-none select-none pointer-events-none opacity-20">
        TRUST
      </div>

      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8">
          Trusted <span className="text-wallaby-accent">Clients</span>
        </h2>
        
        {/* Client List / Logos (Text based for now as per prompt instructions to list them) */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-16 opacity-60">
          {clients.map((client, idx) => (
            <span key={idx} className="text-sm md:text-base font-medium uppercase tracking-wider border-b border-transparent hover:border-wallaby-accent hover:text-white hover:opacity-100 transition-all cursor-default pb-1">
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 md:p-10 bg-neutral-800 rounded-2xl relative">
            <Quote className="absolute top-8 left-8 text-wallaby-accent/20 w-12 h-12" />
            <p className="relative z-10 text-neutral-300 mb-8 leading-relaxed pt-6">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center font-bold text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{t.author}</div>
                <div className="text-xs text-wallaby-accent uppercase tracking-wider">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;