import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';

const services = [
  { title: 'Film', desc: 'Cinematic films for brands, documentaries, music videos, and narrative projects. From concept through post-production.' },
  { title: 'Commercial', desc: 'High-production-value commercial content for agencies and global brands.' },
  { title: 'Wedding', desc: 'Authentic, emotionally-driven wedding films and editorial photography.' },
  { title: 'Portrait', desc: 'Editorial portraits and personal branding sessions with a cinematic eye.' },
  { title: 'Post-Production', desc: 'Color grading, sound design, editing, and finishing for any project.' },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-36 section container-wide">
      <SectionTitle as="h1" label="Services" delay={0}>
        What I do.
      </SectionTitle>

      <div className="mt-20 md:mt-32 space-y-0">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <div className="group flex items-start md:items-center justify-between py-10 md:py-12 border-t border-border cursor-default">
              <p className="text-text" style={{ fontSize: 'clamp(36px, 4.5vw, 80px)', fontWeight: 500, lineHeight: 1.1 }}>
                {s.title}
              </p>
              <div className="hidden md:block max-w-[400px]">
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
              <span className="text-text-muted group-hover:text-text transition-all duration-300 text-3xl">→</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile descriptions */}
      <div className="md:hidden mt-12 space-y-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <p className="text-text-secondary text-sm leading-relaxed py-4 border-t border-border">{s.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
