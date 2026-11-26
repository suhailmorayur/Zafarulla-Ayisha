import React from 'react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * FooterSection
 * Minimal luxury Islamic wedding footer with couple names, heart, and date.
 */
export const FooterSection = ({ onReplayInvitation }) => {
  return (
    <footer className="w-full py-16 px-4 border-t border-[#c59341]/30 bg-[#03140e] text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Replay Envelope Invitation Button */}
        {onReplayInvitation && (
          <button
            onClick={onReplayInvitation}
            className="mb-10 px-6 py-2.5 rounded-full border border-[#c59341]/50 bg-[#06241b] text-[#dfba73] hover:text-[#fae29f] hover:border-[#fae29f] font-cinzel text-xs uppercase tracking-[0.25em] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all cursor-pointer active:scale-95"
          >
            ✉ Replay Physical Invitation
          </button>
        )}

        {/* Couple Names and Heart */}
        <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-playfair font-bold text-[#faf7f0]">
          <span>{weddingConfig.groomName}</span>
          <span className="text-[#c59341] text-sm">♡</span>
          <span>{weddingConfig.brideName}</span>
        </div>

        {/* Wedding Date */}
        <div className="font-cinzel text-xs tracking-[0.3em] text-[#fae29f] mt-3 font-semibold">
          {weddingConfig.weddingDateDisplay}
        </div>

        {/* Final Inscription */}
        <p className="font-cormorant italic text-xs text-[#8c9e97] mt-4">
          May Allah bless this union with love, tranquility, and barakah.
        </p>
      </div>
    </footer>
  );
};
