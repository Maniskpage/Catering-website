import React from 'react';
import AboutSection from '../components/AboutSection';
import GalleryAndReviews from '../components/GalleryAndReviews';
import SEOHead from '../components/SEOHead';
import { Award, Heart, ShieldCheck, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function AboutPage({ lang }) {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <SEOHead
        title="About Founder V. Manivannan & Co-Founder Deepa | Harinee Catering Trichy"
        description="Learn about Harinee Catering in Trichy, founded by V. Manivannan and Co-Founder Deepa. Dedicated to 100% pure vegetarian authentic South Indian culinary excellence, pure cow ghee, and hygienic catering."
        keywords="about harinee catering, founder v manivannan trichy, co-founder deepa harinee catering, pure veg catering history trichy, best traditional catering service trichy"
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-10 md:py-14 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Award className="w-3.5 h-3.5" />
            <span>Our Culinary Heritage</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'எங்களைப் பற்றி • ஹரிணி கேட்டரிங்' : 'About Harinee Catering Service'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'தலைமை: நிறுவனர் V. மணிவண்ணன் & இணை நிறுவனர் தீபா அவர்களின் அனுபவமிக்க சமையல் கலை.'
              : 'Led by Founder V. Manivannan and Co-Founder Deepa, bringing decades of authentic culinary expertise, pure cow ghee, and warm hospitality to every home.'}
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection lang={lang} />

      {/* Photo Gallery & Testimonials */}
      <GalleryAndReviews lang={lang} />
    </div>
  );
}
