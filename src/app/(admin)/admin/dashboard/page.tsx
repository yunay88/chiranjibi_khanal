import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowUpRight, FileText, Image, Settings } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Projects', value: projects.length },
    { label: 'Featured', value: projects.filter((p) => p.featured).length },
    { label: 'Services', value: 4 },
    { label: 'Inquiries', value: 3 },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Dashboard</h1>
          <p className="admin-muted mt-0.5">Overview of your website.</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="admin-card">
              <p className="admin-stat">{s.value}</p>
              <p className="admin-muted mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <p className="admin-label mb-4 uppercase tracking-wider text-xs">Quick Actions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/admin/content', label: 'Content Editor', desc: 'Update text across your site', icon: FileText },
              { href: '/admin/media', label: 'Media Library', desc: 'Manage your images', icon: Image },
              { href: '/admin/settings', label: 'Settings', desc: 'Site configuration', icon: Settings },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <Link key={a.href} href={a.href}>
                  <div className="admin-card admin-card-hover cursor-pointer h-full">
                    <Icon size={20} strokeWidth={1.5} className="text-[var(--color-admin-text)] mb-4" />
                    <p className="text-sm font-semibold text-[var(--color-admin-text)] mb-1.5">{a.label}</p>
                    <p className="admin-muted text-xs">{a.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Preview Links */}
        <div>
          <p className="admin-label mb-4 uppercase tracking-wider text-xs">Preview Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/', label: 'Homepage' },
              { href: '/about', label: 'About' },
              { href: '/films', label: 'Films' },
              { href: '/photography', label: 'Photography' },
              { href: '/contact', label: 'Contact' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                target="_blank"
                className="admin-btn admin-btn-secondary"
              >
                {p.label} <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
