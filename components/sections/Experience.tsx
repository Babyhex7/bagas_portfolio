'use client';

import { Section, Reveal } from '@/components/ui/Section';
import { useLocale } from '@/components/providers/LocaleProvider';
import type { ExperienceEntry } from '@/types';

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export function Experience({ experience }: ExperienceProps) {
  const { locale, dict } = useLocale();
  const e = dict.experience;

  return (
    <Section
      id="experience"
      band="paper"
      index="03"
      label={e.label}
      meta={[`${experience.length} ${e.metaRoles}`]}
      title={e.title}
      lede={e.lede}
    >
      <ol className="space-y-0">
        {experience.map((role, i) => (
          <Reveal key={role.id} as="li" delay={Math.min(i * 0.04, 0.3)}>
            <div className="grid gap-3 border-t border-ink/15 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <div className="label opacity-45">
                {role.start} – {role.end ?? e.present}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold tracking-tightest">
                    {role.role[locale]}
                    <span className="opacity-50"> · {role.company}</span>
                  </h3>
                  <span className="label opacity-45">{role.employmentType[locale]}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {role.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm leading-relaxed opacity-70">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-nila" aria-hidden />
                      {h[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
