import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { Menu } from './components/Menu';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { WhyZenTable } from './components/WhyZenTable';
import { Testimonials } from './components/Testimonials';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5] selection:bg-[#d4af37] selection:text-[#0c0c0e]">
      {/* Sticky Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenReservation={handleOpenReservation} />
        <About />
        <SignatureDishes onOpenMenu={() => {
          const menuEl = document.getElementById('menu');
          if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
        }} />
        <Menu />
        <Experience />
        <Gallery />
        <WhyZenTable />
        <Testimonials />
        <Reservation />
        <Location />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Reservation Modal Popup */}
      <Reservation isOpen={reservationModalOpen} onClose={handleCloseReservation} />
    </div>
  );
}
