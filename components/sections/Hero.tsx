'use client';

import { motion } from 'framer-motion';
import { Seal } from '@/components/ui/Seal';
import { ButtonLink } from '@/components/ui/Button';
import { MANIFEST } from '@/lib/constants';

const clients = [
  'Duluin',
  'BNI Ventures',
  'Global Nararya',
  'Riline Group',
  'Sentrocare',
  'Edumindgrow',
];

export function Hero() {
  return (
    <section
      id="top"
      data-band="ink"
      className="band band-ink relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28"
    >
      {/* faint index grid — the only decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="shell relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label"
            >
              Fullstack Engineer · Bandung, ID
            </motion.p>

            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6.75rem)] font-semibold leading-[0.94] tracking-tightest">
              <motion.span
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                Bagas Adhi
              </motion.span>
              <motion.span
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="block italic text-kunyit"
              >
                Nugraha.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 max-w-measure text-lg leading-relaxed text-paper/70 md:text-xl"
            >
              Saya membangun perangkat lunak yang benar-benar dipakai —
              dasbor SaaS untuk ekosistem <span className="text-paper">Duluin</span>, situs korporat untuk{' '}
              <span className="text-paper">BNI Ventures</span>, dan produk lain
              lintas industri: kesehatan, edukasi, hingga ritel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="#work" variant="accent" size="lg">
                Lihat pekerjaan
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost" size="lg">
                Hubungi saya
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden w-44 shrink-0 lg:block xl:w-52"
          >
            <Seal className="w-full" />
          </motion.div>
        </div>
      </div>

      {/* manifest strip + client roll */}
      <div className="relative border-t border-paper/12">
        <div className="shell grid gap-8 py-8 md:grid-cols-2 md:gap-4">
          <dl className="grid grid-cols-4 gap-4">
            {MANIFEST.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-semibold tabular-nums md:text-3xl">{m.value}</dt>
                <dd className="label mt-1 opacity-45">{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
            {clients.map((c) => (
              <span key={c} className="label opacity-40">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
