import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wrench, ShieldCheck, MessageSquare } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-primary overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase text-white mb-8">
              True<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">Grit.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pb-4"
          >
            <p className="text-2xl md:text-3xl text-neutral-300 font-medium leading-relaxed font-display">
              Built by tradies, for tradies. We know the difference between a rough-in and fit-off, and we build digital foundations <span className="text-white font-bold">that actually work.</span>
            </p>
          </motion.div>
        </div>

        {/* Massive Staggered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px] mb-24">

          {/* Card 1 - Main Mission */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-neutral-900 rounded-[2.5rem] relative overflow-hidden group h-[400px] md:h-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Construction Site"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Mission</span>
              <h3 className="text-4xl md:text-5xl text-white font-bold max-w-2xl leading-tight">No fluff, just results. We put real customers in front of real tradies.</h3>
            </div>
          </motion.div>

          {/* Card 2 - Stats or Vibe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 bg-accent rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/30 rounded-full blur-[80px]" />
            <div className="relative z-10 mt-auto">
              <ArrowUpRight className="w-16 h-16 text-primary mb-8 group-hover:rotate-45 transition-transform duration-500" />
              <h3 className="text-4xl text-primary font-black uppercase tracking-tighter leading-none mb-4">Unmatched<br />Quality</h3>
              <p className="text-primary/80 font-bold">Fast, sturdy, compliant with modern web standards.</p>
            </div>
          </motion.div>

        </div>

        {/* Why Us Features - Minimal List */}
        <div className="border-t border-white/10 pt-24 grid md:grid-cols-3 gap-12">
          {[
            {
              id: "01",
              title: "Industry Veteran",
              desc: "I've been on the tools. I know what a lead is actually worth to you.",
              icon: <Wrench className="w-8 h-8" />
            },
            {
              id: "02",
              title: "No BS Talk",
              desc: "We tell you exactly what you need, costs, and timelines without the 'tech speak'.",
              icon: <MessageSquare className="w-8 h-8" />
            },
            {
              id: "03",
              title: "Solid Build",
              desc: "Like a well-plumbed house, our sites have great flow and zero leaks.",
              icon: <ShieldCheck className="w-8 h-8" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-6">
                <span className="text-6xl font-display font-black text-white/5">{item.id}</span>
                <div className="p-4 rounded-full bg-white/5 text-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-neutral-400 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
