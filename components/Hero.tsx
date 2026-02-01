import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface HeroProps {
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ 
  email, 
  setEmail, 
  name, 
  setName, 
  onSubmit, 
  isLoading 
}) => {
  return (
    <div className="w-full max-w-md mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <form onSubmit={onSubmit} className="relative glass-card p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
        
        <div>
          <label htmlFor="name" className="sr-only">Vaše ime</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Vaše ime"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email naslov</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Vaš email naslov"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-ai-dark font-bold text-lg py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Pripravljam...
            </>
          ) : (
            <>
              Vpiši se na listo
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-gray-600">
          Spoštujemo vašo zasebnost. Brez vsiljene pošte.
        </p>
      </form>
    </div>
  );
};