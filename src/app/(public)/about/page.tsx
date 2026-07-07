export default function AboutPage() {
  return (
    <>
      {/* Hero / Title */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">About</p>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-10">
          Chiranjibi Khanal is a{' '}
          <span className="italic">Kathmandu-based photographer and videographer</span>{' '}
          known for a cinematic, storytelling-driven approach.
        </h1>
        <div className="space-y-5 text-text-secondary text-base md:text-lg leading-relaxed">
          <p>
            With years of experience behind the lens, Chiranjibi brings both
            technical precision and artistic intuition to every project. Whether
            capturing the raw emotion of a wedding day, the grandeur of a Himalayan
            landscape, or the energy of a commercial shoot, his work is defined by
            a commitment to authenticity.
          </p>
          <p>
            His style blends documentary honesty with cinematic composition,
            creating images and films that feel both timeless and immediate.
            He believes the best stories are told through light, texture, and
            genuine human connection.
          </p>
        </div>
      </section>

      {/* Demo Reel Placeholder */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <p className="section-label mb-6">Demo Reel</p>
        <div className="aspect-video bg-surface rounded-sm flex items-center justify-center border border-border">
          <p className="text-text-muted text-sm">[ Demo Reel Video — Coming Soon ]</p>
        </div>
      </section>

      {/* Clients */}
      <section className="border-t border-border py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-10">Clients</p>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five'].map(
              (client) => (
                <span
                  key={client}
                  className="text-text-secondary text-sm uppercase tracking-widest"
                >
                  {client}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-border py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-10">Awards</p>
          <div className="space-y-6">
            {[
              { event: 'International Photography Awards', year: '2025', category: 'Portrait — Honorable Mention' },
              { event: 'Nepal Film Festival', year: '2024', category: 'Best Short Documentary — Nominee' },
            ].map((award, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 pb-6 border-b border-border last:border-0">
                <span className="text-text-muted text-sm font-mono w-16">{award.year}</span>
                <span className="text-text flex-1">{award.event}</span>
                <span className="text-text-muted text-sm">{award.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
