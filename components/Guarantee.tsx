
import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <div className="py-12 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-brand-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Seal Effect */}
            <div className="absolute -right-10 -bottom-10 opacity-10">
                <ShieldCheck size={300} className="text-brand-gold" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.4)] border-4 border-white/10 relative">
                        <div className="absolute inset-2 border border-black/20 rounded-full"></div>
                        <div className="text-center text-black leading-none">
                            <span className="block text-4xl md:text-5xl font-black">14</span>
                            <span className="block text-xs font-bold uppercase tracking-wider mt-1">Dnevna<br/>Garancija</span>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-4 uppercase italic">
                        100% Brez Tveganja
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Tako smo prepričani v AI Universo, da prevzamemo vso tveganje. 
                        Če v 14 dneh ne boš navdušen nad vsebino ali rezultati, ti povrnemo celotno kupnino. 
                        Brez vprašanj. Brez drobnega tiska.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <Check className="text-brand-gold" size={16} /> Takojšnja povrnitev
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
