import Link from 'next/link';

const posts = [
  {
    title: 'Behind the Lens: Capturing Nepal\'s Landscapes',
    slug: 'behind-the-lens-nepal',
    excerpt: 'A journey through some of the most breathtaking locations in Nepal and the stories behind the shots.',
    date: 'June 2025',
  },
  {
    title: 'The Art of Wedding Photography',
    slug: 'art-of-wedding-photography',
    excerpt: 'Thoughts on approaching wedding photography with authenticity, emotion, and a documentary eye.',
    date: 'April 2025',
  },
  {
    title: 'Gear I Use for Commercial Video',
    slug: 'gear-for-commercial-video',
    excerpt: 'A breakdown of the equipment I rely on for professional video production work.',
    date: 'March 2025',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Blog</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="text-xs text-text-muted uppercase tracking-widest mb-3">
                  {post.date}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-text group-hover:opacity-70 transition-opacity mb-4">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
