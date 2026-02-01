import React from 'react';
import { Instagram } from 'lucide-react';

const team = [
  {
    name: 'Nepridiprav',
    role: 'Soustanovitelj',
    handle: '@nepridiprav',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695d2a0d6c1415037d5b56a6.jpg',
    link: 'https://www.instagram.com/nepridiprav/',
    socialProof: '94k sledilcev'
  },
  {
    name: 'Tim Brdnik',
    role: 'Soustanovitelj',
    handle: '@timbrdnik',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695fb8846eabe6432325b5d5.webp',
    link: 'https://www.instagram.com/timbrdnik/',
    socialProof: 'Growth lead & AI Marketing (Ustvaril @Giuliaa.banks)'
  },
  {
    name: 'Luka Lorenčič',
    role: 'Soustanovitelj',
    handle: '@lukalorencic',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695d2b2cd5b483fb55c164f2.jpg',
    link: 'https://www.instagram.com/lukalorencic/',
    socialProof: 'Dosegel čez 2 Miljardi ogledov na socialnih omrežjih'
  },
  {
    name: 'Žiga Klun',
    role: 'Soustanovitelj',
    handle: '@ziga.klun',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695d2af96c141559bf5b7ec2.jpg',
    link: 'https://www.instagram.com/ziga.klun/',
    socialProof: 'Ustvaril Babiceva.ai'
  }
];

export const Founders: React.FC = () => {
  return (
    <div className="py-24 px-4 text-center bg-dark-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black italic mb-12 font-serif uppercase">
            SPOZNAJ <span className="text-brand-gold">EKIPO</span>
        </h2>
        
        {/* Manifesto Note */}
        <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 text-left shadow-2xl mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 font-serif text-9xl text-white italic leading-none pointer-events-none">
                 "
             </div>
             
             <div className="relative z-10 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                    V digitalnem marketingu ne štejejo besede, ampak rezultati. Preden smo ustanovili <strong className="text-white">AI Universa</strong>, smo v ozadju delali za firme. Naša ekipa je v preteklem delu podjetjem zgenerirala več kot <strong className="text-white">69 milijonov dolarjev prometa</strong> in presegla mejo <strong className="text-white">1 milijarde ogledov</strong> na družbenih omrežjih.
                </p>
                <p>
                    Zadnjih 6 mesecev smo 12 ur na dan dihali le za eno stvar: <strong className="text-brand-gold">Umetno inteligenco.</strong>
                </p>
                <ul className="space-y-4 list-none">
                    <li className="flex gap-3">
                        <span className="text-brand-gold">•</span>
                        <span><strong className="text-white">Smo v svetovni eliti:</strong> Smo med top 0.01 % uporabnikov na platformi Higgsfield.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-brand-gold">•</span>
                        <span><strong className="text-white">Praksa, ne teorija:</strong> Zgenerirali smo več kot 50.000 kosov AI vsebin z vsemi dostopnimi orodji na trgu.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-brand-gold">•</span>
                        <span><strong className="text-white">Dokazan model:</strong> Danes sami uspešno služimo z lastnimi digitalnimi produkti in avtomatiziranimi AI vplivneži.</span>
                    </li>
                </ul>
                <p>
                    Naša misija je preprosta: Opolnomočiti 1000 Slovencev, da ustvarijo digitalno neodvisnost v letu 2026.
                </p>
             </div>

             <div className="mt-8 pt-8 border-t border-white/5">
                 <p className="font-serif italic text-brand-gold text-2xl">
                     Se vidimo na drugi strani,
                 </p>
                 <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">
                     - Ekipa AI Universa
                 </p>
             </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
            <a 
                key={index}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card-bg border border-white/10 rounded-3xl p-6 hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-gold transition-colors mb-4 relative bg-gray-800">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                        decoding="async"
                        width="96"
                        height="96"
                    />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-wide mb-2 text-gray-500">
                    {member.role}
                </p>

                <p className="text-xs text-brand-gold/90 font-bold mb-4 px-2 min-h-[2.5rem] flex items-center justify-center leading-tight">
                    {member.socialProof}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-gray-400 text-xs group-hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full">
                    <Instagram size={14} />
                    <span>{member.handle}</span>
                </div>
            </a>
            ))}
        </div>
      </div>
    </div>
  );
};