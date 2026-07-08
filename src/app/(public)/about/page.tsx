import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';

export default function AboutPage() {
  return (
    <>
      {/* Hero Heading */}
      <section className="min-h-screen flex items-end section container-content pt-36">
        <SectionTitle as="h1" label="About" delay={0}>
          Cinematic<br />
          storytelling<br />
          from Nepal.
        </SectionTitle>
      </section>

      {/* Bio */}
      <section className="section container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="section-title text-text">The approach.</p>
          </div>
          <ScrollReveal delay={200}>
            <div className="body-large text-text-secondary space-y-8" style={{ maxWidth: '620px' }}>
              <p>
                Chiranjibi Khanal is a Kathmandu-based photographer and videographer
                known for a cinematic, storytelling-driven approach. With years of
                experience behind the lens, he brings both technical precision and
                artistic intuition to every project.
              </p>
              <p>
                Whether capturing the raw emotion of a wedding day, the grandeur of a
                Himalayan landscape, or the energy of a commercial shoot, his work is
                defined by a commitment to authenticity.
              </p>
              <p>
                His style blends documentary honesty with cinematic composition,
                creating images and films that feel both timeless and immediate.
                Based in Kathmandu, Nepal. Available worldwide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Demo Reel */}
      <section className="section container-wide">
        <ScrollReveal>
          <p className="label text-text-muted mb-6">Demo Reel</p>
          <div className="aspect-video bg-bg-secondary border border-border flex items-center justify-center">
            <p className="text-text-muted label">[ Demo Reel — Coming Soon ]</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Equipment */}
      <section className="section container-content border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <ScrollReveal>
              <p className="label text-text-muted mb-4">Equipment</p>
              <p className="section-title text-text">The tools.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <div className="space-y-4 text-text-secondary text-lg font-light">
              {['Sony FX3', 'Sony A7 IV', 'DJI RS4', 'DJI Mavic 3', 'Canon RF L Series'].map((item) => (
                <p key={item} className="py-3 border-b border-border last:border-0">{item}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients */}
      <section className="section container-wide border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <ScrollReveal>
              <p className="label text-text-muted mb-4">Clients</p>
              <p className="section-title text-text">Trusted by.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-x-16 gap-y-6">
              {['Brand One', 'Company', 'Studio', 'Agency', 'Production', 'Label'].map((c) => (
                <span key={c} className="text-text/60 text-lg font-light">{c}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards */}
      <section className="section container-wide border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="md:sticky md:top-32 md:self-start">
            <ScrollReveal>
              <p className="label text-text-muted mb-4">Awards</p>
              <p className="section-title text-text">Recognition.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              {[
                { year: '2025', title: 'International Photography Awards', detail: 'Portrait — Honorable Mention' },
                { year: '2024', title: 'Nepal Film Festival', detail: 'Best Short Documentary — Nominee' },
              ].map((a, i) => (
                <div key={i} className="pb-6 border-b border-border last:border-0">
                  <span className="text-text-muted text-sm font-mono">{a.year}</span>
                  <p className="text-text text-lg font-medium mt-2">{a.title}</p>
                  <p className="text-text-secondary text-sm mt-1">{a.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
