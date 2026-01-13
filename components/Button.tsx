
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'green';
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
    font-black uppercase tracking-wider py-4 px-8 rounded-xl 
    transition-all duration-300 ease-out
    flex items-center justify-center gap-3
    transform active:scale-95
    ${fullWidth ? 'w-full' : ''}
  `;

  // Premium Gold Metallic Style
  const primaryClasses = `
    bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]
    bg-[length:200%_auto]
    text-black
    border border-white/20
    shadow-[0_0_20px_rgba(212,175,55,0.3)]
    hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]
    hover:bg-[100%_0]
    bg-pos-0 hover:bg-pos-100 transition-[background-position] duration-500
  `;

  const secondaryClasses = `
    bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl border border-transparent hover:border-brand-gold/50
  `;

  const greenClasses = `
    bg-gradient-to-r from-green-500 via-green-400 to-green-500
    bg-[length:200%_auto]
    text-white
    shadow-[0_0_20px_rgba(34,197,94,0.4)]
    hover:shadow-[0_0_35px_rgba(34,197,94,0.6)]
    hover:bg-[100%_0]
    bg-pos-0 hover:bg-pos-100 transition-[background-position] duration-500
    drop-shadow-sm
  `;

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary': return secondaryClasses;
      case 'green': return greenClasses;
      default: return primaryClasses;
    }
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
    >
      {/* Sheen Animation Effect */}
      <div className={`absolute inset-0 -translate-x-full ${autoShimmer ? 'animate-[shimmer_2.5s_infinite]' : 'group-hover:animate-[shimmer_1.5s_infinite]'} bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 w-full h-full skew-x-12 pointer-events-none`} />

      {/* Content */}
      <span className="relative z-20 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight 
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" 
            strokeWidth={3} 
          />
        )}
      </span>
    </button>
  );
};
