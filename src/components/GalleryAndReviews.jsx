import React, { useState } from 'react';
import { Star, Camera, MessageSquareHeart, Quote } from 'lucide-react';
import { GALLERY_IMAGES, TESTIMONIALS } from '../data/cateringData';

export default function GalleryAndReviews({ lang }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Feasts', 'Breakfast', 'Specials', 'Sweets', 'Live Counters'];

  const filteredGallery = GALLERY_IMAGES.filter(img => 
    activeFilter === 'All' ? true : img.category === activeFilter
  );

  return (
    <section className="py-16 md:py-24 bg-peach-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Gallery Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-crimson-600" />
              <span>{lang === 'ta' ? 'புகைப்பட தொகுப்பு' : 'Event & Dish Gallery'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-crimson-950">
              {lang === 'ta' ? 'எங்கள் சுவையான படைப்புகள்' : 'A Feast for the Eyes'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Live captures from wedding feasts, tiffin spreads, and live stalls organized by Harinee Catering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-crimson-800 text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-peach-200 hover:bg-peach-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 border border-peach-200 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                    {img.category}
                  </span>
                  <h4 className="font-serif font-bold text-base text-white mt-1">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <MessageSquareHeart className="w-3.5 h-3.5 text-crimson-600" />
              <span>{lang === 'ta' ? 'வாடிக்கையாளர் கருத்துக்கள்' : 'Family Testimonials'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-crimson-950">
              {lang === 'ta' ? 'மகிழ்ச்சியான குடும்பங்களின் வாழ்த்துக்கள்' : 'Loved by Hundreds of Families'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Read what hosts and families from Trichy have to say about our pure veg catering and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 bg-white border border-peach-200 shadow-sm hover:shadow-soft-crimson transition-all duration-300 flex flex-col justify-between relative"
              >
                <Quote className="w-8 h-8 text-peach-200 absolute top-4 right-4" />
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-peach-100">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-crimson-800 font-semibold">{t.event}</p>
                  <p className="text-[11px] text-stone-500">{t.venue} • {t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
