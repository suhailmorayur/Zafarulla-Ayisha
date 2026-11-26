import React from 'react';

/**
 * WaxSeal
 * Luxurious antique-gold wax seal with scalloped organic wax pooling,
 * concentric bevel rings, embossed "TAP TO OPEN" serif typography,
 * twin botanical laurel sprigs, and a gold heart motif.
 */
export const WaxSeal = ({ onOpen, isReleasing = false, disabled = false }) => {
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <button
      type="button"
      onClick={!disabled ? onOpen : undefined}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label="Open wedding invitation"
      className={`group absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fae29f]/80 rounded-full cursor-pointer select-none transition-transform duration-300 ${
        isReleasing ? 'animate-seal-release' : 'hover:scale-105 active:scale-95'
      }`}
      style={{
        touchAction: 'manipulation',
      }}
    >
      <svg
        className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)] filter"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Wax Body Gradient */}
          <radialGradient id="waxBaseGrad" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fae29f" />
            <stop offset="30%" stopColor="#dfba73" />
            <stop offset="65%" stopColor="#c59341" />
            <stop offset="90%" stopColor="#8c5d19" />
            <stop offset="100%" stopColor="#5d3c0b" />
          </radialGradient>

          {/* Inner Bevel Gradient */}
          <radialGradient id="innerBevelGrad" cx="42%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#fdf3d1" />
            <stop offset="45%" stopColor="#d5a650" />
            <stop offset="85%" stopColor="#875712" />
            <stop offset="100%" stopColor="#482b05" />
          </radialGradient>

          {/* Shadow filter for wax seal stamp relief */}
          <filter id="waxEmboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.8" dy="1.2" stdDeviation="0.8" floodColor="#3f2303" floodOpacity="0.85" />
            <feDropShadow dx="-0.6" dy="-0.6" stdDeviation="0.5" floodColor="#fff3cf" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* 1. Organic Scalloped Wax Base (Simulating melted pressed wax pooling) */}
        <path
          d="M 60 8
             C 72 7, 80 12, 89 18
             C 98 24, 105 32, 109 42
             C 113 52, 112 63, 109 74
             C 106 85, 99 94, 91 101
             C 83 108, 72 112, 60 112
             C 48 112, 36 109, 28 102
             C 20 95, 13 86, 11 75
             C 9 64, 8 53, 12 43
             C 16 33, 23 23, 32 17
             C 41 11, 48 9, 60 8 Z"
          fill="url(#waxBaseGrad)"
        />

        {/* Secondary irregular wax lobes around circumference */}
        <circle cx="28" cy="30" r="14" fill="url(#waxBaseGrad)" opacity="0.6" />
        <circle cx="92" cy="34" r="13" fill="url(#waxBaseGrad)" opacity="0.6" />
        <circle cx="95" cy="78" r="14" fill="url(#waxBaseGrad)" opacity="0.6" />
        <circle cx="25" cy="76" r="15" fill="url(#waxBaseGrad)" opacity="0.6" />
        <circle cx="60" cy="106" r="13" fill="url(#waxBaseGrad)" opacity="0.5" />

        {/* 2. Elevated Outer Rim / Bezel */}
        <circle
          cx="60"
          cy="60"
          r="44"
          fill="none"
          stroke="#93621a"
          strokeWidth="2.5"
          opacity="0.8"
        />
        <circle
          cx="59.5"
          cy="59.5"
          r="43.5"
          fill="none"
          stroke="#fae29f"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* 3. Sunken Central Coin Impression */}
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="url(#innerBevelGrad)"
          stroke="#68410b"
          strokeWidth="1.5"
        />

        {/* Decorative Dotted Beaded Ring inside seal */}
        <circle
          cx="60"
          cy="60"
          r="34"
          fill="none"
          stroke="#fbe9b7"
          strokeWidth="1.2"
          strokeDasharray="2 3.2"
          opacity="0.8"
        />

        {/* 4. Embossed Inner Content */}
        <g filter="url(#waxEmboss)">
          {/* Laurel Sprig Left */}
          <path
            d="M 33 60 C 33 48, 42 40, 48 36"
            stroke="#5c3809"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="34" cy="52" r="1.6" fill="#fae29f" />
          <circle cx="37" cy="45" r="1.6" fill="#fae29f" />
          <circle cx="43" cy="39" r="1.6" fill="#fae29f" />

          {/* Laurel Sprig Right */}
          <path
            d="M 87 60 C 87 48, 78 40, 72 36"
            stroke="#5c3809"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="86" cy="52" r="1.6" fill="#fae29f" />
          <circle cx="83" cy="45" r="1.6" fill="#fae29f" />
          <circle cx="77" cy="39" r="1.6" fill="#fae29f" />

          {/* "TAP TO OPEN" Serif Lettering */}
          <text
            x="60"
            y="48"
            textAnchor="middle"
            fill="#573609"
            fontFamily="'Cinzel', serif"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="2.2"
          >
            TAP
          </text>
          <text
            x="60"
            y="60"
            textAnchor="middle"
            fill="#573609"
            fontFamily="'Cinzel', serif"
            fontSize="6"
            fontWeight="600"
            letterSpacing="2"
          >
            TO
          </text>
          <text
            x="60"
            y="72"
            textAnchor="middle"
            fill="#573609"
            fontFamily="'Cinzel', serif"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="2.2"
          >
            OPEN
          </text>

          {/* Small Heart Symbol beneath text */}
          <path
            d="M 60 83 C 58 81, 54 78, 54 75 C 54 73, 56 71.5, 58 71.5 C 59.2 71.5, 60 72.3, 60 72.8 C 60 72.3, 60.8 71.5, 62 71.5 C 64 71.5, 66 73, 66 75 C 66 78, 62 81, 60 83 Z"
            fill="#573609"
          />
          <path
            d="M 59.5 82.5 C 57.5 80.5, 54.5 77.8, 54.5 75 C 54.5 73.5, 56 72, 58 72 C 59 72, 59.5 72.6, 59.5 73"
            stroke="#fae29f"
            strokeWidth="0.6"
            fill="none"
          />
        </g>

        {/* Top Glint Highlight */}
        <ellipse
          cx="48"
          cy="28"
          rx="14"
          ry="6"
          transform="rotate(-25 48 28)"
          fill="#ffffff"
          opacity="0.35"
        />
      </svg>
    </button>
  );
};
