import React from 'react';
import { restaurantData } from '../data/restaurant';
import { Facebook, Instagram, Phone, MapPin, Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0c0e] border-t border-white/10 text-zinc-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Banner CTA */}
        <div className="bg-[#121216] border border-white/10 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold block mb-2">
              Culinary Reservation
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Your Table Awaits
            </h3>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] bg-[#d4af37] hover:bg-[#c5a028] transition-all flex items-center gap-2 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Now</span>
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="font-serif text-2xl font-bold text-white tracking-wider block mb-4">
              {restaurantData.name}
            </span>
            <p className="text-xs font-light leading-relaxed text-zinc-400 mb-6">
              {restaurantData.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={restaurantData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About Experience</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">Menu & Offerings</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4af37] transition-colors">Atmosphere</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">
              Contact Information
            </h4>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{restaurantData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${restaurantData.phone}`} className="hover:text-[#d4af37] transition-colors tabular-nums">
                  {restaurantData.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex justify-between">
                <span>Sat – Thu:</span>
                <span className="tabular-nums">12:00 PM – 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span className="tabular-nums">02:00 PM – 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-500">
          <p>© 2026 {restaurantData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed & Developed with care for Chattogram</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4af37] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
