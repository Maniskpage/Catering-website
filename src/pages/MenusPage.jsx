import React from 'react';
import MenuExplorer from '../components/MenuExplorer';
import SEOHead from '../components/SEOHead';
import { Utensils, Download, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';
import { Link } from 'react-router-dom';

export default function MenusPage({ lang, onSelectPackage }) {
  return (
    <div className="pt-24 pb-16 bg-[#FFF9F5]">
      <SEOHead
        title="Pure Veg Catering Menus & Prices Trichy (₹180 - ₹800) | Harinee Catering"
        description="Explore South Indian wedding catering packages by Harinee Catering Trichy. Morning Tiffin (₹200-₹350), Lunch Feast (₹180-₹500), Evening Snacks (₹60), Dinner Buffet (₹200-₹800), Valaikappu (₹250-₹450)."
        keywords="catering menu trichy, wedding feast menu trichy, kalyana saapadu price per plate, seemantham menu trichy, dinner tiffin buffet trichy, evening snacks catering combo trichy"
      />

      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-12 md:py-16 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Utensils className="w-3.5 h-3.5" />
            <span>Complete Catering Brochure & Prices</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'அறுசுவை உணவு மெனு & கட்டண விவரங்கள்' : 'Authentic Pure Veg Catering Menus'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'காலை டிபன், மதிய அறுசுவை கல்யாண சாப்பாடு, மாலை ஸ்நாக்ஸ் காம்போ, இரவு பஃபே மற்றும் சீமந்தம் வளைகாப்பு மெனுக்கள்.'
              : 'Every single package curated by Master Chef V. Manivannan using cold-pressed oils, pure cow ghee, and natural spices. Minimum 100 guests.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/estimator"
              className="px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Calculate Total Event Cost</span>
            </Link>

            <a
              href={`tel:${BRAND_INFO.primaryPhone}`}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Chef: 96982 97590</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Menu Explorer */}
      <MenuExplorer lang={lang} onSelectPackage={onSelectPackage} />

      {/* Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-peach-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-leaf-700 tracking-wider">Chef's Customization Guarantee</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Want to Customize Dishes or Add Special Sweets?</h3>
            <p className="text-xs sm:text-sm text-stone-600">We can tailor any package to match your family traditions, muhurtham timings, and taste preferences.</p>
          </div>
          <a
            href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20would%20like%20to%20discuss%20a%20customized%20menu%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
