import React from 'react';
import { Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-3">
                Matematika je <span className="text-[#FFD700] italic">Jasna</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto">
                V življenju imaš vedno 3 izbire. Poglejmo si ceno vsake izmed njih.
            </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
            
            {/* Option 1: Do Nothing */}
            <div className="bg-[#0C0C0C] rounded-2xl p-6 border border-white/5 flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity">
                <div className="mb-4">
                    <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-1">Nič ne narediš</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-gray-400">0€</span>
                        <span className="text-gray-600 text-xs font-bold">vložka</span>
                    </div>
                </div>
                
                <div className="space-y-4 text-sm flex-1">
                    <div className="pt-4 border-t border-white/5">
                        <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">Rezultat</p>
                        <p className="text-gray-500">Ista služba, isti šef, ista plača.</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">Tveganje</p>
                        <p className="text-red-900/80 font-bold">Inflacija ti požre prihranke.</p>
                    </div>
                     <div>
                        <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">Čas do uspeha</p>
                        <p className="text-gray-600 font-mono">Nikoli</p>
                    </div>
                </div>
            </div>

            {/* Option 2: Classic Biz */}
            <div className="bg-[#0C0C0C] rounded-2xl p-6 border border-white/5 flex flex-col h-full relative overflow-hidden group">
                 <div className="mb-4 relative z-10">
                    <h3 className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-1">Klasičen Biznis</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">10k€+</span>
                        <span className="text-gray-500 text-xs font-bold">vložka</span>
                    </div>
                </div>
                
                <div className="space-y-4 text-sm flex-1 relative z-10">
                    <div className="pt-4 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Rezultat</p>
                        <p className="text-gray-400">Visok stres, birokracija, 80% propad.</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Tveganje</p>
                        <p className="text-orange-500/80 font-bold">Visoko. Lahko izgubiš vse.</p>
                    </div>
                     <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Čas do uspeha</p>
                        <p className="text-gray-400 font-mono">3 - 5 let</p>
                    </div>
                </div>
            </div>

            {/* Option 3: AI Univerza - Hero Card */}
            <div className="bg-[#111] rounded-2xl p-6 border-2 border-[#FFD700] flex flex-col relative shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] transform md:scale-105 z-10">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Najboljša izbira
                </div>

                <div className="mb-6 text-center">
                    <h3 className="text-[#FFD700] font-black text-lg uppercase tracking-wider mb-1">AI Univerza</h3>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-black text-white">497€</span>
                        <span className="text-gray-400 text-xs font-bold">Enkratno plačilo / leto</span>
                    </div>
                </div>
                
                <div className="space-y-4 text-sm bg-white/5 rounded-xl p-4">
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Rezultat</p>
                        <p className="text-white font-bold">Nov vir prihodka & svoboda.</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Tveganje</p>
                        <p className="text-[#4ADE80] font-bold flex items-center gap-1">
                            <Check size={14} strokeWidth={4} /> Ničelno (Garancija).
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Čas do uspeha</p>
                        <p className="text-[#FFD700] font-mono font-bold">30 - 60 dni</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};