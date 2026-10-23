import React, { useState } from 'react';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `Hello ESESG, I am submitting an inquiry via your contact page:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Suburb: ${formData.suburb || 'Gillitts / Hillcrest'}
- Message: ${formData.message || 'I would like to request an on-site solar consultation.'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-[#070b14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Gillitts Head Office</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Contact ESESG & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
              Visit Our Engineering Hub
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Situated at 55A Old Main Road in Gillitts, Hillcrest. Speak with our solar technical leads, inspect demonstration inverters, and arrange an immediate site assessment.
          </p>
        </div>
      </section>

      {/* Main Map & Location Section */}
      <ServiceAreaMap />

      {/* Direct Contact Form & Rapid Dispatch */}
      <section className="py-20 bg-[#070b14] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Column */}
            <div className="md:col-span-5 p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Direct Communication Lines
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a commercial solar engineering proposal or urgent load-shedding battery replacement, we respond within minutes during operating hours.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-amber-400/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Phone Hotline</span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-400">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-emerald-400/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">WhatsApp Dispatch</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Emergency Response</span>
                    <span className="text-xs font-bold text-white">
                      24/7 Priority Outage Hotline
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="md:col-span-7 p-8 rounded-3xl glass-card border border-white/10">
              <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
                Send Us an Online Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your contact info to instantly dispatch your message to our technical lead on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Kruger"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 082 123 4567"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.co.za"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Suburb in KZN</label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Gillitts / Hillcrest"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Project Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current load-shedding pain points, property size, or electrical needs..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message & Connect on WhatsApp</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
