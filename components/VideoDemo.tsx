import React, { useEffect, useState, useRef } from 'react';
import { VolumeX, Volume2, Play, Pause } from 'lucide-react';

interface VideoDemoProps {
  videoId: string;
  thumbnailUrl?: string;
}

export const VideoDemo: React.FC<VideoDemoProps> = ({ videoId, thumbnailUrl }) => {
  const [isInitialOverlayActive, setIsInitialOverlayActive] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const wistiaApiRef = useRef<any>(null);

  useEffect(() => {
    const injectMainScript = () => {
      if (!document.getElementById("wistia-e-v1")) {
        const script = document.createElement('script');
        script.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script.id = "wistia-e-v1";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    injectMainScript();

    // @ts-ignore
    window._wq = window._wq || [];
    // @ts-ignore
    window._wq.push({
      id: videoId,
      options: {
        autoPlay: true,
        silentAutoPlay: 'allow',
        muted: true,
        playbar: false,
        playButton: false,
        smallPlayButton: false,
        settingsControl: false,
        fullscreenButton: false,
        volumeControl: false,
        videoFoam: true,
      },
      onReady: (video: any) => {
        wistiaApiRef.current = video;
        video.mute();
        video.play();
        
        video.bind('play', () => setIsPlaying(true));
        video.bind('pause', () => setIsPlaying(false));
        video.bind('end', () => setIsPlaying(false));
      }
    });

    return () => {
      if (wistiaApiRef.current) {
        wistiaApiRef.current.remove();
      }
    };
  }, [videoId]);

  const handleStartWithSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const activateSound = (video: any) => {
      if (video) {
        try {
          video.unmute();
          video.volume(1.0);
          video.time(0);
          video.play();
          setIsMuted(false);
          setIsPlaying(true);
          setIsInitialOverlayActive(false);
        } catch (err) {
          console.error("Wistia unmute error:", err);
          setIsInitialOverlayActive(false);
        }
      }
    };

    if (wistiaApiRef.current) {
      activateSound(wistiaApiRef.current);
    } else {
      // @ts-ignore
      const video = window.Wistia?.video ? window.Wistia.video(videoId) : null;
      if (video) {
        wistiaApiRef.current = video;
        activateSound(video);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (wistiaApiRef.current) {
      if (isMuted) {
        wistiaApiRef.current.unmute();
        wistiaApiRef.current.volume(1.0);
        setIsMuted(false);
      } else {
        wistiaApiRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (wistiaApiRef.current) {
      if (isPlaying) {
        wistiaApiRef.current.pause();
        setIsPlaying(false);
      } else {
        wistiaApiRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group select-none rounded-xl md:rounded-[1.2rem] shadow-2xl">
      <style>{`
        .wistia_embed {
          width: 100% !important;
          height: 100% !important;
        }
        @keyframes pulse-red-lite {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-red-lite {
          animation: pulse-red-lite 2s infinite ease-in-out;
        }
      `}</style>

      {/* Wistia Container */}
      <div 
        className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        &nbsp;
      </div>

      {/* Initial Interaction Overlay */}
      {isInitialOverlayActive && (
        <div 
          onClick={handleStartWithSound}
          className="absolute inset-0 z-[60] cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
          style={thumbnailUrl ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${thumbnailUrl}')` } : { backgroundColor: 'rgba(0,0,0,0.8)' }}
        >
          {/* Top Center: Klikni za zvok (Red Pill - Matches Image) */}
          <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 z-40">
              <div className="bg-[#ef4444] text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/20 animate-pulse-red-lite">
                  <VolumeX className="w-3 h-3 md:w-4 md:h-4 fill-white" strokeWidth={3} />
                  <span className="font-black text-[8px] md:text-[11px] uppercase tracking-wider whitespace-nowrap">
                      KLIKNI ZA ZVOK
                  </span>
              </div>
          </div>

          {/* Top Right: Live Badge (Small Badge) */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 z-40">
              <div className="bg-black/60 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-[7px] md:text-[9px] font-black text-white uppercase tracking-widest">V ŽIVO</span>
              </div>
          </div>

          {/* Central Play Area */}
          <div className="relative flex flex-col items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-[#ef4444] rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
              <Play className="w-6 h-6 md:w-10 md:h-10 fill-white text-white ml-1" />
            </div>
            
            <div className="text-center">
                <h3 className="text-white font-black text-lg md:text-3xl uppercase tracking-[0.1em] drop-shadow-xl mb-1">
                    POGLEJ VIDEO
                </h3>
                <p className="text-[#ef4444] font-bold uppercase text-[7px] md:text-[9px] tracking-[0.3em]">
                   Odkrij skrivnost AI vplivnežev
                </p>
            </div>
          </div>

          {/* Bottom Loading Sim */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
             <div className="h-full w-1/2 bg-[#ef4444] animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      )}

      {/* Paused Overlay */}
      {!isInitialOverlayActive && !isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-[55] cursor-pointer flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md">
            <Play className="w-6 h-6 md:w-8 md:h-8 fill-white text-white ml-1" />
          </div>
        </div>
      )}

      {/* Persistence Controls */}
      {!isInitialOverlayActive && (
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-[70] flex items-center gap-1.5">
          <button 
            onClick={togglePlay}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-md p-1.5 md:p-2 rounded-full border border-white/10"
          >
            {isPlaying ? <Pause className="text-white w-3 h-3 md:w-4 md:h-4 fill-white" /> : <Play className="text-white w-3 h-3 md:w-4 md:h-4 fill-white ml-0.5" />}
          </button>
          <button 
            onClick={toggleMute}
            className="bg-[#ef4444] hover:bg-red-500 p-1.5 md:p-2 rounded-full border border-white/20 shadow-lg"
          >
            {isMuted ? <VolumeX className="text-white w-3 h-3 md:w-4 md:h-4" strokeWidth={3} /> : <Volume2 className="text-white w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />}
          </button>
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-white/10 z-50">
          <div className="h-full bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,1)]" style={{ width: isInitialOverlayActive ? '20%' : 'auto' }}></div>
      </div>
    </div>
  );
};