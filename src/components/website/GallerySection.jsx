import React, { useState } from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { X, Sparkles, Eye } from 'lucide-react';

/**
 * GallerySection
 * Luxury wedding photo gallery reading directly from weddingConfig.gallery.
 * Displays photo if image path/URL is specified, or artistic placeholder.
 */
export const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const galleryItems = weddingConfig.gallery || [];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
      <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-[#dfba73] mb-4 font-semibold">
        Cherished Moments
      </h3>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#faf7f0] mb-12">
        Wedding Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative h-80 rounded-[20px] overflow-hidden border border-[#c59341]/40 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fae29f]"
          >
            {item.image ? (
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption || item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03150e]/90 via-transparent to-transparent flex flex-col justify-end p-4 text-center">
                  <span className="font-cinzel text-xs uppercase tracking-widest text-[#dfba73]">
                    {item.category}
                  </span>
                  <p className="font-cormorant italic text-base text-[#e6edea] mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ) : (
              /* Artistic Placeholder Background */
              <div
                className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105`}
              >
                {/* Islamic Arch Cutout Motif */}
                <div className="w-20 h-28 rounded-t-full border border-[#c59341]/50 flex items-center justify-center mb-4 bg-[#03150e]/40">
                  <Sparkles className="w-6 h-6 text-[#fae29f] opacity-80" />
                </div>
                <span className="font-cinzel text-xs uppercase tracking-widest text-[#dfba73]">
                  {item.category}
                </span>
                <p className="font-cormorant italic text-base text-[#e6edea] mt-1">
                  {item.caption}
                </p>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#03150e]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#fae29f] bg-[#072a1e] text-[#fae29f] font-cinzel text-xs uppercase tracking-widest">
                <Eye className="w-3.5 h-3.5" /> View
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full p-6 rounded-[24px] border border-[#c59341] bg-[#06241b] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-[#fae29f] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedPhoto.image ? (
              <div className="w-full h-80 rounded-[18px] overflow-hidden mb-6 border border-[#c59341]/40">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption || selectedPhoto.category}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`w-full h-80 rounded-[18px] bg-gradient-to-br ${selectedPhoto.color} flex flex-col items-center justify-center mb-6 border border-[#c59341]/40`}
              >
                <Sparkles className="w-10 h-10 text-[#fae29f] mb-3" />
                <span className="font-cinzel text-sm uppercase tracking-widest text-[#dfba73]">
                  {selectedPhoto.category}
                </span>
              </div>
            )}

            <h4 className="font-playfair text-2xl font-bold text-[#faf7f0] mb-2">
              {selectedPhoto.caption}
            </h4>
            <p className="font-cormorant italic text-sm text-[#cbdad4]">
              {selectedPhoto.category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
