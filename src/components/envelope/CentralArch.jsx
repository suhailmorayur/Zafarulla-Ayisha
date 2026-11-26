import React from 'react';

/**
 * CentralArch
 * Elegant Islamic / Moorish pointed arch outline located in the lower central area
 * of the envelope. Crafted with thin antique-gold foil lines and subtle Islamic geometry.
 */
export const CentralArch = () => {
  return (
    <div className="absolute inset-x-0 bottom-6 flex justify-center items-end pointer-events-none z-10">
      <svg
        className="w-56 h-64 md:w-64 md:h-72 text-[#dfba73]"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldArchGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8c5d19" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#c59341" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#fae29f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c59341" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="archSoftInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#124e38" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#082b20" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft inner sanctuary shadow */}
        <path
          d="M 35 235 L 35 110 C 35 60, 70 30, 100 15 C 130 30, 165 60, 165 110 L 165 235 Z"
          fill="url(#archSoftInnerGlow)"
        />

        {/* Outer Arch Contour */}
        <path
          d="M 30 238 L 30 110 C 30 55, 68 24, 100 10 C 132 24, 170 55, 170 110 L 170 238"
          stroke="url(#goldArchGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Inner Arch Contour */}
        <path
          d="M 38 238 L 38 114 C 38 64, 72 36, 100 24 C 128 36, 162 64, 162 114 L 162 238"
          stroke="url(#goldArchGrad)"
          strokeWidth="0.75"
          strokeDasharray="3 2.5"
        />

        {/* Pointed Finial / Keystone at Apex */}
        <g transform="translate(100, 10)">
          {/* Micro diamond pinnacle */}
          <polygon points="0,-7 4,0 0,7 -4,0" fill="#dfba73" />
          <circle cx="0" cy="-9" r="1.5" fill="#fae29f" />
        </g>

        {/* Subtle Horizontal Base Line */}
        <line x1="24" y1="238" x2="176" y2="238" stroke="url(#goldArchGrad)" strokeWidth="0.8" />

        {/* Tiny Delicate Arabesque Crest Inside Arch Crown */}
        <g transform="translate(100, 48)">
          <circle cx="0" cy="0" r="10" stroke="url(#goldArchGrad)" strokeWidth="0.6" strokeDasharray="1.5 2" />
          <circle cx="0" cy="0" r="3.5" stroke="url(#goldArchGrad)" strokeWidth="0.8" fill="rgba(197, 147, 65, 0.2)" />
        </g>
      </svg>
    </div>
  );
};
