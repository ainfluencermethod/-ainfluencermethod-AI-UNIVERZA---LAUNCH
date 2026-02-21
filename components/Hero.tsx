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
    <div className="w-full max-w-md mx-auto relative">
      <form onSubmit={onSubmit} className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl flex flex-col gap-4">
        
        <div>
          <label htmlFor="name" className="sr-only">Vaše ime</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Vaše ime"
            className="w-full bg-[#111] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
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
            className="w-full bg-[#111] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-black font-bold text-sm py-3.5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Pripravljam...
            </>
          ) : (
            <>
              Vpiši se na listo
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};