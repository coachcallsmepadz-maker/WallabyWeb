import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Clock, ChevronRight } from 'lucide-react';

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
    <Section id="process" className="bg-neutral-950 relative overflow-hidden py-24 md:py-32">
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
        <div className="text-center mb-20">
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

        {/* Steps - Alternating Layout */}
        <div className="space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`md:grid md:grid-cols-2 md:gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${index !== steps.length - 1 ? 'md:mb-24' : ''}`}
            >
              {/* Image Side */}
              <div className={`relative mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  {/* Glow effect behind image */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-800 group-hover:border-wallaby-accent/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10" />
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Step number overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="text-8xl md:text-9xl font-display font-bold text-white/5 select-none">
                        {step.id}
                      </span>
                    </div>

                    {/* Icon badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute bottom-6 right-6 z-20 w-16 h-16 rounded-2xl bg-wallaby-accent/90 backdrop-blur-sm flex items-center justify-center text-neutral-950 shadow-lg shadow-wallaby-accent/30"
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {/* Phase indicator */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <span className="text-wallaby-accent font-mono text-sm font-bold tracking-wider">PHASE {step.id}</span>
                    <div className="h-px w-12 bg-gradient-to-r from-wallaby-accent to-transparent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-6 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Visual connector to next step (desktop) */}
                  {index < steps.length - 1 && (
                    <div className={`hidden md:flex items-center gap-2 text-neutral-600 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                      <ChevronRight className="w-5 h-5 text-wallaby-accent/50" />
                      <span className="text-sm uppercase tracking-wider">Next Phase</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Timeline (Mobile) */}
        <div className="md:hidden mt-12">
          <div className="flex justify-between items-center px-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-wallaby-accent" />
                <span className="text-xs text-neutral-500 mt-2">{step.id}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 mx-4 h-0.5 bg-gradient-to-r from-wallaby-accent via-wallaby-accent to-wallaby-accent/30 rounded-full" />
        </div>

        {/* Guarantee Block - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 md:mt-32 relative max-w-4xl mx-auto"
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
