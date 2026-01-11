import React from 'react';
import { ArrowLeft, Scale, ShieldCheck, Trophy, Gavel } from 'lucide-react';

export const SweepstakesRules: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative selection:bg-brand-gold selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                <ArrowLeft size={16} /> Nazaj na domačo stran
            </a>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
            <h1 className="text-2xl md:text-4xl font-serif font-black text-white mb-4 leading-tight uppercase tracking-tight">
                Splošni pogoji sodelovanja in določila varovanja osebnih podatkov v nagradni igri <span className="text-brand-gold italic">»Nagradna igra AI Univerza«</span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                    <Scale size={16} />
                    <span>Uradni dokument</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <span>Veljavnost: 11. 1. 2026 – 16. 1. 2026</span>
            </div>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-12 leading-relaxed text-sm md:text-base text-gray-300">
            
            <section>
                <h2 className="text-white font-bold text-2xl mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
                    <Gavel size={24} className="text-brand-gold" /> I. Splošni pogoji
                </h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">1. Organizator nagradne igre</h3>
                        <p>
                            Nagradno igro organizira družba <strong>3PM d.o.o.</strong>, Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID, matična številka: 9861459000, ID za DDV: SI 29078750 (v nadaljevanju »organizator«).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">2. Namen nagradne igre</h3>
                        <p>
                            Namen izvedbe te nagradne igre je promocija <strong>AI Univerze</strong> ter izvajanje trženjskega komuniciranja na območju Republike Slovenije.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">3. Trajanje nagradne igre</h3>
                        <p>
                            Nagradna igra traja od dne <strong>11. 1. 2026 (od 00:01 ure)</strong> do dne <strong>16. 1. 2026 (do 23:59 ure)</strong>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">4. Sodelovanje v nagradni igri</h3>
                        <p className="mb-4">
                            V nagradni igri lahko sodelujejo fizične osebe, starejše od 18 let, s stalnim prebivališčem v Republiki Sloveniji, ki izpolnjujejo v teh splošnih pogojih navedene pogoje za sodelovanje. V nagradni igri ni dovoljeno sodelovati osebam, ki so zaposlene pri organizatorju. Udeleženci ne smejo sodelovati v imenu tretjih oseb.
                        </p>
                        <p className="mb-4">
                            Pogoj za sodelovanje v nagradni igri je, da so udeleženci seznanjeni in se strinjajo z vsemi pogoji in pravili nagradne igre ter soglašajo s posredovanjem in obdelavo osebnih podatkov za namen izvedbe nagradne igre. Šteje se, da s sodelovanjem v nagradni igri udeleženec pristane na vse pogoje in pravila, objavljena na spletni strani.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">5. Način sodelovanja v nagradni igri</h3>
                        <p className="mb-4 italic text-gray-400">Sodelovanje je mogoče na dva načina:</p>
                        <div className="grid gap-6">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-brand-gold font-bold mb-2">1. način (z nakupom):</h4>
                                <p className="text-sm">
                                    Udeleženec v času trajanja nagradne igre opravi <strong>nakup programa AI Univerza</strong>. Vsak opravljen nakup v obdobju trajanja šteje kot ena prijava za sodelovanje v žrebanju.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-brand-gold font-bold mb-2">2. način (brez nakupa):</h4>
                                <p className="text-sm">
                                    Posameznik pošlje ročno napisano pismo na naslov organizatorja: <strong>3PM d.o.o., Prušnikova ulica 19, 1210 Ljubljana</strong>. Pismo mora vsebovati: ime, priimek in elektronski naslov. S tem se posameznik strinja s splošnimi pogoji.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            <strong>Omejitve:</strong> Posameznik lahko sodeluje največ <strong>1-krat (enkrat) na dan</strong>, ne glede na način sodelovanja.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">6. Izbor in obveščanje nagrajencev</h3>
                        <p className="mb-4">
                            Komisija bo po zaključku nagradne igre izžrebala <strong>3 (tri) nagrajence</strong> in 3 nadomestne nagrajence. Žrebanje bo potekalo dne <strong>1. 2. 2026</strong> na lokaciji Letališka 1, 1000 Ljubljana. Žreb ni javen.
                        </p>
                        <p className="mb-4">
                            Rezultati bodo objavljeni dne <strong>2. 2. 2026</strong> v Skool skupnosti AI Univerza in na Instagramu (@nepridiprav). Nagrajenci bodo obveščeni tudi po e-pošti in morajo v roku <strong>7 dni</strong> posredovati davčno številko in naslov.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">7. Podelitev in 8. Obdavčitev nagrad</h3>
                        <p className="mb-4">
                            Nagrade bodo poslane po pošti. Izplačilo v denarju ni možno. 
                        </p>
                        <p className="bg-white/5 p-4 rounded-xl border-l-4 border-brand-gold text-sm italic">
                            Organizator za nagrajence odvede <strong>akontacijo dohodnine</strong> v skladu z ZDoh-2, saj vrednost nagrad presega 42 EUR. Akontacijo plača organizator.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                            <Trophy size={20} className="text-brand-gold" /> 9. Nagradni sklad
                        </h3>
                        <p className="mb-4">Skupna vrednost nagradnega sklada znaša <strong>15.069,94 EUR</strong> (z DDV).</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20 text-white">
                                        <th className="py-2">Nagrada</th>
                                        <th className="py-2 text-right">Vrednost (z DDV)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">1x Rolex Datejust (Jubilee Bracelet)</td>
                                        <td className="py-3 text-right">11.750,00 €</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">1x MacBook Pro M5 14 inch</td>
                                        <td className="py-3 text-right">1.939,95 €</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">1x iPhone 17 Pro</td>
                                        <td className="py-3 text-right">1.379,99 €</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
                    <ShieldCheck size={24} className="text-brand-gold" /> II. Varstvo osebnih podatkov
                </h2>
                <div className="space-y-6">
                    <p>
                        Upravljavec osebnih podatkov je organizator <strong>3PM d.o.o.</strong>. Podatki se zbirajo za namen izvedbe nagradne igre, obveščanja o rezultatih in izpolnjevanja davčnih obveznosti.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Čas hrambe:</strong> Podatki neizžrebanih se zbrišejo po žrebu, podatki nagrajencev se hranijo 10 let skladno z zakonodajo.</li>
                        <li><strong>Pravice:</strong> Pravica do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti.</li>
                        <li><strong>Kontakt:</strong> <a href="mailto:pici@aiuniverza.si" className="text-brand-gold underline">pici@aiuniverza.si</a>.</li>
                    </ul>
                </div>
            </section>

            <div className="pt-12 border-t border-white/10 mt-12 text-center text-gray-500 text-xs">
                 <p className="mb-2">Ljubljana, 10. 1. 2026</p>
                 <p className="font-bold uppercase tracking-widest">3PM d.o.o.</p>
            </div>

        </div>

      </div>
    </div>
  );
};