import React from 'react';
import { restaurantData } from '../data/restaurant';
import { MapPin, Phone, Mail, Clock, ExternalLink, Facebook, Instagram, Sparkles } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121216] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visit Zen Table</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Location & Hours
          </h2>
          <p className="text-zinc-400 font-light text-sm lg:text-base">
            Find us in the heart of Chattogram for an unforgettable culinary evening.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact & Hours Info */}
          <div className="lg:col-span-5 bg-[#0c0c0e] border border-white/10 p-8 md:p-10 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Zen Table Chattogram</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">Address</h4>
                  <p className="text-zinc-200 text-sm font-light leading-relaxed">
                    {restaurantData.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">Phone & WhatsApp</h4>
                  <a href={`tel:${restaurantData.phone}`} className="text-zinc-200 text-sm font-medium hover:text-[#d4af37] transition-colors tabular-nums">
                    {restaurantData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">Email Inquiries</h4>
                  <a href={`mailto:${restaurantData.email}`} className="text-zinc-200 text-sm font-medium hover:text-[#d4af37] transition-colors">
                    {restaurantData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-6 border-t border-white/10 mb-8">
              <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] mb-4 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </h4>
              <ul className="space-y-2">
                {restaurantData.openingHours.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-medium text-zinc-400">{item.day}</span>
                    <span className="tabular-nums font-light">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <a
                href={restaurantData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Facebook className="w-4 h-4 text-[#d4af37]" />
                <span>Facebook</span>
              </a>
              <a
                href={restaurantData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#d4af37]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right: Google Maps Mock / Embed */}
          <div className="lg:col-span-7 h-[550px] bg-[#0c0c0e] border border-white/10 relative overflow-hidden shadow-xl flex flex-col">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 text-xs text-white">
              <span className="text-[#d4af37] font-semibold">Bayazid Bostami Road</span>, Chattogram
            </div>
            <iframe
              title="Zen Table Location Map"
              src={restaurantData.mapEmbedUrl}
              className="w-full h-full border-0 filter invert contrast-125 opacity-80"
              loading="lazy"
            />
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="https://maps.google.com/?q=Innovative+Bhuiyan+Orchid+Bayazid+Bostami+Road+Chattogram"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#d4af37] text-[#0c0c0e] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-[#c5a028] transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
