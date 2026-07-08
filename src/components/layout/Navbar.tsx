'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/films', label: 'Films' },
  { href: '/photography', label: 'Photography' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
          scrolled ? 'bg-bg/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ height: '88px' }}
      >
        <div className="container-wide flex h-full items-center justify-between">
          <Link href="/" className="text-[15px] font-medium text-text/90 hover:text-text transition-opacity duration-350">
            Chiranjibi Khanal
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-text/70 hover:text-text transition-opacity duration-350"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-text transition-all duration-350 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text transition-all duration-350 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text transition-all duration-350 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[48px] font-medium text-text/80 hover:text-text transition-opacity duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-16 flex gap-8">
          {['Instagram', 'Vimeo', 'YouTube'].map((s) => (
            <a key={s} href="#" className="text-sm text-text-muted hover:text-text transition-colors duration-300">
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
