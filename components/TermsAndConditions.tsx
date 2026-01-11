import React from 'react';
import { ArrowLeft, Gavel } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
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
                Splošni <span className="text-brand-gold">Pogoji</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Gavel size={16} />
                <span>Pravni pogoji uporabe spletne strani aiuniverza.si</span>
            </div>
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-gray-300">
            <section>
                <h2 className="text-white font-bold text-2xl mb-4">1. Splošno</h2>
                <p>
                    Ti splošni pogoji poslovanja določajo pogoje uporabe spletne strani aiuniverza.si ter pogoje nakupa izobraževalnih programov, ki jih nudi podjetje <strong>3PM d.o.o.</strong>. Z uporabo te spletne strani potrjujete, da ste seznanjeni s temi pogoji in se z njimi v celoti strinjate.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">2. Dostop do vsebin</h2>
                <p>
                    Nakup programa AI Univerza omogoča uporabniku dostop do izobraževalnih vsebin za določeno obdobje (običajno 1 leto, razen če je navedeno drugače). Dostop je vezan na enega uporabnika in je neprenosljiv. V primeru deljenja dostopa z drugimi osebami si pridržujemo pravico do takojšnje blokade računa brez vračila kupnine.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">3. Cene in Plačila</h2>
                <p>
                    Vse cene so navedene v evrih (€). Podjetje 3PM d.o.o. je davčni zavezanec za DDV. Plačilo se izvede preko varnih plačilnih sistemov (Stripe, PayPal). Po uspešnem plačilu uporabnik prejme račun na naveden elektronski naslov.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">4. Garancija na zadovoljstvo</h2>
                <p>
                    Uporabnikom nudimo 14-dnevno garancijo na zadovoljstvo. V kolikor uporabnik ugotovi, da program ne ustreza njegovim pričakovanjem, lahko v roku 14 dni od nakupa zahteva povračilo kupnine na naslov pici@aiuniverza.si. Pogoj za vračilo je, da uporabnik ni pregledal več kot 20 % vsebine programa.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">5. Avtorske pravice</h2>
                <p>
                    Vse vsebine na spletni strani (besedila, videoposnetki, grafike, sistemi) so intelektualna lastnina podjetja 3PM d.o.o. Vsako nepooblaščeno kopiranje, razmnoževanje ali distribucija teh vsebin je strogo prepovedana in se bo preganjala po sodni poti.
                </p>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-4">6. Omejitev odgovornosti</h2>
                <p>
                    Izobraževalni programi so namenjeni izobraževanju. Čeprav so metode v programih preverjene, podjetje ne zagotavlja specifičnih finančnih rezultatov. Uspeh je odvisen od truda, znanja in angažiranosti posameznika. Podjetje ni odgovorno za morebitne izgube ali odločitve, sprejete na podlagi vsebin tečaja.
                </p>
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