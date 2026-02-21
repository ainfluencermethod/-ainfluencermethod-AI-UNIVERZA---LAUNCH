import React from 'react';
import { Bot, Video, Image, Banknote, Share2, Users } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "DNA Framework",
    description: "Sistem za kreiranje edinstvenega AI karakterja in vsebine, ki ne potrebuje tvojega obraza.",
    icon: Bot
  },
  {
    title: "Viralni UGC & Ads",
    description: "Nauči se ustvarjati oglase za podjetja, ki izgledajo kot organska vsebina in drastično prodajajo.",
    icon: Video
  },
  {
    title: "Realistične Fotografije",
    description: "Obvladajte Nano Banano Pro, Midjourney, Flux 2 in druga orodja za generiranje fotografij, ki jih ne ločite od pravih.",
    icon: Image
  },
  {
    title: "Rekreiraj Kateri Koli Viralni Video",
    description: "Sistem, ki dela 24/7. Od ideje do objave, medtem ko ti spiš ali potuješ.",
    icon: Share2
  },
  {
    title: "Monetizacija & Brand Deals",
    description: "Kako spremeniti oglede v denar. Digitalni produkti, sponzorstva in affiliate marketing.",
    icon: Banknote
  },
  {
    title: "AI Skupnost",
    description: "Dostop do mreže slovenskih AI entuziastov in mentorjev, ki premikajo meje mogočega.",
    icon: Users
  }
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Kaj točno dobite?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ne učimo le teorije. To so orodja, ki jih moja ekipa uporablja vsak dan za generiranje rezultatov.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-indigo-500/30 group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};