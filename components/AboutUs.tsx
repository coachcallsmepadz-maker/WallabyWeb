import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Wrench, Code, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
      <Section id="about" className="bg-wallaby-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)',
                 backgroundSize: '80px 80px'
               }}>
          </div>
          {/* Warm glow */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-wallaby-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-wallaby-accent text-sm uppercase tracking-[0.3em] mb-4 block font-bold">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-8">
              From the <span className="text-wallaby-accent">Tools</span> to the <span className="text-wallaby-accent">Code</span>
            </h2>

            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                For five years, I was on the tools as a chippie. I loved the work, but I watched firsthand as a great business—my own employer—went under. We did the best work in the area, but the jobs stopped coming because we were invisible online.
              </p>
              <p>
                Meanwhile, other crews with half the skill were booked out months in advance simply because they had a better digital presence.
              </p>
              <p className="text-white font-medium">
                That was my "aha" moment. I realized that in today's world, being the best at your craft isn't enough if nobody can find you.
              </p>
            </div>

            {/* The Pivot Section */}
            <div className="mt-10 pt-8 border-t border-neutral-800">
              <h3 className="text-2xl font-display font-bold uppercase tracking-wider mb-4 text-white">
                The Pivot
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                I hung up the tool belt and spent the next few years obsessed with a different kind of construction: <span className="text-wallaby-accent font-semibold">Web Design</span>. I learned exactly what it takes to get a trade business noticed, how to attract high-quality leads instead of "tyre-kickers," and how to turn a website into a business's hardest-working employee.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I fell in love with the design process because it's not that different from carpentry. You need a solid foundation, a clean frame, and a finish that makes people stop and look.
              </p>
            </div>
          </motion.div>

          {/* Visual Side - Trade/Tech Fusion Design */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-wallaby-accent/20 via-transparent to-wallaby-accent/10 blur-xl" />

              {/* Main circular container */}
              <div className="relative w-full h-full rounded-full border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 overflow-hidden">
                {/* Inner grid pattern */}
                <div className="absolute inset-0 opacity-10"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212, 175, 55, 0.3) 40px, rgba(212, 175, 55, 0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212, 175, 55, 0.3) 40px, rgba(212, 175, 55, 0.3) 41px)',
                     }}>
                </div>

                {/* Animated orbiting elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8"
                >
                  {/* Tool icons orbiting */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wallaby-accent to-wallaby-accent/70 flex items-center justify-center shadow-lg shadow-wallaby-accent/30">
                      <Wrench className="w-7 h-7 text-neutral-950" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Counter-rotating inner ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-20 border border-dashed border-wallaby-accent/30 rounded-full"
                />

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-wallaby-accent/20 to-transparent flex items-center justify-center border border-wallaby-accent/40"
                    >
                      <div className="text-center">
                        <div className="text-4xl font-display font-bold text-wallaby-accent">WW</div>
                        <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Est. 2020</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className="absolute w-2 h-2 rounded-full bg-wallaby-accent/60"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${30 + (i % 3) * 20}%`
                    }}
                  />
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.path
                    d="M200 100 L200 200 L300 200"
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M100 200 L200 200 L200 300"
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </svg>
              </div>

              {/* Floating tool/tech badges around the circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm text-neutral-300"
              >
                <span className="text-wallaby-accent font-bold">5+</span> Years Trade Experience
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm text-neutral-300"
              >
                <span className="text-wallaby-accent font-bold">150+</span> Sites Built
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Wallaby Web Section */}
      <Section className="bg-neutral-950 relative overflow-hidden py-16 md:py-24">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-wallaby-dark via-neutral-950 to-neutral-950" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-wallaby-accent text-sm uppercase tracking-[0.3em] mb-4 block font-bold">The Difference</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight">
              Why <span className="text-wallaby-accent">Wallaby Web</span>?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-lg">
              At Wallaby Web, we don't do "fluff." We build digital foundations for tradies and small businesses who need results, not just a pretty picture.
            </p>
          </motion.div>

          {/* Why Points */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "I Know the Industry",
                description: "I know what a \"lead\" is worth to you. I've been in the trade, I understand the hustle, and I know what actually moves the needle for your business.",
                icon: <Wrench className="w-6 h-6" />
              },
              {
                title: "No Tech-Speak",
                description: "I talk to you like a person, not an IT manual. Plain English, straight answers, and clear communication from start to finish.",
                icon: <span className="text-2xl">🗣️</span>
              },
              {
                title: "Built to Last",
                description: "Just like a well-built house, our sites are fast, sturdy, and designed to grow with you. No cheap shortcuts, no duct-tape solutions.",
                icon: <Zap className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-wallaby-accent/40 transition-all duration-500 h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-wallaby-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-wallaby-accent/10 border border-wallaby-accent/30 flex items-center justify-center text-wallaby-accent mb-4 group-hover:bg-wallaby-accent/20 transition-colors duration-300">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;
