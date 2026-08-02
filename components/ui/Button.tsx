import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * `accent` — turmeric fill, the one loud control on an ink ground
   * `solid`  — inverts the current ground (paper-on-ink, ink-on-paper)
   * `ghost`  — hairline outline; works on both grounds
   */
  variant?: 'accent' | 'solid' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  accent: 'bg-kunyit text-ink hover:bg-[#F4B747] active:bg-kunyit-deep active:text-paper',
  solid:
    'bg-paper text-ink hover:bg-white [.band-paper_&]:bg-ink [.band-paper_&]:text-paper [.band-paper_&]:hover:bg-black',
  ghost: [
    'border border-paper/30 hover:border-paper/70 hover:bg-paper/[0.06]',
    '[.band-paper_&]:border-ink/25 [.band-paper_&]:hover:border-ink/60 [.band-paper_&]:hover:bg-ink/[0.06]',
  ].join(' '),
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-4 text-[0.6875rem]',
  md: 'h-11 px-6 text-xs',
  lg: 'h-14 px-8 text-[0.8125rem]',
};

export function Button({
  variant = 'accent',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2.5 rounded-panel font-mono uppercase tracking-label',
        'transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Same visual language, rendered as a link. */
export function ButtonLink({
  variant = 'accent',
  size = 'md',
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2.5 rounded-panel font-mono uppercase tracking-label',
        'transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
