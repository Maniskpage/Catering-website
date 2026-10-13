import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Check, Download, MessageCircle, Phone, 
  Calendar, MapPin, Users, Utensils, CheckCircle2, 
  Plus, Trash2, ArrowRight, ShieldCheck, Printer, RefreshCw
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import SEOHead from '../components/SEOHead';
import { BRAND_INFO, LIVE_STALLS, CUSTOM_MENU_CATALOG } from '../data/cateringData';

export default function CustomMenuPage({ lang }) {
  // Event Details State
  const [eventType, setEventType] = useState('Wedding / Reception');
  const [guestCount, setGuestCount] = useState(300);
  const [eventDate, setEventDate] = useState('');
  const [eventVenue, setEventVenue] = useState('Trichy');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState('breakfast');

  // Selected Dishes by meal: { breakfast: [id1, id2], lunch: [id3], ... }
  const [selectedDishes, setSelectedDishes] = useState({
    breakfast: ['b_kesari', 'b_idli', 'b_vada', 'b_pongal', 'b_roast', 'b_sambar', 'b_coconutchut', 'b_coffee'],
    lunch: ['l_elaneer', 'l_whiterice', 'l_murungasambar', 'l_potatofry', 'l_aviyal', 'l_tomatrasam', 'l_appalam', 'l_icecream', 'l_beeda'],
    snacks: [],
    dinner: []
  });

  // Selected Live Stalls
  const [selectedStalls, setSelectedStalls] = useState(['ice-cream', 'sweet-beeda']);

  // PDF Generation Loading State
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const printContentRef = useRef(null);

  // Toggle dish selection
  const toggleDish = (mealKey, dishId) => {
    setSelectedDishes(prev => {
      const currentList = prev[mealKey] || [];
      const updated = currentList.includes(dishId)
        ? currentList.filter(id => id !== dishId)
        : [...currentList, dishId];
      return { ...prev, [mealKey]: updated };
    });
  };

  // Toggle stall selection
  const toggleStall = (stallId) => {
    setSelectedStalls(prev => 
      prev.includes(stallId) ? prev.filter(id => id !== stallId) : [...prev, stallId]
    );
  };

  // Total selected dishes count across all meals
  const totalSelectedCount = Object.values(selectedDishes).reduce((sum, list) => sum + list.length, 0);

  // Clear selections for a specific meal
  const clearMealSelections = (mealKey) => {
    setSelectedDishes(prev => ({ ...prev, [mealKey]: [] }));
  };

  // Build categorized list of items for output
  const getSelectedItemsForMeal = (mealKey) => {
    const catalog = CUSTOM_MENU_CATALOG[mealKey];
    if (!catalog) return [];
    const chosenIds = selectedDishes[mealKey] || [];
    const result = [];
    catalog.sections.forEach(section => {
      const matched = section.items.filter(item => chosenIds.includes(item.id));
      if (matched.length > 0) {
        result.push({
          sectionName: section.name,
          items: matched
        });
      }
    });
    return result;
  };

  // Send Custom Menu via WhatsApp
  const handleShareWhatsApp = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

    let message = `*Custom Catering Menu Inquiry - Harinee Catering*\n`;
    message += `----------------------------------------\n`;
    message += `*Client Name:* ${clientName || 'Customer'}\n`;
    message += `*Phone:* ${clientPhone || 'Not specified'}\n`;
    message += `*Event Type:* ${eventType}\n`;
    message += `*Event Date:* ${eventDate || 'To be decided'}\n`;
    message += `*Venue:* ${eventVenue}\n`;
    message += `*Guest Count:* ${guestCount} Guests (Min 100)\n\n`;

    // Meals
    const mealKeys = ['breakfast', 'lunch', 'snacks', 'dinner'];
    mealKeys.forEach(mealKey => {
      const selectedSections = getSelectedItemsForMeal(mealKey);
      if (selectedSections.length > 0) {
        const title = CUSTOM_MENU_CATALOG[mealKey].title;
        message += `*${title}:*\n`;
        selectedSections.forEach(sec => {
          const names = sec.items.map(item => `${item.name} (${item.tamil})`).join(', ');
          message += `• _${sec.sectionName}_: ${names}\n`;
        });
        message += `\n`;
      }
    });

    // Stalls
    if (selectedStalls.length > 0) {
      const stallsList = selectedStalls
        .map(id => LIVE_STALLS.find(s => s.id === id)?.name)
        .filter(Boolean)
        .join(', ');
      message += `*Live Stalls & Entertainment Add-ons (${selectedStalls.length}):*\n${stallsList}\n\n`;
    }

    if (customNotes) {
      message += `*Special Requests / Notes:* ${customNotes}\n\n`;
    }

    message += `----------------------------------------\n`;
    message += `_Founder: V. Manivannan • Co-Founder: Deepa_\n`;
    message += `_Please review our custom menu list and provide the best per-plate quotation._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${BRAND_INFO.primaryPhone}?text=${encoded}`, '_blank');
  };

  // Direct 1-Click PDF Download
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });

    // Allow React state update to mount the template & loading backdrop
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const element = document.getElementById('custom-menu-pdf-template');
      if (!element) {
        alert('Template not ready, please try again.');
        setIsGeneratingPdf(false);
        return;
      }

      const opt = {
        margin: [6, 6, 6, 6],
        filename: `Harinee_Catering_Custom_Menu_${(clientName || 'Inquiry').replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 760
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF generation error:', err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
      <SEOHead
        title="Custom Menu Planner | Harinee Catering - Founder V. Manivannan & Co-Founder Deepa"
        description="Design your custom vegetarian catering menu in Trichy. Handpick authentic breakfast, lunch, snacks, dinner dishes, and live stalls. Instant PDF download & WhatsApp quote."
        keywords="custom catering menu trichy, customize wedding menu trichy, harinee catering custom planner, breakfast lunch tiffin custom menu trichy"
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-950 text-white py-12 md:py-16 mb-8 border-b-2 border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>100% Personalized Dish Selection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white">
            {lang === 'ta' ? 'தனிப்பயன் கல்யாண மெனு பிளானர்' : 'Design Your Custom Event Menu'}
          </h1>
          <p className="text-stone-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் விருப்பத்திற்கேற்ப காலை டிபன், மதிய சாப்பாடு, மாலை ஸ்நாக்ஸ் மற்றும் இரவு டிபன் உணவுகளைத் தேர்வு செய்து உடனடி PDF பெறலாம்.'
              : 'Handpick your favorite dishes from our authentic kitchen. We design the menu according to your exact family preferences with zero compromises on taste.'}
          </p>
          <p className="text-gold-300 text-xs font-medium pt-1">
            Curated by Founder V. Manivannan & Co-Founder Deepa • Pure Vegetarian • Min 100 Guests
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step 1: Basic Event Information */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-peach-200 shadow-luxury mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-peach-100 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-crimson-800 text-white text-xs font-bold flex items-center justify-center">1</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-crimson-950">
                {lang === 'ta' ? 'நிகழ்ச்சி மற்றும் தொடர்பு விவரங்கள்' : 'Event & Contact Information'}
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">* Minimum 100 guests</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Event Type (நிகழ்ச்சி)</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs font-medium focus:outline-none focus:border-crimson-600 focus:bg-white"
              >
                <option value="Wedding / Reception">Wedding / Kalyanam (திருமணம்)</option>
                <option value="Betrothal / Nichayathartham">Betrothal (நிச்சயதார்த்தம்)</option>
                <option value="Seemantham / Valaikappu">Seemantham / Valaikappu (வளைகாப்பு)</option>
                <option value="Ear Piercing / Kathani Vizha">Ear Piercing (காதணி விழா)</option>
                <option value="Puberty Ceremony">Puberty Ceremony (மஞ்சள் நீராட்டு)</option>
                <option value="Housewarming / Grahapravesam">Housewarming (கிரகப்பிரவேசம்)</option>
                <option value="Birthday / Anniversary">Birthday / Anniversary (பிறந்தநாள்)</option>
                <option value="Corporate / Institution">Corporate / Institution Banquet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Guest Count: <span className="text-crimson-700">{guestCount} Guests</span>
              </label>
              <input
                type="range"
                min="100"
                max="2500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-crimson-700 h-2 bg-peach-200 rounded-lg cursor-pointer mt-2"
              />
              <div className="flex gap-1.5 mt-2">
                {[100, 250, 500, 1000].map(cnt => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setGuestCount(cnt)}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      guestCount === cnt ? 'bg-crimson-700 text-white' : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Client Name (பெயர்)</label>
              <input
                type="text"
                placeholder="e.g. Ramesh / Priya"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs font-medium focus:outline-none focus:border-crimson-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">WhatsApp / Phone (போன்)</label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs font-medium focus:outline-none focus:border-crimson-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-peach-100">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Event Venue / Location (மண்டபம் / ஊர்)</label>
              <input
                type="text"
                placeholder="e.g. Ravi Mini Hall, Trichy"
                value={eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs font-medium focus:outline-none focus:border-crimson-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">Muhurtham Date (நிகழ்ச்சி தேதி)</label>
              <input
                type="text"
                placeholder="e.g. 24th November 2026"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs font-medium focus:outline-none focus:border-crimson-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Meal Slot Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-peach-200 shadow-luxury mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-peach-100">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-crimson-800 text-white text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-crimson-950">
                  {lang === 'ta' ? 'உணவு வேளைகள் & மெனு பட்டியல்' : 'Choose Your Favorite Dishes'}
                </h2>
                <p className="text-xs text-stone-500">Tap dishes to add or remove from your custom menu list</p>
              </div>
            </div>

            {/* Total Selected Summary Badge */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-peach-100 text-crimson-900 font-bold text-xs border border-peach-300">
                {totalSelectedCount} Total Dishes Picked
              </span>
            </div>
          </div>

          {/* Meal Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
            {[
              { id: 'breakfast', label: 'Morning Tiffin', icon: '☀️', count: selectedDishes.breakfast.length },
              { id: 'lunch', label: 'Lunch Saapadu', icon: '🍛', count: selectedDishes.lunch.length },
              { id: 'snacks', label: 'Evening Snacks', icon: '☕', count: selectedDishes.snacks.length },
              { id: 'dinner', label: 'Dinner Buffet', icon: '🌙', count: selectedDishes.dinner.length },
              { id: 'stalls', label: 'Live Stalls', icon: '🎪', count: selectedStalls.length }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  activeTab === tab.id
                    ? 'bg-crimson-800 border-crimson-900 text-white shadow-md'
                    : 'bg-peach-50/50 border-peach-200 text-stone-700 hover:bg-peach-100/60'
                }`}
              >
                <div className="flex items-center justify-between text-base mb-1">
                  <span>{tab.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-peach-200 text-stone-800'
                  }`}>
                    {tab.count}
                  </span>
                </div>
                <span className="font-bold text-xs truncate">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content: Food Item Grid */}
          {activeTab !== 'stalls' ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-base text-crimson-900 flex items-center gap-2">
                  <span>{CUSTOM_MENU_CATALOG[activeTab].icon}</span>
                  <span>{CUSTOM_MENU_CATALOG[activeTab].title}</span>
                </h3>
                {selectedDishes[activeTab].length > 0 && (
                  <button
                    type="button"
                    onClick={() => clearMealSelections(activeTab)}
                    className="text-xs text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear {CUSTOM_MENU_CATALOG[activeTab].title.split(' ')[0]}</span>
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {CUSTOM_MENU_CATALOG[activeTab].sections.map(section => (
                  <div key={section.name} className="p-4 rounded-2xl bg-peach-50/40 border border-peach-200">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 pb-1 border-b border-peach-200">
                      {section.name}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {section.items.map(dish => {
                        const isSelected = selectedDishes[activeTab].includes(dish.id);
                        return (
                          <button
                            key={dish.id}
                            type="button"
                            onClick={() => toggleDish(activeTab, dish.id)}
                            className={`p-2.5 rounded-xl text-left border transition-all flex items-center justify-between text-xs ${
                              isSelected
                                ? 'bg-crimson-800 border-crimson-900 text-white shadow-sm'
                                : 'bg-white border-peach-200 text-stone-800 hover:border-crimson-600 hover:bg-peach-50'
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <p className={`font-bold truncate text-[11px] sm:text-xs ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                                {dish.name}
                              </p>
                              <p className={`text-[10px] font-tamil truncate mt-0.5 ${isSelected ? 'text-peach-200' : 'text-stone-500'}`}>
                                {dish.tamil}
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'bg-gold-400 text-stone-950 font-bold' : 'border border-peach-300 text-transparent'
                            }`}>
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Live Stalls Add-ons Tab */
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-base text-crimson-900 flex items-center gap-2">
                  <span>🎪</span>
                  <span>Live Stalls & Entertainment Add-ons (லைவ் ஸ்டால்கள்)</span>
                </h3>
                <span className="text-xs text-stone-500">Available to add with any meal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {LIVE_STALLS.map(stall => {
                  const isChecked = selectedStalls.includes(stall.id);
                  return (
                    <button
                      key={stall.id}
                      type="button"
                      onClick={() => toggleStall(stall.id)}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-start gap-3 text-xs ${
                        isChecked
                          ? 'bg-peach-100 border-crimson-600 text-crimson-950 font-semibold shadow-sm'
                          : 'bg-white border-peach-200 text-stone-800 hover:bg-peach-50'
                      }`}
                    >
                      <span className="text-2xl">{stall.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs">{stall.name}</p>
                        <p className="text-[10px] text-stone-500 font-tamil mt-0.5">{stall.tamilName}</p>
                        <p className="text-[10px] text-crimson-800 mt-1 font-medium">{stall.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                        isChecked ? 'bg-crimson-700 text-white' : 'border border-stone-300 text-transparent'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Special Custom Requests Textarea */}
          <div className="mt-8 pt-6 border-t border-peach-200">
            <label className="block text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Special Custom Dish Requests & Notes (தனிப்பயன் குறிப்புகள்):</span>
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Need Elaneer Payasam, specific regional sweet, onion/garlic-free dishes for elderly relatives, special welcome drink flavor..."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl border border-peach-300 bg-peach-50/30 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-crimson-600 focus:bg-white transition-all"
            ></textarea>
          </div>
        </div>

        {/* Live Summary Tray & Actions */}
        <div className="bg-gradient-to-br from-crimson-950 via-crimson-900 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-400/40 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                Custom Menu Proposal Summary
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Ready to Send or Download Your Custom Menu?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
                You have handpicked <strong className="text-gold-300">{totalSelectedCount} dishes</strong> and{' '}
                <strong className="text-gold-300">{selectedStalls.length} live stalls</strong> for {guestCount} guests.
                Founder V. Manivannan & Co-Founder Deepa will review and offer the most competitive per-plate rate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf || totalSelectedCount === 0}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gold-400 hover:bg-gold-300 disabled:opacity-50 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-95"
              >
                {isGeneratingPdf ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-stone-950" />
                    <span>Download Custom Menu PDF</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleShareWhatsApp}
                disabled={totalSelectedCount === 0}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp for Rate Quote</span>
              </button>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-2">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Pure Cow Ghee & Cold-Pressed Groundnut/Gingelly Oil Guarantee</span>
            </span>
            <a
              href={`tel:${BRAND_INFO.primaryPhone}`}
              className="text-gold-300 hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Call: 96982 97590 / 79040 96754</span>
            </a>
          </div>
        </div>

      </div>

      {/* High-Resolution PDF Rendering Container (Mounted ONLY during generation so it never leaks or affects mobile layout) */}
      {isGeneratingPdf && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center text-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-stone-900 rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-3 border border-peach-200">
            <RefreshCw className="w-9 h-9 animate-spin text-crimson-700" />
            <h4 className="font-serif font-bold text-base text-crimson-950">Generating Official Custom Menu PDF...</h4>
            <p className="text-xs text-stone-500">Preparing high-resolution print proposal • Harinee Catering</p>
          </div>

          {/* Rendered at fixed coordinates for html2canvas to capture cleanly */}
          <div style={{ position: 'fixed', left: 0, top: 0, width: '740px', zIndex: -10, pointerEvents: 'none', background: '#ffffff' }}>
            <div id="custom-menu-pdf-template" ref={printContentRef} style={{
              width: '740px',
              boxSizing: 'border-box',
              padding: '20px 24px',
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Mukta Malar", Arial, sans-serif',
              fontSize: '11px',
              lineHeight: '1.5'
            }}>
              {/* Header */}
              <div style={{ borderBottom: '2.5px solid #8A101C', paddingBottom: '10px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '23px', fontWeight: '900', color: '#8A101C', letterSpacing: '-0.5px' }}>
                    HARINEE CATERING
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: '#CA8A04', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    FEEL THE TASTE • 100% PURE VEGETARIAN
                  </div>
                  <div style={{ fontSize: '10px', color: '#374151', fontWeight: '600', marginTop: '2px' }}>
                    Founder: V. Manivannan • Co-Founder: Deepa • Trichy
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '10.5px', color: '#4b5563' }}>
                  <div style={{ fontWeight: '800', color: '#8A101C', fontSize: '13px' }}>CUSTOM MENU PROPOSAL</div>
                  <div>Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                  <div>Support: 96982 97590 / 79040 96754</div>
                </div>
              </div>

              {/* Event Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '10px 12px', backgroundColor: '#faf7f2', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '12px' }}>
                <div><strong>Client Name:</strong> {clientName || 'Valued Customer'}</div>
                <div><strong>Phone Number:</strong> {clientPhone || 'Not specified'}</div>
                <div><strong>Event Type:</strong> {eventType}</div>
                <div><strong>Muhurtham Date:</strong> {eventDate || 'To be scheduled'}</div>
                <div><strong>Venue:</strong> {eventVenue}</div>
                <div><strong>Guest Count:</strong> {guestCount} Guests (Min 100)</div>
              </div>

              {/* Selected Menus Table */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#8A101C', marginBottom: '6px', borderBottom: '1px solid #8A101C', paddingBottom: '3px' }}>
                  HANDPICKED CUSTOM DISHES LIST
                </div>

                {['breakfast', 'lunch', 'snacks', 'dinner'].map(mealKey => {
                  const sections = getSelectedItemsForMeal(mealKey);
                  if (sections.length === 0) return null;
                  return (
                    <div key={mealKey} style={{ marginBottom: '8px' }}>
                      <div style={{ fontWeight: '800', color: '#111827', fontSize: '11px', backgroundColor: '#f3f4f6', padding: '4px 8px', borderRadius: '4px' }}>
                        {CUSTOM_MENU_CATALOG[mealKey].icon} {CUSTOM_MENU_CATALOG[mealKey].title}
                      </div>
                      <div style={{ padding: '4px 8px' }}>
                        {sections.map(sec => (
                          <div key={sec.sectionName} style={{ marginBottom: '4px', lineHeight: '1.6' }}>
                            <span style={{ fontWeight: '700', color: '#8A101C' }}>• {sec.sectionName}: </span>
                            <span style={{ color: '#27272a' }}>
                              {sec.items.map(item => `${item.name} (${item.tamil})`).join(' • ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Selected Live Stalls */}
                {selectedStalls.length > 0 && (
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ fontWeight: '800', color: '#111827', fontSize: '11px', backgroundColor: '#fef3c7', padding: '4px 8px', borderRadius: '4px' }}>
                      🎪 Live Stalls & Entertainment Add-ons ({selectedStalls.length})
                    </div>
                    <div style={{ padding: '5px 8px', color: '#374151', lineHeight: '1.6' }}>
                      {selectedStalls.map(id => LIVE_STALLS.find(s => s.id === id)?.name).filter(Boolean).join(' • ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Custom Notes */}
              {customNotes && (
                <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', padding: '6px 10px', borderRadius: '6px', marginBottom: '10px', fontSize: '10px' }}>
                  <strong>Customer Special Requests / Notes:</strong> {customNotes}
                </div>
              )}

              {/* Terms & Signatures */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #e5e7eb', paddingTop: '10px', marginTop: '12px' }}>
                <div style={{ fontSize: '9px', color: '#4b5563', maxWidth: '65%', lineHeight: '1.4' }}>
                  <strong>Catering Standards:</strong><br />
                  • 100% Pure Vegetarian prepared with cold-pressed groundnut/gingelly oil & pure cow ghee.<br />
                  • 300ml sealed packaged drinking water included with every plate.<br />
                  • Punctual on-site service with trained uniformed catering staff.<br />
                  • Personal tasting consultation & final per-plate rate locked upon date confirmation.
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '800', fontSize: '11px', color: '#8A101C' }}>HARINEE CATERING</div>
                  <div style={{ fontSize: '9.5px', color: '#4b5563', marginTop: '14px' }}>
                    Authorized Signatures /<br />
                    <strong>V. Manivannan (Founder) & Deepa (Co-Founder)</strong>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '10px', borderTop: '1px solid #f3f4f6', paddingTop: '6px', textAlign: 'center', fontSize: '8.5px', color: '#6b7280' }}>
                City Booking Office: No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 620002 • Head Office: Peramangalam (A), Trichy • Contact: 96982 97590 / 79040 96754
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
