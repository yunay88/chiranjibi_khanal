/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Briefcase } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: number;
  featured: boolean;
  coverImage: string;
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { loadProjects(); }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      loadProjects();
    } catch {}
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Portfolio</h1>
          <p className="admin-muted mt-0.5">{projects.length} project{projects.length !== 1 ? 's' : ''}</p>
        </div>
        <Link href="/admin/portfolio/new" className="admin-btn admin-btn-primary">
          <Plus size={16} strokeWidth={1.5} /> New Project
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="admin-card h-20 animate-pulse">
                <div className="h-4 bg-[var(--color-admin-border)] rounded w-1/3 mb-3" />
                <div className="h-3 bg-[var(--color-admin-border)] rounded w-1/4" />
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="admin-card flex flex-col items-center justify-center py-20 text-center">
            <div className="admin-empty-icon">
              <Briefcase size={22} strokeWidth={1.5} className="text-[var(--color-admin-text-muted)]" />
            </div>
            <p className="text-base font-semibold text-[var(--color-admin-text)] mb-1">No projects yet</p>
            <p className="admin-muted mb-6">Create your first portfolio project.</p>
            <Link href="/admin/portfolio/new" className="admin-btn admin-btn-primary">
              <Plus size={16} strokeWidth={1.5} /> New Project
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <div key={project.id} className="admin-card flex items-center gap-5">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg bg-[var(--color-admin-sidebar)] border border-[var(--color-admin-border)] flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.coverImage} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--color-admin-text)] truncate">{project.title}</p>
                  <p className="text-xs text-[var(--color-admin-text-muted)] mt-0.5">
                    {project.category} — {project.year}
                    {project.featured && <span className="ml-2 admin-badge text-[9px]">Featured</span>}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    href={`/admin/portfolio/${project.id}/edit`}
                    className="admin-btn admin-btn-ghost"
                  >
                    <Edit2 size={14} strokeWidth={1.5} /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id, project.title)}
                    className="admin-btn admin-btn-ghost text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
