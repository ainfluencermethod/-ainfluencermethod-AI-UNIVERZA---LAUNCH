import React from 'react';
import { Ghost, ShieldCheck, Lock, Zap, Trophy, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-8 md:pt-32 md:pb-16 px-4 text-center overflow-hidden bg-black flex flex-col items-center perf-hardware-accel">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-[100px]"></div>
          <div className="absolute top-[5%] left-[-20%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,49,49,0.06),transparent_70%)] blur-[100px]"></div>
          <div className="absolute top-[5%] right-[-20%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)] blur-[100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[75rem]">
        
        {/* FINAL PUSH URGENCY BANNER */}
        <div className="inline-flex items-center gap-2 bg-brand-red border border-brand-red/50 rounded-full px-4 py-1.5 mb-6 animate-pulse-red shadow-[0_0_20px_rgba(255,49,49,0.3)] transform hover:scale-105 transition-transform cursor-default">
            <AlertTriangle size={16} className="text-white fill-white/20" />
            <span className="text-white text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase">
                ZADNJA PRILOŽNOST: VPIS SE ZAPRE ČEZ 24 UR
            </span>
        </div>

        {/* 1. Impact Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[1.05] mb-4 tracking-tighter max-w-4xl mx-auto animate-fade-in-up px-2 drop-shadow-2xl">
          Nauči se Graditi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FFFBD5] via-[#FCF6BA] to-[#B38728] italic pr-1 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">AI Digitalne Imperije</span> 
          <br className="hidden md:block" /> 
          in Prevzemi Nadzor v 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-[11px] sm:text-sm md:text-lg text-gray-400 font-medium mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-8 opacity-90">
            Pridruži se v <span className="text-white font-bold border-b border-brand-gold">AI Universo</span>, ko ti pokažemo točen sistem, ki nam je ustvaril 10.000€+ v samo 7 dneh. Brez olepšav, samo rezultati.
        </p>

        {/* Video Player Section */}
        <div className="w-full max-w-3xl mx-auto mb-10 animate-fade-in-up px-0 sm:px-4 relative group min-h-[180px]">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2.5rem] blur-[60px] opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-xl md:rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Cluster */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4">
             <div className="flex flex-col items-center w-full max-w-[320px] md:max-w-none md:w-auto relative">
                 <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-brand-gold/50 text-brand-gold px-5 py-2.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2.5 mb-5 shadow-2xl backdrop-blur-xl z-30 hover:border-brand-gold hover:scale-110 transition-all cursor-pointer group/trophy">
                    <Trophy size={16} className="fill-brand-gold animate-bounce" />
                    POTEGUJ SE ZA 15.000€ NAGRAD
                 </div>

                 <div className="relative group w-full flex justify-center cursor-pointer mb-6 animate-shake">
                    <div className="absolute inset-0 bg-brand-gold/30 rounded-xl blur-2xl animate-pulse group-hover:bg-brand-gold/50 transition-all"></div>
                    <Button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="py-4 px-12 md:py-6 md:px-24 text-sm md:text-2xl font-black tracking-tighter relative z-10 shadow-2xl border-t border-white/40 rounded-xl w-full sm:w-auto transform hover:scale-[1.03] active:scale-95"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 <div className="flex items-center gap-2 mb-8 text-brand-red font-black text-[10px] md:text-xs uppercase tracking-[0.2em] animate-pulse drop-shadow-[0_0_8px_rgba(255,49,49,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_rgba(255,49,49,1)]"></div>
                    ZADNJA MESTA ZA VPIS V 2026
                 </div>

                 <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto mb-8">
                    <div className="bg-white/[0.05] border border-white/10 rounded-xl p-4 flex items-center gap-3 group/card hover:border-brand-gold/60 hover:bg-white/[0.08] transition-all cursor-default shadow-xl">
                        <div className="bg-brand-gold/20 p-2.5 rounded-lg group-hover/card:scale-110 transition-transform shrink-0">
                            <Ghost className="text-brand-gold" size={18} />
                        </div>
                        <span className="text-white font-black text-[9px] md:text-[11px] uppercase tracking-widest text-left leading-tight">100% BREZ<br/>OBRAZA</span>
                    </div>
                    <div className="bg-white/[0.05] border border-white/10 rounded-xl p-4 flex items-center gap-3 group/card hover:border-brand-gold/60 hover:bg-white/[0.08] transition-all cursor-default shadow-xl">
                        <div className="bg-brand-gold/20 p-2.5 rounded-lg group-hover/card:scale-110 transition-transform shrink-0">
                            <TrendingUp className="text-brand-gold" size={18} />
                        </div>
                        <span className="text-white font-black text-[9px] md:text-[11px] uppercase tracking-widest text-left leading-tight">VIRALNA<br/>RAST</span>
                    </div>
                 </div>

                 <div className="flex items-center justify-center gap-6 opacity-50 text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 pb-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={12} className="text-green-500" />
                        <span>14-dni Garancija</span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Lock size={12} />
                        <span>Varno Plačilo</span>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};