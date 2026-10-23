import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink, 
  MessageCircle, 
  Star,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#04070d] text-slate-400 pt-16 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25 border border-amber-300/30">
                <Sun className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-2xl font-extrabold text-white font-['Outfit'] tracking-wider">
                {COMPANY_INFO.name}
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Electrical & Solar Energy Solutions Group. Delivering next-generation solar PV microgrids, LiFePO4 battery storage, and statutory SANS 10142-1 electrical compliance across the Upper Highway and greater Durban.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-white/5 w-fit">
              <div className="flex text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <Star className="w-3.5 h-3.5 fill-amber-400/50 text-amber-400" />
              </div>
              <span className="text-xs font-bold text-white">4.2 Rating</span>
              <span className="text-xs text-slate-400">({COMPANY_INFO.reviewsCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Route Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-['Outfit']">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Home & 3D Visualizer</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>All Solar & Electrical Services</span>
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Eskom Tariff & Sizing Engine</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>SANS 10142-1 Compliance Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Interactive Quote Builder</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Gillitts Head Office & Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-['Outfit']">
              Direct Contact & Base
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}, {COMPANY_INFO.suburb}, {COMPANY_INFO.city}, {COMPANY_INFO.province}, South Africa
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-amber-400 font-semibold transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 font-semibold transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Dept. of Labour Accredited Installation</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>View Google Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.fullName} (ESESG). All rights reserved.
          </p>

          <p className="max-w-xl text-center sm:text-right">
            All solar PV systems, inverters, and battery storage solutions comply with SANS 10142-1 statutory requirements. Valid Electrical Certificates of Compliance (COC) issued on handover.
          </p>
        </div>

      </div>
    </footer>
  );
};
