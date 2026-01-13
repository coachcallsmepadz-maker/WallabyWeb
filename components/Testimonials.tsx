import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

// Trusted clients - real Aussie tradies
const trustedClients = [
  { name: "Jake", image: "/clients/tradie_1.avif" },
  { name: "Matty", image: "/clients/tradie_2.jpeg" },
  { name: "Damo", image: "/clients/tradie_3.avif" },
  { name: "Robbo", image: "/clients/tradie_4.avif" },
  { name: "Thommo", image: "/clients/tradie_5.webp" },
  { name: "Macca", image: "/clients/tradie_6.jpeg" },
  { name: "Jonno", image: "/clients/tradie_7.avif" },
  { name: "Fitzy", image: "/clients/tradie_8.jpg" },
  { name: "Jacko", image: "/clients/tradie_9.webp" },
  { name: "Carlos", image: "/clients/tradie_10.webp" },
  { name: "Richo", image: "/clients/tradie_11.jpeg" },
  { name: "Simmo", image: "/clients/tradie_12.jpeg" },
  { name: "Dazza", image: "/clients/tradie_13.jpeg" },
  { name: "Nate", image: "/clients/tradie_14.jpeg" },
  { name: "Rav", image: "/clients/tradie_15.jpeg" },
  { name: "Bazza", image: "/clients/tradie_16.webp" },
  { name: "Watto", image: "/clients/tradie_17.jpg" },
  { name: "Muzza", image: "/clients/tradie_18.jpg" }
];

const Testimonials: React.FC = () => {
  // Duplicate the array multiple times for seamless infinite scroll
  const duplicatedClients = [...trustedClients, ...trustedClients, ...trustedClients];

  return (
    <Section id="testimonials" className="bg-wallaby-dark relative overflow-hidden">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-wallaby-accent text-sm uppercase tracking-[0.3em] mb-4 block">Our Clients</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
            Trusted by <span className="text-wallaby-accent">Aussie Tradies</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            We're proud to work with hard-working tradies across Australia. From sparky to chippy, plumber to painter — these legends trust us to help grow their business.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Photos Container */}
      <div className="relative -mx-6 md:-mx-12 lg:-mx-20">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-wallaby-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-wallaby-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - CSS animation for seamless loop */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 animate-scroll"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 md:w-52 group"
              >
                {/* Photo card */}
                <div className="relative overflow-hidden rounded-xl mb-3 aspect-[4/5] bg-neutral-800">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Name only */}
                <div className="px-1">
                  <h3 className="font-bold text-white text-base">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats or trust indicators */}
      <motion.div
        className="mt-16 pt-12 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-wallaby-accent mb-2">150+</div>
            <div className="text-neutral-400 text-sm uppercase tracking-wider">Happy Tradies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-wallaby-accent mb-2">12</div>
            <div className="text-neutral-400 text-sm uppercase tracking-wider">Different Trades</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-wallaby-accent mb-2">4.9</div>
            <div className="text-neutral-400 text-sm uppercase tracking-wider">Avg Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-wallaby-accent mb-2">100%</div>
            <div className="text-neutral-400 text-sm uppercase tracking-wider">Aussie Owned</div>
          </div>
        </div>
      </motion.div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
};

export default Testimonials;
