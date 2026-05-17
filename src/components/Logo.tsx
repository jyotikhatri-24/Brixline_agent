import React from 'react';

interface LogoProps {
  className?: string;
  type?: 'light' | 'dark';
}

export default function Logo({ className = '', type = 'dark' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.jpg"
        alt="Brixline Logo"
        className="w-10 h-10 rounded-xl object-cover shadow-sm shrink-0"
      />
      <div className="flex items-baseline gap-1 leading-none">
        <span className={`text-xl font-black tracking-tighter ${type === 'dark' ? 'text-on-surface' : 'text-white'}`}>
          Brixline
        </span>
        <span className="text-xl font-light text-primary tracking-tight ml-0.5">
          Agents
        </span>
      </div>
    </div>
  );
}
