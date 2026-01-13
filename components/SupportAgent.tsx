
import { GoogleGenAI } from "@google/genai";
import { Bot, Loader2, MessageCircle, Send, User, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const SYSTEM_INSTRUCTION = `Si visoko inteligenten in izjemno jedrnat AI podporni agent za AI Universo. Tvoja naloga je hitro in učinkovito pomagati obiskovalcem spletne strani aiuniverza.si.

NAJPOMEMBNEJŠE PRAVILO: 
- Tvoji odgovori morajo biti KRATKI (običajno 1-2 stavka). 
- Bodi IZJEMNO KORISTEN.
- Vedno odgovarjaj v SLOVENŠČINI.

KLJUČNI PODATKI:
- Produkt: AI Universa (AI vplivneži & agencije).
- Cena: 497€/leto.
- Nagradna igra (15k€): Rolex Datejust, MacBook Pro M5, iPhone 17 Pro. Vpis do 16. januarja 2026. Žreb 1. februarja 2026.
- Ekipa: Nepridiprav, Tim Brdnik, Luka Lorenčič, Žiga Klun.
- Garancija: 14 dni (ob <20% ogleda vsebine).
- Kontakt: pici@aiuniverza.si.

Navodila:
- Ne dolgovezi. Če je vprašanje preprosto, bodi kratek.
- Spodbujaj vpis pred 16. januarjem zaradi nagradne igre.
- Če česa ne veš, usmeri na pici@aiuniverza.si.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const SupportAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Zdravo! Sem tvoj AI asistent. Kako ti lahko hitro pomagam pri poti do digitalne svobode?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Defensive check for the global process object
      const key = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
      
      if (!key) {
        throw new Error("API ključ ni nastavljen.");
      }

      const ai = new GoogleGenAI({ apiKey: key });
      
      // Gemini history must start with a 'user' message. 
      const apiContents = newMessages
        .filter((_, idx) => idx > 0)
        .map(msg => ({
          role: msg.role,
          parts: [{ text: String(msg.text) }]
        }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: apiContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const modelText = response.text;
      if (modelText) {
        setMessages(prev => [...prev, { role: 'model', text: String(modelText) }]);
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      // Ensure the error message is a string to prevent [object Object]
      const errorString = error instanceof Error ? error.message : String(error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: `Oprosti, prišlo je do napake: ${errorString}. Piši nam na pici@aiuniverza.si.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 md:bottom-8 right-4 md:right-8 z-[90] bg-brand-gold text-white p-4 rounded-full shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-44 md:bottom-28 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[550px] max-h-[70vh] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl z-[90] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 backdrop-blur-xl">
          <div className="bg-gradient-to-r from-brand-gold to-brand-blue p-5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-black/20 p-2 rounded-xl border border-white/10">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-black text-xs uppercase tracking-wider leading-none mb-1">AI Podpora</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Aktivno</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors p-1">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 ${msg.role === 'user' ? 'bg-white/5' : 'bg-brand-gold/10'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-gray-400" /> : <Bot size={14} className="text-brand-gold" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-gold text-white font-bold rounded-tr-none shadow-lg' 
                      : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center border border-white/10">
                    <Loader2 size={14} className="text-brand-gold animate-spin" />
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-black/50 backdrop-blur-md">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Vprašaj o AI Universi..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-gray-600 shadow-inner"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${
                  input.trim() && !isLoading ? 'text-brand-gold bg-brand-gold/10 hover:bg-brand-gold/20' : 'text-gray-600'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex items-center justify-between mt-3 px-1">
               <p className="text-[9px] text-gray-700 uppercase tracking-widest font-bold">
                  AI Agent • Gemini
               </p>
               <a href="mailto:pici@aiuniverza.si" className="text-[9px] text-brand-gold/50 hover:text-brand-gold transition-colors uppercase tracking-widest font-bold">
                  Email Podpora
               </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
