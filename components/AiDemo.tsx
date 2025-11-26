import React from 'react';
import { Reveal } from './ui/Reveal';
import { Card3D } from './ui/Card3D';

const AiDemo: React.FC = () => {
  return (
    <section id="ai-demo" className="py-48 bg-white border-t border-black/5 relative overflow-hidden flex flex-col items-center justify-center">
      
      <div className="max-w-[95%] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
         
         {/* Left Side: 3D Interaction */}
         <div className="flex flex-col items-center lg:items-end order-2 lg:order-1 h-[600px] justify-center">
             <Reveal>
                <div className="relative group perspective-1000">
                    {/* The 3D Card Component */}
                    <Card3D />
                    
                    <div className="absolute -bottom-16 left-0 w-full text-center">
                         <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 animate-pulse">
                             Hover to interact
                         </span>
                    </div>
                </div>
             </Reveal>
         </div>

         {/* Right Side: CTA */}
         <div className="text-center lg:text-left order-1 lg:order-2 flex flex-col items-center lg:items-start">
             <Reveal>
                <h2 className="text-sm font-bold uppercase tracking-[0.5em] mb-12 text-gray-500">
                   Experience The Intelligence
                </h2>
             </Reveal>
             
             <Reveal delay={0.2}>
                 <h3 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] mb-12 tracking-tighter">
                     Your Brand <br/> In Their <br/> Wallet.
                 </h3>
             </Reveal>

             <Reveal delay={0.4}>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative inline-flex items-center justify-center px-16 py-8 overflow-hidden font-display font-bold text-white transition-all duration-300 bg-black hover:bg-white hover:text-black border-2 border-black rounded-none"
                >
                    <span className="text-4xl md:text-6xl uppercase tracking-tighter z-10 relative">
                        Try The System
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                </button>
             </Reveal>
             
             <Reveal delay={0.5}>
                 <p className="mt-8 text-gray-400 uppercase tracking-widest text-xs font-mono">
                    Limited Access for Q1 2025
                 </p>
             </Reveal>
         </div>

      </div>

    </section>
  );
};

export default AiDemo;
