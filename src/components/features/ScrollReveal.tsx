'use client';
import { useEffect, useRef, ReactNode } from 'react';
type AnimType = 'fadeUp'|'fadeIn'|'slideLeft'|'slideRight'|'scaleIn'|'clipReveal';
interface Props { children: ReactNode; className?: string; delay?: number; type?: AnimType; }
const animations: Record<AnimType, { start: React.CSSProperties; end: string }> = {
  fadeUp: { start: { transform: 'translateY(60px)', opacity: 0 }, end: 'transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)' },
  fadeIn: { start: { opacity: 0 }, end: 'opacity 900ms cubic-bezier(.16,1,.3,1)' },
  slideLeft: { start: { transform: 'translateX(60px)', opacity: 0 }, end: 'transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)' },
  slideRight: { start: { transform: 'translateX(-60px)', opacity: 0 }, end: 'transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)' },
  scaleIn: { start: { transform: 'scale(0.95)', opacity: 0 }, end: 'transform 1000ms cubic-bezier(.16,1,.3,1), opacity 1000ms cubic-bezier(.16,1,.3,1)' },
  clipReveal: { start: { clipPath: 'inset(0 100% 0 0)', opacity: 1 }, end: 'clip-path 1200ms cubic-bezier(.16,1,.3,1)' },
};
export default function ScrollReveal({ children, className='', delay=0, type='fadeUp' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const anim = animations[type];
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => { if (type === 'clipReveal') { el.style.clipPath = 'inset(0 0 0 0)'; } else { el.style.transform = 'translateY(0) translateX(0) scale(1)'; el.style.opacity = '1'; } }, delay); observer.unobserve(el); }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, type]);
  return <div ref={ref} className={className} style={{ ...anim.start, transition: anim.end, transitionDelay: `${delay}ms` }}>{children}</div>;
}