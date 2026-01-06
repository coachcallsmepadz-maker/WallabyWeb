import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Clock } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We analyze your specific trade and local competitors to identify your winning angle.",
    icon: <Search className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Design",
    desc: "Crafting a high-end, industrial visual identity that builds immediate trust with homeowners.",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Development",
    desc: "Building your digital infrastructure with clean, fast code optimized for Google's latest standards.",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "04",
    title: "Launch",
    desc: "Rigorous testing followed by immediate deployment. Your business is open for growth.",
    icon: <Rocket className="w-5 h-5" />
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-neutral-950 relative overflow-hidden py-24 md:py-32">
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 border border-wallaby-accent/30 text-wallaby-accent text-xs font-bold tracking-[0.2em] uppercase bg-wallaby-accent/5 backdrop-blur-sm rounded-sm"
          >
            Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6"
          >
            The Execution <span className="text-wallaby-accent">Protocol</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            We've stripped away the agency fluff. A streamlined, combat-tested process designed to get your digital presence active and converting in record time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative"
            >
              {/* Connector Lines (Desktop) */}
              {index < steps.length - 1 && (
                 <div className="hidden lg:block absolute top-10 left-[calc(100%-2rem)] w-[calc(100%+4rem)] h-[1px] bg-gradient-to-r from-neutral-800 to-neutral-800/0 z-0 group-hover:from-wallaby-accent/50 transition-colors duration-500" />
              )}

              <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-8 h-full hover:border-wallaby-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group-hover:bg-neutral-800/80">
                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 flex items-center justify-center bg-neutral-950 border border-neutral-800 rounded-sm text-neutral-400 group-hover:text-wallaby-accent group-hover:border-wallaby-accent/50 transition-colors">
                      {step.icon}
                   </div>
                   <span className="text-4xl font-display font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors select-none">
                      {step.id}
                   </span>
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                  {step.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4 mt-4 group-hover:border-neutral-700 transition-colors">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-wallaby-accent/10 blur-3xl rounded-full opacity-20" />
          <div className="relative bg-neutral-900/50 border border-wallaby-accent/20 p-1 rounded-2xl">
             <div className="bg-neutral-950/80 backdrop-blur-xl rounded-xl px-8 py-8 md:flex items-center justify-between gap-8 border border-white/5">
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                    <div className="w-14 h-14 rounded-full bg-wallaby-accent/10 flex items-center justify-center shrink-0 border border-wallaby-accent/20">
                        <Clock className="w-6 h-6 text-wallaby-accent animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-lg">Speed Guarantee</h4>
                        <p className="text-neutral-400 text-sm">We value your time. No endless meetings.</p>
                    </div>
                </div>
                <div className="text-right md:text-left">
                    <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1">Total Turnaround</div>
                    <div className="text-3xl md:text-4xl font-display font-bold text-white">
                        48 <span className="text-wallaby-accent">HOURS</span>
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