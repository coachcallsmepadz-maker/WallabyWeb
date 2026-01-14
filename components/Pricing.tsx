import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Star, Phone, Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Website + Google',
    icon: Globe,
    tagline: 'Look like the pro you are',
    setup: 499,
    monthly: 50,
    features: [
      'Professional website that wins trust',
      'Google Business fully optimized',
      'Show up when customers search',
      'One-tap calling & enquiry forms',
      'Fast, reliable hosting included',
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Full Package',
    icon: Sparkles,
    tagline: 'The complete business upgrade',
    setup: 999,
    monthly: 299,
    features: [
      'Everything in Website + Google',
      'Reviews collect on autopilot',
      'Never miss a lead again',
      'Priority support when you need it',
      'Monthly reports showing your growth',
    ],
    popular: true,
    color: 'from-accent to-orange-400',
  },
  {
    name: 'Review System',
    icon: Star,
    tagline: 'Let your reputation sell for you',
    setup: 299,
    monthly: 100,
    features: [
      'Automatic review requests after jobs',
      'Direct Google review integration',
      'Custom messages in your voice',
      'Track your growing reputation',
      'Stand out from the competition',
    ],
    popular: false,
    color: 'from-yellow-500 to-amber-500',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm font-medium text-neutral-300">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Invest in </span>
            <span className="text-gradient">better work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            One good job pays for months of this. No lock-in contracts—just tools that bring in clients who value your craft.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-3xl transition-all duration-300 overflow-hidden ${
                plan.popular
                  ? 'glass bg-white/[0.03] border border-accent/30'
                  : 'glass hover:bg-white/[0.03]'
              }`}>
                {/* Gradient glow for popular */}
                {plan.popular && (
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
                )}

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                {/* Header */}
                <h3 className="text-2xl font-display font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-neutral-500 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-white">${plan.monthly}</span>
                    <span className="text-neutral-500">/mo</span>
                  </div>
                  <p className="text-neutral-500 text-sm mt-1">+ ${plan.setup} setup</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-accent/20' : 'bg-white/5'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-accent' : 'text-neutral-400'}`} />
                      </div>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:0458079666"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent hover:bg-orange-600 text-white'
                      : 'glass hover:bg-white/10 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-on section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    Missed Call Text-Back
                  </h3>
                  <p className="text-neutral-400 text-sm">Stop losing leads while you're on the tools — $200/mo + $450 setup</p>
                </div>
              </div>
              <a
                href="tel:0458079666"
                className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white font-medium rounded-full transition-all"
              >
                <Phone className="w-4 h-4" />
                Learn more
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
