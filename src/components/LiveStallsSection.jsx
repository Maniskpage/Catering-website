import React, { useState } from 'react';
import { Sparkles, MessageCircle, PartyPopper } from 'lucide-react';
import { LIVE_STALLS, BRAND_INFO } from '../data/cateringData';

export default function LiveStallsSection({ lang }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All 16 Stalls' },
    { id: 'Chaat', name: 'Live Chaat & Hot' },
    { id: 'Sweet', name: 'Sweets & Kids Fav' },
    { id: 'Beverage', name: 'Beverages & Coffee' },
    { id: 'Traditional Experience', name: '90s Petti Kadai' },
    { id: 'Entertainment', name: 'Mehendi & Decor' }
  ];

  const filteredStalls = LIVE_STALLS.filter(s => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'Chaat') return s.category.includes('Chaat') || s.category.includes('Snacks') || s.category.includes('Traditional');
    if (filterCategory === 'Sweet') return s.category.includes('Sweet') || s.category.includes('Dessert') || s.category.includes('Kids');
    if (filterCategory === 'Beverage') return s.category.includes('Beverage') || s.category.includes('Healthy');
    return s.category.includes(filterCategory);
  });

  return (
    <section id="stalls" className="py-16 md:py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <PartyPopper className="w-3.5 h-3.5 text-crimson-600" />
            <span>{lang === 'ta' ? 'சிறப்பு கவுண்டர்கள் & ஸ்டால்கள்' : 'Live Interactive Counters'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
            {lang === 'ta' ? 'விழாக்களை சிறப்பிக்கும் 16+ லைவ் ஸ்டால்கள்' : 'Live Food Counters & Guest Entertainment'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'திருமணம் மற்றும் வரவேற்பு விழாக்களில் விருந்தினர்களைக் கவரும் சுவையான லைவ் சாட், சாக்லேட் பவுண்டன், 90s பெட்டி கடை மற்றும் மெகந்தி ஸ்டால்கள்.'
              : 'Add unforgettable excitement to your celebrations with fresh live counters, traditional village stalls, and interactive treats.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filterCategory === c.id
                  ? 'bg-crimson-700 text-white shadow-md'
                  : 'bg-peach-50 text-stone-700 border border-peach-200 hover:bg-peach-100'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Stalls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredStalls.map((stall) => (
            <div
              key={stall.id}
              className="rounded-2xl p-5 bg-gradient-to-b from-peach-50/50 to-white border border-peach-200/80 hover:border-crimson-400 hover:shadow-soft-crimson transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 rounded-2xl bg-white shadow-sm border border-peach-100 group-hover:scale-110 transition-transform">
                    {stall.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-peach-100 text-crimson-800">
                    {stall.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-base group-hover:text-crimson-800 transition-colors">
                  {stall.name}
                </h3>
                <p className="text-xs font-tamil text-amber-800 font-bold mb-2">
                  {stall.tamilName}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {stall.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-peach-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-leaf-600">Fresh On-site Setup</span>
                <a
                  href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20want%20to%20add%20the%20${encodeURIComponent(stall.name)}%20live%20stall%20to%20my%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-crimson-700 hover:text-crimson-900 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Book
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-crimson-900 via-crimson-800 to-crimson-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-gold-300 text-xs uppercase font-bold tracking-widest">Custom Stalls Package</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">Want a Combo of Multiple Live Stalls?</h3>
            <p className="text-xs sm:text-sm text-peach-200">Get discounted bundle pricing when booking 3 or more live counters with your meal package.</p>
          </div>
          <a
            href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20would%20like%20to%20get%20a%20combo%20quote%20for%20live%20stalls.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Sparkles className="w-4 h-4 text-stone-950" />
            <span>Inquire Stalls Combo</span>
          </a>
        </div>

      </div>
    </section>
  );
}
