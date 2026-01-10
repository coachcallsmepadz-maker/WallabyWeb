import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

// Trusted clients - real Aussie tradies
const trustedClients = [
  {
    name: "Jake & Bazza",
    image: "https://content.api.news/v3/images/bin/c556498d331f53c01e1f6ce8ab4a5c01"
  },
  {
    name: "Matty",
    image: "https://programmed.com.au/wp-content/uploads/2020/03/Matt-Whitbread-Kyneton-e1584586069498.jpg"
  },
  {
    name: "Damo",
    image: "https://www.koimag.com/wp-content/uploads/2023/03/tradies.jpg"
  },
  {
    name: "Robbo",
    image: "https://www.turningpointnews.com.au/wp-content/uploads/2022/09/Worker-hard-hat.jpg"
  },
  {
    name: "Thommo",
    image: "https://www.afr.com/content/dam/images/h/1/d/e/l/z/image.imgtype.afrArticleLead.620x350.png/1597795639775.png"
  },
  {
    name: "Macca",
    image: "https://static1.squarespace.com/static/5d06c5737cd5b00001ce9f16/t/5e9cc6f5e88455481ed68989/1587332856028/IMG_1700.JPG"
  },
  {
    name: "Jonno",
    image: "https://images.squarespace-cdn.com/content/v1/5fc0ff8f60f00a20999cfa56/1606535170193-6X8EZXK9N8YQ9L4PL1JE/Builder.jpg"
  },
  {
    name: "Fitzy",
    image: "https://www.reachgroup.com.au/wp-content/uploads/2020/08/iStock-636372466.jpg"
  },
  {
    name: "Jacko",
    image: "https://www.moneymanager.com.au/wp-content/uploads/2021/07/tradie-1.jpg"
  },
  {
    name: "Carlos",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=500&fit=crop&crop=face"
  },
  {
    name: "Richo",
    image: "https://www.onthejob.co.nz/wp-content/uploads/2019/08/TRC-web.jpg"
  },
  {
    name: "Simmo",
    image: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/oursite/2023/09/05/1693886095-builder.jpg"
  },
  {
    name: "Dazza",
    image: "https://www.uglyfish.com.au/cdn/shop/articles/Worker_with_Ugly_Fish_safety_glasses_512x512.jpg"
  },
  {
    name: "Nate",
    image: "https://i.pinimg.com/736x/40/b5/6f/40b56f3125fa93f56f5bf8d29618f993.jpg"
  },
  {
    name: "Rav",
    image: "https://www.uglyfish.com.au/cdn/shop/articles/Tradie-in-high-vis-shirt-wearing-Ugly-Fish-safety-sunglasses_512x512.jpg"
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
