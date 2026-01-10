import React, { useState, useEffect } from 'react';
import { Zap, Lock, Settings, Monitor, CreditCard, CheckCircle, X, Scale } from 'lucide-react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Reviews } from './components/Reviews';
import { ResultsShowcase } from './components/ResultsShowcase';
import { CommunityResults } from './components/CommunityResults';
import { Objections } from './components/Objections';
import { Process } from './components/Process';
import { Sweepstakes } from './components/Sweepstakes';
import { SweepstakesRules } from './components/SweepstakesRules';
import { Comparison } from './components/Comparison';
import { Founders } from './components/Founders';
import { Paths } from './components/Paths';
import { Challenge } from './components/Challenge';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { ScrollReveal } from './components/ScrollReveal';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Offer } from './components/Offer';
import { UpsellModal } from './components/UpsellModal';
import { ThankYou } from './components/ThankYou';
import { CountdownTimer } from './components/CountdownTimer';
import { Button } from './components/Button';
import { CheckoutForm } from './components/CheckoutForm';

type AppStep = 'landing' | 'upsell' | 'success' | 'rules';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [isMobileCheckoutOpen, setIsMobileCheckoutOpen] = useState(false);

  useEffect(() => {
    // Check URL parameters/paths to detect state
    const path = window.location.pathname;
    const query = new URLSearchParams(window.location.search);
    const step = query.get('step');

    // Added check for 'step=rules' to support static hosting without URL rewrites
    if (path === '/pravila' || step === 'rules') {
        setCurrentStep('rules');
    } else if (step === 'upsell') {
      // Main product purchased -> Show Upsell OTO Page
      setCurrentStep('upsell');
    } else if (step === 'success') {
      // Flow complete -> Show Thank You Page
      setCurrentStep('success');
    }
  }, []);

  const safePushState = (path: string) => {
    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      console.warn('History pushState failed (likely due to sandbox environment):', e);
    }
  };

  const handleUpsellAccept = () => {
    // Upsell logic placeholder (Payment link removed)
    console.log("Upsell accepted");
  };

  const handleUpsellDecline = () => {
    // User skipped upsell, go straight to success
    setCurrentStep('success');
    // Clean URL
    safePushState('/?step=success');
  };

  return (
    <>
      {currentStep === 'rules' && <SweepstakesRules />}

      {currentStep === 'success' && <ThankYou />}

      {currentStep === 'upsell' && (
        <UpsellModal 
          onAccept={handleUpsellAccept} 
          onDecline={handleUpsellDecline} 
        />
      )}

      {currentStep === 'landing' && (
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-gold selection:text-black pb-24 md:pb-0 relative overflow-x-hidden">
          
          {/* Global Parallax Background */}
          <ParallaxBackground />

          <div className="relative z-10 w-full overflow-hidden">
              <CountdownTimer variant="sticky" />
              
              <Hero />
              
              {/* Quick Reveal for Social Proof - Needs to be seen fast */}
              <ScrollReveal delay={0} duration={600} yOffset={20}>
                  <SocialProof />
              </ScrollReveal>
              
              {/* Heavy Text Statement - Slower, more dramatic */}
              <ScrollReveal delay={0} duration={1000} yOffset={40} threshold={0.2}>
                  <div className="py-12 text-center max-w-4xl mx-auto px-6">
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light font-serif italic">
                          To niso "spletni guruji". To so študenti, frizerke, inženirji in popolni začetniki, ki so sledili sistemu in ustvarili več kot
                          <span className="text-white font-bold border-b border-brand-gold not-italic font-sans"> 50.000€ v manj kot 30 dneh.</span>
                      </p>
                      <p className="text-gray-500 mt-6 text-sm font-bold uppercase tracking-wide font-sans">
                          Sistem deluje, če delaš ti. Ali si pripravljen?
                      </p>
                  </div>
              </ScrollReveal>

              {/* Reviews - Fast reveal to keep momentum */}
              <ScrollReveal delay={0} duration={700}>
                  <Reviews />
              </ScrollReveal>

              <ScrollReveal duration={800} yOffset={30}>
                  <ResultsShowcase />
              </ScrollReveal>
              
              <ScrollReveal>
                  <CommunityResults />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Objections />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Process />
              </ScrollReveal>

              <ScrollReveal>
                  <Paths />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Challenge />
              </ScrollReveal>

              <ScrollReveal>
                  <Founders />
              </ScrollReveal>

              {/* Sweepstakes needs attention */}
              <ScrollReveal duration={900} yOffset={40}>
                  <Sweepstakes />
              </ScrollReveal>

              {/* Final Offer / CTA Section - Grand Entrance */}
              <ScrollReveal duration={1000} yOffset={50} threshold={0.1}>
                  <Offer />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Guarantee />
              </ScrollReveal>

              <ScrollReveal>
                  <Comparison />
              </ScrollReveal>

              <ScrollReveal>
                  <FAQ />
              </ScrollReveal>

              <footer className="text-center py-12 text-gray-600 text-sm bg-black border-t border-gray-900 relative z-10">
                  <p className="mb-4">© 2026 AI Univerza.</p>
                  <div className="flex justify-center gap-4 underline">
                      <a href="#">Pogoji</a>
                      <a href="#">Zasebnost</a>
                      <a href="#">Kontakt</a>
                  </div>
              </footer>

              {/* Sticky Bottom CTA for Mobile */}
              <div className="fixed bottom-0 left-0 right-0 z-[80] p-4 bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden animate-in slide-in-from-bottom duration-500 pb-8 safe-area-pb shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-4">
                      <div className="flex-1">
                          <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mb-0.5 flex items-center gap-1 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 
                              OMEJENA MESTA!
                          </p>
                          <div className="flex items-baseline gap-2">
                              <span className="text-brand-gold font-black text-xl">497€<span className="text-xs font-normal text-white/60 ml-1">/ leto</span></span>
                              <span className="text-gray-600 text-xs line-through decoration-red-500 decoration-2">6.182€</span>
                          </div>
                      </div>
                      <Button 
                          onClick={() => setIsMobileCheckoutOpen(true)} 
                          className="!py-3 !px-4 !text-sm w-auto shrink-0 shadow-lg"
                      >
                          PRIDRUŽI SE
                      </Button>
                  </div>
              </div>

              {/* Mobile Checkout Modal Overlay */}
              {isMobileCheckoutOpen && (
                  <div className="fixed inset-0 z-[100] flex items-end justify-center md:hidden">
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileCheckoutOpen(false)}></div>
                      <div className="bg-[#0a0a0a] border-t border-white/10 rounded-t-3xl w-full p-6 animate-in slide-in-from-bottom duration-300 relative max-h-[90vh] overflow-y-auto">
                          <button 
                              onClick={() => setIsMobileCheckoutOpen(false)}
                              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white"
                          >
                              <X size={20} />
                          </button>
                          <div className="pt-2">
                              <CheckoutForm />
                          </div>
                      </div>
                  </div>
              )}
          </div>
        </div>
      )}

      {/* Dev Menu */}
      <div className="fixed bottom-6 left-6 z-[9999] font-sans print:hidden hidden md:block">
        <div className="group relative">
          <div className="bg-black/40 backdrop-blur-lg border border-white/10 p-2.5 rounded-full cursor-pointer hover:bg-black/60 transition-all shadow-2xl hover:border-brand-gold/50 text-white">
             <Settings size={18} className="animate-[spin_10s_linear_infinite]" />
          </div>
          
          <div className="absolute bottom-full left-0 mb-3 flex flex-col gap-2 opacity-0 translate-y-4 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-48">
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
               <div className="px-2 py-1 text-[10px] uppercase font-bold text-gray-500 tracking-wider">Preview Mode</div>
               
               <button 
                  onClick={() => { setCurrentStep('landing'); safePushState('/'); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${currentStep === 'landing' ? 'bg-white/10 text-brand-gold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
               >
                  <Monitor size={14} /> Landing Page
               </button>

               <button 
                  onClick={() => { setCurrentStep('rules'); safePushState('/?step=rules'); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${currentStep === 'rules' ? 'bg-white/10 text-brand-gold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
               >
                  <Scale size={14} /> Pravila Igre
               </button>

               <button 
                  onClick={() => { setCurrentStep('upsell'); safePushState('/?step=upsell'); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${currentStep === 'upsell' ? 'bg-white/10 text-brand-gold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
               >
                  <CreditCard size={14} /> Upsell Page (OTO)
               </button>

               <button 
                  onClick={() => { setCurrentStep('success'); safePushState('/?step=success'); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${currentStep === 'success' ? 'bg-green-500/10 text-green-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
               >
                  <CheckCircle size={14} /> Thank You Page
               </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;