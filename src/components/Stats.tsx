import React from 'react';
import { motion } from 'motion/react';
import CountUp from './CountUp';
import { Users, BadgeCheck, IndianRupee, Banknote } from 'lucide-react';

const statMeta = [
  { icon: Users, color: 'text-primary', bg: 'bg-primary/8', glow: 'hover:shadow-primary/15' },
  { icon: BadgeCheck, color: 'text-accent-cyan', bg: 'bg-accent-cyan/8', glow: 'hover:shadow-accent-cyan/15' },
  { icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-50', glow: 'hover:shadow-emerald-500/15' },
  { icon: Banknote, color: 'text-amber-500', bg: 'bg-amber-50', glow: 'hover:shadow-amber-400/15' },
];

export default function Stats() {
  const stats = [
    { value: 2000, label: 'Active Brokers', sublabel: 'and growing', suffix: '+' },
    { value: 100, label: 'Verified Listings', sublabel: 'exclusive inventory', suffix: '+' },
    { value: 0, start: 15, label: 'Platform Fee', sublabel: 'zero deductions', suffix: '%' },
    { value: 100, label: 'Payout Rate', sublabel: 'T+7 guaranteed', suffix: '%' },
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto py-20 relative">
      {/* Section orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-10 md:mb-16 text-center relative z-10">
        <span className="section-label">Platform Performance</span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-on-surface mb-4 md:mb-6 tracking-tighter">
          Driving Success for{' '}
          <span className="shimmer-text">Modern Brokers</span>
        </h2>
        <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
          Join the fastest growing real estate ecosystem focused on agent performance, transparency, and next-gen technology.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {stats.map((stat, index) => {
          const Meta = statMeta[index];
          const Icon = Meta.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`relative overflow-hidden bg-white border border-gray-100 shadow-sm p-5 md:p-8 rounded-3xl text-center group hover:shadow-xl ${Meta.glow} hover:border-transparent hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Watermark numeral */}
              <div className="absolute -top-4 -right-2 text-[7rem] font-black text-gray-50 leading-none select-none pointer-events-none">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`mx-auto mb-4 w-12 h-12 rounded-2xl ${Meta.bg} flex items-center justify-center ${Meta.color} group-hover:scale-110 transition-transform`}>
                <Icon size={22} />
              </div>

              <h3 className={`text-3xl md:text-5xl font-black mb-1 ${Meta.color} group-hover:scale-105 transition-transform`}>
                <CountUp end={stat.value} start={(stat as any).start} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-black text-on-surface tracking-tight">{stat.label}</p>
              <p className="text-xs text-on-surface/40 font-medium mt-1">{stat.sublabel}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
