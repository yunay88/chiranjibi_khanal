export interface SiteContent {
  hero: { title: string; subtitle: string; videoUrl: string; posterUrl: string };
  intro: { label: string; heading: string; body: string };
  quote: { text: string };
  services: {
    label: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  clients: { label: string; heading: string; names: string[] };
  about: {
    label: string;
    heading: string;
    body: string[];
    demoReelUrl: string;
    equipment: string[];
    clients: string[];
    awards: { year: string; title: string; detail: string }[];
  };
  contact: { label: string; heading: string; email: string; phone: string; location: string };
  footer: { email: string; phone: string; social: { name: string; url: string }[] };
  seo: { homepageTitle: string; homepageDesc: string };
}

export const defaultContent: SiteContent = {
  hero: {
    title: 'Stories\nThat\nMove.',
    subtitle: 'Cinematic storytelling by Chiranjibi Khanal — Kathmandu, Nepal.',
    videoUrl: '/hero-video.mp4',
    posterUrl: '/hero-poster.jpg',
  },
  intro: {
    label: 'Introduction',
    heading: 'Creating stories\nthrough movement,\nlight,\nand emotion.',
    body: 'Chiranjibi Khanal is a photographer and filmmaker based in Kathmandu, Nepal, working at the intersection of documentary honesty and cinematic composition.',
  },
  quote: { text: '"Every frame\nshould feel\ntimeless."' },
  services: {
    label: 'Services',
    heading: 'What I do.',
    items: [
      { title: 'Film', description: 'Cinematic films for brands, documentaries, and music videos.' },
      { title: 'Commercial', description: 'High-production commercial content for agencies and brands.' },
      { title: 'Wedding', description: 'Authentic, emotionally-driven wedding films and photography.' },
      { title: 'Portrait', description: 'Editorial portraits and personal branding sessions.' },
    ],
  },
  clients: {
    label: 'Clients',
    heading: 'Trusted by.',
    names: ['Brand One', 'Company Name', 'Creative Agency', 'Studio', 'Production House', 'Label'],
  },
  about: {
    label: 'About',
    heading: 'Cinematic\nstorytelling\nfrom Nepal.',
    body: [
      'Chiranjibi Khanal is a Kathmandu-based photographer and videographer known for a cinematic, storytelling-driven approach.',
      'His style blends documentary honesty with cinematic composition, creating images and films that feel both timeless and immediate.',
    ],
    demoReelUrl: '',
    equipment: ['Sony FX3', 'Sony A7 IV', 'DJI RS4', 'DJI Mavic 3', 'Canon RF L Series'],
    clients: ['Brand One', 'Company', 'Studio', 'Agency', 'Production', 'Label'],
    awards: [
      { year: '2025', title: 'International Photography Awards', detail: 'Portrait — Honorable Mention' },
      { year: '2024', title: 'Nepal Film Festival', detail: 'Best Short Documentary — Nominee' },
    ],
  },
  contact: {
    label: 'Contact',
    heading: "Let's work\ntogether.",
    email: 'hi@chiranjibikhanal.com',
    phone: '+977-XXXXXXXX',
    location: 'Kathmandu, Nepal',
  },
  footer: {
    email: 'hi@chiranjibikhanal.com',
    phone: '+977-XXXXXXXX',
    social: [
      { name: 'Instagram', url: '#' },
      { name: 'Vimeo', url: '#' },
      { name: 'YouTube', url: '#' },
      { name: 'LinkedIn', url: '#' },
    ],
  },
  seo: {
    homepageTitle: 'Chiranjibi Khanal — Cinematic Storytelling',
    homepageDesc: 'Cinematic photography and videography by Chiranjibi Khanal. Based in Kathmandu, Nepal.',
  },
};
