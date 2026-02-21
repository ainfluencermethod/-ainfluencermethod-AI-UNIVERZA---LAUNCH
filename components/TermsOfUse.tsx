import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const TermsOfUse: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0B0C15] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Nazaj
        </button>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8 text-gray-300 leading-relaxed">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <Scale className="w-10 h-10 text-indigo-400" />
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Splošni pogoji uporabe</h1>
          </div>

          <section className="space-y-4">
            <p>Dobrodošli na spletnem mestu AI Univerza. Z uporabo te spletne strani se strinjate s spodaj navedenimi pogoji.</p>
            
            <h2 className="text-xl font-bold text-white">1. Lastništvo in vsebina</h2>
            <p>Vse vsebine na tej strani so last družbe 3PM d.o.o. in so zaščitene z avtorskimi pravicami. Vsakršno kopiranje, razmnoževanje ali distribucija brez predhodnega pisnega dovoljenja je prepovedana.</p>

            <h2 className="text-xl font-bold text-white">2. Uporaba spletnega mesta</h2>
            <p>Spletno mesto je namenjeno informiranju o izobraževalnih programih AI Univerza. Uporabnik se zaveže, da strani ne bo uporabljal za nezakonite namene ali pošiljanje škodljivih vsebin.</p>

            <h2 className="text-xl font-bold text-white">3. Omejitev odgovornosti</h2>
            <p>Družba 3PM d.o.o. si prizadeva za točnost podatkov, vendar ne prevzema odgovornosti za morebitne napake ali začasno nedelovanje strani. Kot je navedeno v nogi strani, rezultati programov niso tipični in niso zagotovljeni.</p>

            <h2 className="text-xl font-bold text-white">4. Pogoji za vpis</h2>
            <p>Za vstop v prioritno listo in sodelovanje v nagradni igri morajo biti uporabniki stari vsaj 18 let in imeti stalno prebivališče v Republiki Sloveniji.</p>

            <h2 className="text-xl font-bold text-white">5. Sprememba pogojev</h2>
            <p>Pridržujemo si pravico do spremembe pogojev uporabe brez predhodnega obvestila. Vse spremembe bodo objavljene na tej strani.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
