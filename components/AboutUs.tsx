import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-primary overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Heading Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Subtle structural element behind text */}
            <div className="absolute -left-10 -top-10 w-32 h-32 border border-white/5 rounded-2xl" />
            <div className="absolute -left-5 -top-5 w-32 h-32 border border-green-500/10 rounded-2xl" />

            <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1] tracking-tighter uppercase text-white mb-8">
              Our<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Story.</span>
            </h2>
            <div className="w-16 h-1.5 bg-green-500 rounded-full" />
          </motion.div>

          {/* Monologue Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <div className="p-8 md:p-12 rounded-[2.5rem] glass-premium bg-[#141414]/80 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-6 text-lg md:text-xl text-neutral-300 font-medium leading-relaxed font-sans">
                <p>
                  I started out on the tools, working as a chippy alongside my dad. We built a lot of great things together, and I learned firsthand the dedication, hard work, and grit it takes to run a successful trade business.
                </p>
                <p>
                  When the pandemic hit in 2020, the landscape of our industry shifted overnight. I saw an opportunity to pivot my problem-solving skills, transitioning into web design specifically tailored for trade businesses across Australia. I knew the challenges tradies faced, and I knew how to build the digital infrastructure they needed to succeed.
                </p>
                <p>
                  Today, <strong className="text-white font-bold">Wallaby Web Design</strong> is a proud family-run company based out of country Victoria. We combine our hands-on industry roots with modern digital expertise to deliver websites that work as hard as you do. We don't just write code; we build reliable digital foundations that help local trade businesses grow and thrive.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
