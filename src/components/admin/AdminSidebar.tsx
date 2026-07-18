'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Image, MessageSquare, Settings, Briefcase, LogOut, ExternalLink } from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/content', label: 'Content', icon: FileText },
  { href: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/admin/media', label: 'Media', icon: Image },
  { href: '/admin/inquiries', label: 'Inquiries', icon: MessageSquare },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'admin_authed=; max-age=0; path=/';
    router.push('/admin/login');
  };

  return (
    <aside className="admin-sidebar">
      <div className="px-5 py-6 border-b border-[var(--color-admin-border)]">
        <Link href="/admin/dashboard" onClick={onClose} className="text-sm font-semibold text-[var(--color-admin-text)] tracking-tight">
          Chiranjibi Khanal
        </Link>
        <p className="text-xs text-[var(--color-admin-text-muted)] mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto admin-scroll">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`admin-sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} strokeWidth={1.5} className="flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-[var(--color-admin-border)] space-y-0.5">
        <Link href="/" className="admin-sidebar-link text-xs">
          <ExternalLink size={14} strokeWidth={1.5} />
          <span>View site</span>
        </Link>
        <button onClick={handleLogout} className="admin-sidebar-link text-xs w-full text-left">
          <LogOut size={14} strokeWidth={1.5} />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
