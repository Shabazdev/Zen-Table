import React from 'react';
import { restaurantData } from '../data/restaurant';
import { Sparkles, Utensils, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/src/assets/images/zen_table_interior_1790426269832.jpg"
                alt="Zen Table Interior Ambience"
                className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#d4af37]/30 z-0 hidden sm:block" />
          </div>

          {/* Right: Story & Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Zen Table Experience</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Where Flavor Meets Serenity
            </h2>

            <p className="text-zinc-300 font-light text-base lg:text-lg mb-6 leading-relaxed">
              Nestled on the 5th Floor of Innovative Bhuiyan Orchid along Bayazid Bostami Road, Zen Table is Chattogram’s premier destination for discerning palates seeking authentic yet inventive Pan-Asian gastronomy.
            </p>

            <p className="text-zinc-400 font-light text-sm lg:text-base mb-8 leading-relaxed">
              We curate a multi-sensory journey blending Japanese precision, Cantonese warmth, and Thai vibrance. Every dish is meticulously prepared using premium imported ingredients and master techniques in an atmosphere designed to quiet the mind and elevate the senses.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {restaurantData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#d4af37] tabular-nums mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
