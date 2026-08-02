'use client';

import { Section, Reveal } from '@/components/ui/Section';
import { useLocale } from '@/components/providers/LocaleProvider';
import type { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const ORDER: Skill['category'][] = ['frontend', 'backend', 'mobile', 'database', 'ai', 'tools'];

export function Skills({ skills }: SkillsProps) {
  const { dict } = useLocale();
  const t = dict.toolkit;

  return (
    <Section
      id="toolkit"
      band="ink"
      index="04"
      label={t.label}
      meta={[`${skills.length} ${t.metaTools}`]}
      title={t.title}
      lede={t.lede}
    >
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {ORDER.map((category, catIndex) => {
          const items = skills.filter((s) => s.category === category);
          if (!items.length) return null;

          return (
            <Reveal key={category} delay={catIndex * 0.05}>
              <h3 className="label border-b border-paper/15 pb-3 opacity-55">
                {t.categories[category]}
              </h3>
              <ul className="mt-4 space-y-3.5">
                {items.map((skill) => (
                  <li key={skill.id} className="flex items-center justify-between gap-4">
                    <span className="font-display text-base font-medium">{skill.name}</span>
                    <span className="h-px flex-1 bg-paper/10" aria-hidden />
                    <span className="label tabular-nums opacity-45">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
