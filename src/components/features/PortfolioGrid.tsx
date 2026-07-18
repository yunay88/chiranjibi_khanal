'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { featuredProjects as fallbackFeatured } from '@/data/projects';

export default function PortfolioGrid() {
  const [projects, setProjects] = useState(fallbackFeatured);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data.filter((p: { featured: boolean }) => p.featured).slice(0, 4));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="container-wide">
      {/* Desktop: 2-column uniform grid */}
      <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
        {projects.map(project => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative overflow-hidden bg-bg-secondary"
            data-cursor="view"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 bg-gradient-to-t from-bg/80 via-bg/40 to-transparent">
              <h3 className="text-text text-base md:text-lg font-medium leading-tight">{project.title}</h3>
              <p className="text-text-muted text-xs uppercase tracking-[0.15em] mt-1.5">
                {project.category === 'film' ? 'Film' :
                 project.category === 'photography' ? 'Photography' :
                 project.category === 'commercial' ? 'Commercial' : project.category} — {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: 2-column */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {projects.map(project => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative overflow-hidden bg-bg-secondary"
            data-cursor="view"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 z-10 bg-gradient-to-t from-bg/80 via-bg/30 to-transparent">
              <h3 className="text-text text-sm font-medium leading-tight">{project.title}</h3>
              <p className="text-text-muted text-[10px] uppercase tracking-[0.1em] mt-1">{project.category} — {project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
