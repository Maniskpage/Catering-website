import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Users, CalendarCheck, PhoneCall, Heart, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function Hero({ lang }) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-peach-silk overflow-hidden">
      
      {/* Background Subtle Warm Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peach-300/30 rounded-full blur-3xl pointer-events-none -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crimson-200/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Kolam Lattice Texture */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Super Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-200 text-crimson-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-600"></span>
              </span>
              <span className="font-tamil font-extrabold">{BRAND_INFO.tamilName}</span>
              <span className="text-crimson-300">|</span>
              <span className="text-stone-800 flex items-center gap-1 font-semibold">
                <Award className="w-3.5 h-3.5 text-crimson-700" /> By {BRAND_INFO.proprietor}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-crimson-950 tracking-tight leading-[1.14]">
              {lang === 'ta' ? (
                <>
                  உங்கள் இல்லத்து சுப நிகழ்வுகளுக்கு <span className="text-crimson-700 underline decoration-gold-500 decoration-wavy decoration-2">கைராசியான</span> அறுசுவை விருந்து
                </>
              ) : (
                <>
                  Grand South Indian <span className="text-crimson-700 italic font-serif">Pure Veg Feasts</span> Crafted for Sacred Occasions
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {lang === 'ta'
                ? 'திருமணம், காதணி விழா, வளைகாப்பு, பூப்புனித நீராட்டு விழா, பிறந்தநாள் மற்றும் அனைத்து சுபநிகழ்ச்சிகளுக்கும் தரமான, சுவையான சைவ உணவு கேட்டரிங் சேவை. திருச்சி & சுற்றுவட்டார மாவட்டங்களில் சிறந்த சேவை.'
                : 'From traditional Banana Leaf Kalyana Saapadu to modern evening Live Buffets and Seemantham variety feasts. Prepared with 100% pure cow ghee, authentic spices, and heartfelt hospitality.'}
            </p>

            {/* 3 Quick Trust Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-peach-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-leaf-50 border border-leaf-200 flex items-center justify-center text-leaf-700 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-950">100% Pure Veg</p>
                  <p className="text-[11px] text-stone-500">Pure Ghee & Oils</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-peach-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-950">Min 100 to 5000+</p>
                  <p className="text-[11px] text-stone-500">All Event Scales</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-peach-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-crimson-50 border border-crimson-200 flex items-center justify-center text-crimson-700 flex-shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-950">3 Partner Halls</p>
                  <p className="text-[11px] text-stone-500">In Trichy & Omanthur</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                to="/menus"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-crimson-800 via-crimson-700 to-crimson-900 text-white font-bold text-sm sm:text-base shadow-soft-crimson hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-gold-400/40"
              >
                <span>{lang === 'ta' ? 'மெனு & கட்டண விவரங்கள்' : 'Explore Menu Packages'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-crimson-950 font-bold text-sm sm:text-base border-2 border-peach-300 hover:border-crimson-700 hover:bg-peach-50 transition-all duration-200 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>{lang === 'ta' ? 'உடனடி கட்டண மதிப்பீடு' : 'Instant Cost Estimator'}</span>
              </Link>

              <a
                href={`tel:${BRAND_INFO.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-leaf-600 text-white hover:bg-leaf-700 font-bold text-sm shadow-sm transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call: {BRAND_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Sub-note */}
            <div className="text-xs text-stone-600 pt-1 flex items-center justify-center lg:justify-start gap-1.5 font-medium">
              <Heart className="w-3.5 h-3.5 text-crimson-700 fill-crimson-700" />
              <span>{lang === 'ta' ? 'தலைமை: சஞ்சீவிராய, பெருமாள் திருவருள்' : 'Dedicated to authentic taste, hygiene & punctuality.'}</span>
            </div>
          </div>

          {/* Right Column: Visual Pure-Veg Feast Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-peach-200 shadow-luxury overflow-hidden">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-peach-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.jpeg"
                    alt="Harinee Catering Emblem"
                    className="w-11 h-11 rounded-full object-cover border border-gold-400/80 shadow-xs flex-shrink-0"
                  />
                  <div>
                    <h2 className="font-serif font-bold text-stone-950 text-base">Harinee Signature Feast</h2>
                    <p className="text-[11px] text-stone-500 font-medium">Curated by Chef V. Manivannan</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white bg-crimson-800 px-3 py-1 rounded-full shadow-xs">
                  Trichy
                </span>
              </div>

              {/* Main Pure-Veg Feast Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80"
                  alt="Authentic South Indian Pure Veg Banana Leaf Feast"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest bg-gold-400 text-stone-950 px-2 py-0.5 rounded">
                      100% Pure Veg Feast
                    </span>
                    <h3 className="font-serif text-lg font-bold mt-1 text-white">
                      Traditional Kalyana Elai Saapadu
                    </h3>
                    <p className="text-xs text-stone-200">Over 30+ auspicious dishes served fresh & hot</p>
                  </div>
                </div>
              </div>

              {/* Quick Package Tickers */}
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <Link to="/menus" className="p-3 rounded-xl bg-peach-50 border border-peach-200 hover:border-crimson-500 transition-colors text-left group">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Evening High Tea</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-bold text-xs text-stone-900 group-hover:text-crimson-800">10 Combos</span>
                    <span className="text-xs font-black text-crimson-800 bg-peach-200 px-2 py-0.5 rounded border border-peach-300">₹60</span>
                  </div>
                </Link>

                <Link to="/menus" className="p-3 rounded-xl bg-peach-50 border border-peach-200 hover:border-crimson-500 transition-colors text-left group">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Grand Lunch Saapadu</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-bold text-xs text-stone-900 group-hover:text-crimson-800">5 Tiers</span>
                    <span className="text-xs font-black text-crimson-800 bg-peach-200 px-2 py-0.5 rounded border border-peach-300">₹180 - ₹500</span>
                  </div>
                </Link>

                <Link to="/menus" className="p-3 rounded-xl bg-peach-50 border border-peach-200 hover:border-crimson-500 transition-colors text-left group">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Morning Tiffin</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-bold text-xs text-stone-900 group-hover:text-crimson-800">4 Tiers</span>
                    <span className="text-xs font-black text-crimson-800 bg-peach-200 px-2 py-0.5 rounded border border-peach-300">₹200 - ₹350</span>
                  </div>
                </Link>

                <Link to="/menus" className="p-3 rounded-xl bg-peach-50 border border-peach-200 hover:border-crimson-500 transition-colors text-left group">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Night Tiffin & Live</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-bold text-xs text-stone-900 group-hover:text-crimson-800">6 Tiers</span>
                    <span className="text-xs font-black text-crimson-800 bg-peach-200 px-2 py-0.5 rounded border border-peach-300">₹200 - ₹800</span>
                  </div>
                </Link>
              </div>

              {/* Review Badge */}
              <div className="mt-3.5 pt-3 border-t border-peach-100 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-1 text-gold-500">
                  {"★".repeat(5)}
                  <span className="font-bold text-stone-900 ml-1">5.0</span>
                  <span className="text-stone-500 font-medium">(150+ Weddings)</span>
                </div>
                <span className="text-[11px] font-bold text-leaf-700 bg-leaf-50 px-2 py-0.5 rounded border border-leaf-200">100% Pure Veg</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
