'use client';

import { Section, Reveal } from '@/components/ui/Section';
import type { Achievement } from '@/types';

interface AchievementsProps {
  achievements: Achievement[];
}

const TYPE_LABEL: Record<Achievement['type'], string> = {
  hki: 'HKI',
  speaking: 'Speaking',
  award: 'Award',
  certification: 'Sertifikasi',
};

export function Achievements({ achievements }: AchievementsProps) {
  const counts = achievements.reduce<Record<string, number>>((acc, a) => {
    acc[a.type] = (acc[a.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <Section
      id="record"
      band="ink"
      index="04"
      label="Record"
      meta={[`${achievements.length} entri`]}
      title="Yang tercatat di luar layar kode."
      lede="HKI, kompetisi, dan panggung bicara — bagian dari cara saya belajar sambil membangun."
    >
      <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3">
        {Object.entries(counts).map(([type, count]) => (
          <p key={type} className="label opacity-45">
            <span className="text-kunyit">{count}</span>{' '}
            {TYPE_LABEL[type as Achievement['type']]}
          </p>
        ))}
      </div>

      <ol className="divide-y divide-paper/12 border-y border-paper/12">
        {achievements.map((a, i) => (
          <Reveal key={a.id} as="li" delay={Math.min(i * 0.04, 0.3)}>
            <div className="grid gap-2 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-6">
              <span className="label opacity-35">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tightest sm:text-xl">
                  {a.title}
                </h3>
                <p className="mt-1.5 max-w-measure text-sm leading-relaxed opacity-60">
                  {a.description}
                </p>
              </div>
              <div className="flex gap-3 sm:flex-col sm:items-end sm:gap-1.5">
                <span className="label rounded-full border border-paper/20 px-2.5 py-1 opacity-70">
                  {TYPE_LABEL[a.type]}
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
