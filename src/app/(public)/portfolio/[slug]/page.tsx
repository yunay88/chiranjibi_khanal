import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      {/* Back link */}
      <section className="pt-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-text-muted hover:text-text transition-colors"
          >
            &larr; Back to Work
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 mt-8 mb-12">
        <div className="aspect-[16/9] bg-surface border border-border rounded-sm flex items-center justify-center">
          <p className="text-text-muted text-sm">[ Hero Image: {slug} ]</p>
        </div>
      </section>

      {/* Title + Info */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Title & Description */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-text capitalize mb-6">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-text-secondary text-base leading-relaxed">
              Project description goes here. This will be pulled from the database.
              A brief overview of the project, the approach, and the outcome.
            </p>
          </div>

          {/* Right — Meta Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-1">Type</p>
              <p className="text-text">Photography / Videography</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-1">Year</p>
              <p className="text-text">2025</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-1">Role</p>
              <p className="text-text">Photographer & Videographer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-surface flex items-center justify-center"
            >
              <p className="text-text-muted text-xs">[ Image {i} ]</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credits / Awards tabs — like Danik's */}
      <section className="border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4">Credits</p>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>Client: —</p>
                <p>Agency: —</p>
                <p>Director: Chiranjibi Khanal</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4">Awards</p>
              <p className="text-sm text-text-muted">N/A</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
