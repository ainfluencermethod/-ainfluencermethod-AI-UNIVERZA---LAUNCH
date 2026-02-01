
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
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
                Politika <span className="text-brand-gold">Zasebnosti</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Shield size={16} />
                <span>Varovanje vaših podatkov je naša prioriteta</span>
            </div>
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-gray-300">
            <p>Pri družbi 3PM d.o.o. (v nadaljevanju "podjetje" ali "mi") cenimo vašo zasebnost. Ta politika zasebnosti pojasnjuje, kako zbiramo, uporabljamo in varujemo vaše osebne podatke v okviru spletnega mesta AI Univerza.</p>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">1. Upravljavec podatkov</h2>
                <p>3PM d.o.o.<br />Prušnikova ulica 19, Ljubljana, 1210 Ljubljana-Šentvid<br />Email: Pici@aiuniverza.si</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">2. Podatki, ki jih zbiramo</h2>
                <p>Zbiramo le podatke, ki nam jih posredujete prostovoljno preko obrazca na spletni strani:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Ime in priimek</li>
                    <li>Elektronski naslov (email)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">3. Namen obdelave podatkov</h2>
                <p>Vaše podatke zbiramo za naslednje namene:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Obveščanje o začetku vpisa v AI Univerzo.</li>
                    <li>Pošiljanje informacij o novostih, izobraževanjih in posebnih ponudbah.</li>
                    <li>Izvedba nagradne igre (če ste v njej sodelovali).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">4. Pravna podlaga</h2>
                <p>Podatke obdelujeme na podlagi vaše izrecne privolitve (člen 6(1)(a) GDPR), ki jo podate ob oddaji obrazca.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">5. Shranjevanje in varnost</h2>
                <p>Vaše osebne podatke shranjujemo varno in jih ne posredujemo tretjim osebam brez vaše privolitve, razen pogodbenim obdelovalcem (npr. ponudnikom platform za pošiljanje e-pošte), ki zagotavljajo visoko stopnjo varstva podatkov.</p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">6. Vaše pravice</h2>
                <p>Skladno z GDPR imate pravico do dostopa do svojih podatkov, popravka, izbrisa, omejitve obdelave ter pravico do ugovora in prenosljivosti podatkov. Svojo privolitev lahko kadarkoli prekličete s klikom na povezavo v e-sporočilu ali s sporočilom na Pici@aiuniverza.si.</p>
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
