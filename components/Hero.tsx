import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-white pt-32 pb-20 overflow-hidden">
      
      <div className="max-w-[95%] mx-auto px-4 w-full relative z-10">
        
        {/* Main Title - Uniform massive sizing with breathable spacing */}
        <div className="flex flex-col items-start justify-center gap-2 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[16vw] lg:text-[11vw] leading-[0.8] font-display font-bold text-black uppercase tracking-tighter">
              FILL YOUR
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
             <h1 className="text-[16vw] lg:text-[11vw] leading-[0.8] font-display font-bold text-black uppercase tracking-tighter">
              VENUE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
             <h1 className="text-[16vw] lg:text-[11vw] leading-[0.8] font-display font-bold text-black uppercase tracking-tighter">
              WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FFF] to-[#00C6FF]">AI.</span>
            </h1>
          </motion.div>
        </div>

        {/* Editorial Image & Subtitle */}
        <div className="mt-16 flex flex-col md:flex-row gap-20 items-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="w-full md:w-5/12 aspect-[3/4] overflow-hidden"
          >
            <img 
              src="/images/header img.png" 
              alt="Editorial Model Fashion" 
              className="w-full h-full object-cover  hover:scale-105 transition-transform duration-[2s] ease-in-out"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full md:w-1/2 pb-8 flex flex-col justify-end h-full"
          >
             <div className="h-[1px] w-32 bg-black mb-12"></div>
             <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-12">
              A MEDIA AND <br/> INTELLIGENCE ATELIER.
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-light max-w-lg leading-relaxed">
              We are <span className="font-bold font-display tracking-wide">[ AZ : UR ]</span>. We have created the System that turns a single social media post into 300+ new guests walking through your door.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;