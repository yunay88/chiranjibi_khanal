import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ScrollReveal from '@/components/features/ScrollReveal';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      {/* Back */}
      <section className="pt-28 md:pt-32 container-wide">
        <Link href="/" className="label text-text-muted hover:text-text transition-colors duration-300">
          ← Back to Work
        </Link>
      </section>

      {/* Hero Image */}
      <section className="mt-8 mb-16 md:mb-24 container-wide">
        <ScrollReveal>
          <div className="aspect-[16/9] bg-bg-secondary border border-border flex items-center justify-center">
            <p className="text-text-muted label">[ {project.title} ]</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Project Info */}
      <section className="pb-24 md:pb-32 container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <ScrollReveal>
              <h1 className="section-title-large text-text capitalize mb-8">{project.title}</h1>
              <p className="body-large text-text-secondary">{project.description}</p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={100}>
              <div className="space-y-8">
                <div>
                  <p className="label text-text-muted mb-2">Category</p>
                  <p className="text-text text-lg capitalize">{project.category}</p>
                </div>
                <div>
                  <p className="label text-text-muted mb-2">Year</p>
                  <p className="text-text text-lg">{project.year}</p>
                </div>
                <div>
                  <p className="label text-text-muted mb-2">Location</p>
                  <p className="text-text text-lg">{project.location}</p>
                </div>
                {project.credits && (
                  <div>
                    <p className="label text-text-muted mb-2">Credits</p>
                    <div className="space-y-1">
                      {project.credits.map((credit) => (
                        <p key={credit.role} className="text-text-secondary text-sm">
                          {credit.role}: {credit.name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.images.map((_, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className="bg-bg-secondary border border-border flex items-center justify-center"
                style={{ aspectRatio: i % 3 === 0 ? '16/9' : i % 3 === 1 ? '4/5' : '16/9' }}
              >
                <p className="text-text-muted text-xs label">[ Image {i + 1} ]</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Credits / Awards */}
      <section className="border-t border-border py-16 md:py-20 container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="label text-text-muted mb-6">Credits</p>
            <div className="space-y-3 text-text-secondary text-sm">
              {project.credits?.map((c) => (
                <p key={c.role}>
                  {c.role}: {c.name}
                </p>
              )) || <p>Credits coming soon.</p>}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="label text-text-muted mb-6">Awards</p>
            {project.awards?.length ? (
              <div className="space-y-2">
                {project.awards.map((a, i) => (
                  <p key={i} className="text-text-secondary text-sm">{a}</p>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm">N/A</p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Next Project */}
      <section className="border-t border-border container-wide">
        <Link
          href="/"
          className="group flex items-center justify-between py-12 md:py-16"
        >
          <span className="text-text/50 label">Next</span>
          <span className="section-title text-text/70 group-hover:text-text transition-colors duration-300">
            Back to all work →
          </span>
        </Link>
      </section>
    </>
  );
}
