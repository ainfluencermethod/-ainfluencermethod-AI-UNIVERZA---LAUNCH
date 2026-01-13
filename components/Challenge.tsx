
import React from 'react';
import { Rocket, Zap, DollarSign, Trophy, CheckCircle2, Lock, Sparkles, Calendar, TrendingUp } from 'lucide-react';

export const Challenge: React.FC = () => {
  const weeks = [
    {
      id: 1,
      title: "11.-16. Januar: Fundamenti",
      subtitle: "RAZVOJ KONCEPTA",
      Icon: Rocket,
      iconClass: "text-white",
      tasks: [
        "Razvoj AI identitete",
        "Priprava vsebinskih strategij",
        "Nastavitev kanalov"
      ],
      active: true,
      highlight: false
    },
    {
      id: 2,
      title: "16. Januar - 15. Februar: Akcija",
      subtitle: "KONSISTENCA IN RAST",
      Icon: Zap,
      iconClass: "text-white",
      tasks: [
        "Dnevna produkcija vsebin",
        "Testiranje viralnih kljuk",
        "Optimizacija dosega"
      ],
      active: false,
      highlight: false
    },
    {
      id: 3,
      title: "15. Februar - 15. April: Implementacija",
      subtitle: "POSLOVNI MODELI",
      Icon: DollarSign,
      iconClass: "text-white",
      tasks: [
        "Vzpostavitev prodajnih poti",
        "Implementacija monetizacije",
        "Prve poslovne meritve"
      ],
      active: false,
      highlight: true
    },
    {
      id: 4,
      title: "15. april - 2027: Skaliranje",
      subtitle: "DOLGOROČNA VIZIJA",
      Icon: Trophy,
      iconClass: "text-brand-gold",
      tasks: [
        "Sistematizacija procesov",
        "Dolgoročna rast blagovne znamke"
      ],
      active: false,
      highlight: false
    }
  ];

  return (
    <div className="py-24 px-4 bg-dark-bg relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>
        
        {/* New Year Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/40 to-black border border-yellow-700/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                    <span className="text-brand-gold text-xs font-black uppercase tracking-widest">Digitalni Načrt za 2026</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
                    Tvoja <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold italic pr-2">Strategija za 2026</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Nauči se sistematičnega pristopa k digitalnemu uspehu. Tukaj je strukturiran načrt za razvoj tvojih veščin v 
                    <strong className="text-white"> januarju 2026</strong>.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-gray-800 to-gray-800 z-0"></div>

                {/* Connecting Line (Mobile) */}
                <div className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-gold via-gray-800 to-gray-800 z-0 opacity-50"></div>

                {weeks.map((week, index) => {
                    const Icon = week.Icon;
                    return (
                    <div key={week.id} className="relative z-10 group flex flex-col items-center">
                        {/* Icon Node */}
                        <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-4 flex items-center justify-center mb-6 bg-dark-bg transition-transform duration-300 group-hover:scale-110 relative ${week.active ? 'border-brand-gold shadow-[0_0_30px_rgba(255,215,0,0.3)]' : 'border-gray-800'} z-10`}>
                            {week.active && <div className="absolute inset-0 bg-brand-gold/20 rounded-full animate-ping opacity-20"></div>}
                            
                            <div className="transform transition-transform duration-300">
                                <Icon className={`w-6 h-6 md:w-8 md:h-8 ${week.iconClass}`} />
                            </div>
                        </div>

                        {/* Card */}
                        <div className={`w-full bg-card-bg border ${week.active ? 'border-brand-gold/50 bg-gradient-to-b from-brand-gold/5 to-transparent' : 'border-white/5'} rounded-2xl p-6 h-full hover:border-brand-gold/30 transition-all duration-300 group-hover:-translate-y-1 relative z-10`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${week.active ? 'text-brand-gold' : 'text-gray-600'} flex items-center gap-1`}>
                                    <Calendar size={10} />
                                    {week.title.split(':')[0]}
                                </span>
                                {week.active ? <CheckCircle2 size={16} className="text-brand-gold" /> : <Lock size={16} className="text-gray-600" />}
                            </div>
                            
                            <h3 className={`text-xl font-bold mb-1 ${week.active ? 'text-white' : 'text-gray-400'}`}>
                                {week.title.split(':')[1]}
                            </h3>
                            <p className="text-xs text-gray-500 font-mono uppercase mb-4">{week.subtitle}</p>
                            
                            <ul className="space-y-3">
                                {week.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${week.active ? 'bg-brand-gold' : 'bg-gray-700'}`}></div>
                                        <span className={`${week.active ? 'text-gray-300' : ''} group-hover:text-gray-300 transition-colors`}>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )})}
            </div>

            {/* 2026 Trend Insight */}
            <div className="mt-40 relative z-20">
                 <div className="bg-gradient-to-r from-white/5 to-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-2xl">
                    <div className="bg-white/10 p-4 rounded-full border border-white/20 shrink-0">
                        <TrendingUp className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                            TREND ALERT: <span className="text-brand-gold">Zakaj 2026?</span>
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leta 2024 je bil AI novost. Leta 2025 so ga testirali. <strong className="text-white">V 2026 bo AI video postal standard.</strong> Kdor danes osvoji te veščine, bo imel ključno prednost na trgu.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};
