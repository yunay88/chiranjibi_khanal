'use client';

import Link from 'next/link';


// Placeholder projects — will come from Supabase later
const projects = [
  {
    id: '1',
    title: 'Sunrise Over Himalayas',
    slug: 'sunrise-over-himalayas',
    category: 'Photography',
    coverImage: '/placeholder-1.jpg',
  },
  {
    id: '2',
    title: 'Kathmandu Wedding',
    slug: 'kathmandu-wedding',
    category: 'Videography',
    coverImage: '/placeholder-2.jpg',
  },
  {
    id: '3',
    title: 'Wilderness Portrait',
    slug: 'wilderness-portrait',
    category: 'Photography',
    coverImage: '/placeholder-3.jpg',
  },
  {
    id: '4',
    title: 'Commercial Showreel',
    slug: 'commercial-showreel',
    category: 'Both',
    coverImage: '/placeholder-4.jpg',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group relative bg-bg overflow-hidden"
          >
            {/* Cover Image Placeholder */}
            <div className="aspect-[16/10] bg-surface relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-hover flex items-center justify-center">
                {/* Replace with actual <Image> when images exist */}
                <div className="text-text-muted text-sm">[ {project.title} ]</div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-all duration-500" />
            </div>

            {/* Info */}
            <div className="py-5 px-0">
              <h3 className="font-serif text-lg md:text-xl text-text group-hover:opacity-70 transition-opacity">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted uppercase tracking-widest mt-1">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
