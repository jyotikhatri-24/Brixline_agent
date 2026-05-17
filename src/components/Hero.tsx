import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, Globe, Home, Bed, Bath, ChefHat, Maximize2, MapPin, ParkingCircle, Train, Star, Bell } from 'lucide-react';
import SplitText from './SplitText';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  const features = [
    {
      icon: TrendingUp,
      title: "Earn Up to 15% Brokerage",
      description: "Scale your earnings with our industry-leading structures designed for high-performing agents.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Wide Range of Properties",
      description: "Access 10,000+ verified listings across the city, from luxury villas to smart apartments.",
      color: "text-accent-cyan"
    },
    {
      icon: ShieldCheck,
      title: "0% Platform Tax",
      description: "What you earn is what you keep. No hidden fees or unexpected platform deductions.",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "T + 7 Payouts",
      description: "Get your earnings credited within 7 days of deal completion. Fast, reliable, and transparent.",
      color: "text-amber-500"
    }
  ];

  const mockupScreens = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  ];

  const MobileMockupMarquee = () => (
    <div className="lg:hidden w-full mt-20 overflow-hidden py-10 relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent z-10" />
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-8 whitespace-nowrap px-4"
      >
        {[...mockupScreens, ...mockupScreens].map((src, i) => (
          <div key={i} className="w-[200px] aspect-[9/19] relative rounded-[2rem] overflow-hidden shrink-0 border border-gray-100 shadow-2xl">
            <img 
              className="w-full h-full object-cover" 
              src={src}
              alt={`Screen ${i}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex items-end p-4">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 w-full border border-white/20">
                <div className="h-3 w-16 bg-white/40 rounded-full mb-2" />
                <div className="h-1.5 w-24 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 overflow-hidden bg-background">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB18 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glowing background orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-32 items-center">
        
        {/* Left Content */}
        <div className="h-full">
          {/* Floating notification chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-lg shadow-gray-100/60 rounded-full px-5 py-3 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <Bell size={13} className="text-primary" />
            <span className="text-xs font-bold text-on-surface/70">New deal closed · <span className="text-primary">₹1.2Cr in Green Park</span></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 md:mb-8 text-on-surface"
          >
            The <span className="text-gradient">Agent</span> Portal<br />
            for every real<br />
            estate broker
          </motion.h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 mt-10 md:mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-4 group hover-lift"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-surface flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform shadow-sm border border-gray-100`}>
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-1 text-black leading-tight">{feature.title}</h3>
                  <p className="text-on-surface/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-10 md:mt-16">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn bg-primary text-white w-full sm:w-auto px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 glow-pulse cursor-pointer"
            >
              Get Started Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-gray-100 w-full sm:w-auto px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-surface hover:border-primary/20 transition-colors text-on-surface cursor-pointer"
            >
              Explore Listings
            </motion.button>
          </div>

          <MobileMockupMarquee />
        </div>

        {/* Right Content - Dual Phone Interaction */}
        <div className="hidden lg:flex relative justify-center w-full min-h-[700px] h-full items-center">
          <div className="relative w-full max-w-[650px] flex justify-between items-center gap-8">
            
            {/* Top Center Animated BRIXLINE Bridge */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-32 z-40 pointer-events-none overflow-visible">
              <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                <path 
                  id="topCurve" 
                  d="M 80,60 Q 200,10 320,60" 
                  fill="transparent" 
                />
                <text className="text-[10px] font-black uppercase tracking-[0.3em] fill-primary">
                  <textPath href="#topCurve" startOffset="0%">
                    BRIXLINE • BRIXLINE • BRIXLINE • BRIXLINE • BRIXLINE
                    <animate 
                      attributeName="startOffset" 
                      from="0%" 
                      to="-50%" 
                      dur="10s" 
                      repeatCount="indefinite" 
                    />
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Seller Phone (Left) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-[280px] group"
            >
              {/* Tooltip */}
              <div className="absolute -top-12 -left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl rounded-bl-none shadow-xl flex items-center gap-2 border border-gray-100 z-30">
                <div className="w-6 h-6 bg-[#2D7A46] rounded-md flex items-center justify-center">
                  <Home size={14} className="text-white" />
                </div>
                <span className="font-bold text-xs text-gray-900">I want to <span className="text-[#2D7A46]">SELL</span></span>
              </div>

              <div className="relative z-20 w-full aspect-[9/19] bg-[#0E0E10] rounded-[2.8rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-[#2C2C2E] overflow-hidden">
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-white px-4 pt-10 pb-3 flex items-center justify-between border-b">
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400">←</div>
                    <div className="text-center">
                      <div className="text-[10px] font-black text-[#2D7A46] uppercase tracking-widest">Selling</div>
                      <div className="text-[14px] font-black text-gray-900">My Property</div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400">⋮</div>
                  </div>
                  
                  <div className="p-3.5 space-y-3.5 overflow-y-auto no-scrollbar pb-6">
                    {/* Hero Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" 
                      className="w-full h-32 object-cover rounded-xl shadow-sm"
                      alt="House"
                    />
                    
                    {/* Basic Info */}
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-gray-900 text-base leading-tight">Beautiful 3BHK House</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Green Park, New Delhi</p>
                      <div className="text-[#2D7A46] font-black text-lg mt-1">₹ 75,00,000</div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-4 gap-1.5 py-0.5">
                       {[
                         { icon: Bed, label: '3 Bedrooms' },
                         { icon: Bath, label: '2 Bathrooms' },
                         { icon: ChefHat, label: '1 Kitchen' },
                         { icon: Maximize2, label: '1200 Sq.ft' }
                       ].map((item, idx) => (
                         <div key={idx} className="bg-gray-50/80 p-1.5 rounded-lg flex flex-col items-center justify-center gap-0.5 border border-gray-100">
                           <item.icon size={11} className="text-gray-400" />
                           <span className="text-[6.5px] font-bold text-gray-800 whitespace-nowrap">{item.label}</span>
                         </div>
                       ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                       <h5 className="text-[11px] font-black text-gray-900">Property Details</h5>
                       <p className="text-[9.5px] text-gray-500 leading-relaxed font-semibold">
                         Well maintained 3BHK house in a prime location. Nearby to metro, schools and market.
                       </p>
                    </div>

                    {/* Action */}
                    <div className="pt-1 space-y-2">
                      <button className="w-full bg-[#2D7A46] text-white py-3 rounded-xl font-black text-[10px] tracking-widest shadow-lg shadow-[#2D7A46]/20 uppercase">
                        I WANT TO SELL
                      </button>
                      <div className="text-gray-400 font-bold text-[9px] text-center">
                        Edit Property
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Buyer Phone (Right) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative w-[280px] group"
            >
              {/* Tooltip */}
              <div className="absolute -top-12 -right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl rounded-bl-none shadow-xl flex items-center gap-2 border border-gray-100 z-30">
                <div className="w-6 h-6 bg-[#2B6CB0] rounded-md flex items-center justify-center text-white">
                  <Home size={14} className="text-white" />
                </div>
                <span className="font-bold text-xs text-gray-900">I want to <span className="text-[#2B6CB0]">BUY</span></span>
              </div>

              <div className="relative z-20 w-full aspect-[9/19] bg-[#0E0E10] rounded-[2.8rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-[#2C2C2E] overflow-hidden">
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-white px-4 pt-10 pb-3 flex items-center justify-between border-b">
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400">←</div>
                    <div className="text-center">
                      <div className="text-[10px] font-black text-[#2B6CB0] uppercase tracking-widest">Buying</div>
                      <div className="text-[14px] font-black text-gray-900">Looking for Property</div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400">⋮</div>
                  </div>

                  <div className="p-3.5 space-y-3.5 overflow-y-auto no-scrollbar pb-6">
                    {/* Hero Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" 
                      className="w-full h-32 object-cover rounded-xl shadow-sm"
                      alt="House"
                    />
                    
                    {/* Basic Info */}
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-gray-900 text-base leading-tight">Looking for 3BHK House</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Green Park, New Delhi</p>
                      <div className="pt-1.5">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Budget</div>
                        <div className="text-[#2B6CB0] font-black text-lg">Up to ₹ 80,00,000</div>
                      </div>
                    </div>

                    {/* Requirements List */}
                    <div className="space-y-2">
                       <h5 className="text-[11px] font-black text-gray-900">Requirements</h5>
                       <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { icon: Bed, label: '3 Bedrooms' },
                            { icon: Bath, label: '2 Bathrooms' },
                            { icon: ParkingCircle, label: 'Parking' },
                            { icon: Train, label: 'Near Metro' }
                          ].map((req, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-blue-50/50 p-2 rounded-lg border border-blue-100/50">
                               <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                                  <ShieldCheck size={10} className="text-white" />
                               </div>
                               <span className="text-[8.5px] font-bold text-gray-800 truncate">{req.label}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* Action */}
                    <div className="pt-1 space-y-2">
                      <button className="w-full bg-[#2B6CB0] text-white py-3 rounded-xl font-black text-[10px] tracking-widest shadow-lg shadow-[#2B6CB0]/20 uppercase">
                        I WANT TO BUY
                      </button>
                      <div className="text-gray-400 font-bold text-[9px] text-center">
                        Contact Seller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>


      </div>
    </section>
  );
}
