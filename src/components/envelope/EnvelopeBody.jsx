import React from 'react';
import { IslamicCornerPatterns } from './IslamicCornerPatterns';
import { CentralArch } from './CentralArch';
import { BotanicalFlorals } from './BotanicalFlorals';

/**
 * EnvelopeBody
 * The master physical 4:5 portrait envelope structure.
 * Consists of:
 * 1. Deep emerald textured interior back wall (GPU-accelerated CSS grain)
 * 2. Card chamber where the invitation card resides
 * 3. Front pocket with double gold borders, arch, and florals that
 *    smoothly fades and slides away once the card ascends.
 */
export const EnvelopeBody = ({ children, hidePocket = false }) => {
  return (
    <div
      className="relative w-full aspect-[4/5] rounded-[20px] shadow-[0_25px_60px_rgba(1,10,7,0.85)] select-none border border-[#c59341]/60 bg-[#041a12]"
      style={{
        perspective: '1200px',
      }}
    >
      {/* ================= 1. INTERIOR BACK WALL ================= */}
      <div
        className="absolute inset-0 rounded-[20px] overflow-hidden transition-opacity duration-700"
        style={{
          backgroundColor: '#041c14',
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(13, 60, 44, 0.4) 0%, rgba(3, 18, 12, 0.95) 80%),
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.012) 0px, rgba(255, 255, 255, 0.012) 1px, transparent 1px, transparent 4px)
          `,
        }}
      >
        {/* Subtle interior gold rim */}
        <div className="absolute inset-2 border border-[#c59341]/30 rounded-[16px] pointer-events-none" />
      </div>

      {/* ================= 2. CARD CHAMBER ================= */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        {children}
      </div>

      {/* ================= 3. FRONT POCKET ================= */}
      {/* Covers lower half when closed; slides down & fades out instantly when card pops up */}
      <div
        className={`absolute inset-x-0 bottom-0 top-[35%] z-20 rounded-b-[20px] overflow-hidden pointer-events-none transition-all duration-700 ease-out ${
          hidePocket
            ? 'opacity-0 translate-y-16 scale-[0.98] pointer-events-none'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
        style={{
          backgroundColor: '#062319',
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(19, 78, 58, 0.5) 0%, rgba(5, 30, 22, 0.95) 75%),
            radial-gradient(circle at 20% 80%, rgba(13, 60, 44, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(13, 60, 44, 0.35) 0%, transparent 60%),
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.015) 0px, rgba(255, 255, 255, 0.015) 1px, transparent 1px, transparent 4px)
          `,
          boxShadow: '0 -6px 20px rgba(1,10,7,0.6)',
          willChange: 'transform, opacity',
        }}
      >
        {/* Top Collar Gold Lip Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#8c5d19] via-[#fae29f] to-[#8c5d19] shadow-[0_1px_4px_rgba(250,226,159,0.5)]" />

        {/* Double Antique Gold Foil Inset Borders */}
        <div className="absolute inset-2 md:inset-2.5 border border-[#dfba73]/75 rounded-b-[16px] pointer-events-none">
          {/* Bottom Corner Diamond Foil Accents */}
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rotate-45 bg-gradient-to-br from-[#fae29f] to-[#8c5d19] border border-[#fae29f]" />
        </div>
        <div className="absolute inset-3.5 md:inset-4 border border-dashed border-[#c59341]/40 rounded-b-[12px] pointer-events-none" />

        {/* Lower Central Islamic / Moorish Pointed Arch Outline */}
        <CentralArch />

        {/* Botanical Floral Vector Decoration & Blurred Foreground Leaves */}
        <BotanicalFlorals />

        {/* Ambient Moving Gold Light Sheen */}
        <div className="absolute inset-0 pointer-events-none animate-gold-shimmer mix-blend-screen opacity-15" />
      </div>

      {/* Embossed Islamic Corner Patterns on Envelope Upper Corners */}
      <div
        className={`transition-opacity duration-700 ${
          hidePocket ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <IslamicCornerPatterns />
      </div>
    </div>
  );
};
