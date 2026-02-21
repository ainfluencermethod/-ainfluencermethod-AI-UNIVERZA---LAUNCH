import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0B0C15] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Nazaj
        </button>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8 text-gray-300 leading-relaxed">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <ShieldCheck className="w-10 h-10 text-indigo-400" />
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Politika zasebnosti</h1>
          </div>

          <section className="space-y-4">
            <p>Pri družbi <strong>3PM d.o.o.</strong> (v nadaljevanju "podjetje" ali "mi") cenimo vašo zasebnost. Ta politika zasebnosti pojasnjuje, kako zbiramo, uporabljamo in varujemo vaše osebne podatke v okviru spletnega mesta AI Univerza.</p>
            
            <h2 className="text-xl font-bold text-white">1. Upravljavec podatkov</h2>
            <p>3PM d.o.o.<br />Prušnikova ulica 19, Ljubljana, 1210 Ljubljana-Šentvid<br />Email: Pici@aiuniverza.si</p>

            <h2 className="text-xl font-bold text-white">2. Podatki, ki jih zbiramo</h2>
            <p>Zbiramo le podatke, ki nam jih posredujete prostovoljno preko obrazca na spletni strani:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ime in priimek</li>
              <li>Elektronski naslov (email)</li>
            </ul>

            <h2 className="text-xl font-bold text-white">3. Namen obdelave podatkov</h2>
            <p>Vaše podatke zbiramo za naslednje namene:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Obveščanje o začetku vpisa v AI Univerzo.</li>
              <li>Pošiljanje informacij o novostih, izobraževanjih in posebnih ponudbah.</li>
              <li>Izvedba nagradne igre (če ste v njej sodelovali).</li>
            </ul>

            <h2 className="text-xl font-bold text-white">4. Pravna podlaga</h2>
            <p>Podatke obdelujemo na podlagi vaše izrecne privolitve (člen 6(1)(a) GDPR), ki jo podate ob oddaji obrazca.</p>

            <h2 className="text-xl font-bold text-white">5. Shranjevanje in varnost</h2>
            <p>Vaše osebne podatke shranjujemo varno in jih ne posredujemo tretjim osebam brez vaše privolitve, razen pogodbenim obdelovalcem (npr. ponudnikom platform za pošiljanje e-pošte), ki zagotavljajo visoko stopnjo varstva podatkov.</p>

            <h2 className="text-xl font-bold text-white">6. Vaše pravice</h2>
            <p>Skladno z GDPR imate pravico do dostopa do svojih podatkov, popravka, izbrisa, omejitve obdelave ter pravico do ugovora in prenosljivosti podatkov. Svojo privolitev lahko kadarkoli prekličete s klikom na povezavo v e-sporočilu ali s sporočilom na Pici@aiuniverza.si.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
