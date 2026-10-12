import React from 'react';
import { Award, Flame, HeartHandshake, Sparkles, CheckCircle2, ShieldCheck, Clock, Users } from 'lucide-react';
import { BRAND_INFO } from '../data/cateringData';

export default function AboutSection({ lang }) {
  const pillars = [
    {
      icon: Flame,
      title: "Pure Ingredients & Pure Ghee",
      tamilTitle: "தூய நெய் & பாரம்பரிய மசாலா",
      desc: "No artificial food colors or MSG. Only pure cold-pressed groundnut & gingelly oils, fresh vegetables, and A2 cow ghee."
    },
    {
      icon: ShieldCheck,
      title: "Strict Food Safety & Hygiene",
      tamilTitle: "உயர்தர சுகாதாரம்",
      desc: "Prepared in sterile modern centralized kitchens with sanitized water filtration and food safety compliance."
    },
    {
      icon: Users,
      title: "Courteous Traditional Hospitality",
      tamilTitle: "பண்பான உபசரிப்பு",
      desc: "Well-groomed, uniformed serving staff trained in authentic South Indian banana leaf serving etiquette with warm smiles."
    },
    {
      icon: Clock,
      title: "Punctual Hot Serving",
      tamilTitle: "துல்லியமான நேர மேலாண்மை",
      desc: "Guaranteed on-time buffet and dining setup so your muhurtham and auspicious timings proceed flawlessly."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual: Chef & Tradition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-peach-200">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Harinee Catering Culinary Kitchen"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/90 via-crimson-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 bg-black/40 px-2 py-0.5 rounded border border-gold-400/40">
                    Founder: {BRAND_INFO.founder}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-peach-200 bg-crimson-800/80 px-2 py-0.5 rounded border border-peach-300/40">
                    Co-Founder: {BRAND_INFO.coFounder}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {BRAND_INFO.founder} & {BRAND_INFO.coFounder}
                </h3>
                <p className="text-xs font-tamil text-peach-200 mt-0.5">{BRAND_INFO.leadershipTamil}</p>
                <p className="text-xs text-stone-200 mt-2">
                  "உணவே மருந்து, விருந்தோம்பலே தர்மம் — Carrying forward the timeless heritage of South Indian wedding cuisine."
                </p>
              </div>
            </div>

            {/* Experience Tag floating */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold-500 to-amber-600 text-stone-950 p-4 rounded-2xl shadow-xl font-bold text-center border-2 border-white">
              <span className="text-2xl sm:text-3xl font-serif block">100%</span>
              <span className="text-[11px] uppercase tracking-wider block font-sans">Pure Vegetarian</span>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-crimson-600" />
              <span>{lang === 'ta' ? 'எங்கள் தாரக மந்திரம்' : 'About Harinee Catering'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-crimson-950 leading-tight">
              {lang === 'ta'
                ? 'உங்கள் வீட்டு சுபநிகழ்ச்சிகளை மறக்க முடியாத சுவை திருவிழாவாக மாற்றுகிறோம்'
                : 'Crafting Divine Culinary Experiences with Heartfelt South Indian Hospitality'}
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {lang === 'ta'
                ? 'திருச்சி பெரமங்கலம் மற்றும் கரூர் பைபாஸ் ரோட்டில் இயங்கி வரும் ஹரிணி கேட்டரிங் சர்வீஸ், நிறுவனர் V. மணிவண்ணன் மற்றும் இணை நிறுவனர் தீபா ஆகியோரின் தலைமையில், கடந்த பல ஆண்டுகளாக ஆயிரக்கணக்கான திருமணங்கள், சீமந்தங்கள் மற்றும் இல்லற நிகழ்வுகளுக்கு தரமான அறுசுவை விருந்தை வழங்கி வருகிறது.'
                : 'Founded under the divine blessings of Sanjeeviraya Perumal, Harinee Catering under the visionary leadership of Founder V. Manivannan and Co-Founder Deepa brings legendary culinary expertise to every auspicious occasion in Trichy, Thanjavur, Karur, and across Tamil Nadu.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-peach-50 border border-peach-200 text-center">
                <span className="font-serif text-2xl font-extrabold text-crimson-800 block">400+</span>
                <span className="text-xs text-stone-600 font-medium">Grand Weddings</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-peach-50 border border-peach-200 text-center">
                <span className="font-serif text-2xl font-extrabold text-crimson-800 block">100+</span>
                <span className="text-xs text-stone-600 font-medium">Min Guest Guarantee</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-peach-50 border border-peach-200 text-center col-span-2 sm:col-span-1">
                <span className="font-serif text-2xl font-extrabold text-crimson-800 block">16+</span>
                <span className="text-xs text-stone-600 font-medium">Live Stalls & Counters</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#calculator"
                className="px-6 py-3 rounded-full bg-crimson-800 text-white hover:bg-crimson-900 font-semibold text-xs sm:text-sm shadow-soft-crimson transition-all"
              >
                Plan Your Event Feast
              </a>
              <a
                href={`tel:${BRAND_INFO.primaryPhone}`}
                className="px-5 py-3 rounded-full border border-peach-300 hover:border-crimson-600 text-stone-800 font-semibold text-xs sm:text-sm transition-all"
              >
                Speak with Master Chef
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-peach-50/60 border border-peach-200/80 hover:border-crimson-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-peach-200 shadow-sm flex items-center justify-center text-crimson-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    {lang === 'ta' ? pil.tamilTitle : pil.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center gap-1 text-[11px] font-bold text-leaf-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-leaf-600" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
