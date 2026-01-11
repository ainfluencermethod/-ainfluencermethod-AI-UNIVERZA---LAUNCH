import React, { useEffect, useState, useRef } from 'react';
import { VolumeX, Volume2, Play } from 'lucide-react';

export const VideoDemo: React.FC = () => {
  const [isInitialOverlayActive, setIsInitialOverlayActive] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const wistiaApiRef = useRef<any>(null);
  const videoId = "ew9yvthesh";
  const thumbnailUrL = "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp";

  useEffect(() => {
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

    // Initialize Wistia queue with strict VSL options (unskippable)
    // @ts-ignore
    window._wq = window._wq || [];
    // @ts-ignore
    window._wq.push({
      id: videoId,
      options: {
        autoPlay: true,
        silentAutoPlay: 'allow',
        muted: true,
        playbar: false, // UNSKIPPABLE: Disable progress bar
        playButton: false, // Disable big play button
        smallPlayButton: false, // Disable small play button
        settingsControl: false, // Disable settings
        fullscreenButton: false, // Disable fullscreen to keep focus on VSL
        volumeControl: false, // We use our own custom control
        videoFoam: true,
      },
      onReady: (video: any) => {
        wistiaApiRef.current = video;
        video.mute(); // Start muted for browser compatibility
        video.play();
      }
    });

    return () => {
      if (wistiaApiRef.current) {
        wistiaApiRef.current.remove();
      }
    };
  }, []);

  const handleStartWithSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const activateSound = (video: any) => {
      if (video) {
        try {
          // ENSURE VIDEO STARTS FROM BEGINNING WITH SOUND
          video.unmute();
          video.volume(1.0);
          video.time(0); // Seek to the beginning
          video.play();
          setIsMuted(false);
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
      // Safety check for global Wistia object to avoid TypeError
      // @ts-ignore
      const video = window.Wistia?.video ? window.Wistia.video(videoId) : null;
      if (video) {
        wistiaApiRef.current = video;
        activateSound(video);
      } else {
        // Fallback to queue if not yet ready
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

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group select-none rounded-xl md:rounded-[1.5rem] shadow-2xl">
      <style>{`
        .wistia_embed {
          width: 100% !important;
          height: 100% !important;
        }
        @keyframes pulse-gold {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 40px 10px rgba(255, 215, 0, 0); }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite ease-in-out;
        }
      `}</style>

      {/* Wistia Container */}
      <div 
        className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        &nbsp;
      </div>

      {/* Initial Interaction Overlay with Custom Thumbnail */}
      {isInitialOverlayActive && (
        <div 
          onClick={handleStartWithSound}
          className="absolute inset-0 z-[60] cursor-pointer flex flex-col items-center justify-center transition-all duration-500 hover:bg-black/20 backdrop-blur-[1px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${thumbnailUrL}')` }}
        >
          {/* Top Yellow Pill - "KLIKNI ZA ZVOK" */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40">
              <div className="bg-[#FFD700] text-black px-8 py-3 rounded-full shadow-[0_10px_40px_rgba(255,215,0,0.6)] flex items-center gap-3 border-2 border-white/20">
                  <VolumeX className="w-5 h-5 fill-black" strokeWidth={3} />
                  <span className="font-black text-xs md:text-sm uppercase tracking-[0.15em] whitespace-nowrap">
                      KLIKNI ZA ZVOK
                  </span>
              </div>
          </div>

          {/* Central Play Button Visual */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-24 h-24 md:w-44 md:h-44 bg-[#FFD700] rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,215,0,0.5)] transition-all hover:scale-110 active:scale-95 z-10 animate-pulse-gold">
              <Play className="w-12 h-12 md:w-24 md:h-24 fill-black text-black ml-3" />
            </div>
            
            {/* Bold Call to Action */}
            <h3 className="text-white font-black text-3xl md:text-[4rem] uppercase tracking-[0.1em] drop-shadow-[0_4px_15px_rgba(0,0,0,1)]">
                POGLEJ VIDEO
            </h3>
          </div>
        </div>
      )}

      {/* Persistent Volume Control (Visible after unmuting) */}
      {!isInitialOverlayActive && (
        <button 
          onClick={toggleMute}
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-[70] bg-[#FFD700] hover:bg-yellow-400 p-4 md:p-5 rounded-full border-2 border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all active:scale-90 group"
          title={isMuted ? "Vklopi zvok" : "Izklopi zvok"}
        >
          {isMuted ? (
            <VolumeX className="text-black w-6 h-6 md:w-9 md:h-9" strokeWidth={3} />
          ) : (
            <Volume2 className="text-black w-6 h-6 md:w-9 md:h-9" strokeWidth={3} />
          )}
        </button>
      )}

      {/* Fake Red Progress Bar at Bottom (Visual only) */}
      <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-white/10 z-50">
          <div className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all duration-1000" style={{ width: '15%' }}></div>
      </div>

      {/* Live Badge (Top Right) */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-[70] pointer-events-none">
        <div className="bg-black/70 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 flex items-center gap-3 shadow-2xl">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
            <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.25em]">V ŽIVO</span>
        </div>
      </div>
    </div>
  );
};