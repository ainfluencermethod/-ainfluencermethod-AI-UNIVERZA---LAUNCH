import React from 'react';

const screenshots = [
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695810244aa6694273e385d0.jpg",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695bcdbef7e25a5b85880fee.jpg",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695bcdbe91a900f3a7383a0e.jpg"
];

export const ResultsShowcase: React.FC = () => {
  // Helper to distribute different float animations
  const getFloatClass = (index: number) => {
      switch(index % 3) {
          case 0: return 'animate-float';
          case 1: return 'animate-float-delayed';
          case 2: return 'animate-float-slow';
          default: return 'animate-float';
      }
  };

  return (
    <div className="py-24 px-4 bg-dark-bg relative overflow-hidden">
       {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
            Pravi Rezultati <span className="text-brand-gold italic">Pravih Ljudi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Brez skrivanja. Tukaj so neposredni posnetki zaslonov iz naših skupnosti in dashboardov naših študentov.
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {screenshots.map((src, i) => (
            <div key={i} className={`group relative ${getFloatClass(i)}`}>
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/20 to-white/10 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card-bg shadow-2xl">
                    <img 
                        src={src} 
                        alt={`Rezultat ${i+1}`} 
                        className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};