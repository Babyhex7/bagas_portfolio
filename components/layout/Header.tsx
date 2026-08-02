'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [band, setBand] = useState<'ink' | 'paper'>('ink');
  const [active, setActive] = useState<string>('');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* The header borrows the colour of whatever ground sits under it. */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-band]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          setBand(el.dataset.band === 'paper' ? 'paper' : 'ink');
          if (el.id) setActive(el.id);
        });
      },
      { rootMargin: '-72px 0px -92% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const onInk = band === 'ink' || menuOpen;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
          onInk ? 'text-paper' : 'text-ink'
        )}
      >
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 -z-10 transition-all duration-500',
            scrolled && !menuOpen
              ? onInk
                ? 'bg-ink/88 backdrop-blur-md'
                : 'bg-paper/88 backdrop-blur-md'
              : 'bg-transparent'
          )}
        />

        <div className="shell flex h-16 items-center justify-between md:h-20">
          <a href="#top" onClick={(e) => go(e, '#top')} className="label flex items-baseline gap-2 font-medium">
            <span>BAGAS ADHI N.</span>
            <span className="text-kunyit" aria-hidden>●</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className={cn(
                    'label relative py-2 transition-opacity duration-200',
                    isActive ? 'opacity-100' : 'opacity-55 hover:opacity-100'
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span layoutId="nav-mark" className="absolute -bottom-0.5 left-0 h-px w-full bg-kunyit" />
                  ) : null}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="label rounded-panel bg-kunyit px-5 py-2.5 font-medium text-ink transition-colors hover:bg-[#F4B747]"
            >
              Hubungi saya
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="label -mr-2 px-2 py-3 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? 'Tutup' : 'Menu'}
          </button>
        </div>

        <div className={cn('relative h-px w-full', scrolled ? 'opacity-100' : 'opacity-0')}>
          <div className="absolute inset-0 bg-current opacity-15" />
          <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-kunyit" />
        </div>
      </header>

      {/* mobile */}
      <div id="mobile-nav" hidden={!menuOpen} className="fixed inset-0 z-40 bg-ink text-paper md:hidden">
        <div className="shell flex h-full flex-col justify-between pb-10 pt-24">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="flex items-baseline gap-5 border-b border-paper/12 py-5"
              >
                <span className="label w-6 shrink-0 text-kunyit">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-3xl font-medium tracking-tightest">{link.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="mt-8 rounded-panel bg-kunyit px-6 py-4 text-center font-mono text-xs uppercase tracking-label text-ink"
            >
              Hubungi saya
            </a>
          </nav>

          <div className="label space-y-2 opacity-55">
            <p>{SOCIAL_LINKS.email}</p>
            <p>Bandung · Jawa Barat · ID</p>
          </div>
        </div>
      </div>
    </>
  );
}
