
import React from 'react';
import { ArrowLeft, Scale, ShieldCheck, Trophy, Gavel, FileText } from 'lucide-react';

export const SweepstakesRules: React.FC = () => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative selection:bg-brand-gold selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-12">
            <button onClick={handleBack} className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest cursor-pointer group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Nazaj na domačo stran
            </button>
        </div>

        {/* Header */}
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

        {/* Legal Text Content */}
        <div className="space-y-12 leading-relaxed text-sm md:text-base text-gray-300">
            
            {/* Section I */}
            <section>
                <h2 className="text-white font-bold text-2xl mb-8 border-b border-white/10 pb-2 flex items-center gap-3">
                    <Gavel size={24} className="text-brand-gold" /> I. Splošni pogoji
                </h2>
                
                <div className="space-y-10">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">1. Organizator nagradne igre</h3>
                        <p>
                            Nagradno igro organizira družba <strong>3PM d.o.o.</strong>, Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID, matična številka: 9861459000, ID za DDV: SI 29078750 (v nadaljevanju »organizator«).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">2. Namen nagradne igre</h3>
                        <p>
                            Namen izvedbe te nagradne igre je promocija <strong>AI Universa</strong> ter izvajanje trženjskega komuniciranja na območju Republike Slovenije.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">3. Trajanje nagradne igre</h3>
                        <p>
                            Nagradna igra traja od dne <strong>11. 1. 2026 (od 00:01 ure)</strong> do dne <strong>16. 1. 2026 (do 23:59 ure)</strong>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">4. Sodelovanje v nagradni igri</h3>
                        <div className="space-y-4">
                            <p>
                                V nagradni igri lahko sodelujejo fizične osebe, starejše od 18 let, s stalnim prebivališčem v Republiki Sloveniji, ki izpolnjujejo v teh splošnih pogojih navedene pogoje za sodelovanje. V nagradni igri ni dovoljeno sodelovati osebam, ki so zaposlene pri organizatorju. Udeleženci ne smejo sodelovati v imenu tretjih oseb.
                            </p>
                            <p>
                                Pogoj za sodelovanje v nagradni igri je, da so udeleženci seznanjeni in se strinjajo z vsemi pogoji in pravili nagradne igre ter soglašajo s posredovanjem in obdelavo osebnih podatkov za namen izvedbe nagradne igre. Šteje se, da s sodelovanjem v nagradni igri na enega izmed načinov, opisanega v teh pravilih, udeleženec pristane na vse pogoje in pravila v zvezi z nagradno igro, ki so objavljeni na <strong>www.aiuniverza.si/pravila</strong>.
                            </p>
                            <p>
                                Nagrajenci, ki ne izpolnjujejo pogojev opredeljenih v splošnih pogojih sodelovanja v nagradni igri, bodo iz nagradne igre izključeni s strani organizatorja. Organizator si pridržuje pravico do dopolnitev in sprememb teh splošnih pogojev. Vsaka sprememba oz. dopolnitev bo objavljena na <strong>www.aiuniverza.si/pravila</strong>.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">5. Način sodelovanja v nagradni igri</h3>
                        <p className="mb-4">Sodelovanje v nagradni igri je mogoče na dva načina:</p>
                        <div className="grid gap-6">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-brand-gold font-bold mb-2">1. način (z nakupom):</h4>
                                <p className="text-sm">
                                    Za sodelovanje v nagradni igri mora udeleženec v času trajanja nagradne igre opraviti <strong>nakup programa AI Universa</strong>. Vsak opravljen nakup v obdobju trajanja nagradne igre, navedenem v točki 3. teh splošnih pogojev, šteje kot ena prijava za sodelovanje v žrebanju.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-brand-gold font-bold mb-2">2. način (brez nakupa):</h4>
                                <p className="text-sm">
                                    Posameznik lahko v nagradni igri sodeluje tudi tako, da pošlje ročno napisano pismo na naslov organizatorja: <strong>3PM d.o.o., Prušnikova ulica 19, 1210 LJUBLJANA-ŠENTVID</strong>. Pismo mora vsebovati naslednje osebne podatke udeleženca: ime, priimek ter elektronski naslov. S posredovanjem pisma in osebnih podatkov se šteje, da se posameznik strinja s splošnimi pogoji sodelovanja v nagradni igri in jih sprejema. Če organizator ugotovi, da prijava udeleženca ni veljavna, ker ji manjka kateri od zahtevanih podatkov ali če prijava ni skladna s pravili, lahko takšnega udeleženca izključi iz sodelovanja v nagradni igri.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 italic">
                            <strong>Omejitve sodelovanja:</strong> Možno je večkratno sodelovanje v nagradni igri, pri čemer posameznik lahko sodeluje največ <strong>1-krat (enkrat) na dan</strong>, ne glede na izbrani način sodelovanja. Vsi, ki sodelujejo s pomočjo prepovedanih sredstev (npr. avtomatiziranih skript, lažnih profilov itd.), bodo iz sodelovanja izključeni. Skupinsko sodelovanje ter sodelovanje na podlagi avtomatizirane storitve ni dovoljeno.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">6. Izbor in obveščanje nagrajencev</h3>
                        <div className="space-y-4">
                            <p>
                                Komisija, ki jo sestavlja predstavnik zaposlenih pri organizatorju (v nadaljevanju: komisija), bo med tistimi sodelujočimi, ki bodo v nagradni igri sodelovali v skladu s temi pravili, po zaključku nagradne igre izžrebala <strong>3 (tri) nagrajence</strong> in <strong>3 (tri) nadomestne nagrajence</strong>.
                            </p>
                            <p>
                                Komisija bo žreb nagrajencev izvedla dne <strong>1. 2. 2026</strong> na lokaciji <strong>Letališka 1, 1000 Ljubljana</strong>. Žreb ne bo javen.
                            </p>
                            <p>
                                Izvedla se bo interna preverba, da nihče od izžrebanih nagrajencev ni zaposlen pri organizatorju. V primeru izžrebanega zaposlenega bo komisija tega izžrebanca izločila in nagrado podelila nadomestnemu izžrebancu po vrstnem redu izžrebanih.
                            </p>
                            <p>
                                Zapisnik o nagrajencih z njihovimi osebnih podatki bo podpisan s strani komisije e se bo hranil na sedežu organizatorja deset (10) let od njegovega zapisa.
                            </p>
                            <p className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <strong>Objava in obveščanje:</strong> Rezultati žrebanja bodo objavljeni 1 dan po žrebu (dne 2. 2. 2026) v <strong>Skool skupnosti AI Universa</strong> in na <strong>Instagram profilu @nepridiprav</strong>. Nagrajenci bodo s strani organizatorja o izboru obveščeni tudi po sporočeni elektronski pošti. V roku <strong>7 (sedmih) dni</strong> po prejemu obvestila o nagradi mora nagrajenec organizatorju sporočiti vse potrebne podatke za pošiljanje oziroma prevzem nagrade (naslov stalnega prebivališča, davčna številka).
                            </p>
                            <p className="text-xs text-red-400">
                                Če se nagrajenec v 7 (sedmih) dneh od obvestila o izboru ne bo javil, ne bo javil točnih ali celotnih podatkov ali z njim ne bo mogoče vzpostaviti stika, bo to pomenilo, da se njegovo sodelovanje v igri prekine in se mu nagrada ne podeli. V tem primeru se imenuje novega nagrajenca iz seznama nadomestnih nagrajencev.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">7. Podelitev nagrad</h3>
                        <p>
                            Organizator bo nagrade nagrajencem poslal po pošti ali omogočil prevzem po dogovoru. Stroške pošiljanja krije organizator. Nagrada ni prenosljiva na tretje osebe. Izplačilo nagrade v denarju ni možno.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">8. Obdavčitev nagrad</h3>
                        <p className="mb-4">
                            Prejemnik nagrade je po Zakonu o dohodnini (ZDoh-2) davčni zavezanec, zato mora skladno z ZDoh-2 in Zakonom o davčnem postopku (ZDavP-2) pred prevzemom nagrade organizatorju predložiti osebne podatke (ime, priimek, naslov, davčna številka).
                        </p>
                        <p className="bg-white/5 p-4 rounded-xl border-l-4 border-brand-gold text-sm italic">
                            Ker vrednost posameznih nagrad presega zakonsko določeno mejo (42 EUR), organizator za nagrajence odvede <strong>akontacijo dohodnine</strong> v skladu z veljavnimi predpisi. Akontacijo dohodnine plača organizator. Morebitna doplačila dohodnine v skladu z letno dohodninsko odločbo gredo v breme nagrajenca.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Trophy size={20} className="text-brand-gold" /> 9. Nagradni sklad
                        </h3>
                        <p className="mb-4">Organizator bo v nagradni igri podelil 3 nagrade. Skupna vrednost nagradnega sklada znaša <strong>15.069,94 EUR (z DDV)</strong>.</p>
                        <div className="overflow-x-auto bg-white/5 rounded-2xl border border-white/10 p-6 mb-4">
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest opacity-70">Nagrade:</h4>
                            <table className="w-full text-left text-sm border-collapse">
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                            1x MacBook Pro M5 14 inch
                                        </td>
                                        <td className="py-3 text-right font-mono">(vrednost: 1.939,95 €)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                            1x iPhone 17 Pro
                                        </td>
                                        <td className="py-3 text-right font-mono">(vrednost: 1.379,99 €)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                            1x Rolex Datejust
                                        </td>
                                        <td className="py-3 text-right font-mono">(vrednost: 11.750,00 €)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500">
                            Namesto nagrade ni mogoče zahtevati njene denarne protivrednosti. Navedena vrednost posamezne nagrade predstavlja njeno tržno vrednost (z DDV) na dan sprejema teh pravil.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">10. Izključitev odgovornosti</h3>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p>
                                Sodelujoči sodelujejo v nagradni igri na lastno odgovornost. Organizator ne odgovarja za morebitno škodo, ki bi izvirala iz nagrade. Organizator ne prevzema nobene odgovornosti za kakršnekoli nezaželene posledice, ki bi jih sodelujoči in/ali kdorkoli tretji utrpel kot posledico sodelovanja v nagradni igri ali kot posledico koriščenja nagrade.
                            </p>
                            <p>
                                Organizator prav tako ni odgovoren, če je strežnik ali spletna stran nedosegljiva, razen če bi bilo to mogoče pripisati skrajno malomarnim ali namernim dejanjem na strani organizatorja. Organizator ni odgovoren za točnost in popolnost posredovanih informacij s strani udeležencev.
                            </p>
                            <p>
                                V primeru reklamacij ali uveljavljanja jamčevalnih zahtevkov na izdelku, ki je predmet nagradnega sklada, se nagrajenec obrne na proizvajalca izdelka oz. njegovega zastopnika v Republiki Sloveniji.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section II */}
            <section>
                <h2 className="text-white font-bold text-2xl mb-8 border-b border-white/10 pb-2 flex items-center gap-3">
                    <ShieldCheck size={24} className="text-brand-gold" /> II. Določila o varstvu osebnih podatkov
                </h2>
                
                <div className="space-y-10">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">1. Podatki o upravljavcu osebnih podatkov</h3>
                        <p>
                            Upravljavec osebnih podatkov udeležencev in nagrajencev je organizator <strong>3PM d.o.o.</strong>. Organizator bo pridobljene osebne podatke varoval v skladu z veljavno zakonodajo na področju varstva osebnih podatkov (Splošna uredba GDPR in ZVOP-2) ter v skladu s svojimi notranjimi akti. Organizator pridobljenih osebnih podatkov v nobenem primeru ne bo posredoval ali razkril nepooblaščenim tretjim osebam.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">2. Kategorije in izvor podatkov</h3>
                        <div className="space-y-4">
                            <p>Za izvedbo nagradne igre organizator zbira in obdeluje naslednje osebne podatke udeležencev:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                <li>ime in priimek,</li>
                                <li>elektronski naslov.</li>
                            </ul>
                            <p>Pri nagrajencih, ki prejmejo nagrado v vrednosti nad 42 EUR, organizator dodatno zbira še:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                <li>naslov stalnega prebivališča,</li>
                                <li>davčno številka (za namen odmere akontacije dohodnine).</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">3. Namen in pravna podlaga obdelave osebnih podatkov</h3>
                        <p className="mb-4">
                            Organizator bo osebne podatke, zbrane v okviru sodelovanja v nagradni igri, uporabil izključno za namen izvedbe nagradne igre (žrebanje nagrajencev, obveščanje in objava nagrajencev, pošiljanje nagrad, izpolnjevanje davčnih obveznosti).
                        </p>
                        <p className="mb-4">Pravna podlaga za obdelavo osebnih podatkov v okviru nagradne igre je:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Privolitev (člen 6(1)(a) GDPR):</strong> za sodelovanje v igri in obveščanje o izidu.</li>
                            <li><strong>Zakonska obveznost (člen 6(1)(c) GDPR):</strong> v povezavi z davčno zakonodajo za nagrajence.</li>
                        </ul>
                        <p className="mt-4 text-xs text-gray-500">
                            Brez posredovanja podatkov sodelovanje v nagradni igri in prevzem nagrade nista možna.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">4. Prejemniki podatkov</h3>
                        <p>
                            Osebne podatke obdeluje organizator. Tretjim osebam se osebni podatki posredujejo le, kadar je to potrebno za izvedbo nagradne igre (npr. dostavni službi za pošiljanje nagrade ali FURS-u za potrebe davčnega poročanja).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">5. Čas hrambe</h3>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Osebni podatki neizžrebanih udeležencev se izbrišejo po zaključku nagradne igre in razglasitvi nagrajencev.</li>
                            <li>Osebni podatki nagrajencev se obdelujejo in hranijo <strong>10 let</strong> od podelitve nagrade oz. kolikor je to potrebno na podlagi davčne zakonodaje. Po preteku roka hrambe organizator osebne podatke izbriše.</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h3 className="text-white font-bold text-lg mb-4">6. Pravice posameznikov</h3>
                        <p className="mb-4">
                            Udeleženci imajo pravico do dostopa do svojih osebnih podatkov, popravka, izbrisa (do trenutka žreba oz. če to ni v nasprotju z zakonodajo), omejitve obdelave in prenosljivosti podatkov. Če obdelava temelji na privolitvi, jo lahko udeleženec kadar koli prekliče, kar pa ne vpliva na zakonitost obdelave pred preklicem.
                        </p>
                        <p className="flex items-center gap-2 mb-6">
                            Svoja vprašanja ali zahteve v zvezi z varstvom osebnih podatkov lahko naslovite na elektronski naslov: 
                            <a href="mailto:pici@aiuniverza.si" className="text-brand-gold font-bold underline">pici@aiuniverza.si</a>.
                        </p>
                        <p className="text-xs text-gray-500">
                            Posameznik ima pravico do pritožbe pri nadzornem organu: Informacijski pooblaščenec Republike Slovenije (gp.ip@ip-rs.si).
                        </p>
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
