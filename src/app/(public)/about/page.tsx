export const dynamic = "force-dynamic";

import ScrollReveal from '@/components/features/ScrollReveal';
import { getContent } from '@/lib/content';

export default function AboutPage() {
  const content = getContent();

  return (
    <>
      <section className="min-h-[50vh] flex items-end section container-content pt-32 md:pt-40">
        <ScrollReveal type="fadeIn" delay={0}>
          <p className="label text-text-muted mb-4 tracking-[0.25em]">{content.about.label}</p>
          <h1 className="section-title-large text-text leading-[0.95]">
            {content.about.heading.split('\n').map((line: string, i: number) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
        </ScrollReveal>
      </section>

      <section className="section container-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <ScrollReveal type="fadeUp" delay={0}>
              <p className="section-title text-text font-medium">The approach.</p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={200} type="fadeUp">
              <div className="body-large text-text-secondary space-y-5 leading-relaxed">
                {content.about.body.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <ScrollReveal type="scaleIn" delay={0}>
          <p className="label text-text-muted mb-5 md:mb-6 tracking-[0.25em]">Demo Reel</p>
          <div className="aspect-video bg-bg-secondary border border-border flex items-center justify-center">
            <p className="text-text-muted label text-center px-4 uppercase tracking-[0.25em]">[ Demo Reel — Coming Soon ]</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="section container-content border-t border-border pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <ScrollReveal type="fadeIn" delay={0}>
              <p className="label text-text-muted mb-3 tracking-[0.25em]">Equipment</p>
              <p className="section-title text-text">The tools.</p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={200} type="fadeUp">
              <div className="space-y-0">
                {content.about.equipment.map((item: string) => (
                  <p key={item} className="py-3 md:py-4 border-b border-border last:border-0 text-text-secondary text-base md:text-lg font-light">{item}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
