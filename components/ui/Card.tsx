import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-cosmic-purple/20 bg-space-light/50 backdrop-blur-sm p-6',
        hover && 'transition-all duration-300 hover:border-cosmic-purple/50 hover:shadow-lg hover:shadow-cosmic-purple/20 hover:-translate-y-1',
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cosmic-purple/5 to-cosmic-pink/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6',
        'transition-all duration-300 hover:bg-white/10 hover:border-white/20',
        className
      )}
    >
      {children}
    </div>
  );
}
