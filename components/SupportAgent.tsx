
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

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
  const chatInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const initChat = () => {
    if (!chatInstanceRef.current) {
      const apiKey = process.env.API_KEY;
      if (!apiKey || apiKey === "undefined") {
        console.warn("Gemini API Key is missing or invalid. AI chat will be unavailable.");
        return null;
      }
      try {
        const ai = new GoogleGenAI({ apiKey });
        chatInstanceRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
      } catch (err) {
        console.error("Failed to initialize Gemini AI:", err);
        return null;
      }
    }
    return chatInstanceRef.current;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const chat = initChat();
    
    if (!chat) {
      setMessages(prev => [
        ...prev, 
        { role: 'user', text: userMessage }, 
        { role: 'model', text: "Oprostite, trenutno ne morem vzpostaviti povezave z AI strežnikom. Pišite nam na pici@aiuniverza.si." }
      ]);
      setInput('');
      return;
    }

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userMessage });
      const modelText = response.text || "Prišlo je do napake. Piši nam na pici@aiuniverza.si.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Support Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Imam tehnične težave. Piši nam na pici@aiuniverza.si." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 md:bottom-8 right-4 md:right-8 z-[90] bg-brand-gold text-white p-4 rounded-full shadow-[0_10px_40px_rgba(255,0,0,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />}
        {!isOpen && (
          <span className="absolute -top-2 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 md:bottom-28 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[500px] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl z-[90] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-gold to-red-800 p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-black/20 p-2 rounded-xl">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-wider">AI Podpora</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Aktivno</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 ${msg.role === 'user' ? 'bg-white/5' : 'bg-brand-gold/10'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-gray-400" /> : <Bot size={14} className="text-brand-gold" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-gold text-white font-bold rounded-tr-none' 
                      : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="text-brand-gold animate-spin" />
                  <span className="text-gray-500 text-xs italic">Razmišljam...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-black/50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Vprašaj karkoli..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-600"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
                  input.trim() && !isLoading ? 'text-brand-gold hover:bg-brand-gold/10' : 'text-gray-600'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-gray-700 mt-2 text-center uppercase tracking-widest font-bold">
              AI Universa Agent • Powered by Gemini
            </p>
          </div>
        </div>
      )}
    </>
  );
};
