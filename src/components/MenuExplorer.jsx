import React, { useState } from 'react';
import { MENU_CATEGORIES } from '../data/cateringData';
import { Utensils, CheckCircle2, Search, Filter, Sparkles, Droplets, ArrowRight, MessageSquareQuote } from 'lucide-react';

// Common search alias map for transliterations
const searchAliases = {
  'dosai': 'dosa',
  'thosai': 'dosa',
  'idly': 'idli',
  'itly': 'idli',
  'vadai': 'vada',
  'vada': 'vadai',
  'alwa': 'halwa',
  'poori': 'puri',
  'puri': 'poori',
  'briyani': 'biryani',
  'biriyani': 'biryani',
  'chappathi': 'chapati',
  'chappathi': 'chapati',
  'kichadi': 'kichadi',
  'kichdi': 'kichadi',
  'saapadu': 'saapadu',
  'meals': 'saapadu'
};

export default function MenuExplorer({ lang, onSelectPackage }) {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState('all');

  const currentCategoryData = MENU_CATEGORIES.find(c => c.id === activeCategory) || MENU_CATEGORIES[0];

  // Smart normalizer for search
  const normalizeForSearch = (str) => {
    let lower = (str || '').toLowerCase();
    for (const [alias, standard] of Object.entries(searchAliases)) {
      if (lower.includes(alias)) {
        lower = lower.replace(alias, standard);
      }
    }
    return lower;
  };

  const normalizedQuery = normalizeForSearch(searchQuery.trim());

  // Filter packages
  const filteredPackages = currentCategoryData.packages.filter(pkg => {
    if (!normalizedQuery) {
      if (selectedPriceFilter === 'all') return true;
      if (selectedPriceFilter === 'low') return pkg.price <= 200;
      if (selectedPriceFilter === 'mid') return pkg.price > 200 && pkg.price <= 350;
      if (selectedPriceFilter === 'high') return pkg.price > 350;
      return true;
    }

    const matchesName = normalizeForSearch(pkg.name).includes(normalizedQuery) ||
                        pkg.tamilName.includes(searchQuery);

    const matchesEnglishItems = pkg.itemsEnglish.some(item => 
      normalizeForSearch(item).includes(normalizedQuery) || 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesTamilItems = pkg.itemsTamil.some(item => 
      item.includes(searchQuery)
    );

    const matchesPrice = selectedPriceFilter === 'all' ||
      (selectedPriceFilter === 'low' && pkg.price <= 200) ||
      (selectedPriceFilter === 'mid' && pkg.price > 200 && pkg.price <= 350) ||
      (selectedPriceFilter === 'high' && pkg.price > 350);

    return (matchesName || matchesEnglishItems || matchesTamilItems) && matchesPrice;
  });

  return (
    <section id="menus" className="py-16 md:py-24 bg-peach-50/60 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-crimson-600" />
            <span>{lang === 'ta' ? 'அறுசுவை மெனு அட்டவணை' : 'Authentic Menu Brochure'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
            {lang === 'ta' ? 'அனைத்து சுப நிகழ்வுகளுக்குமான மெனு' : 'Explore Our Handcrafted Menus'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'திருச்சி ஹரிணி கேட்டரிங் வழங்கும் பாரம்பரிய சுவை மற்றும் தரமான உணவு வகைகள். தங்களுக்கு விருப்பமான தொகுப்பைத் தேர்ந்தெடுக்கவும்.'
              : 'Every single recipe prepared with natural cold-pressed oils, pure cow ghee, and fresh vegetables. Minimum order 100 guests.'}
          </p>
        </div>

        {/* 1. Category Navigation Grid (All 5 visible with zero clipping) */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPriceFilter('all');
                  }}
                  className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border shadow-xs group ${
                    isActive
                      ? 'bg-gradient-to-br from-crimson-800 via-crimson-700 to-crimson-900 text-white border-crimson-900 shadow-soft-crimson ring-2 ring-gold-400/40 transform -translate-y-0.5'
                      : 'bg-white text-stone-800 border-peach-200 hover:border-crimson-300 hover:bg-peach-100/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-gold-200' : 'bg-peach-100 text-crimson-800'
                    }`}>
                      {cat.heroPrice}
                    </span>
                    <span className="text-xs opacity-80">
                      {cat.id === 'breakfast' ? '☀️' : cat.id === 'lunch' ? '🍛' : cat.id === 'evening-snacks' ? '☕' : cat.id === 'dinner' ? '🌙' : '🤰'}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-serif font-bold text-xs sm:text-sm leading-snug ${
                      isActive ? 'text-white' : 'text-stone-900 group-hover:text-crimson-800'
                    }`}>
                      {lang === 'ta' ? cat.tamilTitle : cat.title}
                    </h3>
                    <p className={`text-[10px] font-tamil mt-0.5 truncate ${
                      isActive ? 'text-peach-200' : 'text-stone-500'
                    }`}>
                      {cat.tamilTitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Filter & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-peach-200 shadow-sm">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'ta' ? 'உணவு வகைகளை தேட (எ.கா: தோசை, இட்லி, அல்வா, பிரியாணி)...' : 'Search dishes (e.g. Dosa, Idli, Halwa, Biryani, Pongal)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-14 py-2 text-xs sm:text-sm rounded-xl border border-peach-300 bg-peach-50/50 focus:outline-none focus:border-crimson-600 focus:bg-white transition-all text-stone-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-crimson-700 hover:text-crimson-900"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Price Filters */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-semibold text-stone-500 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Budget:
            </span>
            <button
              onClick={() => setSelectedPriceFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPriceFilter === 'all'
                  ? 'bg-crimson-800 text-white font-bold'
                  : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
              }`}
            >
              All Prices
            </button>
            <button
              onClick={() => setSelectedPriceFilter('low')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPriceFilter === 'low'
                  ? 'bg-crimson-800 text-white font-bold'
                  : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
              }`}
            >
              ≤ ₹200
            </button>
            <button
              onClick={() => setSelectedPriceFilter('mid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPriceFilter === 'mid'
                  ? 'bg-crimson-800 text-white font-bold'
                  : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
              }`}
            >
              ₹201 - ₹350
            </button>
            <button
              onClick={() => setSelectedPriceFilter('high')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPriceFilter === 'high'
                  ? 'bg-crimson-800 text-white font-bold'
                  : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
              }`}
            >
              ₹350+ Grand
            </button>
          </div>
        </div>

        {/* 3. Category Description Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-peach-100 via-peach-50 to-peach-100 border border-peach-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-crimson-900 text-base sm:text-lg flex items-center gap-2">
              <span>{lang === 'ta' ? currentCategoryData.tamilTitle : currentCategoryData.title}</span>
              <span className="text-xs bg-crimson-800 text-white px-2 py-0.5 rounded-full font-sans font-bold">
                {currentCategoryData.packages.length} Packages Available
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 mt-0.5">{currentCategoryData.desc}</p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-1.5 text-xs font-bold text-leaf-700 bg-white px-3 py-1.5 rounded-xl border border-leaf-300 shadow-xs">
            <Droplets className="w-3.5 h-3.5 text-blue-500" />
            <span>Includes 300ml Water Bottle with Every Plate</span>
          </div>
        </div>

        {/* 4. Packages Cards Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-peach-200 p-8 space-y-3">
            <p className="text-stone-700 font-semibold text-sm">
              No dishes found matching "<span className="text-crimson-800">{searchQuery}</span>" in {currentCategoryData.title}.
            </p>
            <p className="text-xs text-stone-500">
              Try switching category tabs above (e.g. Dinner or Lunch) or resetting the search filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedPriceFilter('all'); }}
              className="mt-2 px-5 py-2 bg-crimson-800 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-crimson-900 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => {
              const isSpecial = pkg.price >= 500;
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white border ${
                    isSpecial
                      ? 'border-gold-400 shadow-xl ring-2 ring-gold-300/40 bg-gradient-to-b from-white to-peach-50'
                      : 'border-peach-200 shadow-xs hover:shadow-soft-crimson hover:border-crimson-300'
                  }`}
                >
                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="bg-gradient-to-r from-crimson-900 via-crimson-800 to-crimson-900 text-gold-300 text-[11px] font-bold px-4 py-1.5 uppercase tracking-wider flex items-center justify-between border-b border-gold-500/20">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-gold-400" /> {pkg.badge}
                      </span>
                      <span className="text-white/80 text-[10px]">Min 100 Guests</span>
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3 pb-3 border-b border-peach-100">
                      <div>
                        <h4 className="font-serif font-bold text-stone-900 text-lg leading-snug">
                          {lang === 'ta' ? pkg.tamilName : pkg.name}
                        </h4>
                        <span className="text-[11px] font-tamil text-stone-500 block mt-0.5">
                          {pkg.tamilName}
                        </span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="inline-flex items-baseline gap-0.5 px-3 py-1 rounded-xl bg-peach-100 border border-peach-300 text-crimson-900">
                          <span className="text-xs font-semibold">₹</span>
                          <span className="text-2xl font-extrabold font-serif">{pkg.price}</span>
                          <span className="text-[10px] text-stone-600 font-medium">/plate</span>
                        </div>
                      </div>
                    </div>

                    {/* Dish Items Count */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                      <span className="font-semibold text-stone-800">
                        ✨ {pkg.itemsTamil.length} Curated Specialties
                      </span>
                      <span className="text-leaf-600 font-semibold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-leaf-500" /> 100% Pure Veg
                      </span>
                    </div>

                    {/* Dishes List */}
                    <ul className="space-y-1.5 max-h-72 overflow-y-auto pr-1 text-xs text-stone-700 scrollbar-thin">
                      {pkg.itemsTamil.map((itemTamil, idx) => {
                        const itemEnglish = pkg.itemsEnglish ? pkg.itemsEnglish[idx] : itemTamil;
                        const isSweet = itemTamil.includes('ஸ்வீட்') || itemTamil.includes('அல்வா') || itemTamil.includes('பாயாசம்') || itemTamil.includes('ஜாங்கிரி') || itemTamil.includes('ஜாமூன்') || itemTamil.includes('கேசரி') || itemTamil.includes('கேக்') || itemTamil.includes('ரவா') || itemTamil.includes('புட்டிங்');
                        return (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 py-1 px-2 rounded-lg transition-colors ${
                              isSweet ? 'bg-amber-50/70 border border-amber-200/50' : 'hover:bg-peach-50'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              isSweet ? 'bg-amber-500' : 'bg-crimson-600'
                            }`} />
                            <div className="flex flex-col">
                              <span className="font-medium text-stone-900">
                                {lang === 'ta' ? itemTamil : itemEnglish}
                              </span>
                              {lang !== 'ta' && (
                                <span className="text-[10px] text-stone-500 font-tamil">
                                  {itemTamil}
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 bg-peach-50/80 border-t border-peach-200/70 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectPackage && onSelectPackage(pkg, activeCategory)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-xs transition-all shadow-sm transform active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                      <span>{lang === 'ta' ? 'இந்த மெனுவை தேர்வு செய்க' : 'Select for Cost Estimator'}</span>
                    </button>

                    <a
                      href={`https://wa.me/919698297590?text=Hello%20Harinee%20Catering,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(₹${pkg.price}/plate)%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl border border-emerald-300 transition-colors flex-shrink-0"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <MessageSquareQuote className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
