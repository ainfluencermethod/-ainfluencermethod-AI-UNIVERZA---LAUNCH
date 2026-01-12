
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                <ArrowLeft size={16} /> Nazaj na domačo stran
            </a>
        </div>

        <div className="border-b border-white/10 pb-8 mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tight">
                Politika <span className="text-brand-gold">Zasebnosti</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Shield size={16} />
                <span>Varovanje vaših podatkov je naša prioriteta</span>
            </div>
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-gray-300">
            <section>
                <h2 className="text-white font-bold text-2xl mb-4">1. Podatki o upravljavcu</h2>
                <p>
                    Upravljavec osebnih podatkov je podjetje <strong>3PM d.o.o.</strong>, Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID. Matična številka: 9861459000.
                </p>
                <p className="mt-2">
                    Kontaktni naslov za vprašanja s področja zasebnosti: <a href="mailto:pici@aiuniverza.si" className="text-brand-gold">pici@aiuniverza.si</a>.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">2. Katere podatke zbiramo</h2>
                <p>Zbiramo naslednje kategorije podatkov:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Identifikacijski podatki:</strong> Ime in priimek.</li>
                    <li><strong>Kontaktni podatki:</strong> Elektronski naslov (email).</li>
                    <li><strong>Podatki o nakupih:</strong> Zgodovina naročil, zneski in datumi plačil.</li>
                    <li><strong>Tehnični podatki:</strong> IP naslov, podatki o brskalniku in napravi (preko piškotkov).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">3. Namen obdelave podatkov</h2>
                <p>Vaše podatke obdelujeme za naslednje namene:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Izvajanje pogodbenih obveznosti (dostop do izobraževalne platforme AI Universa).</li>
                    <li>Obveščanje o novostih, posodobitvah in posebnih ponudbah (na podlagi vaše privolitve).</li>
                    <li>Izvedba nagradnih iger (skladno s pravili posamezne igre).</li>
                    <li>Izpolnjevanje zakonskih obveznosti (izdaja računov, davčno poročanje).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">4. Pravne podlage</h2>
                <p>Podatke obdelujemo na podlagi:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Izvajanja pogodbe:</strong> Ko opravite nakup tečaja.</li>
                    <li><strong>Zakonske obveznosti:</strong> Arhiviranje računov.</li>
                    <li><strong>Zakonitega interesa:</strong> Za varnost spletne strani in preprečevanje zlorab.</li>
                    <li><strong>Privolitve:</strong> Za namene neposrednega trženja.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">5. Vaše pravice (GDPR)</h2>
                <p>Skladno s Splošno uredbo o varstvu podatkov (GDPR) imate pravico do:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Dostopa do svojih osebnih podatkov.</li>
                    <li>Popravka netočnih podatkov.</li>
                    <li>Izbrisa podatkov ("pravica do pozabe").</li>
                    <li>Omejitve obdelave.</li>
                    <li>Prenosljivosti podatkov.</li>
                    <li>Ugovora obdelavi.</li>
                </ul>
                <p className="mt-4 italic text-sm">
                    Za uveljavljanje katerihkoli od teh pravic nam pišite na pici@aiuniverza.si. Odgovorili vam bomo v najkrajšem možnem času, najkasneje pa v 30 dneh.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">6. Čas hrambe</h2>
                <p>
                    Osebne podatke hranimo le toliko časa, kolikor je potrebno za dosego namena, zaradi katerega so bili zbrani. Račune hranimo 10 let v skladu z zakonodajo, kontaktne podatke za trženje pa do preklica privolitve.
                </p>
            </section>

            <div className="pt-12 border-t border-white/10 mt-12 text-center text-gray-500 text-xs">
                 <p className="mb-2">Zadnja posodobitev: 1. 1. 2026</p>
                 <p className="font-bold">3PM d.o.o.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
