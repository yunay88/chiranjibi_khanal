'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0, y = 60 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${y}px)`,
        opacity: 0,
        transition: `transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)`,
      }}
    >
      {children}
    </div>
  );
}
