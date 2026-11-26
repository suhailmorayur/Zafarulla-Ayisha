import React from 'react';
import { HeroSection } from './HeroSection';
import { CountdownTimer } from './CountdownTimer';
import { ScratchDateSection } from './ScratchDateSection';
import { CoupleSection } from './CoupleSection';
import { EventsSection } from './EventsSection';
import { VenueSection } from './VenueSection';
import { GallerySection } from './GallerySection';
import { FooterSection } from './FooterSection';
import { FadeInSection } from '../common/FadeInSection';

/**
 * WeddingWebsite
 * The full wedding celebration experience rendered after the envelope zoom.
 * Every section smoothly fades and glides upward as the guest scrolls down.
 */
export const WeddingWebsite = ({ onReplayInvitation }) => {
  return (
    <div className="w-full min-h-screen bg-[#041510] text-[#f2ebd9] flex flex-col items-center transition-colors duration-1000">
      
      {/* Top Floating Replay Banner / Action */}
      <div className="w-full flex justify-end p-4 md:p-6">
        <button
          onClick={onReplayInvitation}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c59341]/60 bg-[#06241b]/80 text-[#dfba73] hover:text-[#fae29f] hover:border-[#fae29f] font-cinzel text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          <span>✉</span> Re-open Envelope
        </button>
      </div>

      {/* 1. Hero Section */}
      <FadeInSection className="w-full flex justify-center">
        <HeroSection />
      </FadeInSection>



    {/* 6. Venue & Directions */}
      <FadeInSection className="w-full flex justify-center">
        <VenueSection />
      </FadeInSection>

  {/* 4. Couple Section with Quranic Verse */}
      <FadeInSection className="w-full flex justify-center">
        <CoupleSection />
      </FadeInSection>


      {/* 2. Interactive Love-Shaped Scratch Card Section */}
      <FadeInSection className="w-full flex justify-center">
        <ScratchDateSection />
      </FadeInSection>



      {/* 3. Countdown Timer */}
      <FadeInSection className="w-full flex justify-center">
        <CountdownTimer />
      </FadeInSection>

    

      {/* 5. Events & Itinerary
      <FadeInSection className="w-full flex justify-center">
        <EventsSection />
      </FadeInSection> */}

  

      {/* 7. Gallery Section */}
      <FadeInSection className="w-full flex justify-center">
        <GallerySection />
      </FadeInSection>

      {/* 8. Footer Section */}
      <FadeInSection className="w-full">
        <FooterSection onReplayInvitation={onReplayInvitation} />
      </FadeInSection>

    </div>
  );
};
