import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Wrench, Code, Zap, Briefcase, Rocket, ShieldCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
      <Section id="about" className="bg-wallaby-dark relative overflow-hidden min-h-screen flex items-center">
        {/* Advanced Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Construction Site Background with Parallax effect (simulated via position) */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000')" }}
          />

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}>
          </div>

          {/* Animated Laser Lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-wallaby-accent/20 to-transparent"
              style={{ top: `${20 + i * 20}%` }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}

          {/* Large Orbital Glows */}
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-wallaby-accent/5 rounded-full blur-[180px] animate-pulse-slow" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse-slow" />
        </div>

        <div className="relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-12 bg-wallaby-accent" />
                <span className="text-wallaby-accent text-sm uppercase tracking-[0.4em] font-bold">The Origin Story</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-8 leading-[0.9]">
                From the <span className="text-wallaby-accent inline-block">Tools</span> <br />
                to the <span className="text-white neon-glow-blue italic">Code</span>
              </h2>

              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
                <p className="border-l-2 border-wallaby-accent/30 pl-6 italic text-neutral-300">
                  "For five years, I was on the tools as a chippie. I loved the work, but I watched firsthand as a great business—my own employer—went under. We did the best work in the area, but the jobs stopped coming because we were invisible online."
                </p>
                <p>
                  That was my <span className="text-white font-bold">"aha" moment</span>. I realized that in today's world, being the best at your craft isn't enough if nobody can find you.
                </p>
              </div>

              {/* The Pivot Timeline */}
              <div className="mt-12 space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-neutral-800" />

                {[
                  {
                    year: "2015-2020",
                    title: "On the Tools",
                    desc: "Qualified carpenter building high-end residential frames and finishes.",
                    icon: <Wrench className="w-4 h-4" />
                  },
                  {
                    year: "2020",
                    title: "The Transition",
                    desc: "Hung up the belt to obsess over digital construction and lead generation.",
                    icon: <Rocket className="w-4 h-4" />
                  },
                  {
                    year: "Today",
                    title: "Wallaby Web",
                    desc: "Bridging the gap between trades and the digital world.",
                    icon: <ShieldCheck className="w-4 h-4" />
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center z-10 text-wallaby-accent">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-wallaby-accent uppercase tracking-widest mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Side - Digital Construction HUD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative py-20 perspective-1000"
            >
              <div className="relative aspect-square max-w-lg mx-auto h-[500px]">
                {/* Background Data Stream */}
                <div className="absolute inset-0 z-0 opacity-20 overflow-hidden rounded-3xl border border-white/5">
                  <div className="absolute top-0 left-4 bottom-0 w-px bg-wallaby-accent/20" />
                  <div className="absolute top-0 right-4 bottom-0 w-px bg-wallaby-accent/20" />
                  <div className="animate-data-flow flex flex-col gap-4 text-[10px] font-mono text-wallaby-accent/40 whitespace-nowrap px-8">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div key={i}>0XF92A {Math.random().toString(16).substr(2, 8)} BUILD_STATUS: OK // FRAME_SYNC: {Math.floor(Math.random() * 100)}%</div>
                    ))}
                  </div>
                </div>

                {/* Pane 1: The Plan (Top Left) */}
                <motion.div
                  whileHover={{ translateZ: 50, rotateX: -5, rotateY: 10 }}
                  className="absolute top-0 left-0 w-64 h-48 glass-pane rounded-2xl z-20 p-6 flex flex-col justify-between"
                  style={{ transform: 'rotateY(25deg) rotateX(10deg)' }}
                >
                  <div className="flex items-center gap-2 text-wallaby-accent mb-2">
                    <div className="w-2 h-2 rounded-full bg-wallaby-accent animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Project_Blueprint</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-1/2 bg-white/10 rounded" />
                    <div className="h-1 w-3/4 bg-white/10 rounded" />
                    <div className="h-1 w-2/3 bg-white/10 rounded" />
                  </div>
                  <div className="flex justify-between items-end">
                    <Wrench className="w-8 h-8 text-white/20" />
                    <div className="text-right">
                      <div className="text-xl font-display font-bold text-white">PLAN</div>
                      <div className="text-[8px] text-neutral-500">VERSION 2.4.0</div>
                    </div>
                  </div>
                </motion.div>

                {/* Pane 2: The Build (Bottom Right) */}
                <motion.div
                  whileHover={{ translateZ: 80, rotateX: 5, rotateY: -10 }}
                  className="absolute bottom-0 right-0 w-72 h-56 glass-pane rounded-2xl z-30 p-8 flex flex-col justify-between"
                  style={{ transform: 'rotateY(-20deg) rotateX(-5deg)' }}
                >
                  <div className="flex items-center gap-2 text-blue-500 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Active_Compilation</span>
                  </div>
                  <div className="relative flex-1 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-500/20" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-24 h-24 rounded-full border border-blue-500/30"
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-left">
                      <div className="text-2xl font-display font-bold text-white">BUILD</div>
                      <div className="text-[8px] text-neutral-500 text-blue-500/70">SYNCING_ASSETS_89%</div>
                    </div>
                    <Zap className="w-8 h-8 text-blue-500" />
                  </div>
                </motion.div>

                {/* Pane 3: The Logo (Center Floating) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass-pane rounded-full z-40 flex items-center justify-center border-wallaby-accent/40 shadow-[0_0_50px_rgba(245,158,11,0.1)]"
                >
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-white mb-1">WW</div>
                    <div className="text-[8px] text-wallaby-accent uppercase tracking-[0.3em] font-bold">Deliver</div>
                  </div>
                </motion.div>

                {/* Structural Connector Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-30" viewBox="0 0 500 500">
                  <motion.path
                    d="M100 100 L250 250 L400 400"
                    stroke="rgba(245, 158, 11, 0.5)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <motion.path
                    d="M400 100 L250 250 L100 400"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>

                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wallaby-accent/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-wallaby-accent/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-wallaby-accent/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wallaby-accent/40" />

                {/* Floating Stat Badges - Moved inside the HUD relative container */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-6 -right-12 z-30 px-6 py-4 glass-premium rounded-2xl border border-white/5"
                >
                  <div className="text-2xl font-display font-bold text-white mb-1">5+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest leading-none">Years Trade<br />Experience</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -bottom-6 -left-12 z-30 px-6 py-4 glass-premium rounded-2xl border border-white/5"
                >
                  <div className="text-2xl font-display font-bold text-wallaby-accent mb-1">150+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest leading-none">High-End<br />Sites Built</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why Wallaby Web Section - The "Site Foundation" Design */}
      <Section id="why-us" className="bg-neutral-950 relative overflow-hidden py-24 md:py-32">
        {/* Dark Concrete Texture Background */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            filter: 'contrast(120%) brightness(60%)'
          }}
        />

        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="px-4 py-1.5 rounded bg-wallaby-accent/10 border border-wallaby-accent/20 text-wallaby-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block"
            >
              Built Different
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Why <span className="text-wallaby-accent">Wallaby Web</span>?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
              We speak your language. No corporate fluff, no confusing tech-talk. Just solid digital foundations built to hold the weight of your business.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* The Builder's String Line - Connecting the cards */}
            <div className="hidden md:block absolute top-[35%] left-0 right-0 h-0.5 bg-wallaby-accent/30 z-0">
              <div className="absolute inset-y-0 left-0 right-0 bg-wallaby-accent shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[
                {
                  id: "01",
                  title: "Industry Veteran",
                  subtitle: "WE KNOW THE TRADE",
                  desc: "I've been on the tools. I know the difference between a rough-in and fit-off, and I know what a lead is actually worth to you.",
                  icon: <Wrench className="w-8 h-8" />
                },
                {
                  id: "02",
                  title: "No BS Talk",
                  subtitle: "STRAIGHT ANSWERS",
                  desc: "We don't hide behind 'tech speak'. We tell you exactly what you need, what it costs, and when it will be done. Simple.",
                  icon: <div className="text-2xl font-bold font-sans">Aa</div>
                },
                {
                  id: "03",
                  title: "Solid Build",
                  subtitle: "BUILT TO LAST",
                  desc: "Like a well-plumbed house, our sites have great flow and zero leaks. Fast, sturdy, and compliant with all modern standards.",
                  icon: <ShieldCheck className="w-8 h-8" />
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* The Card - Concrete Slab Look */}
                  <div className="h-full bg-neutral-900 border-2 border-neutral-800 rounded-lg p-8 pt-12 relative overflow-hidden transition-colors duration-300 group-hover:border-wallaby-accent/50">

                    {/* Metal Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]" />

                    {/* Top Clip Detail (Visual anchor to the line) */}
                    <div className="absolute top-[35%] -translate-y-[2px] -left-[2px] -right-[2px] h-1 flex justify-between items-center px-0">
                      <div className="w-1.5 h-3 bg-wallaby-accent rounded-r-sm shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                      <div className="w-1.5 h-3 bg-wallaby-accent rounded-l-sm shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    </div>

                    {/* Stencil Number */}
                    <div className="absolute top-4 right-4 text-6xl font-display font-bold text-white/[0.04] group-hover:text-wallaby-accent/10 transition-colors select-none font-sans tracking-tighter">
                      {card.id}
                    </div>

                    {/* Icon Box */}
                    <div className="relative mb-12">
                      <div className="w-16 h-16 bg-neutral-800 rounded flex items-center justify-center text-white border border-neutral-700 shadow-inner group-hover:bg-neutral-800 transition-colors">
                        {card.icon}
                      </div>
                      {/* Connector Line Vertical Drop */}
                      <div className="absolute top-16 left-8 w-px h-8 bg-neutral-700 group-hover:bg-wallaby-accent/50 transition-colors" />
                    </div>

                    <div className="relative">
                      <div className="text-xs font-bold text-wallaby-accent uppercase tracking-widest mb-2 font-mono">
                        {card.subtitle}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-4">
                        {card.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4 group-hover:border-neutral-700 transition-colors">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 text-neutral-500 text-sm font-mono uppercase tracking-widest">
                <div className="h-px w-8 bg-neutral-800" />
                <span>Est. 2026 // Melbourne, AU</span>
                <div className="h-px w-8 bg-neutral-800" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;
