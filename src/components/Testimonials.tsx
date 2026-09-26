import React, { useState } from 'react';
import { restaurantData } from '../data/restaurant';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = restaurantData.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Guest Reflections</span>
        </div>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-16">
          Loved by Chattogram
        </h2>

        {/* Testimonial Card */}
        <div className="bg-[#121216] border border-white/10 p-8 md:p-16 relative shadow-2xl">
          <Quote className="w-12 h-12 text-[#d4af37]/20 absolute top-8 left-8" />
          
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>

          <p className="font-serif text-xl md:text-2xl text-zinc-200 italic mb-8 leading-relaxed max-w-3xl mx-auto">
            "{current.quote}"
          </p>

          <div className="flex flex-col items-center">
            <h4 className="font-serif text-lg font-bold text-white mb-1">{current.author}</h4>
            <span className="text-xs uppercase tracking-wider text-[#d4af37]">{current.role}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="p-3 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-[#d4af37] transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-zinc-400 tabular-nums">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-[#d4af37] transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
