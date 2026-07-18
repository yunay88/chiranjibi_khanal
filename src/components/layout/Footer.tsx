  'use client';

  import Link from 'next/link';
  import { useEffect, useRef } from 'react';

  export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const el = sectionRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <footer
        ref={sectionRef}
        className="bg-bg-secondary"
        style={{
          minHeight: '100vh',
          transform: 'translateY(40px)',
          opacity: 0,
          transition: 'transform 1000ms cubic-bezier(.16,1,.3,1), opacity 1000ms cubic-bezier(.16,1,.3,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Full-height hero-like email section */}
        <div className="container-wide flex-1 flex flex-col justify-center" style={{ paddingTop: 'clamp(60px, 8vw, 120px)', paddingBottom: 'clamp(40px, 5vw, 80px)' }}>
          <div className="label text-text-muted mb-6 md:mb-10" style={{ fontSize: 'clamp(10px, 0.8vw, 12px)', letterSpacing: '0.25em' }}>
            LET&apos;S WORK TOGETHER
          </div>

          {/* Huge email — same scale as hero */}
          <a
            href="mailto:hi@chiranjibikhanal.com"
            className="block text-text hover:text-text-secondary transition-all duration-500"
            style={{
              fontSize: 'clamp(42px, 10vw, 150px)',
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              wordBreak: 'break-word',
            }}
          >
            hi@chiranjibi
            <br className="md:hidden" />
            khanal.com
          </a>

          {/* Thin decorative line */}
          <div className="divider mt-16 md:mt-20" />

          {/* Contact info row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-10 md:mt-14">
            <div>
              <p className="label text-text-muted mb-2">Phone</p>
              <a
                href="tel:+977-XXXXXXXX"
                className="text-2xl md:text-3xl lg:text-4xl text-text/70 hover:text-text transition-all duration-300 font-[300] tracking-tight"
              >
                +977-XXXXXXXX
              </a>
            </div>
            <div>
              <p className="label text-text-muted mb-2">Location</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-text/70 font-[300] tracking-tight">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container-wide py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Social */}
            <div>
              <p className="label text-text-muted mb-4">Connect</p>
              <div className="flex gap-8">
                {['Instagram', 'Vimeo', 'YouTube', 'LinkedIn'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-sm md:text-[15px] text-text/50 hover:text-text transition-all duration-300"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="label text-text-muted mb-4">Navigation</p>
              <div className="flex gap-6 md:gap-8">
                {['Work', 'About', 'Films', 'Photography', 'Contact'].map((l) => (
                  <Link
                    key={l}
                    href={l === 'Work' ? '/' : `/${l.toLowerCase()}`}
                    className="text-sm md:text-[15px] text-text/50 hover:text-text transition-all duration-300"
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[10px] md:text-[11px] text-text-muted uppercase tracking-[0.15em]">
              &copy; {new Date().getFullYear()} Chiranjibi Khanal
            </p>
          </div>
        </div>
      </footer>
    );
  }
