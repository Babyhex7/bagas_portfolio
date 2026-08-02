'use client';

import { Section, Reveal } from '@/components/ui/Section';
import { useLocale } from '@/components/providers/LocaleProvider';
import type { Achievement } from '@/types';

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const { locale, dict } = useLocale();
  const r = dict.record;

  const counts = achievements.reduce<Record<string, number>>((acc, a) => {
    acc[a.type] = (acc[a.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <Section
      id="record"
      band="paper"
      index="05"
      label={r.label}
      meta={[`${achievements.length} ${r.metaEntries}`]}
      title={r.title}
      lede={r.lede}
    >
      <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3">
        {Object.entries(counts).map(([type, count]) => (
          <p key={type} className="label opacity-45">
            <span className="text-nila">{count}</span>{' '}
            {r.types[type as Achievement['type']]}
          </p>
        ))}
      </div>

      <ol className="divide-y divide-ink/12 border-y border-ink/12">
        {achievements.map((a, i) => (
          <Reveal key={a.id} as="li" delay={Math.min(i * 0.04, 0.3)}>
            <div className="grid gap-2 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-6">
              <span className="label opacity-35">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tightest sm:text-xl">
                  {a.title[locale]}
                </h3>
                <p className="mt-1.5 max-w-measure text-sm leading-relaxed opacity-60">
                  {a.description[locale]}
                </p>
              </div>
              <div className="flex gap-3 sm:flex-col sm:items-end sm:gap-1.5">
                <span className="label rounded-full border border-ink/20 px-2.5 py-1 opacity-70">
                  {r.types[a.type]}
                </span>
                <span className="label opacity-45">{a.date}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
