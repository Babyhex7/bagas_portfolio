'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* Reveal — the only entrance animation in the system.                  */
/* 12px rise, no scale, no spring. Used sparingly.                      */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** A hairline that draws itself in from the left. */
export function DrawRule({ className }: { className?: string }) {
  return (
    <motion.hr
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn('rule origin-left', className)}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Section — ground, sticky metadata rail, heading.                     */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  band,
  index,
  label,
  meta = [],
  title,
  lede,
  children,
  className,
}: {
  id: string;
  band: 'ink' | 'paper';
  index: string;
  label: string;
  meta?: string[];
  title: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-band={band}
      className={cn(
        'band',
        band === 'ink' ? 'band-ink' : 'band-paper',
        'py-20 md:py-28 lg:py-36',
        className
      )}
    >
      <div className="shell">
        <div className="grid gap-y-12 lg:grid-cols-[9.5rem_1fr] lg:gap-x-16">
          {/* metadata rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-baseline gap-4 lg:block">
              <span className="label opacity-45">§&nbsp;{index}</span>
              <span className="label lg:mt-2 lg:block">{label}</span>
            </div>
            <hr className="rule my-5 hidden lg:block" />
            <dl className="hidden lg:block">
              {meta.map((m) => (
                <dd key={m} className="label leading-loose opacity-45">
                  {m}
                </dd>
              ))}
            </dl>
          </aside>

          {/* content column */}
          <div className="min-w-0">
            <Reveal>
              <h2 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[0.95] tracking-tightest">
                {title}
              </h2>
            </Reveal>
            {lede ? (
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-measure text-lg leading-relaxed opacity-70 md:text-xl">
                  {lede}
                </p>
              </Reveal>
            ) : null}
            <DrawRule className="mt-10 md:mt-14" />
            <div className="mt-10 md:mt-14">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
