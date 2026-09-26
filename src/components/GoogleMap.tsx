import React from 'react';
import { ExternalLink } from 'lucide-react';

export const GoogleMap: React.FC = () => {
  const mapUrl = "https://www.google.com/maps?q=Zen%20Table%2C%20Chattogram%2C%20Bangladesh&output=embed";
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Zen%20Table%2C%20Chattogram%2C%20Bangladesh";

  return (
    <div className="w-full bg-[#0c0c0e] border border-white/10 relative overflow-hidden shadow-xl flex flex-col rounded-2xl">
      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 text-xs text-white rounded-lg">
        <span className="text-[#d4af37] font-semibold">Bayazid Bostami Road</span>, Chattogram
      </div>
      <iframe
        title="Zen Table location on Google Maps"
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        className="w-full h-full min-h-[450px] filter invert contrast-125 opacity-85"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-6 right-6 z-10">
        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-[#d4af37] text-[#0c0c0e] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-[#c5a028] transition-all rounded-lg"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
