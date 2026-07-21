'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface FooterProps {
  email?: string;
  phone?: string;
  social?: { name: string; url: string }[];
}

export default function Footer({
  email = 'hi@chiranjibikhanal.com',
  phone = '+977-XXXXXXXX',
  social = [{ name: 'Instagram', url: '#' }, { name: 'Vimeo', url: '#' }, { name: 'YouTube', url: '#' }, { name: 'LinkedIn', url: '#' }],
}: FooterProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-bg-secondary" style={{
      minHeight: '100vh', transform: 'translateY(40px)', opacity: 0,
      transition: 'transform 1000ms cubic-bezier(.16,1,.3,1), opacity 1000ms cubic-bezier(.16,1,.3,1)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div className="container-wide flex-1 flex flex-col justify-center py-16 md:py-20">
        <div className="label text-text-muted mb-6 md:mb-8 tracking-[0.25em]">Let&apos;s work together</div>
        <a href={`mailto:${email}`} className="block text-text hover:text-text-secondary transition-all duration-500"
          style={{ fontSize: 'clamp(36px, 8vw, 120px)', fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.04em', wordBreak: 'break-word' }}>
          {email}
        </a>
        <div className="divider mt-12 md:mt-16" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8 md:mt-10">
          <div>
            <p className="label text-text-muted mb-2 tracking-[0.2em]">Phone</p>
            <a href={`tel:${phone}`} className="text-xl md:text-2xl text-text/70 hover:text-text transition-all duration-300 font-light">{phone}</a>
          </div>
          <div>
            <p className="label text-text-muted mb-2 tracking-[0.2em]">Location</p>
            <p className="text-xl md:text-2xl text-text/70 font-light">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-6 md:py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="label text-text-muted mb-3 tracking-[0.2em]">Connect</p>
            <div className="flex gap-5 md:gap-6">
              {social.map((s) => (
                <a key={s.name} href={s.url} className="text-sm text-text/50 hover:text-text transition-all duration-300">{s.name}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="label text-text-muted mb-3 tracking-[0.2em]">Navigation</p>
            <div className="flex gap-5 md:gap-6">
              {['Work', 'About', 'Films', 'Photography', 'Contact'].map((l) => (
                <Link key={l} href={l === 'Work' ? '/' : `/${l.toLowerCase()}`} className="text-sm text-text/50 hover:text-text transition-all duration-300">{l}</Link>
              ))}
            </div>
          </div>
          <p className="text-[10px] md:text-[11px] text-text-muted uppercase tracking-[0.15em]">&copy; {new Date().getFullYear()} Chiranjibi Khanal</p>
        </div>
      </div>
    </footer>
  );
}
