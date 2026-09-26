import React from 'react';
import { Sparkles, Award, UtensilsCrossed, Sparkle, HeartHandshake } from 'lucide-react';

export const WhyZenTable: React.FC = () => {
  const reasons = [
    {
      icon: UtensilsCrossed,
      title: "Authentic Pan-Asian Mastery",
      description: "Recipes refined across Japan, China, and Thailand, executed with precision by expert chefs.",
    },
    {
      icon: Sparkles,
      title: "Sophisticated Ambiance",
      description: "A tranquil sanctuary on Bayazid Bostami Road featuring minimalist Asian design and warm acoustics.",
    },
    {
      icon: Sparkle,
      title: "Hand-Crafted Ingredients",
      description: "From torch-seared truffle salmon to 24-hour tonkotsu broths, quality is never compromised.",
    },
    {
      icon: HeartHandshake,
      title: "Impeccable Hospitality",
      description: "Gracious, attentive service designed to make every dining occasion memorable and seamless.",
    },
  ];

  return (
    <section className="py-24 bg-[#121216] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Zen Distinction</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why Choose Zen Table
          </h2>
          <p className="text-zinc-400 font-light text-sm lg:text-base">
            Redefining Chattogram's fine dining standard through culinary dedication and serene elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c0c0e] border border-white/10 p-8 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-[#0c0c0e] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-400 text-xs lg:text-sm font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
