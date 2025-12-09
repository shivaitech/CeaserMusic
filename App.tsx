import React from 'react';
import { Logo } from './components/Logo';
import { Reveal } from './components/ui/Reveal';
import { WalletPass } from './components/WalletPass';
import { NotificationLockScreen, PremiumTier, PremiumCapture, PartiallyHiddenPhone } from './components/Mockups';
import { Instagram, Smartphone, TrendingUp, Users, ArrowRight, MessageCircle, X, Check } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#Fdfdfd] text-black font-sans selection:bg-neon selection:text-white overflow-x-hidden">
      
      {/* ------------------- FLOATING PILL HEADER ------------------- */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
          <nav className="pointer-events-auto bg-[#f2f2f2]/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-full px-4 py-2 flex items-center gap-3 md:gap-8 max-w-[95%] md:max-w-none justify-between md:justify-center">
              <div className="bg-transparent pr-2">
                 <Logo size="sm" />
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 text-black/60">
                  <a href="https://www.instagram.com/az________ur?igsh=MWpmd2ZlbzB0dnhsbw==" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors p-1"><Instagram size={20} /></a>
                  <div className="w-px h-4 bg-black/10"></div>
                  <a href="https://wa.me/971507106188?text=Hi%2C%20I%27m%20interested%20in%20the%20%5BAZ%3AUR%5D%20Membership%20Infrastructure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-sm tracking-tight hover:text-[#25D366] transition-colors p-1">
                      <MessageCircle size={20} />
                      <span className="hidden md:inline">WhatsApp</span>
                  </a>
              </div>

              <button className="bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-neon hover:text-white transition-colors shadow-xl group whitespace-nowrap">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded flex items-center justify-center text-black group-hover:text-neon transition-colors">
                      <span className="font-condensed text-[8px] md:text-[10px] leading-none pt-0.5">AZ</span>
                  </div>
                  Request Access
              </button>
          </nav>
      </div>

      <main className="max-w-[1400px] mx-auto pt-32 md:pt-40 px-4 md:px-8 pb-20 overflow-x-hidden">
          
          {/* ------------------- HERO SECTION ------------------- */}
          <section className="text-center relative mb-24 md:mb-40">
               {/* Hero Text */}
               <Reveal>
                  <h1 className="text-[14vw] md:text-[10rem] leading-[1.05] md:leading-[0.95] font-condensed uppercase tracking-tighter text-black mb-4">
                      Turn Guests<br/>Into Members
                  </h1>
               </Reveal>
               
               <Reveal delay={100}>
                  <p className="font-condensed uppercase text-lg md:text-3xl tracking-tight text-black max-w-4xl mx-auto px-4">
                      Your own AI powered membership infrastructure.
                  </p>
                  <div className="mt-6 inline-block px-2">
                       <p className="font-condensed text-2xl md:text-5xl uppercase tracking-[0.02em] text-transparent bg-clip-text bg-gradient-to-r from-neon via-black to-neon animate-shimmer bg-[length:200%_auto] font-bold leading-tight">
                           No App. No Downloads. Pure Status.
                       </p>
                  </div>
               </Reveal>

               {/* Center Phone */}
               <div className="relative z-10 mt-12 md:mt-16 mb-20 w-full flex justify-center">
                   <div className="origin-top">
                        <WalletPass />
                   </div>
                   
                   {/* PREMIUM TAGS (Desktop Only) */}
                   <div className="absolute top-[20%] left-[5%] md:left-[25%] animate-float hidden md:block">
                       <div className="bg-black/90 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                           <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                           <div className="text-left">
                               <div className="font-condensed uppercase text-lg leading-none">Status</div>
                               <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">System Online</div>
                           </div>
                       </div>
                   </div>

                   <div className="absolute bottom-[20%] right-[5%] md:right-[25%] animate-float hidden md:block" style={{ animationDelay: '2s' }}>
                       <div className="bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full border border-gray-200 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                           <div className="text-right">
                               <div className="font-condensed uppercase text-lg leading-none">100% Revenue</div>
                               <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Ownership</div>
                           </div>
                           <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-neon text-xs font-bold">
                                %
                           </div>
                       </div>
                   </div>
               </div>
          </section>


          {/* ------------------- STOP LEAVING MONEY (CENTERED) ------------------- */}
          <section className="mb-24 text-center">
              <h2 className="text-[12vw] md:text-[8rem] font-condensed uppercase leading-[1.0] tracking-tighter mb-12 md:mb-20 text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-gray-500 drop-shadow-sm px-2">
                   Stop Leaving<br/>Money On The Table
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[1300px] mx-auto">
                  {/* OLD WAY */}
                  <div className="bg-gray-100 rounded-[2.5rem] p-8 md:p-16 text-left flex flex-col justify-center min-h-[400px] md:min-h-[500px] border border-gray-200 relative overflow-hidden group">
                       <p className="font-bold text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-12 absolute top-8 left-8 md:top-10 md:left-16">( OLD WAY )</p>
                       <div className="space-y-8 md:space-y-12 relative z-10 mt-8 md:mt-0">
                           <div className="flex items-start gap-4 md:gap-6 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                               <div className="mt-1 md:mt-2"><X size={24} className="text-gray-400 md:w-8 md:h-8"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-6xl text-gray-400 leading-[0.9] mb-1 md:mb-2">EXPENSIVE ADS</h3>
                                   <p className="text-gray-400 text-sm md:text-base font-medium">You pay for reach you don't own.</p>
                               </div>
                           </div>
                           <div className="flex items-start gap-4 md:gap-6 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                               <div className="mt-1 md:mt-2"><X size={24} className="text-gray-400 md:w-8 md:h-8"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-6xl text-gray-400 leading-[0.9] mb-1 md:mb-2">IGNORED MSGS</h3>
                                   <p className="text-gray-400 text-sm md:text-base font-medium">Broadcasts are 90% ignored.</p>
                               </div>
                           </div>
                           <div className="flex items-start gap-4 md:gap-6 opacity-60 md:opacity-40 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                               <div className="mt-1 md:mt-2"><X size={24} className="text-gray-400 md:w-8 md:h-8"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-6xl text-gray-400 leading-[0.9] mb-1 md:mb-2">ZERO DATA</h3>
                                   <p className="text-gray-400 text-sm md:text-base font-medium">You build their platform, not yours.</p>
                               </div>
                           </div>
                       </div>
                  </div>

                  {/* NEW WAY */}
                  <div className="bg-neon rounded-[2.5rem] p-8 md:p-16 text-left flex flex-col justify-center min-h-[400px] md:min-h-[500px] text-white shadow-2xl relative overflow-hidden group">
                       {/* Animated Background Mesh */}
                       <div className="absolute inset-0 bg-mesh opacity-30 animate-shimmer bg-[length:200%_200%]"></div>
                       <p className="font-bold text-white/80 text-xs md:text-sm uppercase tracking-widest mb-12 absolute top-8 left-8 md:top-10 md:left-16">( NEW WAY )</p>
                       
                       <div className="space-y-8 md:space-y-12 relative z-20 mt-8 md:mt-0">
                           <div className="flex items-start gap-4 md:gap-6">
                               <div className="mt-1 md:mt-2 bg-white text-neon rounded-full p-1 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"><Check size={16} strokeWidth={4} className="md:w-6 md:h-6"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-7xl uppercase leading-[0.9] mb-2 drop-shadow-md">100% REVENUE</h3>
                               </div>
                           </div>
                           <div className="flex items-start gap-4 md:gap-6">
                               <div className="mt-1 md:mt-2 bg-white text-neon rounded-full p-1 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"><Check size={16} strokeWidth={4} className="md:w-6 md:h-6"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-7xl uppercase leading-[0.9] mb-2 drop-shadow-md">DIRECT ACCESS</h3>
                               </div>
                           </div>
                           <div className="flex items-start gap-4 md:gap-6">
                               <div className="mt-1 md:mt-2 bg-white text-neon rounded-full p-1 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"><Check size={16} strokeWidth={4} className="md:w-6 md:h-6"/></div>
                               <div>
                                   <h3 className="font-condensed text-4xl md:text-7xl uppercase leading-[0.9] mb-2 drop-shadow-md">PURE OWNERSHIP</h3>
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          </section>


          {/* ------------------- THE ASSET (FULL WIDTH SECTION) ------------------- */}
          <section className="mb-32 mt-32">
              <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-sm border border-gray-100 relative overflow-hidden">
                   <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                       <div className="text-left relative z-10 order-2 lg:order-1">
                           <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 md:mb-8 flex items-center gap-2">
                               <span className="w-8 h-[1px] bg-neon"></span> The Asset
                           </p>
                           <h2 className="text-5xl md:text-8xl font-condensed uppercase leading-[1.05] md:leading-[0.95] tracking-tighter mb-6 md:mb-8">
                               The Most Valuable<br/>Digital Real Estate<br/>In The World.
                           </h2>
                           <p className="font-medium text-gray-600 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl">
                               We don't build loyalty apps that nobody downloads.<br/>
                               We install a <span className="text-black font-bold border-b-2 border-neon">Native Brand Asset</span> directly into their Phone Wallet—right next to their Credit Cards.
                           </p>
                       </div>
                       
                       {/* Tilted Half Phone Visual */}
                       <div className="relative order-1 lg:order-2 h-[350px] md:h-[500px] w-full bg-gray-50 rounded-[2rem] overflow-hidden flex items-end justify-center">
                            <PartiallyHiddenPhone />
                       </div>
                   </div>
              </div>
          </section>


          {/* ------------------- PHASES 01 / 02 / 03 ------------------- */}
          <section className="space-y-16 md:space-y-24 mb-32">
              
              {/* 01 THE CAPTURE */}
              <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 group">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      <div>
                          <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                              <h3 className="text-7xl md:text-8xl font-condensed text-gray-100 group-hover:text-neon transition-colors duration-500">01</h3>
                              <span className="font-mono text-xs uppercase tracking-widest text-black bg-gray-100 px-3 py-1 rounded-full">The Capture</span>
                          </div>
                          <h4 className="text-5xl md:text-7xl font-condensed uppercase leading-[1.05] md:leading-[0.95] mb-6 md:mb-8">Capture. Track.<br/>Dominate.</h4>
                          <p className="text-3xl md:text-5xl font-condensed uppercase tracking-tight text-black mb-8 md:mb-10">Fast, easy, simple.</p>
                          
                          <ul className="space-y-6 md:space-y-8">
                              <li className="border-l-4 border-neon pl-6">
                                  <span className="font-condensed text-xl md:text-2xl uppercase block mb-1">Scan & Drop</span>
                                  <span className="text-base md:text-lg text-gray-500 font-medium">QR Code. Instagram Link. Direct Message.<br/>They are in within 3 seconds.</span>
                              </li>
                              <li className="border-l-4 border-black pl-6">
                                  <span className="font-condensed text-xl md:text-2xl uppercase block mb-1">Zero Friction</span>
                                  <span className="text-base md:text-lg text-gray-500 font-medium">No passwords. No logins. Pure access.</span>
                              </li>
                          </ul>
                      </div>
                      
                      {/* Visual 01 - Add to Wallet UI */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] aspect-square md:aspect-[4/3] flex items-center justify-center p-4 md:p-8 overflow-hidden">
                          <PremiumCapture />
                      </div>
                  </div>
              </div>

              {/* 02 THE ENGINE */}
              <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 group">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      <div className="order-2 lg:order-1">
                          {/* Visual 02 - Dark Mode Tier on clean background - BIGGER IMAGE (p-0) */}
                          <div className="bg-gray-50 rounded-[2rem] aspect-square md:aspect-[4/3] flex items-center justify-center p-0 overflow-hidden relative">
                               <div className="scale-90 md:scale-110">
                                   <PremiumTier />
                               </div>
                          </div>
                      </div>

                      <div className="order-1 lg:order-2">
                          <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                              <h3 className="text-7xl md:text-8xl font-condensed text-gray-100 group-hover:text-neon transition-colors duration-500">02</h3>
                              <span className="font-mono text-xs uppercase tracking-widest text-black bg-gray-100 px-3 py-1 rounded-full">The Engine</span>
                          </div>
                          <h4 className="text-5xl md:text-7xl font-condensed uppercase leading-[1.05] md:leading-[0.95] mb-6 md:mb-8">Gamify<br/>The Spend.</h4>
                          <p className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Don't give discounts. Give Status.</p>
                          <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-12">We track every Dirham spent on the card.</p>
                          
                          <div className="space-y-6 md:space-y-8">
                              <div className="flex items-center gap-4 md:gap-6">
                                  <span className="font-condensed text-4xl md:text-5xl text-gray-200">1</span>
                                  <div>
                                      <span className="font-condensed text-2xl md:text-3xl uppercase block mb-1">They Spend</span>
                                      <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Staff logs the bill</span>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4 md:gap-6">
                                  <span className="font-condensed text-4xl md:text-5xl text-gray-200">2</span>
                                  <div>
                                      <span className="font-condensed text-2xl md:text-3xl uppercase block mb-1">They Earn</span>
                                      <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Credits hit wallet instantly</span>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4 md:gap-6">
                                  <span className="font-condensed text-4xl md:text-5xl text-neon">3</span>
                                  <div>
                                      <span className="font-condensed text-2xl md:text-3xl uppercase block mb-1 text-black">They Ascend</span>
                                      <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">They chase the "Black Tier"</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


              {/* 03 THE WEAPON */}
              <div>
                  <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 group mb-12 md:mb-16">
                       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                           <div>
                                <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                                     <h3 className="text-7xl md:text-8xl font-condensed text-gray-100 group-hover:text-neon transition-colors duration-500">03</h3>
                                     <span className="font-mono text-xs uppercase tracking-widest text-black bg-gray-100 px-3 py-1 rounded-full">The Weapon</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-condensed uppercase leading-[1.05] md:leading-[0.95] tracking-tighter mb-6 md:mb-8">
                                    Bypass<br/><span className="text-black">The Noise</span>
                                </h2>
                                <div className="flex gap-4 md:gap-8 mb-8 md:mb-10 text-base md:text-lg font-condensed uppercase tracking-wide text-black flex-wrap">
                                     <span>WhatsApp is spam</span>
                                     <span>Email is dead</span>
                                </div>
                                <p className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">Push Notifications have 78% higher open rates.</p>
                                <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10">Send unlimited notifications directly to the Lock Screen.</p>
                           </div>

                           {/* Visual 03 - Lock Screen */}
                           <div className="bg-gray-100 rounded-[2rem] aspect-square md:aspect-[4/3] flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
                                {/* Decorative Elements */}
                                <div className="absolute top-10 right-10 w-32 md:w-40 h-32 md:h-40 bg-neon rounded-full blur-[80px] opacity-20"></div>
                                <div className="absolute bottom-10 left-10 w-32 md:w-40 h-32 md:h-40 bg-purple-500 rounded-full blur-[80px] opacity-10"></div>
                                <NotificationLockScreen />
                           </div>
                       </div>
                  </div>

                  {/* 100% Delivery Section (Outside Box) */}
                  <div className="text-center py-12">
                      <h4 className="text-[7vw] md:text-6xl font-condensed uppercase text-black leading-[1.05] md:leading-[0.95] mb-4">
                          100% Delivery. Zero Ad Spend.
                      </h4>
                      <h4 className="text-[7vw] md:text-6xl font-condensed uppercase text-neon leading-[1.05] md:leading-[0.95]">
                          Instant Footfall.
                      </h4>
                  </div>
              </div>
          </section>


          {/* ------------------- UNFAIR ADVANTAGE (REINVENTED HIGH-END) ------------------- */}
          <section className="mb-24">
               {/* 1. The Key Actions (Scrolling/Massive) */}
               <div className="mb-16 md:mb-24 border-t border-black/10 pt-16">
                   <div className="flex flex-col gap-2 text-center">
                       <Reveal className="py-1">
                           <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] font-condensed uppercase text-black tracking-tighter hover:text-neon transition-colors duration-500 cursor-default">
                               Create Status
                           </h2>
                       </Reveal>
                       <Reveal delay={100} className="py-1">
                           <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] font-condensed uppercase text-black tracking-tighter hover:text-neon transition-colors duration-500 cursor-default">
                               Automate Retention
                           </h2>
                       </Reveal>
                       <Reveal delay={200} className="py-1">
                           <h2 className="text-[12vw] md:text-[9vw] leading-[0.9] font-condensed uppercase text-black tracking-tighter hover:text-neon transition-colors duration-500 cursor-default">
                               Print Revenue
                           </h2>
                       </Reveal>
                   </div>
               </div>

               {/* 2. THE BLACK MONOLITH (Unfair Advantage) */}
               <div className="w-full rounded-[2rem] md:rounded-[4rem] bg-black relative overflow-hidden flex flex-col items-center justify-center py-20 md:py-48 px-4 shadow-2xl">
                      {/* Premium Glow Core - Stronger on mobile */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[90%] md:h-[80%] bg-neon blur-[100px] md:blur-[200px] opacity-30 md:opacity-20 animate-pulse-slow"></div>
                      
                      {/* Metallic Texture Overlay */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                      
                      <div className="relative z-10 text-center">
                          {/* Removed Infrastructure Level Text */}
                          <h2 className="text-[18vw] md:text-[15vw] leading-[0.85] md:leading-[0.8] font-condensed uppercase text-white tracking-tighter drop-shadow-2xl mix-blend-overlay">
                              This Is<br/>
                              <span className="text-neon mix-blend-normal">Unfair</span><br/>
                              Advantage.
                          </h2>
                      </div>

                      {/* Bottom Shine */}
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neon/20 to-transparent"></div>
               </div>
               
               {/* 3. The Subtext (Outside Box) */}
               <div className="text-center mt-12 mb-24 md:mb-32 px-4 max-w-4xl mx-auto">
                   <p className="text-xl md:text-4xl font-bold leading-relaxed text-black">
                        While your competitors are sending flyers on WhatsApp that get ignored, you are building a Private Economy.
                   </p>
               </div>

               {/* 4. The Question (Final Impact) */}
               <div className="text-center mt-20 md:mt-32 px-2">
                   <Reveal>
                       <h2 className="text-[6vw] md:text-5xl font-condensed uppercase leading-[1.2] tracking-tighter text-gray-400 mb-6 md:mb-8">
                           The question isn't<br/>if you need this.
                       </h2>
                       <div className="space-y-1 md:space-y-2">
                           <span className="text-[12vw] md:text-[8.5rem] font-condensed uppercase leading-[0.9] md:leading-[0.9] tracking-tighter text-black block">
                               IT'S WHY YOU DON'T
                           </span>
                           <span className="text-[12vw] md:text-[8.5rem] font-condensed uppercase leading-[0.9] md:leading-[0.9] tracking-tighter text-neon block decoration-black underline decoration-4 underline-offset-8">
                               HAVE IT YET.
                           </span>
                       </div>
                   </Reveal>
               </div>
          </section>

      </main>

      {/* ------------------- PREMIUM FOOTER ------------------- */}
      <footer className="bg-white border-t border-gray-200 pt-16 md:pt-24 pb-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24">
                  <div>
                      <h2 className="text-5xl md:text-8xl font-condensed uppercase tracking-tighter mb-6 md:mb-8 leading-none">
                          Join The<br/>New AI Standard.
                      </h2>
                      <div className="flex items-center gap-4">
                           <div className="w-1 h-12 bg-neon"></div>
                           <p className="font-medium text-gray-500 max-w-sm">
                               We are accepting a limited number of Flagship Partners this quarter.
                           </p>
                      </div>
                  </div>
                  
                  <div className="flex items-center lg:justify-end">
                      <div className="bg-gray-100 p-1 rounded-full group hover:shadow-2xl transition-all duration-300 w-full md:w-auto">
                          <button className="bg-black text-white w-full md:w-auto px-8 md:px-12 py-6 md:py-8 rounded-full font-condensed uppercase text-xl md:text-2xl tracking-wider group-hover:bg-neon group-hover:text-white transition-all duration-300 flex items-center justify-center gap-6">
                              Request Access <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
                          </button>
                      </div>
                  </div>
              </div>

              <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 font-sans">
                  <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Contact</p>
                      <a href="mailto:hello@az-ur.com" className="block text-xl md:text-2xl font-bold hover:text-neon transition-colors">hello@az-ur.com</a>
                      <p className="text-lg text-gray-500 font-medium">+971 50 710 6188</p>
                  </div>
                  
                  <div className="space-y-1">
                       <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</p>
                       <p className="text-xl md:text-2xl font-bold text-black">Dubai</p>
                       <p className="text-sm text-gray-500">United Arab Emirates</p>
                  </div>

                  <div className="md:text-right">
                       <Logo size="sm" />
                       <p className="text-gray-400 mt-2 text-xs font-medium">© 2025 AZ:UR Infrastructure.</p>
                  </div>
              </div>
          </div>
      </footer>

    </div>
  );
};

export default App;