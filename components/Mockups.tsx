import React from 'react';
import { MessageCircle, Check, Star, Lock, Smartphone, Wallet, Plus } from 'lucide-react';

// 1. Notification Lock Screen Mockup (Premium, No Mom Message)
export const NotificationLockScreen: React.FC = () => {
  return (
      <div className="relative w-full max-w-[320px] mx-auto bg-black rounded-[45px] border-[8px] border-gray-900 overflow-hidden shadow-2xl aspect-[9/19]">
          {/* Wallpaper */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black"></div>
          {/* Abstract Premium Wallpaper */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon via-blue-900 to-transparent"></div>
          
          {/* Clock */}
          <div className="relative z-10 pt-20 text-center text-white/90">
              <div className="text-7xl font-light font-sans tracking-tight">12:41</div>
              <div className="text-lg font-medium mt-2 text-white/60">Tuesday, 10 October</div>
          </div>

          {/* Notifications Stack */}
          <div className="relative z-10 mt-10 px-4 space-y-3">
              
              {/* Notification 1 (Primary) */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-xl border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                   <div className="flex justify-between items-center mb-2">
                       <div className="flex items-center gap-2">
                           <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-[10px] font-condensed text-white border border-white/20">AZ</div>
                           <span className="text-xs font-bold text-white uppercase tracking-wide">AZ:UR</span>
                       </div>
                       <span className="text-[10px] text-white/50">now</span>
                   </div>
                   <div className="text-sm font-medium text-white leading-snug">
                       Your Black Tier status has unlocked a complimentary bottle service.
                   </div>
              </div>

               {/* Notification 2 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-xl border border-white/10 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                   <div className="flex justify-between items-center mb-2">
                       <div className="flex items-center gap-2">
                           <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-[10px] font-condensed text-white border border-white/20">AZ</div>
                           <span className="text-xs font-bold text-white uppercase tracking-wide">AZ:UR</span>
                       </div>
                       <span className="text-[10px] text-white/50">15m ago</span>
                   </div>
                   <div className="text-sm font-medium text-white leading-snug">
                       Flash Event: 20% off all cocktails for the next hour! 🍸
                   </div>
              </div>
          </div>

          {/* Bottom Actions */}
          <div className="absolute bottom-8 w-full flex justify-between px-12">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors">
                  <div className="w-5 h-5 bg-transparent border-t-2 border-l-2 border-white/80 rotate-[-45deg] mt-1 ml-1"></div>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors">
                   <div className="w-5 h-4 bg-white/80 rounded-[2px]"></div>
              </div>
          </div>
      </div>
  )
}

// 2. Premium Tier Progression (Refined for light background context)
export const PremiumTier: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center py-8">
            <div className="relative w-full max-w-sm bg-[#050505] border border-gray-800 rounded-[2.5rem] shadow-2xl p-8 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[80px] rounded-full"></div>

                <div className="relative z-10 flex justify-between items-end mb-10">
                    <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Current Rank</div>
                        <div className="text-4xl font-condensed uppercase text-white tracking-tight">Gold Member</div>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center shadow-lg border border-white/10">
                        <Star size={28} className="text-white fill-white" />
                    </div>
                </div>

                <div className="space-y-6 relative z-10">
                    {/* Progress Item */}
                    <div className="flex items-center gap-5">
                         <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                             <Check size={20} />
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between mb-2">
                                <div className="text-sm font-bold text-white">Spent $5,000</div>
                                <div className="text-[10px] font-bold text-neon bg-neon/10 px-2 py-0.5 rounded">COMPLETED</div>
                             </div>
                             <div className="h-1 w-full bg-gray-800 rounded-full">
                                 <div className="h-full bg-white w-full rounded-full"></div>
                             </div>
                         </div>
                    </div>

                    {/* Progress Item (Active) */}
                    <div className="flex items-center gap-5">
                         <div className="w-12 h-12 rounded-full border-2 border-neon text-neon flex items-center justify-center font-bold font-mono text-lg animate-pulse">02</div>
                         <div className="flex-1">
                             <div className="flex justify-between mb-2">
                                <div className="text-sm font-bold text-white">Visit 5 Times</div>
                                <div className="text-[10px] font-bold text-neon">3/5 VISITS</div>
                             </div>
                             <div className="h-1 w-full bg-gray-800 rounded-full">
                                 <div className="h-full bg-neon w-3/5 rounded-full shadow-[0_0_10px_#0099FF]"></div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 3. Premium Capture Visual (Add to Wallet UI)
export const PremiumCapture: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-8">
            <div className="relative animate-float scale-110">
                {/* iOS 'Add to Wallet' Sheet Simulation */}
                <div className="w-[300px] bg-[#f2f2f7] rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden relative z-10">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-200/50 bg-white/50 backdrop-blur-xl">
                        <span className="text-blue-500 text-lg font-medium">Cancel</span>
                        <span className="font-bold text-lg">Add Pass</span>
                    </div>

                    {/* Pass Preview */}
                    <div className="p-8 flex justify-center bg-gray-50">
                        <div className="w-full aspect-[1.58/1] bg-black rounded-xl shadow-xl relative overflow-hidden flex flex-col p-4">
                            {/* Card Content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-white font-condensed text-2xl">AZ:UR</span>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Smartphone size={14} className="text-white"/>
                                </div>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <span className="text-white/60 text-[8px] uppercase tracking-widest">Member Status</span>
                                <span className="text-white font-condensed text-xl block">ACCESS GRANTED</span>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="p-6 pt-0 bg-gray-50">
                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-500 font-medium">
                                This pass will be added to Wallet.<br/>
                                <span className="text-xs text-gray-400">Zero install. Zero friction.</span>
                            </p>
                        </div>
                        <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-neon transition-colors duration-300">
                             Add to Wallet
                        </button>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/20 blur-2xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>
            </div>
        </div>
    )
}

// 4. Partially Hidden Phone (The Asset) - FIXED RESPONSIVENESS
export const PartiallyHiddenPhone: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-end justify-center overflow-hidden pt-12">
            {/* Using % width for responsive scaling on mobile, fixed width on larger screens */}
            <div className="relative w-[85%] md:w-[340px] aspect-[9/19] transform rotate-12 translate-y-12 translate-x-4 md:translate-x-8 hover:translate-y-4 transition-transform duration-700">
                <div className="absolute inset-0 bg-black rounded-[40px] md:rounded-[50px] border-[6px] md:border-[8px] border-gray-800 shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#f2f2f7] pt-10 md:pt-12 px-5 md:px-6">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center mb-6 md:mb-8 opacity-50">
                            <span className="text-black font-bold text-[10px] md:text-xs">9:41</span>
                            <div className="flex gap-1"><div className="w-4 h-2 bg-black rounded-sm"></div></div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">Wallet</h3>
                        
                        {/* Stacked Cards */}
                        <div className="space-y-[-120px] md:space-y-[-140px]">
                            {/* Card 1 */}
                            <div className="w-full aspect-[1.58/1] bg-blue-600 rounded-2xl shadow-lg transform scale-95 opacity-50 border-t border-white/20"></div>
                             {/* Card 2 */}
                            <div className="w-full aspect-[1.58/1] bg-gray-600 rounded-2xl shadow-lg transform scale-100 opacity-70 border-t border-white/20"></div>
                             {/* HERO CARD */}
                            <div className="w-full aspect-[1.58/1] bg-black rounded-2xl shadow-2xl relative overflow-hidden p-5 md:p-6 flex flex-col justify-between border-t border-white/20 z-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                
                                <div className="relative z-10 flex justify-between">
                                    <span className="text-white font-condensed text-lg md:text-xl">AZ:UR</span>
                                    <span className="text-white/50 text-[8px] md:text-[10px] uppercase border border-white/20 px-2 py-0.5 rounded">Black</span>
                                </div>
                                <div className="relative z-10 text-right">
                                     <span className="text-neon font-mono text-[8px] md:text-xs uppercase tracking-widest block">Balance</span>
                                     <span className="text-white text-lg md:text-xl font-bold">$12,402.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}