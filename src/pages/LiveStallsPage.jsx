import React from 'react';
import LiveStallsSection from '../components/LiveStallsSection';
import SEOHead from '../components/SEOHead';
import { PartyPopper, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';
import { Link } from 'react-router-dom';

export default function LiveStallsPage({ lang }) {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <SEOHead
        title="16+ Wedding Live Food Counters & Stalls in Trichy | Harinee Catering"
        description="Book popular live stalls for marriage and reception in Trichy: Popcorn, Panju Mittai, Chocolate Fountain, Mehendi Artist, Retro Village Petti Kadai, Artisanal Ice Cream, and Live Chaat Counters."
        keywords="live stalls for wedding trichy, chocolate fountain trichy, panju mittai counter trichy, mehendi artist catering trichy, petti kadai wedding stall trichy, live pani puri stall trichy"
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-10 md:py-14 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>Interactive Food Counters & Entertainment</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? '16+ சிறப்பு லைவ் ஸ்டால்கள் & கவுண்டர்கள்' : '16+ Wedding Live Stalls & Entertainment'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'வரவேற்பு மற்றும் சுபநிகழ்ச்சிகளில் விருந்தினர்களைக் கவரும் சுவையான லைவ் சாட், சாக்லேட் பவுண்டன் மற்றும் 90s பெட்டி கடை.'
              : 'Delight your guests with fresh live interactive food stations and traditional fun stalls setup on-site.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/estimator"
              className="px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Add Stalls to Your Event Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Live Stalls Component */}
      <LiveStallsSection lang={lang} />
    </div>
  );
}
