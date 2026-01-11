import React from 'react';

export const Process: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4">
          Sistem v 3 Korakih
        </h2>
        <p className="text-gray-400 text-lg">
            Brez kompliciranja. Brez teorije. Samo akcija.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8 relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-brand-gold/50 to-white/20 opacity-30 hidden md:block"></div>

          <div className="relative bg-card-bg border border-white/10 p-8 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg hover:shadow-brand-gold/10">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                  <div className="text-9xl font-black text-white leading-none -mt-8 -mr-8">1</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 flex items-center gap-3">
                  <span className="bg-brand-gold text-black px-3 py-1 rounded text-sm font-black shrink-0 whitespace-nowrap">FAZA 1</span>
                  Kloniranje Uspeha
              </h3>
              <p className="text-gray-400 relative z-10 leading-relaxed">
                  Ne izumljaj tople vode. Uporabi naš <strong className="text-white">"Niche Finder"</strong>, da najdeš trg, kjer je denar. Nato z AI generiraj 30 videov v 1 uri.
              </p>
          </div>

          <div className="relative bg-card-bg border border-white/10 p-8 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg hover:shadow-brand-gold/10">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <div className="text-9xl font-black text-white leading-none -mt-8 -mr-8">2</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 flex items-center gap-3">
                   <span className="bg-brand-gold text-black px-3 py-1 rounded text-sm font-black shrink-0 whitespace-nowrap">FAZA 2</span>
                  Viralna Eksplozija
              </h3>
              <p className="text-gray-400 relative z-10 leading-relaxed">
                  Objavi vsebino po naši <strong className="text-white">"Algorithm Hacker"</strong> metodi. Gledalci ne bodo vedeli, da je vsebino naredil robot. Pridobi milijone ogledov brez plačila oglasov.
              </p>
          </div>

          <div className="relative bg-card-bg border border-white/10 p-8 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg hover:shadow-brand-gold/10">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <div className="text-9xl font-black text-white leading-none -mt-8 -mr-8">3</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 flex items-center gap-3">
                   <span className="bg-brand-gold text-black px-3 py-1 rounded text-sm font-black shrink-0 whitespace-nowrap">FAZA 3</span>
                  Avtomatiziran Profit
              </h3>
              <p className="text-gray-400 relative z-10 leading-relaxed">
                  Preusmeri promet na digitalne produkte (ki so že narejeni zate) ali affiliate ponudbe. <strong className="text-white">Zasluži med spanjem.</strong> To ni floskula, to je matematika.
              </p>
          </div>
      </div>
    </div>
  );
};