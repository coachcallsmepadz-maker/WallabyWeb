import React from 'react';
import Section from './ui/Section';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-wallaby-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
          Let's <span className="text-neutral-500">Collaborate</span>
        </h2>

        {/* Catchy Slogan */}
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Contact us if you want more time actually doing the work you love—the work that makes you money—and less time on the boring admin.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Email Card */}
          <a
            href="mailto:wallabywebdesignau@gmail.com"
            className="group flex flex-col items-center p-8 md:p-12 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-300"
          >
            <div className="p-4 bg-black rounded-full mb-6 group-hover:bg-wallaby-accent transition-colors">
              <Mail className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              Email Us
            </span>
            <span className="text-lg md:text-xl font-bold break-all">
              wallabywebdesignau@gmail.com
            </span>
            <span className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-black transition-colors">
              Send an email <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* Phone Card */}
          <a
            href="tel:0458079666"
            className="group flex flex-col items-center p-8 md:p-12 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-300"
          >
            <div className="p-4 bg-black rounded-full mb-6 group-hover:bg-wallaby-accent transition-colors">
              <Phone className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              Call Us
            </span>
            <span className="text-lg md:text-xl font-bold">
              0458 079 666
            </span>
            <span className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-black transition-colors">
              Give us a ring <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/61458079666"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 md:p-12 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-300"
          >
            <div className="p-4 bg-black rounded-full mb-6 group-hover:bg-wallaby-accent transition-colors">
              <MessageCircle className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              WhatsApp
            </span>
            <span className="text-lg md:text-xl font-bold">
              +61 458 079 666
            </span>
            <span className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-black transition-colors">
              Message us <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Tagline */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-neutral-500 text-sm">
            Australian based. Local support. <span className="text-black font-medium">Grow your trade business today.</span>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
