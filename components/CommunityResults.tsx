
import React from 'react';
import { TrendingUp } from 'lucide-react';

const communityImages = [
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957c01b05b51169d797ba7e.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957c01b4478a27122baa26b.png"
];

export const CommunityResults: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-[#08080a] relative overflow-hidden border-t border-white/5">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Live Dashboard Reports</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
                    Konsistentna <span className="text-brand-gold italic">Rast</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Ni važno, kje začneš. Važno je, kam greš. Naši študenti dosegajo eksponentno rast z uporabo AI orodij.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
                {communityImages.map((src, idx) => (
                    <div key={idx} className="group relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/10 to-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f1115] shadow-2xl">
                             {/* Gloss Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none z-20"></div>
                             
                            <img 
                                src={src} 
                                alt={`Result Proof ${idx + 1}`} 
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
