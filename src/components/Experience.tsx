import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/zen_table_interior_1790426269832.jpg"
          alt="Zen Table Experience"
          className="w-full h-full object-cover object-center fixed-bg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0c0c0e]/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atmosphere & Heritage</span>
        </div>

        <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          More Than a Meal
        </h2>

        <p className="max-w-3xl mx-auto text-zinc-300 font-light text-base md:text-lg mb-12 leading-relaxed">
          At Zen Table, dining transcends the plate. Every element—from the soothing acoustic rhythms and ambient pendant illumination to the thoughtful minimalism of our interior architecture—is curated to transport you to an oasis of culinary serenity in Chattogram.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-black/40 backdrop-blur-md p-8 border border-white/10 hover:border-[#d4af37]/50 transition-all">
            <div className="w-10 h-10 rounded-none bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Authentic Pan-Asian</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Master recipes sourced from Japanese izakayas, Cantonese dim sum houses, and Thai street kitchens.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-8 border border-white/10 hover:border-[#d4af37]/50 transition-all">
            <div className="w-10 h-10 rounded-none bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Uncompromising Quality</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Premium imported salmon, Wagyu beef, organic produce, and strict culinary hygiene standards.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-8 border border-white/10 hover:border-[#d4af37]/50 transition-all">
            <div className="w-10 h-10 rounded-none bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Exceptional Hospitality</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Attentive, gracious service tailored to make every family dinner or romantic evening unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
