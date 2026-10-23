import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sun, ChevronUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const FloatingWhatsApp: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpenPrompt, setIsOpenPrompt] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 shadow-xl backdrop-blur-md hover:bg-slate-800 transition-all transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Prompt Bubble */}
      {isOpenPrompt && (
        <div className="relative p-3.5 pr-8 rounded-2xl bg-slate-950/95 border border-amber-500/30 shadow-2xl backdrop-blur-xl max-w-xs animate-bounce-short">
          <button
            onClick={() => setIsOpenPrompt(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-bold text-amber-400">ESESG Solar Team Online</span>
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            Need a rapid load-shedding quote or SANS 10142-1 COC? Chat with our Gillitts engineering team now!
          </p>
        </div>
      )}

      {/* Main Glowing WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
          "Hello ESESG, I am visiting your website and would like a consultation on a solar power system for my property."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-400 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat on WhatsApp with ESESG"
      >
        <MessageCircle className="w-7 h-7 text-slate-950 fill-slate-950 group-hover:scale-105 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-slate-950"></span>
        </span>
      </a>

    </div>
  );
};
