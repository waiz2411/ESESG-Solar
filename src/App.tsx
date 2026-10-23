import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { CompliancePage } from './pages/CompliancePage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating Quick Action Contact Widget */}
        <FloatingWhatsApp />

        {/* Complete Regulatory & Base Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
