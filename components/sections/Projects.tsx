'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Section, Reveal } from '@/components/ui/Section';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { useLocale } from '@/components/providers/LocaleProvider';
import type { Locale } from '@/lib/i18n/types';
import type { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

type CategoryFilter = 'all' | Project['category'];

const FILTER_ORDER: CategoryFilter[] = ['all', 'platform', 'corporate', 'commerce', 'health', 'education'];

function ProjectCard({
  project,
  index,
  locale,
  screenshotsLabel,
  onOpen,
}: {
  project: Project;
  index: number;
  locale: Locale;
  screenshotsLabel: string;
  onOpen: (project: Project) => void;
}) {
  const images = project.images && project.images.length > 1 ? project.images : null;
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (!images || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setFrame((f) => (f + 1) % images.length);
    }, 850);
  }, [images]);

  const stopCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setFrame(0);
  }, []);

  return (
    <Reveal delay={(index % 3) * 0.06} className="group">
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpen(project);
        }}
        onMouseEnter={startCycle}
        onMouseLeave={stopCycle}
        onFocus={startCycle}
        onBlur={stopCycle}
        className="block cursor-pointer text-left"
      >
        <div className="plate relative aspect-[16/10] overflow-hidden rounded-panel border border-paper/12 bg-ink-raised">
          {/* faux browser chrome */}
          <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 border-b border-paper/10 bg-ink px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          </div>
          <Image
            src={images ? images[frame] : project.image}
            alt={`${project.name} screenshot ${frame + 1}`}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            className="object-cover object-top pt-6"
          />

          {images && (
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${i === frame ? 'w-4 bg-kunyit' : 'w-1 bg-paper/40'}`}
                />
              ))}
            </div>
          )}

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Visit ${project.name}`}
            className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 opacity-0 backdrop-blur-sm transition-opacity hover:bg-ink group-hover:opacity-100"
          >
            <ArrowUpRight size={15} />
          </a>

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="label m-4">
              {images ? `${images.length} ${screenshotsLabel}` : project.name}
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
        </div>
        <p className="mt-3 text-sm leading-relaxed opacity-60">{project.description[locale]}</p>
      </div>
    </Reveal>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const { locale, dict } = useLocale();
  const w = dict.work;
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  return (
    <Section
      id="work"
      band="ink"
      index="02"
      label={w.label}
      meta={[`${projects.length} ${w.metaProducts}`, `${new Set(projects.map((p) => p.client)).size} ${w.metaClients}`]}
      title={w.title}
      lede={w.lede}
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTER_ORDER.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`label rounded-full border px-4 py-2 transition-colors ${
              filter === f
                ? 'border-kunyit bg-kunyit text-ink'
                : 'border-paper/20 opacity-60 hover:opacity-100'
            }`}
          >
            {w.filters[f]}
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            locale={locale}
            screenshotsLabel={w.screenshots}
            onOpen={setOpenProject}
          />
        ))}
      </div>

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </Section>
  );
}
