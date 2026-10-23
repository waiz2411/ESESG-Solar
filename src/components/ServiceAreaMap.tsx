import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const ServiceAreaMap: React.FC = () => {
  return (
    <section id="service-area" className="relative py-24 bg-[#060a12] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Engineering Presence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Based in Gillitts, Hillcrest. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
              Serving the Highway Region & Durban
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Conveniently situated along Old Main Road in Gillitts, our rapid response deployment teams serve residential and commercial properties throughout KwaZulu-Natal.
          </p>
        </div>

        {/* Map & Office Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Office Details Card */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl glass-card border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    {COMPANY_INFO.name} Head Office
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold">
                    Open for Consultations & System Demos
                  </span>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Physical Address</span>
                    <span className="text-xs text-slate-300 leading-relaxed block mt-0.5">
                      {COMPANY_INFO.address}, {COMPANY_INFO.suburb}, {COMPANY_INFO.city}, {COMPANY_INFO.province}, {COMPANY_INFO.postalCode}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Operating Hours</span>
                    <span className="text-xs text-slate-300 block mt-0.5">
                      Monday – Friday: 07:30 – 17:30 <br />
                      Saturday: 08:00 – 13:00 <br />
                      <span className="text-amber-400 font-medium">24/7 Outage & Inverter Emergency Line</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Direct Phone & WhatsApp</span>
                    <span className="text-xs text-slate-300 block mt-0.5">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coverage Suburbs Pills */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Priority Service Zones:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] font-semibold text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Directions Action Button */}
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all duration-300"
            >
              <Navigation className="w-4 h-4 fill-slate-950" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>

          </div>

          {/* Map Preview Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-card border border-white/10 relative shadow-2xl min-h-[420px]">
            {/* Embedded Google Map */}
            <iframe
              title="ESESG Location Map"
              src="https://maps.google.com/maps?q=55A+Old+Main+Rd,+Gillitts,+Hillcrest,+South+Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 filter contrast-[1.05] brightness-[0.85]"
              loading="lazy"
              allowFullScreen
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">{COMPANY_INFO.name} Hub</span>
              </div>
              <p className="text-[11px] text-slate-300">
                55A Old Main Rd, Gillitts (Hillcrest Corridor)
              </p>
              <span className="text-[10px] text-amber-400 font-semibold block mt-1">
                4.2 ★ Verified Business Profile
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
