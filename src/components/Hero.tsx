import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Sun, 
  BatteryCharging, 
  MapPin, 
  Star,
  CheckCircle2,
  TrendingDown,
  Activity
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Gradients & Glow Cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust & Regional Authority Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/10 text-xs font-semibold text-slate-200">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>55A Old Main Rd, Gillitts • Hillcrest, KZN</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SANS 10142-1 Accredited Installation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-medium text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
              <Star className="w-3 h-3 fill-amber-400/50 text-amber-400" />
            </div>
            <span className="font-bold text-white">4.2</span>
            <span className="text-slate-400">(12 Google Reviews)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-['Outfit']">
            Intelligent 3D Solar Power. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Zero-Flicker Grid Independence.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Engineered in the Upper Highway for South Africa's harshest load-shedding stages and skyrocketing Eskom tariffs. We deliver Tier-1 N-Type solar arrays, Sunsynk & Deye hybrid inverters, and certified LiFePO4 battery storage backed by official Master Electrician COCs.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#interactive-3d"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Sun className="w-5 h-5 text-slate-950" />
            <span>Explore 3D Solar Visualizer</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#savings-engine"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 text-white font-semibold text-base border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <TrendingDown className="w-5 h-5 text-emerald-400" />
            <span>Calculate Eskom Bill Savings</span>
          </a>
        </div>

        {/* Live Grid Telemetry Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-400/30 transition-all">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>SWITCH DISRUPTION</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              &lt; 20 ms
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Zero flicker. Computers, Wi-Fi & TV remain on instantly.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-400/30 transition-all">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>LOAD-SHEDDING PROOF</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-['Space_Grotesk'] tracking-tight">
              Stage 1 – 8
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Deep LiFePO4 battery buffer engineered for multi-day outages.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-400/30 transition-all">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>TYPICAL ESKOM SAVING</span>
              <TrendingDown className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-['Space_Grotesk'] tracking-tight">
              Up to 90%
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Harness KZN's intense peak irradiance year-round.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-400/30 transition-all">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>LEGAL COMPLIANCE</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-['Space_Grotesk'] tracking-tight">
              100% COC
            </div>
            <p className="text-xs text-slate-400 mt-1">
              SANS 10142-1 certified. Fully compliant for insurance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
