'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="view"]');
      const isImage = target.closest('[data-cursor="view"]');

      if (isImage) {
        cursor.style.width = '70px';
        cursor.style.height = '70px';
        cursor.style.background = 'rgba(255,255,255,0.05)';
        cursor.innerHTML = '<span class="text-[10px] text-white/80 uppercase tracking-[0.15em]">View</span>';
      } else if (interactive) {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.background = 'rgba(255,255,255,0.2)';
        cursor.innerHTML = '';
      } else {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.background = 'transparent';
        cursor.innerHTML = '';
      }
    };

    const onMouseOut = () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      cursor.style.background = 'transparent';
      cursor.innerHTML = '';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full border border-white/30 pointer-events-none z-[9999] flex items-center justify-center transition-[width,height,background] duration-[250ms] ease-out mix-blend-difference"
      style={{ width: '16px', height: '16px', transform: 'translate(-4px, -4px)' }}
    />
  );
}
