'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Project } from '@/types';
import type { Locale } from '@/lib/i18n/types';
import { useLocale } from '@/components/providers/LocaleProvider';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const CATEGORY_LABEL_KEY: Record<Project['category'], 'platform' | 'corporate' | 'commerce' | 'health' | 'education'> = {
  platform: 'platform',
  corporate: 'corporate',
  commerce: 'commerce',
  health: 'health',
  education: 'education',
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale, dict } = useLocale();
  const w = dict.work;
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-panel border border-paper/15 bg-ink-raised text-paper"
      >
        <div className="flex items-start justify-between gap-4 border-b border-paper/12 p-5">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tightest">{project.name}</h3>
            <p className="label mt-1 opacity-45">
              {project.client} · {project.year}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={w.close}
            className="rounded-full border border-paper/20 p-2 opacity-70 transition-opacity hover:opacity-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative aspect-[16/10] shrink-0 bg-ink">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${project.name} — ${index + 1}/${images.length}`}
            fill
            sizes="(min-width: 768px) 56rem, 100vw"
            className="object-cover object-top"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/70 p-2 backdrop-blur-sm transition-colors hover:bg-ink"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/70 p-2 backdrop-blur-sm transition-colors hover:bg-ink"
              >
                <ChevronRight size={20} />
              </button>
              <span className="label absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 backdrop-blur-sm">
                {index + 1} / {images.length} {w.screenshots}
              </span>
            </>
          )}
        </div>

        <div className="overflow-y-auto p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label rounded-full border border-paper/20 px-2.5 py-1 opacity-70">
              {w.filters[CATEGORY_LABEL_KEY[project.category]]}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="label rounded-full border border-paper/12 px-2.5 py-1 opacity-50">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-measure text-base leading-relaxed opacity-75">
            {project.description[locale as Locale]}
          </p>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label mt-6 inline-flex items-center gap-2 rounded-panel bg-kunyit px-5 py-3 font-medium text-ink transition-colors hover:bg-[#F4B747]"
          >
            {w.visitSite} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
