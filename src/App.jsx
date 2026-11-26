import React, { useState } from 'react';
import { EnvelopeContainer } from './components/envelope/EnvelopeContainer';
import { WeddingWebsite } from './components/website/WeddingWebsite';
import { AudioController } from './components/audio/AudioController';

function App() {
  const [view, setView] = useState('envelope'); // 'envelope' | 'website'
  const [playAudioRequested, setPlayAudioRequested] = useState(false);

  const handleOpenEnvelopeTriggered = () => {
    setPlayAudioRequested(true);
  };

  const handleTransitionToWebsite = () => {
    setView('website');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayInvitation = () => {
    setView('envelope');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#03140e] text-[#f2ebd9] relative selection:bg-[#c59341]/30 selection:text-[#fae29f]">
      {/* Background Subtle Ambience Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-repeat bg-[radial-gradient(#fae29f_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main View Switcher */}
      {view === 'envelope' ? (
        <EnvelopeContainer
          onTransitionToWebsite={handleTransitionToWebsite}
          onPlayAudio={handleOpenEnvelopeTriggered}
        />
      ) : (
        <WeddingWebsite onReplayInvitation={handleReplayInvitation} />
      )}

      {/* Audio Ambient Controller */}
      <AudioController isPlayingRequested={playAudioRequested} />
    </div>
  );
}

export default App;

