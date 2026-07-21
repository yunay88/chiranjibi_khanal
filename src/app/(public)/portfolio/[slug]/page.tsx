'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { projects as fallbackProjects } from '@/data/projects';
import ImageLightbox from '@/components/features/ImageLightbox';

interface Project {
  id: string; title: string; slug: string; category: string;
  year: number; location: string; description: string;
  coverImage: string; images: string[];
  credits?: { role: string; name: string }[]; awards?: string[];
}

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          const found = data.find((p: Project) => p.slug === slug);
          if (found) setProject(found);
        }
      })
      .catch(() => {
        const fallback = fallbackProjects.find(p => p.slug === slug);
        if (fallback) setProject(fallback as Project);
      });
  }, [slug]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-bg"><p className="text-text-muted text-sm">Loading...</p></div>;
  }

  const allImages = [project.coverImage, ...project.images.filter(Boolean)];
  const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };

  return (
    <>
      <section className="container-wide pt-32 md:pt-40">
        <Link href="/" className="label text-text-muted hover:text-text transition-colors duration-300 tracking-[0.2em]">← Back to Work</Link>
      </section>

      <section className="mt-6 md:mt-8 mb-12 md:mb-24 container-wide">
        <button onClick={() => openLightbox(0)} className="w-full aspect-[16/9] relative bg-bg-secondary border border-border overflow-hidden cursor-pointer group text-left">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover transition-all duration-700 group-hover:scale-105" priority sizes="100vw" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] text-text/60 uppercase tracking-[0.15em] bg-bg/60 px-3 py-1.5 backdrop-blur-sm">Click to view</span>
          </div>
        </button>
      </section>

      <section className="pb-16 md:pb-32 container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="label text-text-muted mb-4 capitalize">{project.category} — {project.year}</p>
            <h1 className="section-title-large text-text capitalize mb-8">{project.title}</h1>
            <p className="body-large text-text-secondary">{project.description}</p>
          </div>
          <div>
            <div className="space-y-8">
              <div><p className="label text-text-muted mb-2">Category</p><p className="text-text text-lg capitalize">{project.category}</p></div>
              <div><p className="label text-text-muted mb-2">Year</p><p className="text-text text-lg">{project.year}</p></div>
              <div><p className="label text-text-muted mb-2">Location</p><p className="text-text text-lg">{project.location}</p></div>
              {project.credits && <div><p className="label text-text-muted mb-2">Credits</p><div className="space-y-2">{project.credits.map(c => <p key={c.role} className="text-text-secondary text-sm">{c.role}: {c.name}</p>)}</div></div>}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.images.map((img, i) => (
            <button key={i} onClick={() => openLightbox(i + 1)} className="w-full relative bg-bg-secondary border border-border overflow-hidden cursor-pointer group text-left"
              style={{ aspectRatio: i % 3 === 0 ? '16/10' : '4/5', minHeight: '220px' }}>
              <Image src={img} alt={`${project.title} - ${i + 1}`} fill className="object-cover transition-all duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </button>
          ))}
        </div>
      </section>

      {project.credits && (
        <section className="border-t border-border py-12 md:py-20 container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div><p className="label text-text-muted mb-6">Credits</p><div className="space-y-3 text-text-secondary text-sm">{project.credits.map(c => <p key={c.role}>{c.role}: {c.name}</p>)}</div></div>
            <div><p className="label text-text-muted mb-6">Awards</p><p className="text-text-muted text-sm">N/A</p></div>
          </div>
        </section>
      )}

      <section className="border-t border-border container-wide">
        <Link href="/" className="group flex items-center justify-between py-8 md:py-16">
          <span className="text-text/40 label tracking-[0.2em]">All projects</span>
          <span className="section-title text-text/50 group-hover:text-text transition-colors duration-300 text-lg md:text-[42px]">Back to all work →</span>
        </Link>
      </section>

      <ImageLightbox images={allImages} currentIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} title={project.title} />
    </>
  );
}
