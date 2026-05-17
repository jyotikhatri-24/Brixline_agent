import React from 'react';
import { motion } from 'motion/react';

export default function Marquee() {
  const items = [
    "ZERO BROKERAGE",
    "LEGAL SUPPORT",
    "INDUSTRY FIRST MODEL",
    "SMART SAVINGS",
    "TECH ENABLED",
    "VERIFIED LISTINGS",
    "INSTANT PAYOUTS"
  ];

  const marqueeText = items.join("      •      ") + "      •      ";

  // Split tagline into animated chunks
  const line1 = ["Built", "for", "Closure,"];
  const line2 = ["Not", "Just", "Discovery."];

  return (
    <div className="relative overflow-hidden bg-background">

      {/* ── Manifesto area ───────────────────────────── */}
      <div className="relative pt-12 pb-0 flex flex-col items-center justify-center">

        {/* BRIXLINE watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[11rem] md:text-[18rem] font-black tracking-tighter leading-none text-on-surface whitespace-nowrap"
            style={{ opacity: 0.045 }}
          >
            BRIXLINE
          </span>
        </div>

        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary/8 blur-[110px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-primary/5 blur-[110px] rounded-full pointer-events-none" />

        {/* Manifesto quote */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-8"
          >
            Our Promise
          </motion.p>

          {/* Line 1: Built for Closure, */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-2">
            {line1.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black leading-none tracking-tight text-on-surface"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Line 2: Not Just Discovery. */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-8">
            {line2.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`text-5xl md:text-8xl font-black leading-none tracking-tight ${
                  word === 'Discovery.' ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-on-surface/40 text-base md:text-lg font-medium italic max-w-lg mx-auto mb-4"
          >
            "Real estate doesn't have a demand problem — it has a conversion problem.
            We built Brixline to solve exactly that."
          </motion.p>
        </div>
      </div>

      {/* ── Curved marquee banner — tight below the text ── */}
      <div className="w-full relative scale-110 md:scale-125 z-10">
        <svg
          viewBox="0 60 1000 260"
          className="w-full h-auto overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id="smilePath" d="M -50,150 Q 500,320 1050,150" />
          </defs>
          <use
            href="#smilePath"
            fill="none"
            stroke="#2563EB"
            strokeWidth="70"
            strokeLinecap="round"
          />
          <text
            className="text-[20px] font-black uppercase fill-white tracking-[0.2em]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <textPath href="#smilePath" startOffset="0%">
              {marqueeText.repeat(5)}
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="60s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
