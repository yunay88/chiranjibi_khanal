import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
      <div className="text-center max-w-md px-6">
        <p className="label text-text-muted mb-6 tracking-[0.25em]">404</p>
        <p className="section-title-large text-text leading-[0.95] mb-8">
          This page
          <br />
          doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm md:text-[15px] text-text/50 hover:text-text transition-all duration-300 tracking-wide"
        >
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
