import React from 'react';
import { QuoteBuilder } from '../components/QuoteBuilder';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const QuotePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-[#070b14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnkey Proposals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Instant Solar Sizing & <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Custom Proposal Configurator
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Design your ideal energy setup in seconds. Our engineering team reviews all submissions to calculate exact roof orientation, tilt angles, and electrical distribution requirements.
          </p>
        </div>
      </section>

      {/* Quote Builder Component */}
      <QuoteBuilder />

      {/* What Happens Next Guarantee */}
      <section className="py-16 bg-[#060a12] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white font-['Outfit']">
              What Happens After You Submit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl glass-card border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">1. 30-Minute Review</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our Gillitts technical estimators verify your property type and load-shedding stage requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">2. On-Site Assessment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We conduct an on-site roof inspection, DB phase audit, and shade analysis in Gillitts, Hillcrest, or Durban.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">3. Handover & COC</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Turnkey installation completed within 2 to 4 days, signed off with an official SANS 10142-1 COC.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
