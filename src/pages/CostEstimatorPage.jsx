import React from 'react';
import CostCalculator from '../components/CostCalculator';
import SEOHead from '../components/SEOHead';
import { Calculator, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function CostEstimatorPage({ lang, externalSelectedPackage }) {
  return (
    <div className="pt-24 pb-16 bg-peach-silk min-h-screen">
      <SEOHead
        title="Event Catering Cost Calculator Trichy | Instant Quote | Harinee Catering"
        description="Calculate estimated catering cost per plate for your wedding, reception, seemantham or birthday in Trichy. Real-time pricing with live food stalls and instant WhatsApp quote."
        keywords="catering cost calculator trichy, wedding catering estimate per plate, catering price per head trichy, vegetarian catering quotation trichy, calculate wedding food cost"
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-10 md:py-14 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'நிகழ்வு கட்டண கணக்கீடு & கோட்டேஷன்' : 'Custom Event Quotation Builder'}
          </h1>

          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'விருந்தினர் எண்ணிக்கை மற்றும் உணவு வேளைகளைத் தேர்வு செய்து உடனடி கட்டண மதிப்பீட்டைப் பெற்று வாட்ஸ்அப்பில் அனுப்பவும்.'
              : 'Configure breakfast, lunch, high-tea, dinner, and live counters. Generate an instant formal quotation for your event.'}
          </p>
        </div>
      </div>

      {/* Main Cost Calculator Component */}
      <CostCalculator lang={lang} externalSelectedPackage={externalSelectedPackage} />
    </div>
  );
}
