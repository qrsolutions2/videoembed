import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SectorShowcase from './components/SectorShowcase';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import Extras from './components/Extras';
import Welcome from './components/Welcome';
import AssetSafetyManagement from './components/AssetSafety/AssetSafetyManagement';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to contact form
    const searchParams = new URLSearchParams(location.search);
    const scrollToContact = searchParams.get('scrollToContact');
    
    if (scrollToContact === 'true') {
      setTimeout(() => {
        const contactForm = document.getElementById('contact');
        if (contactForm) {
          const headerOffset = 80;
          const elementPosition = contactForm.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Welcome />
    <HowItWorks id="how-it-works" />
    <SectorShowcase id="sectors" />
    <Dashboard id="dashboard" />
    <Extras id="extras" />
    <FAQ id="faq" />
    <ContactForm id="contact" />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <ScrollToTop />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/asset-safety" element={<AssetSafetyManagement />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;