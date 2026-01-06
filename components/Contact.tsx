import React from 'react';
import Section from './ui/Section';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-wallaby-white text-black" fullWidth>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
              Let's <br/>Collaborate
            </h2>
            <div className="space-y-2 text-neutral-600 mb-12">
              <p className="text-lg">Australian based. Local support.</p>
              <p className="text-lg">Grow your trade business today.</p>
            </div>
          </div>
          
          <div className="space-y-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
            <div>
              <p className="mb-1 text-black">Contact</p>
              <a href="mailto:wallabywebdesignau@gmail.com" className="block hover:underline">wallabywebdesignau@gmail.com</a>
              <a href="tel:0458079666" className="block hover:underline">0458 079 666</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-neutral-100">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-neutral-400">Say Hello</h3>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400 group-focus-within:text-black transition-colors">Your Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-neutral-200 py-2 outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400 group-focus-within:text-black transition-colors">Company Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-neutral-200 py-2 outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300"
                  placeholder="Doe Plumbing"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400 group-focus-within:text-black transition-colors">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b border-neutral-200 py-2 outline-none focus:border-black transition-colors bg-transparent placeholder-neutral-300"
                placeholder="john@doeplumbing.com.au"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400 group-focus-within:text-black transition-colors">Subject</label>
              <select className="w-full border-b border-neutral-200 py-2 outline-none focus:border-black transition-colors bg-transparent text-neutral-800">
                <option>Web Design & Development</option>
                <option>Automated Reviews System</option>
                <option>Missed Call Auto-Reply</option>
                <option>Other</option>
              </select>
            </div>

            <div className="pt-8">
              <button type="button" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:gap-6 transition-all">
                Submit <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;