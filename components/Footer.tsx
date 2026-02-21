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
    <footer className="border-t border-white/[0.05] py-12 mt-12 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Disclaimers */}
        <div className="mb-12 space-y-4">
          <div className="text-[9px] text-[#444] leading-relaxed text-center max-w-4xl mx-auto uppercase font-medium tracking-wide">
            ODPOVED ODGOVORNOSTI: REZULTATI, PRIKAZANI NA TEJ STRANI, NISO TIPIČNI. VSAK POSAMEZNIK IMA DRUGAČNE IZKUŠNJE, DELOVNE NAVADE IN SPOSOBNOSTI. USPEH V DIGITALNEM SVETU ZAHTEVA ČAS, TRUD IN VZTRAJNOST.
          </div>
          
          <div className="text-[9px] text-[#444] leading-relaxed text-center max-w-4xl mx-auto uppercase font-medium tracking-wide">
            TA STRAN NI DEL SPLETNEGA MESTA FACEBOOK ALI FACEBOOK INC. POLEG TEGA TE STRANI FACEBOOK NA NOBEN NAČIN NE PODPIRA. FACEBOOK JE BLAGOVNA ZNAMKA DRUŽBE FACEBOOK, INC.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.05]">
          <p className="text-[#444] text-[10px] uppercase font-medium tracking-wider">
            © {new Date().getFullYear()} AI UNIVERZA. Vse pravice pridržane.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={onShowRules}
              className="text-[#666] hover:text-white text-[10px] uppercase font-bold tracking-wider transition-colors"
            >
              PRAVILA
            </button>
            <button onClick={onShowPrivacy} className="text-[#666] hover:text-white text-[10px] uppercase font-bold tracking-wider transition-colors">ZASEBNOST</button>
            <button onClick={onShowTerms} className="text-[#666] hover:text-white text-[10px] uppercase font-bold tracking-wider transition-colors">POGOJI</button>
            <button onClick={onShowContact} className="text-[#666] hover:text-white text-[10px] uppercase font-bold tracking-wider transition-colors">KONTAKT</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
