import React, { useState, useEffect } from 'react';
import { Zap, Lock, Monitor, CreditCard, CheckCircle, X, Scale } from 'lucide-react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Reviews } from './components/Reviews';
import { ResultsShowcase } from './components/ResultsShowcase';
import { CommunityResults } from './components/CommunityResults';
import { Objections } from './components/Objections';
import { Process } from './components/Process';
import { Sweepstakes } from './components/Sweepstakes';
import { SweepstakesRules } from './components/SweepstakesRules';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Contact } from './components/Contact';
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

type AppStep = 'landing' | 'upsell' | 'success' | 'rules' | 'privacy' | 'terms' | 'contact';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [isMobileCheckoutOpen, setIsMobileCheckoutOpen] = useState(false);

  useEffect(() => {
    // Check URL parameters/paths to detect state
    const path = window.location.pathname;
    const query = new URLSearchParams(window.location.search);
    const step = query.get('step');

    if (path === '/pravila' || step === 'rules') {
        setCurrentStep('rules');
    } else if (path === '/zasebnost' || step === 'privacy') {
        setCurrentStep('privacy');
    } else if (path === '/pogoji' || step === 'terms') {
        setCurrentStep('terms');
    } else if (path === '/kontakt' || step === 'contact') {
        setCurrentStep('contact');
    } else if (step === 'upsell') {
      setCurrentStep('upsell');
    } else if (step === 'success') {
      setCurrentStep('success');
    } else {
      setCurrentStep('landing');
    }
  }, [window.location.search]);

  const safePushState = (path: string) => {
    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      console.warn('History pushState failed (likely due to sandbox environment):', e);
    }
  };

  const navigateTo = (step: AppStep) => {
    setCurrentStep(step);
    safePushState(`/?step=${step}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsellAccept = () => {
    console.log("Upsell accepted");
  };

  const handleUpsellDecline = () => {
    setCurrentStep('success');
    safePushState('/?step=success');
  };

  return (
    <>
      {currentStep === 'rules' && <SweepstakesRules />}
      {currentStep === 'privacy' && <PrivacyPolicy />}
      {currentStep === 'terms' && <TermsAndConditions />}
      {currentStep === 'contact' && <Contact />}
      {currentStep === 'success' && <ThankYou />}

      {currentStep === 'upsell' && (
        <UpsellModal 
          onAccept={handleUpsellAccept} 
          onDecline={handleUpsellDecline} 
        />
      )}

      {currentStep === 'landing' && (
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-gold selection:text-black pb-24 md:pb-0 relative overflow-x-hidden">
          
          <ParallaxBackground />

          <div className="relative z-10 w-full overflow-hidden">
              <CountdownTimer variant="sticky" />
              
              <Hero />
              
              <ScrollReveal delay={0} duration={600} yOffset={20}>
                  <SocialProof />
              </ScrollReveal>
              
              <ScrollReveal delay={0} duration={1000} yOffset={40} threshold={0.2}>
                  <div className="py-12 text-center max-w-4xl mx-auto px-6">
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light font-serif italic">
                          To so ljudje, <span className="text-white font-bold">brez predznanja o uporabi AI orodij</span>, ki so sledili sistemu in ustvarili več kot
                          <span className="text-white font-bold border-b border-brand-gold not-italic font-sans"> 10.000€ v manj kot 30 dneh.</span>
                      </p>
                      <p className="text-gray-500 mt-6 text-sm font-bold uppercase tracking-wide font-sans">
                          Sistem je prilagojen začetnikom. Ali si pripravljen?
                      </p>
                  </div>
              </ScrollReveal>

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

              <ScrollReveal duration={900} yOffset={40}>
                  <Sweepstakes />
              </ScrollReveal>

              <ScrollReveal duration={1000} yOffset={50} threshold={0.1}>
                  <Offer />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Guarantee />
              </ScrollReveal>

              <ScrollReveal>
                  <FAQ />
              </ScrollReveal>

              <footer className="text-center py-12 text-gray-600 text-sm bg-black border-t border-gray-900 relative z-10 px-4">
                  <p className="mb-4">© 2026 AI Univerza.</p>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 underline">
                      <button onClick={() => navigateTo('terms')} className="hover:text-brand-gold transition-colors">Splošni pogoji</button>
                      <button onClick={() => navigateTo('rules')} className="hover:text-brand-gold transition-colors">Pravila igre</button>
                      <button onClick={() => navigateTo('privacy')} className="hover:text-brand-gold transition-colors">Zasebnost</button>
                      <button onClick={() => navigateTo('contact')} className="hover:text-brand-gold transition-colors">Kontakt</button>
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
    </>
  );
};

export default App;