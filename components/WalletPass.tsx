import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export const WalletPass: React.FC = () => {
  return (
    <div className="relative mx-auto w-[300px] md:w-[360px] h-[640px] md:h-[760px] select-none animate-float">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-black rounded-[45px] md:rounded-[55px] shadow-2xl p-[10px] md:p-[12px] ring-1 ring-gray-300">
        
        {/* Screen */}
        <div className="relative w-full h-full bg-[#f2f2f7] rounded-[36px] md:rounded-[44px] overflow-hidden flex flex-col items-center pt-10 md:pt-12 pb-6 md:pb-8 px-4 md:px-5">
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] md:w-[100px] h-[25px] md:h-[30px] bg-black rounded-full z-20 flex justify-center items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full absolute -top-4 -right-4 blur-xl opacity-50"></div>
            </div>

            {/* Status Bar */}
            <div className="w-full flex justify-between px-2 mb-4 md:mb-6 text-[10px] md:text-[12px] font-bold text-black z-10">
                <span className="pl-1">9:41</span>
                <div className="flex gap-1 pr-1 items-center">
                    <Signal size={12} fill="currentColor" />
                    <Wifi size={12} />
                    <Battery size={12} fill="currentColor" />
                </div>
            </div>

            {/* Header Icons */}
            <div className="w-full flex justify-between px-1 mb-4 md:mb-6 text-xl md:text-2xl z-10 opacity-40">
                <span>👾</span>
                <span>💬</span>
            </div>

            {/* The Main Card */}
            <div className="w-full aspect-[1.58/1] bg-black rounded-xl md:rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 md:p-6 transform transition-transform duration-300 z-10">
                
                {/* Holographic Text Effect - ACCESS PASS */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="font-condensed text-[3.5rem] md:text-[5rem] tracking-tighter bg-holo bg-[length:200%_auto] animate-shimmer clip-text z-10 text-center leading-[0.85] mix-blend-screen pt-2 md:pt-4">
                        ACCESS<br/>PASS
                    </h1>
                </div>

                {/* Card Chip */}
                <div className="w-9 h-7 md:w-11 md:h-8 bg-gradient-to-br from-[#e0e0e0] to-[#a0a0a0] rounded-md z-10 opacity-90 border border-white/20 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/30"></div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/30"></div>
                    <div className="absolute inset-0 border-[2px] border-black/20 rounded-md"></div>
                </div>

                {/* Bottom Detail (Replaces Visa) */}
                <div className="text-white/50 font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-right z-10 mt-auto">
                    Black Tier
                </div>
                
                {/* Gloss Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
            </div>

            {/* Balance Section */}
            <div className="w-full mt-6 md:mt-10 space-y-1 relative z-10">
                <div className="flex justify-between items-center">
                    <p className="text-xs md:text-sm font-bold text-gray-500">Balance <span className="inline-block border border-gray-400 rounded-full w-3 h-3 text-[8px] text-center leading-3 ml-1">i</span></p>
                    <div className="flex flex-col items-end">
                        <p className="text-[8px] md:text-[10px] font-bold text-gray-400">Rewards of <span className="bg-purple-500 text-white px-1 rounded-sm">4%</span> APY</p>
                    </div>
                </div>
                <div className="flex items-baseline justify-center py-2">
                    <span className="text-4xl md:text-5xl font-sans font-bold text-black tracking-tight">$5,020</span>
                    <span className="text-xl md:text-2xl font-sans font-bold text-gray-300">.20</span>
                </div>
                <p className="text-center text-[10px] md:text-xs font-bold text-gray-400 pb-4 md:pb-6 border-b border-gray-200">
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-[8px] md:text-[10px] mr-1">$</span> 
                    Balance in eUSD
                </p>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-2 md:gap-3 w-full mt-4 md:mt-6 z-10">
                <div className="flex-1 bg-white py-3 md:py-3.5 rounded-xl md:rounded-2xl shadow-sm text-center font-bold text-xs md:text-sm text-black border border-gray-100 flex items-center justify-center gap-2">
                    <span className="text-base md:text-lg">↓</span> Add Funds
                </div>
                <div className="flex-1 bg-white py-3 md:py-3.5 rounded-xl md:rounded-2xl shadow-sm text-center font-bold text-xs md:text-sm text-black border border-gray-100 flex items-center justify-center gap-2">
                    <span className="text-base md:text-lg">↑</span> Withdraw
                </div>
            </div>

            {/* Loyalty Item */}
            <div className="w-full bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm mt-3 md:mt-4 border border-gray-100 flex justify-between items-center z-10">
                <div>
                     <p className="font-bold text-xs md:text-sm text-black">AZ:UR Loyalty Program</p>
                     <div className="flex items-center gap-1 mt-1">
                        <span className="font-bold text-lg md:text-xl text-black">2,000</span>
                        <span className="text-blue-500 text-[10px] md:text-xs">●</span>
                     </div>
                </div>
                <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-[8px] md:text-[10px] font-bold">
                    1% Cashback
                </div>
            </div>

            {/* Nav Bar Bottom */}
            <div className="absolute bottom-4 md:bottom-6 w-full px-6 md:px-8 flex justify-between text-gray-300">
                <div className="flex flex-col items-center gap-1 text-black">
                    <div className="w-5 h-3 md:w-6 md:h-4 bg-black rounded-sm"></div>
                    <span className="text-[8px] md:text-[10px] font-bold">Wallet</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-gray-300 rounded-sm grid grid-cols-2 gap-[1px] p-[1px]">
                        <div className="bg-gray-300 rounded-[1px]"></div>
                        <div className="bg-gray-300 rounded-[1px]"></div>
                        <div className="bg-gray-300 rounded-[1px]"></div>
                        <div className="bg-gray-300 rounded-[1px]"></div>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold">Apps</span>
                </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-[8px] md:text-[10px] font-bold">Loyalty</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};