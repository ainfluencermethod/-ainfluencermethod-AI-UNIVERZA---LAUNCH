import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from './Button';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        // Small delay for better UX
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      // Fallback for private browsing / blocked localStorage
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie-consent', 'accepted');
    } catch (err) {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('cookie-consent', 'declined');
    } catch (err) {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        {/* Subtle background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full pointer-events-none group-hover:bg-brand-gold/10 transition-colors duration-500"></div>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-brand-gold/10 p-2.5 rounded-xl shrink-0">
            <Shield className="text-brand-gold w-5 h-5" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
              Varovanje zasebnosti
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Uporabljamo piškotke za zagotavljanje najboljše uporabniške izkušnje in analizo prometa. S klikom na "Sprejmi vse" se strinjate z njihovo uporabo. Več informacij v naši{' '}
              <button 
                onClick={() => {
                  window.history.pushState({}, '', '/?step=privacy');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-brand-gold hover:underline font-medium"
              >
                politiki zasebnosti
              </button>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={handleAccept} 
                variant="primary" 
                className="!py-2 !px-4 !text-[10px] flex-1"
                icon={false}
              >
                Sprejmi vse
              </Button>
              <button 
                onClick={handleDecline}
                className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-colors border border-white/5 rounded-xl hover:bg-white/5"
              >
                Zavrni
              </button>
            </div>
          </div>

          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-600 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};