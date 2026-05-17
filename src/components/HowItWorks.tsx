import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Search, Handshake, BadgeIndianRupee } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Your Free Account',
    description: 'Sign up in under 2 minutes. No credit card, no commitment. Just your details and you\'re in.',
    color: 'text-primary',
    bg: 'bg-primary/8',
    border: 'border-primary/20',
  },
  {
    step: '02',
    icon: Search,
    title: 'Browse Exclusive Listings',
    description: 'Access 100+ Brixline Advantage™ properties with double brokerage, verified and ready to close.',
    color: 'text-accent-cyan',
    bg: 'bg-accent-cyan/8',
    border: 'border-accent-cyan/20',
  },
  {
    step: '03',
    icon: Handshake,
    title: 'Close the Deal',
    description: 'Match your client, schedule visits, and close deals with full legal and documentation support.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    step: '04',
    icon: BadgeIndianRupee,
    title: 'Get Paid in T+7',
    description: 'Your commission is credited within 7 business days. 0% platform cuts, 100% your earnings.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #9D2D1E12 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <span className="section-label">Simple Process</span>
        <h2 className="text-4xl md:text-6xl font-black text-on-surface tracking-tight">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-on-surface/50 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          From sign-up to payout — Brixline makes real estate brokerage effortlessly fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`relative bg-white border ${step.border} rounded-3xl p-8 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-5 text-[4rem] font-black text-gray-50 leading-none select-none">
                {step.step}
              </div>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-3 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent z-20" />
              )}

              <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                <Icon size={26} />
              </div>

              <h3 className="font-black text-xl text-on-surface mb-3 leading-tight">{step.title}</h3>
              <p className="text-on-surface/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
