export const dynamic = "force-dynamic";

import ScrollReveal from '@/components/features/ScrollReveal';
import { getContent } from '@/lib/content';

export default function ServicesPage() {
  const content = getContent();

  return (
    <>
      <section className="min-h-[40vh] flex items-end container-content pt-32 md:pt-40">
        <ScrollReveal type="fadeIn" delay={0}>
          <p className="label text-text-muted mb-4 tracking-[0.25em]">{content.services.label}</p>
          <h1 className="section-title-large text-text leading-[0.95]">{content.services.heading}</h1>
        </ScrollReveal>
      </section>

      <section className="section container-wide pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
          <div className="hidden md:block md:col-span-1" />
          <div className="md:col-span-10 space-y-0">
            {content.services.items.map((s: { title: string; description: string }, i: number) => (
              <ScrollReveal key={s.title} delay={i * 80} type={i % 2 === 0 ? 'fadeUp' : 'fadeIn'}>
                <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-t border-border cursor-default">
                  <p className="text-text tracking-tight" style={{ fontSize: 'clamp(32px, 5vw, 80px)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                    {s.title}
                  </p>
                  <div className="hidden md:block max-w-[360px] ml-6">
                    <p className="text-text-secondary text-sm leading-relaxed tracking-wide">{s.description}</p>
                  </div>
                  <span className="hidden md:block text-text-muted group-hover:text-text transition-all duration-300 text-xl ml-4">→</span>
                </div>
                <div className="md:hidden pb-6 -mt-2">
                  <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="hidden md:block md:col-span-1" />
        </div>
      </section>
    </>
  );
}
