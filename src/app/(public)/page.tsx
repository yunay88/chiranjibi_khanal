import HeroVideo from '@/components/public/HeroVideo';
import PortfolioGrid from '@/components/public/PortfolioGrid';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideo />

      {/* Bio Section — "Behind The Work" */}
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <p className="section-label">Behind The Work</p>
        <h2 className="font-serif text-3xl md:text-4xl text-text leading-snug mb-8">
          Chiranjibi Khanal is a{' '}
          <span className="italic">Nepal-based photographer and videographer</span>{' '}
          who brings a cinematic eye to every frame.
        </h2>
        <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed">
          <p>
            With a passion for visual storytelling, Chiranjibi captures everything
            from intimate portraits to sweeping landscapes, from wedding celebrations
            to commercial projects. Each photograph and film is crafted with attention
            to light, composition, and emotion.
          </p>
          <p>
            Based in Kathmandu, he works with clients across Nepal and
            internationally, bringing the same dedication to every project
            regardless of scale.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="section-label">Selected Work</p>
        </div>
        <PortfolioGrid />
      </section>
    </>
  );
}
