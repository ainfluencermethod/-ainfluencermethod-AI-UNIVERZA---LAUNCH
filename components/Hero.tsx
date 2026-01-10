import React, { useState, useEffect } from 'react';
import { Briefcase, Ghost, Star, Users, Flame } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const badgeMessages = [
    { text: "Pridruži se 120+ članom", subtext: "ki so že začeli ustvarjati", icon: <Users size={10} className="text-black fill-black" /> },
    { text: "Še samo 15 mest prostih", subtext: "preden se cena dvigne", icon: <Flame size={10} className="text-black fill-black" /> },
    { text: "3 novi člani", subtext: "so se pridružili v zadnji uri", icon: <Star size={10} className="text-black fill-black" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBadgeIndex((prev) => (prev + 1) % badgeMessages.length);
        setFade(true);
      }, 500); // 500ms fade out transition
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Top Center Glow (Gold) - Enhanced for text focus */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)] blur-[80px]"></div>
          
          {/* Side Spotlights (White/Gold) */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-[100px] mix-blend-screen"></div>
          <div className="absolute top-[0%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)] blur-[100px] mix-blend-screen"></div>
          
          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[90rem]">
        
        {/* Top Badge: Dynamic Social Proof / Scarcity */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md animate-fade-in-up hover:bg-white/10 transition-all cursor-default min-h-[36px] min-w-[260px] justify-center shadow-[0_0_15px_rgba(255,215,0,0.05)]">
            <div className={`flex items-center gap-2 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex -space-x-1">
                     <div className="w-4 h-4 rounded-full bg-brand-gold border border-black flex items-center justify-center shadow-sm">
                         {badgeMessages[badgeIndex].icon}
                     </div>
                </div>
                <div className="flex flex-col items-start leading-none">
                     <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap drop-shadow-sm">
                        {badgeMessages[badgeIndex].text}
                     </span>
                </div>
            </div>
        </div>

        {/* 1. Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-tight mb-6 tracking-tight drop-shadow-2xl max-w-5xl mx-auto animate-fade-in-up text-center px-4" style={{ animationDelay: '100ms' }}>
          30 Dni, da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] italic pr-2">Kopiraš Moj AI&nbsp;Sistem</span> in Začneš <span className="text-white underline decoration-brand-gold/50 underline-offset-8 decoration-2">Ustvarjati Dohodek</span> v 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center animate-fade-in-up px-4" style={{ animationDelay: '200ms' }}>
          Glej mi čez ramo, ko ti pokažem točen sistem, ki mi je ustvaril <span className="text-white font-bold border-b border-brand-gold/50">10.000€+ v samo 7 dneh</span>. Brez olepšav, samo rezultati.
        </p>

        {/* Video Player - Central Focus with Glow */}
        <div className="w-full max-w-4xl mx-auto mb-10 md:mb-12 animate-fade-in-up px-0 sm:px-4 relative group" style={{ animationDelay: '300ms' }}>
            {/* Ambient Glow behind video - Strong Pulse */}
            <div className="absolute -inset-1 bg-brand-gold/50 rounded-[2rem] blur-3xl animate-pulse-slow"></div>
            
            <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.7)] bg-black z-10">
                 <VideoDemo />
            </div>
        </div>

        {/* 3. CTA Section */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4 mt-4" style={{ animationDelay: '400ms' }}>
             
             <div className="relative group w-full md:w-auto cursor-pointer mb-12">
                {/* Main Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-brand-gold/30 rounded-[100%] blur-[80px] opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow pointer-events-none"></div>
                
                {/* Button */}
                <Button 
                    onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                    className="py-5 md:py-6 px-10 md:px-16 text-xl md:text-2xl w-full md:w-auto font-black tracking-tight relative z-10 shadow-[0_20px_40px_-10px_rgba(255,215,0,0.3)] hover:shadow-[0_25px_50px_-10px_rgba(255,215,0,0.5)] border-t border-white/40 border-b border-black/20"
                    autoShimmer
                    variant="primary"
                >
                    PRIDRUŽI SE
                </Button>
             </div>
        </div>

        {/* 4. Footer Icons - Premium Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            
            <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl flex items-center justify-center gap-4 hover:border-brand-gold/30 hover:bg-white/[0.02] transition-all duration-300 group cursor-default shadow-lg backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className="bg-[#1a1a1a] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-gold/20 shrink-0 shadow-inner">
                    <Ghost size={20} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-sm uppercase tracking-wide">Brez kazanja obraza</span>
                    <span className="text-[10px] text-gray-500">100% anonimnost zagotovljena</span>
                </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl flex items-center justify-center gap-4 hover:border-brand-gold/30 hover:bg-white/[0.02] transition-all duration-300 group cursor-default shadow-lg backdrop-blur-sm relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className="bg-[#1a1a1a] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-gold/20 shrink-0 shadow-inner">
                    <Briefcase size={20} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-sm uppercase tracking-wide">Brez izkušenj</span>
                    <span className="text-[10px] text-gray-500">Primerno za popolne začetnike</span>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};