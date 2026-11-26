import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * InvitationCard
 * Minimalist luxury ivory & antique-gold invitation card.
 * Uncluttered and spacious design focusing purely on:
 * 1. Hanging gold lantern & Arabic Bismillah calligraphy
 * 2. Majestic Groom Name & Bride Name with cinematic reveal
 * 3. Beating gold heart & love connector
 * 4. Elegant "Open Invitation →" action
 */
export const InvitationCard = ({
  stage = 'closed',
  showGroom = false,
  showBride = false,
  showDate = false,
  onProceedToWebsite,
}) => {
  const isRisingOrHigher = ['rising', 'risen', 'revealing', 'revealed', 'zooming'].includes(stage);
  const isZooming = stage === 'zooming';

  return (
    <div
      className={`absolute inset-x-3 top-3 bottom-3 md:inset-x-4 md:top-4 md:bottom-4 rounded-[18px] transition-all duration-[1000ms] pointer-events-auto overflow-hidden flex flex-col justify-between ${
        isZooming ? 'scale-[2.4] opacity-0' : ''
      }`}
      style={{
        transformOrigin: 'center 40%',
        transform: isZooming
          ? 'scale(2.2) translateY(-40px)'
          : isRisingOrHigher
          ? 'translateY(-12px) scale(1.02)'
          : 'translateY(72px) scale(0.96)',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        backgroundColor: '#faf7f0',
        backgroundImage: 'radial-gradient(circle at 50% 35%, #ffffff 0%, #f7f1e1 80%, #ede3cc 100%)',
        boxShadow: isRisingOrHigher
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 25px rgba(212, 170, 92, 0.25)'
          : '0 10px 25px rgba(2, 10, 7, 0.6)',
        willChange: 'transform, opacity',
      }}
    >
      {/* Antique Gold Inset Double Borders */}
      <div className="absolute inset-2 md:inset-3 border border-[#c59341]/60 rounded-[14px] pointer-events-none" />
      <div className="absolute inset-3.5 md:inset-5 border border-dashed border-[#dfba73]/45 rounded-[12px] pointer-events-none" />

      {/* Subtle Moorish Islamic Arch Silhouette on Paper */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]"
        viewBox="0 0 480 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 580 L 50 200 C 50 110, 150 40, 240 20 C 330 40, 430 110, 430 200 L 430 580"
          stroke="#c59341"
          strokeWidth="1.2"
        />
        <path
          d="M 62 580 L 62 205 C 62 120, 155 55, 240 38 C 325 55, 418 120, 418 205 L 418 580"
          stroke="#c59341"
          strokeWidth="0.8"
          strokeDasharray="3 3"
        />
      </svg>

      {/* ================= 1. TOP: BISMILLAH & LANTERN ================= */}
      <div className="relative z-10 w-full flex flex-col items-center pt-5 md:pt-7">
        {/* Hanging Islamic Lantern */}
        <div className="mb-1">
          <svg
            className="w-8 h-12 md:w-10 md:h-15 text-[#dfba73] animate-lantern-glow"
            viewBox="0 0 50 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lanternGradClean" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8c5d19" />
                <stop offset="50%" stopColor="#fae29f" />
                <stop offset="100%" stopColor="#8c5d19" />
              </linearGradient>
              <radialGradient id="lanternGlowClean" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff2b2" stopOpacity="1" />
                <stop offset="60%" stopColor="#f7bc48" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
            </defs>

            <line x1="25" y1="0" x2="25" y2="20" stroke="url(#lanternGradClean)" strokeWidth="1.2" strokeDasharray="2 1.5" />
            <circle cx="25" cy="20" r="2.5" fill="#fae29f" stroke="#8c5d19" strokeWidth="0.8" />

            <path d="M 17 26 C 17 21, 33 21, 33 26 L 36 32 L 14 32 Z" fill="url(#lanternGradClean)" />
            <path d="M 24 16 C 24 14, 26 14, 26 16 C 26 18, 24 18, 24 16 Z" fill="#fae29f" />

            <rect x="15" y="32" width="20" height="24" rx="2" fill="url(#lanternGlowClean)" />
            <rect x="15" y="32" width="20" height="24" rx="2" stroke="url(#lanternGradClean)" strokeWidth="1.2" />

            <line x1="21" y1="32" x2="21" y2="56" stroke="url(#lanternGradClean)" strokeWidth="0.9" />
            <line x1="29" y1="32" x2="29" y2="56" stroke="url(#lanternGradClean)" strokeWidth="0.9" />
            <line x1="15" y1="44" x2="35" y2="44" stroke="url(#lanternGradClean)" strokeWidth="0.9" />

            <path d="M 14 56 L 36 56 L 32 62 L 18 62 Z" fill="url(#lanternGradClean)" />
            <circle cx="25" cy="65" r="2" fill="#fae29f" />
          </svg>
        </div>

        {/* Arabic Bismillah Calligraphy */}
        <div className="font-amiri text-2xl sm:text-3xl md:text-4xl text-[#0b3829] tracking-wide leading-tight">
          {weddingConfig.bismillahArabic}
        </div>
      </div>

      {/* ================= 2. CENTER: COUPLE NAMES & ANIMATION ================= */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto px-4 py-6">
        
        {/* GROOM NAME */}
        {showGroom && (
          <div className="animate-name-reveal text-center w-full">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#06241a] drop-shadow-[0_2px_10px_rgba(212,170,92,0.35)]">
              {weddingConfig.groomName}
            </h2>
          </div>
        )}

        {/* LOVE CONNECTOR & BEATING GOLD HEART */}
        {showGroom && showBride && (
          <div className="flex items-center justify-center gap-4 my-2.5">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#c59341]" />
            <span className="animate-heart-gold text-[#c59341] text-lg sm:text-xl inline-block">
              ♡
            </span>
            <span className="font-playfair italic text-2xl sm:text-3xl text-[#b8852c] font-semibold">
              &
            </span>
            <span className="animate-heart-gold text-[#c59341] text-lg sm:text-xl inline-block">
              ♡
            </span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#c59341]" />
          </div>
        )}

        {/* BRIDE NAME */}
        {showBride && (
          <div className="animate-name-reveal text-center w-full will-change-transform">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#06241a] drop-shadow-[0_2px_8px_rgba(212,170,92,0.3)]">
              {weddingConfig.brideName}
            </h2>
          </div>
        )}

      </div>

      {/* ================= 3. BOTTOM: MINIMAL ACTION BUTTON ================= */}
      <div className="relative z-10 w-full flex flex-col items-center pb-6 md:pb-8">
        {showDate && (
          <button
            onClick={onProceedToWebsite}
            className="px-7 py-2.5 rounded-full border border-[#c59341] bg-gradient-to-r from-[#072a1e] via-[#0f4b36] to-[#072a1e] text-[#fae29f] font-cinzel text-xs uppercase tracking-[0.25em] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer animate-fade-in"
          >
            Open Invitation →
          </button>
        )}
      </div>

    </div>
  );
};
