/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { defaultContent, SiteContent } from '@/data/site-content';
import { Save, RotateCcw } from 'lucide-react';

const empty: SiteContent = JSON.parse(JSON.stringify(defaultContent));

const tabs = [
  { id: 'hero', label: 'Hero' }, { id: 'intro', label: 'Introduction' },
  { id: 'services', label: 'Services' }, { id: 'clients', label: 'Clients' },
  { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' },
  { id: 'footer', label: 'Footer' }, { id: 'seo', label: 'SEO' },
];

const inputCls = 'w-full h-11 px-4 text-sm rounded-xl border bg-transparent text-text placeholder:text-text-muted/30 focus:outline-none transition-all duration-200 border-border hover:border-text/40 focus:border-text/60';
const areaCls = 'w-full p-4 text-sm rounded-xl border bg-transparent text-text placeholder:text-text-muted/30 focus:outline-none transition-all duration-200 resize-y min-h-[120px] border-border hover:border-text/40 focus:border-text/60';

export default function ContentEditorPage() {
  const [content, setContent] = useState<SiteContent>(empty);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [dirty, setDirty] = useState(false);

  const touch = () => { setDirty(true); setSaved(false); };
  const update = (path: string, value: any) => {
    touch();
    const c = JSON.parse(JSON.stringify(content));
    const keys = path.split('.');
    let obj: any = c;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length - 1]] = value;
    setContent(c);
  };
  const updateArr = (path: string, idx: number, field: string, value: string) => {
    touch();
    const c = JSON.parse(JSON.stringify(content));
    const keys = path.split('.');
    let obj: any = c;
    for (let i = 0; i < keys.length; i++) obj = obj[keys[i]];
    obj[idx][field] = value;
    setContent(c);
  };

  const handleSave = async () => {
    try {
      const payload = JSON.parse(JSON.stringify(content));
      await fetch('/api/content', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } catch {}
    setSaved(true); setDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'hero': return (
        <Section title="Hero Section" desc="Customize the hero section.">
          <Field label="Hero Title" hint="Use \n for breaks"><textarea value={content.hero.title} onChange={e => update('hero.title', e.target.value)} className={areaCls} rows={4} /></Field>
          <Field label="Subtitle"><input value={content.hero.subtitle} onChange={e => update('hero.subtitle', e.target.value)} className={inputCls} /></Field>
          <Field label="Video URL"><input value={content.hero.videoUrl} onChange={e => update('hero.videoUrl', e.target.value)} className={inputCls} /></Field>
          <Field label="Poster URL"><input value={content.hero.posterUrl} onChange={e => update('hero.posterUrl', e.target.value)} className={inputCls} /></Field>
        </Section>
      );
      case 'intro': return (
        <Section title="Introduction" desc="The section below your hero.">
          <Field label="Label"><input value={content.intro.label} onChange={e => update('intro.label', e.target.value)} className={inputCls} /></Field>
          <Field label="Heading" hint="Use \n for breaks"><textarea value={content.intro.heading} onChange={e => update('intro.heading', e.target.value)} className={areaCls} rows={4} /></Field>
          <Field label="Body"><textarea value={content.intro.body} onChange={e => update('intro.body', e.target.value)} className={areaCls} rows={5} /></Field>
        </Section>
      );
      case 'services': return (
        <Section title="Services" desc="Your services.">
          <Field label="Heading"><input value={content.services.heading} onChange={e => update('services.heading', e.target.value)} className={inputCls} /></Field>
          {content.services.items.map((item: any, i: number) => (
            <div key={i} className="admin-card space-y-4">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Service {i + 1}</p>
              <Field label="Title"><input value={item.title} onChange={e => updateArr('services.items', i, 'title', e.target.value)} className={inputCls} /></Field>
              <Field label="Description"><textarea value={item.description} onChange={e => updateArr('services.items', i, 'description', e.target.value)} className={areaCls} rows={2} /></Field>
            </div>
          ))}
        </Section>
      );
      case 'clients': return (
        <Section title="Clients" desc="Client names.">
          <Field label="Heading"><input value={content.clients.heading} onChange={e => update('clients.heading', e.target.value)} className={inputCls} /></Field>
          <Field label="Names" hint="Comma separated"><input value={content.clients.names.join(', ')} onChange={e => update('clients.names', e.target.value.split(',').map((s: string) => s.trim()))} className={inputCls} /></Field>
        </Section>
      );
      case 'about': return (
        <Section title="About Page" desc="Your biography.">
          <Field label="Heading"><textarea value={content.about.heading} onChange={e => update('about.heading', e.target.value)} className={areaCls} rows={3} /></Field>
          {content.about.body.map((p: string, i: number) => (
            <Field key={i} label={`Paragraph ${i + 1}`}><textarea value={p} onChange={e => { const b = [...content.about.body]; b[i] = e.target.value; update('about.body', b); }} className={areaCls} rows={4} /></Field>
          ))}
          <Field label="Equipment" hint="Comma separated"><input value={content.about.equipment.join(', ')} onChange={e => update('about.equipment', e.target.value.split(',').map((s: string) => s.trim()))} className={inputCls} /></Field>
        </Section>
      );
      case 'contact': return (
        <Section title="Contact" desc="Contact info.">
          <Field label="Email"><input value={content.contact.email} onChange={e => update('contact.email', e.target.value)} className={inputCls} /></Field>
          <Field label="Phone"><input value={content.contact.phone} onChange={e => update('contact.phone', e.target.value)} className={inputCls} /></Field>
          <Field label="Location"><input value={content.contact.location} onChange={e => update('contact.location', e.target.value)} className={inputCls} /></Field>
        </Section>
      );
      case 'footer': return (
        <Section title="Footer" desc="Footer links.">
          <Field label="Email"><input value={content.footer.email} onChange={e => update('footer.email', e.target.value)} className={inputCls} /></Field>
          <Field label="Phone"><input value={content.footer.phone} onChange={e => update('footer.phone', e.target.value)} className={inputCls} /></Field>
          <div className="border-t border-border pt-6">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Social Links</p>
            {content.footer.social.map((s: any, i: number) => (
              <div key={i} className="grid grid-cols-2 gap-4 mb-4">
                <Field label="Platform"><input value={s.name} onChange={e => updateArr('footer.social', i, 'name', e.target.value)} className={inputCls} /></Field>
                <Field label="URL"><input value={s.url} onChange={e => updateArr('footer.social', i, 'url', e.target.value)} className={inputCls} /></Field>
              </div>
            ))}
          </div>
        </Section>
      );
      case 'seo': return (
        <Section title="SEO" desc="Search optimization.">
          <Field label="Title"><input value={content.seo.homepageTitle} onChange={e => update('seo.homepageTitle', e.target.value)} className={inputCls} /></Field>
          <Field label="Description"><textarea value={content.seo.homepageDesc} onChange={e => update('seo.homepageDesc', e.target.value)} className={areaCls} rows={3} /></Field>
        </Section>
      );
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="admin-topbar">
        <div>
          <h1 className="admin-heading">Content Editor</h1>
          <p className="admin-muted mt-0.5">{dirty ? 'Unsaved changes' : 'All saved'}</p>
        </div>
        <button onClick={handleSave} disabled={!dirty && !saved}
          className={`admin-btn ${saved ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'admin-btn-primary'}`}>
          <Save size={16} strokeWidth={1.5} /> {saved ? 'Saved' : dirty ? 'Save' : 'Save'}
        </button>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex flex-col w-48 lg:w-52 border-r border-border bg-bg-secondary flex-shrink-0">
          <div className="p-4 space-y-0.5 overflow-y-auto admin-scroll">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 pb-3">Sections</p>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`admin-sidebar-link w-full text-left ${activeTab === t.id ? 'active' : ''}`}>{t.label}</button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 admin-scroll">
          <div className="max-w-2xl mx-auto space-y-8">{renderContent()}</div>
        </div>
      </div>
      {dirty && (
        <div className="h-14 bg-surface border-t border-border flex items-center justify-between px-6 flex-shrink-0 admin-slide-up">
          <p className="text-sm text-text-muted flex items-center gap-2"><RotateCcw size={14} strokeWidth={1.5} /> Unsaved</p>
          <div className="flex items-center gap-2">
            <button onClick={() => { setContent(JSON.parse(JSON.stringify(empty))); setDirty(false); }} className="admin-btn admin-btn-secondary text-xs">Discard</button>
            <button onClick={handleSave} className="admin-btn admin-btn-primary text-xs"><Save size={14} strokeWidth={1.5} /> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return <div className="space-y-5"><div className="mb-4"><h2 className="text-base font-semibold text-text">{title}</h2>{desc && <p className="text-sm text-text-muted mt-0.5">{desc}</p>}</div>{children}</div>;
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><label className="text-sm font-medium text-text-secondary">{label}</label>{children}{hint && <p className="text-xs text-text-muted">{hint}</p>}</div>;
}
