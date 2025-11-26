import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const Advantages: React.FC = () => {
  const advantages = [
    {
      id: "01",
      title: "Automated Acquisition",
      stat: "300+",
      sub: "New Customers / Post",
      desc: "Turn a single video into a flood of new customers on autopilot. No manual DMing."
    },
    {
      id: "02",
      title: "Open Rate Dominance",
      stat: "78%",
      sub: "Higher Open Rate",
      desc: "Push notifications cut through the noise. WhatsApp broadcasts are ignored. Email is dead."
    },
    {
      id: "03",
      title: "Status & Prestige",
      stat: "Top 1%",
      sub: "Brand Perception",
      desc: "A branded Apple Wallet pass signals that your venue is high-tech, exclusive, and ahead of the curve."
    },
    {
      id: "04",
      title: "Total Data Ownership",
      stat: "100%",
      sub: "Asset Control",
      desc: "Stop renting your audience from Zuckerberg. You own the list. You own the guest relationship."
    }
  ];

  return (
    <section id="advantages" className="py-48 bg-white text-black">
      <div className="max-w-[95%] mx-auto">
        
        <Reveal>
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 pb-8 border-b border-black">
             <h2 className="text-6xl md:text-[8vw] font-display font-bold uppercase text-black leading-none tracking-tighter">
              Advantages
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {advantages.map((adv, i) => (
            <div key={i} className="group border-b border-gray-200 py-16 md:py-24 transition-all duration-500 hover:bg-gray-50">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                  
                  {/* Number & Title */}
                  <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                     <Reveal delay={0.1}>
                        <span className="font-mono text-xs text-gray-400 mb-4 block">/ {adv.id}</span>
                        <h3 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tight group-hover:pl-4 transition-all duration-300">
                            {adv.title}
                        </h3>
                     </Reveal>
                  </div>

                  {/* Stat */}
                  <div className="md:w-1/3 mb-8 md:mb-0">
                     <Reveal delay={0.2}>
                        <div className="flex flex-col">
                            <span className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-[#00C6FF]">
                                {adv.stat}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">
                                {adv.sub}
                            </span>
                        </div>
                     </Reveal>
                  </div>

                  {/* Desc */}
                  <div className="md:w-1/3 max-w-sm flex items-start gap-4">
                     <Reveal delay={0.3}>
                         <p className="text-lg font-light leading-relaxed text-gray-600">
                            {adv.desc}
                         </p>
                     </Reveal>
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2">
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                     </div>
                  </div>

               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;