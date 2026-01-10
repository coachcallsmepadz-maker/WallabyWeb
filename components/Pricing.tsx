import React from 'react';
import Section from './ui/Section';
import { Star, PhoneMissed, Globe, Check, Phone, MessageCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Review Requests",
    icon: <Star className="w-6 h-6" />,
    tagline: "Get more 5-star reviews",
    setupPrice: 299,
    monthlyPrice: 100,
    description: "Automatically asks happy customers for reviews so you don't have to.",
    features: [
      "Texts customers right after the job's done",
      "One-tap link to leave a Google review",
      "Builds your online reputation on autopilot",
      "More reviews = more trust from new customers",
      "Works while you're on the next job"
    ],
    highlight: false
  },
  {
    name: "Missed Call Text-Back",
    icon: <PhoneMissed className="w-6 h-6" />,
    tagline: "Stop losing leads",
    setupPrice: 450,
    monthlyPrice: 200,
    description: "When you can't answer, we text them back instantly so they don't call someone else.",
    features: [
      "Instant text when you miss a call",
      "Custom message that sounds like you",
      "Keeps the customer engaged until you're free",
      "No more losing jobs while you're mid-cut",
      "Stops leads going to your competitors"
    ],
    highlight: true
  },
  {
    name: "Website + Google",
    icon: <Globe className="w-6 h-6" />,
    tagline: "Get found online",
    setupPrice: 499,
    monthlyPrice: 50,
    description: "A proper website that works on every phone, plus we set up your Google Business so locals find you.",
    features: [
      "Looks great on phones, tablets & computers",
      "Shows up when people search your trade",
      "Click-to-call and contact forms built in",
      "We handle all the tech stuff for you",
      "Linked to your Google Business profile"
    ],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-wallaby-dark border-t border-white/5">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-wallaby-accent text-sm uppercase tracking-[0.3em] mb-4 block">Pricing</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
          Simple, <span className="text-neutral-500">Fair Pricing</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          No hidden fees, no lock-in contracts. Just straightforward pricing for tools that actually help your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-8 rounded-lg border transition-all duration-300 ${
              plan.highlight
                ? 'bg-wallaby-charcoal border-wallaby-accent/50 shadow-lg shadow-wallaby-accent/10'
                : 'bg-wallaby-charcoal/50 border-white/10 hover:border-white/20'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-wallaby-accent text-black text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                plan.highlight ? 'bg-wallaby-accent/20' : 'bg-white/5'
              }`}>
                <span className={plan.highlight ? 'text-wallaby-accent' : 'text-wallaby-accent'}>
                  {plan.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display uppercase tracking-wide mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-neutral-500">{plan.tagline}</p>
            </div>

            {/* Pricing */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold font-display">${plan.monthlyPrice}</span>
                <span className="text-neutral-500 text-sm">/month</span>
              </div>
              <p className="text-sm text-neutral-500">
                + ${plan.setupPrice} one-time setup
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm mb-6">
              {plan.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    plan.highlight ? 'text-wallaby-accent' : 'text-neutral-500'
                  }`} />
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="tel:0458079666"
              className={`group flex items-center justify-center gap-2 py-3 px-6 rounded text-sm font-bold uppercase tracking-widest transition-all ${
                plan.highlight
                  ? 'bg-wallaby-accent text-black hover:bg-wallaby-accent/90'
                  : 'border border-white/20 hover:border-wallaby-accent hover:text-wallaby-accent'
              }`}
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        ))}
      </div>

      {/* Bundle CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-wallaby-charcoal border border-white/10 rounded-xl p-8 max-w-2xl">
          <h3 className="text-xl font-bold font-display uppercase mb-2">Want the full package?</h3>
          <p className="text-neutral-400 mb-6">
            Get all three tools bundled together and save. Give us a call or message to chat about a deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0458079666"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-wallaby-accent text-black font-bold uppercase tracking-widest hover:bg-wallaby-accent/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 0458 079 666
            </a>
            <a
              href="https://wa.me/61458079666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white font-bold uppercase tracking-widest hover:bg-green-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
