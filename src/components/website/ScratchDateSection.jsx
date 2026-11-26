import React, { useState } from 'react';
import { LoveHeartScratch } from '../envelope/LoveHeartScratch';
import { weddingConfig } from '../../config/weddingConfig';
import { Heart, Sparkles } from 'lucide-react';

/**
 * ScratchDateSection
 * Dedicated interactive love-shaped scratch card section in the main website.
 * Allows guests to scratch the golden heart to reveal the blessed wedding date
 * and a heartfelt personal note from the bride & groom.
 */
export const ScratchDateSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
      {/* Section Title & Subtitle */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-[#c59341] fill-[#c59341]" />
          <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.35em] text-[#dfba73] font-semibold">
            Interactive Love Card
          </h3>
          <Heart className="w-4 h-4 text-[#c59341] fill-[#c59341]" />
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#faf7f0] mb-3">
          Scratch To Reveal Our Date
        </h2>
        <p className="font-cormorant italic text-base md:text-lg text-[#cbdad4] max-w-md mx-auto">
          Rub or scratch the golden heart with love to reveal our blessed wedding date & personal invitation note.
        </p>
      </div>

      {/* Love Heart Scratch Card Container */}
      <div className="relative p-8 md:p-12 rounded-[28px] border border-[#c59341]/50 bg-gradient-to-b from-[#06291e] to-[#031710] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center">
        
        {/* The Heart-Shaped Scratch Card */}
        <LoveHeartScratch
          onRevealed={() => setIsRevealed(true)}
          isAlreadyRevealed={isRevealed}
        />

        {/* Revealed Personal Note from the Couple */}
        <div
          className={`mt-6 max-w-lg transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden'
          }`}
        >
          <div className="p-6 rounded-[20px] border border-[#c59341]/40 bg-[#072d21]/70 backdrop-blur-sm shadow-inner">
            <div className="flex items-center justify-center gap-2 text-[#fae29f] mb-3">
              <Sparkles className="w-4 h-4 text-[#c59341]" />
              <span className="font-cinzel text-xs uppercase tracking-[0.25em] font-semibold">
                A Note From The Couple
              </span>
              <Sparkles className="w-4 h-4 text-[#c59341]" />
            </div>

            <p className="font-cormorant italic text-base md:text-lg text-[#faf7f0] leading-relaxed">
              "{weddingConfig.personalNote || 'With joyful hearts and the blessings of our beloved parents, we invite you to share in this sacred milestone of our lives. Your prayers and presence will bring immense barakah to our union.'}"
            </p>

            <div className="mt-4 font-playfair font-bold text-sm md:text-base text-[#dfba73] tracking-wider">
              {weddingConfig.groomName} & {weddingConfig.brideName}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
