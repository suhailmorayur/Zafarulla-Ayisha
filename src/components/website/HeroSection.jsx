import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * HeroSection
 * Regal Islamic arch framing the bride & groom names, wedding date,
 * Arabic calligraphy, and subtle floating golden particles.
 */
export const HeroSection = () => {

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0c4733]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Grand Islamic Moorish Arch Frame */}
      <div className="relative z-10 w-full max-w-2xl px-6 py-12 md:py-16 rounded-[28px] border border-[#c59341]/50 bg-[#051f16]/70 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        
        {/* Arch Corner Accents */}
        <div className="absolute -top-2.5 -left-2.5 w-5 h-5 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />
        <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />
        <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />

        {/* Inset Dashed Gold Border */}
        <div className="absolute inset-3 border border-dashed border-[#dfba73]/35 rounded-[22px] pointer-events-none" />

        {/* Top Islamic Bismillah */}
        <div className="mb-4">
          <p className="font-amiri text-2xl md:text-4xl text-[#dfba73] tracking-wide leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {weddingConfig.bismillahArabic}
          </p>
          <p className="font-cormorant uppercase text-xs md:text-sm tracking-[0.25em] text-[#d4c39e] mt-1">
            {weddingConfig.bismillahEnglish}
          </p>
        </div>

        {/* Small Gold Finial Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c59341]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#fae29f] bg-[#8c5d19]" />
          <span className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c59341]" />
        </div>

        {/* Couple Names */}
        <div className="my-6">
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-[#dfba73] font-medium block mb-2">
            The Wedding Celebration of
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-[#faf7f0] leading-tight drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
            {weddingConfig.groomName}
          </h1>

          <div className="flex items-center justify-center gap-4 my-3">
            <span className="w-12 h-[1px] bg-[#c59341]/60" />
            <span className="font-playfair italic text-2xl md:text-3xl text-[#fae29f] font-normal">
              &
            </span>
            <span className="w-12 h-[1px] bg-[#c59341]/60" />
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-[#faf7f0] leading-tight drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
            {weddingConfig.brideName}
          </h1>
        </div>

        {/* Wedding Date Pill */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#c59341] bg-gradient-to-r from-[#072d20] via-[#0b3d2b] to-[#072d20] shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            <span className="font-cinzel text-sm md:text-base font-semibold tracking-[0.3em] text-[#fae29f]">
              {weddingConfig.weddingDateDisplay}
            </span>
          </div>
          <p className="font-cormorant italic text-base md:text-lg text-[#d5e0dc] mt-2">
            {weddingConfig.weddingDay} • {weddingConfig.weddingTime}
          </p>
        </div>

      </div>
    </section>
  );
};
