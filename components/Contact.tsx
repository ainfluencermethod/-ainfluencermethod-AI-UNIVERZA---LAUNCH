
import React from 'react';
import { ArrowLeft, Mail, MapPin, Building, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
            <a href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                <ArrowLeft size={16} /> Domov
            </a>
        </div>

        <div className="bg-card-bg border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full"></div>
            
            <h1 className="text-4xl font-serif font-black text-white mb-8 uppercase tracking-tight">
                Stopi v <span className="text-brand-gold italic">stik</span>
            </h1>

            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="bg-white/5 p-3 rounded-xl h-fit">
                        <Mail className="text-brand-gold" size={24} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                        <a href="mailto:pici@aiuniverza.si" className="text-white font-bold text-lg hover:text-brand-gold transition-colors">
                            pici@aiuniverza.si
                        </a>
                        <p className="text-gray-500 text-sm mt-1 italic">Odgovorimo v roku 24-48 ur.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-white/5 p-3 rounded-xl h-fit">
                        <Instagram className="text-brand-gold" size={24} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Social Media</p>
                        <a href="https://instagram.com/nepridiprav" target="_blank" className="text-white font-bold text-lg hover:text-brand-gold transition-colors">
                            @nepridiprav
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                    <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest opacity-50">Podatki o podjetju</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <Building className="text-gray-600" size={20} />
                            <div>
                                <p className="text-white font-medium">3PM d.o.o.</p>
                                <p className="text-gray-500 text-sm">Davčna številka: SI 29078750</p>
                                <p className="text-gray-500 text-sm">Matična številka: 9861459000</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MapPin className="text-gray-600" size={20} />
                            <p className="text-gray-500 text-sm">
                                Prušnikova ulica 19<br/>
                                1210 Ljubljana - Šentvid
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p className="mt-8 text-center text-gray-600 text-xs">
            Imate vprašanje glede nakupa ali uporabe platforme? Pišite nam in z veseljem vam bomo pomagali.
        </p>
      </div>
    </div>
  );
};
