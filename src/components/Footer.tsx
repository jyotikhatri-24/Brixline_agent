import React from 'react';
import { Share2, MessageSquare, Users2, ArrowRight, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E10] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 pb-16 border-b border-white/8">
          <div className="max-w-xs">
          <div className="mb-6">
            <Logo type="light" />
          </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The modern ecosystem for real estate professionals. High-performance tools for modern closers.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageSquare, Users2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-sm mb-6 text-white/80 uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                {['About', 'Careers', 'Contact'].map(item => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 text-white/80 uppercase tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm text-white/40">
                {['Listings', 'Analytics', 'Legal'].map(item => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-bold text-sm mb-6 text-white/80 uppercase tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-white/40">
                {['Help Center', 'API Docs', 'Security'].map(item => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl md:max-w-xs w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
                <Mail size={16} className="text-primary" />
              </div>
              <h4 className="font-bold text-base text-white">Stay in the loop</h4>
            </div>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">Get exclusive listings and market insights delivered weekly.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors"
              />
              <button className="shrink-0 w-11 h-11 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium text-white/25 gap-4">
          <p>© 2025 Brixline Inc. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} className="hover:text-white/60 transition-colors" href="#">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
