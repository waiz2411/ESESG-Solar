import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { 
  Sun, 
  BatteryCharging, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO, SOLAR_PRESETS } from '../data/esesgData';

export const ServicesPage: React.FC = () => {
  const faqs = [
    {
      q: "How many hours of load-shedding will the battery support?",
      a: "Our standard 5.12kWh to 10.24kWh LiFePO4 battery modules are sized to power essential circuits (Wi-Fi, lighting, TV, fridges, alarms) through 12 to 24+ consecutive hours of grid failure, easily outlasting Stage 6 and Stage 8 cycles."
    },
    {
      q: "Is an Electrical Certificate of Compliance (COC) included?",
      a: "Yes. Every installation is inspected, tested, and certified under SANS 10142-1 regulations by our registered Master Electricians. An official COC is handed over on commissioning."
    },
    {
      q: "Do you assist with eThekwini Municipality / Eskom SSEG registration?",
      a: "Absolutely. We prepare the complete engineering Single-Line Diagrams (SLD), inverter grid compliance certificates, and handle submission to municipal authorities on your behalf."
    },
    {
      q: "What warranties are provided on the solar panels and inverters?",
      a: "Our Tier-1 N-Type TOPCon panels carry a 25-year linear performance warranty. Sunsynk and Deye inverters come with a 5-year standard warranty (extendable to 10 years), and our lithium batteries include 10-year / 6,000-cycle manufacturer warranties."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* Services Header Banner */}
      <section className="relative py-16 bg-[#070b14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master-Grade Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Engineered Clean Energy <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Disciplines & Systems
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Explore our specialized solar PV architectures, high-voltage lithium storage racks, commercial microgrids, and certified statutory compliance.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesGrid />

      {/* Popular Turnkey Packages Showcase */}
      <section className="py-20 bg-[#060a12] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
              Engineered Solar Packages
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Turnkey, fully installed systems configured for Upper Highway homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLAR_PRESETS.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-7 rounded-3xl glass-card border flex flex-col justify-between transition-all ${
                  pkg.highlight 
                    ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10 relative scale-105 bg-slate-900/90' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[11px] shadow-lg tracking-wider">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                    {pkg.name}
                  </h3>
                  <span className="text-xs text-amber-400 font-semibold block mb-4">
                    {pkg.recommendedFor}
                  </span>

                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 mb-6 text-center">
                    <span className="text-[10px] text-slate-400 block">Typical Eskom Bill</span>
                    <span className="text-sm font-bold text-white font-['Space_Grotesk']">
                      {pkg.monthlyBillRange}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 text-xs text-slate-300">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Solar PV Array:</span>
                      <span className="font-bold text-white">{pkg.solarKw} kW ({pkg.panelCount} Panels)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Inverter:</span>
                      <span className="font-bold text-white">{pkg.inverterKw} kW Hybrid</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Lithium Storage:</span>
                      <span className="font-bold text-emerald-400">{pkg.batteryKwh} kWh LiFePO4</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Est. Savings:</span>
                      <span className="font-bold text-emerald-400">~R {pkg.estimatedMonthlySavings.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Resilience:</span>
                      <span className="font-bold text-cyan-400">{pkg.backupHours}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello ESESG, I am interested in the "${pkg.name}" turnkey solar package (${pkg.solarKw}kW Solar, ${pkg.inverterKw}kW Inverter, ${pkg.batteryKwh}kWh Lithium). Please provide an official quotation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  Select Package & Quote
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical FAQ Accordion */}
      <section className="py-20 bg-[#070b14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Everything you need to know about transitioning to solar in KwaZulu-Natal.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border border-white/10">
                <h3 className="text-base font-bold text-white mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello ESESG, I have a specific technical question regarding a custom solar installation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-white/10 text-amber-400 hover:text-amber-300 text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Our Engineering Team Directly</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
