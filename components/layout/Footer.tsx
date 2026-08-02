'use client';

import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';
import { useLocale } from '@/components/providers/LocaleProvider';

const links = [
  { href: 'https://github.com/Babyhex7', label: 'GitHub' },
  { href: 'https://linkedin.com/in/bagasadhinugraha', label: 'LinkedIn' },
  { href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  { href: `https://wa.me/${SOCIAL_LINKS.whatsappNumber}`, label: 'WhatsApp' },
];

export function Footer() {
  const { dict } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="band band-ink border-t border-paper/12 py-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="label opacity-45">{SITE_CONFIG.author.location}</p>
            <p className="mt-3 max-w-md font-display text-2xl font-medium leading-snug tracking-tightest">
              {dict.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="label opacity-55 transition-opacity hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <hr className="rule my-8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="label opacity-40" suppressHydrationWarning>
            © {year} {SITE_CONFIG.author.name}
          </p>
          <p className="label opacity-40">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
