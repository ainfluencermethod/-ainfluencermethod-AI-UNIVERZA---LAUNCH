import React from 'react';

interface FooterProps {
  onShowRules?: () => void;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onShowRules, 
  onShowPrivacy, 
  onShowTerms, 
  onShowContact 
}) => {
  return (
    <footer className="border-t border-white/5 py-12 mt-12 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Disclaimers */}
        <div className="mb-10 space-y-6">
          <div className="text-[10px] sm:text-xs text-gray-600 leading-relaxed text-center max-w-4xl mx-auto uppercase tracking-tighter sm:tracking-normal">
            <span className="font-bold text-gray-500">ODPOVED ODGOVORNOSTI:</span> Rezultati, prikazani na tej strani, niso tipični. Vsak posameznik ima drugačne izkušnje, delovne navade in sposobnosti. Uspeh v digitalnem svetu zahteva čas, trud in vztrajnost. AI Universa ne zagotavlja finančnega uspeha, določenega zneska zaslužka ali zmag v nagradni igri samo na podlagi vstopa v program.
          </div>
          
          <div className="text-[10px] sm:text-xs text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            Ta stran ni del spletnega mesta Facebook ali Facebook Inc. Poleg tega te strani Facebook na noben način ne podpira. FACEBOOK je blagovna znamka družbe FACEBOOK, Inc. Vsi izdelki in storitve na tej strani so namenjeni izključno izobraževanju in informiranju.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI UNIVERZA. Vse pravice pridržane.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={onShowRules}
              className="text-gray-500 hover:text-white text-sm transition-colors decoration-dotted underline underline-offset-4"
            >
              Pravila nagradne igre
            </button>
            <button onClick={onShowPrivacy} className="text-gray-500 hover:text-white text-sm transition-colors">Politika zasebnosti</button>
            <button onClick={onShowTerms} className="text-gray-500 hover:text-white text-sm transition-colors">Pogoji uporabe</button>
            <button onClick={onShowContact} className="text-gray-500 hover:text-white text-sm transition-colors">Kontakt</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
