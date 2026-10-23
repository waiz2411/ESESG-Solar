import React, { useState } from 'react';
import { 
  Zap, 
  TrendingDown, 
  ShieldAlert, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  BatteryCharging, 
  Sun, 
  Building, 
  Home, 
  ChevronRight,
  Info
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const SolarCalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);
  const [loadSheddingStage, setLoadSheddingStage] = useState<number>(6);
  const [propertyType, setPropertyType] = useState<'residential' | 'estate' | 'commercial'>('residential');

  // Intelligent calculations tailored for South African Eskom tariffs (~R3.40/kWh avg)
  const monthlyKwh = Math.round(monthlyBill / 3.4);
  const dailyKwh = Math.round(monthlyKwh / 30);

  // Solar sizing formulas
  let recommendedKw = Number(Math.max(3.3, (dailyKwh / 4.8) * 1.15).toFixed(1));
  let panelCount = Math.ceil((recommendedKw * 1000) / 550);
  
  // Inverter selection
  let inverterSize = 5;
  if (recommendedKw > 10 || propertyType === 'commercial') {
    inverterSize = 16;
  } else if (recommendedKw > 6 || propertyType === 'estate') {
    inverterSize = 8;
  } else if (recommendedKw > 4.5) {
    inverterSize = 8;
  } else {
    inverterSize = 5;
  }

  // Battery sizing based on bill and load-shedding stage
  let batteryKwh = 5.12;
  if (loadSheddingStage >= 6 || propertyType === 'commercial') {
    batteryKwh = recommendedKw > 8 ? 20.48 : 10.24;
  } else if (loadSheddingStage >= 4) {
    batteryKwh = 10.24;
  } else {
    batteryKwh = 5.12;
  }

  // Savings estimates
  const estimatedSavingsMonthly = Math.round(monthlyBill * 0.82);
  const estimatedAnnualSavings = estimatedSavingsMonthly * 12;
  
  // 10-year cumulative calculation with 12.5% Eskom tariff compounding
  let cumulative10YearSavings = 0;
  let yearRate = estimatedAnnualSavings;
  for (let y = 0; y < 10; y++) {
    cumulative10YearSavings += yearRate;
    yearRate *= 1.125;
  }
  const formatted10YearSavings = Math.round(cumulative10YearSavings).toLocaleString();

  // Load-shedding runtime estimate
  const estimatedBackupHours = Math.round((batteryKwh * 0.9) / (dailyKwh / 24 * 0.65));

  const whatsappMessage = `Hello ESESG, I used your online Solar Sizing Engine with the following requirements:
- Property: ${propertyType.toUpperCase()}
- Current Eskom Bill: R${monthlyBill.toLocaleString()}/month
- Target Outage Resilience: Stage ${loadSheddingStage}
- Recommended Config: ${recommendedKw}kW Solar PV (${panelCount}x 550W Panels), ${inverterSize}kW Hybrid Inverter, ${batteryKwh}kWh LiFePO4 Storage
- Est. Monthly Savings: R${estimatedSavingsMonthly.toLocaleString()}
Please furnish an official proposal and site visit date for Gillitts / Hillcrest area.`;

  return (
    <section id="savings-engine" className="relative py-20 bg-[#070c16] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>South African Tariff & Sizing Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Calculate Your Eskom Relief <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              & Outage Independence
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Adjust your monthly electricity expense to determine exact solar array sizing, inverter specs, lithium battery capacity, and projected 10-year capital savings.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card border border-white/10 shadow-2xl">
            
            <div className="space-y-8">
              
              {/* Property Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  1. Select Property Configuration
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setPropertyType('residential')}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                      propertyType === 'residential'
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Home className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="text-xs font-bold">Standard Home</span>
                    <span className="text-[10px] text-slate-400">Single Phase</span>
                  </button>

                  <button
                    onClick={() => setPropertyType('estate')}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                      propertyType === 'estate'
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="text-xs font-bold">Luxury Estate</span>
                    <span className="text-[10px] text-slate-400">High Capacity</span>
                  </button>

                  <button
                    onClick={() => setPropertyType('commercial')}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                      propertyType === 'commercial'
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="text-xs font-bold">Commercial</span>
                    <span className="text-[10px] text-slate-400">3-Phase Grid</span>
                  </button>
                </div>
              </div>

              {/* Monthly Eskom Bill Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    2. Current Average Eskom / Municipal Bill
                  </label>
                  <span className="text-2xl font-extrabold text-amber-400 font-['Space_Grotesk']">
                    R {monthlyBill.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/mo</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="1500"
                  max="25000"
                  step="250"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                  <span>R1,500</span>
                  <span>R8,000</span>
                  <span>R15,000</span>
                  <span>R25,000+</span>
                </div>
              </div>

              {/* Target Outage Protection Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    3. Target Load-Shedding Defense Level
                  </label>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Stage {loadSheddingStage} Ready
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[2, 4, 6, 8].map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setLoadSheddingStage(stage)}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                        loadSheddingStage === stage
                          ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      Stage {stage}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Stage 6 & 8 include dedicated battery reserves for overnight uninterrupted refrigeration, security systems, and high-efficiency heat pumps.
                </p>
              </div>

            </div>

            {/* Tariff warning note */}
            <div className="mt-8 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-3 text-xs text-slate-300">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Based on NERSA-approved municipal tariff increases. Solar PV amortizes completely within 2.8 to 4.2 years while protecting your assets.
              </span>
            </div>

          </div>

          {/* Right Column: Tailored Sizing Output & WhatsApp Trigger */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card border border-emerald-500/25 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Recommended Architecture
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    Engineered System Specifications
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  SANS 10142-1 Certified
                </span>
              </div>

              {/* 4 Core Sizing Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Solar Array</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {recommendedKw} kWp
                  </div>
                  <span className="text-[11px] text-amber-300">
                    {panelCount}x 550W N-Type Panels
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Hybrid Inverter</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {inverterSize} kW
                  </div>
                  <span className="text-[11px] text-cyan-300">
                    Sunsynk / Deye Smart Inverter
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <BatteryCharging className="w-4 h-4 text-emerald-400" />
                    <span>Lithium Storage</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {batteryKwh} kWh
                  </div>
                  <span className="text-[11px] text-emerald-300">
                    LiFePO4 6,000+ Cycles (95% DoD)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <TrendingDown className="w-4 h-4 text-teal-400" />
                    <span>Monthly Savings</span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-['Space_Grotesk']">
                    ~R {estimatedSavingsMonthly.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Over R{formatted10YearSavings} in 10 yrs
                  </span>
                </div>

              </div>

              {/* Outage Endurance Metric */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-300">
                    Continuous Outage Runtime
                  </span>
                  <span className="text-sm font-extrabold text-white font-['Space_Grotesk']">
                    ~{estimatedBackupHours}+ Hours Backup
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (estimatedBackupHours / 36) * 100)}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Seamless sub-20ms switchover: Computers, Wi-Fi routers, security cameras, and fridges experience zero interruption.
                </p>
              </div>

            </div>

            {/* Direct WhatsApp Call to Action with pre-filled specs */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Send Config to ESESG on WhatsApp</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
