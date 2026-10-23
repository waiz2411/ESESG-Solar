import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  Sun
} from 'lucide-react';
import { COMPANY_INFO } from '../data/esesgData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home & 3D", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Savings Engine", path: "/calculator" },
    { label: "SANS Compliance", path: "/compliance" },
    { label: "Quote Builder", path: "/quote" },
    { label: "Contact & Base", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070b12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Location Flag */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 shadow-lg shadow-amber-500/25 border border-amber-300/30 group-hover:scale-105 transition-transform duration-300">
              <Sun className="w-6 h-6 text-slate-950 animate-spin-slow" />
              <div className="absolute -inset-1 rounded-xl bg-amber-400/20 blur-sm -z-10 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent font-['Outfit']">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 tracking-wider">
                  4.2 ★ KZN
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide">
                Electrical & Solar Energy Solutions Group • Gillitts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20' 
                    : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Contact & WhatsApp Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello ESESG, I am interested in a 3D solar assessment and quote for my property."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Instant WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0c121e]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-800/40 border-white/5 text-slate-200 hover:text-amber-400 hover:bg-slate-800/80'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-slate-800 border border-slate-700 rounded-xl"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hello ESESG, I would like to request an on-site solar evaluation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
