import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Clock } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We analyze your specific trade and local competitors to identify your winning angle.",
    icon: <Search className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: "02",
    title: "Design",
    desc: "Crafting a high-end, industrial visual identity that builds immediate trust with homeowners.",
    icon: <PenTool className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    gradient: "from-wallaby-accent/20 to-orange-500/20"
  },
  {
    id: "03",
    title: "Development",
    desc: "Building your digital infrastructure with clean, fast code optimized for Google's latest standards.",
    icon: <Code className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    id: "04",
    title: "Launch",
    desc: "Rigorous testing followed by immediate deployment. Your business is open for growth.",
    icon: <Rocket className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    gradient: "from-red-500/20 to-wallaby-accent/20"
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-neutral-950 relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-wallaby-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-wallaby-accent/40 text-wallaby-accent text-xs font-bold tracking-[0.25em] uppercase bg-wallaby-accent/10 backdrop-blur-md rounded-full"
          >
            <span className="w-2 h-2 bg-wallaby-accent rounded-full animate-pulse" />
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8"
          >
            The Execution{' '}
            <span className="relative">
              <span className="text-wallaby-accent">Protocol</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-wallaby-accent to-wallaby-accent/0 origin-left"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Four precision-engineered phases. Zero wasted motion. From first contact to live website in 48 hours flat.
          </motion.p>
        </div>

        {/* Steps - Modern Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[380px] lg:h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end p-6 border border-neutral-800/60 bg-neutral-900/40 hover:border-wallaby-accent/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-wallaby-accent/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30 z-10" />
                <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-20 mix-blend-overlay z-10 group-hover:opacity-40 transition-opacity duration-500`} />
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
                />
              </div>

              {/* Content Foreground */}
              <div className="relative z-20 flex flex-col h-full justify-between">
                {/* Top header: Number + Icon */}
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                    {step.id}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-neutral-950/50 backdrop-blur-md border border-neutral-700/50 group-hover:border-wallaby-accent/50 flex items-center justify-center text-wallaby-accent shadow-lg transition-all duration-500 group-hover:bg-wallaby-accent group-hover:text-neutral-950 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Bottom content: Title + Desc */}
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8 bg-wallaby-accent/50 group-hover:w-12 group-hover:bg-wallaby-accent transition-all duration-500" />
                    <span className="text-wallaby-accent font-mono text-xs font-bold tracking-widest uppercase">Phase {step.id}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Hover Glow Edge Effect */}
              <div className={`absolute inset-0 border-2 rounded-3xl bg-transparent border-transparent group-hover:border-wallaby-accent/30 pointer-events-none transition-colors duration-500 z-30`} />
            </motion.div>
          ))}
        </div>

        {/* Guarantee Block - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20 relative max-w-4xl mx-auto"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-wallaby-accent/20 via-wallaby-accent/10 to-wallaby-accent/20 blur-3xl rounded-full opacity-40" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-wallaby-accent/30 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-wallaby-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-wallaby-accent/5 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="md:flex items-center justify-between gap-12">
                <div className="flex items-center gap-6 mb-8 md:mb-0">
                  {/* Animated clock icon */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-wallaby-accent to-wallaby-accent/70 flex items-center justify-center shadow-lg shadow-wallaby-accent/30">
                      <Clock className="w-10 h-10 text-neutral-950" />
                    </div>
                    <div className="absolute -inset-1 bg-wallaby-accent/30 rounded-2xl blur-md -z-10" />
                  </motion.div>

                  <div>
                    <h4 className="text-white font-display font-bold uppercase tracking-wider text-2xl md:text-3xl mb-2">
                      Speed Guarantee
                    </h4>
                    <p className="text-neutral-400 text-base">
                      No endless meetings. No scope creep. Just results.
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-2">
                    Total Turnaround
                  </div>
                  <div className="flex items-baseline justify-center md:justify-end gap-2">
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                      className="text-6xl md:text-7xl font-display font-bold text-white"
                    >
                      48
                    </motion.span>
                    <span className="text-2xl md:text-3xl font-display font-bold text-wallaby-accent uppercase">
                      Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Process;
