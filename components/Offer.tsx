import React from 'react';
import { Zap, ShieldCheck, Lock, Star, Quote, LayoutDashboard, MonitorPlay, Users, BookOpen } from 'lucide-react';
import { CheckoutForm } from './CheckoutForm';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 px-4 bg-gradient-to-br from-[#AA771C] via-[#FCF6BA] to-[#B38728] relative overflow-hidden">
       {/* Background noise/pattern */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),transparent)] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-6xl text-black font-black italic mb-4">
                  Pridruži se AI Revoluciji
              </h2>
              <p className="text-black/80 font-bold text-lg uppercase tracking-widest">
                  Generacija Januar 2026
              </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row overflow-hidden border-4 border-black relative">
              
              {/* LEFT SIDE - Value Stack */}
              <div className="lg:w-3/5 p-6 md:p-12 bg-white relative flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold to-yellow-300"></div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-black mb-8 flex items-center gap-3 uppercase tracking-tighter">
                        <Zap className="fill-black w-6 h-6" />
                        Tvoj "Arsenal" za uspeh:
                    </h2>

                    <div className="space-y-4 mb-8">
                        {/* Stack Item 1 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0">
                                <BookOpen className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">AI Influencer Blueprint</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">1.997€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Celoten sistem od A do Ž za gradnjo karakterjev.</p>
                            </div>
                        </div>

                        {/* Stack Item 2 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0">
                                <LayoutDashboard className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">AI Agencija Blueprint</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">1.497€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Sistem za prodajo AI storitev podjetjem (B2B).</p>
                            </div>
                        </div>

                        {/* Stack Item 3 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0">
                                <Users className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">Private Skool Mastermind</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">997€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Dostop do skupnosti zmagovalcev in mentorjev.</p>
                            </div>
                        </div>
                        
                         {/* Stack Item 4 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0">
                                <MonitorPlay className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">Tedenski Q&A Klici</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">497€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Arhiv vseh preteklih klicev + dostop do novih.</p>
                            </div>
                        </div>


                        {/* Bonus Item */}
                        <div className="flex gap-4 p-4 rounded-2xl border-2 border-brand-gold bg-[#fffde7] shadow-lg transform hover:scale-[1.01] transition-transform relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-gold/20 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                             <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                <Star className="text-black w-6 h-6 fill-black" />
                            </div>
                             <div className="flex-1 relative z-10">
                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                     <h3 className="font-bold text-lg text-black leading-tight flex flex-wrap items-center gap-2">
                                         Vstopnica za 15.000€ Sklad
                                         <span className="bg-brand-gold text-black text-[10px] px-2 py-0.5 rounded font-black uppercase shadow-sm whitespace-nowrap">Bonus</span>
                                     </h3>
                                     <span className="font-mono font-bold text-[#b8860b] text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-0">Neprecenljivo</span>
                                 </div>
                                 <p className="text-xs text-[#856404] mt-1 font-medium">Avtomatska udeležba v žrebanju za Rolex in Apple nagrade.</p>
                             </div>
                        </div>
                    </div>
                  </div>

                  {/* Social Proof Sandwich */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                        <Quote className="absolute top-4 left-4 text-gray-200 fill-gray-200 w-10 h-10 -z-10" />
                        <div className="flex items-start gap-4">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Marko&backgroundColor=c0aede" className="w-12 h-12 rounded-full bg-gray-200" alt="Student" />
                            <div>
                                <div className="flex text-yellow-500 mb-1">
                                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                                </div>
                                <p className="text-gray-700 text-sm font-medium italic mb-2">
                                    "Iskreno, bil sem skeptičen glede cene. Ampak v prvem tednu sem z enim samim videom pokril celotno investicijo. Zdaj delam 2k/teden. Hvala ekipa!"
                                </p>
                                <p className="text-xs text-gray-500 font-bold uppercase">- Marko Z., Maribor</p>
                            </div>
                        </div>
                  </div>

                  <div>
                    {/* Price Anchor */}
                    <div className="flex items-end justify-between border-t-2 border-gray-100 pt-8 mb-8">
                        <div>
                            <p className="text-gray-400 font-bold text-xs uppercase tracking-wide mb-1">Skupna Vrednost</p>
                            <p className="text-2xl font-bold text-gray-300 line-through decoration-red-500 decoration-2">6.182€</p>
                        </div>
                        <div className="text-right">
                            <p className="text-black font-black text-lg uppercase tracking-wide mb-0">Generacija Januar:</p>
                            <div className="flex items-baseline justify-end gap-1">
                                <p className="text-6xl font-black text-[#00B67A] tracking-tighter leading-none shadow-green-200 drop-shadow-sm">497€</p>
                                <p className="text-xs text-gray-400 font-bold uppercase mb-1">/ leto</p>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>

              {/* RIGHT SIDE - Pricing Card */}
              <div className="lg:w-2/5 bg-black p-0 relative overflow-hidden flex flex-col justify-center border-l-4 border-black py-12 lg:py-0 lg:min-h-[800px]">
                  {/* Decorative Elements for Black Side */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                      <CheckoutForm />
                  </div>
              </div>
          </div>
          
          {/* Trust Indicators below card */}
          <div className="mt-8 flex justify-center items-center gap-6 text-black/60 mix-blend-multiply">
              <div className="flex items-center gap-2">
                  <Lock size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">SSL Secure Payment</span>
              </div>
              <div className="h-4 w-px bg-black/20"></div>
              <div className="flex gap-3 grayscale opacity-70">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-4" alt="Visa" />
              </div>
          </div>
       </div>
    </section>
  );
};