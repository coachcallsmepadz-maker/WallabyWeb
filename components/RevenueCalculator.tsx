import React, { useState, useEffect } from 'react';
import { X, TrendingDown, TrendingUp, Calculator, ChevronDown } from 'lucide-react';

interface IndustryData {
  name: string;
  avgTicket: number;
  missedCallValue: number;
  efficiencyLossRate: number;
  qualityLossRate: number;
}

const industries: IndustryData[] = [
  { name: 'Plumbing', avgTicket: 450, missedCallValue: 380, efficiencyLossRate: 0.12, qualityLossRate: 0.08 },
  { name: 'Electrical', avgTicket: 520, missedCallValue: 420, efficiencyLossRate: 0.10, qualityLossRate: 0.07 },
  { name: 'HVAC', avgTicket: 680, missedCallValue: 550, efficiencyLossRate: 0.14, qualityLossRate: 0.09 },
  { name: 'Roofing', avgTicket: 2800, missedCallValue: 2200, efficiencyLossRate: 0.15, qualityLossRate: 0.10 },
  { name: 'Landscaping', avgTicket: 350, missedCallValue: 280, efficiencyLossRate: 0.11, qualityLossRate: 0.06 },
  { name: 'Carpentry', avgTicket: 580, missedCallValue: 450, efficiencyLossRate: 0.13, qualityLossRate: 0.08 },
  { name: 'Painting', avgTicket: 420, missedCallValue: 340, efficiencyLossRate: 0.09, qualityLossRate: 0.05 },
  { name: 'Concreting', avgTicket: 1200, missedCallValue: 950, efficiencyLossRate: 0.12, qualityLossRate: 0.07 },
  { name: 'General Trade', avgTicket: 500, missedCallValue: 400, efficiencyLossRate: 0.12, qualityLossRate: 0.08 },
];

const RevenueCalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(true);
  const [industry, setIndustry] = useState<IndustryData>(industries[8]);
  const [jobsPerWeek, setJobsPerWeek] = useState(15);
  const [avgTicket, setAvgTicket] = useState(500);
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(3);
  const [viewMode, setViewMode] = useState<'leak' | 'potential'>('leak');

  // Update avgTicket when industry changes
  useEffect(() => {
    setAvgTicket(industry.avgTicket);
  }, [industry]);

  // Show floating button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowCalculator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculations
  const monthlyRevenue = jobsPerWeek * avgTicket * 4.33;
  const missedCallLoss = missedCallsPerDay * industry.missedCallValue * 22;
  const efficiencyLoss = monthlyRevenue * industry.efficiencyLossRate;
  const qualityLoss = monthlyRevenue * industry.qualityLossRate;
  const totalLeak = missedCallLoss + efficiencyLoss + qualityLoss;

  // Wallaby Recovery (80% missed calls, 60% operational)
  const recoveredMissedCalls = missedCallLoss * 0.8;
  const recoveredOperational = (efficiencyLoss + qualityLoss) * 0.6;
  const totalRecovered = recoveredMissedCalls + recoveredOperational;
  const newPotential = monthlyRevenue + totalRecovered;

  const recoveryPercentage = Math.min((totalRecovered / totalLeak) * 100, 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (!showCalculator) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold px-5 py-3 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Calculator className="w-5 h-5" />
        <span className="hidden sm:inline">FIND OUT HOW MUCH YOU'RE LOSING</span>
        <span className="sm:hidden">HOW MUCH YOU'RE LOSING</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          {/* Calculator Modal */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-2xl border border-white/10 shadow-2xl">
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
                Revenue <span className="text-amber-500">Calculator</span>
              </h2>
              <p className="text-neutral-400">
                See how much revenue you're losing—and how much Wallaby can recover.
              </p>
            </div>

            {/* Controls */}
            <div className="p-6 md:p-8 border-b border-white/10 bg-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        if (selected) setIndustry(selected);
                      }}
                      className="w-full appearance-none bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:border-amber-500/50 transition-colors cursor-pointer"
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

                {/* Jobs Per Week Slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Jobs / Week
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={jobsPerWeek}
                      onChange={(e) => setJobsPerWeek(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="text-center text-white font-bold text-lg">{jobsPerWeek}</div>
                  </div>
                </div>

                {/* Average Ticket Slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Avg. Ticket ($)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={avgTicket}
                      onChange={(e) => setAvgTicket(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="text-center text-white font-bold text-lg">{formatCurrency(avgTicket)}</div>
                  </div>
                </div>

                {/* Missed Calls Slider */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Missed Calls / Day
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={missedCallsPerDay}
                      onChange={(e) => setMissedCallsPerDay(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="text-center text-white font-bold text-lg">{missedCallsPerDay}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden p-4 border-b border-white/10">
              <div className="flex rounded-lg bg-neutral-800 p-1">
                <button
                  onClick={() => setViewMode('leak')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    viewMode === 'leak'
                      ? 'bg-red-500/20 text-red-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Current Leak
                </button>
                <button
                  onClick={() => setViewMode('potential')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    viewMode === 'potential'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Wallaby Potential
                </button>
              </div>
            </div>

            {/* Results - Side by Side on Desktop, Toggle on Mobile */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Leak */}
                <div
                  className={`${
                    viewMode === 'potential' ? 'hidden md:block' : ''
                  } bg-gradient-to-br from-red-950/50 to-red-900/20 border border-red-500/20 rounded-xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <TrendingDown className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-400">Your Monthly Leak</h3>
                      <p className="text-xs text-neutral-500">Revenue you're losing right now</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Missed Call Loss</span>
                      <span className="text-red-400 font-bold">{formatCurrency(missedCallLoss)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Efficiency Loss</span>
                      <span className="text-amber-400 font-bold">{formatCurrency(efficiencyLoss)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Quality/Rework Loss</span>
                      <span className="text-amber-400 font-bold">{formatCurrency(qualityLoss)}</span>
                    </div>
                  </div>

                  <div className="bg-red-500/10 rounded-lg p-4">
                    <div className="text-xs text-red-300 uppercase tracking-wider mb-1">Total Monthly Leak</div>
                    <div className="text-3xl font-display font-bold text-red-400">
                      {formatCurrency(totalLeak)}
                    </div>
                  </div>
                </div>

                {/* Wallaby Potential */}
                <div
                  className={`${
                    viewMode === 'leak' ? 'hidden md:block' : ''
                  } bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border border-emerald-500/20 rounded-xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-400">Wallaby Potential</h3>
                      <p className="text-xs text-neutral-500">Revenue recovered with Wallaby</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Recovered Leads (80%)</span>
                      <span className="text-emerald-400 font-bold">+{formatCurrency(recoveredMissedCalls)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Operational Savings (60%)</span>
                      <span className="text-emerald-400 font-bold">+{formatCurrency(recoveredOperational)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-neutral-400">Current Revenue</span>
                      <span className="text-white font-bold">{formatCurrency(monthlyRevenue)}</span>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 rounded-lg p-4">
                    <div className="text-xs text-emerald-300 uppercase tracking-wider mb-1">New Monthly Potential</div>
                    <div className="text-3xl font-display font-bold text-emerald-400">
                      {formatCurrency(newPotential)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recovery Progress Bar */}
              <div className="mt-8 bg-neutral-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Recovery Progress</span>
                  <span className="text-amber-400 font-bold">{recoveryPercentage.toFixed(0)}% Recoverable</span>
                </div>
                <div className="h-4 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${recoveryPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                  <span>Current State</span>
                  <span className="text-emerald-400">+{formatCurrency(totalRecovered)}/month</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <TrendingUp className="w-5 h-5" />
                  Claim Your Growth
                </a>
                <p className="mt-3 text-neutral-500 text-sm">
                  Start recovering {formatCurrency(totalRecovered)} every month
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RevenueCalculator;
