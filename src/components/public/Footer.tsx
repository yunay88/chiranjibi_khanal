import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name */}
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-text-muted hover:text-text transition-colors"
        >
          Chiranjibi Khanal
        </Link>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-text transition-colors uppercase tracking-widest"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-text transition-colors uppercase tracking-widest"
          >
            YouTube
          </a>
          <a
            href="mailto:hi@chiranjibikhanal.com"
            className="text-xs text-text-muted hover:text-text transition-colors uppercase tracking-widest"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
