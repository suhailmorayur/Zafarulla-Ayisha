import React from 'react';

/**
 * Tassel
 * Realistic hanging tassel attached directly beneath the wax seal.
 * Consists of an antique-gold metallic bell cap, connector loop, binding ring,
 * and numerous curved emerald green silk threads with pendulum physics swing animation.
 */
export const Tassel = ({ isSwinging = false }) => {
  return (
    <div
      className={`absolute top-[82%] left-1/2 -translate-x-1/2 pointer-events-none z-30 transition-transform ${
        isSwinging ? 'animate-tassel-swing' : ''
      }`}
      style={{ transformOrigin: 'top center' }}
    >
      <svg
        className="w-16 h-40 md:w-20 md:h-48 drop-shadow-[0_8px_12px_rgba(2,12,8,0.75)]"
        viewBox="0 0 60 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c5d19" />
            <stop offset="35%" stopColor="#fae29f" />
            <stop offset="65%" stopColor="#c59341" />
            <stop offset="100%" stopColor="#69430e" />
          </linearGradient>

          <linearGradient id="threadEmeraldDeep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#041810" />
            <stop offset="50%" stopColor="#0a3c2b" />
            <stop offset="100%" stopColor="#051f15" />
          </linearGradient>

          <linearGradient id="threadHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a6e4f" />
            <stop offset="50%" stopColor="#0d4632" />
            <stop offset="100%" stopColor="#051c13" />
          </linearGradient>
        </defs>

        {/* 1. Attachment Ring connecting to Wax Seal */}
        <ellipse cx="30" cy="6" rx="3.5" ry="5" stroke="url(#goldCapGrad)" strokeWidth="1.5" />

        {/* 2. Antique Gold Metallic Bell Cap / Connector */}
        <path
          d="M 23 9 C 23 8, 37 8, 37 9 L 40 18 C 40 21, 20 21, 20 18 Z"
          fill="url(#goldCapGrad)"
        />
        {/* Cap filigree detail ring */}
        <rect x="21" y="17" width="18" height="2" fill="#583709" rx="0.5" />
        <rect x="22" y="12" width="16" height="1" fill="#fdf0c7" opacity="0.6" />

        {/* 3. Gold Binding Band around tassel neck */}
        <ellipse cx="30" cy="28" rx="8.5" ry="3.5" fill="url(#goldCapGrad)" />
        <ellipse cx="30" cy="30" rx="8" ry="3" stroke="#714812" strokeWidth="1" />

        {/* 4. Upper Tassel Neck Cluster */}
        <path
          d="M 23 19 Q 20 25 22 29 Q 30 32 38 29 Q 40 25 37 19 Z"
          fill="url(#threadEmeraldDeep)"
        />

        {/* 5. Flowing Emerald Silk Threads (Individual curved lines) */}
        <g strokeLinecap="round">
          {/* Main body of silk threads */}
          <path d="M 22 30 Q 14 65 18 128" stroke="#041a12" strokeWidth="2.4" />
          <path d="M 24 31 Q 18 68 22 132" stroke="#093827" strokeWidth="2.2" />
          <path d="M 26 32 Q 22 75 25 136" stroke="#0f4935" strokeWidth="2" />
          <path d="M 28 32 Q 26 78 28 138" stroke="#145e43" strokeWidth="1.8" />
          
          {/* Center Highlight Threads */}
          <path d="M 30 32 Q 30 75 30 139" stroke="#1d7857" strokeWidth="1.6" />
          <path d="M 32 32 Q 34 78 32 138" stroke="#145e43" strokeWidth="1.8" />
          <path d="M 34 32 Q 38 75 35 136" stroke="#0f4935" strokeWidth="2" />
          <path d="M 36 31 Q 42 68 38 132" stroke="#093827" strokeWidth="2.2" />
          <path d="M 38 30 Q 46 65 42 128" stroke="#041a12" strokeWidth="2.4" />

          {/* Micro fine silky strands */}
          <path d="M 23 35 Q 16 80 19 122" stroke="#0e4331" strokeWidth="1.2" opacity="0.9" />
          <path d="M 27 34 Q 24 85 27 134" stroke="#196b4e" strokeWidth="1.1" opacity="0.9" />
          <path d="M 33 34 Q 36 85 33 134" stroke="#196b4e" strokeWidth="1.1" opacity="0.9" />
          <path d="M 37 35 Q 44 80 41 122" stroke="#0e4331" strokeWidth="1.2" opacity="0.9" />
          
          {/* Subtle gold metallic woven strand */}
          <path d="M 29 32 Q 31 72 29 135" stroke="url(#goldCapGrad)" strokeWidth="0.8" opacity="0.75" />
          <path d="M 31 32 Q 28 82 31 130" stroke="url(#goldCapGrad)" strokeWidth="0.8" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
