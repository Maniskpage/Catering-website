import React from 'react';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function ContactPage({ lang }) {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <SEOHead
        title="Contact & Book Catering in Trichy | Harinee Catering - Chef V. Manivannan"
        description="Contact Harinee Catering Trichy for wedding & event booking. Call +91 96982 97590 or 98424 44425. City Office: No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 2."
        keywords="contact harinee catering, catering booking phone number trichy, book wedding catering trichy, ravi mini hall contact number, manivannan caterer trichy phone"
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-10 md:py-14 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Booking & Helpdesk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'தொடர்பு & முன்பதிவு மையம்' : 'Contact & Event Booking Helpdesk'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'திருமணம் மற்றும் சுபமுகூர்த்த தினங்களுக்கு முன்கூட்டியே முன்பதிவு செய்து கொள்ளவும்.'
              : 'Reach out for custom menu discussions, date availability, and hall booking assistance across Trichy.'}
          </p>
        </div>
      </div>

      {/* Main Contact Component */}
      <ContactSection lang={lang} />
    </div>
  );
}
