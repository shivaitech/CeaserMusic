import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Card3D = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  // Glare movement
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center w-full h-full py-12 perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[340px] h-[540px] md:w-[400px] md:h-[620px] rounded-[30px] bg-[#f0f0f0] shadow-2xl cursor-pointer"
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 rounded-[30px] bg-white shadow-lg overflow-hidden border-[1px] border-white/40"
        >
            {/* Ceramic Texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-0"></div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <span className="font-display font-bold text-lg uppercase tracking-wider text-black">Member Pass</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Limited Edition</span>
                    </div>
                    {/* Gold Chip */}
                    <div className="w-12 h-10 rounded-md bg-gradient-to-br from-[#e0cba8] via-[#bf9b65] to-[#8a6e42] shadow-inner border border-[#8a6e42]/20 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                        <div className="w-full h-[1px] bg-black/10 absolute top-1/3"></div>
                        <div className="w-full h-[1px] bg-black/10 absolute bottom-1/3"></div>
                        <div className="h-full w-[1px] bg-black/10 absolute left-1/2"></div>
                    </div>
                </div>

                {/* Center Brand */}
                <div className="text-center relative transform translate-z-10">
                    <div className="relative">
                        <h1 className="font-display font-bold text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-black drop-shadow-sm">
                            AZ:UR
                        </h1>
                        <div className="font-mono text-[9px] uppercase tracking-[0.6em] text-gray-500 mt-2">
                            Media & Intelligence
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="space-y-6">
                    {/* Magnetic Strip Visual */}
                    <div className="w-full h-12 bg-gray-100 rounded flex items-center px-4 overflow-hidden relative shadow-inner">
                        <div className="font-mono text-[10px] text-gray-400 tracking-[0.2em] flex justify-between w-full">
                            <span>****</span>
                            <span>****</span>
                            <span>8821</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <div className="font-mono text-[9px] uppercase tracking-widest text-gray-400 mb-1">Holder</div>
                            <div className="font-display text-lg uppercase tracking-wide">Sarah Jenkins</div>
                        </div>
                        <div className="text-right">
                            <div className="font-mono text-[9px] uppercase tracking-widest text-gray-400 mb-1">Valid Thru</div>
                            <div className="font-mono text-sm font-bold">12/28</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic Glare/Sheen */}
            <motion.div 
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
                    opacity: 0.6
                }}
                className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay"
            />
        </div>
      </motion.div>
    </div>
  );
};