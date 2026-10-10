import React from 'react';
import { Building2, Phone, MapPin, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import { PARTNER_HALLS, BRAND_INFO } from '../data/cateringData';

export default function HallsSection({ lang }) {
  return (
    <section id="halls" className="py-16 md:py-24 bg-peach-50/70 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-crimson-600" />
            <span>{lang === 'ta' ? 'இணைப்பு திருமண & மினி ஹால்கள்' : 'Associated Banquet Venues'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
            {lang === 'ta' ? 'திருச்சி & சுற்றுவட்டார திருமண மண்டபங்கள்' : 'Associated Premium Marriage & Mini Halls'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் இல்லத்து சுபநிகழ்ச்சிகளுக்கு மிக கைராசியான திருமண மண்டபம் மற்றும் குடும்ப நிகழ்ச்சிகளுக்கான A/C மினி ஹால்கள்.'
              : 'Seamless hall booking and complete catering coordination across Trichy and Omanthur for all event sizes.'}
          </p>
        </div>

        {/* Halls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNER_HALLS.map((hall) => (
            <div
              key={hall.id}
              className="rounded-3xl bg-white border border-peach-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image & Badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-400 text-stone-950 px-2.5 py-1 rounded-full shadow">
                    {hall.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-lg leading-tight">{hall.name}</h3>
                  <p className="text-xs font-tamil text-peach-200 mt-0.5">{hall.tamilName}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1">
                <div className="flex items-center justify-between text-xs text-stone-600 pb-3 border-b border-peach-100">
                  <span className="font-semibold text-crimson-800">{hall.type}</span>
                  <span className="bg-peach-100 px-2 py-0.5 rounded-md font-bold text-stone-800">{hall.capacity}</span>
                </div>

                <div className="flex items-start gap-2 text-xs text-stone-700">
                  <MapPin className="w-4 h-4 text-crimson-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{hall.location}</p>
                    <p className="text-[11px] text-stone-500 font-tamil">{hall.locationTamil}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">Key Amenities:</span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-700">
                    {hall.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-leaf-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Phone CTAs */}
              <div className="p-4 bg-peach-50/90 border-t border-peach-200 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-crimson-950">
                  <span>Direct Booking Phones:</span>
                  <div className="flex gap-2">
                    {hall.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                        className="text-crimson-700 hover:text-crimson-900 underline text-xs"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20am%20inquiring%20about%20booking%20${encodeURIComponent(hall.name)}%20with%20catering.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                  <span>Check Hall + Catering Availability</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
