'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { projects as fallback } from '@/data/projects';

export default function FilmsPage() {
  const [films, setFilms] = useState(fallback.filter(p => p.category === 'film' || p.category === 'commercial'));

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setFilms(data.filter((p: { category: string }) => p.category === 'film' || p.category === 'commercial'));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="min-h-screen pt-36 section container-wide">
      <p className="label text-text-muted mb-4 tracking-[0.25em]">Films</p>
      <h1 className="section-title-large text-text mb-12 md:mb-20">Moving images.</h1>

      <div className="space-y-16 md:space-y-24">
        {films.map((film, i) => (
          <Link key={film.id} href={`/portfolio/${film.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={i % 2 === 0 ? '' : 'md:order-2'}>
              <div className="aspect-[16/9] relative bg-bg-secondary border border-border overflow-hidden">
                <Image src={film.coverImage} alt={film.title} fill className="object-cover transition-all duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className={i % 2 === 0 ? '' : 'md:order-1'}>
              <p className="label text-text-muted mb-3">{film.category === 'commercial' ? 'Commercial' : 'Film'} — {film.year}</p>
              <h2 className="section-title text-text group-hover:text-text-secondary transition-colors duration-300 mb-4">{film.title}</h2>
              <p className="body-large text-text-secondary">{film.description}</p>
              <span className="inline-flex items-center gap-2 text-text/60 group-hover:text-text transition-all duration-300 text-[15px] mt-6">
                View project <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
