import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0e]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Title */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl lg:text-3xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
            {restaurantData.name}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${restaurantData.phone}`}
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="tabular-nums">{restaurantData.phone}</span>
          </a>
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] bg-[#d4af37] hover:bg-[#c5a028] transition-all rounded-none shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-200 hover:text-[#d4af37] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl tracking-wide text-zinc-200 hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4 items-center">
              <a
                href={`tel:${restaurantData.phone}`}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="tabular-nums">{restaurantData.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-[#0c0c0e] bg-[#d4af37] hover:bg-[#c5a028] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
