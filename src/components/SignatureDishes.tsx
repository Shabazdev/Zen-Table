import React from 'react';
import { restaurantData } from '../data/restaurant';
import { Sparkles } from 'lucide-react';

interface SignatureDishesProps {
  onOpenMenu: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenMenu }) => {
  return (
    <section className="py-24 bg-[#121216] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Culinary Masterpieces</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white">
              A Taste Worth Remembering
            </h2>
          </div>
          <button
            onClick={onOpenMenu}
            className="mt-6 md:mt-0 text-xs font-semibold uppercase tracking-[0.15em] text-[#d4af37] hover:text-white transition-colors flex items-center gap-2 group"
          >
            <span>Explore Full Menu</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurantData.signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#0c0c0e] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#0c0c0e]/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#d4af37] tracking-wider uppercase border border-white/10">
                  {dish.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#d4af37] mb-2 font-medium">
                    {dish.category.toUpperCase()}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light mb-4">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
