import { projects } from '@/data/projects';
import Link from 'next/link';
import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';

const photos = projects.filter((p) => p.category === 'photography');

export default function PhotographyPage() {
  return (
    <section className="min-h-screen pt-36 section container-wide">
      <SectionTitle as="h1" label="Photography" delay={0}>
        Still frames.
      </SectionTitle>

      <div className="mt-20 md:mt-32 editor-grid">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.id} delay={i * 80}>
              <Link
                href={`/portfolio/${photo.slug}`}
                className="group block relative overflow-hidden bg-bg-secondary"
                data-cursor="view"
                style={{
                  aspectRatio: i === 0 ? '16/9' : i === 1 ? '4/5' : i === 2 ? '4/5' : '16/9',
                  gridColumn: i === 0 ? 'span 2' : i === 3 ? 'span 2' : 'span 1',
                }}
              >
                <div className="absolute inset-0 bg-surface flex items-center justify-center">
                  <p className="text-text-muted text-xs label">{photo.title}</p>
                </div>
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/15 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <p className="text-text text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {photo.title}
                  </p>
                  <p className="label text-text-muted text-[10px] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {photo.location} — {photo.year}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
