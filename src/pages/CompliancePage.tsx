import React from 'react';
import { ComplianceHub } from '../components/ComplianceHub';
import { 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Landmark, 
  Lock, 
  FileText,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const CompliancePage: React.FC = () => {
  const complianceSteps = [
    {
      step: "01",
      title: "Main Distribution Board (DB) Audit",
      desc: "Our registered master electrician inspects phase loading, earth loop impedance, neutral isolation, and existing circuit breaker ratings."
    },
    {
      step: "02",
      title: "Surge Arrestor & Earthing Installation",
      desc: "Installation of Class I & II lightning surge protection and heavy-duty earth electrodes required to withstand coastal storm surges."
    },
    {
      step: "03",
      title: "DC Isolator & Fire Safety Compliance",
      desc: "Lockable rotary DC isolator switches, emergency shutdown relays, and UV-resistant outdoor cable ducting adhering strictly to SANS 10142-1-2."
    },
    {
      step: "04",
      title: "Statutory Test Report & COC Handover",
      desc: "Comprehensive testing with calibrated instruments, sign-off on the official Department of Labour test report, and immediate digital COC delivery."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-[#070b14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statutory Electrical Certification</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            SANS 10142-1 Compliance & <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Electrical Certificate of Compliance
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Ensure your solar array, inverters, and electrical distribution network are 100% compliant under South African statutory law, safeguarding your insurance policy and property valuation.
          </p>
        </div>
      </section>

      {/* Main Compliance Hub Component */}
      <ComplianceHub />

      {/* 4-Step Certification Process */}
      <section className="py-20 bg-[#060a12] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white font-['Outfit']">
              Our 4-Stage SANS Certification Procedure
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              How our Department of Labour registered electricians certify your system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-3xl glass-card border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-purple-400 font-['Space_Grotesk'] block mb-3">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-3xl glass-card border border-purple-500/30 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
              Selling a property or renewing estate insurance?
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              We offer rapid 24-hour turnaround on SANS 10142-1 Electrical COCs for property sales across Gillitts, Hillcrest, Kloof, and Durban.
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello ESESG, I need an urgent SANS 10142-1 Electrical COC inspection for property transfer / insurance compliance."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs shadow-lg shadow-purple-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Schedule Rapid COC Inspection</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
