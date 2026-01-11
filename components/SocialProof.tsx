import React, { useState, useEffect, useRef } from 'react';
import { RevenueChart } from './RevenueChart';
import { Instagram, Youtube, Video, Smartphone } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2500; // 2.5 seconds
          const start = 0;
          const end = 600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out expo formula for smooth landing
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(start + (end - start) * ease));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 md:py-24 px-4 bg-dark-bg/50 border-y border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Animated Counter Headline */}
        <div ref={sectionRef} className="relative z-10 mb-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#FFD700] tracking-tighter drop-shadow-2xl tabular-nums leading-[1.1] py-2">
                {count}M Ogledov
            </h2>
        </div>
        
        <p className="text-lg md:text-2xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Od tistih, ki so sprejeli ta izziv v tujini zadnjič in spremenili svoja življenja.
        </p>

        {/* Dashboard Mockup Container */}
        <div className="relative bg-card-bg border border-gray-800 rounded-2xl p-4 md:p-10 shadow-2xl max-w-4xl mx-auto overflow-hidden mb-12 md:mb-16">
            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-left space-y-4 flex-1 w-full">
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                        <div className="text-gray-500 text-xs uppercase mb-1">Top Študent</div>
                        <div className="text-white font-bold text-lg">kia.tyllerxo</div>
                        <div className="text-brand-gold font-mono text-xl">+15.000€ Profit</div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800 opacity-60">
                        <div className="text-gray-500 text-xs uppercase mb-1">Povprečen študent</div>
                        <div className="text-white font-bold text-lg">Cash Chaser</div>
                        <div className="text-brand-gold font-mono text-xl">+9.941€ Profit</div>
                    </div>
                </div>
                
                <div className="flex-1 w-full">
                    <RevenueChart />
                </div>
            </div>
            
            <p className="mt-8 text-gray-400 text-sm max-w-2xl mx-auto">
                To so navadni ljudje, ki so se pridružili in ustvarili digitalno premoženje v manj kot 30 dneh.
                Zdaj je ta sistem še izboljšan, poenostavljen in optimiziran.
            </p>
        </div>

        {/* Platforms Strip */}
        <div className="border-t border-white/5 pt-12">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Dominiraj na vseh platformah</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-white font-bold text-lg md:text-xl">
                    <Instagram className="text-[#E1306C]" /> Instagram
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-lg md:text-xl">
                    <div className="bg-black text-white p-1 rounded-full"><span className="font-black italic">T</span></div> TikTok
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-lg md:text-xl">
                    <Youtube className="text-[#FF0000]" /> YouTube
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-lg md:text-xl">
                    <Video className="text-gray-400" /> Shorts
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};