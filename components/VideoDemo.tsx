import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const VideoDemo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Helper to inject scripts only once
    const injectScript = (src: string, isModule: boolean = false) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (isModule) script.type = 'module';
        document.body.appendChild(script);
      }
    };

    injectScript("https://fast.wistia.com/player.js");
    injectScript("https://fast.wistia.com/embed/td0bu2np6o.js", true);
  }, []);

  const handleUnmute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!isMuted) return;

    // Immediately hide UI for better responsiveness
    setIsMuted(false);

    // Use Wistia's queue to ensure we have the video handle
    // @ts-ignore
    window._wq = window._wq || [];
    // @ts-ignore
    window._wq.push({
      id: "td0bu2np6o",
      onReady: (video: any) => {
        video.unmute();
        video.play(); // Ensure playback continues after interaction
      }
    });
  };

  // Use a PascalCase constant cast to 'any' to avoid JSX intrinsic element errors for custom tags
  const WistiaPlayer = 'wistia-player' as any;

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group">
      <style>{`
        wistia-player[media-id='td0bu2np6o']:not(:defined) {
          background: center / cover no-repeat url('https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696182c0f8a93b5ecc52aa2d.webp');
          display: block;
          padding-top: 56.25%;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(255, 215, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite;
        }
      `}</style>

      {/* 
        The Player with Autoplay enabled. 
      */}
      <WistiaPlayer 
        media-id="td0bu2np6o" 
        aspect="1.7777777777777777" 
        playbar="false" 
        play-button="false"
        auto-play="true"
        muted="true"
        settings-control="false"
        fullscreen-button="false"
      ></WistiaPlayer>

      {/* 
        Top Banner Unmute Instruction 
      */}
      {isMuted && (
        <div className="absolute top-0 left-0 right-0 z-40 flex justify-center pointer-events-none pt-2">
            <div className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold px-4 md:px-6 py-2 rounded-xl shadow-[0_10px_25px_rgba(255,215,0,0.3)] flex items-center gap-2 border border-white/20 animate-bounce-subtle">
                <VolumeX className="text-black w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                <span className="text-black font-black text-[9px] md:text-xs uppercase tracking-widest whitespace-nowrap">
                    KLIKNI NA VIDEO IN VKLJUCI ZVOK
                </span>
            </div>
        </div>
      )}

      {/* 
        Central Floating Unmute Button 
      */}
      {isMuted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <button 
            onClick={handleUnmute}
            className="pointer-events-auto bg-brand-gold hover:bg-yellow-400 text-black px-6 py-4 rounded-2xl flex flex-col items-center gap-2 shadow-2xl transition-all hover:scale-110 active:scale-95 animate-pulse-gold group/btn border-2 border-white/20"
          >
            <Volume2 className="w-8 h-8 md:w-12 md:h-12 animate-bounce-subtle" strokeWidth={3} />
            <span className="font-black text-xs md:text-sm tracking-tighter uppercase">Vključi Zvok</span>
          </button>
        </div>
      )}

      {/* 
        Transparent Overlay: 
        1. Blocks pausing by preventing clicks from reaching Wistia controls.
        2. Handles global click to unmute.
      */}
      {isMuted && (
        <div 
          onClick={handleUnmute}
          className="absolute inset-0 z-30 bg-transparent cursor-pointer"
        ></div>
      )}

      {/* Visual cue for live status */}
      <div className="absolute top-3 right-3 md:top-6 md:right-6 z-50 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">V ŽIVO</span>
        </div>
      </div>
    </div>
  );
};
