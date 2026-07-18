'use client';
import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
export default function ScrollToTop({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
  }, [pathname]);
  return <>{children}</>;
}