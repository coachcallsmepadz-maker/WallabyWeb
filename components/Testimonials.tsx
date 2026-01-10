import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

// Trusted clients - real Aussie tradies using reliable image sources
const trustedClients = [
  {
    name: "Jake",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Matty",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Damo",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Robbo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Thommo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Macca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Jonno",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Fitzy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Jacko",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Carlos",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Richo",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Simmo",
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Dazza",
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Nate",
    image: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Rav",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop&crop=face"
  }
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
