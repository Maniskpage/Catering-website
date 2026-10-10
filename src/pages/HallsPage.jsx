import React from 'react';
import HallsSection from '../components/HallsSection';
import SEOHead from '../components/SEOHead';
import { Building2, Phone, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';
import { Link } from 'react-router-dom';

export default function HallsPage({ lang }) {
  return (
    <div className="pt-24 pb-16 bg-peach-50 min-h-screen">
      <SEOHead
        title="Marriage & Mini Halls in Trichy | Ravi Mini Hall, Sushi Hall, Omanthur Mandapam"
        description="Book associated A/C marriage and party halls in Trichy: Ravi Mini Hall A/c (Karur Bypass), Sushi Hall A/c, and Sri Kamatchiamman Thirumana Mandapam (Omanthur) with pure veg catering."
        keywords="marriage halls trichy, mini hall ac trichy karur bypass, ravi mini hall trichy, sushi hall trichy, sri kamatchiamman thirumana mandapam omanthur, function halls trichy with catering"
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-10 md:py-14 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Associated Marriage & Mini Halls</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'திருச்சி & சுற்றுவட்டார திருமண மண்டபங்கள்' : 'Partner Banquet & Marriage Halls'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'ரவி மினி ஹால் A/C, சுசி ஹால் A/C மற்றும் ஸ்ரீ காமாட்சியம்மன் திருமண மண்டபம் ஓமாந்தூர்.'
              : 'Seamless venue booking with full pure vegetarian catering management across Trichy.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${BRAND_INFO.primaryPhone}`}
              className="px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-stone-950" />
              <span>Direct Booking: 96982 97590</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Halls Section Component */}
      <HallsSection lang={lang} />
    </div>
  );
}
