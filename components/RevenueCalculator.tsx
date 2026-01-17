import React, { useState } from 'react';
import { X, Calculator, ChevronDown } from 'lucide-react';

interface IndustryData {
  name: string;
  avgTicket: number;
}

const industries: IndustryData[] = [
  { name: 'Plumbing', avgTicket: 450 },
  { name: 'Electrical', avgTicket: 520 },
  { name: 'HVAC', avgTicket: 680 },
  { name: 'Roofing', avgTicket: 2800 },
  { name: 'Landscaping', avgTicket: 350 },
  { name: 'Carpentry', avgTicket: 580 },
  { name: 'Painting', avgTicket: 420 },
  { name: 'Concreting', avgTicket: 1200 },
  { name: 'General Trade', avgTicket: 500 },
];

const RevenueCalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [industry, setIndustry] = useState<IndustryData>(industries[8]);
  const [missedLeadsPerWeek, setMissedLeadsPerWeek] = useState(2);
  const [avgTicket, setAvgTicket] = useState(500);

  // Update avgTicket when industry changes
  const handleIndustryChange = (newIndustry: IndustryData) => {
    setIndustry(newIndustry);
    setAvgTicket(newIndustry.avgTicket);
  };

  // Calculations
  const weeklyLoss = missedLeadsPerWeek * avgTicket;
  const monthlyLoss = weeklyLoss * 4.33;
  const yearlyLoss = monthlyLoss * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold px-5 py-3 rounded-full shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Calculator className="w-5 h-5" />
        <span className="hidden sm:inline">HOW MUCH ARE YOU LOSING?</span>
        <span className="sm:hidden">YOUR LOSS</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          {/* Calculator Modal */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-2xl border border-white/10 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Monthly <span className="text-red-500">Loss</span> Calculator
              </h2>
              <p className="text-neutral-400">
                See how much you're losing from missed leads without a website.
              </p>
            </div>

            {/* Controls */}
            <div className="p-6 md:p-8 border-b border-white/10 bg-black/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Industry Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Your Trade
                  </label>
                  <div className="relative">
                    <select
                      value={industry.name}
                      onChange={(e) => {
                        const selected = industries.find((i) => i.name === e.target.value);
                        if (selected) handleIndustryChange(selected);
                      }}
                      className="w-full appearance-none bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer"
                    >
                      {industries.map((ind) => (
                        <option key={ind.name} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                  </div>
                </div>

                {/* Missed Leads Per Week Slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Avg. Missed Calls Per Day
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={missedLeadsPerWeek}
                      onChange={(e) => setMissedLeadsPerWeek(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <div className="text-center text-white font-bold text-lg">{missedLeadsPerWeek}</div>
                  </div>
                </div>

                {/* Average Ticket Slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Avg. Job Value ($)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="50"
                      value={avgTicket}
                      onChange={(e) => setAvgTicket(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <div className="text-center text-white font-bold text-lg">{formatCurrency(avgTicket)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Weekly */}
                <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-5 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Weekly Loss
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    {formatCurrency(weeklyLoss)}
                  </div>
                </div>

                {/* Monthly */}
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-xl p-5 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                    Monthly Loss
                  </div>
                  <div className="text-3xl font-display font-bold text-red-400">
                    {formatCurrency(monthlyLoss)}
                  </div>
                </div>

                {/* Yearly */}
                <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-5 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Yearly Loss
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    {formatCurrency(yearlyLoss)}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-neutral-400 mb-4">
                  Stop losing {formatCurrency(monthlyLoss)} every month.
                </p>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105 text-lg"
                >
                  Find Out How We Help Businesses Recover This Money
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RevenueCalculator;
