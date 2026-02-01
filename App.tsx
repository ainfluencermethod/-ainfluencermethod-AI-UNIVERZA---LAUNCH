import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Rules } from './components/Rules';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Contact } from './components/Contact';
import { CheckCircle2 } from 'lucide-react';

// GHL Webhook URL provided by user
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/TGsyH70nsz7y3hijuqTn/webhook-trigger/03179b84-8e85-4558-8b1f-e05cc58aa7ce"; 

type ViewState = 'home' | 'rules' | 'privacy' | 'terms' | 'contact';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<ViewState>('home');
  
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/pravila') setView('rules');
    else if (path === '/politika-zasebnosti') setView('privacy');
    else if (path === '/pogoji-uporabe') setView('terms');
    else if (path === '/kontakt') setView('contact');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);
    
    try {
      if (GHL_WEBHOOK_URL) {
        // Prepare data as URLSearchParams for x-www-form-urlencoded
        // This is more robust for CORS than application/json
        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("tags", "ai-univerza-waitlist, after-campaign-lead, doors-closed-waitlist");
        formData.append("source", "AI Univerza Website");

        // Send data to GoHighLevel using no-cors mode
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
          mode: 'no-cors' // CRITICAL: This bypasses browser CORS blocking
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // Only show success if no error was thrown
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Prišlo je do napake. Prosimo preverite povezavo in poskusite znova.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'rules':
        return <Rules onBack={() => setView('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setView('home')} />;
      case 'terms':
        return <TermsOfUse onBack={() => setView('home')} />;
      case 'contact':
        return <Contact onBack={() => setView('home')} />;
      default:
        return (
          <>
            <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
              <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
                
                {/* Badge */}
                <div className="animate-fade-in-up inline-block mb-6 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold tracking-wide uppercase">
                  VPIS JE ZAPRT
                </div>
                
                {/* Main Headline */}
                <div className="space-y-6 mb-12">
                   <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl animate-fade-in-up">
                    Vrata so <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500">
                      trenutno zaprta.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-400 max-w-xl mx-auto animate-fade-in-up delay-100">
                    AI Univerza je trenutno polna. Zaradi ogromnega zanimanja smo vpis za javnost zaprli. Vpiši se na prioritno listo spodaj za naslednji vpis.
                  </p>
                </div>

                {/* Opt-in Form Container */}
                <div className="w-full max-w-md animate-fade-in-up delay-200">
                  {!isSubmitted ? (
                    <Hero 
                      email={email} 
                      setEmail={setEmail} 
                      name={name} 
                      setName={setName}
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  ) : (
                    <div className="animate-fade-in scale-100 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-10 text-center backdrop-blur-md">
                       <div className="flex flex-col items-center justify-center space-y-4">
                          <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle2 className="w-10 h-10 text-indigo-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">Na prioritni listi!</h3>
                          <p className="text-gray-300">
                            Hvala. Obvestili te bomo takoj, ko se sprostijo nova mesta za vpis.
                          </p>
                       </div>
                    </div>
                  )}
                </div>

              </div>
            </main>

            <Footer 
              onShowRules={() => setView('rules')}
              onShowPrivacy={() => setView('privacy')}
              onShowTerms={() => setView('terms')}
              onShowContact={() => setView('contact')}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-500/30 overflow-hidden relative bg-[#0B0C15]">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 -z-10">
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
         <div className="absolute bottom-[-10%] left-0 w-full max-w-4xl h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
      </div>

      {renderContent()}
    </div>
  );
};

export default App;