import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Users, Calendar, Sparkles, MessageCircle, Phone, CheckSquare, Square, Printer, CheckCircle2, ShieldCheck, FileText, X } from 'lucide-react';
import { BRAND_INFO, LIVE_STALLS, MENU_CATEGORIES } from '../data/cateringData';

export default function CostCalculator({ lang, externalSelectedPackage }) {
  const [eventType, setEventType] = useState('Wedding / Reception');
  const [guestCount, setGuestCount] = useState(250);
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventVenue, setEventVenue] = useState('Trichy');

  // Selected Meals
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [selectedLunch, setSelectedLunch] = useState(230);
  const [selectedSnacks, setSelectedSnacks] = useState(null);
  const [selectedDinner, setSelectedDinner] = useState(null);

  // Selected Live Stalls
  const [selectedStalls, setSelectedStalls] = useState(['ice-cream', 'sweet-beeda']);

  useEffect(() => {
    if (externalSelectedPackage) {
      if (externalSelectedPackage.category === 'breakfast') setSelectedBreakfast(externalSelectedPackage.price);
      if (externalSelectedPackage.category === 'lunch') setSelectedLunch(externalSelectedPackage.price);
      if (externalSelectedPackage.category === 'evening-snacks') setSelectedSnacks(externalSelectedPackage.price);
      if (externalSelectedPackage.category === 'dinner') setSelectedDinner(externalSelectedPackage.price);
      if (externalSelectedPackage.category === 'valaikappu') setSelectedLunch(externalSelectedPackage.price);
    }
  }, [externalSelectedPackage]);

  const toggleStall = (id) => {
    setSelectedStalls(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Calculations
  const breakfastCost = (selectedBreakfast || 0) * guestCount;
  const lunchCost = (selectedLunch || 0) * guestCount;
  const snacksCost = (selectedSnacks || 0) * guestCount;
  const dinnerCost = (selectedDinner || 0) * guestCount;
  
  const perPlateTotal = (selectedBreakfast || 0) + (selectedLunch || 0) + (selectedSnacks || 0) + (selectedDinner || 0);
  const foodTotal = perPlateTotal * guestCount;
  
  const stallsCount = selectedStalls.length;
  const stallsEstimatedTotal = stallsCount * 3500;
  
  const grandTotal = foodTotal + stallsEstimatedTotal;

  const handleSendWhatsAppQuote = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    const stallsNames = selectedStalls
      .map(id => LIVE_STALLS.find(s => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `*New Catering Quotation Inquiry - Harinee Catering*
----------------------------------------
*Client Name:* ${customerName || 'Customer'}
*Contact:* ${customerPhone || 'Not specified'}
*Event Type:* ${eventType}
*Event Date:* ${eventDate || 'To be decided'}
*Venue:* ${eventVenue}
*Guest Count:* ${guestCount} Guests (Min 100)

*Selected Menu Plan:*
• Breakfast: ${selectedBreakfast ? `₹${selectedBreakfast}/plate` : 'Not Selected'}
• Lunch: ${selectedLunch ? `₹${selectedLunch}/plate` : 'Not Selected'}
• Evening Snacks: ${selectedSnacks ? `₹${selectedSnacks}/plate` : 'Not Selected'}
• Dinner: ${selectedDinner ? `₹${selectedDinner}/plate` : 'Not Selected'}

*Total Per Guest Cost:* ₹${perPlateTotal}/guest
*Food Estimated Total:* ₹${foodTotal.toLocaleString('en-IN')}

*Selected Live Stalls (${stallsCount}):*
${stallsNames || 'None'}

*Grand Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')} (Approx)
----------------------------------------
_Please confirm date availability and provide final booking consultation._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/91${BRAND_INFO.primaryPhone}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank', 'width=850,height=950');
    if (!printWindow) {
      alert('Please allow popups to print the quotation.');
      return;
    }

    const todayDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const selectedStallsNames = selectedStalls.map(id => LIVE_STALLS.find(s => s.id === id)?.name).filter(Boolean).join(', ');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Harinee Catering - Quotation</title>
        <meta charset="utf-8" />
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #1a1a1a;
            background: #ffffff;
            padding: 10px;
            font-size: 12px;
            line-height: 1.4;
          }
          .letterhead {
            border-bottom: 2px solid #8A101C;
            padding-bottom: 12px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .brand-title {
            font-size: 22px;
            font-weight: 900;
            color: #8A101C;
            letter-spacing: -0.5px;
          }
          .brand-subtitle {
            font-size: 10px;
            font-weight: 700;
            color: #CA8A04;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-meta {
            text-align: right;
            font-size: 11px;
            color: #4b5563;
          }
          .grid-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding: 12px;
            background: #faf7f2;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .info-label {
            font-size: 9px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
          }
          .info-val {
            font-size: 12px;
            font-weight: 700;
            color: #111827;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
          }
          th {
            background-color: #8A101C;
            color: #ffffff;
            font-weight: 700;
            text-align: left;
            padding: 8px 10px;
            font-size: 11px;
            border: 1px solid #8A101C;
          }
          td {
            padding: 8px 10px;
            border: 1px solid #e5e7eb;
            font-size: 11px;
          }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .font-bold { font-weight: 700; }
          .total-row td {
            background-color: #fdf2f2;
            font-weight: 800;
            color: #8A101C;
            font-size: 13px;
            border-top: 2px solid #8A101C;
          }
          .footer-section {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 16px;
            border-top: 1px solid #e5e7eb;
            padding-top: 12px;
            margin-top: 12px;
          }
          .terms {
            font-size: 10px;
            color: #4b5563;
            line-height: 1.5;
          }
          .sign-box {
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .address-bar {
            margin-top: 20px;
            padding-top: 8px;
            border-top: 1px solid #f3f4f6;
            text-align: center;
            font-size: 9px;
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <div class="letterhead">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="/logo.jpeg" alt="Logo" style="width: 55px; height: 55px; border-radius: 8px; object-fit: contain; border: 1px solid #e5e7eb;" />
            <div>
              <div class="brand-title">HARINEE CATERING</div>
              <div class="brand-subtitle">FEEL THE TASTE • 100% PURE VEGETARIAN</div>
              <div style="font-size: 10px; color: #4b5563;">Proprietor: V. Manivannan • Trichy</div>
            </div>
          </div>
          <div class="header-meta">
            <div style="font-weight: 800; color: #8A101C; font-size: 12px;">EVENT QUOTATION</div>
            <div>Phone: +91 96982 97590</div>
            <div>Date: ${todayDate}</div>
          </div>
        </div>

        <div class="grid-info">
          <div>
            <div class="info-label">Customer Name</div>
            <div class="info-val">${customerName || 'Valued Customer'}</div>
            <div style="font-size: 11px; margin-top: 2px;">Phone: <strong>${customerPhone || 'Not Specified'}</strong></div>
          </div>
          <div style="text-align: right;">
            <div class="info-label">Event Details</div>
            <div class="info-val">${eventType}</div>
            <div style="font-size: 11px; margin-top: 2px;">Date: <strong>${eventDate || 'To be decided'}</strong> • Venue: <strong>${eventVenue}</strong></div>
            <div style="font-size: 11px; color: #8A101C; font-weight: 700; margin-top: 2px;">Guaranteed: ${guestCount} Guests</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px;" class="text-center">Sl.</th>
              <th>Meal / Service Description</th>
              <th class="text-center" style="width: 90px;">Rate / Plate</th>
              <th class="text-center" style="width: 70px;">Guests</th>
              <th class="text-right" style="width: 120px;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${selectedBreakfast ? `
              <tr>
                <td class="text-center">1</td>
                <td class="font-bold">Morning Tiffin Feast (₹${selectedBreakfast} Tier)</td>
                <td class="text-center font-bold">₹${selectedBreakfast}</td>
                <td class="text-center">${guestCount}</td>
                <td class="text-right font-bold">₹${breakfastCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedLunch ? `
              <tr>
                <td class="text-center">2</td>
                <td class="font-bold">Grand Lunch Saapadu / Valaikappu (₹${selectedLunch} Tier)</td>
                <td class="text-center font-bold">₹${selectedLunch}</td>
                <td class="text-center">${guestCount}</td>
                <td class="text-right font-bold">₹${lunchCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedSnacks ? `
              <tr>
                <td class="text-center">3</td>
                <td class="font-bold">Evening High-Tea & Snacks Combo (Sweet + Savory + Coffee/Tea + Water)</td>
                <td class="text-center font-bold">₹${selectedSnacks}</td>
                <td class="text-center">${guestCount}</td>
                <td class="text-right font-bold">₹${snacksCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedDinner ? `
              <tr>
                <td class="text-center">4</td>
                <td class="font-bold">Night Tiffin & Live Dinner Buffet (₹${selectedDinner} Tier)</td>
                <td class="text-center font-bold">₹${selectedDinner}</td>
                <td class="text-center">${guestCount}</td>
                <td class="text-right font-bold">₹${dinnerCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${stallsCount > 0 ? `
              <tr style="background: #fafafa;">
                <td class="text-center">5</td>
                <td class="font-bold">Live Stalls (${stallsCount}): <span style="font-weight: normal; font-size: 10px;">${selectedStallsNames}</span></td>
                <td class="text-center">Setup Fee</td>
                <td class="text-center">${stallsCount} Stalls</td>
                <td class="text-right font-bold">₹${stallsEstimatedTotal.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            <tr class="total-row">
              <td colspan="4" class="text-right" style="padding: 10px;">Grand Estimated Total Amount (Approx):</td>
              <td class="text-right" style="padding: 10px; font-size: 14px;">₹${grandTotal.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div class="footer-section">
          <div class="terms">
            <strong>Catering Quality & Service Terms:</strong><br />
            • 100% Pure Vegetarian prepared with cold-pressed oils and pure cow ghee.<br />
            • 300ml sealed packaged drinking water included with every dining plate.<br />
            • Punctual on-site buffet and dining service with trained uniformed staff.
          </div>
          <div class="sign-box">
            <div style="font-weight: 800; font-size: 12px; color: #8A101C;">HARINEE CATERING</div>
            <div style="font-size: 10px; color: #6b7280; margin-top: 25px;">Authorized Signature / V. Manivannan</div>
          </div>
        </div>

        <div class="address-bar">
          City Office: No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 620002 • Head Office: Peramangalam (A), Trichy • Contact: 96982 97590 / 98424 44425
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 250);
    };
  };

  return (
    <>
      {/* 1. Main Interactive Screen UI (Hidden during Print) */}
      <section id="calculator" className="py-16 md:py-24 bg-peach-silk relative overflow-hidden scroll-mt-24 no-print">
        
        {/* Background Accent */}
        <div className="absolute -right-20 top-1/2 w-80 h-80 bg-peach-300/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-crimson-600" />
              <span>{lang === 'ta' ? 'உடனடி பட்ஜெட் கணக்கீடு' : 'Interactive Cost Estimator'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
              {lang === 'ta' ? 'உங்கள் நிகழ்விற்கான செலவு மதிப்பீடு' : 'Build Your Custom Event Quotation'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {lang === 'ta'
                ? 'விருந்தினர்களின் எண்ணிக்கை, உணவு வேளைகள் மற்றும் ஸ்டால்களைத் தேர்வு செய்து உடனடி கட்டண மதிப்பீட்டைப் பெறுங்கள்.'
                : 'Customize meals, guest counts, and live counters. Get instant transparent pricing with WhatsApp quote generation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form & Configuration (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-peach-200 shadow-luxury space-y-8">
              
              {/* 1. Event Type & Basics */}
              <div>
                <h3 className="font-serif font-bold text-lg text-crimson-950 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-crimson-800 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>{lang === 'ta' ? 'நிகழ்வு விவரங்கள்' : 'Event Information'}</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      {lang === 'ta' ? 'நிகழ்ச்சி வகை' : 'Event Type'}
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-crimson-600 focus:bg-white transition-all"
                    >
                      <option value="Wedding / Reception">Wedding / Kalyanam (திருமணம்)</option>
                      <option value="Betrothal / Nichayathartham">Betrothal / Nichayathartham (நிச்சயதார்த்தம்)</option>
                      <option value="Seemantham / Valaikappu">Seemantham / Valaikappu (வளைகாப்பு)</option>
                      <option value="Ear Piercing / Kathani Vizha">Ear Piercing / Kathani Vizha (காதணி விழா)</option>
                      <option value="Puberty / Manjal Neeratu">Puberty Ceremony (பூப்புனித நீராட்டு)</option>
                      <option value="Birthday & Anniversaries">Birthday / Anniversary (பிறந்தநாள்)</option>
                      <option value="Housewarming / Grahapravesam">Housewarming (கிரகப்பிரவேசம்)</option>
                      <option value="Corporate / Institution Event">Corporate / Institution Banquet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      {lang === 'ta' ? 'நிகழ்ச்சி நடைபெறும் இடம் / மண்டபம்' : 'Venue / Location'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ravi Mini Hall, Trichy"
                      value={eventVenue}
                      onChange={(e) => setEventVenue(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-peach-300 bg-peach-50/40 text-stone-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-crimson-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-bold text-lg text-crimson-950 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-800 text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span>{lang === 'ta' ? 'விருந்தினர்களின் எண்ணிக்கை' : 'Estimated Guest Count'}</span>
                  </h3>
                  <div className="flex items-center gap-1.5 bg-peach-100 px-3 py-1 rounded-xl border border-peach-300 text-crimson-900 font-bold text-sm">
                    <Users className="w-4 h-4 text-crimson-700" />
                    <span>{guestCount} Guests</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-500 mb-3">
                  * Minimum catering limit: 100 persons (மினிமம் 100 நபர்)
                </p>

                {/* Slider */}
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-crimson-700 h-2 bg-peach-200 rounded-lg cursor-pointer"
                />

                {/* Quick Presets */}
                <div className="flex items-center gap-2 mt-3 overflow-x-auto">
                  {[100, 200, 350, 500, 1000, 1500].map(cnt => (
                    <button
                      key={cnt}
                      onClick={() => setGuestCount(cnt)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        guestCount === cnt 
                          ? 'bg-crimson-700 text-white shadow-sm' 
                          : 'bg-peach-100 text-stone-700 hover:bg-peach-200'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Meal Slots Selection */}
              <div>
                <h3 className="font-serif font-bold text-lg text-crimson-950 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-crimson-800 text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>{lang === 'ta' ? 'உணவு வேளைகள் தேர்வு' : 'Select Required Meal Slots'}</span>
                </h3>

                <div className="space-y-4">
                  {/* Morning Breakfast */}
                  <div className="p-3.5 rounded-2xl bg-peach-50/50 border border-peach-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-900">☀️ Morning Tiffin (காலை டிபன்)</span>
                      <span className="text-xs font-semibold text-crimson-800">
                        {selectedBreakfast ? `₹${selectedBreakfast}/plate` : 'Not Selected'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      <button
                        onClick={() => setSelectedBreakfast(null)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedBreakfast === null ? 'bg-stone-800 text-white' : 'bg-white border border-peach-200 text-stone-600'
                        }`}
                      >
                        None
                      </button>
                      {[200, 250, 300, 350].map(price => (
                        <button
                          key={price}
                          onClick={() => setSelectedBreakfast(price)}
                          className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            selectedBreakfast === price ? 'bg-crimson-700 text-white shadow-sm' : 'bg-white border border-peach-200 text-stone-700 hover:bg-peach-100'
                          }`}
                        >
                          ₹{price} Tier
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lunch Saapadu */}
                  <div className="p-3.5 rounded-2xl bg-peach-50/50 border border-peach-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-900">🍛 Lunch Saapadu / Valaikappu (மதியம் சாப்பாடு)</span>
                      <span className="text-xs font-semibold text-crimson-800">
                        {selectedLunch ? `₹${selectedLunch}/plate` : 'Not Selected'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                      <button
                        onClick={() => setSelectedLunch(null)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedLunch === null ? 'bg-stone-800 text-white' : 'bg-white border border-peach-200 text-stone-600'
                        }`}
                      >
                        None
                      </button>
                      {[180, 230, 300, 350, 500].map(price => (
                        <button
                          key={price}
                          onClick={() => setSelectedLunch(price)}
                          className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            selectedLunch === price ? 'bg-crimson-700 text-white shadow-sm' : 'bg-white border border-peach-200 text-stone-700 hover:bg-peach-100'
                          }`}
                        >
                          ₹{price} {price === 500 ? '👑' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Evening Snacks */}
                  <div className="p-3.5 rounded-2xl bg-peach-50/50 border border-peach-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-900">☕ Evening Snacks Combo (மாலை ஸ்நாக்ஸ்)</span>
                      <span className="text-xs font-semibold text-crimson-800">
                        {selectedSnacks ? `₹${selectedSnacks}/plate` : 'Not Selected'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedSnacks(null)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          selectedSnacks === null ? 'bg-stone-800 text-white' : 'bg-white border border-peach-200 text-stone-600'
                        }`}
                      >
                        No Evening Snacks
                      </button>
                      <button
                        onClick={() => setSelectedSnacks(60)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                          selectedSnacks === 60 ? 'bg-crimson-700 text-white shadow-sm' : 'bg-white border border-peach-200 text-stone-700 hover:bg-peach-100'
                        }`}
                      >
                        ₹60 Combo (Sweet + Savory + Coffee/Tea + Water)
                      </button>
                    </div>
                  </div>

                  {/* Dinner / Night Tiffin */}
                  <div className="p-3.5 rounded-2xl bg-peach-50/50 border border-peach-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-900">🌙 Dinner / Night Tiffin & Live Buffet (இரவு டிபன்)</span>
                      <span className="text-xs font-semibold text-crimson-800">
                        {selectedDinner ? `₹${selectedDinner}/plate` : 'Not Selected'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-7 gap-1.5">
                      <button
                        onClick={() => setSelectedDinner(null)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedDinner === null ? 'bg-stone-800 text-white' : 'bg-white border border-peach-200 text-stone-600'
                        }`}
                      >
                        None
                      </button>
                      {[200, 250, 300, 350, 450, 800].map(price => (
                        <button
                          key={price}
                          onClick={() => setSelectedDinner(price)}
                          className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            selectedDinner === price ? 'bg-crimson-700 text-white shadow-sm' : 'bg-white border border-peach-200 text-stone-700 hover:bg-peach-100'
                          }`}
                        >
                          ₹{price} {price === 800 ? '⭐' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Live Stalls Add-ons */}
              <div>
                <h3 className="font-serif font-bold text-lg text-crimson-950 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-800 text-white text-xs flex items-center justify-center font-bold">4</span>
                    <span>{lang === 'ta' ? 'லைவ் ஸ்டால்கள் & சிறப்பு கவுண்டர்கள்' : 'Live Stalls & Entertainment Add-ons'}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-normal">({selectedStalls.length} selected)</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {LIVE_STALLS.map((stall) => {
                    const isChecked = selectedStalls.includes(stall.id);
                    return (
                      <button
                        key={stall.id}
                        onClick={() => toggleStall(stall.id)}
                        className={`p-2 rounded-xl text-left border text-xs flex items-start gap-2 transition-all ${
                          isChecked
                            ? 'bg-peach-100 border-crimson-600 text-crimson-950 font-semibold'
                            : 'bg-white border-peach-200 text-stone-700 hover:bg-peach-50'
                        }`}
                      >
                        <span className="text-base">{stall.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-[11px] sm:text-xs">{stall.name}</p>
                          <p className="text-[10px] text-stone-500 font-tamil truncate">{stall.tamilName}</p>
                        </div>
                        {isChecked ? (
                          <CheckSquare className="w-3.5 h-3.5 text-crimson-700 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-stone-300 flex-shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Price Summary Card (5 cols) */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              
              <div className="bg-gradient-to-br from-crimson-900 via-crimson-950 to-stone-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gold-400/30 relative overflow-hidden">
                
                {/* Golden corner shimmer */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block">
                      Real-time Estimate
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white">Quotation Summary</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-peach-200 font-medium">
                      {guestCount} Guests
                    </span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="py-4 space-y-2.5 text-xs text-stone-300 border-b border-white/10">
                  {selectedBreakfast && (
                    <div className="flex justify-between items-center">
                      <span>Morning Breakfast (₹{selectedBreakfast} × {guestCount})</span>
                      <span className="font-semibold text-white">₹{breakfastCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {selectedLunch && (
                    <div className="flex justify-between items-center">
                      <span>Lunch Feast (₹{selectedLunch} × {guestCount})</span>
                      <span className="font-semibold text-white">₹{lunchCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {selectedSnacks && (
                    <div className="flex justify-between items-center">
                      <span>Evening Snacks (₹{selectedSnacks} × {guestCount})</span>
                      <span className="font-semibold text-white">₹{snacksCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {selectedDinner && (
                    <div className="flex justify-between items-center">
                      <span>Dinner Tiffin (₹{selectedDinner} × {guestCount})</span>
                      <span className="font-semibold text-white">₹{dinnerCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {stallsCount > 0 && (
                    <div className="flex justify-between items-center pt-1 text-gold-300">
                      <span>{stallsCount} Live Stall(s) Setup</span>
                      <span className="font-semibold">~₹{stallsEstimatedTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {perPlateTotal === 0 && stallsCount === 0 && (
                    <p className="text-stone-400 italic text-center py-2">Select at least one meal slot above to calculate</p>
                  )}
                </div>

                {/* Per Plate & Grand Total */}
                <div className="py-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-300">Combined Per Guest Cost:</span>
                    <span className="text-base font-bold text-gold-300">₹{perPlateTotal} / guest</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-peach-200 block">Estimated Total Cost</span>
                      <span className="text-[10px] text-stone-400">* All inclusive of food & water</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                        ₹{grandTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Contact Inputs for Quote */}
                <div className="space-y-2 pt-1 pb-3">
                  <input
                    type="text"
                    placeholder="Your Name / மணமகன்/மகள் பெயர்"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number (e.g. 9876543210)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Main Actions */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={handleSendWhatsAppQuote}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Quote via WhatsApp</span>
                  </button>

                  <div className="flex gap-2">
                    <a
                      href={`tel:${BRAND_INFO.primaryPhone}`}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-300" />
                      <span>Call: 96982 97590</span>
                    </a>

                    <button
                      onClick={handlePrint}
                      className="px-4 py-2.5 rounded-xl bg-gold-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-gold-300 transition-colors shadow-sm"
                      title="Print 1-Page Official Quotation"
                    >
                      <Printer className="w-4 h-4 text-stone-950" />
                      <span>Print 1-Page PDF</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Chef Guarantee Notice */}
              <div className="p-4 rounded-2xl bg-white border border-peach-200 text-xs text-stone-700 flex items-start gap-3 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-leaf-50 border border-leaf-200 text-leaf-700 flex items-center justify-center flex-shrink-0">
                  ✨
                </div>
                <p className="leading-relaxed">
                  <strong className="text-crimson-900">Chef V. Manivannan Guarantee:</strong> All menu packages can be personalized according to family preferences and regional traditions.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

