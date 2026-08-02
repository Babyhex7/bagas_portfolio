'use client';

import Image from 'next/image';
import { Section, Reveal } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { CV_FILE_URL } from '@/lib/constants';
import { useLocale } from '@/components/providers/LocaleProvider';

export function About() {
  const { dict } = useLocale();
  const p = dict.profile;

  return (
    <Section
      id="profile"
      band="paper"
      index="01"
      label={p.label}
      meta={p.meta}
      title={
        <>
          {p.titleLine1}
          <br />
          <span className="italic text-nila">{p.titleLine2}</span>
        </>
      }
      lede={p.lede}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <div className="lg:order-2">
          <Reveal className="plate relative aspect-[4/5] overflow-hidden rounded-panel border border-ink/12">
            <Image
              src="/assets/images/profile.jpg"
              alt="Bagas Adhi Nugraha"
              fill
              sizes="(min-width: 1024px) 22rem, 90vw"
              className="object-cover"
              priority
            />
          </Reveal>
          <ButtonLink
            href={CV_FILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            size="md"
            className="mt-6 w-full"
          >
            {p.cvButton}
          </ButtonLink>
        </div>

        <div className="lg:order-1">
          <div className="space-y-5 text-base leading-relaxed opacity-80 md:text-lg">
            <p>
              {p.paragraph1First} <strong className="text-nila">{p.paragraph1Bold}</strong>{' '}
              {p.paragraph1Mid} <strong className="text-nila">{p.paragraph1Bold2}</strong> {p.paragraph1Last}
            </p>
            <p>{p.paragraph2}</p>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {p.focus.map((f) => (
              <div key={f.title} className="border-t border-ink/15 pt-4">
                <dt className="font-display text-lg font-semibold">{f.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed opacity-65">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
