
import React from 'react';
import { BrainCircuit, Globe, TrendingUp } from 'lucide-react';

export const FuturePositioning: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-pulse">
             <span className="text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                POMEMBNO OPOZORILO
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 leading-tight">
            AI Ne Bo Nadomestil Ljudi. <br/>
            <span className="text-brand-gold italic">Ljudje Z AI Veščinami Bodo Dominirali.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Smo na točki preloma. Hitrost razvoja tehnologije zahteva nenehno prilagajanje. Kdor danes osvoji to tehnologijo, si gradi <strong className="text-white">digitalno prihodnost</strong>. To je tvoja priložnost, da si pridobiš znanje, preden postane standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <BrainCircuit className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ustvarjalec vs. Potrošnik</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Večina ljudi bo le pasivno uporabljala AI vsebine. Ti boš tisti, ki te vsebine razume in jih zna <strong className="text-white">strateško uporabiti</strong> za ustvarjanje dodane vrednosti.
                </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group relative overflow-hidden hover:-translate-y-1 duration-300">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-transparent"></div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <TrendingUp className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tekma z Digitalnim Razvojem</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Tradicionalne metode se spreminjajo. Zakaj bi delali na star način, če AI omogoča večjo učinkovitost? Osvoji orodja danes, da boš konkurenčen jutri. <strong className="text-white">Znanje je tvoja varnost.</strong>
                </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <Globe className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Globalni Doseg</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Splet ne pozna meja. Z AI sistemi jezikovne bariere postajajo nepomembne. Implementiraj svoje ideje na globalnih trgih, medtem ko si gradiš digitalno premoženje od doma. <strong className="text-white">Možnosti so neskončne.</strong>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
