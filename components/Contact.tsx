import React from 'react';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const Contact: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0B0C15] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Nazaj
        </button>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-8">
          <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center">
            <MessageSquare className="w-10 h-10 text-indigo-400" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-white tracking-tight">Kontaktirajte nas</h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Imate vprašanje glede AI Univerze ali vašega vpisa? Naša ekipa vam je na voljo.
            </p>
          </div>

          <a 
            href="mailto:Pici@aiuniverza.si" 
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all w-full max-w-sm"
          >
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">Pišite nam na</p>
              <p className="text-2xl font-bold text-white">Pici@aiuniverza.si</p>
            </div>
          </a>

          <div className="pt-8 text-xs text-gray-600">
            3PM d.o.o., Prušnikova ulica 19, 1210 Ljubljana
          </div>
        </div>
      </div>
    </div>
  );
};
