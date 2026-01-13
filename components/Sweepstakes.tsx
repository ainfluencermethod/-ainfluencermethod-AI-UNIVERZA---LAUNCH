
import React, { useState, useEffect } from 'react';
import { Smartphone, Ticket, Trophy, Sparkles, Star, ShieldCheck } from 'lucide-react';

export const Sweepstakes: React.FC = () => {
  const [recentWinner, setRecentWinner] = useState("Luka Z. iz Kopra");
  
  useEffect(() => {
    const winners = ["Marko K. iz Ljubljane", "Nina P. iz Maribora", "Luka Z. iz Kopra", "Maja S. iz Celja", "Jan B. iz Kranja"];
    let i = 0;
    const interval = setInterval(() => {
        i = (i + 1) % winners.length;
        setRecentWinner(winners[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRulesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/?step=rules');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="py-24 md:py-40 px-4 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Ambience - Gold themed studio setup */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_60%)]"></div>
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
          {/* Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Live Ticker */}
        <div className="mb-12 bg-black/40 border border-brand-gold/20 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 backdrop-blur-xl animate-fade-in-up shadow-2xl">
            <div className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-[10px] font-black border border-brand-gold/30 flex items-center gap-1.5 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></div> V ŽIVO
            </div>
            <p className="text-xs text-gray-400 font-bold tracking-tight">
                <span className="text-white">{recentWinner}</span> je pravkar vstopil v žreb.
            </p>
        </div>

        {/* Impact Headline */}
        <div className="mb-24 relative">
            <div className="inline-flex items-center gap-3 text-brand-gold mb-6 bg-brand-gold/5 px-6 py-2 rounded-full border border-brand-gold/20 backdrop-blur-sm">
                <Trophy size={20} className="fill-brand-gold" />
                <span className="text-sm md:text-base font-black uppercase tracking-[0.4em]">Nagradni Sklad</span>
            </div>
            
            <h2 className="text-[6rem] sm:text-[9rem] md:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] via-[#B38728] via-[#FBF5B7] to-black drop-shadow-[0_20px_50px_rgba(212,175,55,0.4)] relative z-10 filter brightness-110">
                15.000€
            </h2>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/5 blur-[120px] -z-10 rounded-full"></div>
            
            <p className="text-2xl md:text-4xl text-white font-serif italic mt-6 drop-shadow-lg font-bold">
                Ekskluzivno za študente <span className="text-brand-gold">AI Universa</span>
            </p>
        </div>

        {/* Podium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-24 items-end px-4">
            
            {/* 2nd Place: MacBook */}
            <div className="order-2 md:order-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center relative group hover:border-white/20 transition-all duration-500 shadow-2xl">
                <div className="absolute -top-5 bg-[#222] text-gray-300 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-white/10 shadow-xl">
                    NAGRADA #2
                </div>
                
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#111] to-black border border-white/5 flex items-center justify-center mb-8 shadow-inner relative overflow-hidden p-6 group-hover:scale-110 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0f13bc3497e783eb5.png" 
                        alt="MacBook Pro"
                        className="w-full h-full object-contain relative z-20"
                    />
                </div>
                
                <div className="text-center">
                    <h3 className="font-black text-white text-2xl mb-1 tracking-tight">MacBook Pro</h3>
                    <p className="text-xs text-gray-500 font-black uppercase tracking-[0.3em]">M5 CHIP</p>
                </div>
            </div>

            {/* 1st Place: Rolex (The Centerpiece) */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-[#151515] to-black border-2 border-brand-gold/30 rounded-[3rem] p-12 pb-16 flex flex-col items-center relative z-20 shadow-[0_0_100px_-20px_rgba(212,175,55,0.3)] md:-translate-y-16 group transform hover:-translate-y-20 transition-all duration-700">
                {/* GOLD RAY EFFECT */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(212,175,55,0.05)_45deg,transparent_90deg)] animate-[spin_10s_linear_infinite] pointer-events-none opacity-40"></div>
                
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-gold text-black font-black px-8 py-3 rounded-full uppercase tracking-[0.3em] text-xs shadow-[0_0_40px_rgba(212,175,55,0.5)] flex items-center gap-2 whitespace-nowrap border-2 border-white/20">
                    <Sparkles size={16} className="fill-black" /> GLAVNA NAGRADA
                </div>
                
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-brand-gold/30 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden p-4 group-hover:border-brand-gold transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962a16398efbdd080a8d448.png" 
                        alt="Rolex Datejust" 
                        className="w-full h-full object-contain relative z-20 group-hover:scale-110 transition-transform duration-700" 
                    />
                </div>
                
                <div className="text-center relative z-10">
                    <h3 className="font-black text-4xl md:text-5xl text-white mb-3 tracking-tighter uppercase">Rolex Datejust</h3>
                    <p className="text-brand-gold text-sm font-black uppercase tracking-[0.4em] mb-8 drop-shadow-sm">Jubilee Bracelet</p>
                    
                    <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl px-8 py-4 backdrop-blur-xl shadow-inner">
                        <p className="text-brand-gold text-sm font-mono font-black tracking-widest">VREDNOST: ~11.500€</p>
                    </div>
                </div>
            </div>

            {/* 3rd Place: iPhone */}
            <div className="order-3 md:order-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center relative group hover:border-white/20 transition-all duration-500 shadow-2xl">
                <div className="absolute -top-5 bg-[#222] text-gray-300 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-white/10 shadow-xl">
                    NAGRADA #3
                </div>
                
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#111] to-black border border-white/5 flex items-center justify-center mb-8 shadow-inner relative overflow-hidden p-8 group-hover:scale-110 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0e1863868d4af000f.png" 
                        alt="iPhone 17 Pro"
                        className="w-full h-full object-contain relative z-20"
                    />
                </div>
                
                <div className="text-center">
                    <h3 className="font-black text-white text-2xl mb-1 tracking-tight">iPhone 17 Pro</h3>
                    <p className="text-xs text-gray-500 font-black uppercase tracking-[0.3em]">COSMIC ORANGE</p>
                </div>
            </div>

        </div>

        {/* Golden Ticket UI */}
        <div className="w-full max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-[#111] to-black border border-brand-gold/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group shadow-2xl">
                {/* Metallic Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="text-left max-w-xl">
                         <div className="flex items-center gap-4 mb-6">
                            <div className="bg-gradient-to-br from-[#BF953F] to-[#B38728] p-3 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                <Ticket className="text-black w-8 h-8" strokeWidth={2.5} />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                                NAGRADA ZA POGUM
                            </h4>
                         </div>
                         <p className="text-gray-400 text-xl leading-relaxed font-medium">
                            Vsi, ki se pridružijo do <strong className="text-white font-black underline decoration-brand-gold decoration-2">16. 1. do 23.29</strong>, prejmejo <strong className="text-white font-black">1x vstopnico</strong> v žrebanje za nagrade.
                         </p>
                         <div className="mt-8 flex items-center gap-6">
                            <div className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest">
                                <ShieldCheck size={16} className="text-brand-gold" /> Varno Žrebanje
                            </div>
                            <div className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest">
                                <Star size={16} className="text-brand-gold fill-brand-gold" /> Omejena Priložnost
                            </div>
                         </div>
                    </div>

                    {/* The Golden Ticket Object */}
                    <div className="relative group/ticket transform hover:scale-110 transition-transform duration-500 cursor-default shrink-0">
                        {/* Shadow Glow */}
                        <div className="absolute inset-0 bg-brand-gold/20 blur-3xl opacity-0 group-hover/ticket:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] w-72 h-40 rounded-2xl flex flex-col items-center justify-center text-black relative shadow-2xl border-4 border-white/20 overflow-hidden">
                             {/* Perforation Effects */}
                             <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full border-r-4 border-white/10"></div>
                             <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full border-l-4 border-white/10"></div>
                             
                             {/* Ticket Pattern */}
                             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                             
                             {/* Metallic Shine */}
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/ticket:translate-x-full transition-transform duration-1000"></div>
                             
                             <span className="font-black text-7xl leading-none drop-shadow-xl relative z-10">1x</span>
                             <span className="text-sm font-black uppercase tracking-[0.4em] mt-2 relative z-10 border-t border-black/20 pt-1">Vstopnica</span>
                             <div className="absolute bottom-3 text-[9px] font-mono opacity-50 font-black tracking-widest">GOLDEN-ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="mt-12 text-gray-600 text-[10px] md:text-xs text-center max-w-3xl mx-auto font-medium leading-relaxed opacity-60">
                *Žrebanje poteka v živo 1. februarja 2026 na zaprtem Skool klicu za člane. Nagrade so fizične in se pošljejo po pošti na naslov nagrajenca v Sloveniji.
            </p>

            <div className="mt-16 pt-10 border-t border-white/5">
                 <p className="text-[9px] text-gray-700 uppercase leading-relaxed font-black max-w-4xl mx-auto tracking-tight">
                    "*** OMEJITEV 1 PRIJAVE NA OSEBO/E-NASLOV. *** NAKUP ALI KAKRŠNOKOLI PLAČILO NI POGOJ ZA SODELOVANJE ALI ZMAGO. NAKUP NE POVEČA VAŠIH MOŽNOSTI ZA ZMAGO. Nagradna igra »AI Universa« je odprta le za fizične osebe s stalnim prebivališčem v Republiki Sloveniji, ki so starejše od 18 let. Nagradna igra ni veljavna izven Slovenije in kjer je to zakonsko prepovedano. Zaključi se dne 16.01.2026 Za sodelovanje veljajo celotna pravila in splošni pogoji, ki so na voljo na <button onClick={handleRulesClick} className="underline hover:text-brand-gold transition-colors uppercase cursor-pointer font-black">aiuniverza.si/pravila</button>."
                 </p>
            </div>
        </div>

      </div>
    </div>
  );
};
