import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface RulesProps {
  onBack: () => void;
}

export const Rules: React.FC<RulesProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0B0C15] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Nazaj na prvo stran
        </button>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8 text-gray-300 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight border-b border-white/10 pb-6">
            Splošni pogoji sodelovanja in določila varovanja osebnih podatkov v nagradni igri »Nagradna igra AI Universa«
          </h1>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">I. Splošni pogoji</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-indigo-300 mb-2">1. Organizator nagradne igre</h3>
                <p>Nagradno igro organizira družba 3PM d.o.o., Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID, matična številka: 9861459000, ID za DDV: SI 29078750 (v nadaljevanju »organizator«).</p>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">2. Namen nagradne igre</h3>
                <p>Namen izvedbe te nagradne igre je promocija AI Universe ter izvajanje trženjskega komuniciranja na območju Republike Slovenije.</p>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">3. Trajanje nagradne igre</h3>
                <p>Nagradna igra traja od dne 11. 1. 2026 (od 00:01 ure) do dne 16. 1. 2026 (do 23:59 ure).</p>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">4. Sodelovanje v nagradni igri</h3>
                <p>V nagradni igri lahko sodelujejo fizične osebe, starejše od 18 let, s stalnim prebivališčem v Republiki Sloveniji, ki izpolnjujejo v teh splošnih pogojih navedene pogoje za sodelovanje. V nagradni igri ni dovoljeno sodelovati osebam, ki so zaposlene pri organizatorju. Udeleženci ne smejo sodelovati v imenu tretjih oseb.</p>
                <p className="mt-2">Pogoj za sodelovanje v nagradni igri je, da so udeleženci seznanjeni in se strinjajo z vsemi pogoji in pravili nagradne igre ter soglašajo s posredovanjem in obdelavo osebnih podatkov za namen izvedbe nagradne igre. Šteje se, da s sodelovanjem v nagradni igri na enega izmed načinov, opisanega v teh pravilih, udeleženec pristane na vse pogoje in pravila v zvezi z nagradno igro, ki so objavljeni na www.aiuniversa.si/pravila.</p>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">5. Način sodelovanja v nagradni igri</h3>
                <p>Sodelovanje v nagradni igri je mogoče na dva načina:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>1. način (z nakupom):</strong> Za sodelovanje v nagradni igri mora udeleženec v času trajanja nagradne igre opraviti nakup programa AI Universa.</li>
                  <li><strong>2. način (brez nakupa):</strong> Posameznik lahko v nagradni igri sodeluje tudi tako, da pošlje ročno napisano pismo na naslov organizatorja: 3PM d.o.o., Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">6. Izbor in obveščanje nagrajencev</h3>
                <p>Komisija bo žreb nagrajencev izvedla dne 1. 2. 2026 na lokaciji Letališka 1, 1000 Ljubljana. Žreb ne bo javen. Izžrebani bodo 3 (trije) nagrajenci.</p>
              </div>

              <div>
                <h3 className="font-bold text-indigo-300 mb-2">9. Nagradni sklad</h3>
                <p>Organizator bo v nagradni igri podelil 3 nagrade. Skupna vrednost nagradnega sklada znaša 15.069,94 EUR (z DDV).</p>
                <ul className="list-disc pl-5 space-y-1 mt-2 font-semibold text-white">
                  <li>1 x MacBook Pro M5 14 inch (vrednost: 1.939,95 €)</li>
                  <li>1 x iPhone 17 Pro (vrednost: 1.379,99 €)</li>
                  <li>1 x Rolex Datejust (vrednost: 11.750,00 €)</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm italic">Ljubljana, 10. 1. 2026, 3PM d.o.o.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};