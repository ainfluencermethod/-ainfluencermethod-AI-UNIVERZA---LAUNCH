
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Ali je ta program primeren za popolne začetnike?",
    answer: "Da. AI Universa je zasnovana tako, da te pelje od osnov do razumevanja kompleksnih sistemov. Ne potrebuješ predhodnega znanja o marketingu ali AI orodjih. Vse strategije so razložene korak za korakom."
  },
  {
    question: "Koliko časa moram vložiti dnevno?",
    answer: "Za učinkovit napredek priporočamo med 1 do 2 uri na dan. Uporaba AI orodij sicer pohitri proces, vendar učenje novih veščin zahteva določeno mero časa in fokusa."
  },
  {
    question: "Ali potrebujem močan računalnik?",
    answer: "Ne. Večina AI orodij, ki jih uporabljamo, deluje v oblaku. Potrebuješ le prenosnik ali tablico s stabilno internetno povezavo."
  },
  {
    question: "Kdaj dobim dostop do vsebin?",
    answer: "Takoj po potrditvi naročila prejmeš dostop do izobraževalne platforme. Program je strukturiran tako, da lahko napreduješ v svojem tempu."
  },
  {
    question: "Kaj če z vsebino ne bom zadovoljen/a?",
    answer: "Nudimo 14-dnevno garancijo na zadovoljstvo. Če v prvih 14 dneh ugotoviš, da vsebina ni tisto, kar si iskal/a, nam piši in povrnili ti bomo kupnino (ob upoštevanju pogojev uporabe)."
  },
  {
    question: "Ali so potrebni dodatni stroški za orodja?",
    answer: "Nekatera napredna AI orodja zahtevajo lastno naročnino. V programu pokažemo tako brezplačne alternative kot plačljive možnosti, da se lahko odločiš glede na svoje potrebe."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 px-4 bg-dark-bg border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
            Pogosta <span className="text-brand-gold italic">Vprašanja</span>
          </h2>
          <p className="text-gray-400">
            Imaš vprašanje? Tukaj so odgovori na najpogostejše dileme.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card-bg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-gold/30"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-brand-gold text-black' : 'bg-white/10 text-white'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
