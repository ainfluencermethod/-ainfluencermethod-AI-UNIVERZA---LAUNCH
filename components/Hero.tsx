
import React from 'react';
import { Ghost, ShieldCheck, Lock, Trophy, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

interface HeroProps {
  onAction?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <div className="relative pt-32 pb-6 md:pt-48 md:pb-20 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-7xl">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-5 py-2 mb-8 animate-pulse shadow-[0_0_20px_rgba(255,49,49,0.2)]">
            <AlertTriangle size={14} className="text-brand-red" fill="currentColor" />
            <span className="text-brand-red text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                ZADNJA PRILOŽNOST: VPIS SE ZAPRE ČEZ 24 UR
            </span>
        </div>

        {/* 1. Impact Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black text-white leading-[0.95] mb-8 tracking-tighter max-w-5xl mx-auto drop-shadow-2xl">
          Nauči se graditi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5B7] to-[#D4AF37] italic pr-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">AI digitalne imperije</span> 
          <br /> 
          v letu 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-sm md:text-xl text-gray-400 font-medium mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed px-6 opacity-90">
            Pridruži se <span className="text-white font-bold border-b-2 border-brand-gold">AI Universi</span>, kjer ti pokažemo natančen sistem za gradnjo globalnih AI blagovnih znamk. Postani del digitalne elite.
        </p>

        {/* Video Player Section */}
        <div className="w-full max-w-4xl mx-auto mb-12 md:mb-16 px-2 sm:px-6 relative group">
            <div className="absolute -inset-6 bg-brand-gold/10 rounded-[3rem] blur-[80px] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Cluster */}
        <div className="w-full flex flex-col items-center relative z-20 px-4">
             <div className="flex flex-col items-center w-full max-w-[320px] md:max-w-none md:w-auto">
                 <div className="bg-black/50 border border-brand-gold/40 text-brand-gold px-6 py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.25em] flex items-center gap-3 mb-8 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all cursor-pointer group">
                    <Trophy size={16} className="fill-brand-gold animate-bounce" />
                    POTEGUJ SE ZA 15.000 € NAGRAD
                 </div>

                 <div className="relative group w-full flex justify-center cursor-pointer mb-8">
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-2xl blur-3xl animate-pulse"></div>
                    <Button 
                        onClick={onAction}
                        className="py-6 px-12 md:py-8 md:px-28 text-lg md:text-3xl font-black tracking-tighter relative z-10 shadow-2xl border-t border-white/40 rounded-2xl w-full sm:w-auto transform hover:scale-[1.02] active:scale-95"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 <div className="flex items-center gap-3 mb-10 text-brand-red font-black text-[10px] md:text-sm uppercase tracking-[0.25em] animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,49,49,1)]"></div>
                    ZADNJA MESTA ZA VPIS V LETU 2026
                 </div>

                 <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto mb-10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:border-brand-gold/50 transition-all shadow-xl">
                        <div className="bg-brand-gold/20 p-2.5 rounded-xl">
                            <Ghost className="text-brand-gold" size={20} />
                        </div>
                        <span className="text-white font-black text-[9px] md:text-xs uppercase tracking-widest text-left leading-tight">100 % BREZ<br/>OBRAZA</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:border-brand-gold/50 transition-all shadow-xl">
                        <div className="bg-brand-gold/20 p-2.5 rounded-xl">
                            <TrendingUp className="text-brand-gold" size={20} />
                        </div>
                        <span className="text-white font-black text-[9px] md:text-xs uppercase tracking-widest text-left leading-tight">VIRALNA<br/>RAST</span>
                    </div>
                 </div>

                 <div className="flex items-center justify-center gap-8 opacity-40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span>14 dni garancije</span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Lock size={14} />
                        <span>Varno plačilo</span>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};
