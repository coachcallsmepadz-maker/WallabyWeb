import React from 'react';
import Section from './ui/Section';
import { Star, PhoneMissed, Globe, Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Review Requests",
    icon: <Star className="w-6 h-6" />,
    tagline: "Build your reputation",
    setupPrice: 299,
    monthlyPrice: 100,
    description: "Streamlines the process of gathering social proof from customers.",
    features: [
      "Automatic SMS or email triggers",
      "Sends when job marked complete or payment processed",
      "Direct link to Google or Facebook review page",
      "Builds online ranking automatically",
      "Increases credibility without manual effort"
    ],
    highlight: false
  },
  {
    name: "Missed Call Auto-Reply",
    icon: <PhoneMissed className="w-6 h-6" />,
    tagline: "Never lose a lead",
    setupPrice: 450,
    monthlyPrice: 200,
    description: "Ensures you don't lose leads when you're unable to answer the phone.",
    features: [
      "Recognizes unanswered incoming calls",
      "Instant professional text response",
      "Custom message (e.g., \"Hi! Sorry we missed you. How can we help?\")",
      "Starts conversation immediately",
      "Prevents leads from calling competitors"
    ],
    highlight: true
  },
  {
    name: "Website & Google Sync",
    icon: <Globe className="w-6 h-6" />,
    tagline: "Complete digital presence",
    setupPrice: 499,
    monthlyPrice: 50,
    description: "Builds your online storefront and syncs with your business tools.",
    features: [
      "Drag-and-drop website builder",
      "Mobile-responsive design",
      "Your branding, services & booking links",
      "Contact forms and chat widgets",
      "Google Business Profile integration",
      "Manage reviews from one dashboard"
    ],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-wallaby-dark border-t border-white/5">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
          Simple <span className="text-neutral-500">Pricing</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Choose the tools that fit your business.
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
                  Popular
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
                + ${plan.setupPrice} setup fee
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
              href="#contact"
              className={`group flex items-center justify-center gap-2 py-3 px-6 rounded text-sm font-bold uppercase tracking-widest transition-all ${
                plan.highlight
                  ? 'bg-wallaby-accent text-black hover:bg-wallaby-accent/90'
                  : 'border border-white/20 hover:border-wallaby-accent hover:text-wallaby-accent'
              }`}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-500 text-sm">
          Need all three? <a href="#contact" className="text-wallaby-accent hover:underline">Contact us</a> for a bundled package deal.
        </p>
      </div>
    </Section>
  );
};

export default Pricing;
