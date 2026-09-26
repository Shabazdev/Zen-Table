import React from 'react';
import { ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/zen_table_hero_1790426234541.jpg"
          alt="Zen Table Restaurant Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          <span>Pan-Asian Fine Dining · Chattogram</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] text-wrap">
          A Journey Through <br />
          <span className="italic text-[#d4af37]">Asian Flavors</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 font-light mb-10 leading-relaxed">
          {restaurantData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0c0c0e] bg-[#d4af37] hover:bg-[#c5a028] transition-all flex items-center justify-center gap-3 shadow-lg hover:translate-y-[-2px]"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-3 hover:translate-y-[-2px]"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Reserve a Table</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-400">
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
      </div>
    </section>
  );
};
