import React from 'react';

/**
 * IslamicCornerPatterns
 * Handcrafted SVG geometric patterns featuring eight-point stars (Rub el Hizb),
 * interlocking arabesque motifs, and dual embossed highlights in deep emerald & antique gold.
 */
export const IslamicCornerPatterns = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px] z-10">
      {/* Top Left Corner Pattern */}
      <svg
        className="absolute top-0 left-0 w-36 h-36 md:w-44 md:h-44 text-[#dfba73]"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldCornerGradTL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae29f" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#c59341" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8c5d19" stopOpacity="0.6" />
          </linearGradient>
          <filter id="embossFilterTL" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.8" dy="1" stdDeviation="0.8" floodColor="#020f0a" floodOpacity="0.9" />
            <feDropShadow dx="-0.5" dy="-0.5" stdDeviation="0.6" floodColor="#1a634a" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#embossFilterTL)">
          {/* Outer Corner Frame */}
          <path
            d="M 12 60 L 12 12 L 60 12"
            stroke="url(#goldCornerGradTL)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 18 48 L 18 18 L 48 18"
            stroke="url(#goldCornerGradTL)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            strokeLinecap="round"
          />

          {/* Central 8-Point Star at (40, 40) */}
          <g transform="translate(38, 38)">
            {/* Square 1 */}
            <rect
              x="-14"
              y="-14"
              width="28"
              height="28"
              fill="rgba(4, 25, 18, 0.4)"
              stroke="url(#goldCornerGradTL)"
              strokeWidth="1.2"
            />
            {/* Square 2 rotated 45 deg */}
            <rect
              x="-14"
              y="-14"
              width="28"
              height="28"
              transform="rotate(45)"
              fill="rgba(4, 25, 18, 0.4)"
              stroke="url(#goldCornerGradTL)"
              strokeWidth="1.2"
            />
            {/* Inner octagon */}
            <circle cx="0" cy="0" r="8" stroke="url(#goldCornerGradTL)" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="3" fill="#c59341" opacity="0.8" />
          </g>

          {/* Interlocking Arabesque Radiating Geometry */}
          <path
            d="M 38 66 L 38 90 L 52 104 L 76 104"
            stroke="url(#goldCornerGradTL)"
            strokeWidth="0.9"
            fill="none"
          />
          <path
            d="M 66 38 L 90 38 L 104 52 L 104 76"
            stroke="url(#goldCornerGradTL)"
            strokeWidth="0.9"
            fill="none"
          />
          <path
            d="M 52 52 L 80 80 L 110 80"
            stroke="url(#goldCornerGradTL)"
            strokeWidth="0.75"
            strokeDasharray="3 2"
          />

          {/* Secondary Mini 8-Point Star at (96, 26) */}
          <g transform="translate(92, 26) scale(0.55)">
            <rect x="-12" y="-12" width="24" height="24" stroke="url(#goldCornerGradTL)" strokeWidth="1.5" />
            <rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" stroke="url(#goldCornerGradTL)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#c59341" />
          </g>

          {/* Secondary Mini 8-Point Star at (26, 96) */}
          <g transform="translate(26, 92) scale(0.55)">
            <rect x="-12" y="-12" width="24" height="24" stroke="url(#goldCornerGradTL)" strokeWidth="1.5" />
            <rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" stroke="url(#goldCornerGradTL)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#c59341" />
          </g>

          {/* Embossed Emerald Background Fill Details */}
          <path
            d="M 26 26 Q 38 16 50 26 Q 60 38 50 50 Q 38 60 26 50 Z"
            stroke="#134e3a"
            strokeWidth="1"
            opacity="0.6"
            fill="none"
          />
        </g>
      </svg>

      {/* Top Right Corner Pattern (Mirrored) */}
      <svg
        className="absolute top-0 right-0 w-36 h-36 md:w-44 md:h-44 text-[#dfba73] transform scale-x-[-1]"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldCornerGradTR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae29f" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#c59341" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8c5d19" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <g filter="url(#embossFilterTL)">
          <path
            d="M 12 60 L 12 12 L 60 12"
            stroke="url(#goldCornerGradTR)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 18 48 L 18 18 L 48 18"
            stroke="url(#goldCornerGradTR)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            strokeLinecap="round"
          />

          <g transform="translate(38, 38)">
            <rect
              x="-14"
              y="-14"
              width="28"
              height="28"
              fill="rgba(4, 25, 18, 0.4)"
              stroke="url(#goldCornerGradTR)"
              strokeWidth="1.2"
            />
            <rect
              x="-14"
              y="-14"
              width="28"
              height="28"
              transform="rotate(45)"
              fill="rgba(4, 25, 18, 0.4)"
              stroke="url(#goldCornerGradTR)"
              strokeWidth="1.2"
            />
            <circle cx="0" cy="0" r="8" stroke="url(#goldCornerGradTR)" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="3" fill="#c59341" opacity="0.8" />
          </g>

          <path
            d="M 38 66 L 38 90 L 52 104 L 76 104"
            stroke="url(#goldCornerGradTR)"
            strokeWidth="0.9"
            fill="none"
          />
          <path
            d="M 66 38 L 90 38 L 104 52 L 104 76"
            stroke="url(#goldCornerGradTR)"
            strokeWidth="0.9"
            fill="none"
          />
          <path
            d="M 52 52 L 80 80 L 110 80"
            stroke="url(#goldCornerGradTR)"
            strokeWidth="0.75"
            strokeDasharray="3 2"
          />

          <g transform="translate(92, 26) scale(0.55)">
            <rect x="-12" y="-12" width="24" height="24" stroke="url(#goldCornerGradTR)" strokeWidth="1.5" />
            <rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" stroke="url(#goldCornerGradTR)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#c59341" />
          </g>

          <g transform="translate(26, 92) scale(0.55)">
            <rect x="-12" y="-12" width="24" height="24" stroke="url(#goldCornerGradTR)" strokeWidth="1.5" />
            <rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" stroke="url(#goldCornerGradTR)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#c59341" />
          </g>
        </g>
      </svg>
    </div>
  );
};
