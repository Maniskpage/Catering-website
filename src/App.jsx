import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import CostEstimatorPage from './pages/CostEstimatorPage';
import LiveStallsPage from './pages/LiveStallsPage';
import HallsPage from './pages/HallsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CustomMenuPage from './pages/CustomMenuPage';

function MainApp() {
  const [lang, setLang] = useState('en'); // 'en' or 'ta'
  const [selectedPackageForCalc, setSelectedPackageForCalc] = useState(null);
  const navigate = useNavigate();

  const handleSelectPackage = (pkg, category) => {
    setSelectedPackageForCalc({ ...pkg, category });
    navigate('/estimator');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-stone-900 font-sans selection:bg-crimson-800 selection:text-white antialiased flex flex-col justify-between">
      <ScrollToTop />

      {/* Persistent Navigation Header */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage lang={lang} onSelectPackage={handleSelectPackage} />} />
          <Route path="/menus" element={<MenusPage lang={lang} onSelectPackage={handleSelectPackage} />} />
          <Route path="/custom-menu" element={<CustomMenuPage lang={lang} />} />
          <Route path="/estimator" element={<CostEstimatorPage lang={lang} externalSelectedPackage={selectedPackageForCalc} />} />
          <Route path="/live-stalls" element={<LiveStallsPage lang={lang} />} />
          <Route path="/halls" element={<HallsPage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="*" element={<HomePage lang={lang} onSelectPackage={handleSelectPackage} />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer lang={lang} />

      {/* Persistent Mobile Actions */}
      <FloatingActions lang={lang} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
