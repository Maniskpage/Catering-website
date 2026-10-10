import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MenuExplorer from '../components/MenuExplorer';
import CostCalculator from '../components/CostCalculator';
import LiveStallsSection from '../components/LiveStallsSection';
import HallsSection from '../components/HallsSection';
import AboutSection from '../components/AboutSection';
import GalleryAndReviews from '../components/GalleryAndReviews';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';
import { Sparkles, ArrowRight, Utensils, Calculator, Building2, PartyPopper } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function HomePage({ lang, onSelectPackage }) {
  return (
    <>
      <SEOHead
        title="Harinee Catering | Best Pure Veg Catering Service in Trichy - Feel The Taste"
        description="Harinee Catering by Chef V. Manivannan. Providing authentic South Indian pure vegetarian catering for Weddings, Receptions, Valaikappu, and Events in Trichy, Tamil Nadu. Min 100 guests."
        keywords="catering service trichy, pure veg catering trichy, harinee catering, wedding catering trichy, valaikappu catering trichy, best caterers in trichy, ravi mini hall catering, kalyana saapadu trichy"
      />

      {/* 1. Hero Section */}
      <Hero lang={lang} />

      {/* 2. Interactive Menu Explorer */}
      <MenuExplorer lang={lang} onSelectPackage={onSelectPackage} />

      {/* 3. Event Cost Calculator */}
      <CostCalculator lang={lang} />

      {/* 4. 16 Live Stalls */}
      <LiveStallsSection lang={lang} />

      {/* 5. Associated Halls (Ravi Mini Hall, Sushi Hall, Omanthur) */}
      <HallsSection lang={lang} />

      {/* 6. About Chef & Quality Pillars */}
      <AboutSection lang={lang} />

      {/* 7. Gallery & Real Testimonials */}
      <GalleryAndReviews lang={lang} />

      {/* 8. Contact & Booking Inquiry */}
      <ContactSection lang={lang} />
    </>
  );
}
