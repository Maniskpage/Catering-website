import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Globe, Sparkles, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';
import Logo from './Logo';

export default function Navbar({ lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { id: 'home', name: lang === 'ta' ? 'முகப்பு' : 'Home', path: '/' },
    { id: 'menus', name: lang === 'ta' ? 'மெனு & கட்டணம்' : 'Menus', path: '/menus' },
    { id: 'estimator', name: lang === 'ta' ? 'விலை கணக்கீடு' : 'Estimator', path: '/estimator' },
    { id: 'stalls', name: lang === 'ta' ? 'லைவ் ஸ்டால்கள்' : 'Live Stalls', path: '/live-stalls' },
    { id: 'halls', name: lang === 'ta' ? 'மண்டபங்கள்' : 'Partner Halls', path: '/halls' },
    { id: 'about', name: lang === 'ta' ? 'எங்களை பற்றி' : 'About', path: '/about' },
    { id: 'contact', name: lang === 'ta' ? 'தொடர்புக்கு' : 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. Top Micro-Bar (Deep Crimson with Crisp White/Gold text) */}
      <div className={`transition-all duration-300 bg-[#74101A] text-white text-[11px] border-b border-crimson-950 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-1.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Pure Veg & Minimum Notice */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-bold text-white bg-leaf-700 px-2.5 py-0.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              🌿 100% Pure Vegetarian
            </span>
            <span className="text-crimson-300 hidden md:inline">•</span>
            <span className="text-stone-200 hidden md:inline font-medium">
              {lang === 'ta' ? 'மினிமம்: 100 நபர் முதல் பிரம்மாண்ட விழாக்கள் வரை' : 'Serving 100 to 5,000+ Guests in Trichy & Tamil Nadu'}
            </span>
          </div>

          {/* Right: Master Chef, Direct Phone & Language Toggle */}
          <div className="flex items-center gap-4 text-stone-200">
            <span className="hidden lg:flex items-center gap-1 text-gold-300 font-medium">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Chef: {BRAND_INFO.proprietor}</span>
            </span>

            <a
              href={`tel:${BRAND_INFO.primaryPhone}`}
              className="flex items-center gap-1 text-white hover:text-gold-300 font-bold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BRAND_INFO.formattedPhone}</span>
            </a>

            {/* Language Switch Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 transition-colors"
            >
              <Globe className="w-2.5 h-2.5" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean Solid White with Crisp Red Accents) */}
      <div className={`transition-all duration-300 bg-white border-b border-stone-200 ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center">
              <Logo className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-crimson-800 shadow-xs'
                        : 'text-stone-700 hover:text-crimson-800 hover:bg-stone-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-2.5">
              {/* WhatsApp Quick Icon Button */}
              <a
                href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-leaf-700 bg-leaf-50 hover:bg-leaf-100 border border-leaf-300 rounded-full transition-all duration-200 shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${BRAND_INFO.primaryPhone}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 px-3.5 py-2 rounded-full border border-stone-300 bg-white hover:border-crimson-800 hover:text-crimson-800 transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-crimson-700" />
                <span>96982 97590</span>
              </a>

              {/* Primary Instant Quote CTA */}
              <Link
                to="/estimator"
                className="inline-flex items-center gap-1.5 bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-soft-crimson hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-gold-500"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
                <span>{lang === 'ta' ? 'விலை கணக்கீடு' : 'Get Instant Quote'}</span>
              </Link>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-900 border border-stone-300"
              >
                {lang === 'en' ? 'தமிழ்' : 'EN'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-stone-800 hover:text-crimson-800 hover:bg-stone-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="p-3 bg-crimson-50 rounded-2xl border border-crimson-200 text-xs text-crimson-900 flex items-center justify-between">
            <span className="font-bold">🌿 100% Pure Veg • Min 100 Guests</span>
            <span className="font-tamil font-bold">{BRAND_INFO.proprietorTamil}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors text-center border ${
                    isActive
                      ? 'bg-crimson-800 text-white border-crimson-900'
                      : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${BRAND_INFO.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-crimson-800 text-white rounded-xl font-bold text-xs shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'ta' ? 'அழைக்க: 96982 97590' : 'Call: 96982 97590'}</span>
            </a>
            <a
              href={`https://wa.me/91${BRAND_INFO.primaryPhone}?text=Hello%20Harinee%20Catering,%20I%20want%20to%20book%20catering.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
