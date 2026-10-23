import React from 'react';
import { 
  ShieldCheck, 
  AlertOctagon, 
  FileText, 
  CheckCircle2, 
  Building, 
  Landmark, 
  Sparkles, 
  MessageCircle, 
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const ComplianceHub: React.FC = () => {
  return (
    <section id="compliance" className="relative py-24 bg-[#070b14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Statutory South African Engineering Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            SANS 10142-1 Certified. <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              100% Insurance & Legal Underwrite
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Did you know? Over 45% of solar installations across KZN are legally uncertified. In the event of a lightning surge or electrical fire, insurers routinely reject claims without a valid Master Electrician COC.
          </p>
        </div>

        {/* 3 Pillars of Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Home Insurance Protection */}
          <div className="p-7 rounded-3xl glass-card border border-white/10 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
              <AlertOctagon className="w-6 h-6 text-rose-400" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
              Insurance Claim Guarantee
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              South African short-term insurers (Santam, Discovery, Hollard, Outsurance) require registered compliance. Without an accredited COC, structural damage from power surges or roof water leaks can leave you entirely uncompensated.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero claim repudiation risk</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lightning Class II surge protection</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Municipal SSEG & Grid Registration */}
          <div className="p-7 rounded-3xl glass-card border border-purple-500/30 shadow-xl shadow-purple-500/5 hover:border-purple-500/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-6">
              <Landmark className="w-6 h-6 text-purple-400" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
              Municipal SSEG Grid Approval
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              eThekwini Municipality and Eskom require all grid-tied and hybrid installations to be registered under Small-Scale Embedded Generation (SSEG) bylaws. ESESG handles all engineering documentation, single-line diagrams, and submissions.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official Single-Line Diagrams (SLD)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Avoid municipal disconnect fines</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Deeds Office Property Value */}
          <div className="p-7 rounded-3xl glass-card border border-white/10 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <Building className="w-6 h-6 text-emerald-400" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
              Deeds Office & Property Sales
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              When selling your property in Hillcrest or Kloof, conveyancing attorneys cannot register the transfer at the Deeds Office without an up-to-date Electrical COC covering both the DB and newly added solar generation.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protects and boosts property valuation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seamless conveyancing sign-off</span>
              </div>
            </div>
          </div>

        </div>

        {/* Audit Callout Banner */}
        <div className="p-8 rounded-3xl glass-card border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-indigo-950/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-400/30 shrink-0">
              <FileCheck className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Outfit']">
                Have an existing uncertified solar setup?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                We perform comprehensive on-site inspections, DB remediation, earth resistance testing, and issue accredited SANS 10142-1 COCs across Gillitts, Hillcrest, and greater Durban.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello ESESG, I need an official SANS 10142-1 Electrical COC inspection and compliance sign-off for my property."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-500/25 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book SANS COC Audit</span>
          </a>
        </div>

      </div>
    </section>
  );
};
