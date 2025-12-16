import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white hover:shadow-lg hover:shadow-cosmic-purple/50 focus:ring-cosmic-purple',
    secondary: 'bg-space-light text-white hover:bg-space-dark border border-cosmic-blue/30 hover:border-cosmic-blue focus:ring-cosmic-blue',
    outline: 'border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white focus:ring-cosmic-purple',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
