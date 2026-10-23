import React from 'react';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { REVIEWS, COMPANY_INFO, ReviewItem } from '../data/esesgData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 bg-[#070b14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client Reputation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              Trusted Across <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Gillitts & Hillcrest
              </span>
            </h2>
          </div>

          {/* Google 4.2 Rating Pill */}
          <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 shrink-0">
            <div className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
              {COMPANY_INFO.rating}
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <Star className="w-4 h-4 fill-amber-400/50 text-amber-400" />
              </div>
              <span className="text-xs text-slate-300 font-semibold block">
                {COMPANY_INFO.reviewsCount} Verified Google Reviews
              </span>
            </div>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 transition-colors"
              title="View on Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl glass-card border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">
                  "{rev.title}"
                </h3>

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {rev.comment}
                </p>

              </div>

              {/* Author & System Tag */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-white block">{rev.name}</span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{rev.location}</span>
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[11px] font-mono text-emerald-400 self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{rev.system}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Local Trust Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            All reviews verified via Google Business Profile for ESESG located at 55A Old Main Rd, Gillitts, Hillcrest.
          </p>
        </div>

      </div>
    </section>
  );
};
