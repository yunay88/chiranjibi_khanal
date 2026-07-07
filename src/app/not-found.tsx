import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-6">
      <h1 className="font-serif text-8xl md:text-9xl text-text mb-4">404</h1>
      <p className="text-text-secondary text-base mb-10 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="border border-text px-8 py-3 text-xs uppercase tracking-widest text-text hover:bg-text hover:text-bg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
