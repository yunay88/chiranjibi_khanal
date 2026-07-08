import Hero from '@/components/features/Hero';
import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';
import PortfolioGrid from '@/components/features/PortfolioGrid';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Intro Statement */}
      <section className="section container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionTitle label="Introduction" delay={0}>
              Creating stories<br />
              through movement,<br />
              light,<br />
              and emotion.
            </SectionTitle>
          </div>
          <div>
            <ScrollReveal delay={300}>
              <p className="body-large text-text-secondary" style={{ maxWidth: '650px' }}>
                Chiranjibi Khanal is a photographer and filmmaker based in Kathmandu, Nepal,
                working at the intersection of documentary honesty and cinematic composition.
                Every frame is approached with intention — light, texture, and human connection
                at the core. Available worldwide.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Break */}
      <section className="relative w-full" style={{ height: '100vh' }}>
        <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center">
          <p className="text-text-muted label">[ Featured Reel — Coming Soon ]</p>
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: 'scale(1.04)',
            transition: 'transform 1.5s cubic-bezier(.16,1,.3,1)',
          }}
        />
      </section>

      {/* Selected Work */}
      <section className="section-large">
        <div className="container-wide mb-16">
          <SectionTitle label="Selected Work" align="center" delay={0}>
            Featured Projects
          </SectionTitle>
        </div>
        <PortfolioGrid />
      </section>

      {/* Cinematic Quote */}
      <section className="section-large container-content">
        <ScrollReveal>
          <blockquote className="text-center max-w-4xl mx-auto">
            <p
              className="text-text font-medium leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(42px, 5.5vw, 90px)' }}
            >
              &ldquo;Every frame<br />
              should feel<br />
              timeless.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Services */}
      <section className="section bg-bg-secondary">
        <div className="container-content">
          <SectionTitle label="Services" delay={0}>
            What I do.
          </SectionTitle>

          <div className="mt-16 md:mt-24 space-y-0">
            {[
              { title: 'Film', desc: 'Cinematic films for brands, documentaries, and music videos.' },
              { title: 'Commercial', desc: 'High-production commercial content for agencies and brands.' },
              { title: 'Wedding', desc: 'Authentic, emotionally-driven wedding films and photography.' },
              { title: 'Portrait', desc: 'Editorial portraits and personal branding sessions.' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group flex items-center justify-between py-8 md:py-10 border-t border-border">
                  <p className="text-text" style={{ fontSize: 'clamp(32px, 4.5vw, 80px)', fontWeight: 500, lineHeight: 1.1 }}>
                    {s.title}
                  </p>
                  <div className="hidden md:block max-w-[400px]">
                    <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
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
        <SectionTitle label="Clients" delay={0}>
          Trusted by.
        </SectionTitle>
        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-x-16 gap-y-6 opacity-40 hover:opacity-70 transition-opacity duration-500">
            {['Brand One', 'Company Name', 'Creative Agency', 'Studio', 'Production House', 'Label'].map((c) => (
              <span key={c} className="text-text text-lg font-light">{c}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* About Preview */}
      <section className="section container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionTitle label="About" delay={0}>
              Cinematic<br />
              storytelling<br />
              from Nepal.
            </SectionTitle>
          </div>
          <div>
            <ScrollReveal delay={200}>
              <div className="body-large text-text-secondary space-y-6" style={{ maxWidth: '620px' }}>
                <p>
                  Based in Kathmandu, Chiranjibi Khanal brings both technical precision
                  and artistic intuition to every project — from intimate portraits to
                  large-scale commercial productions.
                </p>
                <p>
                  His work blends documentary honesty with cinematic composition,
                  creating images and films that feel both timeless and immediate.
                </p>
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2 text-text mt-4 text-[15px] font-medium hover:opacity-70 transition-opacity duration-300"
                >
                  More about me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section container-content border-t border-border pt-20">
        <SectionTitle label="Awards & Recognition" delay={0}>
          Recognized.
        </SectionTitle>
        <ScrollReveal delay={200}>
          <div className="mt-12 space-y-6">
            {[
              { year: '2025', title: 'International Photography Awards', detail: 'Portrait — Honorable Mention' },
              { year: '2024', title: 'Nepal Film Festival', detail: 'Best Short Documentary — Nominee' },
            ].map((a, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border last:border-0">
                <span className="text-text-muted text-sm font-mono w-20">{a.year}</span>
                <span className="text-text flex-1">{a.title}</span>
                <span className="text-text-secondary text-sm">{a.detail}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
