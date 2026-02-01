import React from 'react';

const students = [
  { name: 'Jan', handle: '@jan_ai', earnings: '263,275.75', joined: 'Jul 2025', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=jan&backgroundColor=b6e3f4' },
  { name: 'Ana', handle: '@ana_creators', earnings: '4,367.95', joined: 'Apr 2025', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=ana&backgroundColor=ffdfbf' },
  { name: 'Marko', handle: '@marko_biz', earnings: '16,196.63', joined: 'Feb 2026', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=marko&backgroundColor=c0aede' },
  { name: 'Tine', handle: '@tine_scale', earnings: '416,002.89', joined: 'Oct 2025', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=tine&backgroundColor=d1d4f9' },
  { name: 'Klara', handle: '@klara_ugc', earnings: '12,540.20', joined: 'Jan 2026', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=klara&backgroundColor=b6e3f4' },
  { name: 'Rok', handle: '@rok_tech', earnings: '98,231.50', joined: 'Nov 2025', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=rok&backgroundColor=ffdfbf' },
];

export const StudentResults: React.FC = () => {
  return (
    <div className="py-20 overflow-hidden relative bg-dark-bg">
       {/* Fade edges */}
       <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-dark-bg to-transparent z-20 pointer-events-none"></div>
       <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-dark-bg to-transparent z-20 pointer-events-none"></div>

       <div className="flex gap-4 md:gap-6 overflow-hidden">
          {/* First loop */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-center">
            {students.map((student, i) => (
                <ResultCard key={`first-${i}`} student={student} />
            ))}
          </div>
          {/* Second loop (duplicate for seamless scroll) */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-center">
            {students.map((student, i) => (
                <ResultCard key={`second-${i}`} student={student} />
            ))}
          </div>
       </div>
       
       <div className="text-center mt-12 px-4 relative z-20">
           <h3 className="text-2xl md:text-4xl font-black text-white mb-2">
               Tvoja zmaga je lahko <span className="text-brand-gold">naslednja</span>
           </h3>
           <p className="text-gray-400">
               Od prve prodaje do 100k+ v 45 dneh...<br/>
               Vsak dan dobivamo takšna sporočila. Tvoje je lahko naslednje.
           </p>
       </div>
    </div>
  );
};

const ResultCard: React.FC<{ student: typeof students[0] }> = ({ student }) => (
    <div className="w-[280px] md:w-[320px] bg-card-bg border border-white/10 rounded-xl p-5 md:p-6 shrink-0 hover:border-brand-gold/50 transition-colors cursor-default shadow-xl">
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 opacity-50">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <span className="text-white font-semibold text-sm">Monetise</span>
            </div>
            <div className="text-gray-500 font-mono text-xs">EUR</div>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
            <img src={student.avatar} className="w-12 h-12 rounded-full border border-white/10" alt={student.name} />
            <div>
                <div className="text-white font-bold text-lg leading-none mb-1">{student.name}</div>
                <div className="text-gray-500 text-sm">{student.handle}</div>
            </div>
        </div>
        
        <div className="flex gap-3 mb-6">
            <div className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-xs text-gray-300 font-medium cursor-pointer transition-colors flex-1 text-center border border-white/5">Pay</div>
            <div className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-xs text-gray-300 font-medium cursor-pointer transition-colors flex-1 text-center border border-white/5">Message</div>
        </div>
        
        <div className="pt-2">
            <div className="text-brand-gold font-mono font-black text-2xl md:text-3xl tracking-tight">€{student.earnings}</div>
            <div className="text-gray-500 text-xs mt-2 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Pridružen {student.joined}
            </div>
        </div>
    </div>
  );