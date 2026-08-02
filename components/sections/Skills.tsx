'use client';

import { Section, Reveal } from '@/components/ui/Section';
import type { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const CATEGORY_LABEL: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  ai: 'AI / ML',
  database: 'Database',
  tools: 'Tools',
};

const ORDER: Skill['category'][] = ['frontend', 'backend', 'mobile', 'database', 'ai', 'tools'];

export function Skills({ skills }: SkillsProps) {
  return (
    <Section
      id="toolkit"
      band="paper"
      index="03"
      label="Toolkit"
      meta={[`${skills.length} tools`]}
      title="Yang dipakai untuk membangunnya."
      lede="Bukan daftar lengkap semua yang pernah dicoba — ini yang benar-benar dipakai berulang di produk-produk di atas."
    >
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {ORDER.map((category, catIndex) => {
          const items = skills.filter((s) => s.category === category);
          if (!items.length) return null;

          return (
            <Reveal key={category} delay={catIndex * 0.05}>
              <h3 className="label border-b border-ink/15 pb-3 opacity-55">
                {CATEGORY_LABEL[category]}
              </h3>
              <ul className="mt-4 space-y-3.5">
                {items.map((skill) => (
                  <li key={skill.id} className="flex items-center justify-between gap-4">
                    <span className="font-display text-base font-medium">{skill.name}</span>
                    <span className="h-px flex-1 bg-ink/10" aria-hidden />
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
