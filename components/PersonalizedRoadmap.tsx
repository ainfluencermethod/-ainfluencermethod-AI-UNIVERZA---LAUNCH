import React from 'react';
import { RoadmapProps } from '../types';
import { Sparkles } from 'lucide-react';

export const PersonalizedRoadmap: React.FC<RoadmapProps> = ({ name, points }) => {
  return (
    <div className="mt-8 w-full bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 text-left relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
      
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h4 className="text-lg font-semibold text-indigo-200">
           {name ? `AI načrt za: ${name}` : 'Vaš AI potencial'}
        </h4>
      </div>
      
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};