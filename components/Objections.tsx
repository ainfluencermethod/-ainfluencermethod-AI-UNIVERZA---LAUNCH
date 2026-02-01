
import React, { useState } from 'react';
import { Plus, Minus, MousePointer2, Ghost, Calculator, Users } from 'lucide-react';

export const Objections: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(0);

  const objections = [
      { id: 0, icon: MousePointer2, title: "Nimam nobenih izkušenj", text: "Popolno. Manj izkušenj pomeni manj slabih navad. Naš sistem je 'Copy-Paste'. Če znaš slediti receptu za kuhanje, znaš slediti temu blueprintu." },
      { id: 1, icon: Ghost, title: "Sram me je snemati videe", text: "Nihče te ne bo videl. Celoten model temelji na AI ustvarjenih karakterjih ali 'faceless' videih. Tvoja anonimnost je 100% zagotovljena." },
      { id: 2, icon: Calculator, title: "Nimam 497€ za investicijo", text: "Če bi naslednjih 6 mesecev delal 12 ur na dan in kupoval napačna orodja, da bi sam odkril ta sistem, bi zapravil bogastvo. 497€ je le 0,23€ na uro tvojega prihranjenega časa. To je bližnjica, ki ti prihrani pol leta življenja in denarja za neuporabne naročnine, poleg tega te pa pripravi, da si zagotoviš mesto med zmagovalci naslednjega desetletja." },
      { id: 3, icon: Users, title: "Ali je trg prenasičen?", text: "Smešno vprašanje. To je kot Bitcoin v letu 2017, smo v samem začetku AI revolucije. Kdor vstopi danes, je med prvimi na svetu." },
  ];

  return (
    <div className="py-24 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3 sticky top-24">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight mb-6">
            Nehaj iskati izgovore. <br/>
            <span className="text-brand-gold">Čas je za rezultate.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Večina ljudi bo rekla: "Ah, to je pretežko" ali "Prepozno je". 
            <strong className="text-white block mt-2">To je odlična novica zate.</strong>
          </p>
        </div>

        <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
                {objections.map((obj) => (
                    <div 
                        key={obj.id} 
                        className={`bg-card-bg border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${activeId === obj.id ? 'border-brand-gold bg-white/5' : 'border-white/10 hover:border-brand-gold/30'}`}
                        onClick={() => setActiveId(activeId === obj.id ? null : obj.id)}
                    >
                        <div className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${activeId === obj.id ? 'bg-brand-gold text-black' : 'bg-white/10 text-gray-400'}`}>
                                    <obj.icon size={24} />
                                </div>
                                <h3 className={`text-xl font-bold uppercase ${activeId === obj.id ? 'text-white' : 'text-gray-400'}`}>
                                    "{obj.title}"
                                </h3>
                            </div>
                            <div className={`transition-transform duration-300 ${activeId === obj.id ? 'rotate-180 text-brand-gold' : 'text-gray-500'}`}>
                                {activeId === obj.id ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === obj.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                             <div className="px-6 pb-6 pt-0 pl-[4.5rem] text-gray-300 leading-relaxed text-lg">
                                 {obj.text}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};
