import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Trophy, Sparkles } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Detect if mouse moves out of the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        try {
          const lastShown = localStorage.getItem('exit-popup-shown');
          if (!lastShown) {
            setIsVisible(true);
            setHasShown(true);
            localStorage.setItem('exit-popup-shown', 'true');
          }
        } catch (err) {
          // Fallback if localStorage is disabled
          setIsVisible(true);
          setHasShown(true);
        }
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Small Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 border border-gray-100">
        
        {/* Urgent Top Bar */}
        <div className="bg-brand-red h-1.5 w-full"></div>

        {/* Close Button */}
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 text-gray-400 hover:text-black transition-colors z-20"
        >
            <X size={20} />
        </button>

        <div className="p-6 md:p-8 flex flex-col items-center text-center">
            {/* Minimal Headline */}
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Sparkles size={12} fill="currentColor" /> NE ODHAJAJ ŠE
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-black leading-none tracking-tighter mb-4 uppercase">
                ČAKAJ! <br/> <span className="text-brand-red">NE ZAMUDI!</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 font-bold mb-6 leading-tight max-w-[280px]">
                Tvoja vstopnica za <span className="text-black underline">15.000 € NAGRADNI SKLAD</span> bo pripadla nekomu drugemu.
            </p>

            {/* Small Main Prize Visual */}
            <div className="relative w-32 h-32 mb-6 group">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-colors"></div>
                <div className="relative h-full flex items-center justify-center bg-black rounded-full border-2 border-brand-gold shadow-xl p-4 overflow-hidden">
                    <img 
                        src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962a16398efbdd080a8d448.png" 
                        alt="Rolex"
                        className="w-full h-auto object-contain drop-shadow-[0_5px_10px_rgba(212,175,55,0.4)]"
                    />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[8px] font-black px-2 py-0.5 rounded-full border border-white shadow-md">
                    GLAVNA NAGRADA
                </div>
            </div>

            {/* Compact CTA */}
            <button 
                onClick={() => {
                    setIsVisible(false);
                    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-brand-red hover:bg-[#e02b2b] text-white font-black text-lg py-4 rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 uppercase tracking-tighter flex items-center justify-center gap-2 group"
            >
                ZAGOTOVI SI MESTO
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
            
            <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <Trophy size={10} className="text-brand-gold" /> VPIS SE ZAPIRA KMALU
            </p>
        </div>
      </div>
    </div>
  );
};