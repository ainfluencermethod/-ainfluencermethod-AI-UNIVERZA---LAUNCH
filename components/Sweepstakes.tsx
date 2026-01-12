
import React, { useState, useEffect } from 'react';
import { Smartphone, Ticket, Trophy, Sparkles } from 'lucide-react';

export const Sweepstakes: React.FC = () => {
  const [recentWinner, setRecentWinner] = useState("Luka Z. iz Kopra");
  
  // Simulated ticker
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
    <div className="py-24 md:py-32 px-4 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)] blur-[120px]"></div>
          {/* Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Ticker - Dark Pill */}
        <div className="mb-12 bg-white/5 border border-white/10 rounded-full pl-2 pr-5 py-1.5 flex items-center gap-3 backdrop-blur-md animate-fade-in-up">
            <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-bold border border-green-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> LIVE
            </div>
            <p className="text-xs text-gray-400 font-mono tracking-tight">
                <span className="font-bold text-white">{recentWinner}</span> je pravkar vstopil v žreb.
            </p>
        </div>

        {/* Main Headline Stack */}
        <div className="mb-20 relative">
            <div className="inline-flex items-center gap-2 text-[#FFD700] mb-4">
                <Trophy size={18} className="fill-[#FFD700]" />
                <span className="text-sm font-bold uppercase tracking-[0.3em]">Nagradni Sklad</span>
            </div>
            
            <h2 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#AA771C] drop-shadow-2xl filter relative z-10">
                15.000€
            </h2>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFD700]/10 blur-[100px] -z-10 rounded-full"></div>
            
            <p className="text-xl md:text-3xl text-white font-serif italic mt-4 text-shadow-sm">
                Ekskluzivno za študente <span className="text-[#FFD700]">AI Universa</span>
            </p>
        </div>

        {/* Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 md:px-0 mb-20 items-end">
            
            {/* 2nd Place: MacBook */}
            <div className="order-2 md:order-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center relative group hover:border-white/20 transition-all duration-300">
                <div className="absolute -top-4 bg-[#222] text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                    NAGRADA #2
                </div>
                
                {/* Icon Container with Shimmer */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#222] to-black border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-500 relative overflow-hidden p-4">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10"></div>
                    
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0f13bc3497e783eb5.png" 
                        alt="MacBook Pro"
                        className="w-full h-full object-contain relative z-20 group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                
                <div className="text-center">
                    <h3 className="font-bold text-white text-xl mb-1">MacBook Pro</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">M5</p>
                </div>
            </div>

            {/* 1st Place: Rolex (Center & Elevated) */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-[#151515] to-black border border-[#FFD700]/30 rounded-[2.5rem] p-10 pb-12 flex flex-col items-center relative z-10 shadow-[0_0_60px_-20px_rgba(255,215,0,0.15)] md:-translate-y-12 transform hover:-translate-y-14 transition-transform duration-500 group">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black font-black px-6 py-2 rounded-full uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center gap-2 min-w-max">
                    <Sparkles size={14} className="fill-black" /> Glavna Nagrada
                </div>
                
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FFD700]/10 blur-[50px] rounded-full pointer-events-none"></div>

                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#FFD700]/20 flex items-center justify-center mb-8 shadow-2xl relative group-hover:border-[#FFD700] transition-colors duration-500 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10"></div>
                    
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962a16398efbdd080a8d448.png" 
                        alt="Rolex Datejust" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-20" 
                    />
                </div>
                
                <div className="text-center relative z-10">
                    <h3 className="font-black text-3xl md:text-4xl text-white mb-2 tracking-tight">Rolex Datejust</h3>
                    <p className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.2em] mb-6">Jubilee Bracelet</p>
                    
                    <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                        <p className="text-[#b8860b] text-xs font-mono font-bold">VREDNOST: ~11.500€</p>
                    </div>
                </div>
            </div>

            {/* 3rd Place: iPhone */}
            <div className="order-3 md:order-3 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center relative group hover:border-white/20 transition-all duration-300">
                <div className="absolute -top-4 bg-[#222] text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                    NAGRADA #3
                </div>
                
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#222] to-black border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-500 relative overflow-hidden p-4">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10"></div>

                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0e1863868d4af000f.png" 
                        alt="iPhone 17 Pro"
                        className="w-full h-full object-contain relative z-20 group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                
                <div className="text-center">
                    <h3 className="font-bold text-white text-xl mb-1">iPhone 17 Pro</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Cosmic Orange</p>
                </div>
            </div>

        </div>

        {/* Ticket Action Area */}
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#111] via-[#151515] to-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-30 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-left max-w-lg">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="bg-[#FFD700]/10 p-2 rounded-lg">
                                <Ticket className="text-[#FFD700] w-6 h-6" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-white uppercase italic">
                                nagrada za pogum
                            </h4>
                         </div>
                         <p className="text-gray-400 text-lg leading-relaxed">
                            Vsi, ki se pridružijo do <strong className="text-white">16. 1. do 23.29</strong>, prejmejo <strong className="text-white">1x vstopnico</strong> v žrebanje za nagrade.
                         </p>
                    </div>

                    <div className="relative transform hover:scale-105 transition-transform duration-300 cursor-default">
                        <div className="bg-[#FFD700] w-64 h-32 rounded-lg flex flex-col items-center justify-center text-black relative shadow-[0_0_40px_-10px_rgba(255,215,0,0.5)] border-2 border-white/20 border-dashed">
                             <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#151515] rounded-full"></div>
                             <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#151515] rounded-full"></div>
                             
                             <span className="font-black text-6xl leading-none">1x</span>
                             <span className="text-sm font-bold uppercase tracking-[0.3em] mt-1">Vstopnica</span>
                             <div className="absolute bottom-2 text-[8px] font-mono opacity-60">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="mt-8 text-gray-500 text-xs text-center max-w-2xl mx-auto">
                *Žrebanje poteka v živo 1. februarja 2026 na zaprtem Skool klicu za člane. Nagrade so fizične in se pošljejo po pošti.
            </p>

            <div className="mt-12 pt-8 border-t border-white/5">
                 <p className="text-[10px] text-gray-600 uppercase leading-relaxed font-medium max-w-3xl mx-auto">
                    "*** OMEJITEV 1 PRIJAVE NA OSEBO/E-NASLOV. *** NAKUP ALI KAKRŠNOKOLI PLAČILO NI POGOJ ZA SODELOVANJE ALI ZMAGO. NAKUP NE POVEČA VAŠIH MOŽNOSTI ZA ZMAGO. Nagradna igra »AI Universa« je odprta le za fizične osebe s stalnim prebivališčem v Republiki Sloveniji, ki so starejše od 18 let. Nagradna igra ni veljavna izven Slovenije in kjer je to zakonsko prepovedano. Zaključi se dne 16.01.2026 Za sodelovanje veljajo celotna pravila in splošni pogoji, ki so na voljo na <button onClick={handleRulesClick} className="underline hover:text-gray-400 transition-colors uppercase cursor-pointer">aiuniverza.si/pravila</button>."
                 </p>
            </div>
        </div>

      </div>
    </div>
  );
};
