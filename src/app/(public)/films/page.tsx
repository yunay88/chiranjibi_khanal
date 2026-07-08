import { projects } from '@/data/projects';
import Link from 'next/link';
import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';

const films = projects.filter((p) => p.category === 'film' || p.category === 'commercial');

export default function FilmsPage() {
  return (
    <section className="min-h-screen pt-36 section container-wide">
      <SectionTitle as="h1" label="Films" delay={0}>
        Moving images.
      </SectionTitle>

      <div className="mt-20 md:mt-32 space-y-16 md:space-y-24">
        {films.map((film, i) => (
          <ScrollReveal key={film.id} delay={i * 100}>
            <Link
              href={`/portfolio/${film.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div className={`${i % 2 === 0 ? '' : 'md:order-2'}`}>
                <div className="aspect-[16/9] bg-bg-secondary border border-border flex items-center justify-center">
                  <p className="text-text-muted text-xs label">{film.title}</p>
                </div>
              </div>
              <div className={i % 2 === 0 ? '' : 'md:order-1'}>
                <p className="label text-text-muted mb-3">
                  {film.category === 'commercial' ? 'Commercial' : 'Film'} — {film.year}
                </p>
                <h2 className="section-title text-text group-hover:text-text-secondary transition-colors duration-300 mb-4">
                  {film.title}
                </h2>
                <p className="body-large text-text-secondary">{film.description}</p>
                <span className="inline-flex items-center gap-2 text-text/60 group-hover:text-text transition-all duration-300 text-[15px] mt-6">
                  View project <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
