import React, { useState } from 'react';
import { restaurantData, GalleryItem } from '../data/restaurant';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Food', 'Interior', 'Ambience', 'Events'];

  const filteredGallery = activeTab === 'All'
    ? restaurantData.gallery
    : restaurantData.gallery.filter((item) => item.category === activeTab);

  const currentIndex = selectedImage ? restaurantData.gallery.findIndex(i => i.id === selectedImage.id) : 0;

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + restaurantData.gallery.length) % restaurantData.gallery.length;
    setSelectedImage(restaurantData.gallery[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % restaurantData.gallery.length;
    setSelectedImage(restaurantData.gallery[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Gallery of Moments
          </h2>
          <p className="text-zinc-400 font-light text-sm lg:text-base">
            Explore the sophisticated ambience and exquisite dishes of Zen Table.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 text-xs font-medium uppercase tracking-wider transition-all rounded-none ${
                activeTab === cat
                  ? 'bg-[#d4af37] text-[#0c0c0e] font-semibold shadow-lg'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 z-50 bg-black/50 border border-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-zinc-400 hover:text-white p-3 bg-black/50 border border-white/10 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-zinc-400 hover:text-white p-3 bg-black/50 border border-white/10 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto object-contain border border-white/10 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-1 block">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
