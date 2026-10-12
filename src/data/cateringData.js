// Full Catering Data extracted accurately from Harinee Catering Brochure

export const BRAND_INFO = {
  name: "Harinee Catering",
  tamilName: "ஹரிணி கேட்டரிங் சர்வீஸ்",
  tagline: "Feel The Taste",
  founder: "V. Manivannan",
  founderTamil: "V. மணிவண்ணன்",
  coFounder: "Deepa",
  coFounderTamil: "தீபா",
  leadership: "V. Manivannan (Founder) & Deepa (Co-Founder)",
  leadershipTamil: "V. மணிவண்ணன் (நிறுவனர்) & தீபா (இணை நிறுவனர்)",
  proprietor: "V. Manivannan (Founder) & Deepa (Co-Founder)",
  proprietorTamil: "V. மணிவண்ணன் & தீபா",
  minGuests: 100,
  minGuestsTamil: "மினிமம் - 100 நபர்",
  primaryPhone: "9698297590",
  formattedPhone: "+91 96982 97590",
  secondaryPhone: "7904096754",
  formattedSecondaryPhone: "+91 79040 96754",
  additionalPhone: "9443285317",
  formattedAdditionalPhone: "+91 94432 85317",
  email: "harineecatering@gmail.com",
  facebookUrl: "https://www.facebook.com/p/Harini-Catering-Services-100083187258054/",
  locations: [
    {
      title: "Head Office",
      address: "Peramangalam (A), Trichy District, Tamil Nadu",
      addressTamil: "பெரமங்கலம் (அ), திருச்சி (மா)"
    },
    {
      title: "City Booking Office",
      address: "No. 23, Ravi Mini Hall, Karur Bypass Road, Trichy - 620002",
      addressTamil: "நெ. 23, ரவி மினி ஹால், கரூர் பைபாஸ் ரோடு, திருச்சி - 2"
    }
  ]
};

export const CUSTOM_OPTIONS = {
  diningStyles: [
    { id: 'leaf', name: 'Traditional Banana Leaf', tamilName: 'வாழை இலை பந்தி உபசரிப்பு', icon: '🍃' },
    { id: 'buffet', name: 'Premium Standing Live Buffet', tamilName: 'நவீன பஃபே முறை', icon: '🍽️' },
    { id: 'vip', name: 'Special VIP Table Dedicated Serving', tamilName: 'வி.ஐ.பி பிரத்யேக உபசரிப்பு', icon: '⭐' }
  ],
  waterAndBeverages: [
    { id: 'packaged-water', name: '300ml Sealed Bottled Water (Included Free)', tamilName: 'பாட்டிலில் அடைக்கப்பட்ட குடிநீர்', icon: '💧' },
    { id: 'welcome-drink', name: 'Welcome Drink (Rose Milk / Nannari Sarbath / Mint Cooler)', tamilName: 'வரவேற்பு பானம்', icon: '🍹' },
    { id: 'elaneer', name: 'Fresh Natural Tender Coconut Counter', tamilName: 'இயற்கை இளநீர்', icon: '🥥' }
  ],
  customAddons: [
    { id: 'elaneer-payasam', name: 'Elaneer Payasam', tamilName: 'இளநீர் பாயாசம்', price: 30 },
    { id: 'tirunelveli-halwa', name: 'Tirunelveli Ghee Halwa', tamilName: 'திருநெல்வேலி நெய் அல்வா', price: 35 },
    { id: 'badam-milk', name: 'Kesar Badam Milk Counter', tamilName: 'குங்குமப்பூ பாதாம் பால்', price: 25 },
    { id: 'paneer-special', name: 'Paneer Butter Masala Special', tamilName: 'பன்னீர் பட்டர் மசாலா ஸ்பெஷல்', price: 40 },
    { id: 'mocktail', name: 'Welcome Mocktail Counter', tamilName: 'வரவேற்பு மாக்டெயில் கவுண்டர்', price: 25 },
    { id: 'rose-milk', name: 'Fresh Rose Milk / Nannari Sharbat', tamilName: 'ரோஸ் மில்க் / நன்னாரி சர்பத்', price: 20 }
  ],
  delicacies: [
    { id: 'elaneer-payasam', name: 'Elaneer Payasam', tamilName: 'இளநீர் பாயாசம்', price: 30 },
    { id: 'tirunelveli-halwa', name: 'Tirunelveli Ghee Halwa', tamilName: 'திருநெல்வேலி நெய் அல்வா', price: 35 },
    { id: 'badam-milk', name: 'Kesar Badam Milk Counter', tamilName: 'குங்குமப்பூ பாதாம் பால்', price: 25 },
    { id: 'paneer-special', name: 'Paneer Butter Masala Special', tamilName: 'பன்னீர் பட்டர் மசாலா ஸ்பெஷல்', price: 40 },
    { id: 'mocktail', name: 'Welcome Mocktail Counter', tamilName: 'வரவேற்பு மாக்டெயில் கவுண்டர்', price: 25 },
    { id: 'rose-milk', name: 'Fresh Rose Milk / Nannari Sharbat', tamilName: 'ரோஸ் மில்க் / நன்னாரி சர்பத்', price: 20 }
  ]
};

export const CUSTOM_MENU_CATALOG = {
  breakfast: {
    title: "Morning Tiffin (காலை டிபன்)",
    icon: "☀️",
    sections: [
      {
        name: "Traditional Sweets (இனிப்பு வகைகள்)",
        items: [
          { id: "b_kesari", name: "Rava Kesari", tamil: "ரவா கேசரி" },
          { id: "b_pinekesari", name: "Pineapple Kesari", tamil: "அன்னாசி கேசரி" },
          { id: "b_asoka", name: "Thiruvaiyaru Asoka Halwa", tamil: "அசோகா அல்வா" },
          { id: "b_halwa", name: "Tirunelveli Ghee Wheat Halwa", tamil: "திருநெல்வேலி நெய் அல்வா" },
          { id: "b_jamun", name: "Gulab Jamun", tamil: "குலாப் ஜாமுன்" },
          { id: "b_mysore", name: "Pure Ghee Mysore Pak", tamil: "நெய் மைசூர் பாக்" },
          { id: "b_peda", name: "Mathura Paal Peda", tamil: "பால் பேடா" }
        ]
      },
      {
        name: "Main Tiffin Specialties (முதன்மை டிபன்)",
        items: [
          { id: "b_idli", name: "Steaming Mallipoo Idli", tamil: "மல்லிப்பூ இட்லி" },
          { id: "b_vada", name: "Crispy Medu Vada", tamil: "மெது வடை" },
          { id: "b_masalvada", name: "Pattani Masala Vadai", tamil: "மசால் வடை" },
          { id: "b_pongal", name: "Ghee Cashew Pongal", tamil: "நெய் பொங்கல்" },
          { id: "b_poori", name: "Poori with Potato Masala", tamil: "பூரி & உருளை மசால்" },
          { id: "b_kichadi", name: "Vegetable Rava Kichadi", tamil: "ரவா கிச்சடி" },
          { id: "b_upma", name: "Semiya Vegetable Upma", tamil: "சேமியா உப்புமா" },
          { id: "b_idiyappam", name: "Idiyappam with Coconut Milk", tamil: "இடியாப்பம் தேங்காய்ப் பால்" }
        ]
      },
      {
        name: "Live Hot Dosa Counter (லைவ் தோசை கவுண்டர்)",
        items: [
          { id: "b_roast", name: "Crispy Ghee Paper Roast", tamil: "நெய் ரோஸ்ட்" },
          { id: "b_kaldosa", name: "Soft Kal Dosa", tamil: "கல் தோசை" },
          { id: "b_uthappam", name: "Onion Uthappam", tamil: "வெங்காய ஊத்தப்பம்" },
          { id: "b_podidosa", name: "Ghee Podi Dosa", tamil: "நெய் பொடி தோசை" },
          { id: "b_mushdosa", name: "Mushroom Masala Dosa", tamil: "காளான் தோசை" },
          { id: "b_paneerdosa", name: "Paneer Butter Dosa", tamil: "பன்னீர் தோசை" },
          { id: "b_ravadosa", name: "Onion Rava Dosa", tamil: "ரவா தோசை" }
        ]
      },
      {
        name: "Chutneys & Gravies (சாம்பார் & சட்னி)",
        items: [
          { id: "b_coconutchut", name: "Fresh Coconut Chutney", tamil: "தேங்காய் சட்னி" },
          { id: "b_tomchut", name: "Spicy Tomato Kara Chutney", tamil: "தக்காளி காரச் சட்னி" },
          { id: "b_pudinachut", name: "Pudina Coriander Chutney", tamil: "புதினா கொத்தமல்லி சட்னி" },
          { id: "b_sambar", name: "Kadamba Tiffin Sambar", tamil: "கதம்ப சாம்பார்" },
          { id: "b_idlipodi", name: "Gunpowder Idli Podi with Pure Ghee", tamil: "இட்லி பொடி & நெய்" }
        ]
      },
      {
        name: "Hot Beverages (சுடச்சுட பானங்கள்)",
        items: [
          { id: "b_coffee", name: "Kumbakonam Degree Filter Coffee", tamil: "கும்பகோணம் டிகிரி காபி" },
          { id: "b_tea", name: "Cardamom Masala Tea", tamil: "ஏலக்காய் மசாலா டீ" },
          { id: "b_badam", name: "Hot Saffron Badam Milk", tamil: "குங்குமப்பூ பாதாம் பால்" }
        ]
      }
    ]
  },
  lunch: {
    title: "Grand Lunch Saapadu (மதிய கல்யாண சாப்பாடு)",
    icon: "🍛",
    sections: [
      {
        name: "Payasam & Sweets (பாயாசம் & இனிப்பு)",
        items: [
          { id: "l_elaneer", name: "Special Elaneer Payasam", tamil: "இளநீர் பாயாசம்" },
          { id: "l_paruppu", name: "Traditional Paruppu Payasam", tamil: "பருப்பு பாயாசம்" },
          { id: "l_semiyapay", name: "Semiya Sago Payasam", tamil: "சேமியா பாயாசம்" },
          { id: "l_kheer", name: "Carrot Badam Kheer", tamil: "கேரட் பாதாம் கீர்" },
          { id: "l_halwa", name: "Hot Ghee Wheat Halwa", tamil: "கோதுமை அல்வா" },
          { id: "l_jangri", name: "Fresh Urud Dal Jangri", tamil: "ஜாங்கிரி" },
          { id: "l_laddu", name: "Tirupati Ghee Boondi Laddu", tamil: "பூந்தி லட்டு" }
        ]
      },
      {
        name: "Welcome Drinks & Crispies (வரவேற்பு & மொறுமொறு)",
        items: [
          { id: "l_mocktail", name: "Welcome Fruit Punch Mocktail", tamil: "வெல்கம் மாாக்டெயில்" },
          { id: "l_rosemilk", name: "Cold Rose Milk with Basil Seeds", tamil: "சப்ஜா ரோஸ் மில்க்" },
          { id: "l_meduvada", name: "Crispy Kalyana Medu Vadai", tamil: "உளுந்து வடை" },
          { id: "l_masalvada", name: "Crispy Masala Vadai", tamil: "மசால் வடை" },
          { id: "l_cutlet", name: "Crispy Vegetable Cutlet", tamil: "வெஜிடபிள் கட்லெட்" },
          { id: "l_babycorn", name: "Crispy Baby Corn Fry", tamil: "பேபி கார்ன் ப்ரை" }
        ]
      },
      {
        name: "Rice Varieties & Briyani (சாத வகைகள் & பிரியாணி)",
        items: [
          { id: "l_whiterice", name: "Thalavazhai Steamed Ponni Rice", tamil: "தலவாழை சோறு" },
          { id: "l_briyani", name: "Dum Vegetable Briyani with Raitha", tamil: "வெஜ் தம் பிரியாணி" },
          { id: "l_sambarrice", name: "Kalyana Bisibelebath / Sambar Sadham", tamil: "சாம்பார் சாதம்" },
          { id: "l_lemonrice", name: "Tangy Lemon Rice", tamil: "எலுமிச்சை சாதம்" },
          { id: "l_puliyodharai", name: "Kovil Style Puliyodharai", tamil: "புளியோதரை" },
          { id: "l_curdrice", name: "Thick Creamy Curd Rice with Pomegranate", tamil: "மாதுளை தயிர் சாதம்" }
        ]
      },
      {
        name: "Kuzhambu & Rasam (குழம்பு & ரசம்)",
        items: [
          { id: "l_murungasambar", name: "Kalyana Murungakkai Sambar", tamil: "முருங்கைக்காய் சாம்பார்" },
          { id: "l_ennaikathiri", name: "Ennai Kathirikai Kuzhambu", tamil: "எண்ணெய் கத்திரிக்காய் குழம்பு" },
          { id: "l_vathakuzhambu", name: "Poondu Sundakkai Vatha Kuzhambu", tamil: "பூண்டு வத்தக் குழம்பு" },
          { id: "l_morkuzhambu", name: "Vendaikkai Mor Kuzhambu", tamil: "மோர் குழம்பு" },
          { id: "l_tomatrasam", name: "Kalyana Tomato Garlic Rasam", tamil: "தக்காளி பூண்டு ரசம்" },
          { id: "l_mysorerasam", name: "Mysore Pepper Rasam", tamil: "மிளகு ரசம்" }
        ]
      },
      {
        name: "Poriyal, Varuval & Kootu (பொரியல் & வறுவல்)",
        items: [
          { id: "l_potatofry", name: "Urulaikizhangu Kara Varuval", tamil: "உருளைக்கிழங்கு கார வறுவல்" },
          { id: "l_beansusili", name: "Beans Paruppu Usili", tamil: "பீன்ஸ் பருப்பு உசிலி" },
          { id: "l_aviyal", name: "Traditional Kerala Aviyal", tamil: "பாரம்பரிய அவியல்" },
          { id: "l_cabbage", name: "Cabbage Carrot Coconut Poriyal", tamil: "முட்டைக்கோஸ் பொரியல்" },
          { id: "l_vazhaikkai", name: "Vazhaikkai Meen Varuval style", tamil: "வாழைக்காய் வறுவல்" },
          { id: "l_kootu", name: "Chow-Chow Kadamba Kootu", tamil: "சௌ-சௌ கூட்டு" }
        ]
      },
      {
        name: "Sides & Desserts (தொடுகறி & இனிப்பு முடிவு)",
        items: [
          { id: "l_appalam", name: "Big Madras Crispy Appalam", tamil: "பெரிய அப்பளம்" },
          { id: "l_pickle", name: "Mango Thokku / Narthangai Pickle", tamil: "மாங்காய் தொக்கு / ஊறுகாய்" },
          { id: "l_mormilagai", name: "Crispy Mor Milagai", tamil: "மோர் மிளகாய்" },
          { id: "l_ghee", name: "Pure Cow Ghee Pot", tamil: "சுத்தமான பசு நெய்" },
          { id: "l_icecream", name: "Vanilla / Strawberry Ice Cream Cup", tamil: "ஐஸ்கிரீம்" },
          { id: "l_fruitsalad", name: "Honey Cut Fruit Salad", tamil: "பழ சாலட்" },
          { id: "l_beeda", name: "Calcutta Sweet Pan Beeda", tamil: "ஸ்வீட் பீடா" }
        ]
      }
    ]
  },
  snacks: {
    title: "Evening High-Tea & Snacks (மாலை ஸ்நாக்ஸ்)",
    icon: "☕",
    sections: [
      {
        name: "Hot Crispy Savories (சுடச்சுட கார வகைகள்)",
        items: [
          { id: "s_pakoda", name: "Crispy Onion Pakoda", tamil: "வெங்காய பக்கோடா" },
          { id: "s_samosa", name: "Cocktail Mini Veg Samosa", tamil: "வெஜ் சமோசா" },
          { id: "s_meduvada", name: "Hot Medu Vadai with Chutney", tamil: "மெது வடை" },
          { id: "s_keeraivada", name: "Chettinad Keerai Vadai", tamil: "கீரை வடை" },
          { id: "s_bonda", name: "Urulai Masala Bonda", tamil: "உருளை போண்டா" },
          { id: "s_sundal", name: "Thengai Manga Pattani Sundal", tamil: "பட்டாணி சுண்டல்" }
        ]
      },
      {
        name: "Evening Sweets (மாலை இனிப்புகள்)",
        items: [
          { id: "s_jangri", name: "Mini Crispy Jangri", tamil: "மினி ஜாங்கிரி" },
          { id: "s_halwa", name: "Hot Wheat Halwa", tamil: "கோதுமை அல்வா" },
          { id: "s_mysorepak", name: "Ghee Mysore Pak", tamil: "நெய் மைசூர் பாக்" },
          { id: "s_jamun", name: "Warm Gulab Jamun", tamil: "சூடான குலாப் ஜாமுன்" }
        ]
      },
      {
        name: "Beverages (சூடான & குளிர்ந்த பானங்கள்)",
        items: [
          { id: "s_coffee", name: "Traditional Filter Coffee", tamil: "பில்டர் காபி" },
          { id: "s_tea", name: "Ginger Cardamom Tea", tamil: "இஞ்சி ஏலக்காய் டீ" },
          { id: "s_sharbat", name: "Nannari Lemon Sharbat", tamil: "நன்னாரி சர்பத்" },
          { id: "s_rosemilk", name: "Chilled Rose Milk", tamil: "குளிர்ந்த ரோஸ் மில்க்" }
        ]
      }
    ]
  },
  dinner: {
    title: "Dinner Tiffin & Live Buffet (இரவு டிபன் & பஃபே)",
    icon: "🌙",
    sections: [
      {
        name: "Breads & Main Tiffins (ரொட்டி & டிபன்)",
        items: [
          { id: "d_phulka", name: "Soft Phulka / Chapati with Veg Kurma", tamil: "சப்பாத்தி & குருமா" },
          { id: "d_parotta", name: "Malabar Coin Parotta with Veg Salna", tamil: "பரோட்டா & சால்னா" },
          { id: "d_poori", name: "Wheat Poori with Chana Masala", tamil: "பூரி & சன்னா மசால்" },
          { id: "d_idiyappam", name: "Soft Idiyappam with Coconut Milk / Veg Stew", tamil: "இடியாப்பம் & பால்" },
          { id: "d_miniidli", name: "Mini Podi Ghee Button Idli", tamil: "மினி பொடி இட்லி" }
        ]
      },
      {
        name: "Live Dosa Counter (லைவ் தோசை கவுண்டர்)",
        items: [
          { id: "d_ghee_roast", name: "Crispy Ghee Paper Roast", tamil: "நெய் ரோஸ்ட்" },
          { id: "d_podi_roast", name: "Spicy Podi Roast", tamil: "பொடி ரோஸ்ட்" },
          { id: "d_onion_uthappam", name: "Carrot Onion Uthappam", tamil: "ஊத்தப்பம்" },
          { id: "d_paneer_roast", name: "Paneer Tikka Dosa", tamil: "பன்னீர் தோசை" },
          { id: "d_mushroom_dosa", name: "Spicy Mushroom Dosa", tamil: "காளான் தோசை" }
        ]
      },
      {
        name: "Rice Varieties & Chinese Specials (சாதம் & ஸ்பெஷல்)",
        items: [
          { id: "d_friedrice", name: "Vegetable Fried Rice with Gobi Manchurian", tamil: "ப்ரைட் ரைஸ் & மஞ்சூரியன்" },
          { id: "d_noodles", name: "Schezwan Veg Hakka Noodles", tamil: "வெஜ் நூடுல்ஸ்" },
          { id: "d_jeerarice", name: "Jeera Ghee Rice with Dal Tadka", tamil: "சீரக சாதம் & பருப்பு" },
          { id: "d_briyani", name: "Dum Veg Biryani with Raitha", tamil: "வெஜ் பிரியாணி" },
          { id: "d_curdrice", name: "Creamy Curd Rice with Pomegranate", tamil: "தயிர் சாதம்" }
        ]
      },
      {
        name: "Gravies & Accompaniments (குழம்பு வகைகள்)",
        items: [
          { id: "d_paneergravy", name: "Paneer Butter Masala", tamil: "பன்னீர் பட்டர் மசாலா" },
          { id: "d_vegkurma", name: "Hotel Style Vegetable Kurma", tamil: "வெஜிடபிள் குருமா" },
          { id: "d_mushgravy", name: "Mushroom Masala Gravy", tamil: "காளான் மசாலா" },
          { id: "d_sambar", name: "Kadamba Tiffin Sambar", tamil: "சாம்பார்" },
          { id: "d_chutneys", name: "Coconut & Kara Chutneys", tamil: "தேங்காய் & காரச் சட்னி" }
        ]
      },
      {
        name: "Desserts (இனிப்பு முடிவுகள்)",
        items: [
          { id: "d_icecream", name: "Artisanal Ice Cream with Nuts", tamil: "ஐஸ்கிரீம்" },
          { id: "d_jamun", name: "Warm Gulab Jamun", tamil: "குலாப் ஜாமுன்" },
          { id: "d_cutfruits", name: "Fresh Cut Tropical Fruits", tamil: "பழத் தட்டு" },
          { id: "d_beeda", name: "Royal Sweet Beeda", tamil: "ஸ்வீட் பீடா" }
        ]
      }
    ]
  }
};


export const PARTNER_HALLS = [
  {
    id: "ravi-mini-hall",
    name: "Ravi Mini Hall A/c",
    tamilName: "ரவி மினி ஹால் A/c",
    type: "Mini Party & Function Hall",
    capacity: "100 - 300 Guests",
    location: "Karur Bypass Road, Trichy - 2",
    locationTamil: "நெ.23, கரூர் பைபாஸ் ரோடு, திருச்சி - 2",
    phones: ["0431-2702571", "98424 44425"],
    features: ["Fully Air Conditioned", "Dining Hall", "Bridal Dressing Room", "Central Trichy Location", "Car Parking"],
    badge: "Most Popular for Betrothal & Birthdays",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sushi-hall",
    name: "Sushi Hall A/c",
    tamilName: "சுசி ஹால் A/c",
    type: "Air Conditioned Compact Hall",
    capacity: "80 - 250 Guests",
    location: "Karur Bypass Road, Trichy - 2",
    locationTamil: "கரூர் பைபாஸ் ரோடு, திருச்சி - 2",
    phones: ["0431-2702571", "96982 97590"],
    features: ["Modern A/C Atmosphere", "Catering Service Counter", "Audio System", "Convenient Transit"],
    badge: "Ideal for Intimate Functions & Seemantham",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kamatchiamman-mandapam",
    name: "Sri Kamatchiamman Thirumana Mandapam",
    tamilName: "ஸ்ரீ காமாட்சியம்மன் திருமண மண்டபம்",
    type: "Grand Wedding & Reception Hall",
    capacity: "500 - 2500+ Guests",
    location: "Omanthur, Trichy District",
    locationTamil: "ஓமாந்தூர், திருச்சி மாவட்டம்",
    phones: ["04327-235588", "96982 97590"],
    features: ["Spacious Marriage Hall", "Huge Dining Seating", "Ample Car Parking", "Guest Rooms", "Deluxe Stage"],
    badge: "Grand Royal Weddings",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80"
  }
];

export const LIVE_STALLS = [
  { id: "popcorn", name: "Popcorn Live Cart", tamilName: "பாப்கான்", icon: "🍿", category: "Snacks", desc: "Fresh hot buttery popcorn popping live on-site" },
  { id: "cotton-candy", name: "Panju Mittai / Cotton Candy", tamilName: "பஞ்சு மிட்டாய்", icon: "🍭", category: "Sweet", desc: "Fluffy pink and colorful spun sugar treats loved by kids and adults" },
  { id: "mehendi", name: "Live Mehendi Art Corner", tamilName: "மெகந்தி", icon: "🌿", category: "Entertainment", desc: "Professional bridal & guest mehendi designers with organic henna" },
  { id: "balloons", name: "Balloon Twisting & Art", tamilName: "பலூன்", icon: "🎈", category: "Kids Fun", desc: "Custom balloon animal sculpting and entrance arch decors" },
  { id: "chocolate-fountain", name: "Chocolate Fountain", tamilName: "சாக்லேட் பவுண்டன்", icon: "🍫", category: "Kids & Youth", desc: "Tiered warm Belgian chocolate with fresh fruit skewers & marshmallows" },
  { id: "petti-kadai", name: "Retro Village Petti Kadai", tamilName: "பெட்டி கடை", icon: "🛖", category: "Traditional Experience", desc: "90s nostalgic candies, Kamarkat, Kadalai Mittai, Thenmittai stall" },
  { id: "fruit-salad", name: "Exotic Fruit Salad Station", tamilName: "புரூட் சாலட்", icon: "🍉", category: "Healthy & Fresh", desc: "Chilled seasonal exotic fruits, dragon fruit, pomegranate & honey drizzle" },
  { id: "ice-cream", name: "Artisanal Ice Cream Bar", tamilName: "ஐஸ்கிரீம்", icon: "🍨", category: "Dessert", desc: "Scoops of Kulfi, Butterscotch, Cassata, Vanilla with waffle cones & nuts" },
  { id: "sweet-beeda", name: "Royal Sweet Beeda / Paan", tamilName: "ஸ்வீட் பீடா", icon: "🍃", category: "Digestive", desc: "Authentic Meenakshi sweet paan with gulkand, tutty-fruity, saunf & cherry" },
  { id: "tea-coffee", name: "Traditional Filter Coffee & Tea", tamilName: "டீ, காபி", icon: "☕", category: "Beverage", desc: "Degree Kumbakonam filter coffee & aromatic ginger cardamom tea in brass davara" },
  { id: "pani-puri", name: "Live Pani Puri Counter", tamilName: "பானி பூரி", icon: "🥟", category: "Chaat", desc: "Crispy puris filled with spicy mint pani, sweet imli water & potato masala" },
  { id: "masala-puri", name: "Hot Masala Puri Chaat", tamilName: "மசால் பூரி", icon: "🍛", category: "Chaat", desc: "Steaming green pea ragda tossed over crushed puris, onions and sev" },
  { id: "thattu-vadai", name: "Salem Thattu Vadai Set", tamilName: "தட்டு வடை செட்", icon: "🍘", category: "Crispy Chaat", desc: "Authentic crispy thattu vadai sandwich with spicy beetroot carrot chutney" },
  { id: "masala-sundal", name: "Beach Style Masala Sundal", tamilName: "மசால் சுண்டல்", icon: "🧆", category: "Healthy Traditional", desc: "Hot boiled white peas tempered with coconut shavings and raw mango slices" },
  { id: "sweet-corn", name: "Steaming Butter Sweet Corn", tamilName: "ஸ்வீட் கார்ன்", icon: "🌽", category: "Snacks", desc: "Golden sweet corn kernels tossed in fresh butter, pepper & peri-peri spice" },
  { id: "fresh-juice", name: "Live Fresh Mocktail & Juice Bar", tamilName: "பிரஸ் ஜூஸ்", icon: "🍹", category: "Beverage", desc: "Freshly squeezed watermelons, tender coconut punch, mojitos and mango nectar" }
];

export const MENU_CATEGORIES = [
  {
    id: "breakfast",
    title: "Morning Tiffin",
    tamilTitle: "காலை டிபன்",
    desc: "Auspicious breakfast combinations featuring steaming idlis, crispy vadas, fluffy pooris, aromatic ghee pongal and filter coffee.",
    heroPrice: "₹200 - ₹350",
    packages: [
      {
        id: "bf-200",
        price: 200,
        name: "Standard Morning Tiffin",
        tamilName: "காலை டிபன் - ₹200",
        badge: "Essential Favorite",
        itemsTamil: [
          "ஸ்வீட் அசோகா", "இட்லி", "வெண் பொங்கல்", "பூரி", "வி.ஊத்தாப்பம்", 
          "இடியாப்பம்", "மெதுவடை", "சட்னி", "சாம்பார்", "காரசட்னி", 
          "உருளை மசால்", "தேங்காய் பால்", "காபி", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Sweet Asoka", "Steamed Soft Idli", "Ghee Ven Pongal", "Fluffy Poori", "Special Veg Uthappam",
          "Idiyappam", "Crispy Medu Vadai", "Coconut Chutney", "Arachivitta Sambar", "Kaara Spicy Chutney",
          "Potato Masal", "Sweet Coconut Milk", "Degree Filter Coffee", "Water Bottle 300ml"
        ]
      },
      {
        id: "bf-250",
        price: 250,
        name: "Deluxe Morning Feast",
        tamilName: "காலை டிபன் - ₹250",
        badge: "Crowd Choice",
        itemsTamil: [
          "ஸ்வீட் பைனாப்பிள் புட்டிங்", "இட்லி", "நெய் பொங்கல்", "சோழா பூரி", "பlanding பொடி தோசை (பூண்டு)", 
          "இடியாப்பம்", "சேமியா கிச்சடி", "மெதுவடை", "சட்னி", "சாம்பார்", 
          "கார சட்னி", "மல்லி சட்னி", "சென்னா மசாலா", "சொதி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Sweet Pineapple Pudding", "Hot Idli", "Ghee Pongal", "Chola Bhature / Poori", "Garlic Podi Dosa",
          "String Hoppers (Idiyappam)", "Semiya Kichadi", "Crispy Medu Vada", "Coconut Chutney", "Madras Sambar",
          "Kaara Chutney", "Fresh Coriander (Malli) Chutney", "Punjabi Chana Masala", "Tirunelveli Sodhi Gravy", "Filter Coffee", "Tea", "Water Bottle 300ml"
        ]
      },
      {
        id: "bf-300",
        price: 300,
        name: "Premium Special Tiffin",
        tamilName: "காலை டிபன் - ₹300",
        badge: "Rich & Wholesome",
        itemsTamil: [
          "ஸ்வீட் கோதுமை அல்வா", "இட்லி", "சீரக சம்பா நெய் பொங்கல்", "பூரி", "வெரைட்டி தோசை", 
          "ஆப்பம்", "இடியாப்பம்", "குதிரைவாலி கிச்சடி", "மெதுவடை", "சட்னி", 
          "சாம்பார்", "காரசட்னி", "மல்லி சட்னி", "உருளை மசால்", "தேங்காய் பால்", 
          "கடலை கறி", "பூண்டு சட்னி", "காபி, டீ", "ஐஸ்கிரீம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Tirunelveli Wheat Halwa", "Mulligai Idli", "Seeraga Samba Ghee Pongal", "Golden Poori", "Variety Crisp Dosa",
          "Kerala Soft Aappam", "Idiyappam", "Millet Kuthiraivali Kichadi", "Golden Medu Vadai", "Coconut Chutney",
          "Vegetable Sambar", "Kara Chutney", "Malli Chutney", "Potato Masal", "Fresh Coconut Milk",
          "Kadalai Curry", "Garlic Chutney", "Coffee & Tea", "Creamy Ice Cream", "Water Bottle 300ml"
        ]
      },
      {
        id: "bf-350",
        price: 350,
        name: "Royal Supreme Breakfast",
        tamilName: "காலை டிபன் - ₹350",
        badge: "Grand Festive Tiffin",
        itemsTamil: [
          "ஸ்வீட் கருப்பட்டி அல்வா", "ஸ்வீட் புரூட் அல்வா", "இட்லி", "வெண் பொங்கல்", "பாலக் பூரி", 
          "இடியாப்பம்", "ஆப்பம்", "சேமியா கிச்சடி பன்னீர் கொத்து", "ரவா தோசை", "மெதுவடை", 
          "சட்னி", "சாம்பார்", "காரசட்னி", "மல்லி சட்னி", "சொதி", 
          "தேங்காய் பால்", "காபி, டீ", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300ML"
        ],
        itemsEnglish: [
          "Traditional Karuppatti (Palm Jaggery) Halwa", "Rich Fruit Halwa", "Mini Button Idlis", "Ghee Ven Pongal", "Green Palak Poori",
          "Idiyappam", "Lace Aappam", "Semiya Kichadi with Paneer Kothu", "Golden Rava Dosa", "Medu Vadai",
          "Thengai Chutney", "Thalappakatti Style Sambar", "Spicy Kaara Chutney", "Malli Pudina Chutney", "Special Sodhi Gravy",
          "Cardamom Coconut Milk", "Filter Coffee / Tea", "Dessert Ice Cream", "Sweet Beeda", "Hill Banana (Malai Pazham)", "Water Bottle 300ml"
        ]
      }
    ]
  },
  {
    id: "lunch",
    title: "Lunch Saapadu",
    tamilTitle: "மதியம் சாப்பாடு",
    desc: "Elaborate South Indian traditional feast served with ghee, aromatic sambar, vathal kulambu, varieties of poriyal, vadai, payasam & royal sweets.",
    heroPrice: "₹180 - ₹500",
    packages: [
      {
        id: "ln-180",
        price: 180,
        name: "Traditional South Feast",
        tamilName: "மதியம் சாப்பாடு - ₹180",
        badge: "Budget Friendly",
        itemsTamil: [
          "ஸ்வீட் மினி ஜாங்கிரி", "சாதம்", "பருப்பு நெய்", "சாம்பார் (கத்திரி, முருங்கை, மாங்காய்)", "வத்தல் குழம்பு", 
          "ரசம்", "கெட்டி மோர்", "பாயாசம்", "அப்பளம்", "போண்டா", 
          "கோஸ், பட்டாணி பொறியல்", "உருளை கார கறி", "சவ் சவ் கூட்டு", "ஊறுகாய்", "சிப்ஸ்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Mini Jangiri Sweet", "Steamed Ponni Rice", "Paruppu with Pure Ghee", "Traditional Sambar (Brinjal, Drumstick, Raw Mango)", "Spicy Manathakkali Vathal Kulambu",
          "Tomato Pepper Rasam", "Thick Churned Butter Milk", "Elaneer / Semiya Payasam", "Crispy Appalam", "Crispy Potato Bonda",
          "Cabbage Green Peas Poriyal", "Spicy Potato Roast", "Chow Chow Kootu", "Traditional Pickle", "Crunchy Chips", "Water Bottle 300ml"
        ]
      },
      {
        id: "ln-230",
        price: 230,
        name: "Special Wedding Saapadu",
        tamilName: "மதியம் சாப்பாடு - ₹230",
        badge: "Most Popular",
        itemsTamil: [
          "ஸ்வீட் ட்ரை ஜாமூன்", "சாதம்", "பருப்பு நெய்", "சாம்பார்", "வத்தல் குழம்பு", 
          "ரசம்", "கெட்டி மோர்", "பாயாசம் (அவல்)", "அப்பளம்", "பருப்பு வடை", 
          "பீன்ஸ், கேரட் பொறியல்", "சேனை நிலகடலை சாப்ஸ்", "கதம்ப அவியல்", "வி.பிரியாணி", "ஆனியன் பச்சடி", 
          "ஊறுகாய்", "சிப்ஸ்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Dry Gulab Jamun", "Fragrant Steamed Rice", "Paruppu & Pure Ghee", "Drumstick Sambar", "Ennai Kathirikai / Vathal Kulambu",
          "Garlic Jeera Rasam", "Fresh Thick Curd / Buttermilk", "Aval (Poha) Rich Payasam", "Big Appalam", "Masala Paruppu Vadai",
          "Beans & Carrot Poriyal", "Senai (Yam) Peanut Chops", "Traditional Kadamba Aviyal", "Special Veg Dum Biryani", "Onion Raita",
          "Spicy Mango Pickle", "Crispy Chips", "Water Bottle 300ml"
        ]
      },
      {
        id: "ln-300",
        price: 300,
        name: "Deluxe Feast with Biryani",
        tamilName: "மதியம் சாப்பாடு - ₹300",
        badge: "High Variety",
        itemsTamil: [
          "ஸ்வீட் முந்திரி கேக்", "சாதம்", "பருப்பு நெய்", "சாம்பார்", "உருண்டை குழம்பு", 
          "ரசம்", "தயிர்", "பாயாசம் (கோதுமை ரவை)", "அப்பளம்", "கீரை வடை", 
          "கோஸ், கேரட், பீன்ஸ் பொறியல்", "வெண்டை புளி மண்டி", "மலபார் அவியல்", "உருளை பால்கறி", "காளான் பிரியாணி", 
          "ஆனியன் பச்சடி", "ஊறுகாய்", "கோபி 65", "சிப்ஸ்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Cashew Kaju Katli (Munthiri Cake)", "Steamed Rice", "Ghee Paruppu", "Kumbakonam Sambar", "Chettinad Paruppu Urundai Kulambu",
          "Pepper Rasam", "Set Curd", "Wheat Rava Payasam", "Appalam", "Crispy Keerai Vadai",
          "Tricolor Veg Poriyal", "Vendakkai Puli Mandi", "Malabar Coconut Aviyal", "Potato Milk Curry (Paalkari)", "Mushroom Dum Biryani",
          "Onion Raita", "Mango Ginger Pickle", "Crispy Gobi 65", "Potato Chips", "Ice Cream", "Sweet Beeda", "Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "ln-350",
        price: 350,
        name: "Grand Kalyana Saapadu",
        tamilName: "மதியம் சாப்பாடு - ₹350",
        badge: "Celebration Special",
        itemsTamil: [
          "ஸ்வீட் பாதாம் அல்வா", "ஸ்வீட் ரசமலாய் (ரோஸ் மில்க்)", "சாதம்", "பருப்பு நெய், சாம்பார்", "சைவ மீன் குழம்பு", 
          "மைசூர் ரசம்", "கெட்டி தயிர்", "பாயாசம் (அடபிரதமன்)", "அப்பளம்", "பருப்பு வடை", 
          "பீன்ஸ், பன்னீர் பொறியல்", "வாழைக்காய் மீன் சாப்ஸ்", "கதம்ப அவியல்", "சைவ ஈரல் கிரேவி", "மாங்காய் பச்சடி", 
          "தேங்காய் பால் குஸ்கா", "ஆனியன் மாதுளை பச்சடி", "ஊறுகாய்", "சிப்ஸ்", "பேபிகான் 65", 
          "மினி புல்கா சப்பாத்தி", "பன்னீர் பட்டர் மசாலா", "மோர் மிளகாய்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Rich Badam Halwa", "Royal Rasamalai in Rose Milk", "Steamed Sona Masoori Rice", "Ney Paruppu & Kalyana Sambar", "Veg Fish Curry (Mock Meen Kulambu)",
          "Mysore Special Rasam", "Farm Fresh Thick Curd", "Kerala Ada Pradhaman Payasam", "Big Appalam", "Medu Paruppu Vadai",
          "Beans Paneer Poriyal", "Vazhaikkai Fish Fry Style Chops", "Traditional Aviyal", "Veg Eeral (Mushroom/Soya) Masala", "Sweet Sour Mango Pachadi",
          "Fragrant Coconut Milk Kuska", "Onion Pomegranate Raita", "Homemade Pickle", "Kerala Banana Chips", "Baby Corn 65",
          "Soft Mini Phulka Roti", "Paneer Butter Masala", "Fried Mor Milagai", "Ice Cream Sundae", "Kolkata Sweet Beeda", "Malai Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "ln-500",
        price: 500,
        name: "Royal Maharaja Grand Bhojanam",
        tamilName: "மதியம் சாப்பாடு - ₹500",
        badge: "Ultimate 32+ Dish Royal Feast",
        itemsTamil: [
          "ஸ்வீட் முந்திரி கேக்", "மலாய் ஸ்டான்விச்", "மால் பூவா", "சாதம்", "பருப்பு பொடி + நெய்", 
          "சாம்பார் (க.மு.மா)", "வத்தல் குழம்பு", "மோர் குழம்பு", "ரசம்", "தயிர்", 
          "இளநீர் பாயாசம்", "அப்பளம்", "பருப்பு வடை", "பீன்ஸ், கேரட் உசிலி", "வெஜ் மட்டன் கிரேவி", 
          "மலபார் அவியல்", "மாங்காய் பச்சடி", "சேனை சாப்ஸ் (குத்துகடலை)", "பன்னீர் புலாவ் (அ) கறி பலா பிரியாணி", "ஆனியன் வெள்ளி, கேரட் பச்சடி", 
          "வெண்டைக்காய் 65", "சிப்ஸ்", "மினி சப்பாத்தி", "மஷ்ரூம் கிரேவி", "ஸ்வீட் கான் சூப்", 
          "ஐஸ்கிரீம்", "பீடா", "புரூட் சாலட்", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Cashew Katli", "Creamy Malai Sandwich", "Shahi Malpua with Rabri", "Supreme White Rice", "Paruppu Podi with Melted Ghee",
          "Special Royal Sambar (Brinjal, Drumstick, Mango)", "Karaikudi Vathal Kulambu", "Thick Mor Kulambu (Buttermilk Gravy)", "Nattu Thakkali Rasam", "Rich Cream Curd",
          "Exquisite Tender Coconut (Elaneer) Payasam", "Appalam", "Special Crispy Paruppu Vadai", "Beans Carrot Paruppu Usili", "Soya Mock Mutton Rich Gravy",
          "Authentic Malabar Aviyal", "Vellam Mango Pachadi", "Yam Roast with Black Chana", "Paneer Pulao OR Tender Raw Jackfruit (Palaakkai) Biryani", "Cucumber Carrot Onion Raita",
          "Crispy Vendakkai 65", "Nenthiram Banana Chips", "Hot Mini Phulka Chapati", "Spicy Chettinad Mushroom Gravy", "Sweet Corn Hot Soup",
          "Gourmet Ice Cream", "Royal Sweet Beeda", "Exotic Chilled Fruit Salad", "Hill Banana", "Water Bottle 300ml"
        ]
      }
    ]
  },
  {
    id: "evening-snacks",
    title: "Evening Snacks & High-Tea",
    tamilTitle: "மாலை ஸ்நாக்ஸ்",
    desc: "Perfect high-tea combos for evening receptions, betrothals & gatherings. 1 Sweet + 1 Hot Savory + Fresh Filter Coffee / Tea + Water Bottle.",
    heroPrice: "₹60 per combo",
    packages: [
      {
        id: "es-1",
        price: 60,
        name: "Combo 1: Rava Kesari & Bajji",
        tamilName: "ஸ்நாக்ஸ் காம்போ 1",
        itemsTamil: ["ஸ்வீட் ரவா கேசரி", "பஜ்ஜி", "சட்னி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Ghee Rava Kesari", "Crispy Hot Bajji", "Coconut Chutney", "Filter Coffee", "Hot Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-2",
        price: 60,
        name: "Combo 2: Pineapple Pudding & Onion Samosa",
        tamilName: "ஸ்நாக்ஸ் காம்போ 2",
        itemsTamil: ["ஸ்வீட் பைனாப்பிள் புட்டிங்", "சமோசா (ஆனியன்)", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Pineapple Pudding", "Crispy Onion Samosa", "Mint Dip", "Filter Coffee", "Hot Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-3",
        price: 60,
        name: "Combo 3: Carrot Halwa & Cutlet",
        tamilName: "ஸ்நாக்ஸ் காம்போ 3",
        itemsTamil: ["ஸ்வீட் கேரட் அல்வா", "கட்லட்", "சாஸ்", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Rich Carrot Halwa", "Veg Cutlet", "Tomato Chutney Sauce", "Filter Coffee", "Hot Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-4",
        price: 60,
        name: "Combo 4: Wheat Halwa & Pattani Samosa",
        tamilName: "ஸ்நாக்ஸ் காம்போ 4",
        itemsTamil: ["ஸ்வீட் கோதுமை அல்வா", "சமோசா (மோட்டு பட்டூஸ்)", "சாஸ்", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Tirunelveli Wheat Halwa", "Mothu Green Peas Samosa", "Chilli Sauce", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-5",
        price: 60,
        name: "Combo 5: Asoka & Onion Dhool Bajji",
        tamilName: "ஸ்நாக்ஸ் காம்போ 5",
        itemsTamil: ["ஸ்வீட் அசோகா", "ஆனியன் தூள் பஜ்ஜி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Thiruvaiyaru Asoka Halwa", "Onion Dhool Pakoda Bajji", "Tea & Coffee", "Water Bottle 300ml"]
      },
      {
        id: "es-6",
        price: 60,
        name: "Combo 6: Paruppu Poli & Medu Vadai",
        tamilName: "ஸ்நாக்ஸ் காம்போ 6",
        itemsTamil: ["ஸ்வீட் பருப்பு போளி", "மெதுவடை", "சட்னி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Sweet Paruppu Poli with Ghee", "Hot Medu Vadai", "Chutney", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-7",
        price: 60,
        name: "Combo 7: Thengai Poli & Pattanam Bonda",
        tamilName: "ஸ்நாக்ஸ் காம்போ 7",
        itemsTamil: ["ஸ்வீட் தேங்காய் போளி", "பட்டணம் போண்டா", "சட்னி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Sweet Coconut Thengai Poli", "Crispy Pattanam Bonda", "Chutney", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-8",
        price: 60,
        name: "Combo 8: Mysore Pak & Mixture",
        tamilName: "ஸ்நாக்ஸ் காம்போ 8",
        itemsTamil: ["ஸ்வீட் மைசூர் பாகு", "காரம் மிக்ஸர்", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Melt-in-mouth Ghee Mysore Pak", "Spicy Madras Mixture", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-9",
        price: 60,
        name: "Combo 9: Dry Jamun & Mysore Bonda",
        tamilName: "ஸ்நாக்ஸ் காம்போ 9",
        itemsTamil: ["ஸ்வீட் ட்ரை ஜாமூன்", "மைசூர் போண்டா", "சட்னி", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Sweet Dry Jamun", "Fluffy Mysore Bonda", "Coconut Chutney", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      },
      {
        id: "es-10",
        price: 60,
        name: "Combo 10: Shahi Tukda & Gobi 65",
        tamilName: "ஸ்நாக்ஸ் காம்போ 10",
        itemsTamil: ["ஸ்வீட் ஷாகி துக்டா", "கோபி 65", "காபி", "டீ", "வாட்டர் பாட்டில் 300 மிலி"],
        itemsEnglish: ["Royal Shahi Tukda with Rabri", "Crunchy Hot Gobi 65", "Filter Coffee", "Tea", "Water Bottle 300ml"]
      }
    ]
  },
  {
    id: "dinner",
    title: "Dinner / Night Tiffin",
    tamilTitle: "இரவு டிபன்",
    desc: "Exquisite dinner spread featuring hot tiffins, variety dosas, parottas, gravies, rice varieties, desserts & soups.",
    heroPrice: "₹200 - ₹800",
    packages: [
      {
        id: "dn-200",
        price: 200,
        name: "Standard Night Tiffin",
        tamilName: "இரவு டிபன் - ₹200",
        badge: "Classic Spread",
        itemsTamil: [
          "ஸ்வீட் அக்காரா வடசல்", "இட்லி", "வி.ஊத்தாப்பம்", "புரோட்டா", "வெஜ்.புலாவ்", 
          "தயிர் சாதம்", "மைசூர் போண்டா", "தேங்காய் சட்னி", "சாம்பார்", "காரசட்னி", 
          "குருமா", "ஆனியன் பச்சடி", "ஊறுகாய்", "பாதாம் பால்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Iyengar Akkaravadisal Sweet", "Soft Idli", "Special Veg Uthappam", "Layered Parotta", "Veg Pulao",
          "Temple Curd Rice", "Mysore Bonda", "Fresh Coconut Chutney", "Tiffin Sambar", "Kara Chutney",
          "Veg Salna / Kurma", "Onion Raita", "Pickle", "Warm Saffron Badam Milk", "Water Bottle 300ml"
        ]
      },
      {
        id: "dn-250",
        price: 250,
        name: "Deluxe Night Tiffin",
        tamilName: "இரவு டிபன் - ₹250",
        badge: "Popular Dinner",
        itemsTamil: [
          "ஸ்வீட் அசோகா (அ) பீட்ரூட் அல்வா", "இட்லி", "ரவா தோசை", "சப்பாத்தி", "சாம்பார் சாதம்", 
          "வெஜ் ப்ரைடு ரைஸ்", "தயிர் சேவை", "கட்லட்", "சாஸ்", "சட்னி", 
          "சாம்பார்", "சென்னாமசாலா", "சிப்ஸ்", "வத்தல், வடகம்", "காரசட்னி", 
          "ஊறுகாய்", "கல்கண்டு பால்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Asoka (or) Beetroot Halwa", "Hot Idlis", "Crispy Rava Dosa", "Soft Chapati", "Bisibelebath / Sambar Rice",
          "Veg Fried Rice", "Thayir Sevai (Curd String Hoppers)", "Crispy Veg Cutlet", "Tomato Sauce", "Coconut Chutney",
          "Sambar", "Punjabi Chana Masala", "Potato Chips", "Crispy Vathal & Vadam", "Kaara Chutney",
          "Pickle", "Kalkandu Sweet Milk", "Water Bottle 300ml"
        ]
      },
      {
        id: "dn-300",
        price: 300,
        name: "Celebration Night Dinner",
        tamilName: "இரவு டிபன் - ₹300",
        badge: "Rich Tiffin Variety",
        itemsTamil: [
          "ஸ்வீட் கேரட் அல்வா (அ) ஷாஹிதுக்டா", "இட்லி", "பொடி தோசை", "சில்லி புரோட்டா", "வத்தல் குழம்பு சாதம்", 
          "சேமியா கிச்சடி", "மஷ்ரூம் புலாவ்", "மில்லட் தயிர் சாதம்", "மைசூர் போண்டா", "சட்னி", 
          "சாம்பார்", "கார சட்னி", "மல்லி சட்னி", "ஆனியன் பச்சடி", "வத்தல், வடகம்", 
          "ஊறுகாய்", "சிப்ஸ்", "பாதாம்பால்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Carrot Halwa (or) Shahi Tukda", "Steamed Idli", "Guntur Podi Dosa", "Chilli Parotta", "Vathal Kulambu Rice",
          "Semiya Kichadi", "Mushroom Dum Pulao", "Healthy Millet Curd Rice", "Mysore Bonda", "Coconut Chutney",
          "Sambar", "Spicy Kara Chutney", "Malli Chutney", "Onion Raita", "Vathal & Vadam",
          "Pickle", "Chips", "Warm Saffron Badam Milk", "Creamy Ice Cream", "Sweet Beeda", "Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "dn-350",
        price: 350,
        name: "Grand Reception Spread",
        tamilName: "இரவு டிபன் - ₹350",
        badge: "Signature Menu",
        itemsTamil: [
          "ஸ்வீட் பிரட் அல்வா (அ) பூசணி அல்வா", "மினி பொடி இட்லி (பெப்பர்)", "வி.ஊத்தாப்பம்", "கைமா புரோட்டா (குருமா)", "அடை (தினை)", 
          "ரோமாலி ரொட்டி (மேத்தி)", "கோதுமை ரவை கிச்சடி", "பகாலா பாத்", "மசால் போண்டா", "சட்னி", 
          "சாம்பார்", "காரசட்னி", "மல்லி சட்னி", "கதம்ப அவியல்", "பன்னீர் பட்டர் மசாலா (அ) மலாய் கோப்தா", 
          "கோபி 65", "மோர் மிளகாய்", "ஊறுகாய் (மா.இஞ்சி)", "பாதாம்பால்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம் (மலை)", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Bread Halwa (or) Kasi Pumpkin Halwa", "Mini Pepper Podi Button Idlis", "Vegetable Uthappam", "Kaima Kothu Parotta with Kurma", "Healthy Thinai Millet Adai",
          "Soft Rumali Roti (Methi)", "Wheat Rava Kichadi", "Bagala Bath (Rich Tempered Curd Rice)", "Spicy Masala Bonda", "Coconut Chutney",
          "Sambar", "Kara Chutney", "Fresh Coriander Chutney", "Kadamba Aviyal", "Paneer Butter Masala (or) Malai Kofta Gravy",
          "Crispy Gobi 65", "Mor Milagai", "Mango Ginger Pickle", "Rich Badam Milk", "Ice Cream", "Sweet Beeda", "Sirumalai Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "dn-450",
        price: 450,
        name: "Royal Deluxe Reception Feast",
        tamilName: "இரவு டிபன் - ₹450",
        badge: "VIP Dinner",
        itemsTamil: [
          "ஸ்வீட் பாதாம் அல்வா", "ஸ்வீட் ஹார்லிக்ஸ் பர்பி (அ) ரசகுல்லா", "ஹார்ட்டீன் இட்லி", "மசால் தோசை (பட்டர்)", "ரவா தோசை", 
          "சில்லி புரோட்டா (கோதுமை)", "பட்டர் நான்", "சாம்பார் சாதம் (அ) பன்னீர் ஸ்வீட்கான் பிரியாணி", "தயிர்சாதம்", "ஸ்பிரிங் ரோல்", 
          "சட்னி", "சாம்பார்", "காரசட்னி", "மல்லி சட்னி", "பூண்டு சட்னி", 
          "பன்னீர் பட்டர் மசாலா", "சிப்ஸ்", "வத்தல், வடகம்", "பேபி கான் 65", "ஊறுகாய்", 
          "கல்கண்டு பால்", "சாஸ்", "ஐஸ்கிரீம் (பட்டர் காட்ஜ்)", "பீடா", "வாழைப்பழம் (மலை)", "புரூட் சாலட்", "வாட்டர் பாட்டில் 300 மிலி", "வெஜ் சூப்"
        ],
        itemsEnglish: [
          "Badam Halwa", "Horlicks Barfi (or) Bengali Rasgulla", "Heart Shaped Designer Idli", "Butter Masala Dosa", "Crispy Rava Dosa",
          "Wheat Chilli Parotta", "Tandoori Butter Naan", "Sambar Rice (or) Paneer Sweet Corn Dum Biryani", "Thick Curd Rice", "Crispy Veg Spring Roll",
          "Coconut Chutney", "Sambar", "Kara Chutney", "Malli Chutney", "Chettinad Garlic Chutney",
          "Paneer Butter Masala", "Chips", "Vathal & Vadam", "Baby Corn 65", "Pickle",
          "Sweet Kalkandu Milk", "Dip Sauce", "Butterscotch Gourmet Ice Cream", "Royal Beeda", "Malai Banana", "Exotic Fruit Salad", "Water Bottle 300ml", "Hot Vegetable Soup"
        ]
      },
      {
        id: "dn-800",
        price: 800,
        name: "Imperial Luxury Live Night Buffet",
        tamilName: "இரவு டிபன் ஸ்பெஷல் மெனு - ₹800",
        badge: "Grand Luxury Live Counter Banquet",
        itemsTamil: [
          "ஸ்வீட் கேரட் அல்வா", "ஸ்வீட் கோவா குலோப்ஜாமூன்", "ஸ்வீட் பாதாம் போளி", "பீட்ரூட் ஜாம்", "சாம்பார் மினி இட்லி - சாம்பார், தேங்காய் சட்னி", 
          "மினி பொடி இட்லி", "மினி பெப்பர் இட்லி", "நெய் தோசை - பூண்டு சட்னி", "காளான் கறி தோசை - கார சட்னி", "ரோமாலி ரொட்டி - பன்னீர் ஸ்வீட் கான் கிரேவி", 
          "ஆலு சப்பாத்தி - வெஜ் குருமா", "ரவா தோசை - மல்லி சட்னி", "புரோட்டா - வெஜ் மட்டன் கிரேவி", "சில்லி புரோட்டா - ஆனியன் பச்சடி", "சாம்பார் சாதம் - சிப்ஸ்", 
          "வத்தல் குழம்பு சாதம் - வத்தல், வடகம்", "தயிர் சாதம் - மா.இஞ்சி ஊறுகாய்", "வெஜ் புலாவ் - பூந்தி தயிர் பச்சடி", "சீஸ் பால்", "கட்லட் - சாஸ்", 
          "பேபி கான், மஞ்சூரியன்", "காளான் 65", "பாதாம்பால்", "கல்கண்டு பால்", "ஐஸ்கிரீம்", "பீடா", "புரூட் சாலட்", "காபி, டீ", "வாட்டர்பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Carrot Halwa", "Pure Khowa Gulab Jamun", "Rich Badam Poli with Ghee", "Special Beetroot Jam", "Sambar Button Idli with Coconut Chutney",
          "Mini Ghee Podi Idli", "Mini Crushed Pepper Idli", "Ghee Roast Dosa with Garlic Chutney", "Live Mushroom Curry Dosa with Kara Chutney", "Roomali Roti with Paneer Sweet Corn Gravy",
          "Stuffed Aloo Paratha with Veg Kurma", "Crispy Rava Dosa with Malli Chutney", "Malabar Parotta with Mock Veg Mutton Gravy", "Chilli Parotta with Onion Raita", "Bisibelebath with Chips",
          "Vathal Kulambu Rice with Vathal Vadam", "Thick Curd Rice with Mango-Ginger Pickle", "Shahi Veg Pulao with Boondi Raita", "Crispy Molten Cheese Balls", "Gourmet Cutlet with Sauce",
          "Crispy Baby Corn Manchurian", "Spicy Mushroom 65", "Rich Badam Milk", "Kalkandu Milk", "Ice Cream Parlour Trio", "Royal Meenakshi Beeda", "Chilled Fruit Salad", "Live Filter Coffee & Masala Tea", "Water Bottle 300ml"
        ]
      }
    ]
  },
  {
    id: "valaikappu",
    title: "Seemantham & Valaikappu",
    tamilTitle: "வளைகாப்பு மெனு",
    desc: "Auspicious traditional 5 to 9 variety rice feast prepared with divine sanctity for mother-to-be celebrations.",
    heroPrice: "₹250 - ₹450",
    packages: [
      {
        id: "vk-250",
        price: 250,
        name: "5 Variety Rice Valaikappu",
        tamilName: "வளைகாப்பு மெனு - ₹250",
        badge: "Traditional 5 Variety",
        itemsTamil: [
          "ஸ்வீட் ட்ரை ஜாமூன்", "சர்க்கரை பொங்கல்", "புளியோதரை", "வி.பிரியாணி", "மல்லி சாதம்", 
          "தேங்காய் சாதம்", "லெமன் சாதம்", "தயிர் சாதம்", "கதம்பகூட்டு", "துவையல்", 
          "ஊறுகாய்", "ஆனியன் பச்சடி", "வத்தல், வடகம்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Dry Gulab Jamun", "Akkara Ghee Sakkarai Pongal", "Kovil Puliyodharai (Tamarind Rice)", "Fragrant Veg Biryani", "Fresh Malli (Coriander) Rice",
          "Thengai (Coconut) Rice", "Zesty Lemon Rice", "Tempered Curd Rice", "Kadamba Kootu", "Traditional Thuvaiyal",
          "Pickle", "Onion Raita", "Vathal & Vadam", "Ice Cream", "Beeda", "Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "vk-300",
        price: 300,
        name: "7 Variety Rice Seemantham",
        tamilName: "வளைகாப்பு மெனு - ₹300",
        badge: "Auspicious 7 Variety",
        itemsTamil: [
          "ஸ்வீட் முந்திரி கேக்", "கல்கண்டு சாதம்", "புளியோதரை", "வி.பிரியாணி", "மல்லி சாதம்", 
          "கேரட் சாதம்", "லெமன் சாதம்", "தேங்காய் சாதம்", "மிளகு சாதம்", "தயிர் சாதம்", 
          "கதம்ப கூட்டு", "ஆனியன் பச்சடி", "ஊறுகாய்", "துவையல்", "வத்தல், வடகம்", 
          "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Cashew Katli", "Devotional Kalkandu Bath", "Temple Puliyodharai", "Vegetable Dum Biryani", "Malli Rice",
          "Carrot Rice", "Lemon Rice", "Coconut Rice", "Black Pepper Jeera Rice (Milagu Sadham)", "Thick Curd Rice",
          "Kadamba Kootu", "Onion Raita", "Pickle", "Coconut Thuvaiyal", "Crispy Vathal Vadam",
          "Ice Cream", "Sweet Beeda", "Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "vk-350",
        price: 350,
        name: "Royal 9 Variety Rice Feast",
        tamilName: "வளைகாப்பு மெனு - ₹350",
        badge: "Special 9 Variety + Vadai & Rasam",
        itemsTamil: [
          "ஸ்வீட் ரசமலாய்", "அக்காரா வடசல்", "புளியோதரை", "காளான் பிரியாணி", "மல்லி சாதம்", 
          "சாம்பார் சாதம்", "மாங்காய் சாதம்", "தேங்காய் சாதம்", "தயிர் சாதம்", "மெதுவடை", 
          "கதம்ப கூட்டு", "சாதம்", "ரசம்", "உருளை காரகறி", "வத்தல், வடகம்", 
          "ஆனியன் பச்சடி", "துவையல்", "ஊறுகாய்", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Royal Rasamalai", "Iyengar Akkaravadisal", "Kovil Puliyodharai", "Chettinad Mushroom Biryani", "Malli Rice",
          "Sambar Rice", "Tangy Raw Mango Rice", "Coconut Rice", "Curd Rice", "Crispy Medu Vadai",
          "Kadamba Kootu", "White Rice", "Tomato Pepper Rasam", "Potato Kara Kari Roast", "Vathal & Vadam",
          "Onion Raita", "Spicy Thuvaiyal", "Pickle", "Ice Cream", "Beeda", "Banana", "Water Bottle 300ml"
        ]
      },
      {
        id: "vk-450",
        price: 450,
        name: "Imperial Maha Valaikappu Bhojanam",
        tamilName: "வளைகாப்பு மெனு - ₹450",
        badge: "Grand 11 Variety & Jackfruit Biryani",
        itemsTamil: [
          "ஸ்வீட் பாதாம் அல்வா", "கல்கண்டு பாத்", "புளியோதரை", "பலாக்காய் பிரியாணி", "மல்லி சாதம்", 
          "தேங்காய் சாதம்", "மிளகு சாதம்", "லெமன் சாதம்", "சாம்பார் சாதம்", "கேரட் சாதம்", 
          "மாங்காய் சாதம்", "தயிர் சாதம்", "சாதம்", "ரசம்", "கதம்ப கூட்டு", 
          "ஆனியன் பச்சடி", "துவையல்", "ஊறுகாய்", "வத்தல், வடகம்", "சிப்ஸ்", 
          "உருளை காரகறி", "ஐஸ்கிரீம்", "பீடா", "வாழைப்பழம்", "புரூட் சாலட்", "வாட்டர் பாட்டில் 300 மிலி"
        ],
        itemsEnglish: [
          "Pure Ghee Badam Halwa", "Rich Kalkandu Bath", "Temple Puliyodharai", "Special Raw Jackfruit (Palakkai) Biryani", "Malli Rice",
          "Coconut Rice", "Black Pepper Jeera Rice", "Lemon Rice", "Sambar Rice", "Carrot Rice",
          "Tangy Mango Rice", "Set Curd Rice", "White Steamed Rice", "Garlic Pepper Rasam", "Kadamba Kootu",
          "Onion Raita", "Thuvaiyal", "Traditional Pickle", "Vathal & Vadam", "Nenthiram Chips",
          "Potato Spicy Fry", "Ice Cream", "Sweet Beeda", "Malai Banana", "Exotic Fruit Salad", "Water Bottle 300ml"
        ]
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "S. Ramanathan & Family",
    event: "Daughter's Grand Wedding (1500 Guests)",
    venue: "Sri Kamatchiamman Thirumana Mandapam, Trichy",
    rating: 5,
    text: "Harinee Catering managed our daughter's marriage from morning breakfast to the reception dinner. The ₹350 Kalyana Saapadu and the Tender Coconut Payasam were the talk of the entire wedding! Very punctual and hygienic.",
    date: "February 2026"
  },
  {
    name: "Dr. K. Vijayakumar",
    event: "Seemantham Function (300 Guests)",
    venue: "Ravi Mini Hall A/C, Trichy",
    rating: 5,
    text: "We ordered the 7 Variety Rice Valaikappu package along with the Chocolate Fountain and Live Panju Mittai for kids. Every guest praised the authentic home-style taste and Founder Manivannan sir & Co-Founder Deepa madam's personal hospitality.",
    date: "January 2026"
  },
  {
    name: "Anitha & Karthick",
    event: "Housewarming & Reception (450 Guests)",
    venue: "Sushi Hall A/C, Karur Bypass Road",
    rating: 5,
    text: "The ₹800 Live Buffet dinner was world-class. Mushroom Curry Dosa and Ghee Podi Idli made live on the spot won everyone's hearts. Best pure veg caterers in Trichy without doubt.",
    date: "March 2026"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    title: "Traditional Banana Leaf Kalyana Saapadu",
    category: "Feasts"
  },
  {
    url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    title: "Steaming Soft Mallipoo Idlis & Chutneys",
    category: "Breakfast"
  },
  {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    title: "Aromatic Vegetable Dum Biryani",
    category: "Specials"
  },
  {
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    title: "Crispy Golden Medu Vadas & Sambar",
    category: "Breakfast"
  },
  {
    url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    title: "Pure Ghee Traditional Sweets & Halwa",
    category: "Sweets"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    title: "Live Buffet & Dinner Setup at Trichy Venues",
    category: "Live Counters"
  }
];

