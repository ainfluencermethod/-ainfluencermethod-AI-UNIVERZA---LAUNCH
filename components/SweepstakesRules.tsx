
import React from 'react';
import { ArrowLeft, Gavel, Scale, Trophy } from 'lucide-react';

export const SweepstakesRules: React.FC = () => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { step: 'landing' } }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative selection:bg-brand-gold selection:text-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
            <button onClick={handleBack} className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest cursor-pointer group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Nazaj na domačo stran
            </button>
        </div>

        <div className="border-b border-white/10 pb-8 mb-12">
            <h1 className="text-2xl md:text-4xl font-serif font-black text-white mb-4 leading-tight uppercase tracking-tight">
                Splošni pogoji sodelovanja in določila varovanja osebnih podatkov v nagradni igri <span className="text-brand-gold italic">»Nagradna igra AI Universa«</span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                    <Scale size={16} />
                    <span>Uradni dokument</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <span>Posodobljeno: 10. 1. 2026</span>
            </div>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
            <section>
                <h2 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                    <Gavel size={24} className="text-brand-gold" /> I. Splošni pogoji
                </h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">1. Organizator nagradne igre</h3>
                        <p>Nagradno igro organizira družba 3PM d.o.o., Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID, matična številka: 9861459000, ID za DDV: SI 29078750 (v nadaljevanju »organizator«).</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">2. Namen nagradne igre</h3>
                        <p>Namen izvedbe te nagradne igre je promocija AI Universe ter izvajanje trženjskega komuniciranja na območju Republike Slovenije.</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">3. Trajanje nagradne igre</h3>
                        <p>Nagradna igra traja od dne 11. 1. 2026 (od 00:01 ure) do dne 16. 1. 2026 (do 23:59 ure).</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">4. Sodelovanje v nagradni igri</h3>
                        <p>V nagradni igri lahko sodelujejo fizične osebe, starejše od 18 let, s stalnim prebivališčem v Republiki Sloveniji, ki izpolnjujejo v teh splošnih pogojih navedene pogoje za sodelovanje. V nagradni igri ni dovoljeno sodelovati osebam, ki so zaposlene pri organizatorju. Udeleženci ne smejo sodelovati v imenu tretjih oseb.</p>
                        <p className="mt-4">Pogoj za sodelovanje v nagradni igri je, da so udeleženci seznanjeni in se strinjajo z vsemi pogoji in pravili nagradne igre ter soglašajo s posredovanjem in obdelavo osebnih podatkov za namen izvedbe nagradne igre. Šteje se, da s sodelovanjem v nagradni igri na enega izmed načinov, opisanega v teh pravilih, udeleženec pristane na vse pogoje in pravila v zvezi z nagradno igro, ki so objavljeni na spletni strani.</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">5. Način sodelovanja v nagradni igri</h3>
                        <p className="mb-4">Sodelovanje v nagradni igri je mogoče na dva načina:</p>
                        <ul className="list-decimal pl-5 space-y-4">
                            <li><strong>1. način (z nakupom):</strong> Za sodelovanje v nagradni igri mora udeleženec v času trajanja nagradne igre opraviti nakup programa AI Universa.</li>
                            <li><strong>2. način (brez nakupa):</strong> Posameznik lahko v nagradni igri sodeluje tudi tako, da pošlje ročno napisano pismo na naslov organizatorja: 3PM d.o.o., Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">6. Izbor in obveščanje nagrajencev</h3>
                        <p>Komisija bo žreb nagrajencev izvedla dne 1. 2. 2026 na lokaciji Letališka 1, 1000 Ljubljana. Žreb ne bo javen. Izžrebani bodo 3 (trije) nagrajenci.</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <Trophy size={20} className="text-brand-gold" /> 9. Nagradni sklad
                        </h3>
                        <p className="mb-4">Organizator bo v nagradni igri podelil 3 nagrade. Skupna vrednost nagradnega sklada znaša 15.069,94 EUR (z DDV).</p>
                        <ul className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3 font-mono text-sm">
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>1 x MacBook Pro M5 14 inch</span> <span className="text-brand-gold">1.939,95 €</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>1 x iPhone 17 Pro</span> <span className="text-brand-gold">1.379,99 €</span></li>
                            <li className="flex justify-between"><span>1 x Rolex Datejust</span> <span className="text-brand-gold">11.750,00 €</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="pt-12 border-t border-white/10 mt-12 text-center text-gray-500 text-xs">
                 <p className="mb-2">Ljubljana, 10. 1. 2026</p>
                 <p className="font-bold uppercase tracking-widest text-white">3PM d.o.o.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
