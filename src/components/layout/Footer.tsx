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
      className="bg-bg-secondary border-t border-border flex flex-col justify-between"
      style={{
        minHeight: '90vh',
        transform: 'translateY(40px)',
        opacity: 0,
        transition: 'transform 1000ms cubic-bezier(.16,1,.3,1), opacity 1000ms cubic-bezier(.16,1,.3,1)',
      }}
    >
      <div className="container-wide flex-1 flex flex-col justify-center py-24">
        <p className="label mb-8">Let&apos;s work together</p>

        <a
          href="mailto:hi@chiranjibikhanal.com"
          className="block text-text hover:text-text-secondary transition-all duration-500"
          style={{
            fontSize: 'clamp(42px, 6vw, 110px)',
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            wordBreak: 'break-word',
          }}
        >
          hi@chiranjibi<br />khanal.com
        </a>

        <div className="mt-16 md:mt-24">
          <a
            href="tel:+977-XXXXXXXX"
            className="text-[clamp(24px,2.5vw,42px)] text-text/70 hover:text-text transition-all duration-300 font-light"
          >
            +977-XXXXXXXX
          </a>
        </div>

        <div className="flex flex-wrap gap-12 mt-auto pt-24">
          <div>
            <p className="label mb-4">Social</p>
            <div className="flex flex-wrap gap-6">
              {['Instagram', 'Vimeo', 'YouTube', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="text-text/60 hover:text-text transition-opacity duration-300 text-[15px]">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="label mb-4">Navigation</p>
            <div className="flex flex-wrap gap-6">
              {['Work', 'About', 'Films', 'Photography', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Work' ? '/' : `/${link.toLowerCase()}`}
                  className="text-text/60 hover:text-text transition-opacity duration-300 text-[15px]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-8 border-t border-border">
        <p className="text-[11px] text-text-muted uppercase tracking-[0.15em]">
          &copy; {new Date().getFullYear()} Chiranjibi Khanal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
