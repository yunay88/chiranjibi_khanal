import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-6">
      <p className="label text-text-muted mb-6">404</p>
      <p className="section-title text-text mb-10 text-center max-w-md">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-[15px] text-text/70 hover:text-text transition-all duration-300"
      >
        <span>←</span> Back to Home
      </Link>
    </div>
  );
}
