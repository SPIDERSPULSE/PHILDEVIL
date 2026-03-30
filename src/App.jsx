import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Preloader from './components/ui/Preloader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingSidebars from './components/ui/FloatingSidebars';
import ThreeDSpace from './components/ui/ThreeDSpace';
import WaveRipple from './components/ui/WaveRipple';
import DropletBackground from './components/ui/DropletBackground';
import InteractiveGreeting from './components/ui/InteractiveGreeting';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/home/HomePage';
import WorkPage from './pages/work/WorkPage';
import ExpertisePage from './pages/expertise/ExpertisePage';
import PricingPage from './pages/pricing/PricingPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import SecurityPage from './pages/security/SecurityPage';
import FintechPage from './pages/fintech/FintechPage';
import AutomationPage from './pages/automation/AutomationPage';
import CaseStudiesPage from './pages/case-studies/CaseStudiesPage';
import SecretHivePage from './pages/secret-hive/SecretHivePage';
import DarkKitchenPage from './pages/dark-kitchen/DarkKitchenPage';
import LiveChat from './components/ui/LiveChat';
import BottomNav from './components/ui/BottomNav';
import CookieConsent from './components/ui/CookieConsent';
import HireMePopup from './components/ui/HireMePopup';
import SubmissionsDashboard from './components/admin/SubmissionsDashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Premium Background Effects */}
      <ThreeDSpace />
      <WaveRipple />
      <DropletBackground />
      
      {/* UI Elements */}
      <FloatingSidebars darkMode={darkMode} setDarkMode={setDarkMode} />
      <CookieConsent />
      <HireMePopup />
      <LiveChat />
      <InteractiveGreeting />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      <BrowserRouter>
        <BottomNav />
        <Header />
        <main className="relative z-10 pt-20">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Service Pages */}
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/fintech" element={<FintechPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            
            {/* Exclusive Pages */}
            <Route path="/secret-hive" element={<SecretHivePage />} />
            <Route path="/dark-kitchen" element={<DarkKitchenPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <SubmissionsDashboard onClose={() => setShowAdmin(false)} />
      )}
    </div>
  );
}

export default App;