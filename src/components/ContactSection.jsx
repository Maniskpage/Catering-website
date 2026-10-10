import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle2, Building, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/cateringData';

export default function ContactSection({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Wedding / Kalyanam',
    guests: '200',
    venue: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    setIsSubmitted(true);

    // Also trigger WhatsApp
    const text = `*New Booking Inquiry - Harinee Catering*
----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Date:* ${formData.date}
*Event Type:* ${formData.eventType}
*Guests:* ${formData.guests}
*Venue:* ${formData.venue || 'Trichy'}
*Special Notes:* ${formData.message || 'Please contact me with menu suggestions.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/91${BRAND_INFO.primaryPhone}?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-crimson-600" />
            <span>{lang === 'ta' ? 'முன்பதிவு & தொடர்பு' : 'Book Catering / Inquire'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
            {lang === 'ta' ? 'எங்களை தொடர்பு கொள்ளவும்' : 'Let’s Make Your Event Unforgettable'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'சுப முகூர்த்த தினங்களுக்கு முன்கூட்டியே முன்பதிவு செய்து கொள்ளவும். உணவு மாதிரி மற்றும் மெனு ஆலோசனைகளுக்கு அழைக்கவும்.'
              : 'Secure your auspicious date with Harinee Catering. Reach out for custom menu curation, food tasting, and hall bookings.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Call Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-crimson-800 to-crimson-950 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-peach-200">
                    Master Chef & Manager
                  </span>
                  <h3 className="font-serif text-xl font-bold">{BRAND_INFO.proprietor}</h3>
                  <p className="text-xs font-tamil text-peach-200">{BRAND_INFO.proprietorTamil}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <a
                  href={`tel:${BRAND_INFO.primaryPhone}`}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-bold text-sm"
                >
                  <span>Primary Booking:</span>
                  <span className="text-gold-300 font-mono">{BRAND_INFO.formattedPhone}</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.secondaryPhone}`}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-bold text-sm"
                >
                  <span>Alternative Phone:</span>
                  <span className="text-gold-300 font-mono">{BRAND_INFO.formattedSecondaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Office Locations & Online Channels */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-peach-50/70 border border-peach-200 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-peach-200 flex items-center justify-center text-crimson-700 flex-shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">City Booking Office</h4>
                  <p className="text-xs text-stone-700 mt-0.5">
                    No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 620002.
                  </p>
                  <p className="text-[11px] text-stone-500 font-tamil mt-0.5">
                    நெ. 23, ரவி மினி ஹால், கரூர் பைபாஸ் ரோடு, திருச்சி - 2
                  </p>
                  <p className="text-[11px] text-crimson-700 font-semibold mt-1">
                    Landline: 0431 - 2702571
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-peach-50/70 border border-peach-200 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-peach-200 flex items-center justify-center text-crimson-700 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Head Office</h4>
                  <p className="text-xs text-stone-700 mt-0.5">
                    Peramangalam (A), Trichy District, Tamil Nadu.
                  </p>
                  <p className="text-[11px] text-stone-500 font-tamil mt-0.5">
                    பெரமங்கலம் (அ), திருச்சி (மா)
                  </p>
                </div>
              </div>

              {/* Online Channels */}
              <div className="p-4 rounded-2xl bg-white border border-peach-200 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-crimson-700 flex items-center justify-center font-bold text-sm">
                    ✉
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase block">Official Email</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-xs font-bold text-crimson-900 hover:underline">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1565C0] transition-colors"
                >
                  <span>f</span> Facebook
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-4 rounded-2xl bg-leaf-50 border border-leaf-200 text-xs text-stone-700 space-y-1">
              <span className="font-bold text-leaf-700 block">🚗 Service Coverage Areas:</span>
              <p>Trichy, Srirangam, Lalgudi, Manapparai, Musiri, Thuraiyur, Thanjavur, Karur, Pudukkottai, Ariyalur, and all over Tamil Nadu.</p>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-peach-50/50 rounded-3xl p-6 sm:p-8 border border-peach-200 shadow-luxury">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you! WhatsApp has been opened with your event details. Chef V. Manivannan will contact you shortly to finalize your custom menu.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-crimson-800 text-white font-semibold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-peach-200 pb-3 mb-2">
                  <h3 className="font-serif font-bold text-xl text-crimson-950">
                    {lang === 'ta' ? 'முன்பதிவு வினவல் படிவம்' : 'Event Booking & Inquiry Form'}
                  </h3>
                  <p className="text-xs text-stone-500">Fill in the details below to receive instant date confirmation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Full Name / பெயர் *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Ramanathan"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number / தொலைபேசி *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 96982 97590"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Event Date / நிகழ்ச்சி நாள் *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Event Type / நிகழ்வு வகை
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    >
                      <option>Wedding / Kalyanam (திருமணம்)</option>
                      <option>Reception (வரவேற்பு)</option>
                      <option>Seemantham / Valaikappu (வளைகாப்பு)</option>
                      <option>Ear Piercing (காதணி விழா)</option>
                      <option>Puberty (பூப்புனித நீராட்டு விழா)</option>
                      <option>Birthday / Anniversary</option>
                      <option>Housewarming / Grahapravesam</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Expected Guest Count (Min 100) *
                    </label>
                    <input
                      type="number"
                      min="100"
                      required
                      placeholder="e.g. 350"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Venue / Mandapam Name & City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ravi Mini Hall, Trichy"
                      value={formData.venue}
                      onChange={(e) => setFormData({...formData, venue: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Special Menu Preferences / Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mention preferred dishes (e.g. Elaneer Payasam, Wheat Halwa, Live Counters)..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-white text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-crimson-600 shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-crimson-700 via-crimson-800 to-crimson-900 text-white font-bold text-sm shadow-soft-crimson hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Open WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
