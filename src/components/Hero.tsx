import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, Globe, Home, Bed, Bath, ChefHat, Maximize2, ParkingCircle, Train, Bell } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const mockupY = useTransform(scrollYProgress, [0, 1], ['0%', '-66.6%']);

  const features = [
    { icon: TrendingUp, title: 'Earn Up to 15% Brokerage', description: 'Scale your earnings with industry-leading structures.', color: 'text-primary' },
    { icon: Globe,      title: 'Wide Range of Properties', description: 'Access 10,000+ verified listings across the city.', color: 'text-accent-cyan' },
    { icon: ShieldCheck,title: '0% Platform Tax',          description: 'What you earn is what you keep. Zero hidden fees.', color: 'text-blue-500' },
    { icon: Zap,        title: 'T + 7 Payouts',            description: 'Get earnings credited within 7 days of deal close.', color: 'text-amber-500' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-24 md:pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-background"
    >
      {/* Dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #2563EB18 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      {/* Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      {/* ── LAYOUT: single col on mobile, two-col on desktop ── */}
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center gap-12 lg:gap-20">

        {/* ── LEFT / TOP : Text content ── */}
        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Notification chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-lg shadow-gray-100/60 rounded-full px-5 py-3 mb-6 md:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <Bell size={13} className="text-primary" />
            <span className="text-xs font-bold text-on-surface/70">
              New deal closed · <span className="text-primary">₹1.2Cr in Green Park</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 md:mb-8 text-on-surface"
          >
            The{' '}
            <span className="text-gradient">Agent</span>{' '}
            Portal<br />
            for every real<br />
            estate broker
          </motion.h1>

          {/* Feature grid — 2 cols always */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 w-full max-w-sm sm:max-w-md lg:max-w-none mt-2 md:mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-2.5 items-start group"
              >
                <div className={`shrink-0 w-8 h-8 lg:w-11 lg:h-11 rounded-xl bg-surface flex items-center justify-center ${feature.color} transition-transform shadow-sm border border-gray-100`}>
                  <feature.icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-black text-black leading-tight">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 mt-8 md:mt-10 w-full max-w-sm sm:max-w-md lg:max-w-none">
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="shimmer-btn bg-primary text-white flex-1 lg:flex-none lg:px-10 py-3.5 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 glow-pulse cursor-pointer"
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-gray-100 flex-1 lg:flex-none lg:px-10 py-3.5 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-surface hover:border-primary/20 transition-colors text-on-surface cursor-pointer"
            >
              Explore Listings
            </motion.button>
          </div>
        </div>

        {/* ── RIGHT / BOTTOM : Phone Mockups ── */}
        <div className="w-full flex justify-center items-center relative lg:min-h-[680px]">
          <div className="relative flex justify-center items-start gap-3 sm:gap-5 lg:gap-8 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[600px]">

            {/* BRIXLINE animated bridge — shown on all screens */}
            <div className="absolute -top-10 sm:-top-14 lg:-top-32 left-1/2 -translate-x-1/2 w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px] h-10 sm:h-14 lg:h-32 z-40 pointer-events-none overflow-visible">
              <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                <path id="topCurve" d="M 80,60 Q 200,10 320,60" fill="transparent" />
                <text className="text-[10px] font-black uppercase tracking-[0.3em] fill-primary">
                  <textPath href="#topCurve" startOffset="0%">
                    BRIXLINE • BRIXLINE • BRIXLINE • BRIXLINE • BRIXLINE
                    <animate attributeName="startOffset" from="0%" to="-50%" dur="10s" repeatCount="indefinite" />
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Seller Phone */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-[46vw] max-w-[175px] sm:max-w-[210px] lg:w-[270px] lg:max-w-none group"
            >
              {/* Sell tooltip — all screens */}
              <div className="absolute -top-8 left-1 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl rounded-bl-none shadow-lg flex items-center gap-1.5 border border-gray-100 z-30 text-[10px] font-bold">
                <div className="w-4 h-4 bg-[#2D7A46] rounded-md flex items-center justify-center">
                  <Home size={10} className="text-white" />
                </div>
                I want to <span className="text-[#2D7A46]">SELL</span>
              </div>

              <div className="relative z-20 w-full aspect-[9/19] bg-[#0E0E10] rounded-[2.2rem] lg:rounded-[2.8rem] p-1.5 lg:p-2 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.45)] border-[6px] lg:border-[8px] border-[#2C2C2E] overflow-hidden">
                <div className="w-full h-full bg-white rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden flex flex-col">
                  <div className="bg-white px-3 pt-8 pb-2 flex items-center justify-between border-b">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400 text-xs">←</div>
                    <div className="text-center">
                      <div className="text-[8px] font-black text-[#2D7A46] uppercase tracking-widest">Selling</div>
                      <div className="text-[11px] font-black text-gray-900">My Property</div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400 text-xs">⋮</div>
                  </div>
                  <div className="p-2.5 space-y-2.5 overflow-y-auto no-scrollbar pb-4">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" className="w-full h-24 object-cover rounded-lg shadow-sm" alt="House" />
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-gray-900 text-[11px] leading-tight">Beautiful 3BHK House</h4>
                      <p className="text-[8px] text-gray-500 font-bold uppercase">Green Park, New Delhi</p>
                      <div className="text-[#2D7A46] font-black text-sm mt-1">₹ 75,00,000</div>
                    </div>
                    <div className="grid grid-cols-4 gap-1 py-0.5">
                      {[{ icon: Bed, label: '3 Bed' }, { icon: Bath, label: '2 Bath' }, { icon: ChefHat, label: 'Kitchen' }, { icon: Maximize2, label: '1200 Sq' }].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-1 rounded-md flex flex-col items-center gap-0.5 border border-gray-100">
                          <item.icon size={9} className="text-gray-400" />
                          <span className="text-[5.5px] font-bold text-gray-700 whitespace-nowrap">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-[#2D7A46] text-white py-2 rounded-lg font-black text-[8px] tracking-widest uppercase">I WANT TO SELL</button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Buyer Phone */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative w-[46vw] max-w-[175px] sm:max-w-[210px] lg:w-[270px] lg:max-w-none group mt-8 lg:mt-0"
            >
              {/* Buy tooltip — all screens */}
              <div className="absolute -top-8 right-1 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl rounded-br-none shadow-lg flex items-center gap-1.5 border border-gray-100 z-30 text-[10px] font-bold">
                <div className="w-4 h-4 bg-[#2B6CB0] rounded-md flex items-center justify-center">
                  <Home size={10} className="text-white" />
                </div>
                I want to <span className="text-[#2B6CB0]">BUY</span>
              </div>

              <div className="relative z-20 w-full aspect-[9/19] bg-[#0E0E10] rounded-[2.2rem] lg:rounded-[2.8rem] p-1.5 lg:p-2 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.45)] border-[6px] lg:border-[8px] border-[#2C2C2E] overflow-hidden">
                <div className="w-full h-full bg-white rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden flex flex-col">
                  <div className="bg-white px-3 pt-8 pb-2 flex items-center justify-between border-b">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400 text-xs">←</div>
                    <div className="text-center">
                      <div className="text-[8px] font-black text-[#2B6CB0] uppercase tracking-widest">Buying</div>
                      <div className="text-[11px] font-black text-gray-900">Looking for Property</div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center text-gray-400 text-xs">⋮</div>
                  </div>
                  <div className="p-2.5 space-y-2.5 overflow-y-auto no-scrollbar pb-4">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" className="w-full h-24 object-cover rounded-lg shadow-sm" alt="House" />
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-gray-900 text-[11px] leading-tight">Looking for 3BHK House</h4>
                      <p className="text-[8px] text-gray-500 font-bold uppercase">Green Park, New Delhi</p>
                      <div className="text-[10px] font-black text-gray-400 uppercase mt-1">Budget</div>
                      <div className="text-[#2B6CB0] font-black text-sm">Up to ₹ 80,00,000</div>
                    </div>
                    <div className="space-y-1.5">
                      <h5 className="text-[9px] font-black text-gray-900">Requirements</h5>
                      <div className="grid grid-cols-2 gap-1">
                        {[{ icon: Bed, label: '3 Bedrooms' }, { icon: Bath, label: '2 Bathrooms' }, { icon: ParkingCircle, label: 'Parking' }, { icon: Train, label: 'Near Metro' }].map((req, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-blue-50/60 p-1.5 rounded-md border border-blue-100/50">
                            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                              <ShieldCheck size={7} className="text-white" />
                            </div>
                            <span className="text-[7px] font-bold text-gray-800 truncate">{req.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-[#2B6CB0] text-white py-2 rounded-lg font-black text-[8px] tracking-widest uppercase">I WANT TO BUY</button>
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
