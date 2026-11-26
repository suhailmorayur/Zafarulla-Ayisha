import React from 'react';
import { WaxSeal } from './WaxSeal';
import { Tassel } from './Tassel';

/**
 * EnvelopeFlap
 * Independent 3D physical folding upper flap.
 * Uses perspective: 1200px and transform-origin: 50% 0% to fold backward
 * from rotateX(0deg) to rotateX(-170deg) with hardware acceleration.
 * Fades smoothly once the card emerges into view.
 */
export const EnvelopeFlap = ({
  isOpen = false,
  isSealReleasing = false,
  isTasselSwinging = false,
  hideFlap = false,
  onSealClick,
  disabled = false,
}) => {
  return (
    <div
      className={`absolute top-0 inset-x-0 z-30 pointer-events-none transition-opacity duration-700 ${
        hideFlap ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="w-full relative transition-transform duration-[1100ms]"
        style={{
          transformOrigin: '50% 0%',
          transform: isOpen ? 'rotateX(-170deg)' : 'rotateX(0deg)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* SVG Triangular Flap with Curved Tip */}
        <svg
          className="w-full h-auto block filter drop-shadow-[0_12px_16px_rgba(2,12,8,0.7)]"
          viewBox="0 0 520 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Deep emerald leather gradient */}
            <linearGradient id="flapLeatherGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#082b20" />
              <stop offset="60%" stopColor="#062319" />
              <stop offset="100%" stopColor="#041a12" />
            </linearGradient>

            {/* Antique gold border gradient */}
            <linearGradient id="flapGoldGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8c5d19" />
              <stop offset="25%" stopColor="#fae29f" />
              <stop offset="50%" stopColor="#c59341" />
              <stop offset="75%" stopColor="#fae29f" />
              <stop offset="100%" stopColor="#8c5d19" />
            </linearGradient>

            {/* Subtle flap surface lighting */}
            <radialGradient id="flapLight" cx="50%" cy="20%" r="70%">
              <stop offset="0%" stopColor="#175b43" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#0a3526" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#02100a" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Main Triangular Flap with Softly Curved Lower Edge */}
          <path
            d="M 12 0 
               L 508 0 
               Q 520 0 520 12 
               L 520 20 
               L 278 296 
               Q 260 316 242 296 
               L 0 20 
               L 0 12 
               Q 0 0 12 0 Z"
            fill="url(#flapLeatherGrad)"
          />

          {/* Surface Lighting Overlay */}
          <path
            d="M 12 0 
               L 508 0 
               Q 520 0 520 12 
               L 520 20 
               L 278 296 
               Q 260 316 242 296 
               L 0 20 
               L 0 12 
               Q 0 0 12 0 Z"
            fill="url(#flapLight)"
          />

          {/* Double Antique-Gold Metallic Outlines */}
          <path
            d="M 0 16 
               L 242 296 
               Q 260 316 278 296 
               L 520 16"
            stroke="url(#flapGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M 14 18 
               L 246 284 
               Q 260 298 274 284 
               L 506 18"
            stroke="url(#flapGoldGrad)"
            strokeWidth="0.8"
            strokeDasharray="3.5 2.5"
            opacity="0.85"
          />

          {/* Subtle Top Fold Gold Highlight Line */}
          <line x1="20" y1="2" x2="500" y2="2" stroke="url(#flapGoldGrad)" strokeWidth="0.8" opacity="0.6" />
        </svg>

        {/* Backside Shadow and Texture when Flap is Folded Backwards */}
        <div
          className="absolute inset-0 bg-[#03150e] rounded-t-[20px] pointer-events-none transition-opacity duration-700"
          style={{
            transform: 'rotateX(180deg)',
            backfaceVisibility: 'hidden',
            opacity: isOpen ? 0.95 : 0,
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
          }}
        />

        {/* Wax Seal & Hanging Tassel Anchor */}
        <div className="absolute top-[91%] left-1/2 -translate-x-1/2 pointer-events-auto">
          {/* Hanging Tassel */}
          <Tassel isSwinging={isTasselSwinging} />

          {/* Wax Seal */}
          <WaxSeal
            onOpen={onSealClick}
            isReleasing={isSealReleasing}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
