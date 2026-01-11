import React from 'react';
import { User, Building2, Rocket, Target, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      tag: "KORAK 1",
      title: "Opremljanje",
      icon: Rocket,
      description: "Prejmeš dostop do orodij, ki nadomeščajo celotne produkcijske ekipe. Naučiš se generirati vsebino, ki izgleda profesionalno, brez drage opreme in brez predznanja.",
      details: null
    },
    {
      id: 2,
      tag: "KORAK 2",
      title: "Izbira Svoje Poti",
      icon: Target,
      description: "Sistem deluje v obeh smereh. Izbereš tisto, ki ti najbolj ustreza, ali pa preprosto delaš obe hkrati.",
      details: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 group/path hover:border-brand-gold/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <User size={16} className="text-brand-gold" />
              </div>
              <span className="text-xs font-black text-white uppercase tracking-wider">Pot A: AI Influencer</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">Gradiš svoj digitalni brand in karakter brez snemanja sebe ali kazanja obraza.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 group/path hover:border-brand-gold/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <Building2 size={16} className="text-brand-gold" />
              </div>
              <span className="text-xs font-black text-white uppercase tracking-wider">Pot B: AI Agencija</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">Delaš profesionalne photoshoote in viralne vsebine za podjetja (B2B).</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      tag: "KORAK 3",
      title: "Direktni Zaslužek",
      icon: DollarSign,
      description: "Pretvoriš poglede v denar. Od digitalnih produktov in sponzorstev za tvojega AI vplivneža, do mesečnih plačil od podjetij za tvoje agencijske storitve.",
      details: null
    }
  ];

  return (
    <div className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Preprost 3-stopenjski sistem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
            En Sistem. <br/>
            <span className="text-brand-gold italic">Dve Poti do zaslužka.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ničesar ne prepuščamo naključju. Sistem te vodi od točke nič do prvega evra preko dokazanih metod.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute right-[40px] md:right-[60px] top-10 bottom-10 w-px bg-gradient-to-b from-brand-gold/50 via-brand-gold/20 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                
                {/* Content Card */}
                <div className="flex-1 w-full group">
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:border-brand-gold/20 hover:bg-white/[0.02] shadow-2xl relative overflow-hidden">
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-brand-gold p-3 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                        <step.icon size={24} className="text-black" strokeWidth={3} />
                      </div>
                      <div className="h-px w-12 bg-white/10"></div>
                      <span className="text-brand-gold text-[10px] font-black tracking-[0.2em] uppercase">{step.tag}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">{step.description}</p>
                    
                    {step.details}
                  </div>
                </div>

                {/* Number Indicator */}
                <div className="shrink-0 relative">
                   <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-black border border-white/10 flex items-center justify-center relative group">
                      {/* Glow Behind */}
                      <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Inner Circle */}
                      <div className="absolute inset-2 border border-brand-gold/20 rounded-full"></div>
                      
                      <span className="text-4xl md:text-6xl font-black text-brand-gold relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                        {step.id}
                      </span>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-brand-gold/20 blur-2xl animate-pulse"></div>
            <button 
              onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative bg-white/5 border border-brand-gold/30 hover:border-brand-gold hover:bg-white/10 text-brand-gold font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all group flex items-center gap-3"
            >
              PRIDRUŽI SE IN ZAČNI PRVI KORAK 
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};