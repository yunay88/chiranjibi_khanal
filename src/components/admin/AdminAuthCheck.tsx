'use client';

import { useEffect, useState, ReactNode, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminAuthCheck({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const isAuthed = document.cookie.includes('admin_authed=true');
    setAuthed(isAuthed);
    if (!isAuthed && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  if (authed === null) return <div className="min-h-screen bg-bg" />;
  if (!authed && pathname !== '/admin/login') return null;

  return <>{children}</>;
}
