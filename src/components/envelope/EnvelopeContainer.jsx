import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { EnvelopeBody } from './EnvelopeBody';
import { EnvelopeFlap } from './EnvelopeFlap';
import { InvitationCard } from './InvitationCard';

/**
 * EnvelopeContainer
 * Coordinates the 4:5 portrait envelope, fluid flap opening,
 * card elevation with instant pocket dismissal, cinematic couple names reveal,
 * wedding date & invitation note, and smooth transition into the celebration website.
 */
export const EnvelopeContainer = ({ onTransitionToWebsite, onPlayAudio }) => {
  const [stage, setStage] = useState('closed'); // 'closed', 'opening', 'rising', 'risen', 'zooming'
  const [isSealReleasing, setIsSealReleasing] = useState(false);
  const [isTasselSwinging, setIsTasselSwinging] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [hidePocketAndFlap, setHidePocketAndFlap] = useState(false);
  
  // Card element reveal flags
  const [showHeart, setShowHeart] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);
  const autoAdvanceTimerRef = useRef(null);

  // Trigger opening choreography without lag
  const handleOpenEnvelope = () => {
    if (stage !== 'closed') return;

    if (onPlayAudio) {
      onPlayAudio();
    }

    setStage('opening');
    setIsSealReleasing(true);
    setIsTasselSwinging(true);

    // Lightweight gold particle burst
    requestAnimationFrame(() => {
      try {
        confetti({
          particleCount: 26,
          spread: 55,
          origin: { y: 0.52 },
          colors: ['#fae29f', '#c59341', '#dfba73', '#8c5d19'],
          disableForReducedMotion: true,
          ticks: 120,
          gravity: 0.9,
        });
      } catch (e) {
        // Safe fallback
      }
    });

    // 1. Flap starts opening immediately (180ms)
    setTimeout(() => {
      setIsFlapOpen(true);
    }, 180);

    // 2. Card ascends & Pocket immediately drops/fades away (800ms)
    setTimeout(() => {
      setStage('rising');
      setHidePocketAndFlap(true);
    }, 800);

    // 3. Card settles & Groom Name enters (1500ms)
    setTimeout(() => {
      setStage('risen');
      setShowHeart(true);
      setShowGroom(true);
    }, 1500);

    // 4. Bride Name enters (2200ms)
    setTimeout(() => {
      setShowBride(true);
    }, 2200);

    // 5. Wedding Date & Invitation Note appear (2900ms)
    setTimeout(() => {
      setShowDate(true);
    }, 2900);

    // 6. Smooth automatic transition to website after guests read the note (6800ms)
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    autoAdvanceTimerRef.current = setTimeout(() => {
      handleProceedToWebsite();
    }, 6800);
  };

  const handleProceedToWebsite = () => {
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    setStage('zooming');
    setTimeout(() => {
      if (onTransitionToWebsite) {
        onTransitionToWebsite();
      }
    }, 1100);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 md:py-12 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[600px] rounded-full bg-[#0a4430]/25 blur-[120px]" />
      </div>

      {/* Helper Guidance Subtitle */}
      <div
        className={`mb-4 transition-all duration-500 text-center ${
          stage === 'closed' ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#dfba73]">
          Royal Wedding Invitation
        </p>
        <p className="font-cormorant italic text-sm text-[#a3b8b0] mt-0.5">
          Tap the golden wax seal to open
        </p>
      </div>

      {/* MASTER 4:5 ENVELOPE CONTAINER */}
      <div
        className={`relative w-[90vw] max-w-[520px] aspect-[4/5] mx-auto transition-all duration-[1000ms] ${
          stage === 'closed' ? 'animate-float-idle' : ''
        }`}
        style={{
          perspective: '1200px',
        }}
      >
        {/* Envelope Body with Card Chamber */}
        <EnvelopeBody hidePocket={hidePocketAndFlap}>
          <InvitationCard
            stage={stage}
            showHeart={showHeart}
            showDate={showDate}
            showGroom={showGroom}
            showBride={showBride}
            onProceedToWebsite={handleProceedToWebsite}
          />
        </EnvelopeBody>

        {/* 3D Folding Flap with Attached Wax Seal and Tassel */}
        <EnvelopeFlap
          isOpen={isFlapOpen}
          isSealReleasing={isSealReleasing}
          isTasselSwinging={isTasselSwinging}
          hideFlap={hidePocketAndFlap}
          onSealClick={handleOpenEnvelope}
          disabled={stage !== 'closed'}
        />
      </div>

      {/* Direct Skip Button */}
      {stage !== 'closed' && stage !== 'zooming' && (
        <button
          onClick={handleProceedToWebsite}
          className="mt-6 font-cinzel text-xs uppercase tracking-[0.25em] text-[#dfba73]/70 hover:text-[#fae29f] transition-colors underline cursor-pointer"
        >
          View full website directly →
        </button>
      )}
    </div>
  );
};
