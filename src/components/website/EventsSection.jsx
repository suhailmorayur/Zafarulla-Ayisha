import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

/**
 * EventsSection
 * Displays celebratory itinerary cards for the Nikah Ceremony
 * and Royal Walima Banquet with elegant icons and timings.
 */
export const EventsSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
      <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-[#dfba73] mb-4 font-semibold">
        Wedding Itinerary
      </h3>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#faf7f0] mb-12">
        Sacred Events & Celebrations
      </h2>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left">
        {weddingConfig.events.map((event) => (
          <div
            key={event.id}
            className="relative p-8 rounded-[24px] border border-[#c59341]/40 bg-gradient-to-b from-[#06261c] to-[#041912] shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:border-[#dfba73] transition-colors"
          >
            {/* Corner Foil Accent */}
            <div className="absolute top-4 right-4 text-[#c59341]">
              <Sparkles className="w-5 h-5 opacity-70" />
            </div>

            <h4 className="font-playfair text-2xl font-bold text-[#fae29f] mb-3">
              {event.title}
            </h4>

            <p className="font-cormorant text-sm text-[#cbdad4] mb-6 leading-relaxed">
              {event.description}
            </p>

            {/* Event Metadata List */}
            <div className="space-y-3 pt-4 border-t border-[#c59341]/20">
              <div className="flex items-center gap-3 text-[#e6edea]">
                <Calendar className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span className="font-cinzel text-xs tracking-wider">{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-[#e6edea]">
                <Clock className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span className="font-cinzel text-xs tracking-wider">{event.time}</span>
              </div>
              <div className="flex items-center gap-3 text-[#e6edea]">
                <MapPin className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span className="font-cormorant text-sm">{event.location}</span>
              </div>
            </div>

            {/* Attire Note */}
            <div className="mt-6 pt-4 border-t border-[#c59341]/20">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#c59341] block">
                Dress Code
              </span>
              <span className="font-cormorant text-xs text-[#cbdad4] italic mt-0.5 block">
                {event.attire}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
