import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * LoveHeartScratch
 * An authentic heart-shaped luxury gold scratch card concealing the wedding date.
 * Features true SVG heart geometry, metallic antique-gold scratch foil,
 * tactile touch & pointer dragging, particle bursts, and high-DPI canvas.
 */
export const LoveHeartScratch = ({ onRevealed, isAlreadyRevealed = false }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(isAlreadyRevealed);

  // Exact heart card dimensions
  const WIDTH = 210;
  const HEIGHT = 160;

  // Exact SVG path for the Heart shape in (210 x 160)
  const HEART_PATH =
    'M 105 154 C 18 95, 4 58, 4 34 C 4 14, 22 2, 50 2 C 74 2, 92 16, 105 32 C 118 16, 136 2, 160 2 C 188 2, 206 14, 206 34 C 206 58, 192 95, 105 154 Z';

  // Initialize the gold foil canvas in the exact heart silhouette
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    ctx.scale(dpr, dpr);

    ctx.globalCompositeOperation = 'source-over';

    // 1. Clip canvas to the exact Heart Path
    const heartPathObj = new Path2D(HEART_PATH);
    ctx.save();
    ctx.clip(heartPathObj);

    // 2. Fill with metallic antique gold foil gradient
    const grad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    grad.addColorStop(0, '#c59341');
    grad.addColorStop(0.2, '#fae29f');
    grad.addColorStop(0.45, '#dfba73');
    grad.addColorStop(0.7, '#fbf0cf');
    grad.addColorStop(0.88, '#c59341');
    grad.addColorStop(1, '#7e5114');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // 3. Diagonal luxury gold sheen stripes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 2.5;
    for (let i = -WIDTH; i < WIDTH * 2; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + HEIGHT, HEIGHT);
      ctx.stroke();
    }

    // 4. Inset dashed gold heart outline
    ctx.strokeStyle = '#5a3808';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([3.5, 3]);
    ctx.stroke(heartPathObj);
    ctx.setLineDash([]);

    // 5. Inscribed scratch invitation typography on the foil
    ctx.fillStyle = '#3f2404';
    ctx.font = 'bold 9.5px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH WITH LOVE', 105, 62);

    ctx.font = '18px serif';
    ctx.fillText('♡', 105, 84);

    ctx.font = 'italic 10px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('Rub to reveal wedding date', 105, 104);

    ctx.restore();
  }, [HEART_PATH]);

  useEffect(() => {
    if (!isRevealed) {
      initCanvas();
    }
  }, [initCanvas, isRevealed]);

  // Complete reveal trigger when enough is scratched
  const triggerCompleteReveal = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.58 },
        colors: ['#fae29f', '#c59341', '#dfba73', '#e11d48', '#8c5d19'],
        disableForReducedMotion: true,
        ticks: 150,
      });
    } catch (e) {
      // safe fallback
    }

    if (onRevealed) {
      onRevealed();
    }
  }, [isRevealed, onRevealed]);

  // Scratch action
  const scratchAt = useCallback(
    (clientX, clientY) => {
      if (isRevealed) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      // Check scratched percentage intermittently
      if (Math.random() < 0.25) {
        try {
          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const pixels = imgData.data;
          let transparentPixels = 0;
          const totalSamples = pixels.length / 16;

          for (let i = 3; i < pixels.length; i += 16) {
            if (pixels[i] === 0) {
              transparentPixels++;
            }
          }

          const percent = (transparentPixels / totalSamples) * 100;
          if (percent > 36) {
            triggerCompleteReveal();
          }
        } catch (e) {
          // safe fallback
        }
      }
    },
    [isRevealed, triggerCompleteReveal]
  );

  const handlePointerDown = (e) => {
    setIsScratching(true);
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isScratching) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    setIsScratching(false);
  };

  return (
    <div className="flex flex-col items-center my-2 select-none" ref={containerRef}>
      {/* Real Heart-Shaped Scratch Card Container */}
      <div
        className="relative filter drop-shadow-[0_8px_20px_rgba(2,10,7,0.45)] hover:scale-[1.02] transition-transform duration-300"
        style={{ width: WIDTH, height: HEIGHT }}
      >
        {/* SVG Base Heart Frame & Glow */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heartGoldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae29f" />
              <stop offset="50%" stopColor="#c59341" />
              <stop offset="100%" stopColor="#8c5d19" />
            </linearGradient>
          </defs>

          {/* Outer Gold Border */}
          <path
            d={HEART_PATH}
            stroke="url(#heartGoldBorderGrad)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Inset Dashed Delicate Gold Border */}
          <path
            d="M 105 146 C 24 90, 12 55, 12 34 C 12 18, 26 8, 50 8 C 72 8, 90 20, 105 34 C 120 20, 138 8, 160 8 C 184 8, 198 18, 198 34 C 198 55, 186 90, 105 146 Z"
            stroke="#dfba73"
            strokeWidth="1"
            strokeDasharray="3 2"
            fill="none"
            opacity="0.8"
          />
        </svg>

        {/* ================= 1. HIDDEN CONTENT UNDERNEATH (THE WEDDING DATE) ================= */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none"
          style={{
            clipPath: `path('${HEART_PATH}')`,
            backgroundColor: '#faf6ee',
            backgroundImage: 'radial-gradient(circle at 50% 40%, #ffffff 0%, #f6ece0 75%, #ebdcc8 100%)',
          }}
        >
          {/* Top Heart Badge */}
          <div className="flex items-center gap-1 text-[#c59341] mt-1 mb-0.5">
            <Heart className="w-3 h-3 fill-[#c59341]" />
            <span className="font-cinzel text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#8c5d19]">
              The Wedding Date
            </span>
            <Heart className="w-3 h-3 fill-[#c59341]" />
          </div>

          {/* Date Inscription */}
          <div className="font-cinzel text-base sm:text-lg font-bold text-[#07281c] tracking-[0.22em] my-0.5">
            {weddingConfig.weddingDateDisplay}
          </div>

          {/* Day & Time */}
          <div className="font-cormorant italic text-xs text-[#124d38] font-medium">
            {weddingConfig.weddingDay} • {weddingConfig.weddingTime}
          </div>

          {/* Golden Seal Note */}
          <div className="mt-1 flex items-center gap-1 text-[9.5px] font-cinzel text-[#8c5d19]">
            <Sparkles className="w-2.5 h-2.5 text-[#c59341]" />
            <span>Blessed Union</span>
          </div>
        </div>

        {/* ================= 2. SCRATCHABLE CANVAS (GOLD FOIL LAYER) ================= */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none z-20"
            style={{
              clipPath: `path('${HEART_PATH}')`,
              touchAction: 'none',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        )}
      </div>

      {/* Helper text / Instant Reveal Option */}
      {!isRevealed ? (
        <div className="mt-2 flex items-center gap-2">
          <span className="font-cormorant italic text-xs text-[#124e38]">
            ✨ Rub or scratch the golden heart
          </span>
          <button
            onClick={triggerCompleteReveal}
            className="font-cinzel text-[10px] uppercase tracking-wider text-[#8c5d19] underline hover:text-[#c59341] cursor-pointer"
          >
            Reveal
          </button>
        </div>
      ) : (
        <div className="mt-2 flex items-center gap-1 text-xs font-cinzel text-[#124e38] font-semibold animate-fade-in">
          <span>✓</span> Blessed Wedding Date Revealed
        </div>
      )}
    </div>
  );
};
