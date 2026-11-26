import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * AudioController
 * Soft royal ambient wedding sound generator using Web Audio API.
 * Never autoplays before user interaction. Starts upon user tap.
 * Includes a floating luxury gold mute/unmute button.
 */
export const AudioController = ({ isPlayingRequested = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Soothing pentatonic scale notes (frequencies in Hz)
  const notes = [
    220.00, // A3
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
  ];

  // Play an acoustic gentle harp-like chime note
  const playChime = (freq) => {
    if (!audioCtxRef.current || isMuted) return;

    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Gentle envelope: fast attack, slow resonant decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 2.5);
    } catch (e) {
      // Audio context might be suspended
    }
  };

  const startAmbientLoop = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();

      let noteIdx = 0;
      const melodySequence = [2, 4, 3, 5, 2, 6, 4, 1]; // gentle soothing sequence

      timerRef.current = setInterval(() => {
        const currentNote = notes[melodySequence[noteIdx % melodySequence.length]];
        playChime(currentNote);
        noteIdx++;
      }, 1600);

      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext not supported or blocked');
    }
  };

  const stopAmbientLoop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlayingRequested && !isPlaying) {
      startAmbientLoop();
    }
  }, [isPlayingRequested]);

  const toggleSound = () => {
    if (!isPlaying) {
      startAmbientLoop();
      setIsMuted(false);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleSound}
        aria-label={isMuted || !isPlaying ? 'Unmute wedding music' : 'Mute wedding music'}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[#c59341] bg-[#06261c]/90 text-[#fae29f] shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-md hover:bg-[#093527] transition-all cursor-pointer group"
      >
        <Music className="w-4 h-4 text-[#dfba73] group-hover:rotate-12 transition-transform" />
        {isMuted || !isPlaying ? (
          <VolumeX className="w-4 h-4 text-[#fae29f]" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#fae29f] animate-pulse" />
        )}
        <span className="font-cinzel text-[10px] uppercase tracking-wider hidden sm:inline">
          {isMuted || !isPlaying ? 'Play Music' : 'Mute'}
        </span>
      </button>
    </div>
  );
};
