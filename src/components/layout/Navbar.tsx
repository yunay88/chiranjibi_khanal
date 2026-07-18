'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  // { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/films', label: 'Films' },
  { href: '/photography', label: 'Photography' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const gradientStyle = {
    backgroundImage: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.12) 40%, #ffffff 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  } as const;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg' : 'bg-transparent'
        }`}
        style={{ height: 'clamp(64px, 6vw, 88px)' }}
      >
        <div className="container-wide flex h-full items-center justify-between">
          <Link href="/" className="text-sm md:text-[21px] font-medium transition-all duration-500">
            <span style={scrolled ? { color: '#F5F5F5' } : gradientStyle}>
              Chiranjibi Khanal
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map(l => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm md:text-[15px] font-medium transition-all duration-500 relative ${
                    scrolled ? (active ? 'text-text' : 'text-text/50') : ''
                  }`}
                >
                  <span style={scrolled ? undefined : gradientStyle}>
                    {l.label}
                  </span>
                  {active && scrolled && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-text/30" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ${
              scrolled || menuOpen ? 'bg-text' : 'bg-white/50'
            } ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ${
              scrolled || menuOpen ? 'bg-text' : 'bg-white/50'
            } ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ${
              scrolled || menuOpen ? 'bg-text' : 'bg-white/50'
            } ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 md:gap-8">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl md:text-[48px] font-medium transition-all duration-300 ${
                isActive(l.href) ? 'text-text' : 'text-text/50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-12 md:bottom-16 flex gap-8">
          {['Instagram','Vimeo','YouTube'].map(s => (
            <a key={s} href="#" className="text-xs md:text-sm text-text-muted hover:text-text transition-colors duration-300">{s}</a>
          ))}
        </div>
      </div>
    </>
  );
}
