
import React from 'react';
import { Briefcase, Ghost, Users, ShieldCheck, Lock, Zap, Trophy } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Top Center Glow (Gold) - Enhanced for text focus */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] blur-[80px]"></div>
          
          {/* Side Spotlights (White/Gold) */}
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-[100px] mix-blend-screen"></div>
          <div className="absolute top-[0%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] blur-[100px] mix-blend-screen"></div>
          
          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[90rem]">
        
        {/* Top Badge: Static Social Proof */}
        <div className="inline-flex items-center gap-2 bg-[#111] border border-brand-gold/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md animate-fade-in-up hover:bg-white/10 transition-all cursor-default shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-gold border border-black flex items-center justify-center shadow-sm">
                     <Users size={12} className="text-black fill-black" />
                </div>
                <span className="text-brand-gold text-xs md:text-sm font-black uppercase tracking-widest whitespace-nowrap drop-shadow-sm">
                    NE ZAMUDI: VPIS SE ZAPIRA 16.1.
                </span>
            </div>
        </div>

        {/* 1. Headline - Refined for high impact without unrealistic promises */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-tight md:leading-[1.1] mb-6 tracking-tighter drop-shadow-2xl max-w-6xl mx-auto animate-fade-in-up text-center px-4" style={{ animationDelay: '100ms' }}>
          Nauči se Graditi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] italic pr-4 inline-block pb-1">AI Digitalne Blagovne Znamke</span> 
          <br className="hidden md:block" /> 
          in Ustvari Svojo <span className="text-white underline decoration-brand-gold/50 underline-offset-8 decoration-4">Pot do Uspeha</span> v 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center animate-fade-in-up px-4" style={{ animationDelay: '200ms' }}>
          Pridruži se v AI Universo, kjer spoznaš <span className="text-white font-bold">preizkušene strategije</span> za gradnjo digitalne prisotnosti in <span className="text-white font-bold border-b-2 border-brand-gold/50">učinkovito uporabo AI orodij</span>. Razvij veščine, ki bodo dominirale v prihodnosti.
        </p>

        {/* Video Player - Central Focus with Glow */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16 animate-fade-in-up px-0 sm:px-4 relative group" style={{ animationDelay: '300ms' }}>
            {/* Ambient Glow behind video - Strong Pulse */}
            <div className="absolute -inset-2 bg-brand-gold/20 rounded-[2.5rem] blur-3xl animate-pulse-slow"></div>
            
            <div className="relative rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Section */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4 mt-6" style={{ animationDelay: '400ms' }}>
             
             <div className="flex flex-col items-center w-full md:w-auto relative">
                 {/* Scarcity Indicator - Gold themed */}
                 <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-5 py-2 rounded-full text-[11px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 mb-2 animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm z-30">
                    <Trophy size={16} className="fill-brand-gold" />
                    POTEGUJ SE ZA 15.000€ NAGRAD
                 </div>

                 <div className="relative group w-full md:w-auto cursor-pointer mb-8">
                    {/* Main Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-brand-gold/40 rounded-[100%] blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow pointer-events-none"></div>
                    
                    {/* Button */}
                    <Button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="py-7 px-12 md:px-28 text-2xl md:text-4xl font-black tracking-tighter relative z-10 shadow-[0_20px_50px_-10px_rgba(212,175,55,0.4)] hover:shadow-[0_30px_70px_-10px_rgba(212,175,55,0.7)] border-t border-white/40 border-b border-black/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 {/* Feature Badges */}
                 <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-lg mx-auto">
                    {/* Card 1: Faceless */}
                    <div className="flex-1 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-xl p-3 md:p-4 flex items-center gap-3 text-left group hover:border-brand-gold/30 transition-all duration-300">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-brand-gold/10 transition-colors">
                            <Ghost className="text-gray-400 group-hover:text-brand-gold transition-colors" size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-wider mb-0.5">BREZ KAZANJA OBRAZA</h4>
                            <p className="text-gray-500 text-[9px] md:text-[10px] font-bold leading-tight uppercase tracking-tight">Gradi v anonimnosti</p>
                        </div>
                    </div>

                    {/* Card 2: No Experience */}
                    <div className="flex-1 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-xl p-3 md:p-4 flex items-center gap-3 text-left group hover:border-brand-gold/30 transition-all duration-300">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-brand-gold/10 transition-colors">
                            <Briefcase className="text-gray-400 group-hover:text-brand-gold transition-colors" size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-wider mb-0.5">ZAČNI IZ NIČLE</h4>
                            <p className="text-gray-500 text-[9px] md:text-[10px] font-bold leading-tight uppercase tracking-tight">Strukturirano učenje za začetnike</p>
                        </div>
                    </div>
                 </div>

                 {/* Minimal Trust Badges */}
                 <div className="flex items-center justify-center gap-6 mt-10 opacity-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span>14-Dnevna Garancija</span>
                    </div>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Lock size={14} />
                        <span>Varno Plačilo</span>
                    </div>
                 </div>
             </div>
        </div>
        
      </div>
    </div>
  );
};
