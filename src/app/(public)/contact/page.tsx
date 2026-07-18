export const dynamic = "force-dynamic";

import ScrollReveal from '@/components/features/ScrollReveal';
import ContactForm from '@/components/features/ContactForm';
import { getContent } from '@/lib/content';

export default function ContactPage() {
  const content = getContent();

  return (
    <section className="min-h-screen pt-32 md:pt-40 section container-content">
      <ScrollReveal type="fadeIn" delay={0}>
        <p className="label text-text-muted mb-6 tracking-[0.25em]">{content.contact.label}</p>
        <h1 className="section-title-large text-text mb-20 md:mb-32">
          {content.contact.heading.split('\n').map((line: string, i: number) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <ScrollReveal delay={100}>
            <div className="space-y-12">
              <div>
                <p className="label text-text-muted mb-4 tracking-[0.2em]">Email</p>
                <a href={`mailto:${content.contact.email}`} className="text-text text-2xl md:text-3xl font-light hover:text-text-secondary transition-all duration-300">{content.contact.email}</a>
              </div>
              <div>
                <p className="label text-text-muted mb-4 tracking-[0.2em]">Phone</p>
                <a href={`tel:${content.contact.phone}`} className="text-text text-2xl md:text-3xl font-light hover:text-text-secondary transition-all duration-300">{content.contact.phone}</a>
              </div>
              <div>
                <p className="label text-text-muted mb-4 tracking-[0.2em]">Location</p>
                <p className="text-text text-2xl md:text-3xl font-light">{content.contact.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div>
          <ScrollReveal delay={200}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
