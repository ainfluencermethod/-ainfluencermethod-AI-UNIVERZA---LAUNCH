
import React from 'react';
import { ArrowLeft, Gavel } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { step: 'landing' } }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
            <button onClick={handleBack} className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest cursor-pointer group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Nazaj na domačo stran
            </button>
        </div>

        <div className="border-b border-white/10 pb-8 mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tight">
                Splošni <span className="text-brand-gold">Pogoji uporabe</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Gavel size={16} />
                <span>Pravni pogoji uporabe spletne strani aiuniverza.si</span>
            </div>
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-gray-300">
            <p>Dobrodošli na spletnem mestu AI Univerza. Z uporabo te spletne strani se strinjate s spodaj navedenimi pogoji.</p>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">1. Lastništvo in vsebina</h2>
                <p>Vse vsebine na tej strani so last družbe 3PM d.o.o. in so zaščitene z avtorskimi pravicami. Vsakršno kopiranje, razmnoževanje ali distribucija brez predhodnega pisnega dovoljenja je prepovedana.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">2. Uporaba spletnega mesta</h2>
                <p>Spletno mesto je namenjeno informiranju o izobraževalnih programih AI Univerza. Uporabnik se zaveže, da strani ne bo uporabljal za nezakonite namene ali pošiljanje škodljivih vsebin.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">3. Omejitev odgovornosti</h2>
                <p>Družba 3PM d.o.o. si prizadeva za točnost podatkov, vendar ne prevzema odgovornosti za morebitne napake ali začasno nedelovanje strani. Kot je navedeno v nogi strani, rezultati programov niso tipični in niso zagotovljeni.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">4. Pogoji za vpis</h2>
                <p>Za vstop v prioritno listo in sodelovanje v nagradni igri morajo biti uporabniki stari vsaj 18 let in imeti stalno prebivališče v Republiki Sloveniji.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">5. Sprememba pogojev</h2>
                <p>Pridržujeme si pravico do spremembe pogojev uporabe brez predhodnega obvestila. Vse spremembe bodo objavljene na tej strani.</p>
            </section>

            <div className="pt-12 border-t border-white/10 mt-12 text-center text-gray-500 text-xs">
                 <p className="mb-2">Posodobljeno: 1. 1. 2026</p>
                 <p className="font-bold">3PM d.o.o.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
