export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'film' | 'photography' | 'commercial' | 'music-video' | 'documentary';
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  videoUrl?: string;
  credits?: { role: string; name: string }[];
  awards?: string[];
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
}
