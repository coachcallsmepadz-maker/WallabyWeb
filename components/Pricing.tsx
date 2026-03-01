import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Star, Check, ArrowRight, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-24 min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Dynamic Background Blending */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-primary to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?auto=format&fit=crop&w=2560&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95" />

        {/* Glow Effects */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-primary to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-premium mb-6 border border-green-500/20 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-green-500" />
            <span className="text-sm font-bold tracking-widest uppercase text-green-500">Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            <span className="block text-white">Simple Pricing</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 mt-2 pb-2">Better Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            No hidden fees, no lock-in contracts. Just a flat rate for a professional presence that pays for itself.
          </motion.p>
        </div>

        {/* Pricing Layout - Asymmetric Bento Box */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto items-center lg:items-stretch">

          {/* Main Plan - Website Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-2/3 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] glass-premium bg-[#141414]/80 border border-white/10 overflow-hidden flex flex-col justify-between">

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wide">Website Design</h3>
                    <p className="text-green-400 font-medium tracking-wide uppercase text-sm mt-1">The Complete Package</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-display font-black text-white">$100</span>
                    <span className="text-xl text-neutral-400 font-medium">/mo</span>
                  </div>
                  <p className="text-base text-neutral-400 mt-2 font-medium">+ $449 one-off setup fee</p>
                </div>

                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                  {[
                    'Professional custom design',
                    'Mobile & Tablet responsive',
                    'Zero lock-in contracts',
                    'Fast, reliable hosting included',
                    'One-tap calling & forms',
                    'Built for Google SEO'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <span className="text-neutral-300 text-sm md:text-base font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 mt-auto">
                <a
                  href="#contact"
                  className="group flex items-center justify-between w-full p-6 rounded-2xl bg-white hover:bg-neutral-100 text-black transition-all duration-500"
                >
                  <span className="text-lg font-bold uppercase tracking-widest">Get Your Website</span>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Secondary Plan - Free setup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/3 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] glass bg-[#1a1a1a]/60 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between overflow-hidden">

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-green-500/20">
                  <Star className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-2 line-clamp-2">
                  Google Profile<br />Setup
                </h3>

                <div className="my-8 pb-8 border-b border-white/10">
                  <span className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Free</span>
                  <p className="text-neutral-500 font-medium mt-2">Valued at $299</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    'Complete profile setup',
                    'Optimized for local maps',
                    'Category selection',
                    'Seamless website integration'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/20 transition-colors">
                        <Check className="w-3 h-3 text-neutral-400 group-hover:text-green-400 transition-colors" />
                      </div>
                      <span className="text-neutral-400 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  className="group/btn flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 text-white transition-all duration-300 font-semibold uppercase tracking-wider text-sm"
                >
                  Claim Free Setup
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
