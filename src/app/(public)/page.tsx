import Hero from '@/components/features/Hero';
import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';
import PortfolioGrid from '@/components/features/PortfolioGrid';
import { getContent } from '@/lib/content';

export default function HomePage() {
  const content = getContent();
  const hero = content.hero;
  const intro = content.intro;
  const servicesData = content.services;
  const clientsData = content.clients;
  const aboutData = content.about;

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        videoUrl={hero.videoUrl}
        posterUrl={hero.posterUrl}
      />

      {/* Intro */}
      <section className="section container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionTitle label={intro.label} delay={0}>
              {intro.heading.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
            </SectionTitle>
          </div>
          <div>
            <ScrollReveal delay={300}>
              <p className="body-large text-text-secondary" style={{ maxWidth: '650px' }}>{intro.body}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Break */}
      <section className="relative w-full" style={{ height: '100vh' }}>
        <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center">
          <p className="text-text-muted label">[ Featured Reel — Coming Soon ]</p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-large">
        <div className="container-wide mb-16">
          <SectionTitle label="Selected Work" align="center" delay={0}>Featured Projects</SectionTitle>
        </div>
        <PortfolioGrid />
      </section>

      {/* Services */}
      <section className="section bg-bg-secondary">
        <div className="container-content">
          <SectionTitle label={servicesData.label} delay={0}>{servicesData.heading}</SectionTitle>
          <div className="mt-16 md:mt-24 space-y-0">
            {servicesData.items.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group flex items-center justify-between py-8 md:py-10 border-t border-border">
                  <p className="text-text" style={{ fontSize: 'clamp(32px, 4.5vw, 80px)', fontWeight: 500, lineHeight: 1.1 }}>
                    {s.title}
                  </p>
                  <div className="hidden md:block max-w-[400px]">
                    <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <span className="text-text-muted group-hover:text-text transition-all duration-300 text-2xl">→</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section container-wide">
        <SectionTitle label={clientsData.label} delay={0}>{clientsData.heading}</SectionTitle>
        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-x-16 gap-y-6 opacity-40 hover:opacity-70 transition-opacity duration-500">
            {clientsData.names.map((c) => (
              <span key={c} className="text-text text-lg font-light">{c}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* About Preview */}
      <section className="section container-content border-t border-border pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionTitle label={aboutData.label} delay={0}>
              {aboutData.heading.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
            </SectionTitle>
          </div>
          <div>
            <ScrollReveal delay={200}>
              <div className="body-large text-text-secondary space-y-6" style={{ maxWidth: '620px' }}>
                {aboutData.body.map((p, i) => <p key={i}>{p}</p>)}
                <a href="/about" className="group inline-flex items-center gap-2 text-text mt-4 text-[15px] font-medium hover:opacity-70 transition-opacity duration-300">
                  More about me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
