import React from 'react';
import { Zap, ShieldCheck, Lock, Star, Quote, LayoutDashboard, MonitorPlay, Users, BookOpen, AlertCircle } from 'lucide-react';
import { CheckoutForm } from './CheckoutForm';

export const Offer: React.FC = () => {
  return (
    <div className="bg-black relative overflow-hidden">
       {/* High Impact FOMO Banner Section */}
       <div className="bg-black py-8 md:py-20 px-4 border-b border-white/5">
           <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                <h2 className="text-xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4 md:mb-6 max-w-4xl mx-auto drop-shadow-2xl px-2">
                    Zaradi izjemne <br className="hidden md:block" />
                    medijske pozornosti <br className="hidden md:block" />
                    je povpraševanje <br className="hidden md:block" />
                    izjemno visoko...
                </h2>
                <p className="text-sm md:text-xl text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed px-4">
                    Če po oddaji naročila traja nekaj sekund, da se stran naloži, vas prosimo za potrpežljivost. 
                    <br className="hidden md:block" /> 
                    Vaše mesto v sistemu je rezervirano takoj ob kliku.
                </p>
                <div className="mt-6 md:mt-8 h-1 w-12 md:w-16 bg-brand-gold rounded-full opacity-50 animate-pulse"></div>
           </div>
       </div>

       {/* Main Offer Content - TARGET SECTION FOR CTA */}
       <div id="offer" className="py-12 md:py-24 px-3 md:px-4 bg-gradient-to-br from-[#AA771C] via-[#FCF6BA] to-[#B38728] relative scroll-mt-20 md:scroll-mt-32">
            {/* Background noise/pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.6),transparent_80%)] pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 bg-black border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-2.5 mb-6 md:mb-8 shadow-2xl animate-bounce scale-90 md:scale-100">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-brand-red" fill="currentColor" />
                        <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.35em]">ZADNJA PRILOŽNOST ZA VPIS</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-8xl text-black font-black italic mb-4 md:mb-6 leading-none tracking-tighter drop-shadow-sm px-2">
                        Pridruži se AI Universi
                    </h2>
                    <p className="text-black/70 font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-[10px] md:text-lg bg-white/30 backdrop-blur-sm px-6 py-1.5 md:px-8 md:py-2 rounded-full border border-black/10">
                        CELOTEN SISTEM ZA LETO 2026
                    </p>
                </div>

                <div className="bg-[#050505] rounded-[2rem] md:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] md:shadow-[0_80px_150px_-30px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row overflow-hidden border border-white/10 md:border-2 md:border-white/20 relative group mx-1 md:mx-0">
                    
                    {/* Value Stack Left Side */}
                    <div className="lg:w-3/5 p-6 md:p-16 bg-[#0a0a0a] relative flex flex-col justify-between">
                        <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-brand-gold via-white to-brand-gold animate-shimmer"></div>
                        
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-4">
                                <h2 className="text-2xl md:text-5xl font-black text-white flex items-center gap-3 md:gap-4 uppercase tracking-tighter italic">
                                    <Zap className="fill-brand-gold text-brand-gold w-8 h-8 md:w-10 md:h-10" />
                                    VSEBINA PAKETA:
                                </h2>
                                <div className="bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-brand-red font-black text-[10px] md:text-xs uppercase tracking-widest animate-pulse w-fit">
                                    ZADNJIH 24 UR
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                                {/* Stack Item 1 */}
                                <div className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_20px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                        <BookOpen className="text-black w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-black text-lg md:text-2xl text-white leading-tight uppercase tracking-tight">AI Influencer Accelerator</h3>
                                            <span className="font-mono font-bold text-gray-600 text-[10px] md:text-sm hidden sm:block">1.997 €</span>
                                        </div>
                                        <p className="text-[12px] md:text-base text-gray-400 mt-1.5 font-medium leading-tight md:leading-relaxed">Sistem od 0 do viralnosti. Kako zgraditi blagovno znamko brez uporabe obraza.</p>
                                    </div>
                                </div>

                                {/* Stack Item 2 */}
                                <div className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_20px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                        <LayoutDashboard className="text-black w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-black text-lg md:text-2xl text-white leading-tight uppercase tracking-tight">AI Agencija B2B</h3>
                                            <span className="font-mono font-bold text-gray-600 text-[10px] md:text-sm hidden sm:block">1.497 €</span>
                                        </div>
                                        <p className="text-[12px] md:text-base text-gray-400 mt-1.5 font-medium leading-tight md:leading-relaxed">Nauči se prodajati AI storitve podjetjem in avtomatizirati procese.</p>
                                    </div>
                                </div>

                                {/* Stack Item 3 */}
                                <div className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_20px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                        <Users className="text-black w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-black text-lg md:text-2xl text-white leading-tight uppercase tracking-tight">Elite Skool skupnost</h3>
                                            <span className="font-mono font-bold text-gray-600 text-[10px] md:text-sm hidden sm:block">997 €</span>
                                        </div>
                                        <p className="text-[12px] md:text-base text-gray-400 mt-1.5 font-medium leading-tight md:leading-relaxed">Dostop do VIP mreže slovenskih AI ustvarjalcev in tedenski klici.</p>
                                    </div>
                                </div>
                                
                                {/* Bonus Item */}
                                <div className="flex gap-4 md:gap-6 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-brand-gold bg-brand-gold/10 shadow-[0_0_40px_rgba(212,175,55,0.15)] transform hover:scale-[1.02] transition-transform relative overflow-hidden group/bonus">
                                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl from-brand-gold/30 to-transparent rounded-bl-full -mr-4 -mt-4 md:-mr-6 md:-mt-6 opacity-60"></div>
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(212,175,55,0.5)] group-hover/bonus:scale-110 transition-transform border-2 border-white/40">
                                        <Star className="text-black w-6 h-6 md:w-8 md:h-8 fill-black" />
                                    </div>
                                    <div className="flex-1 relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                            <h3 className="font-black text-xl md:text-4xl text-white leading-tight uppercase tracking-tighter">
                                                15.000 € nagradni sklad
                                            </h3>
                                            <span className="bg-brand-red text-white text-[8px] md:text-[10px] px-3 py-1 rounded-full font-black uppercase shadow-2xl tracking-widest mt-1 sm:mt-0 animate-pulse w-fit">EKSKLUZIVNO</span>
                                        </div>
                                        <p className="text-[10px] md:text-lg text-brand-gold mt-2 font-black uppercase tracking-[0.15em] md:tracking-[0.2em] leading-tight">AVTOMATSKA UDELEŽBA V ŽREBU ZA ROLEX, MACBOOK IN IPHONE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* High Trust Testimonial */}
                        <div className="mb-8 md:mb-12 p-6 md:p-10 bg-white/[0.04] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 relative group/testimonial shadow-2xl">
                            <Quote className="absolute top-4 left-4 md:top-8 md:left-8 text-white/5 fill-white/5 w-16 h-16 md:w-24 md:h-24 -z-10 group-hover/testimonial:scale-110 transition-transform" />
                            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rok&backgroundColor=c0aede" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-brand-gold/50 bg-gray-900 shadow-2xl shrink-0" alt="Student" />
                                <div>
                                    <div className="flex text-brand-gold mb-2 md:mb-3 gap-0.5 md:gap-1">
                                        <Star size={14} fill="currentColor" className="md:size-[18px]" /><Star size={14} fill="currentColor" className="md:size-[18px]" /><Star size={14} fill="currentColor" className="md:size-[18px]" /><Star size={14} fill="currentColor" className="md:size-[18px]" /><Star size={14} fill="currentColor" className="md:size-[18px]" />
                                    </div>
                                    <p className="text-white text-base md:text-2xl font-medium italic leading-relaxed tracking-tight">
                                        "AI Universa je edino mesto v Sloveniji, kjer dobiš prave sisteme. Danes delam vsebino 10-krat hitreje."
                                    </p>
                                    <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500 mt-4 md:mt-6 block">— ROK B., MARIBOR</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-10 opacity-30 px-2 md:px-4 grayscale scale-90 md:scale-100">
                            <div className="flex items-center gap-2 md:gap-3 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
                                <ShieldCheck size={16} className="text-green-500 md:size-5" /> 14 DNI GARANCIJE
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
                                <Lock size={16} className="md:size-5" /> VARNO PLAČILO
                            </div>
                        </div>
                    </div>

                    {/* Pricing & Form Side */}
                    <div className="lg:w-2/5 bg-black border-t-2 lg:border-t-0 lg:border-l-2 border-white/10 flex flex-col items-center justify-center py-12 md:py-20 relative px-4 md:px-6">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>
                        <div className="w-full scale-95 sm:scale-100">
                            <CheckoutForm />
                        </div>
                        <div className="mt-8 md:mt-12 text-center max-w-xs">
                            <p className="text-gray-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-relaxed px-4">
                                *Vsa mesta so omejena zaradi mentorske podpore. Vpis se zapre takoj, ko dosežemo kvoto ali ob izteku časa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};