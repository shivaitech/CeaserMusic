import React from 'react';
import { Reveal } from './ui/Reveal';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-black pb-24 overflow-hidden border-t border-black/10">
      
      <div className="max-w-[95%] mx-auto px-6 pt-24">
        
        {/* Guarantee */}
        <div className="mb-32 relative">
             <div className="absolute -left-20 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-black/20 to-transparent hidden xl:block"></div>
             
             <Reveal>
                <div className="h-[1px] w-full bg-black mb-12"></div>
                <h3 className="text-7xl md:text-[11vw] font-display font-bold uppercase leading-[0.8] mb-16 tracking-tighter">
                    Growth <br/> Guaranteed.
                </h3>
             </Reveal>
             <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <p className="text-3xl md:text-5xl font-light text-black leading-snug">
                        We guarantee growth — or we refund you.
                    </p>
                    <div className="flex items-end">
                         <p className="text-xl md:text-2xl text-gray-400 font-light max-w-md border-l border-gray-200 pl-8">
                             No questions asked. Risk Free. <br/> 
                             <span className="text-black font-medium">Pure Performance.</span>
                         </p>
                    </div>
                </div>
             </Reveal>
        </div>

        {/* New Section: Own Your Data */}
        <div className="mb-32">
             <Reveal delay={0.1}>
                 <div className="h-[1px] w-full bg-black/10 mb-24"></div>
             </Reveal>
             <div className="flex flex-col items-center text-center">
                 <Reveal delay={0.2}>
                     <h2 className="text-5xl md:text-[8vw] font-display font-bold uppercase leading-none tracking-tighter mb-8">
                         Own Your Data. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-[#00C6FF]">4X Your ROI.</span>
                     </h2>
                 </Reveal>
                 <Reveal delay={0.3}>
                     <p className="text-2xl md:text-3xl font-light text-gray-500">
                         The highest converting system in hospitality.
                     </p>
                 </Reveal>
             </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-black/5">
            <div className="mb-12 md:mb-0">
                <div className="text-6xl font-display font-bold tracking-widest mb-12">[ AZ : UR ]</div>
                <div className="space-y-6">
                    <a href="mailto:hello@az-ur.com" className="block text-3xl md:text-5xl font-light hover:text-gray-500 transition-colors">
                         hello@az-ur.com
                    </a>
                    <div className="text-2xl text-gray-500 font-mono">
                         Dubai, 2025
                    </div>
                </div>
            </div>
            
            <div className="text-right">
                <div className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Media & Intelligence Atelier</div>
                <div className="text-xs text-gray-400 uppercase font-mono">
                    &copy; 2025 AZ:UR. All rights reserved.
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;