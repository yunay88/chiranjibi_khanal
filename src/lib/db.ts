// Database abstraction layer — JSON file storage
// Live pages only: read projects, read content, create inquiries

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

function readJSON<T>(filename: string, fallback: T): T {
  try {
    const filePath = path.join(DATA_DIR, filename);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
    }
  } catch {}
  return fallback;
}

function writeJSON(filename: string, data: unknown) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf-8');
  } catch {}
}

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  featured: boolean;
  credits: { role: string; name: string }[];
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  date: string;
  created_at: string;
}

// ===== PROJECTS (read-only for live pages) =====

export async function getProjects(): Promise<Project[]> {
  return readJSON<Project[]>('projects.json', []);
}

// ===== SITE CONTENT (read-only for live pages) =====

export async function getSiteContent(): Promise<Record<string, unknown>> {
  const data = readJSON<Record<string, unknown>>('live-content.json', {});
  return data && typeof data === 'object' ? data : {};
}

// ===== INQUIRIES (write-only via contact form) =====

export async function createInquiry(inquiry: Omit<Inquiry, 'id' | 'created_at'>): Promise<Inquiry> {
  const inquiries = readJSON<Inquiry[]>('inquiries.json', []);
  const newInquiry: Inquiry = { id: Date.now().toString(), ...inquiry, created_at: new Date().toISOString() };
  inquiries.unshift(newInquiry);
  writeJSON('inquiries.json', inquiries);
  return newInquiry;
}
