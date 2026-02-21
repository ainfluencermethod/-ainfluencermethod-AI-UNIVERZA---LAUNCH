import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Rules } from './components/Rules';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Contact } from './components/Contact';
import { CheckCircle2 } from 'lucide-react';

// GHL Webhook URL provided by user
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/TGsyH70nsz7y3hijuqTn/webhook-trigger/3e64fdac-8df8-4b61-80f6-5a0cc19a3e2e"; 

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
        // Split name for better GHL compatibility
        const firstName = name.split(' ')[0];
        const lastName = name.split(' ').slice(1).join(' ') || '';

        // Attempt 1: Standard JSON Payload
        // This is preferred as it passes tags as a proper array
        try {
          const response = await fetch(GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              name: name,
              first_name: firstName,
              last_name: lastName,
              tags: ["ai-univerza-waitlist", "after-campaign-lead", "doors-closed-waitlist"],
              source: "AI Univerza Website"
            })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

        } catch (jsonError) {
          console.warn("JSON submission failed, attempting fallback...", jsonError);

          // Attempt 2: Fallback to no-cors Form Data
          // If JSON fails (often due to CORS), we send as form-urlencoded in no-cors mode.
          // This "fire and forget" method bypasses strict browser security blocks.
          const formData = new URLSearchParams();
          formData.append("email", email);
          formData.append("name", name);
          formData.append("first_name", firstName);
          formData.append("last_name", lastName);
          // For form data, tags are comma-separated string
          formData.append("tags", "ai-univerza-waitlist, after-campaign-lead, doors-closed-waitlist");
          formData.append("source", "AI Univerza Website");

          await fetch(GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
            mode: 'no-cors'
          });
        }
      } else {
        // Simulate delay if no URL
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // If we got here, at least one method was attempted
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting:", error);
      // Even if fallback fails (rare), we show success to user to avoid friction
      // as they can't do anything about technical webhook errors.
      setIsSubmitted(true);
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
                <div className="animate-fade-in-up inline-block mb-8 px-5 py-1.5 rounded-full bg-[#1A0505] border border-red-900/30 text-red-500 text-[10px] font-bold tracking-widest uppercase">
                  VPIS JE ZAPRT
                </div>
                
                {/* Main Headline */}
                <div className="space-y-6 mb-16">
                   <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white animate-fade-in-up leading-[0.9]">
                    Vrata so <span className="text-[#555]">trenutno</span><br />
                    <span className="text-[#555]">zaprta.</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-gray-500 font-medium max-w-xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
                    AI Universa je trenutno polna. Zaradi ogromnega zanimanja smo vpis za javnost zaprli. Vpiši se na prioritno listo spodaj za naslednji vpis.
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
                    <div className="animate-fade-in scale-100 bg-[#111] border border-white/10 rounded-2xl p-10 text-center">
                       <div className="flex flex-col items-center justify-center space-y-4">
                          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Na prioritni listi!</h3>
                          <p className="text-gray-500 text-sm">
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20 overflow-hidden relative bg-black">
      
      {/* Subtle Spotlight Effect */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      {renderContent()}
    </div>
  );
};

export default App;