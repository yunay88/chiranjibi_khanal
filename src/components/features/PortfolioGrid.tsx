'use client';

import Link from 'next/link';
import { featuredProjects } from '@/data/projects';

export default function PortfolioGrid() {
  return (
    <div className="grid gap-[2px] md:gap-8"
      style={{
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: 'auto',
      }}
    >
      {featuredProjects.map((project, i) => {
        let colSpan = 'span 2';
        let rowSpan = 'span 1';
        let aspect = '16/10';

        if (i === 0) { colSpan = 'span 2'; rowSpan = 'span 1'; aspect = '16/9'; }
        else if (i === 1) { colSpan = 'span 2'; rowSpan = 'span 1'; aspect = '4/5'; }
        else if (i === 2) { colSpan = 'span 4'; rowSpan = 'span 1'; aspect = '21/9'; }
        else if (i === 3) { colSpan = 'span 2'; rowSpan = 'span 1'; aspect = '4/5'; }
        else if (i === 4) { colSpan = 'span 2'; rowSpan = 'span 1'; aspect = '16/9'; }
        else { colSpan = 'span 4'; rowSpan = 'span 1'; aspect = '21/9'; }

        return (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative overflow-hidden bg-bg-secondary"
            data-cursor="view"
            style={{
              gridColumn: colSpan,
              gridRow: rowSpan,
              aspectRatio: aspect,
            }}
          >
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-surface flex items-center justify-center">
              <span className="text-text-muted text-sm label">{project.title}</span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/15 transition-all duration-500" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <h3 className="text-text text-lg md:text-xl font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {project.title}
              </h3>
              <p className="label text-text-muted mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                {project.category === 'film' ? 'Film' :
                 project.category === 'photography' ? 'Photography' :
                 project.category === 'commercial' ? 'Commercial' : project.category} — {project.year}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
