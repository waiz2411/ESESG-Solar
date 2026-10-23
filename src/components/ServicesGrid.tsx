import React from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Building2, 
  ShieldCheck, 
  Trees, 
  Activity, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES, COMPANY_INFO, ServiceItem } from '../data/esesgData';

export const ServicesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-6 h-6 text-amber-400" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      case 'Trees': return <Trees className="w-6 h-6 text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-rose-400" />;
      default: return <Sun className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="solutions" className="relative py-24 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Energy Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Master-Grade Solar & <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Electrical Infrastructure
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            From luxury residential solar estates in Hillcrest and Kloof to industrial 3-phase microgrids and legal SANS 10142-1 COCs, our certified engineers deliver uncompromising performance.
          </p>
        </div>

        {/* 6 Services Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between group ${
                service.popular 
                  ? 'border-amber-500/30 shadow-xl shadow-amber-500/5 hover:border-amber-500/60' 
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                
                {/* Card Top: Icon & Popular Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>

                  {service.popular && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold tracking-wide">
                      Most Requested
                    </span>
                  )}
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1.5 font-['Outfit'] group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-300/80 mb-3.5">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technical Specs Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/70 border border-white/5 mb-6 text-center">
                  {service.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-xs font-bold text-slate-200 mt-0.5">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Checkmark Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Direct WhatsApp Call to Action */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  `Hello ESESG, I am inquiring regarding your service: "${service.title}". Please send details and schedule an on-site consultation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-amber-400/50 text-xs font-bold transition-all group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400"
              >
                <span>Request {service.title.split(' ')[0]} Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
