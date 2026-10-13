import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import html2pdf from 'html2pdf.js';
import { 
  Calculator, Users, Sparkles, MessageCircle, Phone, 
  CheckSquare, Square, Printer, Download, Eye, FileText, 
  X, ArrowRight, RefreshCw, ShieldCheck
} from 'lucide-react';
import { BRAND_INFO, LIVE_STALLS } from '../data/cateringData';

export default function CostCalculator({ lang, externalSelectedPackage }) {
  const [eventType, setEventType] = useState('Wedding / Reception');
  const [guestCount, setGuestCount] = useState(250);
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventVenue, setEventVenue] = useState('Trichy');

  // Selected Meal Tiers
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [selectedLunch, setSelectedLunch] = useState(230);
  const [selectedSnacks, setSelectedSnacks] = useState(null);
  const [selectedDinner, setSelectedDinner] = useState(null);

  // Selected Live Stalls
  const [selectedStalls, setSelectedStalls] = useState(['ice-cream', 'sweet-beeda']);

  // Modals & Loading
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

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
  const perPlateTotal = (selectedBreakfast || 0) + (selectedLunch || 0) + (selectedSnacks || 0) + (selectedDinner || 0);
  const breakfastCost = (selectedBreakfast || 0) * guestCount;
  const lunchCost = (selectedLunch || 0) * guestCount;
  const snacksCost = (selectedSnacks || 0) * guestCount;
  const dinnerCost = (selectedDinner || 0) * guestCount;
  const foodTotal = perPlateTotal * guestCount;

  const stallsCount = selectedStalls.length;
  const stallsEstimatedTotal = stallsCount * 3500;
  const grandTotal = foodTotal + stallsEstimatedTotal;

  // Send WhatsApp Quote
  const handleSendWhatsAppQuote = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

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

*Selected Menu Packages:*
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
_Founder: V. Manivannan • Co-Founder: Deepa_
_Please confirm date availability and guide us for booking._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/91${BRAND_INFO.primaryPhone}?text=${encoded}`, '_blank');
  };

  // Build 1-Page A4 Letterhead HTML
  const generateQuotationHTML = () => {
    const todayDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const selectedStallsNames = selectedStalls.map(id => LIVE_STALLS.find(s => s.id === id)?.name).filter(Boolean).join(', ');

    return `
      <div style="width: 100%; max-width: 200mm; margin: 0 auto; background: #ffffff; color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 11px; line-height: 1.35; padding: 10px;">
        <div style="border-bottom: 2.5px solid #8A101C; padding-bottom: 10px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 22px; font-weight: 900; color: #8A101C; letter-spacing: -0.5px;">HARINEE CATERING</div>
            <div style="font-size: 10px; font-weight: 700; color: #CA8A04; letter-spacing: 1px; text-transform: uppercase;">FEEL THE TASTE • 100% PURE VEGETARIAN</div>
            <div style="font-size: 10px; color: #374151; font-weight: 600; margin-top: 2px;">Founder: V. Manivannan • Co-Founder: Deepa • Trichy</div>
          </div>
          <div style="text-align: right; font-size: 10.5px; color: #4b5563;">
            <div style="font-weight: 800; color: #8A101C; font-size: 12.5px;">OFFICIAL QUOTATION ESTIMATE</div>
            <div>Date: ${todayDate}</div>
            <div>Support: 96982 97590 / 79040 96754</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 10px; background: #faf7f2; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 12px;">
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Client Name:</strong> <div style="font-weight: 700;">${customerName || 'Valued Customer'}</div></div>
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Phone:</strong> <div style="font-weight: 700;">${customerPhone || 'Not specified'}</div></div>
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Event Type:</strong> <div style="font-weight: 700;">${eventType}</div></div>
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Event Date:</strong> <div style="font-weight: 700;">${eventDate || 'To be decided'}</div></div>
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Venue:</strong> <div style="font-weight: 700;">${eventVenue}</div></div>
          <div><strong style="color: #6b7280; font-size: 9.5px; text-transform: uppercase;">Estimated Guests:</strong> <div style="font-weight: 700;">${guestCount} Persons (Min 100)</div></div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 10.5px;">
          <thead>
            <tr style="background-color: #8A101C; color: #ffffff;">
              <th style="padding: 6px 8px; text-align: center; border: 1px solid #8A101C; width: 35px;">#</th>
              <th style="padding: 6px 8px; text-align: left; border: 1px solid #8A101C;">Menu Package / Live Counter</th>
              <th style="padding: 6px 8px; text-align: center; border: 1px solid #8A101C; width: 85px;">Rate / Plate</th>
              <th style="padding: 6px 8px; text-align: center; border: 1px solid #8A101C; width: 65px;">Guests</th>
              <th style="padding: 6px 8px; text-align: right; border: 1px solid #8A101C; width: 100px;">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${selectedBreakfast ? `
              <tr>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">1</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; font-weight: 700;">Morning Tiffin Feast (₹${selectedBreakfast} Tier)</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 700;">₹${selectedBreakfast}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">${guestCount}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: right; font-weight: 700;">₹${breakfastCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedLunch ? `
              <tr>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">2</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; font-weight: 700;">Grand Lunch Saapadu / Valaikappu (₹${selectedLunch} Tier)</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 700;">₹${selectedLunch}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">${guestCount}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: right; font-weight: 700;">₹${lunchCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedSnacks ? `
              <tr>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">3</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; font-weight: 700;">Evening High-Tea & Snacks Combo</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 700;">₹${selectedSnacks}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">${guestCount}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: right; font-weight: 700;">₹${snacksCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${selectedDinner ? `
              <tr>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">4</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; font-weight: 700;">Night Tiffin & Live Dinner Buffet (₹${selectedDinner} Tier)</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 700;">₹${selectedDinner}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">${guestCount}</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: right; font-weight: 700;">₹${dinnerCost.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            ${stallsCount > 0 ? `
              <tr style="background: #fafafa;">
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">5</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; font-weight: 700;">Live Counters (${stallsCount}): <span style="font-weight: normal; font-size: 10px;">${selectedStallsNames}</span></td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">Setup Fee</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: center;">${stallsCount} Stalls</td>
                <td style="padding: 6px 8px; border: 1px solid #e5e7eb; text-align: right; font-weight: 700;">₹${stallsEstimatedTotal.toLocaleString('en-IN')}</td>
              </tr>
            ` : ''}

            <tr style="background-color: #8A101C; color: #ffffff; font-weight: 800;">
              <td colspan="4" style="padding: 8px; text-align: right; border: 1px solid #8A101C;">Grand Estimated Total Amount (Approx):</td>
              <td style="padding: 8px; text-align: right; border: 1px solid #8A101C; font-size: 12.5px;">₹${grandTotal.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #e5e7eb; padding-top: 10px; margin-top: 12px;">
          <div style="font-size: 9.5px; color: #4b5563; max-width: 65%;">
            <strong>Catering Quality & Service Terms:</strong><br />
            • 100% Pure Vegetarian prepared with cold-pressed oils and pure cow ghee.<br />
            • 300ml sealed packaged drinking water included with every dining plate.<br />
            • Punctual on-site service with trained uniformed catering staff.<br />
            • Customizations, tasting consultations & Muhurtham date locks available.
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 800; font-size: 11px; color: #8A101C;">HARINEE CATERING</div>
            <div style="font-size: 9.5px; color: #4b5563; margin-top: 16px;">
              Authorized Signatures /<br />
              <strong>V. Manivannan (Founder) & Deepa (Co-Founder)</strong>
            </div>
          </div>
        </div>

        <div style="margin-top: 10px; border-top: 1px solid #f3f4f6; padding-top: 6px; text-align: center; font-size: 8.5px; color: #6b7280;">
          City Office: No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 620002 • Head Office: Peramangalam (A), Trichy • Contact: 96982 97590 / 79040 96754
        </div>
      </div>
    `;
  };

  // Safe Hidden Iframe Print Fallback
  const executeIframePrint = () => {
    const html = `<!DOCTYPE html><html><head><title>Harinee Catering Quotation</title><style>@page{size:A4 portrait;margin:8mm;}body{margin:0;padding:0;}</style></head><body>${generateQuotationHTML()}</body></html>`;

    let printFrame = document.getElementById('harinee-print-iframe');
    if (printFrame) document.body.removeChild(printFrame);

    printFrame = document.createElement('iframe');
    printFrame.id = 'harinee-print-iframe';
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    printFrame.style.visibility = 'hidden';
    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(html);
    frameDoc.close();

    setTimeout(() => {
      try {
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
      } catch (err) {
        console.error('Print error:', err);
      }
    }, 300);
  };

  // Direct 1-Click PDF Download
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });

    // Allow React state update to mount the template & loading backdrop
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const element = document.getElementById('cost-calc-pdf-template');
      if (!element) {
        executeIframePrint();
        return;
      }

      const opt = {
        margin: [6, 6, 6, 6],
        filename: `Harinee_Catering_Quotation_${(customerName || 'Official').replace(/\s+/g, '_')}.pdf`,
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
      console.error('html2pdf error, using iframe print:', err);
      executeIframePrint();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <>
      <section id="calculator" className="py-16 md:py-24 bg-peach-silk relative overflow-hidden scroll-mt-24 no-print">
        <div className="absolute -right-20 top-1/2 w-80 h-80 bg-peach-300/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-crimson-600" />
              <span>{lang === 'ta' ? 'உடனடி பட்ஜெட் கணக்கீடு' : 'Interactive Cost Estimator'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crimson-950">
              {lang === 'ta' ? 'உங்கள் நிகழ்விற்கான செலவு மதிப்பீடு' : 'Instant Event Cost Estimator'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {lang === 'ta'
                ? 'விருந்தினர்களின் எண்ணிக்கை மற்றும் உணவு வேளைகளைத் தேர்வு செய்து உடனடி கட்டண மதிப்பீட்டைப் பெறுங்கள்.'
                : 'Select meal package tiers, guest counts, and live counters for instant transparent quotation.'}
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

                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-crimson-700 h-2 bg-peach-200 rounded-lg cursor-pointer"
                />

                <div className="flex items-center gap-2 mt-3 overflow-x-auto">
                  {[100, 200, 350, 500, 1000, 1500].map(cnt => (
                    <button
                      key={cnt}
                      type="button"
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

              {/* 3. Meal Slots Selection + Custom Menu Callout */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-lg text-crimson-950 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-800 text-white text-xs flex items-center justify-center font-bold">3</span>
                    <span>{lang === 'ta' ? 'உணவு வேளைகள் தேர்வு' : 'Select Required Meal Slots'}</span>
                  </h3>
                </div>

                {/* Custom Menu Banner Callout */}
                <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-peach-50 border border-amber-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-amber-950">Want a 100% Custom Dish-by-Dish Menu?</p>
                      <p className="text-[11px] text-stone-600">Handpick individual dishes for breakfast, lunch & dinner</p>
                    </div>
                  </div>
                  <Link
                    to="/custom-menu"
                    className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all flex-shrink-0"
                  >
                    <span>Custom Planner</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

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
                        type="button"
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
                          type="button"
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
                        type="button"
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
                          type="button"
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
                        type="button"
                        onClick={() => setSelectedSnacks(null)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          selectedSnacks === null ? 'bg-stone-800 text-white' : 'bg-white border border-peach-200 text-stone-600'
                        }`}
                      >
                        No Evening Snacks
                      </button>
                      <button
                        type="button"
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
                        type="button"
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
                          type="button"
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
                        type="button"
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
                    type="button"
                    onClick={handleSendWhatsAppQuote}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Quote via WhatsApp</span>
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadPDF}
                      disabled={isGeneratingPdf}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gold-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-gold-300 transition-colors shadow-sm disabled:opacity-50"
                      title="Download 1-Page Official Quotation PDF"
                    >
                      {isGeneratingPdf ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-stone-950" />
                          <span>Download PDF</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowPreviewModal(true)}
                      className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/20"
                      title="Preview Quotation On Screen"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-300" />
                      <span>Preview</span>
                    </button>
                  </div>

                  <a
                    href={`tel:${BRAND_INFO.primaryPhone}`}
                    className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Phone className="w-3 h-3 text-gold-400" />
                    <span>Direct Call: 96982 97590 (Founder V. Manivannan & Deepa)</span>
                  </a>
                </div>

              </div>

              {/* Founders Guarantee Notice */}
              <div className="p-4 rounded-2xl bg-white border border-peach-200 text-xs text-stone-700 flex items-start gap-3 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-leaf-50 border border-leaf-200 text-leaf-700 flex items-center justify-center flex-shrink-0">
                  ✨
                </div>
                <p className="leading-relaxed">
                  <strong className="text-crimson-900">Founder V. Manivannan & Co-Founder Deepa Guarantee:</strong> All menu packages can be personalized according to family preferences, regional tastes, and auspicious dates.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* On-Screen Quotation Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto no-print">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-peach-200">
            <div className="px-6 py-4 bg-gradient-to-r from-crimson-950 via-crimson-900 to-stone-900 text-white flex items-center justify-between border-b border-gold-500/30">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-gold-300" />
                <div>
                  <h3 className="font-serif font-bold text-base text-white">Harinee Catering - Official Quotation Preview</h3>
                  <p className="text-[11px] text-peach-200">Founder: V. Manivannan • Co-Founder: Deepa</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  type="button"
                  onClick={executeIframePrint}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-1 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-stone-100 flex justify-center">
              <div className="w-full max-w-[210mm] bg-white shadow-lg rounded-xl overflow-hidden p-6 sm:p-8 border border-stone-200">
                <div dangerouslySetInnerHTML={{ __html: generateQuotationHTML() }} />
              </div>
            </div>

            <div className="px-6 py-3 bg-white border-t border-peach-200 flex items-center justify-between text-xs text-stone-600">
              <span>* 1-Page Official Quotation with Founder V. Manivannan & Co-Founder Deepa</span>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 font-medium text-stone-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution PDF Rendering Container (Mounted ONLY during generation so it never leaks or affects mobile layout) */}
      {isGeneratingPdf && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center text-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-stone-900 rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-3 border border-peach-200">
            <RefreshCw className="w-9 h-9 animate-spin text-crimson-700" />
            <h4 className="font-serif font-bold text-base text-crimson-950">Preparing Official Quotation PDF...</h4>
            <p className="text-xs text-stone-500">Creating high-resolution print copy • Harinee Catering</p>
          </div>

          {/* Rendered at fixed coordinates for html2canvas to capture cleanly */}
          <div style={{ position: 'fixed', left: 0, top: 0, width: '740px', zIndex: -10, pointerEvents: 'none', background: '#ffffff' }}>
            <div id="cost-calc-pdf-template" dangerouslySetInnerHTML={{ __html: generateQuotationHTML() }} />
          </div>
        </div>
      )}
    </>
  );
}
