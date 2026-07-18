import liveData from '@/data/live-content.json';

export type LiveContent = typeof liveData;

export function getContent(): LiveContent {
  return liveData as LiveContent;
}
