
import React from 'react';
import { Rocket, Zap, DollarSign, Trophy, CheckCircle2, Lock, Sparkles, Calendar } from 'lucide-react';

export const Challenge: React.FC = () => {
  const weeks = [
    {
      id: 1,
      title: "11.-16. Januar",
      name: "Fundamenti",
      subtitle: "RAZVOJ KONCEPTA",
      Icon: Rocket,
      tasks: [
        "Razvoj AI identitete",
        "Priprava vsebinskih strategij",
        "Nastavitev kanalov"
      ],
      state: 'checked'
    },
    {
      id: 2,
      title: "16. Januar - 15. Februar",
      name: "Akcija",
      subtitle: "KONSISTENCA IN RAST",
      Icon: Zap,
      tasks: [
        "Dnevna produkcija vsebin",
        "Testiranje viralnih kljuk",
        "Optimizacija dosega"
      ],
      state: 'locked'
    },
    {
      id: 3,
      title: "15. Februar - 15. April",
      name: "Implementacija",
      subtitle: "POSLOVNI MODELI",
      Icon: DollarSign,
      tasks: [
        "Vzpostavitev prodajnih poti",
        "Implementacija monetizacije",
        "Prve poslovne meritve"
      ],
      state: 'locked'
    },
    {
      id: 4,
      title: "15. April - 2027",
      name: "Skaliranje",
      subtitle: "DOLGOROČNA VIZIJA",
      Icon: Trophy,
      tasks: [
        "Sistematizacija procesov",
        "Dolgoročna rast blagovne znamke"
      ],
      state: 'locked'
    }
  ];

  return (
    <div className="py-24 px-4 bg-black relative overflow-hidden border-t border-white/5">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 leading-tight tracking-tighter">
                    Tvoja <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5B7] to-[#D4AF37] italic">Strategija za 2026</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                    Nauči se sistematičnega pristopa k digitalnemu uspehu. Tukaj je strukturiran načrt za razvoj tvojih veščin v <strong className="text-white font-bold">januarju 2026</strong>.
                </p>
            </div>

            <div className="relative">
                {/* Horizontal Progress Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gray-800 z-0">
                    <div className="absolute top-0 left-0 h-full w-[15%] bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
                    {weeks.map((week, index) => {
                        const Icon = week.Icon;
                        const isFirst = index === 0;
                        const isChecked = week.state === 'checked';
                        
                        return (
                            <div key={week.id} className="relative z-10 flex flex-col items-center">
                                {/* Icon Node */}
                                <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center mb-8 bg-black transition-all duration-500 relative z-20 ${isChecked ? 'border-brand-gold shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-110' : 'border-gray-800 opacity-60'}`}>
                                    {isChecked && (
                                        <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse"></div>
                                    )}
                                    <Icon className={`w-8 h-8 ${isChecked ? 'text-white' : 'text-gray-500'}`} strokeWidth={isChecked ? 2.5 : 2} />
                                </div>

                                {/* Card content inspired by the screenshot */}
                                <div className={`w-full bg-[#050505] border ${isChecked ? 'border-brand-gold bg-gradient-to-b from-brand-gold/5 to-transparent' : 'border-white/5'} rounded-2xl p-6 md:p-8 h-full transition-all duration-300 relative z-10`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-500">
                                            <Calendar size={12} className={isChecked ? 'text-brand-gold' : 'text-gray-600'} />
                                            {week.title}
                                        </div>
                                        {isChecked ? (
                                            <CheckCircle2 size={18} className="text-brand-gold" />
                                        ) : (
                                            <Lock size={18} className="text-gray-600" />
                                        )}
                                    </div>
                                    
                                    <h3 className={`text-2xl md:text-3xl font-black mb-1 ${isChecked ? 'text-white' : 'text-gray-500'}`}>
                                        {week.name}
                                    </h3>
                                    <p className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6 ${isChecked ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {week.subtitle}
                                    </p>
                                    
                                    <ul className="space-y-4">
                                        {week.tasks.map((task, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isChecked ? 'bg-brand-gold' : 'bg-gray-700'}`}></div>
                                                <span className={`${isChecked ? 'text-gray-300' : 'text-gray-600'}`}>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};
