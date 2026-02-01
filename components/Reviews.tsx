import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e2f8a93bbe46abff25.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e1e186386da6b63f1c.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e1f8a93b72cbabff24.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e198efbd8335d133ec.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e198efbda11ad133eb.png",
  "https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696317e1f8a93b06faabff23.png"
];

const ReviewCard: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="w-[280px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#18181b] relative group hover:scale-[1.02] transition-transform duration-300 shadow-2xl min-h-[150px]">
      <img 
        src={src} 
        alt="Review Screenshot" 
        className="w-full h-auto object-contain" 
        loading="lazy" 
        decoding="async"
        width="350"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  return (
    <div className="pb-16 pt-12 overflow-hidden relative bg-dark-bg">
       
       {/* Trust Header */}
       <div className="text-center mb-12 relative z-30 px-4">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
                <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-green-500 rounded-full p-1">
                            <Star size={12} className="text-black fill-black" />
                        </div>
                    ))}
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <span className="text-white font-bold">4.9/5</span>
                <span className="text-gray-400 text-sm">Povprečna ocena</span>
            </div>
            <h2 className="text-3xl font-serif font-black text-white mt-6">Kaj pravijo člani?</h2>
       </div>

       {/* Fade edges */}
       <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-dark-bg to-transparent z-20 pointer-events-none"></div>
       <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-dark-bg to-transparent z-20 pointer-events-none"></div>

       <div className="flex gap-4 md:gap-6 overflow-hidden">
          {/* First loop */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-start will-change-transform">
            {reviewsData.map((src, i) => (
                <ReviewCard key={`r1-${i}`} src={src} />
            ))}
          </div>
          {/* Second loop */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-start will-change-transform">
             {reviewsData.map((src, i) => (
                <ReviewCard key={`r2-${i}`} src={src} />
            ))}
          </div>
       </div>
    </div>
  );
};