import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Star, Lock, Timer, Crown, Watch, Video, Eye, X } from 'lucide-react';
import { Button } from './Button';

interface UpsellModalProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ onAccept, onDecline }) => {
  // Scarcity Timer
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes for high ticket decision

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleUpgrade = () => {
    window.location.href = "https://buy.stripe.com/3cI9AUgk68cQ0Ml5os93y06";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in-95 duration-500 overflow-y-auto">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden fixed">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-5xl w-full bg-[#0a0a0a] text-white rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-brand-gold/20 my-8">
        
        {/* Warning Bar - Platinum Style */}
        <div className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black p-3 text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-lg relative z-20">
             <div className="flex items-center gap-2 font-black uppercase tracking-widest text-xs md:text-sm animate-pulse">
                <AlertCircle size={18} />
                Čakaj! Tvoje naročilo še ni zaključeno...
             </div>
             <div className="hidden md:block w-px h-4 bg-black/20"></div>
             <div className="flex items-center gap-2 font-mono text-xs font-bold bg-black/10 px-3 py-1 rounded-full">
                <Timer size={14} />
                Rezervirano še: {formatTime(timeLeft)}
             </div>
        </div>

        <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: The Offer Visuals */}
            <div className="lg:w-5/12 bg-[#050505] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.03)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px] opacity-50"></div>
                
                <div className="relative z-10 text-center lg:text-left mb-8">
                    <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-brand-gold/20">
                        <Crown size={12} />
                        VIP Upgrade
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black uppercase leading-none mb-4">
                        Inner <br/><span className="text-brand-gold">Circle</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        To ni za vsakogar. To je ekskluzivno povabilo za tiste, ki želijo neposreden dostop do ustanoviteljev in vpogled v "zakulisje".
                    </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-[0_0_50px_rgba(255,215,0,0.15)] group">
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696182c0f8a93b5ecc52aa2d.webp" 
                        alt="Inner Circle" 
                        className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                        <div className="text-brand-gold font-black text-xl tracking-widest uppercase border-y border-brand-gold/50 py-2 bg-black/50 backdrop-blur-sm">
                            VIP Dostop
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 opacity-50">
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Watch size={18} className="text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold">Rolex</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Video size={18} className="text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold">Calls</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Eye size={18} className="text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold">BTS</span>
                     </div>
                </div>
            </div>

            {/* Right Side: The Copy & Action */}
            <div className="lg:w-7/12 p-6 lg:p-12 flex flex-col justify-center">
                
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    Kaj prejmeš kot <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">VIP Član</span>?
                </h3>
                
                <ul className="space-y-4 mb-8">
                    {/* Bonus 1 */}
                    <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-brand-gold/30 transition-colors">
                        <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold mt-1">
                            <Video size={20} />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-lg">1x Tedenski Mentorski Klic</span>
                            <span className="text-sm text-gray-400">
                                Direktna linija do nas. Rešujemo tvoje probleme v živo. Brez čakanja na email odgovore.
                            </span>
                        </div>
                    </li>

                    {/* Bonus 2 */}
                    <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-brand-gold/30 transition-colors">
                        <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold mt-1">
                            <Crown size={20} />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-lg">Insiders "VIP" Chat</span>
                            <span className="text-sm text-gray-400">
                                Dostop do zasebne skupine, kjer so samo "High-Level" igralci in ustanovitelji. Networking na najvišjem nivoju.
                            </span>
                        </div>
                    </li>

                    {/* Bonus 3 */}
                    <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-brand-gold/30 transition-colors relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                        <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold mt-1">
                            <Watch size={20} />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-lg">3x Rolex Entries (Povečaj Možnosti)</span>
                            <span className="text-sm text-gray-400">
                                Tvoje ime gre v žrebalni boben <strong className="text-brand-gold">3-krat</strong> namesto enkrat. Matematično 300% večja možnost za zmago.
                            </span>
                        </div>
                    </li>

                    {/* Bonus 4 */}
                    <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-brand-gold/30 transition-colors">
                        <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold mt-1">
                            <Eye size={20} />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-lg">"God Mode" Launch BTS</span>
                            <span className="text-sm text-gray-400">
                                Pokažemo ti TOČNO, kako smo skreirali hype in "vibe-code" za celoten launch v samo 6 dneh. (Landing strani, emaili, grafike, psihologija).
                            </span>
                        </div>
                    </li>
                </ul>

                {/* Price Block */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 border-t border-b border-white/10 py-6">
                     <div className="text-left">
                        <div className="text-gray-500 text-xs uppercase font-bold tracking-wide mb-1">Skupna Vrednost Paketa</div>
                        <div className="text-xl text-gray-400 font-bold line-through decoration-red-500 decoration-2">12.500€</div>
                     </div>
                     <div className="text-right flex flex-col items-end">
                         <div className="text-brand-gold text-xs uppercase font-bold tracking-wide mb-1 flex items-center gap-1">
                            <Lock size={10} /> One Time Offer
                         </div>
                         <div className="text-5xl font-black text-white leading-none tracking-tight">997€</div>
                     </div>
                </div>

                <div className="space-y-4">
                    {/* Replaced Stripe Embed Button */}
                    <div className="w-full">
                         <Button 
                             onClick={handleUpgrade}
                             className="w-full py-5 text-xl font-black uppercase shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                             variant="primary"
                             autoShimmer
                         >
                             DA! NADGRADI MOJE NAROČILO
                         </Button>
                    </div>
                    
                    <button 
                        onClick={onDecline}
                        className="w-full text-center text-gray-500 text-sm hover:text-white transition-colors py-2 flex items-center justify-center gap-2 group"
                    >
                        <X size={14} className="group-hover:text-red-500 transition-colors" />
                        Ne hvala, zadovoljen sem z osnovnim paketom in manjšimi možnostmi za zmago.
                    </button>
                </div>

            </div>
        </div>

        <div className="bg-[#050505] p-4 text-center border-t border-white/10">
             <div className="flex items-center justify-center gap-2 opacity-50 text-[10px] text-gray-400 uppercase tracking-widest">
                <Lock size={12} /> Secure 256-bit SSL Encryption &nbsp;•&nbsp; 14-Day Money Back Guarantee
             </div>
        </div>
      </div>
    </div>
  );
};