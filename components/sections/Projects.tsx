'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/types';
import { useState } from 'react';

interface ProjectsProps {
  projects: Project[];
}

// Project Card Component dengan carousel sendiri
function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Mock images untuk carousel (nanti bisa diganti dengan array gambar real)
  const images = [
    project.image,
    project.image, // Duplicate untuk demo, nanti ganti dengan screenshot berbeda
    project.image,
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        {/* Project Image Carousel - LARGER */}
        <div className="relative group">
          {/* Main Image Container - Increased Height */}
          <div className="relative h-72 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-pink/20 rounded-t-lg overflow-hidden">
            {/* Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cosmic-purple/30 to-cosmic-pink/30 flex items-center justify-center">
                  <Github className="w-12 h-12 text-white/50" />
                </div>
                <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                <p className="text-gray-400 text-xs">Screenshot {currentImageIndex + 1}/{images.length}</p>
              </div>
            </div>

            {/* Navigation Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? 'w-6 bg-cosmic-purple'
                      : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              project.category === 'ai' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : project.category === 'mobile'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-cosmic-purple/20 text-cosmic-purple border border-cosmic-purple/30'
            }`}>
              {project.category.toUpperCase()}
            </span>
          </div>

          {/* Project Info - Fixed Height */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[4rem]">
            {project.description}
          </p>

          {/* Tech Stack - Fixed Height */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[4.5rem]">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-space-light text-gray-300 border border-cosmic-blue/30 h-fit"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2 py-1 rounded bg-space-light text-gray-300 border border-cosmic-blue/30">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links - Always at Bottom */}
          <div className="mt-auto">
            {project.githubUrl ? (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button size="sm" variant="primary" className="w-full group">
                  <Github size={16} className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Code
                </Button>
              </a>
            ) : (
              <Button size="sm" variant="outline" className="w-full" disabled>
                <Github size={16} className="mr-2" />
                Private Repository
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects({ projects }: ProjectsProps) {

  return (
    <section id="projects" className="py-20 px-4 bg-space-dark">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Babyhex7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="group">
              <Github size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              View More on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
