
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legal from './components/Legal';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-black">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Legal />
        <Services />
        <Fleet />
        <Booking />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;
