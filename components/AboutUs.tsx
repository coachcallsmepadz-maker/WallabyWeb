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

      {/* Why Wallaby Web Section */}
      <Section className="bg-wallaby-dark relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_100%)]" />

        <div className="relative z-10 px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-wallaby-accent text-sm uppercase tracking-[0.5em] font-bold mb-4 block"
            >
              The DNA of our Code
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Why <span className="text-wallaby-accent">Wallaby Web</span>?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We don't do "fluff." We build digital foundations for tradies and small businesses who need results, not just a pretty picture. It's construction for the web.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
            {[
              {
                title: "Industry Veteran",
                desc: "I know what a lead is worth. I've been in the trade, I understand the hustle, and I know what actually moves the needle for your business.",
                icon: <Briefcase className="w-8 h-8" />
              },
              {
                title: "Zero Jargon",
                desc: "I talk to you like a person, not an IT manual. Plain English, straight answers, and clear communication from start to finish.",
                icon: <div className="text-3xl font-display">No BS</div>
              },
              {
                title: "Overbuilt Quality",
                desc: "Just like a well-built house, our sites are fast, sturdy, and designed to grow. No cheap shortcuts, no duct-tape solutions.",
                icon: <Zap className="w-8 h-8" />
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                className="group h-full"
              >
                <div className="h-full glass-premium p-8 md:p-10 rounded-[2rem] border border-white/5 group-hover:border-wallaby-accent/30 transition-all duration-500 relative flex flex-col justify-between overflow-hidden">
                  {/* Decorative background number */}
                  <div className="absolute -bottom-4 -right-4 text-9xl font-display font-bold text-white/[0.02] pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-wallaby-accent mb-8 shadow-inner">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-4">
                      {card.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-xs uppercase tracking-widest text-wallaby-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mr-2">Tradie Born</span>
                    <span className="text-neutral-700">|</span>
                    <span className="ml-2">Tech Driven</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section >
    </>
  );
};

export default AboutUs;
