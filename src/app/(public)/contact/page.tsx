import SectionTitle from '@/components/features/SectionTitle';
import ScrollReveal from '@/components/features/ScrollReveal';
import ContactForm from '@/components/features/ContactForm';

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-36 section container-content">
      <SectionTitle as="h1" label="Contact" delay={0}>
        Let&apos;s work<br />
        together.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-20 md:mt-32">
        <div>
          <ScrollReveal delay={100}>
            <div className="space-y-12">
              <div>
                <p className="label text-text-muted mb-4">Email</p>
                <a
                  href="mailto:hi@chiranjibikhanal.com"
                  className="text-text text-2xl md:text-3xl font-light hover:text-text-secondary transition-all duration-300"
                >
                  hi@chiranjibikhanal.com
                </a>
              </div>
              <div>
                <p className="label text-text-muted mb-4">Phone</p>
                <a
                  href="tel:+977-XXXXXXXX"
                  className="text-text text-2xl md:text-3xl font-light hover:text-text-secondary transition-all duration-300"
                >
                  +977-XXXXXXXX
                </a>
              </div>
              <div>
                <p className="label text-text-muted mb-4">Location</p>
                <p className="text-text text-2xl md:text-3xl font-light">Kathmandu, Nepal</p>
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
