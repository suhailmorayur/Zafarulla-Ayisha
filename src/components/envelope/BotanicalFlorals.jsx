import React from 'react';

/**
 * BotanicalFlorals
 * Handcrafted SVG botanical floral arrangements at the bottom-left and bottom-right corners.
 * Features ivory/cream blossoms, rich emerald foliage, antique-gold leaf veins, and blurred
 * foreground leaves creating realistic depth of field while keeping the central envelope pristine.
 */
export const BotanicalFlorals = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px] z-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 520 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gold stem gradient */}
          <linearGradient id="goldStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae29f" />
            <stop offset="50%" stopColor="#c59341" />
            <stop offset="100%" stopColor="#8c5d19" />
          </linearGradient>

          {/* Emerald leaf gradient */}
          <linearGradient id="emeraldLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a6349" />
            <stop offset="50%" stopColor="#0f4532" />
            <stop offset="100%" stopColor="#072b1f" />
          </linearGradient>

          <linearGradient id="emeraldLeaf2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#257c5d" />
            <stop offset="60%" stopColor="#125039" />
            <stop offset="100%" stopColor="#093123" />
          </linearGradient>

          {/* Cream flower petal gradient */}
          <linearGradient id="ivoryPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f7f2e4" />
            <stop offset="100%" stopColor="#e8dcbe" />
          </linearGradient>

          {/* Foreground blur filter */}
          <filter id="foregroundBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.8" />
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#010a07" floodOpacity="0.8" />
          </filter>

          {/* Flower drop shadow */}
          <filter id="flowerShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1.5" floodColor="#02100a" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* ===================================================
            LEFT CORNER BOTANICAL ARRANGEMENT
            =================================================== */}
        <g id="left-botanical">
          {/* Main Gold Stems curving inward */}
          <path
            d="M 10 640 Q 50 560 65 480 Q 75 420 60 380"
            stroke="url(#goldStemGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 0 620 Q 80 580 110 520 Q 130 480 120 440"
            stroke="url(#goldStemGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Deep Emerald Foliage - Background layer */}
          <g filter="url(#flowerShadow)">
            {/* Leaf 1 */}
            <path
              d="M 45 520 C 25 490 20 460 35 440 C 55 450 65 480 45 520 Z"
              fill="url(#emeraldLeaf1)"
            />
            {/* Leaf 2 */}
            <path
              d="M 75 470 C 85 435 110 420 125 435 C 120 460 95 480 75 470 Z"
              fill="url(#emeraldLeaf2)"
            />
            {/* Leaf 3 */}
            <path
              d="M 95 530 C 125 510 145 515 150 535 C 135 555 105 550 95 530 Z"
              fill="url(#emeraldLeaf1)"
            />
            {/* Leaf 4 - Small branch */}
            <path
              d="M 25 570 C 5 550 0 520 18 510 C 32 525 35 550 25 570 Z"
              fill="url(#emeraldLeaf2)"
            />
          </g>

          {/* Gold Accent Leaves */}
          <path
            d="M 60 410 C 70 385 88 380 92 395 C 85 410 70 418 60 410 Z"
            fill="url(#goldStemGrad)"
            opacity="0.85"
          />
          <path
            d="M 115 460 C 130 440 145 442 146 455 C 138 468 125 470 115 460 Z"
            fill="url(#goldStemGrad)"
            opacity="0.75"
          />

          {/* Ivory/Cream Blossoms (Jasmine / Gardenia) */}
          <g filter="url(#flowerShadow)">
            {/* Flower 1 (Upper Left, Center ~ (85, 495)) */}
            <g transform="translate(85, 495)">
              {/* Petals */}
              <circle cx="0" cy="-12" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="11" cy="-4" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="7" cy="10" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="-7" cy="10" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="-11" cy="-4" r="9" fill="url(#ivoryPetalGrad)" />
              {/* Center Stamen */}
              <circle cx="0" cy="0" r="4" fill="#dfba73" />
              <circle cx="0" cy="0" r="2" fill="#8c5d19" />
            </g>

            {/* Flower 2 (Lower Left, Center ~ (45, 560)) */}
            <g transform="translate(45, 560) scale(0.85) rotate(-20)">
              <circle cx="0" cy="-11" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="10" cy="-3" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="6" cy="9" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="-6" cy="9" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="-10" cy="-3" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="0" cy="0" r="3.5" fill="#dfba73" />
            </g>

            {/* Tiny Bud (110, 420) */}
            <g transform="translate(110, 420)">
              <ellipse cx="0" cy="0" rx="5" ry="7" fill="url(#ivoryPetalGrad)" transform="rotate(30)" />
              <path d="M -3 4 Q 0 9 4 7" stroke="#125039" strokeWidth="1" />
            </g>
          </g>
        </g>

        {/* ===================================================
            RIGHT CORNER BOTANICAL ARRANGEMENT (Naturally Varied)
            =================================================== */}
        <g id="right-botanical">
          {/* Main Gold Stems curving inward */}
          <path
            d="M 510 640 Q 470 550 455 470 Q 445 410 460 370"
            stroke="url(#goldStemGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 520 615 Q 440 575 410 515 Q 390 475 400 435"
            stroke="url(#goldStemGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Deep Emerald Foliage */}
          <g filter="url(#flowerShadow)">
            <path
              d="M 475 510 C 495 480 500 450 485 430 C 465 440 455 470 475 510 Z"
              fill="url(#emeraldLeaf1)"
            />
            <path
              d="M 445 460 C 435 425 410 410 395 425 C 400 450 425 470 445 460 Z"
              fill="url(#emeraldLeaf2)"
            />
            <path
              d="M 425 520 C 395 500 375 505 370 525 C 385 545 415 540 425 520 Z"
              fill="url(#emeraldLeaf1)"
            />
            <path
              d="M 495 560 C 515 540 520 510 502 500 C 488 515 485 540 495 560 Z"
              fill="url(#emeraldLeaf2)"
            />
          </g>

          {/* Gold Accent Leaves */}
          <path
            d="M 460 400 C 450 375 432 370 428 385 C 435 400 450 408 460 400 Z"
            fill="url(#goldStemGrad)"
            opacity="0.85"
          />
          <path
            d="M 405 450 C 390 430 375 432 374 445 C 382 458 395 460 405 450 Z"
            fill="url(#goldStemGrad)"
            opacity="0.75"
          />

          {/* Ivory/Cream Blossoms */}
          <g filter="url(#flowerShadow)">
            {/* Flower 1 (Upper Right, Center ~ (435, 485)) */}
            <g transform="translate(435, 485) rotate(15)">
              <circle cx="0" cy="-12" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="11" cy="-4" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="7" cy="10" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="-7" cy="10" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="-11" cy="-4" r="9" fill="url(#ivoryPetalGrad)" />
              <circle cx="0" cy="0" r="4" fill="#dfba73" />
              <circle cx="0" cy="0" r="2" fill="#8c5d19" />
            </g>

            {/* Flower 2 (Lower Right, Center ~ (475, 550)) */}
            <g transform="translate(475, 550) scale(0.9) rotate(35)">
              <circle cx="0" cy="-11" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="10" cy="-3" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="6" cy="9" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="-6" cy="9" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="-10" cy="-3" r="8" fill="url(#ivoryPetalGrad)" />
              <circle cx="0" cy="0" r="3.5" fill="#dfba73" />
            </g>

            {/* Flower 3 Micro (400, 415) */}
            <g transform="translate(400, 415) scale(0.7) rotate(-10)">
              <circle cx="0" cy="-9" r="7" fill="url(#ivoryPetalGrad)" />
              <circle cx="8" cy="-2" r="7" fill="url(#ivoryPetalGrad)" />
              <circle cx="5" cy="8" r="7" fill="url(#ivoryPetalGrad)" />
              <circle cx="-5" cy="8" r="7" fill="url(#ivoryPetalGrad)" />
              <circle cx="-8" cy="-2" r="7" fill="url(#ivoryPetalGrad)" />
              <circle cx="0" cy="0" r="3" fill="#dfba73" />
            </g>
          </g>
        </g>

        {/* ===================================================
            FOREGROUND BLURRED LEAVES (Depth of Field Effect)
            =================================================== */}
        <g id="foreground-depth-foliage" filter="url(#foregroundBlur)">
          {/* Bottom Left Foreground Leaf */}
          <path
            d="M -10 660 C 20 620 50 600 80 625 C 60 660 20 680 -10 660 Z"
            fill="#051f15"
            opacity="0.92"
          />
          <path
            d="M 15 670 C 45 635 85 640 95 660 C 65 685 30 690 15 670 Z"
            fill="#082b1d"
            opacity="0.85"
          />

          {/* Bottom Right Foreground Leaf */}
          <path
            d="M 530 660 C 500 620 470 600 440 625 C 460 660 500 680 530 660 Z"
            fill="#051f15"
            opacity="0.92"
          />
          <path
            d="M 505 670 C 475 635 435 640 425 660 C 455 685 490 690 505 670 Z"
            fill="#082b1d"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
};
