import React from 'react';
import { SolarCalculator } from '../components/SolarCalculator';
import { 
  TrendingDown, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const CalculatorPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-[#070b14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Interactive Financial Engine</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Eskom Tariff & Outage <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Sizing Calculator
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Accurately size your solar PV array, hybrid inverter, and lithium battery storage to match your monthly electrical consumption and load-shedding requirements.
          </p>
        </div>
      </section>

      {/* Main Solar Calculator Component */}
      <SolarCalculator />

      {/* Tariff Inflation Warning Section */}
      <section className="py-20 bg-[#060a12] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-amber-500/30 bg-gradient-to-br from-slate-900/90 to-slate-950/95 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30 shrink-0">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white font-['Outfit'] mb-3">
                  The True Cost of Waiting: Eskom's 12.7% Annual Escalation
                </h2>
                
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Over the past 15 years, South African electricity prices have increased by over <strong>650%</strong>. For a household currently spending <strong>R4,500/month</strong>, projected monthly payments will exceed <strong>R12,500/month</strong> by 2032 if reliant on the grid.
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  By installing a certified ESESG hybrid solar solution today, you lock in clean energy generation at a fixed amortized cost, achieving full capital payback within 3 to 4 years.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                      "Hello ESESG, I would like to schedule an on-site energy assessment to analyze my Eskom tariff breakdown."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Book On-Site Energy Audit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
