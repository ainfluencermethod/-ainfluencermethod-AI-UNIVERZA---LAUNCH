
import React, { useState, useEffect, useMemo } from 'react';
import { Zap } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string;
  variant?: 'pill' | 'sticky' | 'minimal';
  onAction?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateStr, variant = 'pill', onAction }) => {
  const targetDate = useMemo(() => new Date(targetDateStr || '2026-01-16T23:59:00').getTime(), [targetDateStr]);
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      total: distance
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (variant === 'sticky') {
      return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-black/95 border-b border-white/10 backdrop-blur-3xl flex items-center justify-center py-4 px-6 shadow-2xl animate-fade-in-up">
             <div className="flex items-center gap-4 md:gap-12 max-w-[90rem] mx-auto w-full justify-between">
                
                {/* Status Indicator */}
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3 md:h-5 md:w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 md:h-5 md:w-5 bg-brand-red shadow-[0_0_15px_rgba(255,49,49,1)]"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs md:text-xl font-black text-white uppercase tracking-tighter leading-none">
                           VPIS SE ZAPRE ČEZ:
                        </span>
                        <span className="text-[8px] md:text-xs text-brand-red font-black uppercase tracking-[0.2em] mt-1 animate-pulse">
                            ZADNJA PRILOŽNOST VPISA
                        </span>
                    </div>
                </div>

                {/* Main Countdown Display - Matching Screenshot */}
                <div className="flex items-center gap-3 md:gap-8">
                    <TimeUnit value={timeLeft.days} label="DNI" color="gold" />
                    <Separator />
                    <TimeUnit value={timeLeft.hours} label="UR" color="gold" />
                    <Separator />
                    <TimeUnit value={timeLeft.minutes} label="MIN" color="gold" />
                    <Separator />
                    <TimeUnit value={timeLeft.seconds} label="SEK" color="red" />
                </div>
                
                {/* CTA - Hidden on very small screens */}
                <div className="hidden sm:block">
                    <button 
                        onClick={onAction}
                        className="group bg-brand-red text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] py-3 px-6 md:px-10 rounded-xl transition-all shadow-[0_0_25px_rgba(255,49,49,0.4)] hover:scale-105 active:scale-95 border-t border-white/20"
                    >
                        ZAGOTOVI MESTO
                    </button>
                </div>
             </div>
        </div>
      );
  }

  return null;
};

const TimeUnit = ({ value, label, color }: { value: number, label: string, color: 'gold' | 'red' }) => (
    <div className="flex flex-col items-center min-w-[32px] md:min-w-[60px]">
        <span className={`text-2xl md:text-6xl font-black tabular-nums tracking-tighter leading-none ${color === 'red' ? 'text-brand-red drop-shadow-[0_0_15px_rgba(255,49,49,0.3)]' : 'text-brand-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]'}`}>
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-[7px] md:text-[11px] font-black text-gray-500 uppercase tracking-widest mt-1 md:mt-2">
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-gray-800 text-lg md:text-5xl -mt-4 md:-mt-8 font-black opacity-40">:</span>
);
