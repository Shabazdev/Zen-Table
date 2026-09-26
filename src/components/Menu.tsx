import React, { useState } from 'react';
import { restaurantData, MenuItem } from '../data/restaurant';
import { Sparkles, Flame, Leaf } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'starters', name: 'Starters & Dim Sum' },
    { id: 'sushi', name: 'Sushi & Sashimi' },
    { id: 'mains', name: 'Main Course' },
    { id: 'asian', name: 'Asian Wok & Curry' },
    { id: 'rice_noodles', name: 'Rice & Noodles' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
  ];

  const filteredItems = activeCategory === 'all'
    ? restaurantData.menuItems
    : restaurantData.menuItems.filter((item) => {
        if (activeCategory === 'starters') return item.category === 'starters';
        if (activeCategory === 'sushi') return item.category === 'sushi';
        if (activeCategory === 'mains') return item.category === 'mains';
        if (activeCategory === 'asian') return item.category === 'asian';
        if (activeCategory === 'rice_noodles') return item.category === 'rice_noodles';
        if (activeCategory === 'desserts') return item.category === 'desserts';
        if (activeCategory === 'beverages') return item.category === 'beverages';
        return true;
      });

  return (
    <section id="menu" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Offerings</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            The Zen Table Menu
          </h2>
          <p className="text-zinc-400 font-light text-sm lg:text-base">
            Crafted with passion, precision, and authentic Pan-Asian heritage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all rounded-none ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c0c0e] shadow-lg font-semibold'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group pb-6 border-b border-white/10 flex flex-col justify-between hover:border-[#d4af37]/50 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </h3>
                    {item.isSignature && (
                      <span className="bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 text-[10px] uppercase px-2 py-0.5 tracking-widest font-semibold">
                        Signature
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="flex items-center gap-1 text-emerald-400 text-[10px] uppercase tracking-wider">
                        <Leaf className="w-3 h-3" /> Veg
                      </span>
                    )}
                    {item.spicyLevel && item.spicyLevel > 0 && (
                      <span className="flex items-center gap-0.5 text-amber-500" title={`Spicy level ${item.spicyLevel}`}>
                        {Array.from({ length: item.spicyLevel }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-lg font-bold text-[#d4af37] tabular-nums whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs lg:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
