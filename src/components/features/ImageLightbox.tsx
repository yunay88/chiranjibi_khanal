'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Props { images: string[]; currentIndex: number; isOpen: boolean; onClose: () => void; title?: string; }

export default function ImageLightbox({ images, currentIndex, isOpen, onClose, title }: Props) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => { setIndex(currentIndex); }, [currentIndex]);

  const goNext = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);
  const goPrev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bg/95 flex flex-col" onClick={onClose}>
      <div className="flex items-center justify-between px-6 md:px-16 py-5 md:py-8 z-10">
        <p className="label text-text-muted tracking-[0.2em]">{title} — {index + 1} / {images.length}</p>
        <button onClick={onClose} className="group flex items-center gap-2 text-text/40 hover:text-text transition-all duration-300">
          <span className="text-xs uppercase tracking-[0.2em]">Close</span>
          <span className="text-[10px] text-text-muted uppercase tracking-[0.15em]">[Esc]</span>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 md:px-10 relative" onClick={e => e.stopPropagation()}>
        <button onClick={e => { e.stopPropagation(); goPrev(); }} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 text-text/30 hover:text-text" aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
          <Image src={images[index]} alt={title || 'Image'} fill className="object-contain" priority sizes="100vw" />
        </div>
        <button onClick={e => { e.stopPropagation(); goNext(); }} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 text-text/30 hover:text-text" aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}
