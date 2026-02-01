
import React from 'react';
import { User, Building2, ArrowRight } from 'lucide-react';

export const Paths: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black uppercase mb-6">
            IZBERI SVOJO POT DO <span className="text-brand-gold italic">SVOBODE</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Znotraj AI Universa dobiš dostop do OBEH smeri. Ni se ti treba omejevati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Path 1 */}
            <div className="bg-card-bg p-8 rounded-3xl border border-white/10 hover:border-brand-gold transition-all group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <User className="text-white group-hover:text-black" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    1. AI Influencer
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 font-normal">Za začetnike</span>
                </h3>
                <ul className="space-y-3 text-gray-400 mb-8">
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Ustvariš svojega karakterja (DNA Framework)
                    </li>
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Kreiraš viralne vsebine za socialna omrežja
                    </li>
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Monetizacija preko digitalnih produktov
                    </li>
                </ul>
            </div>

            {/* Path 2 */}
            <div className="bg-card-bg p-8 rounded-3xl border border-white/10 hover:border-brand-gold transition-all group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <Building2 className="text-white group-hover:text-black" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    2. AI Agencija
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 font-normal">B2B</span>
                </h3>
                <ul className="space-y-3 text-gray-400 mb-8">
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Profesionalni photoshooti brez modelov
                    </li>
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Viralni UGC (User Generated Content)
                    </li>
                    <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                        Mesečni retainerji za podjetja
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
