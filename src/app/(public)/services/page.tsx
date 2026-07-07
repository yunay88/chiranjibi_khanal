const services = [
  {
    title: 'Photography',
    description:
      'Portraits, weddings, events, commercial shoots, and fine art photography. Every session is approached with an eye for light, composition, and authentic emotion.',
    items: ['Portrait Photography', 'Wedding & Events', 'Commercial', 'Fine Art'],
  },
  {
    title: 'Videography',
    description:
      'Cinematic films for weddings, brand stories, music videos, and documentaries. From concept to final cut, each project is crafted with narrative intent.',
    items: ['Wedding Films', 'Brand Stories', 'Music Videos', 'Documentaries'],
  },
  {
    title: 'Post-Production',
    description:
      'Professional editing, color grading, and retouching services. Bringing out the best in every frame through meticulous attention to detail.',
    items: ['Color Grading', 'Photo Retouching', 'Video Editing', 'Sound Design'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Services</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div key={service.title} className="bg-bg p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl text-text mb-5">
                {service.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-text-muted text-sm flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
