import React, { useState, useEffect, useCallback } from 'react';
import Section from './ui/Section';
import { Mail, Phone, MessageCircle, ArrowUpRight, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showTerms, setShowTerms] = useState(() => window.location.pathname === '/terms');

  const openTerms = useCallback(() => {
    setShowTerms(true);
    window.history.pushState({}, '', '/terms');
  }, []);

  const closeTerms = useCallback(() => {
    setShowTerms(false);
    window.history.pushState({}, '', '/');
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setShowTerms(window.location.pathname === '/terms');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

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
            href="mailto:alex@wallabywebdesign.com"
            className="group flex flex-col items-center p-8 md:p-12 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-300"
          >
            <div className="p-4 bg-black rounded-full mb-6 group-hover:bg-wallaby-accent transition-colors">
              <Mail className="w-8 h-8 text-white group-hover:text-black transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              Email Us
            </span>
            <span className="text-lg md:text-xl font-bold break-all">
              alex@wallabywebdesign.com
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
          <button
            onClick={openTerms}
            className="mt-3 text-xs text-neutral-400 hover:text-neutral-600 underline underline-offset-2 transition-colors"
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeTerms}
        >
          <div
            className="relative bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-10 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTerms}
              className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-display font-bold mb-6">Wallaby Web Design – Terms of Service</h3>

            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-black mb-1">1. Monthly Subscription</h4>
                <p>By purchasing a website through our Stripe checkout, you are signing up for a monthly subscription. You authorize Wallaby Web Design to charge your card every month to keep your website live and maintained.</p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-1">2. Late Payments &amp; Website Takedown</h4>
                <p className="mb-2">To keep your website running, payments must be made on time.</p>
                <p className="mb-2"><span className="font-medium text-black">The 7-Day Rule:</span> If your payment fails or is not made, you have a 7-day grace period to fix it.</p>
                <p><span className="font-medium text-black">Takedown:</span> If the fee is more than 1 week (7 days) late, Wallaby Web Design has the right to take down your website immediately.</p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-1">3. Ownership</h4>
                <p>As long as your subscription is active, you have full use of the website. If you stop paying or cancel your subscription, your right to use the website ends, and the site will be taken offline.</p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-1">4. Cancellations</h4>
                <p>You can cancel your subscription at any time. Your website will stay online until the end of your current paid month. After that, the site will be taken down until payment is made.</p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-1">5. Responsibility</h4>
                <p>Wallaby Web Design is not responsible for any lost business or data if your website is taken down due to a missed payment.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Contact;
