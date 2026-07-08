'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  label?: string;
  align?: 'left' | 'center' | 'right';
  delay?: number;
}

export default function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
  label,
  align = 'left',
  delay = 0,
}: Props) {
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
      className={`${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} ${className}`}
      style={{
        transform: 'translateY(40px)',
        opacity: 0,
        transition: `transform 900ms cubic-bezier(.16,1,.3,1), opacity 900ms cubic-bezier(.16,1,.3,1)`,
      }}
    >
      {label && <p className="label mb-4 md:mb-6">{label}</p>}
      <Tag className="section-title-large text-text">{children}</Tag>
    </div>
  );
}
