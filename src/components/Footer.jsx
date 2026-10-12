import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, ShieldCheck, Award } from 'lucide-react';
import { BRAND_INFO, MENU_CATEGORIES, PARTNER_HALLS } from '../data/cateringData';
import Logo from './Logo';

export default function Footer({ lang }) {
  return (
    <footer className="bg-[#2A0F14] text-stone-300 pt-16 pb-24 md:pb-12 border-t-2 border-gold-500/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo isWhite={true} className="h-12 sm:h-14 w-auto rounded-xl" />
            </Link>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Authentic South Indian vegetarian catering founded by <strong className="text-white">V. Manivannan</strong> & Co-Founder <strong className="text-white">Deepa</strong>. Serving traditional Kalyana feasts, Seemantham variety meals, evening high tea & live counters across Trichy and Tamil Nadu.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
              <div className="text-gold-300 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.leadershipTamil}</span>
              </div>
              <p className="text-stone-300">தலைமை: சஞ்சீவிராய, பெருமாள் திருவருள்</p>
              <p className="text-stone-400 text-[11px]">மினிமம் - 100 நபர் முதல்</p>
            </div>
          </div>

          {/* Col 3: Quick Menu Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Menu Packages
            </h4>
            <ul className="space-y-2 text-xs">
              {MENU_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to="/menus" className="hover:text-gold-300 transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="text-[10px] text-stone-400 bg-white/5 px-2 py-0.5 rounded">{cat.heroPrice}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/live-stalls" className="hover:text-gold-300 transition-colors flex items-center justify-between">
                  <span>16+ Live Stalls</span>
                  <span className="text-[10px] text-stone-400 bg-white/5 px-2 py-0.5 rounded">All Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Partner Halls */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Partner Halls
            </h4>
            <ul className="space-y-2 text-xs">
              {PARTNER_HALLS.map(hall => (
                <li key={hall.id}>
                  <Link to="/halls" className="hover:text-gold-300 transition-colors block">
                    <span className="font-semibold text-white block">{hall.name}</span>
                    <span className="text-[11px] text-stone-400">{hall.location}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Booking */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-gold-400">
              Booking Helpdesk
            </h4>
            <div className="space-y-2.5 text-xs">
              <a href={`tel:${BRAND_INFO.primaryPhone}`} className="flex items-center gap-2 hover:text-gold-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span className="font-bold text-white">{BRAND_INFO.formattedPhone}</span>
              </a>
              <a href={`tel:${BRAND_INFO.secondaryPhone}`} className="flex items-center gap-2 hover:text-gold-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>{BRAND_INFO.formattedSecondaryPhone}</span>
              </a>
              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-2 hover:text-gold-300 text-stone-300">
                <span className="text-gold-400">✉</span>
                <span className="truncate">{BRAND_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-stone-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>No. 23, Karur Bypass Road, Trichy - 2</span>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#60A5FA] rounded-lg text-xs font-bold border border-[#1877F2]/40 transition-colors"
                >
                  <span>f</span> Facebook
                </a>
                <Link
                  to="/contact"
                  className="inline-block px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-gold-300 text-xs font-semibold transition-colors"
                >
                  Booking Form →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Harinee Catering Service (ஹரிணி கேட்டரிங்). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for Authentic Traditional Flavors</span>
            <span className="text-crimson-500">♥</span>
            <span>Trichy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
