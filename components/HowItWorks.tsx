import React from 'react';
import { Youtube, ArrowDown, Play, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-lg shadow-brand-gold/5">
             <span className="text-brand-gold text-xs font-black uppercase tracking-widest">KORAK ZA KORAKOM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6">
            Kako To Deluje <span className="italic text-brand-gold">Točno?</span>
          </h2>
        </div>

        {/* Visualization Diagram */}
        <div className="relative flex flex-col items-center mb-20">
           
           {/* Step 1: The Source */}
           <div className="relative z-10 w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-800 p-2 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute -top-3 -left-3 bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border-4 border-[#050505] shadow-lg">
                 VIR VSEBINE
              </div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1920&auto=format&fit=crop" 
                    alt="Podcast Studio" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                        <Play fill="white" className="text-white ml-1" size={32} />
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-lg text-white text-sm font-bold flex items-center gap-3 border border-white/10">
                          <Youtube size={20} className="text-red-500" />
                          <div className="flex flex-col">
                             <span className="leading-none text-xs text-gray-400 font-normal uppercase">Original</span>
                             <span className="leading-tight">Dolgočasen 2-urni Podcast</span>
                          </div>
                      </div>
                  </div>
              </div>
           </div>

           {/* Connector Arrow */}
           <div className="h-32 w-px border-l-2 border-dashed border-gray-700 relative my-2">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-3 border border-gray-800 rounded-full text-brand-gold animate-bounce shadow-xl z-20">
                   <ArrowDown size={24} />
               </div>
               {/* Branching lines for effect */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px border-t-2 border-dashed border-gray-700"></div>
               <div className="absolute bottom-0 left-[-8rem] h-8 w-px border-l-2 border-dashed border-gray-700 md:block hidden"></div>
               <div className="absolute bottom-0 right-[-8rem] h-8 w-px border-l-2 border-dashed border-gray-700 md:block hidden"></div>
           </div>

           {/* Step 2: The Clips */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full max-w-5xl px-4 md:px-0">
               
               {/* Clip 1 */}
               <div className="relative group md:mt-8">
                   <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                   <div className="bg-gray-900 border border-gray-800 rounded-3xl p-3 relative transform md:rotate-[-3deg] group-hover:rotate-0 transition-all duration-300 shadow-xl group-hover:-translate-y-2">
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white font-black px-4 py-1.5 rounded-lg shadow-lg border border-green-500 z-20 flex flex-col items-center min-w-[100px]">
                           <span className="text-[9px] uppercase opacity-90 tracking-wider">Profit</span>
                           <span className="text-base font-mono">1.600€</span>
                       </div>
                       <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
                           <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                               <TrendingUp size={10} className="text-green-400" /> 1.6M Ogledov
                           </div>
                           <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1">
                               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" className="w-5 h-5 drop-shadow-md" alt="TikTok" />
                           </div>
                       </div>
                   </div>
               </div>

               {/* Clip 2 (Center - Highlighted) */}
               <div className="relative group z-10">
                   <div className="absolute -inset-2 bg-gradient-to-tr from-brand-gold/20 to-yellow-500/20 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                   <div className="bg-gray-900 border border-brand-gold/30 rounded-3xl p-3 relative transform md:scale-110 shadow-2xl group-hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white font-black px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] border border-green-400 z-20 flex flex-col items-center min-w-[120px] animate-pulse">
                           <span className="text-[10px] uppercase opacity-90 tracking-wider">Profit</span>
                           <span className="text-xl font-mono">2.500€</span>
                       </div>
                       <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-70" />
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                               <TrendingUp size={10} className="text-green-400" /> 2.5M Ogledov
                           </div>
                           <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                               <Youtube className="text-red-600 fill-red-600" size={20} />
                           </div>
                       </div>
                   </div>
               </div>

               {/* Clip 3 */}
               <div className="relative group md:mt-8">
                   <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                   <div className="bg-gray-900 border border-gray-800 rounded-3xl p-3 relative transform md:rotate-[3deg] group-hover:rotate-0 transition-all duration-300 shadow-xl group-hover:-translate-y-2">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white font-black px-4 py-1.5 rounded-lg shadow-lg border border-green-500 z-20 flex flex-col items-center min-w-[100px]">
                           <span className="text-[9px] uppercase opacity-90 tracking-wider">Profit</span>
                           <span className="text-base font-mono">4.800€</span>
                       </div>
                       <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
                           <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                               <TrendingUp size={10} className="text-green-400" /> 4.8M Ogledov
                           </div>
                           <div className="absolute top-3 right-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg p-1">
                               <div className="border-[1.5px] border-white w-4 h-4 rounded-full"></div>
                           </div>
                       </div>
                   </div>
               </div>

           </div>

        </div>

        {/* Explanation Text */}
        <div className="text-center max-w-3xl mx-auto space-y-6 bg-card-bg/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-xl md:text-3xl font-serif font-black text-white italic">
                "Pomisli, kako dejansko gledaš YouTube..."
            </h3>
            <div className="h-px w-20 bg-brand-gold mx-auto opacity-50"></div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Nekdo ti pošlje 2-urni podcast in reče <span className="italic text-gray-500">"stari, to moraš videt"</span>. 
                Ampak ti nimaš 2 ur. Nihče nima.
            </p>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                Zato gledamo 60-sekundne izrezke na TikToku in Reelsih.
                <br/>
                <strong className="text-white">
                    Mi smo tisti, ki te izrezke objavljajo. In mi smo tisti, ki za to dobijo plačilo.
                </strong>
            </p>
        </div>

      </div>
    </div>
  );
};