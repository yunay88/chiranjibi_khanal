import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <section className="pt-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-widest text-text-muted hover:text-text transition-colors"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-32">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
          June 2025
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-text leading-tight mb-8 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>

        <div className="prose prose-invert prose-sm md:prose-base max-w-none text-text-secondary leading-relaxed space-y-4">
          <p>
            This is a placeholder for the blog article content. In the final version,
            this will be rendered from a rich text editor or Markdown content stored
            in the database.
          </p>
          <p>
            Blog posts will be manageable through the admin panel, with the ability to
            add images, headings, and formatted text.
          </p>
        </div>
      </article>
    </>
  );
}
