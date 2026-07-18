/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '', slug: '', category: 'photography', year: '2025',
    location: '', description: '', coverImage: '',
    images: ['', '', ''], featured: true,
    credits: [{ role: '', name: '' }],
  });

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((projects) => {
        const project = projects.find((p: any) => p.id === id);
        if (project) {
          setForm({
            title: project.title || '',
            slug: project.slug || '',
            category: project.category || 'photography',
            year: (project.year || '').toString(),
            location: project.location || '',
            description: project.description || '',
            coverImage: project.coverImage || '',
            images: project.images?.length ? project.images : ['', '', ''],
            featured: project.featured ?? true,
            credits: project.credits?.length ? project.credits : [{ role: '', name: '' }],
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, id, year: parseInt(form.year) || 2025 }),
      });
      router.push('/admin/portfolio');
    } catch {}
    setSaving(false);
  };

  const inpCls = 'w-full h-11 px-4 text-sm rounded-xl border bg-transparent text-text placeholder:text-text-muted/30 focus:outline-none transition-all duration-200 border-border hover:border-text/40 focus:border-text/60';

  if (loading) {
    return (
      <div className="flex flex-col h-screen">
        <div className="admin-topbar"><h1 className="admin-heading">Edit Project</h1></div>
        <div className="flex-1 p-6 lg:p-8"><div className="admin-card h-96 animate-pulse" /></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="admin-topbar">
        <div className="flex items-center gap-4">
          <Link href="/admin/portfolio" className="text-text-muted hover:text-text transition-colors">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </Link>
          <div>
            <h1 className="admin-heading">Edit Project</h1>
            <p className="admin-muted mt-0.5">{form.title}</p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saving} className="admin-btn admin-btn-primary">
          <Save size={16} strokeWidth={1.5} /> {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto admin-scroll p-6 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="admin-card space-y-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Basic Information</p>
            <div className="space-y-1.5">
              <label className="admin-label">Title</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inpCls} />
            </div>
            <div className="space-y-1.5">
              <label className="admin-label">Slug</label>
              <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className={inpCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="admin-label">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inpCls}>
                  <option value="photography">Photography</option>
                  <option value="film">Film</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="admin-label">Year</label>
                <input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className={inpCls} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="admin-label">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inpCls} />
            </div>
            <div className="space-y-1.5">
              <label className="admin-label">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full p-4 text-sm rounded-xl border border-border bg-transparent text-text resize-y min-h-[100px] focus:outline-none focus:border-text/60" rows={4} />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="w-4 h-4" id="featured" />
              <label htmlFor="featured" className="admin-label cursor-pointer">Featured on homepage</label>
            </div>
          </div>

          <div className="admin-card space-y-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Images</p>
            <div className="space-y-1.5">
              <label className="admin-label">Cover Image URL</label>
              <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className={inpCls} />
            </div>
            {form.images.map((img, i) => (
              <div key={i} className="space-y-1.5">
                <label className="admin-label">Image {i + 1}</label>
                <input value={img} onChange={(e) => { const imgs = [...form.images]; imgs[i] = e.target.value; setForm({ ...form, images: imgs }); }} className={inpCls} />
              </div>
            ))}
          </div>

          <div className="admin-card space-y-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Credits</p>
            {form.credits.map((credit, i) => (
              <div key={i} className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="admin-label">Role</label>
                  <input value={credit.role} onChange={(e) => { const c = [...form.credits]; c[i] = { ...c[i], role: e.target.value }; setForm({ ...form, credits: c }); }} className={inpCls} />
                </div>
                <div className="space-y-1.5">
                  <label className="admin-label">Name</label>
                  <input value={credit.name} onChange={(e) => { const c = [...form.credits]; c[i] = { ...c[i], name: e.target.value }; setForm({ ...form, credits: c }); }} className={inpCls} />
                </div>
              </div>
            ))}
            <button onClick={() => setForm({ ...form, credits: [...form.credits, { role: '', name: '' }] })} className="text-xs text-text-muted hover:text-text transition-colors">
              + Add credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
