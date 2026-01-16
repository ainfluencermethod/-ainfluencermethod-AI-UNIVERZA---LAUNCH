import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Loader2 } from 'lucide-react';

// Critical Components (Loaded immediately)
import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { Button } from './components/Button';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ScrollReveal } from './components/ScrollReveal';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { SocialProofNotification } from './components/SocialProofNotification';

// Non-Critical Components (Lazy Loaded)
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const Reviews = lazy(() => import('./components/Reviews').then(m => ({ default: m.Reviews })));
const ResultsShowcase = lazy(() => import('./components/ResultsShowcase').then(m => ({ default: m.ResultsShowcase })));
const CommunityResults = lazy(() => import('./components/CommunityResults').then(m => ({ default: m.CommunityResults })));
const Objections = lazy(() => import('./components/Objections').then(m => ({ default: m.Objections })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Paths = lazy(() => import('./components/Paths').then(m => ({ default: m.Paths })));
const Challenge = lazy(() => import('./components/Challenge').then(m => ({ default: m.Challenge })));
const Founders = lazy(() => import('./components/Founders').then(m => ({ default: m.Founders })));
const Sweepstakes = lazy(() => import('./components/Sweepstakes').then(m => ({ default: m.Sweepstakes })));
const Offer = lazy(() => import('./components/Offer').then(m => ({ default: m.Offer })));
const Guarantee = lazy(() => import('./components/Guarantee').then(m => ({ default: m.Guarantee })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CookieConsent = lazy(() => import('./components/CookieConsent').then(m => ({ default: m.CookieConsent })));

// Special Views
const SweepstakesRules = lazy(() => import('./components/SweepstakesRules').then(m => ({ default: m.SweepstakesRules })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const ThankYou = lazy(() => import('./components/ThankYou').then(m => ({ default: m.ThankYou })));
const UpsellModal = lazy(() => import('./components/UpsellModal').then(m => ({ default: m.UpsellModal })));

type AppStep = 'landing' | 'upsell' | 'success' | 'rules' | 'privacy' | 'terms' | 'contact';

const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <Loader2 className="animate-spin text-brand-gold opacity-20" size={32} />
  </div>
);

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');

  useEffect(() => {
    const handleUrlChange = () => {
      const query = new URLSearchParams(window.location.search);
      const step = query.get('step') as AppStep;
      if (step) setCurrentStep(step);
      else setCurrentStep('landing');
    };
    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const navigateTo = (step: AppStep) => {
    setCurrentStep(step);
    const url = step === 'landing' ? '/' : `/?step=${step}`;
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <CookieConsent />
      <ExitIntentPopup />
      <SocialProofNotification />
      
      {currentStep === 'rules' && <SweepstakesRules />}
      {currentStep === 'privacy' && <PrivacyPolicy />}
      {currentStep === 'terms' && <TermsAndConditions />}
      {currentStep === 'contact' && <Contact />}
      {currentStep === 'success' && <ThankYou />}
      {currentStep === 'upsell' && <UpsellModal onAccept={() => {}} onDecline={() => navigateTo('success')} />}

      {currentStep === 'landing' && (
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-gold selection:text-black pb-24 md:pb-0 relative overflow-x-hidden">
          
          <ParallaxBackground />

          <div className="relative z-10 w-full overflow-hidden">
              <CountdownTimer variant="sticky" />
              
              <div className="perf-hardware-accel">
                <Hero />
              </div>
              
              <Suspense fallback={<SectionLoader />}>
                <section className="perf-section-visibility">
                  <ScrollReveal delay={0} duration={600} yOffset={20}>
                    <SocialProof />
                  </ScrollReveal>
                </section>

                <section className="perf-section-visibility py-8 md:py-12 text-center max-w-4xl mx-auto px-6">
                    <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light italic">
                        To so strategije, ki jih uporabljajo <span className="text-white font-bold">digitalni ustvarjalci</span> za gradnjo vplivnih AI blagovnih znamk in
                        <span className="text-white font-bold border-b border-brand-gold not-italic"> doseganje izjemnih rezultatov.</span>
                    </p>
                </section>

                <section className="perf-section-visibility">
                    <Reviews />
                </section>

                <section className="perf-section-visibility">
                    <ResultsShowcase />
                </section>
                
                <section className="perf-section-visibility">
                    <CommunityResults />
                </section>

                <section className="perf-section-visibility">
                    <Objections />
                </section>
                
                <section className="perf-section-visibility">
                    <Process />
                </section>

                <section className="perf-section-visibility">
                    <Paths />
                </section>
                
                <section className="perf-section-visibility">
                    <Challenge />
                </section>

                <section className="perf-section-visibility">
                    <Founders />
                </section>

                <section className="perf-section-visibility">
                    <Sweepstakes />
                </section>

                <section id="offer" className="perf-section-visibility scroll-mt-24 md:scroll-mt-32">
                    <Offer />
                </section>
                
                <section className="perf-section-visibility">
                    <Guarantee />
                </section>

                <section className="perf-section-visibility">
                    <FAQ />
                </section>
              </Suspense>

              <footer className="py-16 md:py-24 px-6 bg-black border-t border-gray-900 relative z-10">
                  <div className="max-w-4xl mx-auto text-center">
                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 underline mb-10 opacity-60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          <button onClick={() => navigateTo('terms')} className="hover:text-brand-gold transition-colors">Pogoji Poslovanja</button>
                          <button onClick={() => navigateTo('rules')} className="hover:text-brand-gold transition-colors">Pravila Nagradne Igre</button>
                          <button onClick={() => navigateTo('privacy')} className="hover:text-brand-gold transition-colors">Politika Zasebnosti</button>
                          <button onClick={() => navigateTo('contact')} className="hover:text-brand-gold transition-colors">Kontakt</button>
                      </div>

                      <div className="space-y-6 text-gray-600 text-[10px] md:text-xs leading-relaxed max-w-3xl mx-auto px-4 text-justify md:text-center">
                          <p>
                              <strong>ODPOVED ODGOVORNOSTI:</strong> Rezultati, prikazani na tej strani, niso tipični. Vsak posameznik ima drugačne izkušnje, delovne navade in sposobnosti. Uspeh v digitalnem svetu zahteva čas, trud in vztrajnost. AI Universa ne zagotavlja finančnega uspeha, določenega zneska zaslužka ali zmag v nagradni igri samo na podlagi vstopa v program.
                          </p>
                          <p>
                              Ta stran ni del spletnega mesta Facebook ali Facebook Inc. Poleg tega te strani Facebook na noben način ne podpira. FACEBOOK je blagovna znamka družbe FACEBOOK, Inc. Vsi izdelki in storitve na tej strani so namenjeni izključno izobraževanju in informiranju.
                          </p>
                          <p className="opacity-40">
                              © 2026 AI Universa. Vse pravice pridržane. 3PM d.o.o., Prušnikova ulica 19, 1210 Ljubljana - Šentvid.
                          </p>
                      </div>
                  </div>
              </footer>

              {/* Sticky Bottom CTA for Mobile */}
              <div className="fixed bottom-0 left-0 right-0 z-[80] px-4 py-3 bg-black/95 backdrop-blur-2xl border-t border-white/10 md:hidden pb-10 safe-area-pb shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
                      <div className="flex flex-col">
                          <p className="text-brand-red text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(255,49,49,1)]"></span> 
                              OMEJENA MESTA!
                          </p>
                          <span className="text-brand-gold font-black text-xl tracking-tighter">497€</span>
                      </div>
                      <Button onClick={scrollToOffer} className="!py-3 !px-8 !text-[11px] !gap-2" autoShimmer>
                          PRIDRUŽI SE
                      </Button>
                  </div>
              </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default App;