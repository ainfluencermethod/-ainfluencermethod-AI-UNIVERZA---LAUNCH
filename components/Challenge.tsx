import React from 'react';
import { Rocket, Zap, DollarSign, Trophy, CheckCircle2, Lock, Sparkles, Calendar, TrendingUp } from 'lucide-react';

export const Challenge: React.FC = () => {
  const weeks = [
    {
      id: 1,
      title: "11. - 17. JANUAR: Štart 2026",
      subtitle: "Iniciacija & Strategija",
      Icon: Rocket,
      iconClass: "text-white",
      tasks: [
        "Izbira niše (Trendi 2026)",
        "Postavitev AI 'Fasade'",
        "Prva generacija vsebine"
      ],
      active: true,
      highlight: false
    },
    {
      id: 2,
      title: "18. - 24. JANUAR: Validacija",
      subtitle: "Testiranje Trga",
      Icon: Zap,
      iconClass: "text-white",
      tasks: [
        "Viralna strategija objav",
        "Testiranje 3 različnih 'hookov'",
        "Cilj: Prvih 10.000 ogledov"
      ],
      active: false,
      highlight: false
    },
    {
      id: 3,
      title: "25. - 31. JANUAR: Profit",
      subtitle: "Prvi Evri",
      Icon: DollarSign,
      iconClass: "text-white",
      tasks: [
        "Launch digitalnega produkta",
        "Nastavitev prodajnega lijaka",
        "Monetizacija občinstva"
      ],
      active: false,
      highlight: true
    },
    {
      id: 4,
      title: "1. - 10. FEBRUAR: Skaliranje",
      subtitle: "Dominacija Leta",
      Icon: Trophy,
      iconClass: "text-brand-gold",
      tasks: [
        "Avtomatizacija procesov",
        "Uradni Launch za 2026",
        "Tekmovanje za nagrade"
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
                    <span className="text-brand-gold text-xs font-black uppercase tracking-widest">New Year, Rich Me</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
                    Tvoj <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold italic pr-2">Načrt za 2026</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Pozabi na ponesrečene novoletne zaobljube. Tukaj je matematično dokazan sistem, kako boš 
                    <strong className="text-white"> januarja 2026</strong> spremenil svojo finančno prihodnost.
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
                            
                            {week.highlight && (
                                <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full border border-dark-bg shadow-sm z-20">
                                    $$$
                                </div>
                            )}
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
                            Leta 2024 je bil AI novost. Leta 2025 so ga testirali. <strong className="text-white">V 2026 bo AI video postal standard.</strong> Kdor začne ta januar, bo imel prednost "prvega na trgu". To je tvoja priložnost, da ujameš val, preden ga ujamejo vsi ostali.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};