import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  MessageCircle, 
  Home, 
  Building, 
  Trees, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const QuoteBuilder: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [propertyType, setPropertyType] = useState<string>('Residential Home');
  const [primaryGoal, setPrimaryGoal] = useState<string>('Load-Shedding Immunity & Savings');
  const [roofType, setRoofType] = useState<string>('Pitched Tile Roof');
  const [phaseType, setPhaseType] = useState<string>('Single Phase (230V)');
  const [timeframe, setTimeframe] = useState<string>('Urgent (Within 7-14 Days)');
  const [clientName, setClientName] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Gillitts / Hillcrest');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#38bdf8', '#fbbf24']
        });
      } catch (err) {
        // Fallback silently if confetti encounters environment issues
      }
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsCompleted(false);
  };

  const formattedWhatsAppText = `Hello ESESG Energy Team, I have configured a custom solar project spec on your website:
- Client Name: ${clientName || 'Homeowner / Business Owner'}
- Area/Suburb: ${suburb}
- Property Type: ${propertyType}
- Primary Objective: ${primaryGoal}
- Roof Structure: ${roofType}
- Electrical Phase: ${phaseType}
- Implementation Timeframe: ${timeframe}
Please review my configuration and dispatch an official quote and available site inspection dates.`;

  return (
    <section id="quote-builder" className="relative py-24 bg-[#060a12] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Multi-Step System Configurator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Build Your Tailored <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Solar & Energy Proposal
            </span>
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm">
            Configure your property details in 3 quick steps to receive an instant, engineer-reviewed solar estimate.
          </p>
        </div>

        {/* Multi-Step Card */}
        <div className="p-6 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Progress Indicators */}
          {!isCompleted && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step {step} of 3
                </span>
                <span className="text-xs font-semibold text-amber-400">
                  {step === 1 ? 'Property & Objective' : step === 2 ? 'Roof & Electrical Phase' : 'Contact & Schedule'}
                </span>
              </div>
              
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-amber-400 h-full transition-all duration-400"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && !isCompleted && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  A. What type of property are you outfitting?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Residential Home', icon: Home },
                    { label: 'Gated Estate Villa', icon: Sparkles },
                    { label: 'Commercial Office/Shop', icon: Building },
                    { label: 'Farm / Agricultural', icon: Trees },
                  ].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setPropertyType(item.label)}
                        className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center transition-all ${
                          propertyType === item.label
                            ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white'
                        }`}
                      >
                        <IconComp className="w-6 h-6 mb-2 text-amber-400" />
                        <span className="text-xs font-bold">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  B. What is your primary energy goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Load-Shedding Immunity', desc: 'Zero blackouts, seamless sub-20ms failover' },
                    { title: 'Slash Eskom Bills', desc: 'Maximum midday solar harvest & battery cycling' },
                    { title: '100% Off-Grid Freedom', desc: 'Complete independence with generator backup' },
                  ].map((goal) => (
                    <button
                      key={goal.title}
                      type="button"
                      onClick={() => setPrimaryGoal(goal.title)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        primaryGoal === goal.title
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold text-white block mb-1">{goal.title}</span>
                      <span className="text-[11px] text-slate-400">{goal.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && !isCompleted && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  C. What roof material is on the building?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'Pitched Tile Roof',
                    'Corrugated / IBR Sheeting',
                    'Flat Concrete Slab',
                    'Ground Mount / Pergola'
                  ].map((roof) => (
                    <button
                      key={roof}
                      type="button"
                      onClick={() => setRoofType(roof)}
                      className={`p-3.5 rounded-2xl border text-center transition-all ${
                        roofType === roof
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold">{roof}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  D. Electrical Supply Configuration
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Single Phase (230V)', desc: 'Standard for most homes & townhouses' },
                    { label: '3-Phase (400V)', desc: 'High-power estates, ducted aircon & commercial' }
                  ].map((phase) => (
                    <button
                      key={phase.label}
                      type="button"
                      onClick={() => setPhaseType(phase.label)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        phaseType === phase.label
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold text-white block mb-1">{phase.label}</span>
                      <span className="text-[11px] text-slate-400">{phase.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>Continue to Step 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && !isCompleted && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name / Business Title
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Suburb / Location in KZN
                  </label>
                  <input
                    type="text"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    placeholder="e.g. Gillitts, Hillcrest, Kloof"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Preferred Installation Timeframe
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    'Urgent (Within 7-14 Days)',
                    'Within 1 Month',
                    'Planning / Research Phase'
                  ].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setTimeframe(time)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        timeframe === time
                          ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                          : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs">{time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Generate My System Proposal</span>
                </button>
              </div>
            </div>
          )}

          {/* COMPLETED SUCCESS STATE */}
          {isCompleted && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">
                  Your Custom Solar Specification Is Ready!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  We have mapped your parameters to our Tier-1 engineering architecture and Master Electrician compliance team.
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 text-left max-w-lg mx-auto space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Property:</span>
                  <span className="font-bold text-white">{propertyType} ({roofType})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Electrical:</span>
                  <span className="font-bold text-amber-400">{phaseType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Primary Objective:</span>
                  <span className="font-bold text-emerald-400">{primaryGoal}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-bold text-cyan-400">{suburb}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-extrabold text-xs shadow-xl shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Send Proposal to ESESG on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
