'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Section, Reveal } from '@/components/ui/Section';
import type { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

const CATEGORY_LABEL: Record<Project['category'], string> = {
  platform: 'Platform',
  corporate: 'Korporat',
  commerce: 'E-Commerce',
  health: 'Kesehatan',
  education: 'Edukasi',
};

const FILTERS: Array<{ id: 'all' | Project['category']; label: string }> = [
  { id: 'all', label: 'Semua' },
  { id: 'platform', label: 'Platform' },
  { id: 'corporate', label: 'Korporat' },
  { id: 'commerce', label: 'E-Commerce' },
  { id: 'health', label: 'Kesehatan' },
  { id: 'education', label: 'Edukasi' },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="group">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="plate relative aspect-[16/10] overflow-hidden rounded-panel border border-paper/12 bg-ink-raised">
          {/* faux browser chrome */}
          <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 border-b border-paper/10 bg-ink px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          </div>
          <Image
            src={project.image}
            alt={`Tangkapan layar ${project.name}`}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            className="object-cover object-top pt-6"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="label m-4 inline-flex items-center gap-1.5 text-paper">
              Kunjungi situs <ArrowUpRight size={13} />
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tightest">{project.name}</h3>
            <p className="label mt-1 opacity-45">
              {project.client} · {project.year}
            </p>
          </div>
          <span className="label mt-1 shrink-0 rounded-full border border-paper/20 px-2.5 py-1 opacity-60">
            {CATEGORY_LABEL[project.category]}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed opacity-60">{project.description}</p>
      </a>
    </Reveal>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  return (
    <Section
      id="work"
      band="ink"
      index="02"
      label="Work"
      meta={[`${projects.length} produk`, `${new Set(projects.map((p) => p.client)).size} klien`]}
      title="Produk yang dipakai orang sungguhan."
      lede="Bukan proyek latihan — semua yang tampil di bawah sudah live dan dipakai. Klik kartu untuk membuka situsnya langsung."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`label rounded-full border px-4 py-2 transition-colors ${
              filter === f.id
                ? 'border-kunyit bg-kunyit text-ink'
                : 'border-paper/20 opacity-60 hover:opacity-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
