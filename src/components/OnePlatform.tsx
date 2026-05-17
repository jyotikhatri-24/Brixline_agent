import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import SplitText from './SplitText';

export default function OnePlatform() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-surface rounded-[2rem] md:rounded-[4rem] p-6 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <span className="text-primary font-black tracking-widest text-sm mb-6 uppercase inline-block bg-primary/10 px-4 py-1.5 rounded-full">Unified Ecosystem</span>
            <SplitText
              text="One Platform. Infinite Scalability."
              tag="h2"
              className="text-3xl md:text-6xl font-black text-on-surface mb-6 md:mb-8 leading-tight"
              delay={40}
              textAlign="left"
            />
            <p className="text-lg text-on-surface/50 leading-relaxed mb-12 max-w-xl">
              Forget juggling multiple tools. Brixline integrates inventory management, 
              real-time commission tracking, and legal support into a single, high-performance 
              command center designed for speed and clarity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Verified Inventory", desc: "10k+ pre-vetted exclusive listings." },
                { title: "Real-time Tracking", desc: "Instant updates on every deal stage." },
                { title: "Smart Docs", desc: "Automated legal and compliance checks." },
                { title: "Growth Analytics", desc: "Insights to scale your performance." }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    <h4 className="font-bold text-xl text-on-surface">{item.title}</h4>
                  </div>
                  <p className="text-on-surface/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-3xl"
          >
            <img 
              className="w-full h-full object-cover min-h-[300px] md:min-h-[550px] brightness-95" 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop" 
              alt="Modern Office Space" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-8 bottom-8">
              <div className="bg-white/80 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                  <h5 className="text-2xl font-bold text-on-surface">Modern Authority</h5>
                </div>
                <p className="text-on-surface/60 font-medium">Join 2,400+ brokers building the future of real estate tech-first.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
