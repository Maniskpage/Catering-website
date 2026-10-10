import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function FloatingActions({ lang }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-peach-200 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-2.5 no-print">
      {/* Call Button */}
      <a
        href={`tel:${BRAND_INFO.primaryPhone}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-crimson-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4" />
        <span>{lang === 'ta' ? 'அழைக்க' : 'Call Chef'}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Quote Calc Anchor */}
      <Link
        to="/estimator"
        className="p-2.5 rounded-xl bg-peach-100 border border-peach-300 text-crimson-900 font-bold text-xs flex items-center justify-center shadow-sm active:scale-95 transition-transform"
        title="Estimate Cost"
      >
        <Calculator className="w-4 h-4 text-crimson-700" />
      </Link>
    </div>
  );
}
