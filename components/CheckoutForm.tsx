import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

export const CheckoutForm: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/14A14o9VI2Sw9iRdUY93y00";
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
        {/* The White Card UI - Pricing Card */}
        <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-[380px] shadow-2xl relative z-10 flex flex-col items-center text-center overflow-hidden border border-gray-100">
             
             {/* Product Identity */}
             <div className="mb-6">
                 <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="text-brand-gold w-8 h-8 fill-brand-gold" />
                 </div>
                 <h4 className="text-gray-900 font-black text-2xl uppercase tracking-tight leading-none">AI Univerza</h4>
             </div>
             
             {/* Main Price */}
             <div className="flex items-baseline justify-center gap-1 mb-2 text-[#1d1d1f]">
                 <span className="font-bold text-4xl self-start mt-2">€</span>
                 <span className="font-black text-7xl tracking-tighter leading-none">497</span>
             </div>
             <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8 bg-gray-50 px-3 py-1 rounded-full">/leto</p>

             <div className="w-full border-t border-gray-100 mb-6"></div>

             {/* Features List */}
             <div className="w-full text-left space-y-3 mb-8 px-2">
                <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5 shrink-0"><Check size={12} strokeWidth={4} /></div>
                    <span className="text-gray-700 text-sm font-bold leading-tight">Celoten AI Influencer Sistem</span>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5 shrink-0"><Check size={12} strokeWidth={4} /></div>
                    <span className="text-gray-700 text-sm font-bold leading-tight">Celoten Agencija/Brand Sistem</span>
                </div>
                 <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5 shrink-0"><Check size={12} strokeWidth={4} /></div>
                    <span className="text-gray-700 text-sm font-bold leading-tight">Dostop do Skool Skupnosti</span>
                </div>
                 <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5 shrink-0"><Check size={12} strokeWidth={4} /></div>
                    <span className="text-gray-700 text-sm font-bold leading-tight">Vstopnica za 15.000€ Sklad</span>
                </div>
             </div>

             {/* Subscribe Button */}
             <div className="w-full mb-6">
                 <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#000] hover:bg-[#222] text-white font-bold text-lg py-5 rounded-xl shadow-xl transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 group border border-gray-800"
                 >
                    Pridruži se <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-gold" />
                 </button>
             </div>

             {/* Trust/Payment Icons */}
             <div className="w-full">
                 <div className="flex justify-center gap-3 opacity-30 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5 object-contain" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-5 object-contain" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-5 object-contain" alt="Apple Pay" />
                </div>
             </div>

        </div>
    </div>
  );
};