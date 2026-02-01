import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'green' | 'urgency';
  icon?: boolean;
  autoShimmer?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  fullWidth = false, 
  onClick,
  variant = 'primary',
  icon = true,
  autoShimmer = false
}) => {
  
  const baseClasses = `
    relative overflow-hidden group
    font-black uppercase tracking-tighter py-4 px-8 rounded-xl 
    transition-all duration-300 ease-out
    flex items-center justify-center gap-3
    transform active:scale-95
    ${fullWidth ? 'w-full' : ''}
  `;

  const primaryClasses = `
    bg-gradient-to-br from-[#D4AF37] via-[#FFF5B7] via-[#D4AF37] to-[#8A6D3B]
    bg-[length:200%_200%]
    text-black
    border-t-2 border-white/50
    border-x border-black/10
    shadow-[0_15px_50px_-10px_rgba(212,175,55,0.7)]
    hover:shadow-[0_25px_60px_-5px_rgba(212,175,55,0.9)]
    hover:bg-pos-100 transition-[background-position,shadow,transform] duration-700
  `;

  const urgencyClasses = `
    bg-gradient-to-br from-[#FF3131] via-[#FF6B6B] to-[#800000]
    bg-[length:200%_200%]
    text-white
    border-t-2 border-white/30
    shadow-[0_15px_40px_-10px_rgba(255,49,49,0.5)]
    hover:shadow-[0_25px_50px_-5px_rgba(255,49,49,0.7)]
    hover:bg-pos-100 transition-all duration-500
  `;

  const secondaryClasses = `
    bg-white/10 text-white backdrop-blur-md hover:bg-white/20 shadow-lg border border-white/10
  `;

  const greenClasses = `
    bg-gradient-to-br from-[#22c55e] via-[#4ade80] to-[#15803d]
    bg-[length:200%_200%]
    text-white
    shadow-[0_10px_30px_rgba(34,197,94,0.4)]
    hover:shadow-[0_15px_40px_rgba(34,197,94,0.6)]
    hover:bg-pos-100 transition-all duration-500
  `;

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary': return secondaryClasses;
      case 'green': return greenClasses;
      case 'urgency': return urgencyClasses;
      default: return primaryClasses;
    }
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
    >
      {/* Sheen Animation Effect */}
      <div className={`absolute inset-0 -translate-x-full ${autoShimmer ? 'animate-[shimmer_2s_infinite]' : 'group-hover:animate-[shimmer_1.5s_infinite]'} bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 w-full h-full skew-x-12 pointer-events-none`} />

      {/* Gloss Overlay */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/15 pointer-events-none z-10"></div>

      {/* Content */}
      <span className="relative z-20 flex items-center gap-2 drop-shadow-md">
        {children}
        {icon && (
          <ArrowRight 
            className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-2" 
            strokeWidth={4} 
          />
        )}
      </span>
    </button>
  );
};