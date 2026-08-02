import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

/**
 * A flat panel. No shadow, no gradient, no lift on hover — the system is
 * built from hairlines and ground inversion, so the panel stays quiet.
 */
export function Card({ children, className, bordered = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-panel p-6',
        bordered && 'border border-paper/12 [.band-paper_&]:border-ink/12',
        'bg-ink-raised/60 [.band-paper_&]:bg-paper-raised/70',
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className }: CardProps) {
  return <Card className={className}>{children}</Card>;
}
