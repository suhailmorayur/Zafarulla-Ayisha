import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { MapPin, Navigation, Compass } from 'lucide-react';

/**
 * VenueSection
 * Elegant location overview with venue name, address, and interactive
 * Google Maps directions button.
 */
export const VenueSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
      <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-[#dfba73] mb-4 font-semibold">
        The Destination
      </h3>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#faf7f0] mb-12">
        Venue & Location
      </h2>

      <div className="relative p-8 md:p-12 rounded-[28px] border border-[#c59341]/50 bg-gradient-to-b from-[#06291e] to-[#031710] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Decorative Compass Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-[#dfba73] flex items-center justify-center bg-[#083627] text-[#fae29f] shadow-[0_0_15px_rgba(212,170,92,0.3)]">
          <Compass className="w-7 h-7 animate-spin-slow" />
        </div>

        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#fae29f] mb-3">
          {weddingConfig.venueName}
        </h3>

        <div className="flex items-center justify-center gap-2 text-[#cbdad4] max-w-lg mx-auto mb-8">
          <MapPin className="w-4 h-4 text-[#dfba73] shrink-0" />
          <p className="font-cormorant text-base md:text-lg">
            {weddingConfig.venueAddress}
          </p>
        </div>

        {/* Get Directions Button */}
        <a
          href={weddingConfig.venueMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#fae29f] bg-gradient-to-r from-[#8c5d19] via-[#c59341] to-[#8c5d19] text-[#03150e] font-cinzel text-xs uppercase tracking-[0.25em] font-bold shadow-[0_6px_20px_rgba(197,147,65,0.4)] hover:brightness-110 active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 fill-current" />
          Get Directions
        </a>
      </div>
    </section>
  );
};
