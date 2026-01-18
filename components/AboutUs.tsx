import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { ArrowUpRight, Wrench, ShieldCheck, MessageSquare } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <Section id="about" className="bg-neutral-950 !py-0 !px-0 relative" fullWidth>
      {/* Visual Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 border-t border-white/10">

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* LEFT COLUMN - Large "about" headline area */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 flex flex-col border-r border-white/10 relative">

          {/* Top Section with breadcrumb and main heading */}
          <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[50vh] lg:min-h-[60vh] relative overflow-hidden group">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-wallaby-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Breadcrumb */}
            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-neutral-500 uppercase z-10">
              <span>About</span>
            </div>

            {/* Back arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="my-4"
            >
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-wallaby-accent hover:bg-wallaby-accent/10 transition-all">
                <span className="text-white text-lg">←</span>
              </a>
            </motion.div>

            {/* Main Heading */}
            <div className="relative z-10 mt-auto">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-[clamp(4rem,15vw,9rem)] leading-[0.85] font-bold tracking-tighter text-white lowercase"
              >
                about
              </motion.h1>
            </div>

            {/* Bottom Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-32 h-24 mt-8 bg-neutral-800 relative overflow-hidden"
            >
              <img
                src="/examples/builder.png"
                alt="Construction Texture"
                className="object-cover w-full h-full opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.backgroundColor = '#262626';
                }}
              />
            </motion.div>
          </div>

          {/* Bottom Left - Mission Statement */}
          <div className="p-8 md:p-10 lg:p-12 border-t border-white/10 bg-neutral-950">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-6 block">
              Our Mission
            </span>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              We gather insights from trade, tech, and business to build digital solutions that put real customers in front of real tradies — no fluff, just results.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* MIDDLE COLUMN - Brand info + ambient glow + CTA button */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 flex flex-col border-r border-white/10 relative">

          {/* Ambient Glow Effect - Orange/warm like reference */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, rgba(218,119,13,0.35) 0%, rgba(218,119,13,0.15) 30%, rgba(218,119,13,0.05) 50%, transparent 70%)',
            }}
          />

          {/* Top Section - Brand Title */}
          <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col relative z-10 min-h-[40vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-wallaby-accent text-xs lg:text-sm font-mono tracking-[0.2em] uppercase mb-6 block">
                The Wallaby Project
              </span>
              <p className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-md">
                Wallaby Web is a digital foundation built by tradies, for tradies. We foster trust, clear communication, and genuine results between businesses who build the future and the customers who need them.
              </p>
            </motion.div>
          </div>

          {/* CTA Button - Centered circle like reference */}
          <div className="relative h-48 flex items-center justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center cursor-pointer group shadow-2xl shadow-white/10 z-20"
            >
              <span className="text-neutral-950 text-xs md:text-sm font-bold uppercase tracking-widest text-center leading-tight">
                Get In<br />Touch
              </span>
            </motion.a>
          </div>

          {/* Bottom Image Block */}
          <div className="relative h-48 md:h-56 overflow-hidden group">
            <img
              src="/examples/frames.png"
              alt="Work Context"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.backgroundColor = '#171717';
              }}
            />
            <div className="absolute inset-0 bg-neutral-950/50 group-hover:bg-wallaby-accent/20 transition-colors duration-500" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* RIGHT COLUMN - Why Us cards + Image */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 flex flex-col">

          {/* Header and Menu icon */}
          <div className="p-8 md:p-10 lg:p-12 flex justify-between items-start border-b border-white/10">
            <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-white uppercase">
              Wallaby<br />Web
            </span>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer hover:border-wallaby-accent hover:bg-wallaby-accent/10 transition-colors"
            >
              <ArrowUpRight className="text-white w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Why Us Cards - Stacked vertically */}
          <div className="flex-1 flex flex-col">
            {[
              {
                id: "01",
                title: "Industry Veteran",
                desc: "I've been on the tools. I know the difference between a rough-in and fit-off, and I know what a lead is actually worth to you.",
                icon: <Wrench className="w-5 h-5" />
              },
              {
                id: "02",
                title: "No BS Talk",
                desc: "We don't hide behind 'tech speak'. We tell you exactly what you need, what it costs, and when it will be done.",
                icon: <MessageSquare className="w-5 h-5" />
              },
              {
                id: "03",
                title: "Solid Build",
                desc: "Like a well-plumbed house, our sites have great flow and zero leaks. Fast, sturdy, and compliant with all modern standards.",
                icon: <ShieldCheck className="w-5 h-5" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 lg:p-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-wallaby-accent font-mono text-xs tracking-widest">{item.id}</span>
                  <div className="text-neutral-500 group-hover:text-wallaby-accent transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base lg:text-lg font-display font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Right Image */}
          <div className="relative h-40 md:h-48 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
              alt="Builder on Site"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-wallaby-accent/20 transition-colors duration-500" />

            {/* Decorative element */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-neutral-400 text-xs font-mono tracking-widest">
              <span className="w-4 h-px bg-neutral-400" />
              <span>BUILT DIFFERENT</span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default AboutUs;
