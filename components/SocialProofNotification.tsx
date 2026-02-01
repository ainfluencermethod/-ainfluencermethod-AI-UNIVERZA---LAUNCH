import React, { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  location: string;
  gender: 'm' | 'f';
  timeAgo: string;
}

const FIRST_NAMES_M = ['Marko', 'Luka', 'Jan', 'Tine', 'Rok', 'Andrej', 'Matej', 'Nejc', 'Grega', 'Blaž', 'Žiga', 'Matic', 'Anže', 'Miha', 'David', 'Simon', 'Tomaž', 'Gregor', 'Bojan', 'Primož'];
const FIRST_NAMES_F = ['Ana', 'Maja', 'Klara', 'Nina', 'Petra', 'Eva', 'Sara', 'Nika', 'Špela', 'Teja', 'Lara', 'Katja', 'Tina', 'Lucija', 'Zala', 'Barbara', 'Mojca', 'Urška', 'Tjaša', 'Metka'];

const TOWNS = [
  'Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Koper', 'Velenje', 'Novo mesto', 'Ptuj', 
  'Trbovlje', 'Kamnik', 'Jesenice', 'Nova Gorica', 'Domžale', 'Škofja Loka', 
  'Murska Sobota', 'Izola', 'Postojna', 'Vrhnika', 'Slovenj Gradec', 'Zagorje ob Savi',
  'Kočevje', 'Grosuplje', 'Krško', 'Bled', 'Ajdovščina', 'Brežice', 'Idrija'
];

const TIMES = [
  'pravkar', 'pred 1 minuto', 'pred 3 minutami', 'pred 5 minutami', 'pred 8 minutami', 
  'pred 12 minutami', 'pred 14 minutami', 'pred 21 minutami', 'pred 34 minutami', 
  'pred 42 minutami', 'pred 55 minutami', 'pred 1 uro'
];

export const SocialProofNotification: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState<PurchaseEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateRandomEvent = useCallback((): PurchaseEvent => {
    const isFemale = Math.random() > 0.5;
    const nameList = isFemale ? FIRST_NAMES_F : FIRST_NAMES_M;
    return {
      name: nameList[Math.floor(Math.random() * nameList.length)],
      location: TOWNS[Math.floor(Math.random() * TOWNS.length)],
      gender: isFemale ? 'f' : 'm',
      timeAgo: TIMES[Math.floor(Math.random() * TIMES.length)]
    };
  }, []);

  useEffect(() => {
    let timeoutId: number;

    const cycleNotification = () => {
      // Create new event
      setCurrentEvent(generateRandomEvent());
      
      // Show after a small delay to ensure state update
      setTimeout(() => setIsVisible(true), 100);

      // Hide after 6 seconds
      timeoutId = window.setTimeout(() => {
        setIsVisible(false);
        // Wait 10-20 seconds for next one
        const nextDelay = 10000 + Math.random() * 10000;
        timeoutId = window.setTimeout(cycleNotification, nextDelay);
      }, 6000);
    };

    // Initial trigger
    const initialDelay = 3000 + Math.random() * 3000;
    timeoutId = window.setTimeout(cycleNotification, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [generateRandomEvent]);

  if (!currentEvent) return null;

  return (
    <div 
      className={`fixed bottom-28 md:bottom-10 left-4 md:left-10 z-[150] transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-gray-100 p-2 pr-8 flex items-center gap-4 max-w-[280px] md:max-w-sm pointer-events-auto">
        {/* Map Pin Icon - Proof Style */}
        <div className="w-11 h-11 md:w-14 md:h-14 bg-[#f1f3f5] rounded-full flex items-center justify-center shrink-0">
          <MapPin size={22} className="text-[#adb5bd]" />
        </div>

        <div className="flex flex-col min-w-0">
          {/* Main Line: Bold */}
          <p className="text-[#000000] font-black text-[13px] md:text-[15px] leading-tight truncate">
            {currentEvent.name} iz kraja {currentEvent.location}
          </p>
          
          {/* Action Line: Normal Text */}
          <p className="text-[#495057] text-[11px] md:text-[13px] leading-tight truncate mt-0.5">
            Je ravnokar {currentEvent.gender === 'f' ? 'kupila' : 'kupil'} <span className="text-[#343a40] font-bold">AI Universa</span>
          </p>
          
          {/* Bottom Line: Italic Time + Proof Link */}
          <div className="flex items-center gap-3 mt-1.5">
             <span className="text-[10px] md:text-[11px] text-[#adb5bd] italic font-medium">
               {currentEvent.timeAgo}
             </span>
             <a 
                href="https://useproof.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0084ff] font-bold text-[10px] md:text-[11px] hover:underline flex items-center gap-1"
             >
                verified by Proof
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};