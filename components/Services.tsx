import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Star, MessageSquare, Phone, PhoneOff, Globe, Search, TrendingUp, Users, Zap, Check } from 'lucide-react';

// Animated Review Infographic - Stars flowing into reviews
const ReviewInfographic: React.FC = () => (
  <div className="relative h-48 flex items-center justify-center overflow-hidden">
    {/* Floating stars animation */}
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, y: 20, x: `${15 + i * 15}%` }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-20, -60, -100, -140],
            x: `${15 + i * 15}%`
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        >
          <Star className="w-4 h-4 text-wallaby-accent fill-wallaby-accent" />
        </motion.div>
      ))}
    </div>

    {/* Central icon container */}
    <motion.div
      className="relative z-10"
      whileHover={{ scale: 1.05 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-wallaby-accent/30"
        style={{ width: 140, height: 140, margin: -30 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main circle */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wallaby-accent/20 to-wallaby-accent/5 border border-wallaby-accent/40 flex items-center justify-center backdrop-blur-sm">
        <div className="text-center">
          <div className="flex justify-center gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-wallaby-accent fill-wallaby-accent" />
            ))}
          </div>
          <span className="text-xs text-wallaby-accent font-bold">5.0</span>
        </div>
      </div>

      {/* Orbiting elements */}
      {[0, 120, 240].map((rotation, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-neutral-800 border border-wallaby-accent/30 flex items-center justify-center"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [
              Math.cos((rotation + 0) * Math.PI / 180) * 50 - 16,
              Math.cos((rotation + 120) * Math.PI / 180) * 50 - 16,
              Math.cos((rotation + 240) * Math.PI / 180) * 50 - 16,
              Math.cos((rotation + 360) * Math.PI / 180) * 50 - 16,
            ],
            y: [
              Math.sin((rotation + 0) * Math.PI / 180) * 50 - 16,
              Math.sin((rotation + 120) * Math.PI / 180) * 50 - 16,
              Math.sin((rotation + 240) * Math.PI / 180) * 50 - 16,
              Math.sin((rotation + 360) * Math.PI / 180) * 50 - 16,
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {i === 0 && <Users className="w-4 h-4 text-wallaby-accent" />}
          {i === 1 && <MessageSquare className="w-4 h-4 text-wallaby-accent" />}
          {i === 2 && <TrendingUp className="w-4 h-4 text-wallaby-accent" />}
        </motion.div>
      ))}
    </motion.div>

    {/* Stat badge */}
    <motion.div
      className="absolute bottom-2 right-4 bg-neutral-900/90 border border-wallaby-accent/30 rounded-lg px-3 py-1.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-wallaby-accent font-bold text-lg">+87%</span>
      <span className="text-neutral-500 text-xs ml-1">reviews</span>
    </motion.div>
  </div>
);

// Animated Missed Call Infographic
const MissedCallInfographic: React.FC = () => (
  <div className="relative h-48 flex items-center justify-center overflow-hidden">
    {/* Connection line */}
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <motion.path
        d="M 70 96 Q 140 96 210 96"
        stroke="url(#gradient-line)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      />
      <defs>
        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4af37" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#D4af37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4af37" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>

    {/* Left phone - missed call */}
    <motion.div
      className="relative z-10 mr-8"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-14 h-24 bg-neutral-900 rounded-xl border border-neutral-700 overflow-hidden">
        <div className="h-3 bg-neutral-800 flex items-center justify-center">
          <div className="w-4 h-1 bg-neutral-700 rounded-full" />
        </div>
        <div className="p-2 flex flex-col items-center justify-center h-16">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <PhoneOff className="w-6 h-6 text-red-500" />
          </motion.div>
          <span className="text-[8px] text-red-400 mt-1">Missed</span>
        </div>
      </div>
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <span className="text-[8px] text-white font-bold">1</span>
      </motion.div>
    </motion.div>

    {/* Center arrow with Zap icon */}
    <motion.div
      className="relative z-10 flex flex-col items-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      <div className="w-10 h-10 rounded-full bg-wallaby-accent/20 border border-wallaby-accent flex items-center justify-center">
        <Zap className="w-5 h-5 text-wallaby-accent" />
      </div>
      <span className="text-[10px] text-wallaby-accent font-semibold mt-1">AUTO</span>
    </motion.div>

    {/* Right phone - SMS response */}
    <motion.div
      className="relative z-10 ml-8"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-14 h-24 bg-neutral-900 rounded-xl border border-wallaby-accent/50 overflow-hidden shadow-lg shadow-wallaby-accent/10">
        <div className="h-3 bg-neutral-800 flex items-center justify-center">
          <div className="w-4 h-1 bg-neutral-700 rounded-full" />
        </div>
        <div className="p-1.5 flex flex-col gap-1">
          <motion.div
            className="bg-wallaby-accent rounded-lg rounded-tl-none px-1.5 py-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-[6px] text-black font-medium">Hi! Sorry I missed...</span>
          </motion.div>
          <motion.div
            className="bg-neutral-700 rounded-lg rounded-tr-none px-1.5 py-1 self-end"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[6px] text-white">No problem!</span>
          </motion.div>
          <motion.div
            className="bg-wallaby-accent rounded-lg rounded-tl-none px-1.5 py-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <span className="text-[6px] text-black font-medium">How can I help?</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: "spring" }}
      >
        <span className="text-[10px] text-white">✓</span>
      </motion.div>
    </motion.div>

    {/* Stat badge */}
    <motion.div
      className="absolute bottom-2 right-4 bg-neutral-900/90 border border-green-500/30 rounded-lg px-3 py-1.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <span className="text-green-400 font-bold text-lg">93%</span>
      <span className="text-neutral-500 text-xs ml-1">saved</span>
    </motion.div>
  </div>
);

// Animated Web & Google Infographic
const WebGoogleInfographic: React.FC = () => (
  <div className="relative h-48 flex items-center justify-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-10">
      <div className="w-full h-full" style={{
        backgroundImage: 'linear-gradient(#D4af37 1px, transparent 1px), linear-gradient(90deg, #D4af37 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>

    {/* Website preview */}
    <motion.div
      className="relative z-10 mr-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <div className="w-20 h-16 bg-neutral-900 rounded-lg border border-neutral-700 overflow-hidden shadow-xl">
        <div className="h-2 bg-neutral-800 flex items-center gap-0.5 px-1">
          <div className="w-1 h-1 rounded-full bg-red-500" />
          <div className="w-1 h-1 rounded-full bg-yellow-500" />
          <div className="w-1 h-1 rounded-full bg-green-500" />
        </div>
        <div className="p-1.5">
          <div className="h-1.5 w-12 bg-wallaby-accent rounded mb-1" />
          <div className="h-1 w-14 bg-neutral-700 rounded mb-0.5" />
          <div className="h-1 w-10 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-6 bg-wallaby-accent rounded" />
        </div>
      </div>
      <Globe className="absolute -bottom-2 -left-2 w-5 h-5 text-wallaby-accent" />
    </motion.div>

    {/* Connection arrows */}
    <div className="flex flex-col items-center gap-1 mx-2">
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-wallaby-accent to-transparent" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      >
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-wallaby-accent to-transparent" />
      </motion.div>
    </div>

    {/* Google/Search icon */}
    <motion.div
      className="relative z-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      <div className="w-12 h-12 rounded-full bg-neutral-900 border-2 border-wallaby-accent flex items-center justify-center">
        <Search className="w-6 h-6 text-wallaby-accent" />
      </div>
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-wallaby-accent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>

    {/* Connection arrows */}
    <div className="flex flex-col items-center gap-1 mx-2">
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-wallaby-accent to-transparent" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      >
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-wallaby-accent to-transparent" />
      </motion.div>
    </div>

    {/* Search results */}
    <motion.div
      className="relative z-10 ml-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-neutral-900/90 rounded-lg border border-neutral-700 p-2 w-24">
        <span className="text-[8px] text-neutral-500 mb-1 block">RESULTS</span>

        {/* #1 Result - highlighted */}
        <motion.div
          className="flex items-center gap-1.5 bg-wallaby-accent/20 border border-wallaby-accent/40 rounded p-1 mb-1"
          animate={{ boxShadow: ['0 0 0 0 rgba(212, 175, 55, 0)', '0 0 0 4px rgba(212, 175, 55, 0.2)', '0 0 0 0 rgba(212, 175, 55, 0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 rounded-full bg-wallaby-accent flex items-center justify-center">
            <span className="text-[8px] text-black font-bold">1</span>
          </div>
          <div>
            <span className="text-[7px] text-wallaby-accent font-bold block">YOUR BIZ</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-1.5 h-1.5 text-wallaby-accent fill-wallaby-accent" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other results */}
        {[2, 3].map((num) => (
          <div key={num} className="flex items-center gap-1.5 rounded p-1 opacity-40">
            <div className="w-3 h-3 rounded-full bg-neutral-700 flex items-center justify-center">
              <span className="text-[7px] text-neutral-500">{num}</span>
            </div>
            <div className="h-1.5 w-10 bg-neutral-700 rounded" />
          </div>
        ))}
      </div>
    </motion.div>

    {/* Stat badge */}
    <motion.div
      className="absolute bottom-2 right-4 bg-neutral-900/90 border border-wallaby-accent/30 rounded-lg px-3 py-1.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <span className="text-wallaby-accent font-bold text-lg">#1</span>
      <span className="text-neutral-500 text-xs ml-1">ranking</span>
    </motion.div>
  </div>
);

const services = [
  {
    Infographic: ReviewInfographic,
    title: "Automatic Review Requests",
    description: "Happy customers become 5-star reviews — without you having to ask. We text them right after the job's done.",
    highlight: "Build Your Reputation",
    icon: Star,
    benefits: [
      "Stop chasing customers for reviews",
      "Build trust with new customers who Google you",
      "More reviews = higher in search results",
      "Works while you're on the next job"
    ]
  },
  {
    Infographic: MissedCallInfographic,
    title: "Missed Call Text-Back",
    description: "Can't answer the phone mid-job? No worries. We instantly text them so they don't call your competitor.",
    highlight: "Never Lose a Lead",
    icon: Phone,
    benefits: [
      "Stop losing jobs when you're up a ladder",
      "Customers get an instant reply, not voicemail",
      "Keeps the conversation going until you're free",
      "No more \"sorry, already hired someone else\""
    ]
  },
  {
    Infographic: WebGoogleInfographic,
    title: "Website + Google Setup",
    description: "A clean, fast website that looks great on any phone — plus we set up your Google profile so locals find you first.",
    highlight: "Get Found Online",
    icon: Globe,
    benefits: [
      "Works perfectly on every phone and tablet",
      "Shows up when people search your trade locally",
      "Customers can call or message with one tap",
      "No tech knowledge needed — we handle everything"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-wallaby-charcoal border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-wallaby-accent text-sm uppercase tracking-[0.3em] mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Tools That <span className="text-neutral-500">Save You Time</span>
          </h2>
          <p className="text-neutral-400 max-w-lg">
            Simple systems that bring in more work and keep customers happy — so you can focus on what you're good at.
          </p>
        </motion.div>
        <motion.div
          className="hidden md:flex items-center gap-4 mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex -space-x-2">
            {[Star, Phone, Globe].map((Icon, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-wallaby-charcoal flex items-center justify-center"
                whileHover={{ y: -4, zIndex: 10 }}
              >
                <Icon className="w-4 h-4 text-wallaby-accent" />
              </motion.div>
            ))}
          </div>
          <span className="text-neutral-500 text-sm">3 Core Tools</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border border-white/5 hover:border-wallaby-accent/40 rounded-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-wallaby-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Number badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="text-5xl font-display font-bold text-white/5 group-hover:text-wallaby-accent/10 transition-colors duration-500">
                0{index + 1}
              </span>
            </div>

            {/* Infographic area */}
            <div className="relative pt-12 px-4 border-b border-white/5">
              <service.Infographic />
            </div>

            {/* Content area */}
            <div className="relative z-10 p-6 lg:p-8">
              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-wallaby-accent/10 border border-wallaby-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-wallaby-accent/20 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-wallaby-accent" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-display uppercase tracking-wide group-hover:text-wallaby-accent transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              {/* Benefits list */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-wallaby-accent mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom section */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-wallaby-accent/80 font-medium">
                    {service.highlight}
                  </span>
                </div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-wallaby-accent/10 flex items-center justify-center group-hover:bg-wallaby-accent transition-all duration-300">
                    <TrendingUp className="w-4 h-4 text-wallaby-accent group-hover:text-black transition-colors duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-wallaby-accent/5 rotate-45 group-hover:bg-wallaby-accent/10 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
