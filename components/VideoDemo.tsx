
import React, { useEffect, useState, useRef } from 'react';
import { VolumeX, Volume2, Play, Pause, Users } from 'lucide-react';

interface VideoDemoProps {
  videoId: string;
  thumbnailUrl?: string;
}

export const VideoDemo: React.FC<VideoDemoProps> = ({ videoId, thumbnailUrl }) => {
  const [isInitialOverlayActive, setIsInitialOverlayActive] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewerCount, setViewerCount] = useState(842);
  const wistiaApiRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic viewer count simulation
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 5000);

    // Inject Wistia main script
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

    // Initialize Wistia queue
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
        
        // Listen for external state changes to keep UI in sync
        video.bind('play', () => setIsPlaying(true));
        video.bind('pause', () => setIsPlaying(false));
        video.bind('end', () => setIsPlaying(false));
      }
    });

    return () => {
      clearInterval(interval);
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
      } else {
        // @ts-ignore
        window._wq.push({
          id: videoId,
          onReady: (v: any) => {
            wistiaApiRef.current = v;
            activateSound(v);
          }
        });
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
    <div className="relative w-full aspect-video bg-black overflow-hidden group select-none rounded-xl md:rounded-[1.5rem] shadow-2xl">
      <style>{`
        .wistia_embed {
          width: 100% !important;
          height: 100% !important;
        }
        @keyframes pulse-red {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.6); }
          50% { transform: scale(1.08); box-shadow: 0 0 50px 15px rgba(255, 0, 0, 0.2); }
        }
        .animate-pulse-red {
          animation: pulse-red 1.5s infinite ease-in-out;
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
          className="absolute inset-0 z-[60] cursor-pointer flex flex-col items-center justify-center transition-all duration-500 bg-cover bg-center"
          style={thumbnailUrl ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('${thumbnailUrl}')` } : { backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          {/* Top Center: Click for sound badge */}
          <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-40 group/sound">
              <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(255,0,0,0.5)] flex items-center gap-3 border border-white/30 transform transition-all group-hover/sound:scale-110 active:scale-95">
                  <VolumeX className="w-5 h-5 fill-white" strokeWidth={3} />
                  <span className="font-black text-[11px] md:text-[13px] uppercase tracking-[0.2em] whitespace-nowrap">
                      KLIKNI ZA ZVOK
                  </span>
              </div>
              <p className="text-white/60 text-[10px] text-center mt-3 font-bold uppercase tracking-widest opacity-0 group-hover/sound:opacity-100 transition-opacity">
                Vklopi svojo prihodnost
              </p>
          </div>

          {/* Social Proof Badges */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-2.5 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                <Users size={12} className="text-red-500" />
                <span className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-wider whitespace-nowrap">
                  {viewerCount} LJUDI TRENUTNO GLEDA
                </span>
              </div>
          </div>

          {/* Central Action Area */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-24 h-24 md:w-36 md:h-36 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,0,0,0.5)] transition-all hover:scale-110 active:scale-95 z-10 animate-pulse-red border-4 border-white/20">
              <Play className="w-12 h-12 md:w-20 md:h-20 fill-white text-white ml-2" />
            </div>
            
            <div className="text-center">
                <h3 className="text-white font-black text-3xl md:text-5xl uppercase tracking-[0.2em] drop-shadow-[0_10px_20px_rgba(0,0,0,1)] mb-2">
                    POGLEJ VIDEO
                </h3>
                <p className="text-red-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.4em] drop-shadow-lg">
                   Odkrij skrivnost AI vplivnežev
                </p>
            </div>
          </div>

          {/* Bottom Loading Bar Sim */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full w-1/3 bg-red-600 animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      )}

      {/* Paused Overlay */}
      {!isInitialOverlayActive && !isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-[55] cursor-pointer flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300"
        >
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md">
            <Play className="w-10 h-10 md:w-16 md:h-16 fill-white text-white ml-2" />
          </div>
        </div>
      )}

      {/* Persistent Controls Container */}
      {!isInitialOverlayActive && (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-[70] flex items-center gap-3">
          {/* Play/Pause Control */}
          <button 
            onClick={togglePlay}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/10 flex items-center justify-center shadow-xl transition-all active:scale-90 group"
          >
            {isPlaying ? (
              <Pause className="text-white w-5 h-5 md:w-7 md:h-7 fill-white" />
            ) : (
              <Play className="text-white w-5 h-5 md:w-7 md:h-7 fill-white ml-1" />
            )}
          </button>

          {/* Volume Control */}
          <button 
            onClick={toggleMute}
            className="bg-red-600 hover:bg-red-500 p-3 md:p-4 rounded-full border border-white/30 flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all active:scale-90 group"
            title={isMuted ? "Vklopi zvok" : "Izklopi zvok"}
          >
            {isMuted ? (
              <VolumeX className="text-white w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
            ) : (
              <Volume2 className="text-white w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
            )}
          </button>
        </div>
      )}

      {/* Progress Bar Container */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-white/10 z-50">
          <div 
            className="h-full bg-gradient-to-r from-red-800 to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-1000 relative overflow-hidden" 
            style={{ width: isInitialOverlayActive ? '18%' : 'auto' }}
          >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
      </div>

      {/* Live Badge (Top Right) */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[70] pointer-events-none">
        <div className="bg-black/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 flex items-center gap-3 shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(255,0,0,1)]"></div>
            <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.3em]">V ŽIVO</span>
        </div>
      </div>
    </div>
  );
};
