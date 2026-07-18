  import { Project } from '@/types';

  export const projects: Project[] = [
    {
      id: '1',
      title: 'INDIGO',
      slug: 'INDIGO',
      category: 'film',
      year: 2025,
      location: 'Khumbu, Nepal',
      description:
        'A cinematic journey through the Khumbu Valley, capturing the raw beauty of the Himalayas and the communities that call them home.',
      coverImage: '/projects/1.jpg',
      images: ['/projects/echoes-1.jpg', '/projects/echoes-2.jpg', '/projects/echoes-3.jpg'],
      videoUrl: '/reel/echoes-everest.mp4',
      credits: [
        { role: 'Director', name: 'Chiranjibi Khanal' },
        { role: 'Cinematographer', name: 'Chiranjibi Khanal' },
      ],
      featured: true,
    },
    {
      id: '2',
      title: 'Kathmandu Stories',
      slug: 'kathmandu-stories',
      category: 'photography',
      year: 2025,
      location: 'Kathmandu, Nepal',
      description:
        'An intimate portrait series capturing the soul of the valley — its people, temples, and timeless rhythms.',
      coverImage: '/projects/DSC07952.jpg',
      images: ['/projects/kathmandu-1.jpg', '/projects/kathmandu-2.jpg'],
      featured: true,
    },
    {
      id: '3',
      title: 'The North Face: Summit',
      slug: 'the-north-face-summit',
      category: 'commercial',
      year: 2024,
      location: 'Mustang, Nepal',
      description:
        'A brand film for The North Face, shot in the high deserts of Mustang, blending adventure with cinematic visual storytelling.',
      coverImage: '/projects/DSC09396.jpeg',
      images: ['/projects/tnf-1.jpg', '/projects/tnf-2.jpg', '/projects/tnf-3.jpg'],
      videoUrl: '/reel/tnf-summit.mp4',
      credits: [
        { role: 'Director', name: 'Chiranjibi Khanal' },
        { role: 'Producer', name: 'Creative Agency' },
      ],
      featured: true,
    },
    {
      id: '4',
      title: 'Monsoon Wedding',
      slug: 'monsoon-wedding',
      category: 'film',
      year: 2024,
      location: 'Pokhara, Nepal',
      description:
        'A documentary-style wedding film that follows the emotion, color, and chaos of a traditional Nepali wedding during monsoon season.',
      coverImage: '/projects/IMG_5918.jpg',
      images: ['/projects/monsoon-1.jpg', '/projects/monsoon-2.jpg'],
      videoUrl: '/reel/monsoon.mp4',
      featured: true,
    },
    {
      id: '5',
      title: 'Portraits of Resilience',
      slug: 'portraits-of-resilience',
      category: 'photography',
      year: 2024,
      location: 'Kathmandu, Nepal',
      description:
        'A photographic series documenting artisans and craftspeople preserving traditional techniques in a rapidly modernizing Kathmandu.',
      coverImage: '/projects/resilience.jpg',
      images: ['/projects/resilience-1.jpg', '/projects/resilience-2.jpg'],
      featured: false,
    },
  ];

  export const featuredProjects = projects.filter((p) => p.featured);
