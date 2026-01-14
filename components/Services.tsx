import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Star, ArrowUpRight, Zap, TrendingUp, Clock, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website + Google Setup',
    description: "Stop losing jobs to tradies with half your skill. A professional online presence means customers see you as the real deal—not just another bloke with a ute. You're not buying a website. You're buying better clients who pay on time and respect your work.",
    features: ['Attract higher-paying jobs', 'Look professional instantly', 'Get found when customers search'],
    color: 'from-blue-500 to-cyan-500',
    stats: [
      { icon: TrendingUp, value: '3x', label: 'More enquiries' },
      { icon: DollarSign, value: '+40%', label: 'Higher job value' },
      { icon: Clock, value: '24/7', label: 'Working for you' },
    ],
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: "5-star reviews sell your next job while you're doing this one. Our system automatically asks happy customers for reviews—so you build a reputation that brings in premium work without lifting a finger. More reviews = more trust = better jobs.",
    features: ['Reviews collect themselves', 'Build trust on autopilot', 'Win jobs before the quote'],
    color: 'from-accent to-yellow-500',
    stats: [
      { icon: Star, value: '10x', label: 'More reviews' },
      { icon: TrendingUp, value: '70%', label: 'Win rate boost' },
      { icon: Clock, value: '0 hrs', label: 'Time spent asking' },
    ],
  },
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    description: "Every missed call is money walking to your competitor. Our system texts them back instantly—so even when you're on the tools, you're still winning work. Stop chasing leads and let them come to you.",
    features: ['Never lose a lead again', 'Respond while on the job', 'More jobs, less phone tag'],
    color: 'from-green-500 to-emerald-500',
    stats: [
      { icon: Phone, value: '95%', label: 'Leads captured' },
      { icon: DollarSign, value: '$2k+', label: 'Saved per month' },
      { icon: Clock, value: '<5 sec', label: 'Response time' },
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
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
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-neutral-300">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Less admin. </span>
            <span className="text-gradient">Better clients.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Spend less time chasing leads and more time doing quality work for clients who actually pay.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl glass hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                {/* Gradient glow on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ROI Stats Infographic */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} mb-2`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xl font-display font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-neutral-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 mb-4">Ready to stop leaving money on the table?</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/5 text-white font-medium rounded-full transition-all"
          >
            See Pricing
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
