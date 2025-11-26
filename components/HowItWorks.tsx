import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'The Trigger',
    desc: 'We post content with an irresistible offer (e.g., "2 Free Drinks"). A viewer comments a keyword like "WEDNESDAY".',
    image: "/images/the trigger img.png" // Phone/Social interface vibe
  },
  {
    id: '02',
    title: 'The Capture',
    desc: 'Our AI automatically DMs them, captures their Name & Number, and issues a fully customized Digital Brand Pass.',
    image: "/images/the capture img.png" // Data/Tech vibe
  },
  {
    id: '03',
    title: 'The Revenue',
    desc: 'They walk in to redeem the pass. Expect 150–200 new guests and a 30–40% instant revenue spike.',
    image: "/images/the revenue img.JPG" // Crowd/Revenue vibe
  },
  {
    id: '04',
    title: 'The Control',
    desc: 'Your brand now lives in their phone Wallet. You can send Push Notifications to bring them back regularly.',
    image: "/images/the control img.png" // Mobile control vibe
  }
];

const HowItWorks: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={containerRef} className="py-32 bg-white relative">
      <div className="max-w-[95%] mx-auto relative">
        <Reveal>
           <h2 className="text-[12vw] font-display font-bold text-black uppercase leading-none mb-48 text-center md:text-left">
            How It Works
          </h2>
        </Reveal>

        {/* Connecting Line (Desktop) */}
        <div className="absolute left-[50%] top-64 bottom-0 w-[1px] bg-gray-200 hidden md:block transform -translate-x-1/2">
           <motion.div style={{ height }} className="w-full bg-black" />
        </div>

        <div className="flex flex-col gap-48">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col items-center gap-12 md:gap-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Text Section - Shows first on mobile */}
              <div className="w-full md:w-5/12 bg-white p-4 md:p-12 relative z-10">
                 <Reveal delay={0.2}>
                    <div className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">Step {step.id}</div>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-black uppercase mb-10 leading-[0.9]">
                      {step.title}
                    </h3>
                 </Reveal>
                 <Reveal delay={0.4}>
                    <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed">
                      {step.desc}
                    </p>
                 </Reveal>
              </div>

              {/* Image Section - Shows second on mobile */}
              <div className="w-full md:w-5/12 relative">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border border-black/5">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute top-0 left-0 bg-white text-black text-xl font-bold p-6 font-display border-b border-r border-black/10">
                      {step.id}
                    </div>
                  </div>
                </Reveal>
                {/* Decorative tech marks */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-black hidden md:block"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;