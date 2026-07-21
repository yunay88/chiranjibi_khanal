import fs from 'fs';
import path from 'path';
import liveData from '@/data/live-content.json';

export type LiveContent = typeof liveData;

let cachedContent: LiveContent | null = null;

export function getContent(): LiveContent {
  if (cachedContent) return cachedContent;
  try {
    const filePath = path.join(process.cwd(), 'src/data', 'live-content.json');
    if (fs.existsSync(filePath)) {
      cachedContent = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as LiveContent;
      return cachedContent;
    }
  } catch {}
  return liveData as LiveContent;
}

export function clearCache() {
  cachedContent = null;
}
