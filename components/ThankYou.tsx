import React from 'react';
import { CheckCircle2, Mail, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-green-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
         <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
            <CheckCircle2 size={48} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tight">
          Plačilo <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Uspešno!</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Čestitamo za vstop. Tvoja pot do finančne svobode se začenja zdaj.
        </p>

        {/* Video Player Section */}
        <div className="w-full max-w-2xl mx-auto mb-12 relative group">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/30 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black z-10">
                 <VideoDemo />
            </div>
            <p className="mt-4 text-sm text-gray-500 uppercase tracking-widest font-bold animate-pulse">
                👇 Oglej si pomembna navodila spodaj 👇
            </p>
        </div>

        <div className="bg-card-bg border border-white/10 rounded-3xl p-8 shadow-2xl mb-8 max-w-2xl mx-auto">
           <h2 className="text-xl font-bold text-white mb-4">Kaj se zgodi zdaj?</h2>
           
           <div className="space-y-6 text-left">
              <div className="flex gap-4">
                 <div className="bg-white/5 p-3 rounded-xl h-fit">
                    <Mail className="text-brand-gold" size={24} />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-lg">Preveri svoj Email</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                       V nekaj minutah boš prejel/a email z naslovom <strong>"Dobrodošel v AI Univerzi"</strong>. 
                       V njem so tvoji podatki za dostop do platforme in Skool skupnosti.
                    </p>
                    <p className="text-xs text-red-400 mt-2 font-bold uppercase">
                       *Če emaila ne najdeš, preveri vsiljeno pošto (Spam/Promocije).
                    </p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="bg-white/5 p-3 rounded-xl h-fit">
                    <ShieldCheck className="text-brand-gold" size={24} />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-lg">Shrani si račun</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                       Tvoj račun je tvoja vstopnica. Ne deli ga z drugimi, saj sistem avtomatsko blokira deljene dostope.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <Button 
            variant="primary"
            onClick={() => window.location.href = "https://www.skool.com/aiuniverza"} 
            className="w-full md:w-auto mx-auto text-lg py-4"
        >
            PRIDRUŽI SE SKOOL SKUPNOSTI TAKOJ
        </Button>
        
        <p className="mt-8 text-xs text-gray-600">
           ID Transakcije: {Math.random().toString(36).substr(2, 9).toUpperCase()} • Datum: {new Date().toLocaleDateString()}
        </p>

      </div>
    </div>
  );
};