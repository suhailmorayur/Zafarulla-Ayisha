import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * CoupleSection
 * Features Groom & Bride profile cards with Islamic arch silhouette frames,
 * custom portrait photos from weddingConfig (or initial monograms), and the Quranic verse.
 */
export const CoupleSection = () => {

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
      
      {/* Quranic Verse Banner */}
      <div className="max-w-3xl mx-auto mb-16 p-8 rounded-[22px] border border-[#c59341]/40 bg-[#051f16]/60 backdrop-blur-sm">
        <p className="font-amiri text-xl md:text-2xl text-[#fae29f] leading-loose mb-4">
          {weddingConfig.quranVerseArabic}
        </p>
        <p className="font-cormorant italic text-base md:text-lg text-[#e6edea] leading-relaxed mb-2">
          "{weddingConfig.quranVerseTranslation}"
        </p>
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#c59341] uppercase">
          {weddingConfig.quranVerseRef}
        </span>
      </div>

      {/* Section Title */}
      <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-[#dfba73] mb-12 font-semibold">
        The Blessed Couple
      </h3>

      {/* Couple Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* The Groom Card */}
        <div className="flex flex-col items-center p-8 rounded-[24px] border border-[#c59341]/40 bg-gradient-to-b from-[#06261c] to-[#041912] shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
          {/* Islamic Arch Photo Frame */}
          <div className="relative w-48 h-60 rounded-t-[90px] rounded-b-[16px] border-2 border-[#dfba73] overflow-hidden p-1 bg-[#03150e] shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <div className="w-full h-full rounded-t-[84px] rounded-b-[12px] overflow-hidden bg-gradient-to-b from-[#0e4432] to-[#07241a] flex flex-col items-center justify-center text-center">
              {weddingConfig.groomPhoto ? (
                <img
                  src={weddingConfig.groomPhoto}
                  alt={weddingConfig.groomName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <span className="font-cinzel text-4xl text-[#fae29f] font-bold">
                    {weddingConfig.groomName ? weddingConfig.groomName.charAt(0) : 'Z'}
                  </span>
                  <span className="font-cormorant italic text-xs text-[#b0c4bc] mt-2 px-2">
                    Portrait Photo
                  </span>
                </>
              )}
            </div>
          </div>

          <h4 className="font-playfair text-2xl font-bold text-[#faf7f0] mt-6 tracking-wide">
            {weddingConfig.groomName}
          </h4>
          <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#dfba73] mt-1">
            {weddingConfig.groomTitle}
          </p>
          <p className="font-cormorant text-sm text-[#cbdad4] mt-3 max-w-xs leading-relaxed">
            Son of honorable parents, stepping into this sacred union with gratitude, devotion, and profound joy.
          </p>
        </div>

        {/* The Bride Card */}
        <div className="flex flex-col items-center p-8 rounded-[24px] border border-[#c59341]/40 bg-gradient-to-b from-[#06261c] to-[#041912] shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
          {/* Islamic Arch Photo Frame */}
          <div className="relative w-48 h-60 rounded-t-[90px] rounded-b-[16px] border-2 border-[#dfba73] overflow-hidden p-1 bg-[#03150e] shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <div className="w-full h-full rounded-t-[84px] rounded-b-[12px] overflow-hidden bg-gradient-to-b from-[#0e4432] to-[#07241a] flex flex-col items-center justify-center text-center">
              {weddingConfig.bridePhoto ? (
                <img
                  src={weddingConfig.bridePhoto}
                  alt={weddingConfig.brideName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <span className="font-cinzel text-4xl text-[#fae29f] font-bold">
                    {weddingConfig.brideName ? weddingConfig.brideName.charAt(0) : 'A'}
                  </span>
                  <span className="font-cormorant italic text-xs text-[#b0c4bc] mt-2 px-2">
                    Portrait Photo
                  </span>
                </>
              )}
            </div>
          </div>

          <h4 className="font-playfair text-2xl font-bold text-[#faf7f0] mt-6 tracking-wide">
            {weddingConfig.brideName}
          </h4>
          <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#dfba73] mt-1">
            {weddingConfig.brideTitle}
          </p>
          <p className="font-cormorant text-sm text-[#cbdad4] mt-3 max-w-xs leading-relaxed">
            Daughter of honorable parents, entering a new chapter blessed with love, peace, and eternal togetherness.
          </p>
        </div>

      </div>
    </section>
  );
};
