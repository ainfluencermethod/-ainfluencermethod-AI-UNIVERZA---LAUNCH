
import React from 'react';
import { User, Building2, Rocket, Target, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      tag: "KORAK 1",
      title: "Opremljanje",
      icon: Rocket,
      description: "Prejmeš dostop do orodij in znanja, ki nadomeščajo celotne produkcijske ekipe. Naučiš se generirati vsebino, ki izgleda profesionalno.",
      details: null
    },
    {
      id: 2,
      tag: "KORAK 2",
      title: "Izbira Poti",
      icon: Target,
      description: "Sistem te vodi skozi različne digitalne modele. Izbereš tistega, ki ti najbolj ustreza.",
      details: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 group/path hover:border-brand-gold/50 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <User size={12} className="text-brand-gold" />
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-wider">Pot A: Influencer</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-tight">Gradiš brand brez uporabe obraza.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 group/path hover:border-brand-gold/50 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <Building2 size={12} className="text-brand-gold" />
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-wider">Pot B: Brand Strateg</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-tight">Delaš vsebine za blagovne znamke.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      tag: "KORAK 3",
      title: "Monetizacija",
      icon: DollarSign,
      description: "Implementiraš strategije za pretvorbo pozornosti v poslovni uspeh. Od digitalnih produktov do sodelovanj.",
      details: null
    }
  ];

  return (
    <div className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-brand-gold/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-brand-gold/5 blur-[80px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.2em]">Strukturiran sistem učenja</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-[1.1]">
            En Sistem. <br/>
            <span className="text-brand-gold italic">Več Poti do Uspeha.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Sistem te vodi od osnov do naprednih metod preko preizkušenih izobraževalnih modulov.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute right-[30px] md:right-[35px] top-8 bottom-8 w-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/10 to-transparent hidden md:block"></div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                
                {/* Content Card */}
                <div className="flex-1 w-full group">
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-brand-gold/30 hover:bg-white/[0.02] shadow-2xl relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-brand-gold w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-110">
                        <step.icon size={20} className="text-white" strokeWidth={3} />
                      </div>
                      <div className="h-px w-6 md:w-10 bg-white/10"></div>
                      <span className="text-brand-gold text-[10px] font-black tracking-[0.2em] uppercase">{step.tag}</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter leading-none">{step.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">{step.description}</p>
                    
                    {step.details}
                  </div>
                </div>

                {/* Number Indicator */}
                <div className="hidden md:flex shrink-0 relative">
                   <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center relative group">
                      <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute inset-1.5 border border-brand-gold/20 rounded-full"></div>
                      <span className="text-2xl font-black text-brand-gold relative z-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                        {step.id}
                      </span>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-brand-gold/5 blur-xl animate-pulse"></div>
            <button 
              onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative bg-white/5 border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-white/10 text-brand-gold font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] px-8 py-4 rounded-full transition-all group flex items-center gap-3 shadow-xl"
            >
              PRIDRUŽI SE IN ZAČNI 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
