import ContactForm from '@/components/public/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Contact</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-8">
              Let&apos;s work together
            </h1>
            <p className="text-text-secondary text-base leading-relaxed mb-12">
              Have a project in mind? I&apos;d love to hear about it.
              Send a message and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Email</p>
                <a
                  href="mailto:hi@chiranjibikhanal.com"
                  className="text-text text-lg hover:opacity-70 transition-opacity"
                >
                  hi@chiranjibikhanal.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Phone</p>
                <a
                  href="tel:+977-XXXXXXXX"
                  className="text-text text-lg hover:opacity-70 transition-opacity"
                >
                  +977-XXXXXXXX
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Location</p>
                <p className="text-text text-lg">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
