import React from 'react';
import { Reveal } from './ui/Reveal';

const ProblemSolution: React.FC = () => {
  return (
    <div id="problem" className="bg-white text-black">
      
      {/* SECTION 1: THE REALITY (Vertical Stack) */}
      <section className="relative py-32 md:py-48 px-4 overflow-visible">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
          
          <Reveal>
             <div className="flex flex-col items-center gap-6 mb-24">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-gray-400">01 /// The Reality</span>
                <div className="h-16 w-[1px] bg-black"></div>
             </div>
          </Reveal>

          {/* The Hook - Centered */}
          <div className="mb-48 relative z-10 w-full flex flex-col items-center text-center">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-display font-medium uppercase leading-tight tracking-tight mb-8 text-gray-400 text-center w-full">
                  Your Venue Is World Class.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 className="text-7xl md:text-[10vw] font-display font-bold uppercase text-black leading-[0.9] tracking-tighter py-4 text-center w-full">
                  But It Isn't <br/> Sold Out.
                </h3>
              </Reveal>
          </div>

          {/* The Old Way */}
          <div className="w-full max-w-5xl mx-auto text-center mb-48">
              <Reveal delay={0.3}>
                <div className="flex justify-center">
                    <h4 className="font-mono text-sm uppercase tracking-[0.3em] mb-12 text-black font-bold bg-gray-100 inline-block px-4 py-2">
                        The Old Way
                    </h4>
                </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <p className="text-3xl md:text-5xl font-light leading-tight text-black mb-12">
                  You are renting your audience from Instagram. You get views, but you don't get the data.
                </p>
              </Reveal>
              
              <Reveal delay={0.5}>
                <div className="h-[1px] w-full bg-gray-200 my-12"></div>
                {/* Updated Text */}
                <p className="text-3xl md:text-5xl font-light leading-tight text-black mb-24">
                  You rely on sending WhatsApp messages hoping people see them.
                </p>
              </Reveal>

              {/* Massive Emphasis Line - Fixed Center Alignment */}
              <Reveal delay={0.6} width="100%">
                  <div className="py-12 border-t border-b border-black/10 flex flex-col items-center justify-center text-center w-full">
                      <h3 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none tracking-tighter text-black mb-2 text-center w-full">
                          Stop relying on luck.
                      </h3>
                      <h3 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-[#00C6FF] text-center w-full">
                          Start using intelligence.
                      </h3>
                  </div>
              </Reveal>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE SOLUTION (Vertical Stack) */}
      <section className="py-32 md:py-48 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center gap-6 mb-32">
               <span className="font-mono text-xs uppercase tracking-[0.4em] text-gray-400">02 /// The Solution</span>
               <div className="h-16 w-[1px] bg-black"></div>
            </div>
          </Reveal>

          <div className="flex flex-col items-center text-center">
              <Reveal>
                <h3 className="text-6xl md:text-[9vw] font-display font-bold uppercase leading-[0.9] mb-16 tracking-tighter">
                  We have built <br/> the highest ROI <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-[#00C6FF]">AI System.</span>
                </h3>
              </Reveal>

              {/* Editorial Image */}
              <Reveal delay={0.2}>
                 <div className="w-full max-w-5xl h-[60vh] overflow-hidden mb-24 bg-gray-100 relative group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src="/images/ROI system img.png" 
                        alt="AI Abstract" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                 </div>
              </Reveal>

              <div className="max-w-6xl mx-auto text-center">
                <Reveal delay={0.3}>
                  <p className="text-5xl md:text-7xl font-medium leading-[1.1] text-black mb-32 tracking-tight">
                    It automatically identifies new viewers, captures their personal data, and converts them into paying guests.
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-t border-black pt-16">
                   {[
                      { id: "01", text: "Turn 1 post into 300+ guests." },
                      { id: "02", text: "Own the data: Name, Number, Email." },
                      { id: "03", text: "Push notifications to Phone Wallet." }
                   ].map((item, idx) => (
                      <Reveal key={item.id} delay={0.4 + (idx * 0.1)}>
                          <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500">
                             <span className="font-mono text-sm text-gray-400 border-b border-gray-200 pb-2 inline-block w-fit">{item.id}</span>
                             <span className="text-4xl md:text-5xl font-display uppercase font-bold leading-[0.9] tracking-tight">{item.text}</span>
                          </div>
                      </Reveal>
                   ))}
                </div>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProblemSolution;