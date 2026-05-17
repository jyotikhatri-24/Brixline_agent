/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import OnePlatform from './components/OnePlatform';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SplitText from './components/SplitText';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen grain">
      <Header />
      
      <main>
        <Hero />
        
        <Stats />
        
        {/* Advantage CTA */}
        <section id="advantages" className="py-10 md:py-16 px-4 text-center max-w-7xl mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Exclusive Opportunity</span>
            <SplitText
              text="Explore Over 100+ Exclusive Brixline Advantage™ Listing."
              tag="h2"
              className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight text-on-surface"
              delay={40}
            />
            <p className="text-on-surface/60 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Unlock priority access to high-yield properties with pre-negotiated double brokerage deals. 
              Our curated collection features exclusive off-market inventory verified for legal compliance and high demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              className="shimmer-btn bg-primary text-white w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 glow-pulse cursor-pointer flex items-center justify-center gap-3"
              >
                <Sparkles size={20} />
                Join For Free
              </motion.button>
              <div className="flex -space-x-4 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm" 
                    src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                    alt="Agent" 
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-surface flex items-center justify-center text-xs font-bold text-on-surface/50 shadow-sm">
                  +2.4k
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Testimonials />
        
        <Marquee />
        
        <OnePlatform />
        
        <FAQ />
      </main>

      <Footer />

      {/* Sticky Join Button (Mobile) */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-2xl shadow-primary/40 flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer">
          Join Brixline Portal <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
